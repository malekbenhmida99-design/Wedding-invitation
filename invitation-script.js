let selectedLanguage = localStorage.getItem('selectedLanguage') || 'english';

function toggleButtonState(id, isActive) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle('active', isActive);
}

function updateLanguageUI() {
    const englishContent = document.getElementById('english-content');
    const arabicContent = document.getElementById('arabic-content');
    const envelopeText = document.getElementById('envelope-text');
    const sealMonogram = document.querySelector('.seal-monogram');

    const isArabic = selectedLanguage === 'arabic';

    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = isArabic ? 'ar' : 'en';

    if (englishContent && arabicContent) {
        englishContent.classList.toggle('active', !isArabic);
        arabicContent.classList.toggle('active', isArabic);
    }

    toggleButtonState('english-toggle', !isArabic);
    toggleButtonState('arabic-toggle', isArabic);
    toggleButtonState('english-toggle-envelope', !isArabic);
    toggleButtonState('arabic-toggle-envelope', isArabic);

    if (envelopeText) {
        envelopeText.innerHTML = isArabic
            ? '<h1>دعوة زفاف</h1><p class="envelope-couple-names">مالك و ريهام</p>'
            : '<h1>Wedding Invitation</h1><p class="envelope-couple-names">MALEK & RIHEM</p>';
    }

    if (sealMonogram) {
        sealMonogram.textContent = isArabic ? 'م و ر' : 'M & R';
    }
}

function setLanguage(lang) {
    selectedLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    updateLanguageUI();
}

function openInvitation() {
    document.getElementById('envelope-section').classList.remove('active');
    document.getElementById('invitation-section').classList.add('active');
    updateLanguageUI();
    window.scrollTo(0, 0);
}

function backToEnvelope() {
    document.getElementById('invitation-section').classList.remove('active');
    document.getElementById('envelope-section').classList.add('active');
    window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', updateLanguageUI);
