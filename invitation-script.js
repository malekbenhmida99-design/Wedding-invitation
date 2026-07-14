// Check selected language on page load
const selectedLanguage = localStorage.getItem('selectedLanguage') || 'english';

// Update envelope text based on language
if (selectedLanguage === 'arabic') {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
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
    const envelopeSection = document.getElementById('envelope-section');
    const invitationSection = document.getElementById('invitation-section');
    
    envelopeSection.classList.remove('active');
    invitationSection.classList.add('active');
    
    // Set the correct language version
    if (selectedLanguage === 'arabic') {
        document.getElementById('english-content').classList.remove('active');
        document.getElementById('arabic-content').classList.add('active');
        document.documentElement.dir = 'rtl';
    } else {
        document.getElementById('english-content').classList.add('active');
        document.getElementById('arabic-content').classList.remove('active');
        document.documentElement.dir = 'ltr';
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function backToEnvelope() {
    const envelopeSection = document.getElementById('envelope-section');
    const invitationSection = document.getElementById('invitation-section');
    
    invitationSection.classList.remove('active');
    envelopeSection.classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}