
var inputElement = document.getElementById("screen");

function numberprint(a){
    inputElement.value += a;
};
function deleteOneCharacter(){
    inputElement.value = inputElement.value.slice(0,-1);
};
function deleteAll(){
    inputElement.value = "";
}
function equal(){
    inputElement.value = eval(inputElement.value);
}