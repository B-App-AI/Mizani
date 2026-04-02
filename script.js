// Language Dictionary (Expanded)
const translations = {
ar: { dir: 'rtl', appTitle: 'ميزاني الذكي', budgetSetup: 'إعداد الميزانية', totalBudget: 'الميزانية', days: 'الأيام', savings: 'التحويش', currency: 'العملة', lang: 'اللغة', save: 'حفظ', available: 'الميزانية المتاحة', inc: 'دخل', exp: 'صرف', navHome: 'الرئيسية', navCats: 'الأقسام', navCalc: 'حاسبة', navCur: 'عملات', navStu: 'دروس', addCat: 'إضافة قسم', addStu: 'طالب جديد', calcTitle: 'الآلة الحاسبة', curTitle: 'أسعار العملات', clear: 'مسح', history: 'السجل', dayLimit: 'الحد اليومي', income: 'إجمالي الدخل', expense: 'إجمالي الصرف' },
    en: { dir: 'ltr', appTitle: 'Mizani Smart', budgetSetup: 'Setup', totalBudget: 'Budget', days: 'Days', savings: 'Savings', currency: 'Currency', lang: 'Language', save: 'Save', available: 'Available', inc: 'Inc', exp: 'Exp', navHome: 'Home', navCats: 'Sections', navCalc: 'Calc', navCur: 'FX', navStu: 'Lessons', addCat: 'Add Category', addStu: 'Add Student', calcTitle: 'Calculator', curTitle: 'Rates', clear: 'Clear', history: 'History', dayLimit: 'Daily Limit', income: 'Total Income', expense: 'Total Expense' },
    fr: { dir: 'ltr', appTitle: 'Mizani Int.', budgetSetup: 'Réglages', totalBudget: 'Budget', days: 'Jours', savings: 'Épargne', currency: 'Devise', lang: 'Langue', save: 'Sauver', available: 'Disponible', inc: 'Rev', exp: 'Dép', navHome: 'Accueil', navCats: 'Sections', navCalc: 'Calc', navCur: 'Change', navStu: 'Leçons', addCat: 'Ajouter Cat', addStu: 'Ajouter Étud', calcTitle: 'Calculatrice', curTitle: 'Taux', clear: 'Effacer', history: 'Histoire', dayLimit: 'Limite Quotidienne', income: 'Revenu Total', expense: 'Dépense Totale' },
    it: { dir: 'ltr', appTitle: 'Mizani Intel.', budgetSetup: 'Impostazioni', totalBudget: 'Budget', days: 'Giorni', savings: 'Risparmio', currency: 'Valuta', lang: 'Lingua', save: 'Salva', available: 'Disponibile', inc: 'Ent', exp: 'Spe', navHome: 'Home', navCats: 'Sezioni', navCalc: 'Calc', navCur: 'Valuta', navStu: 'Lezioni', addCat: 'Aggiungi Cat', addStu: 'Aggiungi Stud', calcTitle: 'Calcolatrice', curTitle: 'Tassi', clear: 'Pulisci', history: 'Storico', dayLimit: 'Limite Giornaliero', income: 'Entrata Totale', expense: 'Spesa Totale' },
    es: { dir: 'ltr', appTitle: 'Mizani Smart', budgetSetup: 'Ajustes', totalBudget: 'Presupuesto', days: 'Días', savings: 'Ahorro', currency: 'Moneda', lang: 'Idioma', save: 'Guardar', available: 'Disponible', inc: 'Ing', exp: 'Gas', navHome: 'Inicio', navCats: 'Secciones', navCalc: 'Calc', navCur: 'Divisa', navStu: 'Clases', addCat: 'Añadir Cat', addStu: 'Añadir Estud', calcTitle: 'Calculadora', curTitle: 'Tipos', clear: 'Limpiar', history: 'Historial', dayLimit: 'Límite Diario', income: 'Ingreso Total', expense: 'Gasto Total' },
    de: { dir: 'ltr', appTitle: 'Mizani Smart', budgetSetup: 'Setup', totalBudget: 'Budget', days: 'Tage', savings: 'Ersparnis', currency: 'Währung', lang: 'Sprache', save: 'Sparen', available: 'Verfügbar', inc: 'Ein', exp: 'Aus', navHome: 'Start', navCats: 'Sektionen', navCalc: 'Rechner', navCur: 'Währung', navStu: 'Unterricht', addCat: 'Kat. Hinzufügen', addStu: 'Stud. Hinzufügen', calcTitle: 'Rechner', curTitle: 'Kurse', clear: 'Löschen', history: 'Verlauf', dayLimit: 'Tageslimit', income: 'Gesamteinkommen', expense: 'Gesamtausgaben' },
    tr: { dir: 'ltr', appTitle: 'Mizani Akıllı', budgetSetup: 'Kurulum', totalBudget: 'Bütçe', days: 'Günler', savings: 'Tasarruf', currency: 'Para', lang: 'Dil', save: 'Kaydet', available: 'Mevcut', inc: 'Gelir', exp: 'Gider', navHome: 'Ana Sayfa', navCats: 'Bölümler', navCalc: 'Hesap', navCur: 'Kurlar', navStu: 'Dersler', addCat: 'Kat. Ekle', addStu: 'Öğrenci Ekle', calcTitle: 'Hesap Makinesi', curTitle: 'Kurlar', clear: 'Temizle', history: 'Geçmiş', dayLimit: 'Günlük Sınır', income: 'Toplam Gelir', expense: 'Toplam Gider' },
    zh: { dir: 'ltr', appTitle: 'Mizani 智能', budgetSetup: '设置', totalBudget: '预算', days: '天数', savings: '蓄蓄', currency: '货货', lang: '语言', save: '保存', available: '可用额度', inc: '入', exp: '支', navHome: '首页', navCats: '模块', navCalc: '计算', navCur: '汇率', navStu: '课程', addCat: '加分类', addStu: '加学生', calcTitle: '计算器', curTitle: '实时汇率', clear: '清除', history: '历史', dayLimit: '每日限额', income: '总收入', expense: '总支出' }
};

