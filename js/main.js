import data from "./components/data.js";
import config from "./storage/config.js"





addEventListener("submit", (e) => {

  const data = Object.fromEntries(new FormData(e.target));
  console.log(data);
  config.presupuestos.presupuestos.unshift(data)
  localStorage.setItem("myPresupuesto", JSON.stringify(config.presupuestos));

  console.log(presupuestos);

  e.target.reset();
  e.preventDefault();


});

data.showData();
data.eliminarData();






