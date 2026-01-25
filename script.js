// State Management
let appState = {
    totalBudget: 0,
    days: 30,
    savingsGoal: 0,
    fixedCategories: [
        { id: 'food', name: 'أكل', percentage: 30, icon: 'fa-utensils' },
        { id: 'transport', name: 'مواصلات', percentage: 20, icon: 'fa-bus' },
        { id: 'bills', name: 'فواتير', percentage: 25, icon: 'fa-file-invoice-dollar' },
        { id: 'shopping', name: 'تسوق', percentage: 15, icon: 'fa-shopping-bag' },
        { id: 'entertainment', name: 'ترفيه', percentage: 10, icon: 'fa-gamepad' }
    ],
    customCategories: [],
    students: []
};

// DOM Elements
const totalBudgetInput = document.getElementById('total-budget');
const budgetDaysInput = document.getElementById('budget-days');
const savingsGoalInput = document.getElementById('savings-goal');
const saveBudgetBtn = document.getElementById('save-budget');

const availableBudgetText = document.getElementById('available-budget');
const displaySavingsText = document.getElementById('display-savings');
const totalDailyLimitText = document.getElementById('total-daily-limit');
const savingsPercentageText = document.getElementById('savings-percentage');
const savingsProgressFill = document.getElementById('savings-progress-fill');
const savingsProgressContainer = document.getElementById('savings-progress-container');

const fixedCategoriesList = document.getElementById('fixed-categories-list');
const customCategoriesList = document.getElementById('custom-categories-list');
const studentsList = document.getElementById('students-list');
const totalLessonsCostText = document.getElementById('total-lessons-cost');

const categoryModal = document.getElementById('category-modal');
const studentModal = document.getElementById('student-modal');
const teacherModal = document.getElementById('teacher-modal');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    updateUI();
    setCurrentDate();
    setupEventListeners();
});

function setCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').innerText = new Date().toLocaleDateString('ar-EG', options);
    // Bottom navigation
    document.querySelectorAll('.nav-item').forEach(li => {
        li.addEventListener('click', () => {
            document.querySelector('.nav-item.active').classList.remove('active');
            li.classList.add('active');

            const sectionId = li.getAttribute('data-section');
            handleNavigation(sectionId);
        });
    });
}

function handleNavigation(sectionId) {
    // For this dashboard, we can either scroll or hide/show
    // Scrolling is better for a dashboard feel
    let target;
    if (sectionId === 'overview') target = document.getElementById('budget-setup');
    if (sectionId === 'fixed-categories') target = document.getElementById('fixed-categories-list');
    if (sectionId === 'custom-categories') target = document.getElementById('custom-categories-list');
    if (sectionId === 'lessons') target = document.getElementById('lessons-section');

    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
function setupEventListeners() {
    saveBudgetBtn.addEventListener('click', () => {
        appState.totalBudget = parseFloat(totalBudgetInput.value) || 0;
        appState.days = parseInt(budgetDaysInput.value) || 30;
        appState.savingsGoal = parseFloat(savingsGoalInput.value) || 0;
        saveData();
        updateUI();
        showNotification('تم حفظ إعدادات الميزانية بنجاح');
    });

    document.getElementById('add-custom-category-btn').addEventListener('click', () => {
        openModal(categoryModal);
    });

    document.getElementById('add-student-btn').addEventListener('click', () => {
        openModal(studentModal);
    });

    // Modal Close buttons
    document.querySelectorAll('.close').forEach(btn => {
        btn.onclick = function () {
            btn.parentElement.parentElement.style.display = "none";
        }
    });

    // Forms
    document.getElementById('category-form').onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('cat-name').value;
        const type = document.getElementById('cat-type').value;
        const value = parseFloat(document.getElementById('cat-value').value);

        const newCat = {
            id: Date.now().toString(),
            name,
            type,
            value,
            custom: true
        };

        appState.customCategories.push(newCat);
        saveData();
        updateUI();
        closeModal(categoryModal);
        e.target.reset();
    };

    document.getElementById('student-form').onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('student-name').value;
        const newStudent = {
            id: Date.now().toString(),
            name,
            teachers: []
        };
        appState.students.push(newStudent);
        saveData();
        updateUI();
        closeModal(studentModal);
        e.target.reset();
    };

    document.getElementById('teacher-form').onsubmit = (e) => {
        e.preventDefault();
        const studentId = document.getElementById('current-student-id').value;
        const name = document.getElementById('teacher-name').value;
        const subject = document.getElementById('subject-name').value;
        const price = parseFloat(document.getElementById('teacher-price').value);
        const center = parseFloat(document.getElementById('center-price').value) || 0;

        const student = appState.students.find(s => s.id === studentId);
        if (student) {
            student.teachers.push({
                id: Date.now().toString(),
                name,
                subject,
                price,
                center
            });
            saveData();
            updateUI();
            closeModal(teacherModal);
            e.target.reset();
        }
    };

    // Close modal on outside click
    window.onclick = function (event) {
        if (event.target == categoryModal) closeModal(categoryModal);
        if (event.target == studentModal) closeModal(studentModal);
        if (event.target == teacherModal) closeModal(teacherModal);
    }
}

