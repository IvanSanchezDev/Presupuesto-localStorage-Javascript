let wsPresupuesto = {
  listEgresos(arr) {
    let html = "";
    arr.forEach((val, id) => {
      if (val.tipo == "+") {
        html += `
                <tr>
                            <td>${val.descripcion}</td>
                            <td>${val.valor}</td>
                        </tr>
                        `;
      }
    });

    return html;
  },
  listIngresos(arr) {
    let html = "";
    arr.forEach((val, id) => {
      if (val.tipo == "-") {
        html += `
                        <tr>
                            <td>${val.descripcion}</td>
                            <td>${val.valor}</td>
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
};

self.addEventListener("message", (e) => {
  postMessage(wsPresupuesto[`${e.data.module}`](e.data.data));
});
