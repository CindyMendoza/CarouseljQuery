


var images = ["assets/img/dish1.jpg","assets/img/dish2.jpg","assets/img/dish3.jpg","assets/img/dish4.jpg","assets/img/dish5.jpg"];


var LoadImages = () => {
  for(var i = 0; i<images.length; i++){
    var div = $("<div/>");
    var img = $("<img/>").attr("src", images[i]);
    div.append(img);
    $("#carousel").append(div);
  console.log(images[i]);
  }
}


$(document).ready(function(){
  LoadImages();
});
