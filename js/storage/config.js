export default {
    dataMyPresupuesto() {
        const form = document.querySelector("#myFormulario");
        let presupuestos = []

        form.addEventListener("submit", (e) => {
            //localStorage.clear()
            e.preventDefault();
            
           const data = Object.fromEntries(new FormData(e.target))
           const {tipo, descripcion, valor} = data
            presupuestos.unshift({tipo,descripcion,valor})
            localStorage.setItem("myPresupuesto", JSON.stringify({presupuestos}))
            console.log(presupuestos);
            form.reset();
        })
    }
}