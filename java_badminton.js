// pour le match 
let button = document.getElementById('bouton')
function match(){
    let set1PlayerA = Number (document.getElementById('set1PlayerA').value);
    let set2PlayerA = Number (document.getElementById('set2PlayerA').value);
    let set3PlayerA = Number (document.getElementById('set3PlayerA').value);
    let set1PlayerB = Number (document.getElementById('set1PlayerB').value);
    let set2PlayerB = Number (document.getElementById('set2PlayerB').value);
    let set3PlayerB = Number (document.getElementById('set3PlayerB').value);
    if ( set1PlayerA < 21 && set1PlayerB < 21){
        alert ('Vérifiez vos scores !');
    }
    else if (set1PlayerA > set1PlayerB){
        alert ('player A gagne');
    }  
    else {alert ('player B gagne')}
}
button.addEventListener('click', match)
let messageVainqueur = ""
//winner.innerHTML = messageVainqueur;
let winner = document.getElementById('winner')














// Le premier qui marque 21 points avec au moins 2 points d'écart gagne le set.
// sinon on continue jusqu'à ce que au moins un des joueurs a 2 points de plus
// sinon ça sera le premier arrivé à 30.

// classement de joueurs de Bamdinton, qui donneront lieux à des points de handicap 
// pour le meilleur joueur 