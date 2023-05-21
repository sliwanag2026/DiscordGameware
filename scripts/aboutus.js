function homepage(){    
    setTimeout(() => { location.replace("shop.html") }, 750);
}
function andrei(){
    document.getElementById("andreidescription").style.display = "block";
    document.getElementById("chrisdescription").style.display = "none";
    document.getElementById("sheldondescription").style.display = "none";
}
function chris(){
    document.getElementById("andreidescription").style.display = "none";
    document.getElementById("chrisdescription").style.display = "block";
    document.getElementById("sheldondescription").style.display = "none";
}
function sheldon(){
    document.getElementById("andreidescription").style.display = "none";
    document.getElementById("chrisdescription").style.display = "none";
    document.getElementById("sheldondescription").style.display = "block";
}
