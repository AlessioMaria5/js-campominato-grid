let campo = document.getElementById('campo');
let livello = document.getElementById('diff');



// PUNTEGGIO

let punteggio = document.getElementById('punteggio');
let numeroPunteggio = document.createElement('span');
punteggio.append(numeroPunteggio);
let punteggioAttuale = '';


// PUNTEGGIO


// GENERA CELLE e DIFFICOLTA  -----------------------------------

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
                if(cella.classList.contains('clicked')){
                    punteggioAttuale++
                    console.log(punteggioAttuale);
                }   
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
                if(cella.classList.contains('clicked')){
                    punteggioAttuale++
                    console.log(punteggioAttuale);
                }   
            })
            }
        }

        medium();
        

        //PUNTEGGIO
        
       
})





numeroPunteggio.innerHTML = "il tuo punteggio è " +punteggioAttuale;



function incermentoPunteggio(x,y) {

    if(x.classList.contains('clicked')){
        y++
        console.log(y);
    }  
    
    return y
}


function medium() {

    if(livello.value == 'Medio'){

        

        for (let i= 1 ;i<=81; i++) { 
            
            punteggioAttuale = '';

            let cella = document.createElement('div');
            cella.classList.add('cellaBase');
            cella.style.width = 'calc(100% / 9)'
            cella.style.height = 'calc(100% / 9)'
            campo.append(cella);
            cella.addEventListener('click', 
            function () {
            cella.classList.toggle('clicked');
            console.log(i); 
            if(cella.classList.contains('clicked')){
                punteggioAttuale++
                numeroPunteggio.append(punteggioAttuale);
            }   
            
        })
        }
    }
}









