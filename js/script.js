
var canvas = document.getElementById("pintura");
var ctx = canvas.getContext("2d");

//-****clases///////////////
class Player{

    constructor(nombre, x,y, width, height){
        this._nombre=nombre
        this._x=x;
        this._y=y;
        this._width =width;
        this._height = height;
    }
    get height(){
        return this._height;
    }
    get width(){
        return this._width;
    }
}

/////////////***** */

/////
class Bala{
    velocidadDeLanzamiento=100;
    velocidad=10;
    constructor(x,y, width, height){
        this._x=x;
        this._y=y;
        this._width =width;
        this._height = height;
    }
    
    get height(){
        return this._height;
    }
    get width(){
        return this._width;
    }

}

////////
class Enemie{
    velocidad=2;
    x=0;
    y=0;

    constructor(nombre,width,height){
        this._nombre = nombre;
        this._width = width;
        this._height = height;
    }
    get height(){
        return this._height;
    }
    get width(){
        return this._width;
    }
}
let mouseClickeado =false;
////////////player//
player1 = new Player("x",50,50,60,40);
const nave= new Image();
nave.src = "./img/nave.png";
////////
balaPlayer1 = new Bala(0, 0, 6, 13);
balaPlayer2 = new Bala(0, 0, 6, 13);
balaPlayer3 = new Bala(0, 0, 6, 13);
balaPlayer4 = new Bala(0, 0, 6, 13);
balaPlayer5 = new Bala(0, 0, 6, 13);
let balaPlayer = [balaPlayer1, balaPlayer2, balaPlayer3, balaPlayer4, balaPlayer5];
const balaPlay= new Image();
balaPlay.src = "./img/bala.png";
//////////////enemies//////
enemie10= new Enemie("seguidor",50,50);
enemie11= new Enemie("seguidor",50,50);
enemie12= new Enemie("seguidor",50,50);
enemie1=[enemie10,enemie11,enemie12];
console.log(enemie1);
const Enemie1= new Image();
Enemie1.src = "./img/enemie1.png";

enemie13= new Enemie("y",50,50);
enemie14= new Enemie("y",50,50);
enemie15= new Enemie("y",50,50);
enemie2=[enemie13,enemie14,enemie15];
console.log(enemie1);
const Enemie2= new Image();
Enemie2.src = "./img/enemie1.png";

enemie16= new Enemie("z",50,50);
enemie17= new Enemie("z",50,50);
enemie18= new Enemie("z",50,50);
enemie3=[enemie16,enemie17,enemie18];
console.log(enemie1);
const Enemie3= new Image();
Enemie3.src = "./img/enemie2.png";
//
const gameover= new Image();
/////////////////////////////

