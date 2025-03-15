function updateCountdown() {
    const targetDate = new Date('April 21, 2025 00:00:00').getTime();
    const currentDate = new Date().getTime();
    const gap = targetDate - currentDate;

    if (gap < 0) {
        document.querySelector('.days').textContent = "00";
        document.querySelector('.hours').textContent = "00";
        document.querySelector('.minutes').textContent = "00";
        document.querySelector('.seconds').textContent = "00";
        return;
    }

    const d = String(Math.floor(gap / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const h = String(Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const m = String(Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const s = String(Math.floor((gap % (1000 * 60)) / 1000)).padStart(2, '0');

    document.querySelector('.days').textContent = d;
    document.querySelector('.hours').textContent = h;
    document.querySelector('.minutes').textContent = m;
    document.querySelector('.seconds').textContent = s;

    requestAnimationFrame(updateCountdown);
}

// Jalankan countdown pertama kali
updateCountdown();

document.addEventListener("DOMContentLoaded", function () {
    const couples = document.querySelectorAll(".couple-box");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Hanya animasi sekali
            }
        });
    }, { threshold: 0.3 });

    couples.forEach(couple => observer.observe(couple));
});
