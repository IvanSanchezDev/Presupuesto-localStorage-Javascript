let wsPresupuesto = {
  listEgresos(arr) {
    let html = "";
    arr.forEach((val, id) => {
      if (val.tipo == "-") {
        const formattedValue = (val.valor).toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
        html += `
                <tr id="filaEgresos">
                            <td class="descripcion">${val.descripcion}</td>
                            <td class="text-danger valor">-${formattedValue}</td>
                            <td class="text-danger">${(val.valor*100/this.contEgresos(arr)).toFixed(2)}%</td>
                            <td><button class="btn  eliminar"><i class="bi bi-x-circle text-danger"></i></button></td> 
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
        const formattedValue = (val.valor).toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
        html += `
                        <tr class="fila">
                            <td class="descripcion">${val.descripcion}</td>
                            <td class="text-success valor">+${formattedValue}</td>
                            <td><button class="btn  eliminar"><i class="bi bi-x-circle text-danger"></i></button></td>
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
  
  
  
 
};

self.addEventListener("message", (e) => {
  postMessage(wsPresupuesto[`${e.data.module}`](e.data.data));
});