// State Management
let appState = {
    totalBudget: 0,
    days: 30,
    savingsGoal: 0,
    currency: 'ر.س',
    language: 'ar',
    fixedCategories: [
        { id: 'housing', name: 'سكن وإيجار', percentage: 20, icon: 'fa-home', color: '#2980b9' },
        { id: 'food', name: 'أكل وشرب', percentage: 20, icon: 'fa-utensils', color: '#ff6b6b' },
        { id: 'bills', name: 'فواتير واشتراكات', percentage: 10, icon: 'fa-file-invoice-dollar', color: '#6bc1ff' },
        { id: 'transport', name: 'مواصلات', percentage: 10, icon: 'fa-bus', color: '#4d96ff' },
        { id: 'shopping', name: 'تسوق وشخصي', percentage: 10, icon: 'fa-shopping-bag', color: '#ffd93d' },
        { id: 'health', name: 'صحة وعلاج', percentage: 5, icon: 'fa-hand-holding-medical', color: '#6bcc6b' },
        { id: 'education', name: 'تعليم', percentage: 5, icon: 'fa-graduation-cap', color: '#a55eea' },
        { id: 'entertainment', name: 'ترفيه وتسالي', percentage: 5, icon: 'fa-gamepad', color: '#00cec9' },
        { id: 'charity', name: 'صدقات وهدايا', percentage: 5, icon: 'fa-hand-holding-heart', color: '#ff9ff3' },
        { id: 'debts', name: 'ديون وأقساط', percentage: 5, icon: 'fa-handshake', color: '#5f27cd' },
        { id: 'emergency', name: 'طوارئ', percentage: 5, icon: 'fa-exclamation-triangle', color: '#fb8c00' }
    ],
    customCategories: [],
    students: []
};

// DOM Elements
const totalBudgetInput = document.getElementById('total-budget');
const budgetDaysInput = document.getElementById('budget-days');
const budgetCurrencyInput = document.getElementById('budget-currency');
const appLanguageInput = document.getElementById('app-language');
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
const currencyGrid = document.getElementById('currency-grid');

// Initialization
document.addEventListener('DOMContentLoaded', () => {

// Custom Alert Logic
window.showCustomAlert = (msg, title = 'تنبيه') => {
    const modal = document.getElementById('custom-alert-modal');
    if (!modal) { alert(msg); return; }
    const titleEl = document.getElementById('custom-alert-title');
    if (titleEl) titleEl.innerText = title;
    document.getElementById('custom-alert-message').innerText = msg;
    modal.style.display = 'block';
};
window.closeCustomAlert = () => {
    const modal = document.getElementById('custom-alert-modal');
    if (modal) modal.style.display = 'none';
};

// Custom Confirm Logic
let customConfirmCallback = null;
window.showCustomConfirm = (msg, callback) => {
    const modal = document.getElementById('custom-confirm-modal');
    if (!modal) {
        if(confirm(msg)) callback();
        return;
    }
    document.getElementById('custom-confirm-message').innerText = msg;
    customConfirmCallback = callback;
    modal.style.display = 'block';
};
window.closeCustomConfirm = () => {
    const modal = document.getElementById('custom-confirm-modal');
    if (modal) modal.style.display = 'none';
    customConfirmCallback = null;
};
const yesBtn = document.getElementById('custom-confirm-yes');
if (yesBtn) {
    yesBtn.addEventListener('click', () => {
        if (customConfirmCallback) customConfirmCallback();
        window.closeCustomConfirm();
    });
}

    loadData();
    updateUI();
    setCurrentDate();
    setupEventListeners();
    handleNavigation('overview'); // Force show home on start
    fetchRates(); // Fetch currencies on open
});

function setCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateEl = document.getElementById('current-date');
    if (dateEl) {
        dateEl.innerText = new Date().toLocaleDateString('ar-EG', options);
    }
    // Bottom navigation - attach click listeners
    document.querySelectorAll('.nav-item').forEach(li => {
        li.addEventListener('click', () => {
            const sectionId = li.getAttribute('data-section');
            handleNavigation(sectionId);
        });
    });
}

