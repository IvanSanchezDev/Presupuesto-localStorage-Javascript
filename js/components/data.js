
import config from "./../storage/config.js"

export default {
  showData() {



    Object.assign(this, JSON.parse(localStorage.getItem("myPresupuesto")));

    const ws = new Worker("js/storage/wsPresupuesto.js", { type: "module" });

    const arrayDatos = this.presupuestos;

    ws.postMessage({ module: "listEgresos", data: arrayDatos });
    ws.postMessage({ module: "listIngresos", data: arrayDatos });
    ws.postMessage({ module: "contIngresos", data: arrayDatos });
    ws.postMessage({ module: "contEgresos", data: arrayDatos });
    ws.postMessage({ module: "totalPresupuesto", data: arrayDatos });
    ws.postMessage({ module: "porcentajeEgresos", data: arrayDatos })




    let id = [
      "#egresos",
      "#ingresos",
      "#valorIngresos",
      "#valorEgresos",
      "#presupuesto",
      "#porcentajeEgresos",
    ];
    let count = 0;


    ws.addEventListener("message", (e) => {



      document.querySelector(`${id[count]}`).insertAdjacentHTML("beforeend", e.data.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }));
      id.length - 1 == count ? ws.terminate : count++;
    });

    this.showGrafica();



  },
  eliminarData(){
    document.querySelector(".tabla").addEventListener("click", (e) => {
      let item;
      let descripcion;
      if (e.target.classList.contains("eliminar")) {
        item = e.target.parentNode.parentNode;
        descripcion = item.querySelector(".descripcion").textContent;
    
      }
    
      const ws = new Worker("js/storage/wsPresupuesto.js", { type: "module" });
    
      let Arraypresupuestos = config.presupuestos;
    
      const dataa = { Arraypresupuestos, descripcion }
    
      ws.postMessage({ module: "eliminarItems", data: dataa });
    
    
      ws.addEventListener("message", (e) => {
        localStorage.setItem("myPresupuesto", JSON.stringify(e.data));
      })
    
      item.parentNode.removeChild(item); // Eliminar la fila de la tabla
    
    
    })
  },


  showGrafica() {
    Object.assign(this, JSON.parse(localStorage.getItem("myPresupuesto")));

    const ws = new Worker("js/storage/wsPresupuesto.js", { type: "module" });

    const arrayDatos = this.presupuestos;


    ws.postMessage({ module: "graficaPresupuesto", data: arrayDatos })

    ws.addEventListener("message", (e) => {

      let myChart = echarts.init(document.getElementById('grafica'));
      myChart.setOption(e.data);
      ws.terminate();
    })

 


  }
}









