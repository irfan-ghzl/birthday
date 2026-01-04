// ==================== GIFTS PAGE SCRIPT ====================

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS Animation
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
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
    }, 10);
}

function closeGiftModal() {
    const modal = document.getElementById('gift-modal');
    
    modal.classList.remove('show');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
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
        closeGiftModal();
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
            <div class="photo-gallery">
                <div class="photo-item">
                    <span>📷</span>
                </div>
                <div class="photo-item">
                    <span>🖼️</span>
                </div>
                <div class="photo-item">
                    <span>📸</span>
                </div>
                <div class="photo-item">
                    <span>🌅</span>
                </div>
            </div>
            <p class="text-center text-white/60 mt-4 text-sm">
                💡 Tip: Ganti dengan foto-foto kenanganmu!
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
                    <p>Sayangku yang tercinta,</p>
                    <p>Di hari yang spesial ini, aku ingin kamu tahu betapa berharganya kehadiranmu dalam hidupku. Setiap hari bersamamu adalah hadiah yang tak ternilai.</p>
                    <p>Kamu adalah alasan di balik senyumku setiap pagi, kekuatanku saat aku lemah, dan kebahagiaan yang selalu kunantikan.</p>
                    <p>Terima kasih sudah menjadi bagian terindah dalam hidupku. Aku bersyukur bisa berbagi tawa, air mata, dan semua momen berharga denganmu.</p>
                    <p>Semoga di hari ulang tahunmu ini, semua harapan dan impianmu menjadi kenyataan. Aku akan selalu ada di sampingmu, mendukungmu dalam setiap langkah.</p>
                    <p>Selamat ulang tahun, cintaku! 💕</p>
                </div>
                <div class="letter-signature">
                    Dengan segenap cinta,<br>
                    ❤️ Yang Mencintaimu ❤️
                </div>
            </div>
        `,
        
        voice: `
            <div class="modal-header">
                <span class="text-5xl mb-4 block">🎵</span>
                <h3 class="modal-title">Pesan Suara</h3>
                <p class="modal-subtitle">Dengarkan isi hatiku</p>
            </div>
            <div class="audio-player">
                <span class="audio-icon">🎙️</span>
                <p class="audio-message">
                    Aku merekam pesan spesial untukmu...<br>
                    <span class="text-sm text-white/50">Klik tombol di bawah untuk mendengarkan</span>
                </p>
                <button class="play-button" onclick="playVoiceMessage()">
                    <span>▶️</span> Putar Pesan
                </button>
                <div class="mt-6 p-4 bg-white/5 rounded-xl">
                    <p class="text-white/70 text-sm">
                        💡 Untuk menambahkan pesan suara:<br>
                        1. Rekam pesanmu<br>
                        2. Simpan sebagai file audio<br>
                        3. Tambahkan ke folder assets/audio
                    </p>
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
                    <span class="reason-number">7</span>
                    <span class="reason-text">Semua hal kecil yang kamu lakukan untukku 🥰</span>
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
                    <p class="surprise-text">SELAMAT!</p>
                    <p class="surprise-desc">Kamu telah mendapatkan:</p>
                </div>
                <div class="bg-white/5 rounded-2xl p-6 mb-6">
                    <p class="text-3xl mb-4">🎫</p>
                    <h4 class="text-white text-xl font-semibold mb-2">Voucher Kencan Spesial</h4>
                    <p class="text-white/70">
                        Satu hari penuh bersamaku,<br>
                        ke tempat favoritmu,<br>
                        dengan semua keinginanmu terpenuhi! 💑
                    </p>
                </div>
                <div class="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-6 border border-pink-500/30">
                    <p class="text-2xl mb-2">💎</p>
                    <p class="text-white font-medium">BONUS:</p>
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
