const bgMusic = document.getElementById('bgMusic');
const finalSound = document.getElementById('finalSound');
bgMusic.volume = 0.2;
finalSound.volume = 0.3;

function showHint() {
    document.getElementById('hintText').classList.add('show');
}

function checkName() {
    const input = document.getElementById('nameInput').value.trim().toLowerCase();
    const result = document.getElementById('resultText');

    bgMusic.play().catch(() => console.log('Браузер ждёт действия пользователя'));

    if (input === 'зая') {
        result.classList.add('show');
        setTimeout(() => {
            document.getElementById('mainContent').style.display = 'none';
            document.getElementById('loveStory').style.display = 'flex';
            setTimeout(() => {
                document.getElementById('nextButton').style.display = 'block';
            }, 5000);
        }, 3500);
    } else {
        result.classList.remove('show');
        alert('Попробуй ещё раз, любимая ❤️');
    }
}

function goToGallery() {
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('loveStory').style.display = 'none';
    document.getElementById('gallery').style.display = 'block';
    document.getElementById('galleryNextButton').style.display = 'block';
    console.log('Gallery should be visible now');
}

function goToFinal() {
    document.getElementById('gallery').style.display = 'none';
    document.getElementById('galleryNextButton').style.display = 'none';
    document.getElementById('finalPage').style.display = 'flex';
    bgMusic.pause();
    finalSound.play().catch(() => console.log('Браузер ждёт действия пользователя для финального звука'));
    createHeartParticles();
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 16 + 16) + 'px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}

function createHeartParticles() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart-particle');
            heart.textContent = '💖';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = (Math.random() * 10 + 20) + 'px';
            heart.style.animationDelay = `${Math.random() * 3}s`;
            document.getElementById('finalPage').appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }, i * 200);
    }
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart-particle');
        heart.textContent = '💖';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 10 + 20) + 'px';
        heart.style.animationDelay = '0s';
        document.getElementById('finalPage').appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 500);
}

setInterval(createHeart, 500);