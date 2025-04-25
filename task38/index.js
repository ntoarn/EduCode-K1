const accordion = document.querySelectorAll(".accordion-question")
for(let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active")
        const accordionContent = this.nextElementSibling
        // accordionContent.classList.toggle("show")
        if(accordionContent.style.maxHeight){
            accordionContent.style.maxHeight = null
        }else{
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"
        }
    })
}