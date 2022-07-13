let campo = document.getElementById('campo');
let cella;


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



