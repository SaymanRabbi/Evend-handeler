function makeOranges(){
    document.body.style.backgroundColor="orange"
}
const makeBlues = document.getElementById('make-blue');
makeBlues.onclick=makeBlue;
function makeBlue(){
   document.body.style.backgroundColor="blue"
}
// anonymous function--------
const makeBrown = document.getElementById('make-brown');
makeBrown.onclick = function(){
    document.body.style.backgroundColor ="brown";
}
// ----add eventlistener----
const makeGolden = document.getElementById('Make-GoldenRoad');
makeGolden.addEventListener('click',goldenrod)
function goldenrod(){
    document.body.style.backgroundColor = 'goldenrod'
}
const makeRed = document.getElementById('make-red');
makeRed.addEventListener('click', function (){
    document.body.style.backgroundColor = "red"
})
// ======short Cut======
document.getElementById('make-blueviolet').addEventListener('click',
     function (){document.body.style.backgroundColor = 'blueviolet'})