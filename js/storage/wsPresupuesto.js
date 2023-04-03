let wsPresupuesto = {
  listEgresos(arr) {
    let html = "";
    arr.forEach((val, id) => {
      if (val.tipo == "-") {
        html += `
                <tr>
                            <td class="descripcion">${val.descripcion}</td>
                            <td class="text-danger">${val.valor}</td>
                            <td>
                              <button class="btn btn-danger eliminar">Eliminar</button>
                            </td>
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
                        <tr>
                            <td class="descripcion">${val.descripcion}</td>
                            <td class="text-success">${val.valor}</td>
                            <td><button class="btn btn-danger eliminar">Eliminar</button></td>
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

    return total.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });;
  },
  porcentajeEgresos(arr){
    const porcentaje= (this.contEgresos(arr)*100)/this.contIngresos(arr);
    return porcentaje.toFixed(2);
  }
 
};

self.addEventListener("message", (e) => {
  postMessage(wsPresupuesto[`${e.data.module}`](e.data.data));
});
