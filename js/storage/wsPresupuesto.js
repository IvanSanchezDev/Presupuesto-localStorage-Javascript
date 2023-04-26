let wsPresupuesto = {
  config: new Intl.NumberFormat({ minimumFractionDigits: 0 }),
  listEgresos(arr) {
    let html = "";
    arr.forEach((val, id) => {
      if (val.tipo == "-") {
        
        html += `
                <tr id="filaEgresos">
                            <td class="descripcion">${val.descripcion}</td>
                            <td class="text-danger valor">-$${this.config.format(val.valor)}</td>
                            <td class="text-danger">${(val.valor*100/this.contEgresos(arr)).toFixed(2)}%</td>
                            <td><button class="btn  eliminar" id_ingreso=${id}><i class="bi bi-x-circle text-danger"></i></button></td> 
                        </tr>
                        `;
      }
    });

    return html;
  },
  listIngresos(arr) {
    let html = "";
    arr.forEach((val, id) => {
      if (val.tipo == "+") {
       
        html += `
                        <tr class="fila">
                            <td class="descripcion">${val.descripcion}</td>
                            <td class="text-success valor">+$${this.config.format(val.valor)}</td>
                            <td><button class="btn  eliminar" id_ingreso=${id} ><i class="bi bi-x-circle text-danger"></i></button></td>
                        </tr>
                        `;
      }
    });

    return html;
  },
  contIngresos(arr) {
    let ingresos = arr.reduce((acumulador, item) => {
      return item.tipo === "+" ? acumulador + Number(item.valor) : acumulador;
    }, 0);

    return ingresos;
  },
  contEgresos(arr) {
    let egresos = arr.reduce((acumulador, item) => {
      return item.tipo === "-" ? acumulador + Number(item.valor) : acumulador;
    }, 0);

    return egresos;
  },
  totalPresupuesto(arr) {
    const total = this.contIngresos(arr) - this.contEgresos(arr);

    return total;
  },
  porcentajeEgresos(arr){
    const porcentaje= (this.contEgresos(arr)*100)/this.contIngresos(arr);
    return `${porcentaje.toFixed(2)}%`;
  },

  
  
  graficaPresupuesto(arr){
    // Initialize the echarts instance based on the prepared dom
    // Specify the configuration items and data for the chart
    let option = {
    title: {
        text: 'Presupuesto'
    },
    tooltip: {},
    legend: {
        data: ['Cantidad']
    },
    xAxis: {
        data: ['Egresos', 'Ingresos']
    },
    yAxis: {},
    series: [
        {
        name: 'valor',
        type: 'bar',
        data: [
          {value: `${this.contEgresos(arr)}`, 
          itemStyle: {
          color: '#37A2FF'}}, 
        { value: `${this.contIngresos(arr)}`, color: '#37A2FF'} ],
        
        }
    ]
    };

    // Display the chart using the configuration items and data just specified.
    return option;
},

  
  
 
}

self.addEventListener("message", (e) => {
  postMessage(wsPresupuesto[`${e.data.module}`](e.data.data));
});
