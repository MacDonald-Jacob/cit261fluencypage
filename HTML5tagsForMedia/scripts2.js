window.onload = function(){
    var drawing = document.getElementById("myDrawing");
    var ctx = drawing.getContext("2d");
    var img = document.getElementById("world");
    ctx.drawImage(img, -250, -400, 1000, 1000);

}