document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    const featureButtons = document.querySelectorAll('[data-scroll-to]');
    const features = [];
    let previousFeatureIndex = 0;

    featureButtons.forEach((featureButton) => {
        features.push(document.querySelector(featureButton.dataset.scrollTo));

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

                features.forEach((feature, index) => {
                    if(feature.id === currentTarget.dataset.scrollTo.split('#')[1]) {
                        feature.classList.add('d-block');
                        feature.classList.remove('d-none');
                        feature.dataset.aos = previousFeatureIndex > index ? 'slide-right' : 'slide-left';

                        previousFeatureIndex = index;

                        setTimeout(() => {
                            feature.classList.add('aos-init', 'aos-animate');
                        }, 0);
                    } else {
                        feature.classList.add('d-none');
                        feature.classList.remove('aos-init', 'aos-animate');
                    }
                });
            }
        })
    });

    document.addEventListener('aos:in:contact-form-button', ({ detail }) => {
        detail.classList.add('hvr-ripple-out', 'hvr-shadow', 'hvr-icon-forward');
    });

    document.addEventListener('aos:in:discover-more-button', ({ detail }) => {
        console.log(detail);
        detail.classList.add('hvr-ripple-out', 'hvr-shadow', 'hvr-icon-forward');
    });
})