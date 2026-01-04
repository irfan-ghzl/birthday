// ==================== COUNTDOWN PAGE SCRIPT ====================

let countdownInterval;

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS Animation
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
    // Start Countdown
    startCountdown();
    
    // Event Listeners
    document.getElementById('skip-countdown').addEventListener('click', skipToGifts);
});

// ==================== COUNTDOWN FUNCTIONS ====================
function startCountdown() {
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const now = new Date().getTime();
    const targetTime = BIRTHDAY_DATE.getTime();
    const difference = targetTime - now;
    
    if (difference <= 0) {
        // Countdown finished! Tampilkan password modal
        clearInterval(countdownInterval);
        showPasswordModal();
        return;
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Update DOM with animation
    updateDigit('days', days);
    updateDigit('hours', hours);
    updateDigit('minutes', minutes);
    updateDigit('seconds', seconds);
}

function updateDigit(id, value) {
    const element = document.getElementById(id);
    if (!element) return;
    
    const formattedValue = value.toString().padStart(2, '0');
    
    if (element.textContent !== formattedValue) {
        element.style.transform = 'scale(1.2)';
        element.textContent = formattedValue;
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 100);
    }
}

// ==================== TRANSITION FUNCTIONS ====================

/**
 * Skip countdown - cek apakah countdown sudah selesai atau belum
 */
function skipToGifts() {
    const now = new Date().getTime();
    const targetTime = BIRTHDAY_DATE.getTime();
    const difference = targetTime - now;
    
    if (difference <= 0) {
        // Countdown SUDAH selesai → Tampilkan password modal
        clearInterval(countdownInterval);
        showPasswordModal();
    } else {
        // Countdown BELUM selesai → Tampilkan wait modal (tanpa password)
        showWaitModal();
    }
}

// ==================== WAIT MODAL FUNCTIONS ====================

/**
 * Menampilkan wait modal (ketika countdown belum selesai)
 */
function showWaitModal() {
    const modal = document.getElementById('wait-modal');
    if (modal) {
        // Update tampilan tanggal target
        const targetDateDisplay = document.getElementById('target-date-display');
        if (targetDateDisplay) {
            targetDateDisplay.textContent = formatDate(BIRTHDAY_DATE);
        }
        
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }
}

/**
 * Menutup wait modal
 */
function closeWaitModal() {
    const modal = document.getElementById('wait-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
}

// ==================== PASSWORD MODAL FUNCTIONS ====================

/**
 * Menampilkan password modal (ketika countdown sudah selesai)
 */
function showPasswordModal() {
    const modal = document.getElementById('password-modal');
    if (modal) {
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.add('show');
            // Focus ke input password
            const input = document.getElementById('password-input');
            if (input) input.focus();
        }, 10);
    }
}

/**
 * Menutup password modal
 */
function closePasswordModal() {
    const modal = document.getElementById('password-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.classList.add('hidden');
            // Reset input dan error
            const input = document.getElementById('password-input');
            const error = document.getElementById('password-error');
            if (input) input.value = '';
            if (error) error.classList.add('hidden');
        }, 300);
    }
}

/**
 * Verifikasi password yang dimasukkan
 */
function verifyPassword() {
    const input = document.getElementById('password-input');
    const error = document.getElementById('password-error');
    
    if (!input) return;
    
    const enteredPassword = input.value.trim().toLowerCase();
    
    if (enteredPassword === SECRET_PASSWORD) {
        // Password benar!
        error.classList.add('hidden');
        showSuccessMessage();
    } else {
        // Password salah
        error.classList.remove('hidden');
        input.value = '';
        input.focus();
        
        // Shake animation
        const container = input.closest('.modal-container');
        if (container) {
            container.style.animation = 'shake 0.5s ease';
            setTimeout(() => {
                container.style.animation = '';
            }, 500);
        }
    }
}

/**
 * Tampilkan pesan sukses dan transisi ke halaman celebration
 */
function showSuccessMessage() {
    const modal = document.getElementById('password-modal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Ganti konten modal dengan pesan sukses
    modalContent.innerHTML = `
        <div class="text-6xl mb-4">🎉</div>
        <h3 class="font-dancing text-3xl text-white mb-2">Password Benar!</h3>
        <p class="text-white/70 mb-6">Selamat! Hadiahmu sudah menunggu...</p>
        <div class="animate-bounce text-4xl">💝</div>
    `;
    
    // Transisi ke halaman celebration setelah 2 detik
    setTimeout(() => {
        transitionToCelebration();
    }, 2000);
}

function transitionToCelebration() {
    const countdownSection = document.getElementById('countdown-section');
    const modal = document.getElementById('password-modal');
    
    // Fade out semua
    gsap.to([countdownSection, modal], {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            // Navigate to celebration page
            window.location.href = '../celebration/index.html';
        }
    });
}

// ==================== UTILITY FUNCTIONS ====================
function formatDate(date) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('id-ID', options);
}
