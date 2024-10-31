document.addEventListener('DOMContentLoaded', () => {
    const streetlamp = document.querySelector('.streetlamp');
    const lampLight = document.querySelector('.lamp-light');
    const lightBeam = document.querySelector('.light-beam');
    const buildings = document.querySelector('.buildings');
    const animatedText = document.querySelector('.animated-text');
    const stars = document.querySelector('.stars');
    const moon = document.querySelector('.moon');
    let isLampOn = false;

    streetlamp.addEventListener('click', () => {
        isLampOn = !isLampOn;
        if (isLampOn) {
            lampLight.style.opacity = '1';
            lightBeam.style.opacity = '1';
            buildings.style.filter = 'brightness(0.7)';
            document.body.style.backgroundColor = '#000033';
            animatedText.style.opacity = '1';
            animatedText.style.animation = 'textAnimation 2s ease-in-out infinite';
            stars.style.opacity = '1';
            moon.style.opacity = '1';
        } else {
            lampLight.style.opacity = '0';
            lightBeam.style.opacity = '0';
            buildings.style.filter = 'brightness(1)';
            document.body.style.backgroundColor = '#000';
            animatedText.style.opacity = '0';
            animatedText.style.animation = 'none';
            stars.style.opacity = '0';
            moon.style.opacity = '0';
        }
    });

    // Add subtle animation to the lamp
    setInterval(() => {
        if (isLampOn) {
            const flickerIntensity = 0.9 + Math.random() * 0.2;
            lampLight.style.opacity = flickerIntensity.toString();
            lightBeam.style.opacity = (flickerIntensity * 0.7).toString();
        }
    }, 100);
});