document.addEventListener('DOMContentLoaded', function() {
    // Array of possible balloon colors
    const balloonColors = ['#FF4081', '#FF80AB', '#F50057', '#FF0044', '#00B0FF', '#FFEB3B', '#4CAF50', '#9C27B0'];
  
    // Randomly assign colors to each balloon
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
      const randomColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
      balloon.style.backgroundColor = randomColor;
    });
  
    // Trigger confetti when a balloon is clicked
    balloons.forEach(balloon => {
      balloon.addEventListener('click', function() {
        confetti({
          particleCount: 200,
          spread: 90,
          origin: { y: 0.6 },
          colors: ['#ff4081', '#f50057', '#ff80ab', '#ff0044'],
        });
  
        // Make the balloon float away after click (interactive movement)
        balloon.style.transform = 'translateY(-300px) rotate(90deg)';
        setTimeout(() => {
          balloon.style.transform = 'translateY(0) rotate(0deg)';
        }, 1000); // Reset after 1 second
      });
    });
  
    // Trigger fireworks after a delay (celebration moment)
    setTimeout(function() {
      confetti({
        particleCount: 500,
        spread: 180,
        origin: { y: 0.1 },
        colors: ['#ff4081', '#ff0044', '#f50057'],
      });
    }, 5000); // Fireworks after 5 seconds
  });
  