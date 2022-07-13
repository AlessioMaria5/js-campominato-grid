let campo = document.getElementById('campo');
let cella;
let livello = document.getElementById('diff');

let bottoneStart = document.getElementById('genera');
    bottoneStart.addEventListener('click', 
    function(){

        campo.innerHTML = '';

        if(livello.value == 'Difficile'){

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
        }

        else if(livello.value == 'Facile'){

            for (let i= 1 ;i<=49; i++) {
        
                let cella = document.createElement('div');
                cella.classList.add('cellaBase');
                cella.style.width = 'calc(100% / 7)'
                cella.style.height = 'calc(100% / 7)'
                campo.append(cella);
                cella.addEventListener('click', 
                function() {
                cella.classList.toggle('clicked');
                console.log(i);
                   
            })
            }
        }

        else if(livello.value == 'Medio'){

            for (let i= 1 ;i<=81; i++) {
        
                let cella = document.createElement('div');
                cella.classList.add('cellaBase');
                cella.style.width = 'calc(100% / 9)'
                cella.style.height = 'calc(100% / 9)'
                campo.append(cella);
                cella.addEventListener('click', 
                function() {
                cella.classList.toggle('clicked');
                console.log(i);
                   
            })
            }
        }

})



