var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'bushra1.png') {
      myImage.setAttribute ('src','bushra2.png');
    } else {
      myImage.setAttribute ('src','bushra1.png');
    }
}