function handleNavigation(sectionId) {
    if (sectionId === 'calculator') { openPanel('calculator-screen'); return; }
    if (sectionId === 'currency') { openPanel('currency-screen'); return; }

    const sectionMap = {
        'overview': 'overview-section',
        'fixed-categories': 'fixed-categories-section',
        'lessons': 'lessons-section'
    };

    // Hide all sections
    Object.values(sectionMap).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });

    // Show the target section
    const targetId = sectionMap[sectionId];
    if (targetId) {
        const target = document.getElementById(targetId);
        if (target) {
            target.classList.remove('hidden');
            // Scroll to top of main content
            const main = document.querySelector('.main-content');
            if (main) main.scrollTop = 0;
        }
    }

    // Update nav item active state
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.getAttribute('data-section') === sectionId);
    });
}
function setupEventListeners() {
    const budgetForm = document.getElementById('budget-form');
    if (budgetForm) {
        budgetForm.onsubmit = (e) => {
            e.preventDefault();
            const newTotal = parseFloat(document.getElementById('total-budget').value) || 0;
            const newSavings = parseFloat(document.getElementById('savings-goal').value) || 0;
            const newDays = parseInt(document.getElementById('budget-days').value) || 30;

            const totalLessonsCost = calculateTotalLessons();
            const newBaseBudget = newTotal - newSavings - totalLessonsCost;

            if (newBaseBudget < 0) {
                showCustomAlert('إجمالي الميزانية لا يغطي مبلغ التحويش ومصاريف الدروس التي حددتها مسبقاً!', 'عجز في الميزانية');
                return;
            }

            let tentativeCustomCost = 0;
            appState.customCategories.filter(c => c.active !== false).forEach(c => {
                tentativeCustomCost += (c.type === 'percentage') ? (newBaseBudget * c.value) / 100 : c.value;
            });

            if (tentativeCustomCost > newBaseBudget) {
                showCustomAlert('الميزانية الجديدة أقل من الأقسام المضافة حالياً. الرجاء مسح بعض الأقسام أو رفع الميزانية لتغطي المصاريف!', 'عجز في الميزانية');
                return;
            }

            appState.totalBudget = newTotal;
            appState.days = newDays;
            appState.savingsGoal = newSavings;
            
            const currencyEl = document.getElementById('budget-currency');
            const langEl = document.getElementById('app-language');
            appState.currency = currencyEl ? currencyEl.value : 'ر.س';
            appState.language = langEl ? langEl.value : 'ar';
            
            saveData();
            updateUI();
            
            const modal = document.getElementById('budget-modal');
            if (modal) modal.style.display = 'none';
            
            const msg = translations[appState.language]?.save || 'تم الحفظ';
            showNotification(msg);
        };
    }

    const addCatBtn = document.getElementById('add-custom-category-btn');
    if (addCatBtn) {
        addCatBtn.onclick = () => window.openModal('category-modal');
    }

    const addStuBtn = document.getElementById('add-student-btn');
    if (addStuBtn) {
        addStuBtn.onclick = () => window.openModal('student-modal');
    }

    // Modal Close buttons (Ultra Robust)
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('close')) {
            const modal = e.target.closest('.modal');
            if (modal) modal.style.display = 'none';
        }
        // Also close if clicking outside the modal content
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Forms
    const catForm = document.getElementById('category-form');
    if (catForm) {
        catForm.onsubmit = (e) => {
            e.preventDefault();
            const name = document.getElementById('cat-name').value;
            const type = document.getElementById('cat-type').value;
            const value = parseFloat(document.getElementById('cat-value').value);

            // Validation Logic to prevent exceeding available budget
            const totalLessonsCost = calculateTotalLessons();
            const baseBudget = (appState.totalBudget || 0) - (appState.savingsGoal || 0) - totalLessonsCost;

            if (baseBudget <= 0) {
                showCustomAlert('الرصيد المتاح لا يكفي. يرجى ضبط ميزانيتك الكلية أولاً!', 'خطأ في الميزانية');
                return;
            }

            let currentCustomCost = 0;
            appState.customCategories.filter(c => c.active !== false).forEach(c => {
                currentCustomCost += (c.type === 'percentage') ? (baseBudget * c.value) / 100 : c.value;
            });

            let newCost = (type === 'percentage') ? (baseBudget * value) / 100 : value;

            if (currentCustomCost + newCost > baseBudget) {
                showCustomAlert('لقد تجاوزت الحد الاقصى المسموح به للميزانية!', 'عذراً لا يمكن الإضافة');
                return;
            }

            const colors = ['#ff9f43', '#ff6b6b', '#48dbfb', '#1dd1a1', '#feca57', '#5f27cd', '#ff9ff3'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            const newCat = {
                id: Date.now().toString(),
                name,
                type,
                value,
                color: randomColor,
                custom: true
            };

            appState.customCategories.push(newCat);
            saveData();
            updateUI();
            const modal = document.getElementById('category-modal');
            if (modal) modal.style.display = 'none';
            e.target.reset();
        };
    }

    const stuForm = document.getElementById('student-form');
    if (stuForm) {
        stuForm.onsubmit = (e) => {
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
            const modal = document.getElementById('student-modal');
            if (modal) modal.style.display = 'none';
            e.target.reset();
        };
    }

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
                center,
                active: true
            });
            saveData();
            updateUI();
            const modal = document.getElementById('teacher-modal');
            if (modal) modal.style.display = 'none';
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
    const defaults = {
        totalBudget: 0,
        days: 30,
        savingsGoal: 0,
        currency: 'ر.س',
        language: 'ar',
        fixedCategories: [
            { id: 'housing', name: 'سكن وإيجار', percentage: 20, icon: 'fa-home', color: '#2980b9' },
            { id: 'food', name: 'أكل وشرب', percentage: 20, icon: 'fa-utensils', color: '#ff6b6b' },
            { id: 'bills', name: 'فواتير واشتراكات', percentage: 10, icon: 'fa-file-invoice-dollar', color: '#6bc1ff' },
            { id: 'transport', name: 'مواصلات', percentage: 10, icon: 'fa-bus', color: '#4d96ff' },
            { id: 'shopping', name: 'تسوق وشخصي', percentage: 10, icon: 'fa-shopping-bag', color: '#ffd93d' },
            { id: 'health', name: 'صحة وعلاج', percentage: 5, icon: 'fa-hand-holding-medical', color: '#6bcc6b' },
            { id: 'education', name: 'تعليم', percentage: 5, icon: 'fa-graduation-cap', color: '#a55eea' },
            { id: 'entertainment', name: 'ترفيه وتسالي', percentage: 5, icon: 'fa-gamepad', color: '#00cec9' },
            { id: 'charity', name: 'صدقات وهدايا', percentage: 5, icon: 'fa-hand-holding-heart', color: '#ff9ff3' },
            { id: 'debts', name: 'ديون وأقساط', percentage: 5, icon: 'fa-handshake', color: '#5f27cd' },
            { id: 'emergency', name: 'طوارئ', percentage: 5, icon: 'fa-exclamation-triangle', color: '#fb8c00' }
        ],
        customCategories: [],
        students: []
    };

    if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure fixed categories are always enforced
        parsed.fixedCategories = defaults.fixedCategories;
        appState = { ...defaults, ...parsed };
    } else {
        appState = { ...defaults };
    }

    // Immediately load values into UI inputs
    if (totalBudgetInput) totalBudgetInput.value = appState.totalBudget || '';
    if (budgetDaysInput) budgetDaysInput.value = appState.days || 30;
    if (savingsGoalInput) savingsGoalInput.value = appState.savingsGoal || '';
    if (budgetCurrencyInput) budgetCurrencyInput.value = appState.currency || 'ر.س';
    if (appLanguageInput) appLanguageInput.value = appState.language || 'ar';
}

