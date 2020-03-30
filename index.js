const buttons= document.getElementById('category-container').children;
const items= document.getElementById('container').children;

for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        for (let j=0; j<buttons.length; j++) {
            buttons[j].classList.remove("active")
        }
        this.classList.add("active")
        const target = this.getAttribute("data-target");

        for (let x=0; x<items.length; x++) {
            items[x].style.display= "none";
            if(items[x].getAttribute("data-id") == target) {
                items[x].style.display ="block";
            }
            if(target == "all") {
                items[x].style.display ="block";
            }
        }
    })
}