// Data Handling
function saveData() {
    localStorage.setItem('mizani_state', JSON.stringify(appState));
}

function loadData() {
    const saved = localStorage.getItem('mizani_state');
    if (saved) {
        const parsed = JSON.parse(saved);
        // Merge with initial state to ensure fixed categories are always present
        appState = { ...appState, ...parsed };

        // Load values into inputs
        totalBudgetInput.value = appState.totalBudget;
        budgetDaysInput.value = appState.days;
        savingsGoalInput.value = appState.savingsGoal;
    }
}

// Logic & UI Updates
function updateUI() {
    const totalLessonsCost = calculateTotalLessons();
    const netBudget = appState.totalBudget - appState.savingsGoal - totalLessonsCost;

    availableBudgetText.innerText = formatCurrency(Math.max(0, netBudget));
    displaySavingsText.innerText = formatCurrency(appState.savingsGoal);
    totalLessonsCostText.innerText = formatCurrency(totalLessonsCost);

    // Savings Progress
    if (appState.savingsGoal > 0 && appState.totalBudget > 0) {
        const percentage = (appState.savingsGoal / appState.totalBudget) * 100;
        savingsPercentageText.innerText = `${percentage.toFixed(1)}%`;
        savingsProgressFill.style.width = `${Math.min(100, percentage)}%`;
        savingsProgressContainer.classList.remove('hidden');
    } else {
        savingsProgressContainer.classList.add('hidden');
    }

    renderCategories(netBudget);
    renderStudents();
    calculateOverallDailyLimit(netBudget);
}

function calculateTotalLessons() {
    let total = 0;
    appState.students.forEach(student => {
        student.teachers.forEach(t => {
            total += (t.price + t.center);
        });
    });
    return total;
}

function renderCategories(netBudget) {
    fixedCategoriesList.innerHTML = '';
    customCategoriesList.innerHTML = '';

    // Fixed Categories
    appState.fixedCategories.forEach(cat => {
        const amount = (netBudget * cat.percentage) / 100;
        const daily = amount / appState.days;
        fixedCategoriesList.appendChild(createCategoryCard(cat, amount, daily));
    });

    // Custom Categories
    appState.customCategories.forEach(cat => {
        let amount = 0;
        if (cat.type === 'percentage') {
            amount = (netBudget * cat.value) / 100;
        } else {
            amount = cat.value;
        }
        const daily = amount / appState.days;
        customCategoriesList.appendChild(createCategoryCard(cat, amount, daily, true));
    });
}

