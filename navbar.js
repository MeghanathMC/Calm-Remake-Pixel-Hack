document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');
    const menuButton = document.querySelector('.menu-button');
    
    const updateNavbar = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
            navLinks.forEach(link => {
                link.classList.add('text-[#1A1A1A]');
                link.classList.remove('text-white');
            });
        } else {
            navbar.classList.remove('nav-scrolled');
            navLinks.forEach(link => {
                link.classList.remove('text-[#1A1A1A]');
                link.classList.add('text-white');
            });
        }
    };

    // Initial check
    updateNavbar();

    // Add scroll event listener
    window.addEventListener('scroll', updateNavbar);

    // Optional: Add resize event listener to handle responsive behavior
    window.addEventListener('resize', updateNavbar);
});
