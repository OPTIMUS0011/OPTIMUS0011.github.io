var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'talhaone.png') {
      myImage.setAttribute ('src','talhatwo.png');
    } else {
      myImage.setAttribute ('src','talhaone.png');
    }
}