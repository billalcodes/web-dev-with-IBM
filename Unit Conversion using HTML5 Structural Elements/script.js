function temp(){
    var cel = document.getElementById("c").value;
    var faren = cel * 9/5 + 32;
    document.getElementById("f").value = faren;
}
function weight(){
    var kg = document.getElementById("k").value;
    var pound = kg * 2.20462;
    document.getElementById("p").value = pound;
}
function distance(){
    var km = document.getElementById("km").value;
    var meter = km * 0.62137;
    document.getElementById("m").value = meter; 
}
