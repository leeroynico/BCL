//------ création des joueurs du championnat-------------
let classement= ['loisirs','P12','P11','P10','D9','D8','D7','R6','R5','R4','N3','N2','N1']
let allJoueurs = ['--Choisissez un joueur--'];
class Joueurs {
    constructor(firstname,name,classement,genre){
        this.name = name
        this.firstname = firstname
        this.classement = classement
        this.genre = genre
        this.points = 0
        }
        addMe(){
            allJoueurs.push(this.name+' '+this.firstname+' '+this.classement);
        }
}
let joueur1 = new Joueurs ('James', 'Hendrix',classement[3],'male')
joueur1.addMe()
let joueur2 = new Joueurs ('Harry', 'Poter', classement[5], 'male')
joueur2.addMe()
let joueur3 = new Joueurs ('Nico', 'Leroy', classement[4], 'male')
joueur3.addMe()
let joueur4 = new Joueurs ('Clément', 'Hollande', classement[10], 'male')
joueur4.addMe()

//------renvoie les joueurs dans une liste HTML--------------
let newjoueur1 = document.getElementById('listejoueur1');
allJoueurs.forEach(function(element,key) {
    newjoueur1[key] = new Option(element,key);
});

let newjoueur2 = document.getElementById('listejoueur2');
allJoueurs.forEach(function(element,key) {
    newjoueur2[key] = new Option(element,key);
});
/*let listejoueur1 = document.getElementById('listejoueur1');
let newOption = document.createElement("option")
newOption.append(allJoueurs);
listejoueur1.add(newOption);*/

//-------calcul du handicap -------------------------
let handicapResultat = document.getElementById("handicap");
let btnhandicap = document.getElementById('boutonhandicap')
function FindClassement (nb) {
    let classementUser = allJoueurs[nb].split(' ').slice(2).join('')
    let isSame = (element) => element == classementUser
    return (classement.findIndex(isSame))
}
newjoueur1.addEventListener('change',()=>{
    console.log(FindClassement (newjoueur1.value))
})

btnhandicap.addEventListener ('click',() => {
    let hJ1 =  FindClassement (newjoueur1.value)
    let hJ2 =  FindClassement (newjoueur2.value)
    let ecart = Math.abs((hJ1-hJ2)*2)
    let player1 = allJoueurs[newjoueur1.value].split(' ').slice(1,2).join('')
    let player2 = allJoueurs[newjoueur2.value].split(' ').slice(1,2).join('')
        if (hJ2>hJ1){
    handicapResultat.innerHTML = (player1+' aura '+ ecart+' points d\'avance par set')
    }
        else if (hJ1===hJ2){
    handicapResultat.innerHTML = ('pas de points d\'avance......même classement!!!')
    }   else {
    handicapResultat.innerHTML = (player2+' aura '+ ecart+' points d\'avance par set')
    }
})

//------ handle match game + championnat------
let button = document.getElementById('bouton')
button.addEventListener('click',(event) => { 
    //------ déclarations et récuperations des points du match------
    let set1PlayerA = Number (document.getElementById('set1PlayerA').value);
    let set2PlayerA = Number (document.getElementById('set2PlayerA').value);
    let set3PlayerA = Number (document.getElementById('set3PlayerA').value);
    let set1PlayerB = Number (document.getElementById('set1PlayerB').value);
    let set2PlayerB = Number (document.getElementById('set2PlayerB').value);
    let set3PlayerB = Number (document.getElementById('set3PlayerB').value);
    let nombreSetJoueurA = 0;
    let nombreSetJoueurB = 0;
    //------ fonction pour savoir qui gagne un set------
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
            alert ('vérifiez vos scores');
            }
        }
    winSet (set1PlayerA,set1PlayerB);
    

     switch (true){
        case nombreSetJoueurA === 0 && nombreSetJoueurB === 0 :
            break;
        case nombreSetJoueurA === 1 || nombreSetJoueurB === 1 :
            winSet (set2PlayerA,set2PlayerB); 
            break;
        case nombreSetJoueurA === 1 && nombreSetJoueurB === 1 :
            winSet (set3PlayerA,set3PlayerB); 
        case nombreSetJoueurA > nombreSetJoueurB :
            alert ('Joueur A a gagné')
            break;
        case nombreSetJoueurA < nombreSetJoueurB :
            alert ('Joueur B a gagné')
            break;
        default : 
            alert ('vérifiez les règles'); 
            break;
     }
  

    /*
        if(nombreSetJoueurA ===1 && nombreSetJoueurA ===1){
            winSet (set3PlayerA,set3PlayerB);
        }
        else if(nombreSetJoueurB > nombreSetJoueurA){
            alert ('joueur B a gagné')
        }
        else {
            alert ('joueur A a gagné')
        };
    */
})
