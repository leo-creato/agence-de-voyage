//Template
let template = document.querySelector("#ListeDestinations") // retourne le premier élément de liste Destination
for (const d of Destinations ) {
    let clone = document.importNode(template.content, true)  // créer une nouvelle copie du document 
    
    newContent = clone.firstElementChild.innerHTML
        .replace(/{{new Destination}}/g, d.v) // permet de remplacer un élément du span par un élément du tableau
        clone.firstElementChild.innerHTML = newContent
        document.body.appendChild(clone);
}