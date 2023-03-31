import config from "../storage/config.js";

export default {
  showData() {
    config.dataMyPresupuesto();
    Object.assign(this, JSON.parse(localStorage.getItem("myPresupuesto")));

    const ws = new Worker("js/storage/wsPresupuesto.js", { type: "module" });

    const arrayDatos = this.presupuestos;

    ws.postMessage({ module: "listEgresos", data: arrayDatos });
    ws.postMessage({ module: "listIngresos", data: arrayDatos });
    ws.postMessage({ module: "contIngresos", data: arrayDatos });
    ws.postMessage({ module: "contEgresos", data: arrayDatos });
    ws.postMessage({ module: "totalPresupuesto", data: arrayDatos });
    ws.postMessage({module:"porcentajeEgresos", data:arrayDatos})

    let id = [
      
      "#egresos",
      "#ingresos",
      "#valorIngresos",
      "#valorEgresos",
      "#presupuesto",
      "#porcentajeEgresos"
    ];
    let count = 0;
    ws.addEventListener("message", (e) => {
      if (typeof e.data === "number") {
        e.data.toLocaleString("es-CO", { style: "currency", currency: "COP" });
      }
      document.querySelector(`${id[count]}`).insertAdjacentHTML("beforeend", e.data);
      count++;
    });
  },
};
