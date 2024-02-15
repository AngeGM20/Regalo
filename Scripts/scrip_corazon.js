document.getElementById("showHearts").addEventListener("click", function() {
    const heartContainer = document.getElementById("heartContainer");
    
    // Generar múltiples corazones
    const numHearts = 10; // Puedes ajustar este número según tu preferencia
    
    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement("div");
        heart.textContent = "❤️ 🥰"; // Usar emoji de corazón
        
        heart.classList.add("heart");
        
        // Posición aleatoria dentro del viewport
        const randomX = Math.floor(Math.random() * window.innerWidth);
        const randomY = Math.floor(Math.random() * window.innerHeight);
        
        heart.style.left = randomX + "px";
        heart.style.top = randomY + "px";
        
        document.body.appendChild(heart);
        
        // Eliminar corazón después de la animación
        setTimeout(function() {
            heart.remove();
        }, 1000); // Eliminar después de 1 segundo
    }
});
