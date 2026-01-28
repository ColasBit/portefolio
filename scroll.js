const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible"); // si tu veux l’effet inverse en scroll up
    }
  });
}, {
  threshold: 0.2
});

sections.forEach((section, index) => {
  // une section sur deux part de la gauche
  if (index % 2 === 0) {
    section.classList.add("from-left");
  }
  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {

    // 2. GÉNÉRATEUR DE PARTICULES (AMBIANCE)
    const particleCount = 20; // Nombre de particules simultanées (ne pas abuser)
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Taille aléatoire
        const size = Math.random() * 4 + 2 + 'px'; 
        particle.style.width = size;
        particle.style.height = size;
        
        // Position horizontale aléatoire
        particle.style.left = Math.random() * 100 + 'vw';
        
        // Vitesse aléatoire (entre 10s et 25s pour monter)
        const duration = Math.random() * 15 + 10 + 's';
        particle.style.animationDuration = duration;
        
        // Couleur légèrement variable (Jaune vers Blanc)
        particle.style.opacity = Math.random() * 0.5 + 0.2;

        document.body.appendChild(particle);

        // Nettoyage : on supprime la div quand l'animation est finie
        setTimeout(() => {
            particle.remove();
        }, parseFloat(duration) * 1000);
    }

    // Lance une particule toutes les 800ms
    setInterval(createParticle, 800);
});
