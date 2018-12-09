
        // -------------------------------- CREATION DE LA CLASSE ------------------------------------- //
function Sprite(filename, left, top) {
    this._node = document.createElement("img");
    this._node.src = filename;
    this._node.style.position = "absolute";
    document.body.appendChild(this._node);

        // Get écriutre renvoie le Left et le Set lecture modifie le le Left //
Object.defineProperty(this, "left", { 
    get: function() {
        return this._left;
},
    set : function(value) {
        this._left = value;
        this._node.style.left = value + "px";
}
} );

Object.defineProperty(this, "top", { 
    get: function() {
        return this._top;
},
    set : function(value) {
        this._top = value;
        this._node.style.top = value + "px";
}
} );

// Pour gerer l'affichage, affiché ou caché //
Object.defineProperty(this, "display", {
    get : function() {
        return this._node.style.display;
    },
    set : function(value) {
        this._node.style.display = value;
    }
} );
        // Reprende la fonction propriété left//
this.left = left;

        // Reprend la fonction propriété top //
this.top = top;


};
function resetGame() {
        location.reload();
}

function pauseGame(){
    if (gameActive == false) return true;
        gameActive = false
};
        // Pour lancer le jeux //
function startGame(){
	if (gameActive == true) return false; 
	gameActive = true;
};
var gameActive = false;
var mob1 = new Sprite("style/img/mob1.png", 100, 50);
var mob2 = new Sprite("style/img/mob1.png", 250, 50);
var mob3 = new Sprite("style/img/mob1.png", 400, 50);
var mob4 = new Sprite("style/img/mob1.png", 550, 50);
var mob5 = new Sprite("style/img/mob1.png", 700, 50);

var mob6 = new Sprite("style/img/mob1.png", 850, 50);
var mob7 = new Sprite("style/img/mob1.png", 1000, 50);
var mob8 = new Sprite("style/img/mob1.png", 1150, 50);
var mob9 = new Sprite("style/img/mob1.png", 1300, 50);
var mob10 = new Sprite("style/img/mob1.png", 1450, 50);

var mob11 = new Sprite("style/img/mob1.png", 100, 250);
var mob12 = new Sprite("style/img/mob1.png", 250, 250);
var mob13 = new Sprite("style/img/mob1.png", 400, 250);
var mob14 = new Sprite("style/img/mob1.png", 550, 250);
var mob15 = new Sprite("style/img/mob1.png", 700, 250);

var mob16 = new Sprite("style/img/mob1.png", 850, 250);
var mob17 = new Sprite("style/img/mob1.png", 1000, 250);
var mob18 = new Sprite("style/img/mob1.png", 1150, 250);
var mob19 = new Sprite("style/img/mob1.png", 1300, 250);
var mob20 = new Sprite("style/img/mob1.png", 1450, 250);

var mob21 = new Sprite("style/img/mob1.png", 100, 450);
var mob22 = new Sprite("style/img/mob1.png", 250, 450);
var mob23 = new Sprite("style/img/mob1.png", 400, 450);
var mob24 = new Sprite("style/img/mob1.png", 550, 450);
var mob25 = new Sprite("style/img/mob1.png", 700, 450);

var mob26 = new Sprite("style/img/mob1.png", 850, 450);
var mob27 = new Sprite("style/img/mob1.png", 1000, 450);
var mob28 = new Sprite("style/img/mob1.png", 1150, 450);
var mob29 = new Sprite("style/img/mob1.png", 1300, 450);
var mob30 = new Sprite("style/img/mob1.png", 1450, 450);

var mob31 = new Sprite("style/img/mob1.png", 100, 650);
var mob32 = new Sprite("style/img/mob1.png", 250, 650);
var mob33 = new Sprite("style/img/mob1.png", 400, 650);
var mob34 = new Sprite("style/img/mob1.png", 550, 650);
var mob35 = new Sprite("style/img/mob1.png", 700, 650);

var mob36 = new Sprite("style/img/mob1.png", 850, 650);
var mob37 = new Sprite("style/img/mob1.png", 1000, 650);
var mob38 = new Sprite("style/img/mob1.png", 1150, 650);
var mob39 = new Sprite("style/img/mob1.png", 1300, 650);
var mob40 = new Sprite("style/img/mob1.png", 1450, 650);



