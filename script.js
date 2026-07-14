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

function handleRSVP(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const attendance = form.querySelector('select').value;
    const guests = form.querySelector('input[type="number"]').value;
    const message = form.querySelector('textarea').value;

    // Create email body
    const emailBody = `New RSVP Submission:\n\nName: ${name}\nEmail: ${email}\nAttendance: ${attendance}\nNumber of Guests: ${guests}\nMessage: ${message}`;
    const mailtoLink = `mailto:malek.benhmida99@gmail.com?subject=Wedding RSVP from ${name}&body=${encodeURIComponent(emailBody)}`;

    // Show confirmation
    alert(`Thank you, ${name}! Your RSVP has been submitted.`);
    window.location.href = mailtoLink;
    form.reset();
}

function handleRSVPAr(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const attendance = form.querySelector('select').value;
    const guests = form.querySelector('input[type="number"]').value;
    const message = form.querySelector('textarea').value;

    // Create email body
    const emailBody = `تأكيد حضور جديد:\n\nالاسم: ${name}\nالبريد الإلكتروني: ${email}\nالحضور: ${attendance}\nعدد الضيوف: ${guests}\nالرسالة: ${message}`;
    const mailtoLink = `mailto:malek.benhmida99@gmail.com?subject=تأكيد حضور الزفاف من ${name}&body=${encodeURIComponent(emailBody)}`;

    // Show confirmation
    alert(`شكراً ${name}! تم استلام تأكيد حضورك.`);
    window.location.href = mailtoLink;
    form.reset();
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