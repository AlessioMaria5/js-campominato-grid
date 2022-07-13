let campo = document.getElementById('campo');
let cella;

for (i=0 ; i<100 ; i++) {

    let cella = document.createElement('div');
    cella.classList.add('cellaBase');
    campo.append(cella);
    cella.addEventListener('click', 
    function() {

    cella.classList.toggle('clicked');
    alert('la tua cella è la numero' + cella[is]);

})
}



