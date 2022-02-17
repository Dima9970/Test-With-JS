const slides = document.querySelectorAll('.slid')

for (const slid of slides) {

    slid.addEventListener('click',()=>{
        cearActive()

        slid.classList.add('active')
    })
    function cearActive() {
        slides.forEach((slid)=>{slid.classList.remove('active')})
        

    }
}