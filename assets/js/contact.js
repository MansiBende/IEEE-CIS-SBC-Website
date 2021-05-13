window.onload = function exampleFunction() {
    if (document.URL.indexOf("email") > -1) {
        document.getElementById('sent').classList.add('success');
      }
}