function applyLanguage() {
    const lang = appState.language || 'ar';
    const t = translations[lang];
    if (!t) return;

    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;

    // Universal Translation Loop
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            // Special handle for buttons with icons
            const icon = el.querySelector('i');
            if (icon) {
                el.innerHTML = `${icon.outerHTML} ${t[key]}`;
            } else {
                el.innerText = t[key];
            }
        }
    });

    // Handle Input Labels (using for attribute)
    const labelMapping = {
        'total-budget': t.totalBudget,
        'budget-days': t.days,
        'savings-goal': t.savings
    };
    for(let id in labelMapping) {
        const label = document.querySelector(`label[for="${id}"]`);
        if (label) label.innerText = labelMapping[id];
    }

    // Special: Update Navigation Spans
    const navItems = document.querySelectorAll('.nav-item');
    if (navItems.length >= 5) {
        const navKeys = ['navHome', 'navCats', 'navCalc', 'navCur', 'navStu'];
        navItems.forEach((item, idx) => {
            const span = item.querySelector('span');
            if (span && t[navKeys[idx]]) span.innerText = t[navKeys[idx]];
        });
    }

    // Update Page Style for RTL/LTR
    document.body.className = t.dir === 'rtl' ? 'rtl-mode' : 'ltr-mode';

    // Panels & Headers
    const panels = {
        'calculator-section': t.navCalc,
        'currency-section': t.navCur,
        'lessons-section': t.navStu,
        'fixed-categories-section': t.navCats
    };
    for(let id in panels) {
        const header = document.querySelector(`#${id} h2`);
        if (header) {
            const icon = header.querySelector('i');
            header.innerHTML = `${icon ? icon.outerHTML : ''} ${panels[id]}`;
        }
    }

    const clearBtn = document.querySelector('.clear-hist-btn');
    if (clearBtn) clearBtn.innerText = t.clear;
}

function updateMainBalance(amount) {
    const el = document.getElementById('total-balance');
    if (el) { el.innerText = formatCurrency(Math.max(0, amount)); }
}

// Logic & UI Updates
function updateUI() {
    applyLanguage();
    const totalLessonsCost = calculateTotalLessons();
    const baseBudget = (appState.totalBudget || 0) - (appState.savingsGoal || 0) - totalLessonsCost;

    let customCost = 0;
    appState.customCategories.filter(c => c.active !== false).forEach(c => {
        customCost += (c.type === 'percentage') ? (baseBudget * c.value) / 100 : c.value;
    });

    const netBudgetForFixed = Math.max(0, baseBudget - customCost);

    // Update the new premium header balance
    updateMainBalance(baseBudget);

    // Update income/expense cards
    const totalIncomeEl = document.getElementById('total-income');
    const totalExpenseEl = document.getElementById('total-expense');
    if (totalIncomeEl) totalIncomeEl.innerText = formatCurrency(appState.totalBudget);
    if (totalExpenseEl) totalExpenseEl.innerText = formatCurrency((appState.savingsGoal || 0) + totalLessonsCost);

    if (availableBudgetText) availableBudgetText.innerText = formatCurrency(Math.max(0, baseBudget));
    if (displaySavingsText) displaySavingsText.innerText = formatCurrency(appState.savingsGoal);
    if (totalLessonsCostText) totalLessonsCostText.innerText = formatCurrency(totalLessonsCost);

    // Savings Progress
    if (appState.savingsGoal > 0 && appState.totalBudget > 0 && typeof savingsPercentageText !== 'undefined' && savingsPercentageText) {
        const percentage = (appState.savingsGoal / appState.totalBudget) * 100;
        savingsPercentageText.innerText = `${percentage.toFixed(1)}%`;
        if (typeof savingsProgressFill !== 'undefined' && savingsProgressFill) savingsProgressFill.style.width = `${Math.min(100, percentage)}%`;
        if (typeof savingsProgressContainer !== 'undefined' && savingsProgressContainer) savingsProgressContainer.classList.remove('hidden');
    } else if (typeof savingsProgressContainer !== 'undefined' && savingsProgressContainer) {
        savingsProgressContainer.classList.add('hidden');
    }

    renderCategories(baseBudget, netBudgetForFixed);
    renderStudents();
    calculateOverallDailyLimit(baseBudget);
    renderMiniBreakdown(baseBudget, netBudgetForFixed);
}

