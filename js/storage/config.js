export default {
  dataMyPresupuesto() {
    const form = document.querySelector("#myFormulario");
    let presupuestos = JSON.parse(localStorage.getItem("myPresupuesto")) || {presupuestos: [],};
    form.addEventListener("submit", (e) => {
      //localStorage.clear();
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target));
     // console.log(data);
      presupuestos.presupuestos.unshift(data);
      localStorage.setItem("myPresupuesto", JSON.stringify(presupuestos));
      //console.log(presupuestos);
      form.reset();
    });
  },
};
