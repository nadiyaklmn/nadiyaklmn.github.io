let sections = document.querySelectorAll('section');
let lastScrollY = 0;
window.addEventListener('scroll', () => { 
    const currentScrollY = window.scrollY;
    sections.forEach(section => {
        let rect = section.getBoundingClientRect(); 
        if (currentScrollY > lastScrollY) {
            if (rect.top > 0 && rect.top < window.innerHeight) {
                //section.scrollIntoView({ behavior: 'smooth' });
                
            } 
        }

        if (currentScrollY < lastScrollY) {
            if (rect.bottom > 0 && rect.bottom < window.innerHeight){
                //section.scrollIntoView({ behavior: 'smooth' });
                
            } 
        }}
    );

    lastScrollY = currentScrollY; // Update lastScrollY for the next comparison

    });