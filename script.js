function navigateTo(pageId) {
    // 1. Hide all page sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 2. Show the target section
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
    }

    // 3. Update Navigation Active State
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Highlight the clicked nav link
    const activeLink = document.getElementById('nav-' + pageId);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // 4. Scroll to top
    window.scrollTo(0, 0);
}