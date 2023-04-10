
export default {
  dataMyPresupuesto() {
    const form = document.querySelector("#myFormulario");
    let presupuestos = JSON.parse(localStorage.getItem("myPresupuesto")) || {presupuestos: [],};
    form.addEventListener("submit", (e) => {

      const data = Object.fromEntries(new FormData(e.target));

      presupuestos.presupuestos.unshift(data)
      localStorage.setItem("myPresupuesto", JSON.stringify(presupuestos));
      window.postMessage({type: 'updateLocalStorage'}, '*');
 
      e.target.reset();
      e.preventDefault(); 

      
    });



    
  },

  

}
  
  
 

  

