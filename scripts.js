document.addEventListener('DOMContentLoaded', () => {
    // Aseguramos que la primera escena se muestre correctamente al cargar.
    const initialSceneId = window.location.hash.substring(1) || 'inicio';
    goToScene(initialSceneId);
});

/**
 * Función para cambiar a una nueva escena.
 * @param {string} nextSceneId - El ID del div de la siguiente escena.
 */
function goToScene(nextSceneId) {
    // 1. Ocultar todas las escenas
    const allScenes = document.querySelectorAll('.scene');
    allScenes.forEach(scene => {
        scene.classList.remove('active');
    });

    // 2. Mostrar la escena elegida
    const nextScene = document.getElementById(nextSceneId);
    if (nextScene) {
        nextScene.classList.add('active');

        // 3. Cambiar la imagen de fondo
        const bgElement = document.getElementById('background');
        const newBg = nextScene.getAttribute('data-bg');
        
        if (newBg) {
            bgElement.style.backgroundImage = newBg;
        } else {
            // Opcional: Establecer un fondo por defecto o el último conocido
            // bgElement.style.backgroundImage = 'none'; 
        }

        // 4. Actualizar la URL (como si fuera un hipervínculo) y enfocar
        window.location.hash = nextSceneId;
        nextScene.focus();

    } else {
        console.error('Error: Escena no encontrada con ID:', nextSceneId);
    }
}
