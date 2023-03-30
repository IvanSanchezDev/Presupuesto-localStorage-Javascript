import config from "../storage/config.js"

export default{
    
    showData(){

        config.dataMyPresupuesto();
        Object.assign(this, JSON.parse(localStorage.getItem("myPresupuesto")))
       

        const ws=new Worker("js/storage/wsPresupuesto.js", {type:"module"})


        ws.postMessage({module:"listPresupuesto", data:this.presupuestos})

        let id=["#ingresos", "#egresos"]
        let count=0;

        console.log("entraaa");
        ws.addEventListener("message", (e)=>{
            console.log("entraa22");
            console.log(e.data);
            let doc=new DOMParser().parseFromString(e.data, "text/html");
            
            
            document.querySelector(`${id[count]}`).append(doc.body);
            
          })
    }
}