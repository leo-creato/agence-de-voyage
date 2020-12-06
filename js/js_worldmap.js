// Map monde pour nos des


var map = document.querySelector("div.map")

console.log(map)

var paths = map.querySelectorAll(".map_img a")

console.log(paths)

var links = map.querySelectorAll(".map_list a")

console.log(links)

var boites   = map.querySelectorAll(".map_list li is-active")



/* affiche la destination en mettant la souris sur le pays*/

paths.forEach(function(path){
    path.addEventListener("mouseenter", function(){
        var id =  this.id
        activeArea(id)
    })
})


/* affiche le pays en mettant la souris sur la destination*/

links.forEach(function(link){

    
    link.addEventListener("mouseenter",function(){
        var id = this.id.replace("lst-" , "")
        console.log(id)
        
        activeArea(id)   
    }) 
})



var activeArea = function(id){

    map.querySelectorAll(".is-active").forEach(function(item){
        item.classList.remove("is-active")
        })

    if(id!== undefined){
        document.querySelector("#lst-"+id).classList.add("is-active")
        document.querySelector("#" + id).classList.add("is-active")
        document.querySelector("#li-" + id).classList.add("is-active")

    }


}


map.addEventListener("mouseover", function(){
    activeArea()
})


console.log(boites)
