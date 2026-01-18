// Crear estrellas
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    starsContainer.appendChild(star);
}

// Crear nubes
function createCloud() {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    cloud.style.width = Math.random() * 100 + 80 + 'px';
    cloud.style.height = Math.random() * 40 + 30 + 'px';
    cloud.style.top = Math.random() * 50 + '%';
    cloud.style.animationDuration = Math.random() * 15 + 15 + 's';
    document.body.appendChild(cloud);

    setTimeout(() => {
        cloud.remove();
    }, 30000);
}

setInterval(createCloud, 5000);
createCloud();

// Juego del dinosaurio
const dino = document.getElementById('dino');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('highScore');
const gameOverOverlay = document.getElementById('gameOverOverlay');
const finalScoreElement = document.getElementById('finalScore');

let isJumping = false;
let gameRunning = true;
let score = 0;
let highScore = 0;
let obstacleInterval;
let scoreInterval;
let gameSpeed = 8;

function jump() {
    if (isJumping || !gameRunning) return;

    isJumping = true;
    dino.style.bottom = '280px';

    setTimeout(() => {
        dino.style.bottom = '150px';
        setTimeout(() => {
            isJumping = false;
        }, 200);
    }, 400);
}

function createObstacle() {
    if (!gameRunning) return;

    const obstacle = document.createElement('div');
    obstacle.className = 'obstacle';

    const cactus = document.createElement('div');
    cactus.className = 'cactus';

    const cactusTop = document.createElement('div');
    cactusTop.className = 'cactus-top';

    const armLeft = document.createElement('div');
    armLeft.className = 'cactus-arm cactus-arm-left';

    const armRight = document.createElement('div');
    armRight.className = 'cactus-arm cactus-arm-right';

    cactus.appendChild(cactusTop);
    cactus.appendChild(armLeft);
    cactus.appendChild(armRight);
    obstacle.appendChild(cactus);

    document.body.appendChild(obstacle);

    let obstaclePosition = window.innerWidth;
    const currentSpeed = gameSpeed + Math.floor(score / 200);

    const moveObstacle = setInterval(() => {
        if (!gameRunning) {
            clearInterval(moveObstacle);
            obstacle.remove();
            return;
        }

        obstaclePosition -= currentSpeed;
        obstacle.style.right = (window.innerWidth - obstaclePosition) + 'px';

        // Detectar colisión
        const dinoRect = dino.getBoundingClientRect();
        const obstacleRect = obstacle.getBoundingClientRect();

        if (
            dinoRect.left < obstacleRect.right - 5 &&
            dinoRect.right > obstacleRect.left + 5 &&
            dinoRect.bottom > obstacleRect.top + 5
        ) {
            endGame();
        }

        if (obstaclePosition < -50) {
            clearInterval(moveObstacle);
            obstacle.remove();
        }
    }, 20);
}

function updateScore() {
    if (gameRunning) {
        score++;
        scoreElement.textContent = score;
    }
}

function endGame() {
    gameRunning = false;
    clearInterval(obstacleInterval);
    clearInterval(scoreInterval);

    if (score > highScore) {
        highScore = score;
        highScoreElement.textContent = highScore;
    }

    finalScoreElement.textContent = score;
    gameOverOverlay.style.display = 'flex';

    // Limpiar obstáculos
    const obstacles = document.querySelectorAll('.obstacle');
    obstacles.forEach(obs => obs.remove());
}

function restartGame() {
    gameRunning = true;
    score = 0;
    scoreElement.textContent = score;
    gameOverOverlay.style.display = 'none';
    dino.style.bottom = '150px';
    startGame();
}

function startGame() {
    obstacleInterval = setInterval(() => {
        createObstacle();
    }, 2000);

    scoreInterval = setInterval(updateScore, 100);
}

// Controles
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        jump();
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.restart-btn')) {
        jump();
    }
});

// Iniciar juego
startGame();