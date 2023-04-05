import data from "./components/data.js";




data.showData();
data.eliminarData();



// Escuchar el evento message
window.addEventListener('message', (event) => {
    if (event.data.type === 'updateLocalStorage' && event.origin === window.location.origin) {
      // Actualizar la página o realizar cualquier otra acción necesaria
      location.reload();
    }
});

