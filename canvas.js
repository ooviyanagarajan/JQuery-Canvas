$(document).ready(function () {

    var canv = document.getElementById('myCanvas');
    var ctx = canv.getContext("2d");

    $("#draw_btn").click(function () {
           ctx.clearRect(0, 0, canv.width, canv.height);
        ctx.fillStyle = '#48D1CC';
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(60, 240);
        ctx.lineTo(240, 240);
        ctx.lineTo(150, 60);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

    });

    $("#rotate_btn").click(function () {
        ctx.clearRect(0, 0, canv.width, canv.height);
        ctx.fillStyle = '#48D1CC';
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 3;
        ctx.save();
        ctx.translate(canv.width / 2, canv.height / 2);
        ctx.rotate(Math.PI / 4);

        ctx.beginPath();
        ctx.moveTo(-90, 90);
        ctx.lineTo(90, 90);
        ctx.lineTo(0, -90);

        ctx.closePath();
        ctx.fill();
        ctx.stroke();

      
        ctx.restore();

    });

    $("#clear_btn").click(function () {
       ctx.clearRect(0, 0, canv.width, canv.height);
    });


});