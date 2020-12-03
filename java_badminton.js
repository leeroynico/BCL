// classement de joueurs de Bamdinton, qui donneront lieux à des points de handicap 
// pour le meilleur joueur 

let classement = ['loisirs','P12','P11','P10','D9','D8','D7','R6','R5','R4','N3','N2','N1']

// nouvelle class joueur, quid de comment récupérer et stocker les infos ? 
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

let handicap = 0



// Le premier qui marque 21 points avec au moins 2 points d'écart gagne le set.
// sinon on continue jusqu'à ce que au moins un des joueurs a 2 points de plus
// sinon ça sera le premier arrivait à 30.

let playerA = joueur1;
let playerB = joueur2;



