function init(){
  var params = new URLSearchParams(window.location.search); 

  if (params==''){
      //Do nothing
  }else{
      if(params.has('success')){
          document.getElementById('sent').style.display='block';
          $('html, body').animate({
            'scrollTop' : $("#sent").position().top-250
        });
      }
  }
}

const form = document.getElementById('form');

window.onload = function() {
  init();
}
