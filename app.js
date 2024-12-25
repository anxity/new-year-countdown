const countdown = () => {
  const currentYear = new Date().getFullYear();
  const newYearTime = new Date(`January 1, ${currentYear + 1} 00:00:00`);
  
  const updateTimer = () => {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;
    
    if (diff <= 0) return;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
  };
  
  updateTimer();
  setInterval(updateTimer, 1000);
};

// Optional: Confetti Effect
const startConfetti = () => {
  // Use a confetti library or implement custom animation here
};

countdown();
startConfetti();
