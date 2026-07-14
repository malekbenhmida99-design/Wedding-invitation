// Check selected language
const selectedLanguage = localStorage.getItem('selectedLanguage') || 'english';

// Set the appropriate language version
if (selectedLanguage === 'arabic') {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
    document.getElementById('english-content').classList.remove('active');
    document.getElementById('arabic-content').classList.add('active');
} else {
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = 'en';
    document.getElementById('english-content').classList.add('active');
    document.getElementById('arabic-content').classList.remove('active');
}

function goBack() {
    window.location.href = 'envelope.html';
}