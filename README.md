# 🎂 Birthday Countdown Website

Website ulang tahun interaktif dengan tema "Countdown to Surprise Gift Box".

## 📁 Struktur Folder

```
birthday/
├── index.html                    # Entry point (redirect ke countdown)
├── README.md                     # Dokumentasi ini
│
├── pages/                        # Halaman-halaman website
│   ├── countdown/               
│   │   └── index.html           # 1️⃣ Halaman Countdown
│   ├── celebration/             
│   │   └── index.html           # 2️⃣ Halaman Celebration
│   └── gifts/                   
│       └── index.html           # 3️⃣ Halaman Virtual Gift Box
│
└── assets/                       # File-file pendukung
    ├── css/                     
    │   ├── main.css             # Style utama (shared)
    │   ├── countdown.css        # Style countdown page
    │   ├── celebration.css      # Style celebration page
    │   └── gifts.css            # Style gifts page
    │
    ├── js/                      
    │   ├── config.js            # Konfigurasi (tanggal, nama, dll)
    │   ├── particles-config.js  # Konfigurasi particles.js
    │   ├── countdown.js         # Script countdown page
    │   ├── celebration.js       # Script celebration page
    │   └── gifts.js             # Script gifts page
    │
    ├── images/                  
    │   └── README.md            # Panduan menambahkan gambar
    │
    └── audio/                   
        └── README.md            # Panduan menambahkan audio
```

## 🚀 Cara Menggunakan

### 1. Ubah Tanggal Ulang Tahun
Edit file `assets/js/config.js`:

```javascript
// Format: new Date(tahun, bulan-1, tanggal, jam, menit, detik)
// Contoh: 14 Februari 2026 = new Date(2026, 1, 14, 0, 0, 0)
const BIRTHDAY_DATE = new Date(2026, 1, 14, 0, 0, 0);
```

> **Catatan**: Bulan dimulai dari 0 (Januari = 0, Februari = 1, dst)

### 2. Tambahkan Foto Kenangan
1. Simpan foto di folder `assets/images/photos/`
2. Edit file `assets/js/gifts.js`, cari bagian `memories`
3. Ganti placeholder dengan tag `<img>`

### 3. Tambahkan Audio (Opsional)
1. Simpan file audio di folder `assets/audio/`
2. Format yang didukung: MP3, WAV, OGG

### 4. Jalankan Website
Buka file `index.html` di browser, atau gunakan live server.

## 🎨 Alur Website

```
┌─────────────────────────────────────┐
│  1️⃣ HALAMAN COUNTDOWN               │
│  - Hitung mundur ke hari H          │
│  - Animasi detak jantung/love       │
│  - Pesan "Tunggu kejutan spesial!"  │
│  - Tombol "Lihat Sekarang" (skip)   │
└─────────────────────────────────────┘
                 ⬇️
┌─────────────────────────────────────┐
│  2️⃣ HALAMAN CELEBRATION             │
│  - Konfeti & balon animasi          │
│  - Ucapan "Happy Birthday! 🎉"       │
│  - Tombol "Buka Hadiah Kamu"        │
└─────────────────────────────────────┘
                 ⬇️
┌─────────────────────────────────────┐
│  3️⃣ VIRTUAL GIFT BOX                │
│  - Kotak 1: 📸 Foto Kenangan        │
│  - Kotak 2: 💌 Surat Cinta          │
│  - Kotak 3: 🎵 Pesan Suara          │
│  - Kotak 4: 💝 Alasan I Love You    │
│  - Kotak 5: 🌟 Hadiah Kejutan       │
└─────────────────────────────────────┘
```

## 📦 Library yang Digunakan

| Library | Kegunaan |
|---------|----------|
| [Tailwind CSS](https://tailwindcss.com/) | Styling framework |
| [GSAP](https://gsap.com/) | Animasi smooth |
| [Canvas Confetti](https://www.kirilv.com/canvas-confetti/) | Efek confetti |
| [AOS](https://michalsnik.github.io/aos/) | Scroll animation |
| [Particles.js](https://vincentgarreau.com/particles.js/) | Background particles |
| [Google Fonts](https://fonts.google.com/) | Typography |

## 💝 Kustomisasi

### Mengubah Warna
Edit variabel warna di file CSS masing-masing section.

### Mengubah Konten Gift
Edit function `getGiftContent()` di file `assets/js/gifts.js`.

### Mengubah Animasi
- Particles: Edit `assets/js/particles-config.js`
- Transisi: Sesuaikan GSAP di file JS masing-masing

## 📱 Responsive

Website ini sudah responsive untuk:
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 💕 Credits

Dibuat dengan sepenuh ❤️ untuk orang yang spesial.

---

**Selamat menggunakan! Semoga membuat hari ulang tahun menjadi lebih spesial! 🎂✨**