var missile = new Sprite("style/img/missile.png");

var vaisseau = new Sprite("style/img/vaisseau.png");
missile.display = "none";

vaisseau.left =850;
vaisseau.top = 800;
        // -------------------------------------- PARTIE EVENEMENT ------------------------------------ //
        // Récupère les KeyCode //
document.onkeydown = function(event) {
    console.log(event.keyCode);
    if (gameActive) {
    if (event.keyCode == 37) {      // FLéche de gauche, aller à gauche //
        vaisseau.left -= 20;
    } else if (event.keyCode == 39) { // Fléche de droite, aller à droite //
        vaisseau.left += 20;
    } else if (event.keyCode == 38) { // Fléche du haut, aller en haut //
        vaisseau.top -= 20;
    } else if (event.keyCode == 40) { // Fléche du bas, aller en bas //
        vaisseau.top += 20;
} }
    // Pour empécher l'image de sortire de l'écran //
if (vaisseau.left <0) { 
    vaisseau.left = 0;
} 
if (vaisseau.left > document.body.clientWidth - vaisseau._node.width) {
    vaisseau._left = document.body.clientWidth - vaisseau._node.width;
} 
if (vaisseau.top < 0) {
    vaisseau.top = 0;
} 
if (vaisseau.top > document.body.clientHeight - vaisseau._node.height) {
    vaisseau._top = document.body.clientHeight - vaisseau._node.height;
}
if ( event.keyCode == 32) { // Pour le missile touche espace pour l'afficher //
        missile.display = "block";
        missile.left = vaisseau.left + ( vaisseau._node.width - missile._node.width ) /2; // Pour centrer le missile //
        missile.top = vaisseau.top;
        missile.startAnimation(moveMissile, 50);
}};


        // -------------------------------------- PARTIE INTERVAL POUR FAIRE BOUGER -------------------------------- //
        // Permet de déclancer un délai régulier a un traitement //
Sprite.prototype.startAnimation = function(fct, interval) 
{
    
if ( this._clock) 
    window.clearInterval(this._clock);
    var _this = this;
    this._clock = window.setInterval(function(){ // this._clock c'est l'identifiant de l'interval //
    fct(_this);
    }, interval);
};

        // Si déjà une animatuon en cour annule l'autre et relance //
Sprite.prototype.stopAnimation = function() {
    window.clearInterval(this._clock);
};

        // Pour faire bouger le missile //
function moveMissile( missile ) {
    if (gameActive) {
    missile.top -= 20;
if (missile.top < -50) {
    missile.stopAnimation();
    missile.display = "none";

}}
        // Pour faire dépop //
    for(var i=1; i<=40; i++) {
        var mob = window["mob"+i]; 
        if (gameActive) {
            if (mob.display == "none") continue;
        if ( missile.checkCollision(mob)) {
             missile.stopAnimation();
             missile.display = "none";
             mob.stopAnimation();
             mob.display = "none";
        }
    }
}};

        // Pour faire bouger les mobs //
function moveMobToLeft(mob) {
    if (gameActive) {
    mob.left -= 10;
if (mob.left <= 0) {
    mob.top += 50;
    mob.startAnimation(moveMobToRight, 50); 
}
}};

function moveMobToRight(mob) {
    if (gameActive) {
    mob.left += 10;
if ( mob.left > document.body.clientWidth - mob._node.width) {
    mob.top += 50;
    mob.startAnimation(moveMobToLeft, 50);
    
}}};
    // Pour créer l'évenement sur chaqe variable de mob //
for (var i=1; i<=40; i++) {
    window["mob"+i].startAnimation(moveMobToRight, 50)
};


        // Pour géré les collisions //
        // Retourne l'inverse de la contraint si pas de collision il y collision //
Sprite.prototype.checkCollision = function ( other ) {
    return ! ( ( this.top + this._node.height < other.top) || // Si mon top est inférieur a l'élément pas de collision //
                 this.top > (other.top + other._node.height) ||  // Si mon top est suppérieur a l'élément pas de collision //
                 (this.left + this._node.width < other.left) || // Si mon left est inférieur a l'élément pas de collision //
                 this.left > (other.left + other._node.width)); // Si mon left est suppérieur a l'élément pas de collision //
};
