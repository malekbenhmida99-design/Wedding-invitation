// Check selected language
const selectedLanguage = localStorage.getItem('selectedLanguage') || 'english';

if (selectedLanguage === 'arabic') {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
    updateToArabic();
}

function updateToArabic() {
    document.getElementById('envelope-text').innerHTML = `
        <h1>دعوة الزفاف</h1>
        <p>مالك و ريهام</p>
    `;
    document.getElementById('stamp-text').innerHTML = `
        <p>اضغط</p>
        <p>لفتح</p>
    `;
}

function openInvitation() {
    window.location.href = 'invitation.html';
}
