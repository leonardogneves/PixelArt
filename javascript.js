// Essa função realiza o loading. _>

window.addEventListener("load", function() {
    var fadeContainer = document.querySelector("#preload");
  
  setTimeout(function() {
      
        fadeContainer.style.display = "none";
    
  }, 5000);
});


// Essa função realiza o "checkbox", na escolha do seu gênero. _>

function tickmark1() {
    var x = document.getElementById('tick-feminino');
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex"
    }
}

function tickmark2() {
    var x = document.getElementById('tick-masculino');
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex"
    }
}


