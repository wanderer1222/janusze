(function(){
//     function loop(i){
//         var bg = document.getElementsByClassName("container")[0];
//         i++;
//         bg.style.backgroundImage = "url(img/img" + i + ".jpg)";
      
//         if (i < 3 && i != 3) {
//             setTimeout(function(){
//                 loop(i);
//             }, 3000);
//             return;
//         }
//         else {
//             setTimeout(function(){
//                 loop(0);
//             }, 3000);
//         }
//     }
// var i = Math.floor(Math.random()*3 + 1);

// loop(0);


setInterval(change, 1000);
var i = 0;
function change () {
  if (i < 3 && i != 3 ){
    i++;
    var bg = document.getElementsByClassName("container")[0];
    bg.style.backgroundImage = "url(img/img" + i + ".jpg)";
    console.log(i);
}
    else {
        i = 0;
    }
}
}());