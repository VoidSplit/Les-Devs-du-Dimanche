window.addEventListener("load", function(event) {
    let loader = document.getElementById('loader');
    loader.style.transition = '0.8s';
    loader.style.opacity = 0;
    setTimeout(function(){
       loader.style.display = 'none';
    }, 800);
});