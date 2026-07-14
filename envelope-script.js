function openEnvelope() {
    const envelopePage = document.getElementById('envelope-page');
    const invitationPage = document.getElementById('invitation-page');
    
    envelopePage.classList.remove('active');
    invitationPage.classList.add('active');
}

function closeInvitation() {
    const envelopePage = document.getElementById('envelope-page');
    const invitationPage = document.getElementById('invitation-page');
    
    invitationPage.classList.remove('active');
    envelopePage.classList.add('active');
}

function toggleLanguage() {
    const englishContent = document.getElementById('english-content');
    const arabicContent = document.getElementById('arabic-content');
    const langBtn = document.getElementById('langBtn');

    englishContent.classList.toggle('active');
    arabicContent.classList.toggle('active');

    if (englishContent.classList.contains('active')) {
        langBtn.textContent = 'العربية | English';
        document.documentElement.lang = 'en';
    } else {
        langBtn.textContent = 'العربية | English';
        document.documentElement.lang = 'ar';
    }
}