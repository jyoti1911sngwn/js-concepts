document.querySelector("#form").addEventListener('click' , (e)=>{
    window.location.href = '/' + e.target.id;
})