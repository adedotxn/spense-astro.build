const menu = document.querySelector("#menu");

menu.addEventListener('click', () => {
    alert("workss")
    console.log("workssss")
})

let options = {
    rootMargin : '0px',
    threshold : 0.35
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fade-in')
        } else {
            entry.target.classList.remove('fade-in')
        }
    })
}, options)

const animate = document.querySelectorAll('.animate')
animate.forEach((el) => observer.observe(el) )

