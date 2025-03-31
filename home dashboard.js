let percentage = 40;
        
            function updateProgress() {
              const circle = document.querySelector('.progress-circle');
              const percentageText = document.getElementById('percentage');
              const angle = percentage * 3.6;
              circle.style.background = `conic-gradient(#4fc3f7 0% ${percentage}%, rgba(255, 255, 255, 0.1) ${percentage}% 100%)`;
              percentageText.innerHTML = `${percentage}°`;
            }
        
            document.getElementById('decrease').addEventListener('click', () => {
              if (percentage > 0) {
                percentage--;
                updateProgress();
              }
            });
        
            document.getElementById('increase').addEventListener('click', () => {
              if (percentage < 100) {
                percentage++;
                updateProgress();
              }
            });
        
            updateProgress();