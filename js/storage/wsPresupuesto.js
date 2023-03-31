let wsPresupuesto={

    listEgresos(arr){
        let html="";
        arr.forEach((val,id) => {
            if(val.tipo=="+"){
                 html+=`
                <tr>
                            <td>${val.descripcion}</td>
                            <td>${val.valor}</td>
                        </tr>
                        `
            }
            
        });
        
         return html;
    }, 
    listIngresos(arr){
        let html="";
        arr.forEach((val,id) => {
            if(val.tipo=="-"){
                 html+=`
                        <tr>
                            <td>${val.descripcion}</td>
                            <td>${val.valor}</td>
                        </tr>
                        `
            }
            
        });
        
         return html;
    }

}

self.addEventListener("message", (e)=>{
    postMessage(wsPresupuesto[`${e.data.module}`](e.data.data))
})