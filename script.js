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

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});