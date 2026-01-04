// ==================== CELEBRATION PAGE SCRIPT ====================

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS Animation
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
    // Start celebration effects
    startCelebration();
});

// ==================== CELEBRATION EFFECTS ====================
function startCelebration() {
    // Fire confetti
    fireConfetti();
    
    // Create floating balloons
    createBalloons();
    
    // Play celebration sound (optional)
    // playSound();
}

// ==================== CONFETTI EFFECTS ====================
function fireConfetti() {
    if (typeof confetti === 'undefined') {
        console.warn('Confetti library not loaded');
        return;
    }
    
    // Initial burst
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff6b95', '#ff8a80', '#ffc107', '#8b5cf6', '#ec4899', '#fff']
    });
    
    // Side cannons
    setTimeout(() => {
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.7 },
            colors: ['#ff6b95', '#ff8a80', '#ffc107']
        });
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.7 },
            colors: ['#8b5cf6', '#ec4899', '#fff']
        });
    }, 500);
    
    // Continuous confetti
    let confettiInterval = setInterval(() => {
        confetti({
            particleCount: 20,
            angle: 60,
            spread: 30,
            origin: { x: 0, y: 0.8 },
            colors: ['#ff6b95', '#ffc107']
        });
        confetti({
            particleCount: 20,
            angle: 120,
            spread: 30,
            origin: { x: 1, y: 0.8 },
            colors: ['#8b5cf6', '#ec4899']
        });
    }, 2000);
    
    // Stop continuous confetti after 10 seconds
    setTimeout(() => {
        clearInterval(confettiInterval);
    }, 10000);
}

// ==================== BALLOON EFFECTS ====================
function createBalloons() {
    const balloonEmojis = ['🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎁', '⭐', '💖', '🎉'];
    const container = document.getElementById('balloons-container');
    
    if (!container) return;
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.textContent = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];
            balloon.style.left = Math.random() * 100 + '%';
            balloon.style.animationDuration = (5 + Math.random() * 5) + 's';
            balloon.style.fontSize = (2 + Math.random() * 2) + 'rem';
            container.appendChild(balloon);
            
            // Remove balloon after animation
            setTimeout(() => {
                balloon.remove();
            }, 10000);
        }, i * 300);
    }
}

// ==================== AUDIO FUNCTIONS ====================
function playSound() {
    // Optional: Play birthday music
    const music = document.getElementById('birthday-music');
    if (music) {
        music.volume = 0.3;
        music.play().catch(e => console.log('Autoplay blocked'));
    }
}
