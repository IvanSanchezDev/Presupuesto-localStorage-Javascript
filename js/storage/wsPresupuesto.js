let wsPresupuesto={

    listPresupuesto(arr){
        let html="";
        arr.forEach((val,id) => {
            if(val.tipo=="-"){
                return html+=`
                <tr>
                            <td>${val.descripcion}</td>
                            <td>${val.valor}</td>
                        </tr>
                        `
            }else{
                return html+=`
                <tr>
                            <td>${val.descripcion}</td>
                            <td>${val.valor}</td>
                        </tr>
                        `

            }
            
        });
        
         html;
    }

}

self.addEventListener("message", (e)=>{
    postMessage(wsPresupuesto[`${e.data.module}`](e.data.data))
})