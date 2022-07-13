let campo = document.getElementById('campo');
let cella;
let fineCiclo = true;
let bottoneStart = document.getElementById('genera');
    bottoneStart.addEventListener('click', 
    function(){
        
        campo.innerHTML = '';
        
    for (let i= 1 ;i<=100; i++) {
        
        let cella = document.createElement('div');
        cella.classList.add('cellaBase');
        campo.append(cella);
        cella.addEventListener('click', 
        function() {
        cella.classList.toggle('clicked');
        console.log(i);
           
    })
    }

})





