// ==================== GIFTS PAGE SCRIPT ====================

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS Animation
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
    // Set birthday person name
    const personEl = document.getElementById('birthday-person');
    if (personEl) personEl.textContent = BIRTHDAY_PERSON;
    
    // Small confetti burst on page load
    if (typeof confetti !== 'undefined') {
        setTimeout(() => {
            confetti({
                particleCount: 50,
                spread: 60,
                origin: { y: 0.5 },
                colors: ['#ff6b95', '#ff8a80', '#ffc107']
            });
        }, 500);
    }
});

// ==================== MODAL FUNCTIONS ====================
function openGiftModal(giftType) {
    const modal = document.getElementById('gift-modal');
    const content = document.getElementById('modal-content');
    
    // Small confetti when opening
    if (typeof confetti !== 'undefined') {
        confetti({
            particleCount: 30,
            spread: 50,
            origin: { y: 0.6 },
            colors: ['#ff6b95', '#ffc107', '#8b5cf6']
        });
    }
    
    // Set content based on gift type
    content.innerHTML = getGiftContent(giftType);
    
    // Show modal
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('show');
        
        // Add click event to all photos for lightbox
        const photoItems = document.querySelectorAll('.photo-item img');
        photoItems.forEach(img => {
            img.addEventListener('click', function(e) {
                e.stopPropagation();
                openPhotoLightbox(this.src, this.alt);
            });
        });
    }, 10);
}

