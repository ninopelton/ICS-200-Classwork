window.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('.section');

    function setActiveNavItem() {
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            const navItem = document.querySelector(`[href="#${sectionId}"]`);

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItem.classList.add('active');
            } else {
                navItem.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveNavItem);
});
