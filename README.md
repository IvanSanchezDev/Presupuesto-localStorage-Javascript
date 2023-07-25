# Proyecto Manejo de Presupuesto



Este proyecto es una aplicación para el manejo de presupuestos, diseñada para ayudarte a registrar y gestionar tus ingresos y gastos de manera eficiente. La aplicación te permite ingresar descripciones detalladas de los ingresos y gastos, junto con sus respectivos valores, y realizará automáticamente los cálculos necesarios para mostrarte el total de ingresos, el total de egresos y sus respectivos porcentajes.


<img src="img/Screenshot from 2023-07-25 07-01-03.png" width="70%">



## Características

- Registro de Ingresos: Puedes añadir descripciones y montos para registrar tus ingresos, permitiéndote tener un control detallado de tus entradas de dinero.

- Registro de Gastos: La aplicación también te permite agregar descripciones y montos para tus gastos, lo que te permitirá mantener un seguimiento claro de tus salidas de dinero.

- Cálculo Automático: No te preocupes por hacer los cálculos por tu cuenta. La aplicación realizará automáticamente el cálculo del total de ingresos y egresos, y te mostrará el porcentaje de cada categoría en relación al total.

- Visualización Gráfica: Los datos recopilados serán presentados en una interfaz gráfica intuitiva que facilitará la comprensión de tus finanzas.

  

## Tecnologías Utilizadas

- **LocalStorage**: Todos tus registros se almacenarán en el almacenamiento local del navegador, lo que te permitirá acceder a ellos incluso después de cerrar la aplicación.

- **ECharts**: Utilizamos la biblioteca ECharts para generar visualizaciones gráficas interactivas que mostrarán tus datos financieros de manera clara y comprensible.

- **Web Components**: La aplicación está construida utilizando Web Components, lo que la hace modular y fácil de mantener. Cada componente es independiente y reutilizable.

- **Workers**: Hemos implementado Web Workers para realizar los cálculos en segundo plano, evitando bloquear la interfaz de usuario durante operaciones intensivas.

  

## Uso

1. En la página principal, encontrarás un formulario para ingresar nuevos registros de ingresos o gastos.
2. Completa los campos del formulario proporcionando una descripción y el valor correspondiente del ingreso o gasto.
3. Selecciona la categoría adecuada (Ingreso o Gasto) antes de enviar el formulario.
4. Los registros agregados se mostrarán en la sección de registros, y los cálculos se actualizarán automáticamente.
5. Podrás visualizar el total de ingresos, el total de egresos y los porcentajes respectivos en la sección de resumen.
6. ¡Administra tu presupuesto de manera efectiva y toma decisiones financieras informadas!