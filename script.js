let sections = document.querySelectorAll('section');
let lastScrollY = 0;
window.addEventListener('scroll', () => { 
    const currentScrollY = window.scrollY;
    sections.forEach(section => {
        let rect = section.getBoundingClientRect(); 
        if (currentScrollY > lastScrollY) {
            if (rect.top >= 50 && rect.top < window.innerHeight - 50) {
                section.scrollIntoView({ behavior: 'smooth' });
                
            } 
        }

        if (currentScrollY < lastScrollY) {
            if (rect.bottom >= 50 && rect.bottom < window.innerHeight - 100){
                section.scrollIntoView({ behavior: 'smooth' });
                
            } 
        }}
    );

    lastScrollY = currentScrollY; // Update lastScrollY for the next comparison

    });