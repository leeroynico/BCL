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


// création des joueurs du championnat
let classement = ['loisirs','P12','P11','P10','D9','D8','D7','R6','R5','R4','N3','N2','N1'];
class joueurs {
    constructor(firstname,name,classement,genre){
        this.name = name,
        this.firstname = firstname,
        this.classement = classement,
        this.genre = genre
    }
}
let joueur1 = new joueurs ('James', 'Hendrix',classement[3],'male')
let joueur2 = new joueurs ('Harry', 'Poter', classement[5], 'male')




//renvoie les joueurs dans le HTML
let newjoueur1 = document.getElementById('listejoueur1');
let options = ['--Choisissez le joueur 1--', joueur1.firstname+' '+ joueur1.classement , joueur2.firstname+' '+ joueur2.classement];
options.forEach(function(element,key) {
    newjoueur1[key] = new Option(element,key);
});

let newjoueur2 = document.getElementById('listejoueur2');
let options2 = ['--Choisissez le joueur 2--', joueur1.firstname+' '+ joueur1.classement , joueur2.firstname+' '+ joueur2.classement];
options2.forEach(function(element,key) {
    newjoueur2[key] = new Option(element,key);
});

//calcul handicap 

let handicapResultat =  document.getElementById("handicap");
let btnhandicap = document.getElementById('boutonhandicap')
function calculHandicap (){
    let handicap = classement.indexOf(joueur1.classement) - classement.indexOf(joueur2.classement);
    handicapResultat.innerHTML = Math.abs(handicap*3);
}

btnhandicap.addEventListener('click',calculHandicap);