function createCategoryCard(cat, amount, daily, isCustom = false) {
    const card = document.createElement('div');
    card.className = 'category-card';

    // Alert colors if limit is low (conceptual: here we just show daily)
    // In a real app we might track spending, but for now we highlight high daily limits
    if (daily > 500) card.classList.add('warning');
    if (daily > 1000) card.classList.add('danger');

    card.innerHTML = `
        <div class="header">
            <span class="title">${isCustom ? '' : `<i class="fas ${cat.icon}"></i> `}${cat.name}</span>
            ${isCustom ? `<span class="delete-btn" onclick="deleteCategory('${cat.id}')"><i class="fas fa-trash"></i> حذف</span>` : `<span>${cat.percentage}%</span>`}
        </div>
        <div class="limit-item">
            <span>المبلغ المخصص:</span>
            <span class="limit-value">${formatCurrency(amount)}</span>
        </div>
        <div class="limit-item">
            <span>الحد اليومي:</span>
            <span class="limit-value">${formatCurrency(daily)}</span>
        </div>
        <div class="progress-container">
             <div class="progress-bar">
                <div class="progress-fill" style="width: 100%"></div>
             </div>
        </div>
    `;
    return card;
}

function renderStudents() {
    studentsList.innerHTML = '';
    appState.students.forEach(student => {
        const studentCost = student.teachers.reduce((sum, t) => sum + t.price + t.center, 0);
        const card = document.createElement('div');
        card.className = 'student-card shadow';

        let teachersHtml = '';
        student.teachers.forEach(t => {
            teachersHtml += `
                <tr>
                    <td>${t.subject}</td>
                    <td>${t.name}</td>
                    <td>${formatCurrency(t.price)}</td>
                    <td>${formatCurrency(t.center)}</td>
                    <td><button onclick="deleteTeacher('${student.id}', '${t.id}')" class="btn-danger"><i class="fas fa-trash"></i></button></td>
                </tr>
            `;
        });

        card.innerHTML = `
            <h4>
                <span><i class="fas fa-user-graduate"></i> ${student.name}</span>
                <button onclick="deleteStudent('${student.id}')" class="btn-danger"><i class="fas fa-user-minus"></i> حذف الطالب</button>
            </h4>
            <div class="student-info">إجمالي مصروف الطالب: <strong>${formatCurrency(studentCost)}</strong></div>
            <table class="teachers-table">
                <thead>
                    <tr>
                        <th>المادة</th>
                        <th>المعلم</th>
                        <th>سعر المعلم</th>
                        <th>السنتر</th>
                        <th>إجراء</th>
                    </tr>
                </thead>
                <tbody>
                    ${teachersHtml || '<tr><td colspan="5" style="text-align:center">لا يوجد معلمين مضافين</td></tr>'}
                </tbody>
            </table>
            <button onclick="openTeacherModal('${student.id}')" class="btn btn-secondary" style="margin-top:1rem; width:100%">إضافة معلم <i class="fas fa-plus"></i></button>
        `;
        studentsList.appendChild(card);
    });
}

function calculateOverallDailyLimit(netBudget) {
    const daily = netBudget / appState.days;
    totalDailyLimitText.innerText = formatCurrency(Math.max(0, daily));
}

// Actions
window.deleteCategory = (id) => {
    appState.customCategories = appState.customCategories.filter(c => c.id !== id);
    saveData();
    updateUI();
};

window.deleteStudent = (id) => {
    if (confirm('هل أنت متأكد من حذف الطالب وكل بياناته؟')) {
        appState.students = appState.students.filter(s => s.id !== id);
        saveData();
        updateUI();
    }
};

window.deleteTeacher = (studentId, teacherId) => {
    const student = appState.students.find(s => s.id === studentId);
    if (student) {
        student.teachers = student.teachers.filter(t => t.id !== teacherId);
        saveData();
        updateUI();
    }
};

window.openTeacherModal = (studentId) => {
    document.getElementById('current-student-id').value = studentId;
    openModal(teacherModal);
};

// Helpers
function openModal(modal) {
    modal.style.display = "block";
}

function closeModal(modal) {
    modal.style.display = "none";
}

function formatCurrency(val) {
    return parseFloat(val || 0).toLocaleString('ar-EG', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + ' ج.م';
}

function showNotification(msg) {
    // Simple alert for now, can be improved to a toast
    alert(msg);
}
