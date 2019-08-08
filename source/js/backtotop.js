const backToTop = () => {
    const backToTopButton = document.querySelector(".backtotop")

    window.onscroll = () => {
        const scrollTop = document.documentElement.scrollTop 
        
        if (scrollTop > 100) {
            backToTopButton.classList.add("backtotop--visible")
        } else {
            backToTopButton.classList.remove("backtotop--visible")
        }
    }

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}

backToTop()