function renderMiniBreakdown(baseBudget, netBudgetForFixed) {
    const list = document.getElementById('mini-breakdown-list');
    if (!list) return;

    const activeFixed = appState.fixedCategories.filter(c => c.active !== false);
    const sumFixed = activeFixed.reduce((sum, c) => sum + c.percentage, 0);

    let allCats = [];

    // Map Fixed
    appState.fixedCategories.forEach(cat => {
        let isActive = cat.active !== false;
        const effectivePct = (isActive && sumFixed > 0) ? (cat.percentage / sumFixed) * 100 : 0;
        const val = isActive ? (netBudgetForFixed * effectivePct) / 100 : 0;
        allCats.push({ ...cat, isActive, displayPct: effectivePct, val, isCustom: false });
    });

    // Map Custom
    appState.customCategories.forEach(cat => {
        let isActive = cat.active !== false;
        let amount = 0;
        let displayPct = 0;
        if (isActive) {
            if (cat.type === 'percentage') {
                displayPct = cat.value;
                amount = (baseBudget * cat.value) / 100;
            } else {
                amount = cat.value;
                displayPct = baseBudget > 0 ? (amount / baseBudget) * 100 : 0;
            }
        }
        allCats.push({ ...cat, isActive, displayPct, val: amount, isCustom: true });
    });

    // Sort by price strictly descending
    allCats.sort((a,b) => b.val - a.val);
    
    list.innerHTML = allCats.map(cat => {
        return `
            <div style="display: flex; flex-direction: column; gap: 8px; opacity: ${cat.isActive ? '1' : '0.4'}; transition: opacity 0.3s ease;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-weight: 700; font-size: 0.9rem; color: var(--text-main); display: flex; align-items: center; gap: 8px;">
                        <label class="switch" onclick="event.stopPropagation()">
                            <input type="checkbox" ${cat.isActive ? 'checked' : ''} onchange="toggleCategory('${cat.id}', ${cat.isCustom})">
                            <span class="slider"></span>
                        </label>
                        <i class="fas ${cat.icon || 'fa-tag'}" style="color: ${cat.color || 'var(--primary)'}; margin-left: 5px;"></i> 
                        ${cat.name} 
                        ${cat.isCustom ? `<i class="fas fa-trash" onclick="event.stopPropagation(); deleteCategory('${cat.id}')" style="cursor: pointer; color: var(--danger); font-size: 0.9rem; margin-right: 5px;" title="حذف القسم"></i>` : ''} 
                        ${cat.isActive ? `<span style="font-size:0.7rem; color:var(--text-muted);">(${cat.displayPct.toFixed(1).replace('.0','')}%)</span>` : ''}
                    </span>
                    <span style="font-weight: 800; color: var(--text-main);">${formatCurrency(cat.val)}</span>
                </div>
                <div style="height: 6px; background: #edf2f7; border-radius: 10px; overflow: hidden; display: flex;">
                    <div style="width: ${cat.displayPct}%; background: ${cat.color || 'var(--primary)'}; border-radius: 10px;"></div>
                </div>
            </div>
        `;
    }).join('');
}


function calculateTotalLessons() {
    let total = 0;
    if (appState.students) {
        appState.students.forEach(student => {
            if (student.active !== false) {
                const teachers = student.teachers || [];
                teachers.forEach(t => {
                    if (t.active !== false) {
                        total += ((t.price || 0) + (t.center || 0));
                    }
                });
            }
        });
    }
    return total;
}

function renderCategories(baseBudget, netBudgetForFixed) {
    const fixedList = document.getElementById('fixed-categories-list');
    const customList = document.getElementById('custom-categories-list');
    
    if (!fixedList || !customList) return;
    
    fixedList.innerHTML = '';
    customList.innerHTML = '';

    // Fixed Categories
    const activeFixed = appState.fixedCategories.filter(c => c.active !== false);
    const sumFixed = activeFixed.reduce((sum, c) => sum + c.percentage, 0);

    appState.fixedCategories.forEach(cat => {
        let active = cat.active !== false;
        const effectivePct = (active && sumFixed > 0) ? (cat.percentage / sumFixed) * 100 : 0;
        const amount = active ? (netBudgetForFixed * effectivePct) / 100 : 0;
        const daily = active ? amount / appState.days : 0;
        fixedList.appendChild(createCategoryCard(cat, amount, daily, false, active, effectivePct));
    });

    // Custom Categories
    appState.customCategories.forEach(cat => {
        let active = cat.active !== false;
        let amount = 0;
        if (active) {
            if (cat.type === 'percentage') {
                amount = (baseBudget * cat.value) / 100;
            } else {
                amount = cat.value;
            }
        }
        const daily = active ? amount / appState.days : 0;
        customList.appendChild(createCategoryCard(cat, amount, daily, true, active));
    });
}

function createCategoryCard(cat, amount, daily, isCustom = false, isActive = true, effectivePct = null) {
    const card = document.createElement('div');
    card.className = 'category-card';
    if (!isActive) card.style.opacity = '0.4';

    // Alert colors if limit is low
    if (cat.id !== 'bills' && isActive) {
        if (daily > 500) card.classList.add('warning');
        if (daily > 1000) card.classList.add('danger');
    }

    const displayPct = effectivePct !== null ? effectivePct.toFixed(1).replace('.0','') : cat.percentage;

    card.innerHTML = `
        <div class="header">
            <span class="title" style="display: flex; align-items: center; gap: 8px;">
                <label class="switch" onclick="event.stopPropagation()">
                    <input type="checkbox" ${isActive ? 'checked' : ''} onchange="toggleCategory('${cat.id}', ${isCustom})">
                    <span class="slider"></span>
                </label>
                <i class="fas ${cat.icon || 'fa-tag'}" style="color: ${cat.color || 'var(--primary)'}; background: ${cat.color ? cat.color + '20' : 'rgba(67, 97, 238, 0.1)'};"></i> ${cat.name}
            </span>
            ${isCustom ? `<span class="delete-btn" onclick="deleteCategory('${cat.id}')"><i class="fas fa-trash"></i> حذف</span>` : `<span style="background: rgba(67, 97, 238, 0.1); color: var(--primary); padding: 3px 8px; border-radius: 8px; font-weight: 800; font-size: 0.75rem;">${displayPct}%</span>`}
        </div>
        <div class="limit-item">
            <span>المبلغ المخصص:</span>
            <span class="limit-value">${formatCurrency(amount)}</span>
        </div>
        ${cat.id !== 'bills' ? `
        <div class="limit-item">
            <span>الحد اليومي:</span>
            <span class="limit-value">${formatCurrency(daily)}</span>
        </div>` : ''}
        <div class="progress-container">
             <div class="progress-fill" style="width: 100%; background: ${cat.color || 'var(--primary)'};"></div>
        </div>
    `;
    return card;
}

