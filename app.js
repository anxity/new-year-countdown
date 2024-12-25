// Countdown Timer Function
const countdown = () => {
  const currentYear = new Date().getFullYear();
  const newYearTime = new Date(`January 1, ${currentYear + 1} 00:00:00`);
  
  const updateTimer = () => {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    if (diff <= 0) {
      clearInterval(timer);
      startConfetti();
      return;
    }

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
  const timer = setInterval(updateTimer, 1000);
};

// Snowflake Animation Function
const createSnowflakes = () => {
  const numFlakes = 50; // Number of snowflakes
  const container = document.body;

  for (let i = 0; i < numFlakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerText = '❄'; // Snowflake symbol
    snowflake.style.left = `${Math.random() * 100}%`; // Random left position
    snowflake.style.animationDuration = `${Math.random() * 20 + 10}s`; // Random fall speed
    snowflake.style.animationDelay = `${Math.random() * 10}s`; // Random delay
    container.appendChild(snowflake);
  }
};

// Confetti Effect
const startConfetti = () => {
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { x: 0.5, y: 0.5 }
  });
};

// Для тестирования: задаем "фальшивое" время
const fakeDate = new Date("January 1, 2025 00:00:00");  // Установи момент наступления Нового года
Date.now = () => fakeDate.getTime();  // Подменяем Date.now() на это время
// Start the countdown and snowflakes
countdown();
createSnowflakes();
