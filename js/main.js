let campo = document.getElementById('campo');
let cella;
let bottoneStart = document.getElementById('genera');

bottoneStart.addEventListener('click', 
function(){

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