function renderStudents() {
    const list = document.getElementById('students-list');
    if (!list) return;
    list.innerHTML = '';
    
    appState.students.forEach(student => {
        const isActiveStudent = student.active !== false;
        const teachers = student.teachers || [];
        const studentCost = teachers.reduce((sum, t) => sum + ( (t.active!==false && isActiveStudent) ? (t.price || 0) + (t.center || 0) : 0), 0);
        
        const card = document.createElement('div');
        card.className = 'student-card shadow';
        if (!isActiveStudent) card.style.opacity = '0.5';
        card.style.borderTop = `6px solid ${isActiveStudent ? 'var(--secondary)' : '#cbd5e0'}`;
        
        let teachersHtml = '';
        teachers.forEach(t => {
            const isActiveTeacher = t.active !== false && isActiveStudent;
            teachersHtml += `
                <tr style="opacity: ${isActiveTeacher ? '1' : '0.4'}">
                    <td>
                        <label class="switch" style="width:30px; height: 18px; margin-right:0">
                            <input type="checkbox" ${t.active !== false ? 'checked' : ''} onchange="event.stopPropagation(); toggleTeacher('${student.id}', '${t.id}')">
                            <span class="slider" style="before: {width:12px; height:12px; left:3px; bottom:3px}"></span>
                        </label>
                    </td>
                    <td style="font-weight:800">${t.subject}</td>
                    <td>${t.name}</td>
                    <td>${formatCurrency(t.price)}</td>
                    <td>${formatCurrency(t.center)}</td>
                    <td><i class="fas fa-trash text-danger" style="cursor:pointer" onclick="event.stopPropagation(); deleteTeacher('${student.id}', '${t.id}')"></i></td>
                </tr>
            `;
        });

        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 12px; cursor: pointer;" onclick="this.closest('.student-card').classList.toggle('expanded')">
                    <label class="switch" onclick="event.stopPropagation()">
                        <input type="checkbox" ${isActiveStudent ? 'checked' : ''} onchange="toggleStudent('${student.id}')">
                        <span class="slider"></span>
                    </label>
                    <h4 style="margin:0"><i class="fas fa-user-graduate"></i> ${student.name} <i class="fas fa-chevron-down s-icon" style="font-size:0.7rem; margin-right:5px"></i></h4>
                </div>
                <i class="fas fa-user-minus text-danger" style="cursor:pointer; font-size:1.1rem" onclick="deleteStudent('${student.id}')"></i>
            </div>
            
            <div class="student-content">
                <div class="student-info" style="margin-top:1rem; display: flex; justify-content: space-between; align-items: center;">
                    <span>إجمالي المصروف المفعّل:</span>
                    <strong style="color: var(--secondary); font-size: 1.1rem;">${formatCurrency(studentCost)}</strong>
                </div>
                <table class="teachers-table">
                    <thead>
                        <tr>
                            <th style="width:40px">تفعيل</th>
                            <th>المادة</th>
                            <th>المعلم</th>
                            <th>السعر</th>
                            <th>السنتر</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${teachersHtml || '<tr><td colspan="6" style="text-align:center; padding: 20px;">لا يوجد مدرسين حالياً</td></tr>'}
                    </tbody>
                </table>
                <button onclick="openTeacherModal('${student.id}')" class="btn btn-secondary w-100" style="margin-top:1.5rem; padding: 10px; font-size: 0.85rem; background: var(--bg-main); color: var(--primary); border: 2px dashed var(--primary); border-radius: 12px;">+ إضافة مادة/معلم</button>
            </div>
        `;

        list.appendChild(card);
    });
}

function calculateOverallDailyLimit(netBudget) {
    const daily = netBudget / appState.days;
    totalDailyLimitText.innerText = formatCurrency(Math.max(0, daily));
}

// Actions
window.deleteCategory = (id) => {
    showCustomConfirm('هل أنت متأكد من حذف هذا القسم بشكل نهائي؟ ولن تتمكن من استعادته.', () => {
        appState.customCategories = appState.customCategories.filter(c => c.id !== id);
        saveData();
        updateUI();
    });
};

window.toggleCategory = (id, isCustom) => {
    const list = isCustom ? appState.customCategories : appState.fixedCategories;
    const cat = list.find(c => c.id === id);
    if (cat) {
        cat.active = cat.active === false ? true : false;
        saveData();
        updateUI();
    }
};

window.deleteStudent = (id) => {
    showCustomConfirm('هل أنت متأكد من حذف هذا الطالب وتفريغ كل بياناته؟', () => {
        appState.students = appState.students.filter(s => s.id !== id);
        saveData();
        updateUI();
    });
};

window.deleteTeacher = (studentId, teacherId) => {
    showCustomConfirm('هل تريد حذف هذا المدرس نهائياً؟', () => {
        const student = appState.students.find(s => s.id === studentId);
        if (student) {
            student.teachers = student.teachers.filter(t => t.id !== teacherId);
            saveData();
            updateUI();
        }
    });
};

window.toggleStudent = (studentId) => {
    const student = appState.students.find(s => s.id === studentId);
    if (student) {
        student.active = student.active === false ? true : false;
        saveData();
        updateUI();
    }
};

window.toggleTeacher = (studentId, teacherId) => {
    const student = appState.students.find(s => s.id === studentId);
    if (student) {
        const teacher = student.teachers.find(t => t.id === teacherId);
        if (teacher) {
            teacher.active = teacher.active === false ? true : false;
            saveData();
            updateUI();
        }
    }
};

window.openTeacherModal = (studentId) => {
    document.getElementById('current-student-id').value = studentId;
    openModal(teacherModal);
};

// Helpers
// --- Modal Helpers ---
window.openModal = (modalId) => {
    const modal = (typeof modalId === 'string') ? document.getElementById(modalId) : modalId;
    if (modal) modal.style.display = "block";
};

window.closeModal = (modalId) => {
    const modal = (typeof modalId === 'string') ? document.getElementById(modalId) : modalId;
    if (modal) modal.style.display = "none";
};

window.openTeacherModal = (studentId) => {
    document.getElementById('current-student-id').value = studentId;
    window.openModal('teacher-modal');
};

function formatCurrency(val) {
    const symbol = appState.currency || 'ر.س';
    const formatted = parseFloat(val || 0).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    return `${formatted} ${symbol}`;
}

// In addition to formatCurrency, ensure the main total-balance header is updated
function updateMainBalance(val) {
    const totalBalanceEl = document.getElementById('total-balance');
    if (totalBalanceEl) {
        totalBalanceEl.innerText = formatCurrency(val);
    }
}

function showNotification(msg) {
    showCustomAlert(msg, 'عملية ناجحة');
}

window.toggleQuickFx = function(e) {
    if (e) e.stopPropagation();
    const overlay = document.getElementById('currency-picker-overlay');
    if (overlay) overlay.classList.toggle('lang-picker-hidden');
    // Hide lang picker if open
    const langOverlay = document.getElementById('lang-picker-overlay');
    if (langOverlay) langOverlay.classList.add('lang-picker-hidden');
};

window.toggleQuickLang = function(e) {
    if (e) e.stopPropagation();
    const overlay = document.getElementById('lang-picker-overlay');
    if (overlay) overlay.classList.toggle('lang-picker-hidden');
    // Hide currency picker if open
    const fxOverlay = document.getElementById('currency-picker-overlay');
    if (fxOverlay) fxOverlay.classList.add('lang-picker-hidden');
};

window.selectCurrency = function(symbol) {
    appState.currency = symbol;
    saveData();
    updateUI();
    window.toggleQuickFx();
    showNotification(`العملة: ${symbol}`);
};

window.selectLang = function(langCode) {
    appState.language = langCode;
    saveData();
    applyLanguage();
    updateUI();
    window.toggleQuickLang();
    showNotification(translations[langCode].appTitle);
};

// Add listener to close overlay when clicking outside
document.addEventListener('click', (e) => {
    const langOverlay = document.getElementById('lang-picker-overlay');
    const langBtn = document.querySelector('.quick-lang-btn');
    const fxBtn = document.querySelector('.quick-fx-btn');
    
    if (langOverlay && !langOverlay.classList.contains('lang-picker-hidden') && !langOverlay.contains(e.target) && (!langBtn || !langBtn.contains(e.target))) {
        langOverlay.classList.add('lang-picker-hidden');
    }
    const fxOverlay = document.getElementById('currency-picker-overlay');
    if (fxOverlay && !fxOverlay.classList.contains('lang-picker-hidden') && !fxOverlay.contains(e.target) && (!fxBtn || !fxBtn.contains(e.target))) {
        fxOverlay.classList.add('lang-picker-hidden');
    }
});

function openPanel(id) {
    const panel = document.getElementById(id);
    if (panel) panel.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

window.closePanel = function (id) {
    const panel = document.getElementById(id);
    if (panel) panel.classList.add('hidden');
    document.body.style.overflow = '';
};

// ================================================================
//  CALCULATOR LOGIC
// ================================================================
const calcState = {
    tokens: [],
    current: '0',
    afterEquals: false,
    justPressedOp: false,
    history: JSON.parse(localStorage.getItem('calc_history') || '[]')
};

const OPS = ['+', '−', '×', '÷'];

function evaluateTokens(tokens) {
    const prec = { '+': 1, '−': 1, '×': 2, '÷': 2 };
    const out = [], ops = [];
    const applyOp = () => {
        const op = ops.pop();
        const b = out.pop(), a = out.pop();
        if (op === '+') out.push(a + b);
        else if (op === '−') out.push(a - b);
        else if (op === '×') out.push(a * b);
        else if (op === '÷') out.push(b !== 0 ? a / b : 0);
    };
    for (const tok of tokens) {
        if (tok !== '' && !isNaN(tok)) {
            out.push(parseFloat(tok));
        } else if (prec[tok] !== undefined) {
            while (ops.length && prec[ops[ops.length - 1]] >= prec[tok]) applyOp();
            ops.push(tok);
        }
    }
    while (ops.length) applyOp();
    return out[0] ?? 0;
}

function livePreview() {
    if (calcState.tokens.length === 0 || calcState.justPressedOp) return '';
    try {
        const all = [...calcState.tokens, calcState.current];
        if (all.length < 3) return '';
        const res = evaluateTokens(all);
        if (isNaN(res) || !isFinite(res)) return '';
        return '= ' + fmtNum(res);
    } catch { return ''; }
}

window.calcAction = function(action) {
    const acBtn = document.getElementById('cb-ac');
    if ((!isNaN(action) && action !== ' ') || action === '.') {
        if (action === '.' && calcState.current.includes('.')) return;
        if (calcState.afterEquals) {
            calcState.tokens = [];
            calcState.current = action === '.' ? '0.' : action;
            calcState.afterEquals = false;
        } else if (calcState.justPressedOp) {
            calcState.current = action === '.' ? '0.' : action;
            calcState.justPressedOp = false;
        } else if (calcState.current === '0' && action !== '.') {
            calcState.current = action;
        } else {
            calcState.current += action;
        }
        if (acBtn) acBtn.textContent = 'C';
    } else if (action === 'AC' || action === 'C') {
        calcState.tokens = [];
        calcState.current = '0';
        calcState.afterEquals = false;
        calcState.justPressedOp = false;
        if (acBtn) acBtn.textContent = 'AC';
    } else if (action === 'DEL') {
        if (calcState.afterEquals) {
            calcState.current = '0';
            calcState.afterEquals = false;
        } else if (!calcState.justPressedOp) {
            calcState.current = calcState.current.length > 1 ? calcState.current.slice(0, -1) : '0';
        }
    } else if (action === '+/-') {
        calcState.current = (parseFloat(calcState.current) * -1).toString();
    } else if (OPS.includes(action)) {
        if (calcState.justPressedOp) {
            calcState.tokens[calcState.tokens.length - 1] = action;
        } else {
            calcState.tokens.push(calcState.current);
            calcState.tokens.push(action);
            calcState.current = '0';
            calcState.justPressedOp = true;
        }
    } else if (action === '=') {
        if (calcState.tokens.length < 2) return;
        const allTokens = [...calcState.tokens, calcState.current];
        const res = fmtNum(evaluateTokens(allTokens));
        calcState.history.unshift({ expr: allTokens.join(' ') + ' =', res });
        if (calcState.history.length > 20) calcState.history.pop();
        localStorage.setItem('calc_history', JSON.stringify(calcState.history));
        calcState.tokens = [];
        calcState.current = res;
        calcState.afterEquals = true;
        calcState.justPressedOp = false;
        renderHistory();
    }
    updateCalcDisplay();
};

function fmtNum(n) {
    if (isNaN(n) || !isFinite(n)) return '0';
    return parseFloat(parseFloat(n).toPrecision(10)).toString();
}

function updateCalcDisplay() {
    const resEl = document.getElementById('calc-result');
    const exprEl = document.getElementById('calc-expression');
    if (!resEl || !exprEl) return;
    resEl.textContent = calcState.current;
    const preview = (calcState.tokens.length > 0 && !calcState.afterEquals) ? livePreview() : '';
    exprEl.textContent = calcState.tokens.join(' ') + ' ' + (calcState.current !== '0' || !calcState.justPressedOp ? calcState.current : '') + (preview ? ' ' + preview : '');
}

function renderHistory() {
    const hist = document.getElementById('calc-history');
    if (!hist) return;
    hist.innerHTML = calcState.history.map((h, i) => `
        <div class="history-item" onclick="recallHistory(${i})">
            <div class="history-expr">${h.expr}</div>
            <div class="history-res">${h.res}</div>
        </div>
    `).join('') || '<div style="color:#636366;font-size:0.8rem;text-align:center;padding:10px">لا يوجد سجل</div>';
}

window.recallHistory = function(i) {
    calcState.current = calcState.history[i].res;
    calcState.tokens = [];
    calcState.afterEquals = true;
    updateCalcDisplay();
};

window.clearHistory = function() {
    calcState.history = [];
    localStorage.removeItem('calc_history');
    renderHistory();
};

// ================================================================
//  CURRENCY LOGIC
// ================================================================
const CURRENCY_NAMES = { EGP: 'جنيه مصري', USD: 'دولار أمريكي', EUR: 'يورو', SAR: 'ريال سعودي', AED: 'درهم إماراتي', KWD: 'دينار كويتي' };
const CURRENCY_FLAGS = { EGP: '🇪🇬', USD: '🇺🇸', EUR: '🇪🇺', SAR: '🇸🇦', AED: '🇦🇪', KWD: '🇰🇼' };
let ratesData = {};

window.fetchRates = async function() {
    const btn = document.getElementById('refresh-rates-btn');
    if (btn) btn.classList.add('fa-spin');
    try {
        const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await res.json();
        ratesData = data.rates || {};
        renderCurrencyGrid();
        populateCurrencySelects();
        convertCurrency();
    } catch (err) { console.error(err); }
    finally { 
        if (btn) btn.classList.remove('fa-spin');
        const status = document.getElementById('currency-status');
        if (status) status.classList.add('hidden');
    }
};

function renderCurrencyGrid() {
    const grid = document.getElementById('currency-grid');
    if (!grid) return;
    grid.innerHTML = Object.keys(CURRENCY_FLAGS).map(code => `
        <div class="currency-card" onclick="selectCurrencyForConvert('${code}')">
            <div class="cc-flag">${CURRENCY_FLAGS[code]}</div>
            <div class="cc-code">${code}</div>
            <div class="cc-name">${CURRENCY_NAMES[code] || ''}</div>
            <div class="cc-rate">${(ratesData[code] || 0).toFixed(2)}</div>
        </div>
    `).join('');
}

function populateCurrencySelects() {
    const codes = Object.keys(ratesData);
    ['from-currency', 'to-currency'].forEach(id => {
        const sel = document.getElementById(id);
        if (!sel) return;
        sel.innerHTML = codes.map(c => `<option value="${c}">${c}</option>`).join('');
    });
    document.getElementById('from-currency').value = 'USD';
    document.getElementById('to-currency').value = 'SAR';
}

window.convertCurrency = function() {
    const amtField = document.getElementById('from-amount');
    const toField = document.getElementById('to-amount');
    const rateEl = document.getElementById('rate-display');
    if(!amtField || !toField || !ratesData) return;
    
    const amt = parseFloat(amtField.value) || 0;
    const from = document.getElementById('from-currency').value;
    const to = document.getElementById('to-currency').value;
    const res = amt * (ratesData[to] / ratesData[from]);
    toField.value = res.toFixed(2);
    if(rateEl) rateEl.innerText = `1 ${from} = ${(ratesData[to] / ratesData[from]).toFixed(4)} ${to}`;
};

window.swapCurrencies = function() {
    const f = document.getElementById('from-currency'), t = document.getElementById('to-currency');
    const tmp = f.value; f.value = t.value; t.value = tmp;
    convertCurrency();
};

window.selectCurrencyForConvert = function(code) {
    document.getElementById('to-currency').value = code;
    convertCurrency();
};

window.filterCurrencies = function() {
    const q = document.getElementById('currency-search').value.toLowerCase();
    const cards = document.querySelectorAll('.currency-card');
    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(q) ? 'flex' : 'none';
    });
};

// End of script

