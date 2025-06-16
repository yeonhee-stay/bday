document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.querySelector('.no-btn');
    
    if (noBtn) {
        noBtn.style.position = 'absolute';
        
        document.addEventListener('mousemove', function(e) {
            if (!noBtn) return;
            
            const btnRect = noBtn.getBoundingClientRect();
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            const dangerRadius = 100;
            
            if (
                Math.abs(mouseX - (btnRect.left + btnRect.width/2)) < dangerRadius &&
                Math.abs(mouseY - (btnRect.top + btnRect.height/2)) < dangerRadius
            ) {

                const newX = mouseX < window.innerWidth/2 
                    ? btnRect.left + 150 
                    : btnRect.left - 150;
                
                const newY = mouseY < window.innerHeight/2 
                    ? btnRect.top + 100 
                    : btnRect.top - 100;
                
                noBtn.style.left = `${Math.max(0, Math.min(window.innerWidth - btnRect.width, newX))}px`;
                noBtn.style.top = `${Math.max(0, Math.min(window.innerHeight - btnRect.height, newY))}px`;
                
                noBtn.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
            }
        });
        
        noBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert("You must read the messages!");
        });
    }
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const messageBox = this.closest('.message');
            const messageText = messageBox.querySelector('.hidden-text');
            
            messageText.classList.toggle('hidden-text');
            
            this.textContent = messageText.classList.contains('hidden-text') 
                ? '▼ Show Message' 
                : '▲ Hide Message';
            
            messageBox.style.transition = 'height 0.3s ease';
            messageBox.style.height = messageText.classList.contains('hidden-text')
                ? 'auto'
                : `${messageBox.scrollHeight}px`;
        });
    });
});