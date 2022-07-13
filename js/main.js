let campo = document.getElementById('campo');
let cella;

let i = 0
while (i<100) {

    let cella = document.createElement('div');
    cella.classList.add('cellaBase');
    campo.append(cella);
    cella.addEventListener('click', 
    function() {

    cella.classList.toggle('clicked');
    alert('la tua cella è la numero' + cella[i]);

})
i++
}



