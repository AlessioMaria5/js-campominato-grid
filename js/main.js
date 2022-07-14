let campo = document.getElementById('campo');
let livello = document.getElementById('diff');

// LEVELS 

let medium = 'Medio'
let facile = 'Facile'
let difficile = 'Difficile'

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
   
        level(difficile,10,100)
        level(facile,7,49)
        level(medium,9,81);      
})

numeroPunteggio.innerHTML = "il tuo punteggio è " +punteggioAttuale;




// LE MIE FUNZIONI ///////////////////////////

function incermentoPunteggio(x,y) {

    if(x.classList.contains('clicked')){
        y++
        console.log(y);
    }  
    
    return y
}


function level(x,y,z) {

    if(livello.value == `${x}`){

        

        for (let i= 1 ;i<=z; i++) { 

            punteggio.append('');

            let cella = document.createElement('div');
            cella.classList.add('cellaBase');
            cella.style.width = `calc(100% /${y})`
            cella.style.height = `calc(100% /${y})`
            campo.append(cella);
            cella.addEventListener('click', 
            function () {
            cella.classList.toggle('clicked');
            console.log(i); 
            if(cella.classList.contains('clicked')){
                punteggioAttuale++
            }  
            
            numeroPunteggio.append(punteggioAttuale);  
        })
        }
    }
}









