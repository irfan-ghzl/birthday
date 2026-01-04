// ==================== CONFIGURATION ====================
// Ganti tanggal ulang tahun di sini (format: tahun, bulan-1, tanggal, jam, menit, detik)
// Contoh: 1 Februari 2026 jam 00:00:00 = new Date(2026, 1, 1, 0, 0, 0)
const BIRTHDAY_DATE = new Date(2026, 0, 7, 0, 0, 0); // 7 Januari 2026

// Nama orang yang berulang tahun
const BIRTHDAY_PERSON = "SISTI AGIEL YULAIKA";

// Password untuk membuka hadiah (setelah countdown selesai)
// Ganti password ini sesuai keinginanmu
const SECRET_PASSWORD = "iloveyou";

// URL halaman-halaman
const PAGES = {
    countdown: '../../pages/countdown/index.html',
    celebration: '../../pages/celebration/index.html',
    gifts: '../../pages/gifts/index.html'
};

// Console Easter Egg
console.log('%c💕 Dibuat dengan cinta 💕', 'font-size: 20px; color: #ff6b95;');
console.log('%cSelamat ulang tahun untuk orang yang spesial! 🎂', 'font-size: 14px; color: #8b5cf6;');