function closeGiftModal() {
    const modal = document.getElementById('gift-modal');
    
    modal.classList.remove('show');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// Photo Lightbox Functions
function openPhotoLightbox(imageSrc, imageAlt) {
    // Create lightbox if it doesn't exist
    let lightbox = document.getElementById('photo-lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'photo-lightbox';
        lightbox.className = 'photo-lightbox hidden';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close" onclick="closePhotoLightbox()">&times;</button>
                <img id="lightbox-image" src="" alt="" class="lightbox-image">
                <p id="lightbox-caption" class="lightbox-caption"></p>
            </div>
        `;
        document.body.appendChild(lightbox);
        
        // Close on background click
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closePhotoLightbox();
            }
        });
    }
    
    // Set image and caption
    document.getElementById('lightbox-image').src = imageSrc;
    document.getElementById('lightbox-caption').textContent = imageAlt;
    
    // Show lightbox
    lightbox.classList.remove('hidden');
    setTimeout(() => {
        lightbox.classList.add('show');
    }, 10);
}

function closePhotoLightbox() {
    const lightbox = document.getElementById('photo-lightbox');
    if (lightbox) {
        lightbox.classList.remove('show');
        setTimeout(() => {
            lightbox.classList.add('hidden');
        }, 300);
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('gift-modal');
    if (e.target === modal) {
        closeGiftModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close lightbox first if open
        const lightbox = document.getElementById('photo-lightbox');
        if (lightbox && !lightbox.classList.contains('hidden')) {
            closePhotoLightbox();
        } else {
            closeGiftModal();
        }
    }
});

// ==================== GIFT CONTENT ====================
function getGiftContent(type) {
    const contents = {
        memories: `
            <div class="modal-header">
                <span class="text-5xl mb-4 block">📸</span>
                <h3 class="modal-title">Foto Kenangan Kita</h3>
                <p class="modal-subtitle">Momen-momen indah yang tak terlupakan</p>
            </div>
            <div class="photo-collage">
                <div class="collage-item large" onclick="openPhotoLightbox('../../assets/images/lesung.jpeg', '')">
                    <img src="../../assets/images/lesung.jpeg" alt="Kenangan 1">
                </div>
                <div class="collage-item" onclick="openPhotoLightbox('../../assets/images/Kami 6.jpg', '')">
                    <img src="../../assets/images/Kami 6.jpg" alt="Kenangan 2">
                </div>
                <div class="collage-item" onclick="openPhotoLightbox('../../assets/images/Kami 5.jpg', '')">
                    <img src="../../assets/images/Kami 5.jpg" alt="Kenangan 3">
                </div>
                <div class="collage-item tall" onclick="openPhotoLightbox('../../assets/images/lesung 4.jpeg', '')">
                    <img src="../../assets/images/lesung 4.jpeg" alt="Kenangan 4">
                </div>
                <div class="collage-item" onclick="openPhotoLightbox('../../assets/images/Kami.jpeg', '')">
                    <img src="../../assets/images/Kami.jpeg" alt="Kenangan 5">
                </div>
                <div class="collage-item wide" onclick="openPhotoLightbox('../../assets/images/Kami 2.jpeg', '')">
                    <img src="../../assets/images/Kami 2.jpeg" alt="Kenangan 6" style="object-position: center 1%;">
                </div>
                <div class="collage-item" onclick="openPhotoLightbox('../../assets/images/Kami 3.jpeg', '')">
                    <img src="../../assets/images/Kami 3.jpeg" alt="Kenangan 7">
                </div>
                <div class="collage-item" onclick="openPhotoLightbox('../../assets/images/Kami 4.jpg', '')">
                    <img src="../../assets/images/Kami 4.jpg" alt="Kenangan 8" style="object-position: center 100%;">
                </div>
                <div class="collage-item coming-soon">
                    <div class="coming-soon-content">
                        <span class="text-4xl mb-2">📷</span>
                        <p class="text-white text-sm font-medium">Coming Soon</p>
                        <p class="text-white/50 text-xs">Kenangan berikutnya...</p>
                    </div>
                </div>
            </div>
            <p class="text-center text-white/60 mt-4 text-sm">
                💡 Klik foto untuk melihat lebih besar
            </p>
        `,
        
        letter: `
            <div class="modal-header">
                <span class="text-5xl mb-4 block">💌</span>
                <h3 class="modal-title">Surat Cinta Untukmu</h3>
                <p class="modal-subtitle">Dari hatiku yang terdalam</p>
            </div>
            <div class="love-letter">
                <div class="letter-content">
                    <p>Agiel sayangku yang tercinta,</p>
                    <p>Di hari yang spesial ini, aku ingin kamu tahu betapa berharganya kehadiranmu dalam hidupku. Setiap hari bersamamu adalah hadiah yang tak ternilai.</p>
                    <p>Agiel, kamu adalah alasan di balik senyumku setiap pagi, kekuatanku saat aku lemah, dan kebahagiaan yang selalu kunantikan.</p>
                    <p>Terima kasih sudah menjadi bagian terindah dalam hidupku. Aku bersyukur bisa berbagi tawa, air mata, dan semua momen berharga denganmu, Agiel.</p>
                    <p>Semoga di hari ulang tahunmu ini, semua harapan dan impianmu menjadi kenyataan. Aku akan selalu ada di sampingmu, mendukungmu dalam setiap langkah.</p>
                    <p>Selamat ulang tahun, Agiel cintaku! 💕</p>
                </div>
                <div class="letter-signature">
                    Dengan segenap cinta,<br>
                    ❤️ Ipan 🦖 ❤️
                </div>
            </div>
        `,
        
        voice: `
            <div class="modal-header">
                <span class="text-5xl mb-4 block">🎥</span>
                <h3 class="modal-title">Video Spesial</h3>
                <p class="modal-subtitle">Pesan video untukmu</p>
            </div>
            <div class="video-player">
                <div class="video-container rounded-xl overflow-hidden mb-4">
                    <video 
                        id="gift-video"
                        class="w-full rounded-xl"
                        controls
                        poster="../../assets/images/video-poster.jpg"
                    >
                        <source src="../../assets/videos/video-final.mp4" type="video/mp4">
                        Browser tidak mendukung video.
                    </video>
                </div>
                
                <!-- Secret Video -->
                <div class="secret-video-wrapper" id="secret-video-wrapper">
                    <div class="secret-video-locked" id="secret-locked">
                        <div class="secret-icon">🔒</div>
                        <h4 class="secret-title">Video Rahasia</h4>
                        <p class="secret-description">Video spesial untukmu yang hanya bisa dibuka dengan password...</p>
                        <div class="secret-unlock-section">
                            <input 
                                type="password" 
                                id="secret-password" 
                                class="secret-input" 
                                placeholder="Masukkan password..."
                                onkeypress="if(event.key==='Enter') unlockSecretVideo()"
                            >
                            <button class="secret-unlock-btn" onclick="unlockSecretVideo()">
                                <span>🔓</span> Buka Video
                            </button>
                        </div>
                        <p class="secret-hint">💡 Hint: Kata yang selalu kuucapkan padamu...</p>
                    </div>
                    
                    <div class="secret-video-unlocked hidden" id="secret-unlocked">
                        <div class="unlocked-header">
                            <span class="unlocked-icon">✨</span>
                            <h4 class="unlocked-title">Video Rahasia Terbuka!</h4>
                            <p class="unlocked-subtitle">Ini khusus untukmu 💕</p>
                        </div>
                        <div class="video-container rounded-xl overflow-hidden">
                            <video 
                                id="secret-video"
                                class="w-full rounded-xl"
                                controls
                                poster="../../assets/images/secret-poster.jpg"
                            >
                                <source src="../../assets/videos/Video-project-compressed.mp4" type="video/mp4">
                                Browser tidak mendukung video.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        `,
        
        reasons: `
            <div class="modal-header">
                <span class="text-5xl mb-4 block">💝</span>
                <h3 class="modal-title">Alasan Aku Mencintaimu</h3>
                <p class="modal-subtitle">Dari sekian banyak alasan...</p>
            </div>
            <div class="reasons-list">
                <div class="reason-item">
                    <span class="reason-number">1</span>
                    <span class="reason-text">Senyummu yang bisa melelehkan hatiku setiap kali melihatnya 😊</span>
                </div>
                <div class="reason-item">
                    <span class="reason-number">2</span>
                    <span class="reason-text">Cara kamu tertawa yang membuatku ikut bahagia 😄</span>
                </div>
                <div class="reason-item">
                    <span class="reason-number">3</span>
                    <span class="reason-text">Kebaikan hatimu yang selalu peduli pada orang lain 💖</span>
                </div>
                <div class="reason-item">
                    <span class="reason-number">4</span>
                    <span class="reason-text">Kamu selalu jadi tempat ternyaman untuk berbagi cerita 🤗</span>
                </div>
                <div class="reason-item">
                    <span class="reason-number">5</span>
                    <span class="reason-text">Kesetiaan dan dukunganmu yang tak pernah pudar 🌟</span>
                </div>
                <div class="reason-item">
                    <span class="reason-number">6</span>
                    <span class="reason-text">Cara kamu membuatku menjadi versi terbaik dari diriku 💪</span>
                </div>
                <div class="reason-item">
                    <span class="reason-number">∞</span>
                    <span class="reason-text">Dan masih banyak lagi alasan yang tak bisa disebutkan satu per satu... 💕</span>
                </div>
            </div>
        `,
        
        surprise: `
            <div class="modal-header">
                <span class="text-5xl mb-4 block">🌟</span>
                <h3 class="modal-title">Hadiah Spesial!</h3>
                <p class="modal-subtitle">Yang paling istimewa untukmu</p>
            </div>
            <div class="surprise-content">
                <div class="surprise-box">
                    <span class="surprise-emoji">🎁✨</span>
                    <p class="surprise-text">TEBAK HADIAHMU!</p>
                    <p class="surprise-desc">Pecahkan 3 clue misterius ini:</p>
                </div>
                <div class="bg-white/5 rounded-2xl p-6 mb-4">
                    <p class="text-3xl mb-3">🔍</p>
                    <h4 class="text-white text-xl font-semibold mb-3">Clue #1: Pendamping Petualangan</h4>
                    <p class="text-white/70 text-sm italic mb-2">
                        "Aku melangkah bersamamu ke manapun kaki membawa,<br>
                        Menapaki setiap jalan yang kita lalui bersama,<br>
                        Terkadang kotor, terkadang basah,<br>
                        Namun selalu setia di bawah untuk melindungimu."
                    </p>
                    <p class="text-white/50 text-xs">💡 Hint: Sesuatu yang selalu di bawahmu</p>
                </div>
                <div class="bg-white/5 rounded-2xl p-6 mb-4">
                    <p class="text-3xl mb-3">🔍</p>
                    <h4 class="text-white text-xl font-semibold mb-3">Clue #2: Pelukan Tanpa Lengan</h4>
                    <p class="text-white/70 text-sm italic mb-2">
                        "Saat angin bertiup dan udara dingin menyapa,<br>
                        Aku memelukmu erat tanpa menggunakan tangan,<br>
                        Dengan saku untuk menyimpan tanganmu yang dingin,<br>
                        Dan resleting untuk menjagamu tetap hangat."
                    </p>
                    <p class="text-white/50 text-xs">💡 Hint: Kehangatan yang bisa kamu kenakan</p>
                </div>
                <div class="bg-white/5 rounded-2xl p-6 mb-6">
                    <p class="text-3xl mb-3">🔍</p>
                    <h4 class="text-white text-xl font-semibold mb-3">Clue #3: Penangkap Waktu</h4>
                    <p class="text-white/70 text-sm italic mb-2">
                        "Aku tak bisa memeluk, tapi bisa menangkap momen,<br>
                        Dengan satu klik, waktu berhenti selamanya,<br>
                        Memori indah tersimpan dalam bingkai cahaya,<br>
                        Kenangan yang takkan pernah pudar."
                    </p>
                    <p class="text-white/50 text-xs">💡 Hint: Mengabadikan tanpa menyentuh</p>
                </div>
                <div class="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-6 border border-pink-500/30">
                    <p class="text-2xl mb-2">💎</p>
                    <p class="text-white font-medium">BONUS MISTERI:</p>
                    <p class="text-white/80 text-lg">
                        Pelukan hangat tanpa batas<br>
                        + Ciuman manis<br>
                        + Cinta yang tak terbatas 💕
                    </p>
                </div>
                <p class="final-message mt-6">
                    "Kehadiranmu adalah hadiah terbaik dalam hidupku" ❤️
                </p>
            </div>
        `
    };
    
    return contents[type] || '<p class="text-white">Hadiah tidak ditemukan</p>';
}

// ==================== AUDIO FUNCTIONS ====================
function playVoiceMessage() {
    // Placeholder untuk audio
    // Ganti dengan implementasi audio yang sebenarnya
    alert('💕 Pesan Suara:\n\n"Hai sayangku! Selamat ulang tahun! Aku sayang kamu selalu..."\n\n(Untuk audio asli, tambahkan file audio ke folder assets/audio)');
    
    // Jika ada file audio:
    // const audio = new Audio('../../assets/audio/voice-message.mp3');
    // audio.play();
}

// ==================== SECRET VIDEO FUNCTIONS ====================
const SECRET_VIDEO_PASSWORD = "sayang"; // Ganti dengan password yang kamu inginkan

function unlockSecretVideo() {
    const input = document.getElementById('secret-password');
    const password = input.value.toLowerCase().trim();
    
    if (password === SECRET_VIDEO_PASSWORD) {
        // Password benar - buka video
        const locked = document.getElementById('secret-locked');
        const unlocked = document.getElementById('secret-unlocked');
        
        // Animasi unlock
        locked.style.animation = 'fadeOutScale 0.5s ease';
        
        setTimeout(() => {
            locked.classList.add('hidden');
            unlocked.classList.remove('hidden');
            unlocked.style.animation = 'fadeInScale 0.5s ease';
            
            // Confetti celebration
            if (typeof confetti !== 'undefined') {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#ff6b95', '#ffc107', '#8b5cf6', '#ff8a80']
                });
            }
        }, 500);
    } else {
        // Password salah - shake animation
        input.style.animation = 'shake 0.5s ease';
        input.value = '';
        input.placeholder = '❌ Password salah! Coba lagi...';
        
        setTimeout(() => {
            input.style.animation = '';
            input.placeholder = 'Masukkan password...';
        }, 500);
    }
}
