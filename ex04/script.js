let nbr=math.random()*100;
nbr=math.floor(nbr);
let  x=prompt("donner un nombre");
x=parseInt(x);
while(trouver===false){
    if(x<nbr){
        alert("ceb nombre est grand");
        x=prompt("donner un nombre");
        x=parseInt(x);
    }else if(x>nbr){
        alert("se nombre est petit");
        x=prompt("donner un nombre");
        x=parseInt(x);
    }else{
        alert("la reponse est juste");
        x=prompt("donner un nombre");
        x=parseInt(x);
        let trouve=true
    }
}