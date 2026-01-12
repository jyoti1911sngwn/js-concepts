document.querySelector("#form").addEventListener('keydown' , (e)=>{
    if(e.target.dataset.uppercase !== undefined){
        e.target.value = e.target.value.toUpperCase()
    }
    
})