////////////
let contador=0;
let cont=0;
let cont2=0;
let z=[];
let x=[];
let y=[];
let aux=false;
let pos=new Map();
let cantEnemies1=0;
let posicionEnemie=[];
let cantEnemies2=0;
let cantEnemies3=0;
let puntaje=0;
/////////colision//////////////////////////////**********/*/ */
function colision(x,y,width,height,x2,y2,width1,height1){
    let x1 = [];
    let y1 =[];
    let esquina= [x1,y1];
    let ret= true;
    let ret1 = true;
    let ret2= true;

    Mayorx = x+width/2;
    menorx = x-width/2;
    Mayory = y+height/2;
    menory= y-height/2;

    esquina[0][0]= x2-width1/2;
    esquina[1][0]= y2-height1/2;
    esquina[0][1]= x2+width1/2;
    esquina[1][1]= y2-height1/2;
    esquina[0][2]= x2+width1/2;
    esquina[1][2]= y2+height1/2;
    esquina[0][3]= x2-width1/2;
    esquina[1][3]= y2+height1/2;

    /*for(let i= 0; i<4; i++){
        console.log(esquina[0][i],"asdfadsf");
        console.log(esquina[1][i],"asdfadf")
    }*/
    for(let i= 0; i<4; i++){
        ret1=true;
        ret2=true;
        if(esquina[0][i]<=Mayorx){
            esquina[0][i]-=menorx;
            //console.log(esquina[0][i],"rest",Mayorx,menorx,esquina[1][i],Mayory,menory);
            if(esquina[0][i]>=0){
                ret1=false;
            }
        }
        if(esquina[1][i]<=Mayory){
            esquina[1][i]-=menory;
            //console.log(esquina[1][i],"rest2");
            if(esquina[1][i]>=0){
                ret2=false;
            }
        }
        ret=ret1||ret2;
        if(!ret){
            return ret;
        }
    }
    //console.log(ret);
    return ret;

}
///////////////////////
function DisparoDeBala(x,y,balaNO,contador){
        
        if(true){

        }
        if(! (balaNO==1)){
        balaPlayer1.x = x;
        balaPlayer1.y = y-contador-60;
        }
        
        if(! (balaNO==2)){
        balaPlayer2.x = x+contador/balaPlayer4.width/2;
        balaPlayer2.y = y-contador-60;
        }
        if(! (balaNO==3)){
        balaPlayer3.x = x-contador/balaPlayer4.width/2;
        balaPlayer3.y = y-contador-60;
        }
        if(! (balaNO==4)){
        balaPlayer4.x = x+contador/balaPlayer4.width;
        balaPlayer4.y = y-contador-60;
        }
        if(! (balaNO==5)){
        balaPlayer5.x = x-contador/balaPlayer4.width;
        balaPlayer5.y = y-contador-60;
        }
        
            ctx.drawImage(balaPlay, balaPlayer1.x, balaPlayer1.y, balaPlayer1.width, balaPlayer1.height);
            ctx.drawImage(balaPlay, balaPlayer2.x, balaPlayer2.y, balaPlayer2.width, balaPlayer2.height);
            ctx.drawImage(balaPlay, balaPlayer3.x, balaPlayer3.y, balaPlayer3.width, balaPlayer3.height);
            ctx.drawImage(balaPlay, balaPlayer4.x, balaPlayer4.y, balaPlayer4.width, balaPlayer4.height);
            ctx.drawImage(balaPlay, balaPlayer5.x, balaPlayer5.y, balaPlayer5.width, balaPlayer5.height);
        
            
            
        
            
        
}
function colisenemieBala(enemie){
    //console.log(enemie.x," *************");
    //console.log(enemie.x,enemie.y, enemie.width, enemie.height, "<>", balaPlayer1.x, balaPlayer1.y, balaPlayer1.width, balaPlayer1.height,"**************12316546****adf")
    if(!colision(enemie.x,enemie.y, enemie.width, enemie.height,balaPlayer1.x, balaPlayer1.y, balaPlayer1.width, balaPlayer1.height)){
        enemie.x=1000;
        puntaje+=100;
        return 1;
    }
    if(!colision(enemie.x,enemie.y, enemie.width, enemie.height,balaPlayer2.x, balaPlayer2.y, balaPlayer1.width, balaPlayer1.height)){
        enemie.x=1000;
        puntaje+=100;
        return 2;
    }
    if(!colision(enemie.x,enemie.y, enemie.width, enemie.height,balaPlayer3.x, balaPlayer3.y, balaPlayer1.width, balaPlayer1.height)){
        enemie.x=1000;
        puntaje+=100;
        return 3;
    }
    if(!colision(enemie.x,enemie.y, enemie.width, enemie.height,balaPlayer4.x, balaPlayer4.y, balaPlayer1.width, balaPlayer1.height)){
        enemie.x=1000;
        puntaje+=100;
        return 4;
    }
    if(!colision(enemie.x,enemie.y, enemie.width, enemie.height,balaPlayer5.x, balaPlayer5.y, balaPlayer1.width, balaPlayer1.height)){
        enemie.x=1000;
        puntaje+=100;
        return 5;
    }
    return -1;
}
function colisionEnemiePlaye(){
    for(let i=0; i<3; i++){
       if(!colision(player1.x,player1.y-35,player1.width, player1.height, enemie1[i].x, enemie1[i].y, enemie1[i].width, enemie1[i].height)){
         return false;
       }
       if(!colision(player1.x,player1.y-35,player1.width, player1.height, enemie2[i].x, enemie2[i].y, enemie2[i].width, enemie2[i].height)){
        return false;
      }
      if(!colision(player1.x,player1.y-35,player1.width, player1.height, enemie3[i].x, enemie3[i].y, enemie3[i].width, enemie3[i].height)){
        return false;
      }
       
    }
    return true;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
////////////*********************************************************************** */

function animate(){
    
    
    ctx.clearRect(0,0,pintura.width,pintura.height);
    
    
    ///////Enemigos///////
    
    if(cont2 == 0){
        cantEnemies1= getRandomInt(3)+1;
        for (let i = 0; i < cantEnemies1; i++) {
            enemie1[i].x=getRandomInt(700);
        }
        console.log("#####asdfadsfadkjñadfkl",cont2);
    }
    if(cont2 == 150){
        cantEnemies2= getRandomInt(3)+1;
        for (let i = 0; i < cantEnemies2; i++) {
            enemie2[i].x=getRandomInt(700);
            console.log("#####asdfadsfadkjñadfkl",cont2);
        }
    }
    if(cont2 == 380){
        cantEnemies3= getRandomInt(3)+1;
        for (let i = 0; i < cantEnemies3; i++) {
            enemie3[i].x=getRandomInt(700);
            console.log("#####asdfadsfadkjñadfkl",cont2);
        }
    }

    
    /*console.log(cantEnemies1,"####################################3");
    console.log("Posiciones iniciales:", enemie1);*/
    
    if(cont2>500){
        cont2=0;
    }else{
        cont2+=enemie1[1].velocidad;
    }

    for(let i= 0; i<cantEnemies1; i++){
        console.log(enemie1[i].x," *************");
        ctx.drawImage(Enemie1,enemie1[i].x, enemie1[i].y,enemie1[i].width, enemie1[i].height);
        enemie1[i].y+=enemie1[i].velocidad;
        
        console.log(cont2);
        if(enemie1[i].y > 500){
        enemie1[i].y=0;
        }
    }

    for(let i= 0; i<cantEnemies2; i++){
        console.log(enemie2[i].x," *************");
        ctx.drawImage(Enemie2,enemie2[i].x, enemie2[i].y,enemie2[i].width, enemie2[i].height);
        enemie2[i].y+=enemie2[i].velocidad;
        
        if(enemie2[i].y > 500){
        enemie2[i].y=0;
        }
    }
    for(let i= 0; i<cantEnemies3; i++){
        console.log(enemie3[i].x," *************");
        ctx.drawImage(Enemie3,enemie3[i].x, enemie3[i].y,enemie3[i].width, enemie3[i].height);
        enemie3[i].y+=enemie3[i].velocidad;
        
        if(enemie3[i].y > 500){
        enemie3[i].y=0;
        }
    }
    /*for(let i= 0; i<cantEnemies1; i++){
        console.log(enemie1[i].x," *************",i);
    }*/
                //console.log( colision(3,4,2,2,4,5,2,2))

    ///////////gamrover/////////////////
    if(!colisionEnemiePlaye()){
        gameover.src ="./img/gameover1.gif";
    }
    ctx.drawImage(gameover, 0, 0, 1000, 500);
        ///////////Balas player///////
        
    if(mouseClickeado){

        cont+=balaPlayer1.velocidad;
        if(cont%balaPlayer1.velocidadDeLanzamiento ==0){
            x[cont/balaPlayer1.velocidadDeLanzamiento]=player1.x;
            y[cont/balaPlayer1.velocidadDeLanzamiento]=player1.y;
            //console.log(x[cont/balaPlayer1.velocidadDeLanzamiento],y[cont/balaPlayer1.velocidadDeLanzamiento],1,cont);
        }
        /*for(let i=0; i<=cont; i+=balaPlayer1.velocidadDeLanzamiento){
            for(let j=0; j<cantEnemies1; j++){
                z[i/balaPlayer1.velocidadDeLanzamiento]= colisenemieBala(enemie1[0]);
            }
        }*/
        for(let i=0; i<=cont; i+=balaPlayer1.velocidadDeLanzamiento){
            for(let j=0; j<cantEnemies1; j++){
                z[i/balaPlayer1.velocidadDeLanzamiento]= colisenemieBala(enemie1[j]);
            }
            for(let j=0; j<cantEnemies2; j++){
                z[i/balaPlayer2.velocidadDeLanzamiento]= colisenemieBala(enemie2[j]);
            }
            for(let j=0; j<cantEnemies3; j++){
                z[i/balaPlayer3.velocidadDeLanzamiento]= colisenemieBala(enemie3[j]);
            }
            //console.log(colisenemieBala(enemie1[0]),"*****************")
            DisparoDeBala(x[i/balaPlayer1.velocidadDeLanzamiento],y[i/balaPlayer1.velocidadDeLanzamiento],z[i/balaPlayer1.velocidadDeLanzamiento],cont-i);
            //console.log(x[i/balaPlayer1.velocidadDeLanzamiento] , y[i/balaPlayer1.velocidadDeLanzamiento],"adf",i,cont-i);
            
        }
        if(cont==1000){
            cont=0;
        }
    }
    else{
        cont=0;
        DisparoDeBala(950,700,0,200);
    }


    //navePlayer1
    ctx.beginPath();
    
    ctx.drawImage(nave, player1.x-player1.width/2, player1.y-player1.height, player1.width, player1.height);
    
    ctx.fillStyle='red';
    ctx.fill();
    ctx.stroke();
    /////////
    ctx.beginPath();
    ctx.rect(1,1,pintura.width-1,pintura.height-1);
    ctx.stroke();

    ctx.font = '30px Arial'; 
    ctx.fillStyle = 'white'; 
    ctx.textAlign = 'center'; 
    ctx.textBaseline = 'middle';
    ctx.fillText("points:",800 , 50);
    ctx.fillText(puntaje,900 , 50);
    requestAnimationFrame(animate)
}      
animate();

pintura.addEventListener('mousemove',(info)=>{
    player1.y = info.y;
    player1.x = info.x;
    //console.log(info);
})

pintura.addEventListener("mousedown", () => {
    mouseClickeado= true; 
  });
  
pintura.addEventListener("mouseup", () => {
    mouseClickeado = false;
  });
  

