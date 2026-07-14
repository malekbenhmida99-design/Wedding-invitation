// Check selected language on page load
let selectedLanguage = localStorage.getItem('selectedLanguage') || 'english';

function updateLanguageUI() {
    const englishContent = document.getElementById('english-content');
    const arabicContent = document.getElementById('arabic-content');
    const englishToggle = document.getElementById('english-toggle');
    const arabicToggle = document.getElementById('arabic-toggle');
    const envelopeText = document.getElementById('envelope-text');
    const stampText = document.getElementById('stamp-text');

    if (selectedLanguage === 'arabic') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
        englishContent.classList.remove('active');
        arabicContent.classList.add('active');
        englishToggle.classList.remove('active');
        arabicToggle.classList.add('active');
        envelopeText.innerHTML = `
            <h1>دعوة الزفاف</h1>
            <p>مالك و ريهام</p>
        `;
        stampText.innerHTML = `
            <p>اضغط</p>
            <p>لفتح</p>
        `;
    } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = 'en';
        englishContent.classList.add('active');
        arabicContent.classList.remove('active');
        englishToggle.classList.add('active');
        arabicToggle.classList.remove('active');
        envelopeText.innerHTML = `
            <h1>Wedding Invitation</h1>
            <p>Malek & Rihem</p>
        `;
        stampText.innerHTML = `
            <p>CLICK</p>
            <p>TO OPEN</p>
        `;
    }
}

function setLanguage(lang) {
    selectedLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    updateLanguageUI();
}

function openInvitation() {
    const envelopeSection = document.getElementById('envelope-section');
    const invitationSection = document.getElementById('invitation-section');

    envelopeSection.classList.remove('active');
    invitationSection.classList.add('active');
    updateLanguageUI();
    window.scrollTo(0, 0);
}

function backToEnvelope() {
    const envelopeSection = document.getElementById('envelope-section');
    const invitationSection = document.getElementById('invitation-section');

    invitationSection.classList.remove('active');
    envelopeSection.classList.add('active');
    window.scrollTo(0, 0);
}

updateLanguageUI();
