// handle match game 
let button = document.getElementById('bouton')
function match(){  
    // déclarations et récuperations des points du match
    let set1PlayerA = Number (document.getElementById('set1PlayerA').value);
    let set2PlayerA = Number (document.getElementById('set2PlayerA').value);
    let set3PlayerA = Number (document.getElementById('set3PlayerA').value);
    let set1PlayerB = Number (document.getElementById('set1PlayerB').value);
    let set2PlayerB = Number (document.getElementById('set2PlayerB').value);
    let set3PlayerB = Number (document.getElementById('set3PlayerB').value);
    let nombreSetJoueurA = 0;
    let nombreSetJoueurB = 0;
    // fonction qui pour savoir qui gagne un set
        function winSet (pointsA , pointsB){
        if (pointsA > 30 || pointsB > 30){
            alert ('vérifiez vos scores svp');
        }
        else if (((pointsA === 21) && (pointsB <20)) || 
                ((pointsA - pointsB === 2) && (pointsA > pointsB))|| 
                ((pointsA === 30) && (pointsB === 29))){
            nombreSetJoueurA += 1;
        }  
        else if (((pointsB === 21) && (pointsA <20)) || 
                ((pointsB - pointsA === 2) && (pointsB > pointsA))|| 
                ((pointsB === 30) && (pointsA === 29))){
            nombreSetJoueurB += 1;
        }
        else {
            alert ('vérifiez vos scores svp');
            }
        }
    winSet (set1PlayerA,set1PlayerB);
    winSet (set2PlayerA,set2PlayerB);
 
    // si 2-0, pas de 3éme set
        if(nombreSetJoueurA ===1 && nombreSetJoueurA ===1){
            winSet (set3PlayerA,set3PlayerB);
        }
        else if(nombreSetJoueurB > nombreSetJoueurA){
            alert ('joueur B a gagné')
        }
        else {
            alert ('joueur A a gagné')
        };
  
   

}
button.addEventListener('click', match)

/*
class joueurs {
    constructor(firstname,name,classement,genre){
        this.name = name,
        this.fistrname = firstname,
        this.classement = classement,
        this.genre = genre
    }
}
let joueur1 = new joueurs ('James', 'Hendrix','P10','male')
let joueur2 = new joueurs ('Harry', 'Poter', 'D8', 'male')

let classement = ['loisirs','P12','P11','P10','D9','D8','D7','R6','R5','R4','N3','N2','N1']

*/

