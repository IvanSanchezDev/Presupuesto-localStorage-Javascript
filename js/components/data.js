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
    //ws.postMessage({module: "graficaPresupuesto", data:arrayDatos})
  
    

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


    
  },


  
  eliminarDataEgreso(){
    const listado = document.querySelector("#egresos"); // Seleccionar la tabla
    
    listado.addEventListener("click", (e) => { // Agregar evento de click
    if (e.target.classList.contains("eliminar")) { // Verificar si se hizo clic en el botón eliminar
    const item = e.target.parentNode.parentNode; // Obtener el elemento <tr> que contiene la fila
    console.log(item);
    const descripcion = item.querySelector(".descripcion").textContent; // Obtener el texto de la descripción
    let Arraypresupuestos = JSON.parse(localStorage.getItem('myPresupuesto')); // Obtener el array de objetos de localStorage
    Arraypresupuestos.presupuestos.forEach((obj, index) => { // Iterar sobre los objetos del array
      if (obj.descripcion === descripcion) { // Si la descripción del objeto coincide con la descripción de la fila
        Arraypresupuestos.presupuestos.splice(index, 1); // Eliminar el objeto del array utilizando splice()
        localStorage.setItem("myPresupuesto", JSON.stringify(Arraypresupuestos)); // Actualizar localStorage
        item.parentNode.removeChild(item); // Eliminar la fila de la tabla
        window.postMessage({type: 'updateLocalStorage'}, '*');
      }
    });
  }
});

  },
  eliminarDataIngreso(){
    const listado = document.querySelector("#ingresos"); // Seleccionar la tabla
    
    listado.addEventListener("click", (e) => { // Agregar evento de click
    if (e.target.classList.contains("eliminar")) { // Verificar si se hizo clic en el botón eliminar
    const item = e.target.parentNode.parentNode; // Obtener el elemento <tr> que contiene la fila
    console.log(item);
    const descripcion = item.querySelector(".descripcion").textContent; // Obtener el texto de la descripción
    let Arraypresupuestos = JSON.parse(localStorage.getItem('myPresupuesto')); // Obtener el array de objetos de localStorage
    Arraypresupuestos.presupuestos.forEach((obj, index) => { // Iterar sobre los objetos del array
      if (obj.descripcion === descripcion) { // Si la descripción del objeto coincide con la descripción de la fila
        Arraypresupuestos.presupuestos.splice(index, 1); // Eliminar el objeto del array utilizando splice()
        localStorage.setItem("myPresupuesto", JSON.stringify(Arraypresupuestos)); // Actualizar localStorage
        item.parentNode.removeChild(item); // Eliminar la fila de la tabla
        window.postMessage({type: 'updateLocalStorage'}, '*');
      }
    });
  }
});

  },

  showGrafica(){
    Object.assign(this, JSON.parse(localStorage.getItem("myPresupuesto")));

    const ws = new Worker("js/storage/wsPresupuesto.js", { type: "module" });

    const arrayDatos = this.presupuestos;


    ws.postMessage({module: "graficaPresupuesto", data:arrayDatos})

    ws.addEventListener("message", (e)=>{
    
      let myChart = echarts.init(document.getElementById('grafica'));
      myChart.setOption(e.data);
    })


  }
}

  

  

  



