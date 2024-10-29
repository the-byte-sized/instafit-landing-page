document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    const featureButtons = document.querySelectorAll('[data-scroll-to]');
    const scollToElements = {};

    featureButtons.forEach((featureButton) => {
        scollToElements[`${featureButton.dataset.scrollTo}`] = document.querySelector(featureButton.dataset.scrollTo);

        featureButton.addEventListener('click', ({
            currentTarget,
        }) => {
            if (currentTarget) {

                document.querySelectorAll('.nav-item').forEach((navItem) => {
                    if (navItem.dataset.scrollTo === currentTarget.dataset.scrollTo) {
                        navItem.classList.add('active');
                    } else {
                        navItem.classList.remove('active');
                    }
                });

                scollToElements[`${featureButton.dataset.scrollTo}`]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        })
    });
})