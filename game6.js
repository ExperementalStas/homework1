
    document.getElementById('startGame6').addEventListener('click', function() {
        const gameModal = document.createElement('div');
        gameModal.style.position = 'fixed';
        gameModal.style.top = '0';
        gameModal.style.left = '0';
        gameModal.style.width = '100%';
        gameModal.style.height = '100%';
        gameModal.style.backgroundColor = '#ffffff';
        gameModal.style.display = 'flex';
        gameModal.style.flexDirection = 'column';
        gameModal.style.justifyContent = 'center';
        gameModal.style.alignItems = 'center';
        gameModal.style.zIndex = '1000';
        gameModal.style.transition = 'background-color 0.3s ease';
        
        const colorButton = document.createElement('button');
        colorButton.textContent = 'Сменить цвет';
        colorButton.style.padding = '15px 30px';
        colorButton.style.fontSize = '18px';
        colorButton.style.backgroundColor = '#4CAF50';
        colorButton.style.color = 'white';
        colorButton.style.border = 'none';
        colorButton.style.borderRadius = '5px';
        colorButton.style.cursor = 'pointer';
        colorButton.style.marginBottom = '20px';
        
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Закрыть игру';
        closeButton.style.padding = '10px 20px';
        closeButton.style.backgroundColor = '#f44336';
        closeButton.style.color = 'white';
        closeButton.style.border = 'none';
        closeButton.style.borderRadius = '5px';
        closeButton.style.cursor = 'pointer';
        
        function getRandomColor() {
            return '#' + Math.floor(Math.random()*16777215).toString(16);
        }
        
        colorButton.addEventListener('click', function() {
            gameModal.style.backgroundColor = getRandomColor();
        });
        
        closeButton.addEventListener('click', function() {
            document.body.removeChild(gameModal);
        });
        
        gameModal.appendChild(colorButton);
        gameModal.appendChild(closeButton);
        
        document.body.appendChild(gameModal);
        
        gameModal.style.backgroundColor = getRandomColor();
    });
