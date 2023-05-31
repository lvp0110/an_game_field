/* Поле для реализации рисования внутри помещения*/
var
    canv = document.getElementById('canvas'),
    ctx  = canv.getContext('2d'),
    isMouseDown = false,
    coords = [];

    canv.width = 625;                             //*размер поля для рисования
    canv.height = 424;
    coordX = 90;
    coordY = 213;
    
canv.addEventListener('mousedown',function() {
isMouseDown = true;
});
canv.addEventListener('mouseup',function() {
isMouseDown = false;
ctx.beginPath();                       //*beginPath() - отмена 
 coords.push('mouseup');                          
});
ctx.lineWidth = 2 * 2;
canv.addEventListener('mousemove',function(e){

if(isMouseDown)
{
    coords.push([e.clientX-coordX, e.clientY-coordY]);
    ctx.lineTo(e.clientX-coordX, e.clientY-coordY);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(e.clientX-coordX,e.clientY-coordY, 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(e.clientX-coordX, e.clientY-coordY);
}
});

function save()
{
localStorage.setItem('coords', JSON.stringify(coords));
}

function clear() 
{
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canv.width, canv.height);

ctx.beginPath();
ctx.fillStyle = 'black';
}

function replay()
{
var 
    timer = setInterval(function(){
        if( !coords.length){                  //проверка координат
            clearInterval(timer);
            ctx.beginPath();
            return;
        } 
var
        crd = coords.shift();
        e = {
        clientX: crd["0"],
        clientY: crd["1"]
        };
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);                        
    }, 30);
    
}

document.addEventListener('keydown', function(e){

if(e.keyCode == 83){
    //save
    save();
    console.log('Saved');
}
if(e.keyCode == 82){
    //replay
    console.log('Replaying...');

    coords = JSON.parse(localStorage.getItem('coords'));
     clear();
     replay();
}
if(e.keyCode == 67){
    //clear
    clear();
    console.log('Clear');

}

})