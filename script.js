document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const nav = document.querySelector('.nav-links');

    mobileNavToggle.addEventListener('click', () => {
        const visibility = nav.getAttribute('data-visible');

        if (visibility === "false" || visibility === null) {
            nav.setAttribute('data-visible', true);
            mobileNavToggle.setAttribute('aria-expanded', true);
        } else {
            nav.setAttribute('data-visible', false);
            mobileNavToggle.setAttribute('aria-expanded', false);
        }
    });

    // Close mobile nav when a link is clicked
    nav.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            nav.setAttribute('data-visible', false);
            mobileNavToggle.setAttribute('aria-expanded', false);
        }
    });
});
