function init(){
  var params = new URLSearchParams(window.location.search); 

  if (params==''){
      //Do nothing
  }else{
      if(params.has('submitted')){
          document.getElementById('sent').style.display='block';
          $('html, body').animate({
            'scrollTop' : $("#sent").position().top-250
        });
      }
  }
}

window.onload = function() {
  init();
}
