

let divContent = document.getElementById("content");


let h1 = document.createElement("h1"); 
h1.classList.add("title");
let h2 = document.createElement("h2");
h2.style.color = "blue";
h2.textContent = "par Eudes KONDA";
h1.textContent = "Cours des Bases de Javascript";
divContent.appendChild(h1);
divContent.appendChild(h2);


divContent.innerHTML += "<div><p>Ce contenu a été ajouté dynamiquement grâce à InnerHTML</p></div>";