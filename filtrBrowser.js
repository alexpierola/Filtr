const flStyles = {
    transitionOut: '',
    transitionIn: '',
    duration: 100
}

const filtr = {
    load: ({ useTransition, transitionIn, transitionOut, duration }) => {
        if (useTransition !== null && useTransition === true) {
            if (transitionIn !== null && transitionOut !== null) {
                flStyles.transitionOut = transitionOut;
                flStyles.transitionIn = transitionIn;
            } else {
                console.error('TransitionIn or TransitionOut value is incorrect');
            }
            if (duration != null && !isNaN(duration)) {
                flStyles.duration = duration;
            } else {
                console.eror('Duration value is incorrect');
            }
        }
    },
    fire: () => {
        const filters = document.querySelectorAll('.controls .filtr-btn');
        filters.forEach(filter => {
            filter.addEventListener('click', e => {
                const toFiltr = e.target.getAttribute('data-filtr');
                const listElems = document.querySelectorAll('.filtr-elem');
                listElems.forEach((elem) => {
                    elem.classList.add('animated');
                    if (flStyles.transitionOut !== '') elem.classList.add(flStyles.transitionOut);
                    elem.style.transitionDuration = flStyles.duration;
                    setTimeout(() => {
                        elem.style.display = 'none';
                        elem.classList.remove('animated');
                        if (flStyles.transitionOut !== '') elem.classList.remove(flStyles.transitionOut);
                        if (flStyles.transitionIn !== '') elem.classList.remove(flStyles.transitionIn);
                        if (toFiltr === '-') {
                            elem.style.display = 'inherit';
                            elem.classList.add('animated');
                            if (flStyles.transitionIn !== '') elem.classList.add(flStyles.transitionIn);
                            return;
                        }
                    }, flStyles.duration);
                });
                listElems.forEach((elem) => {
                    if (elem.getAttribute('data-elem') === toFiltr) {
                        setTimeout(() => {
                            elem.style.display = 'inherit';
                            elem.classList.add('animated');
                            if (flStyles.transitionIn !== '') elem.classList.add(flStyles.transitionIn);
                            elem.style.transitionDuration = flStyles.duration;
                        }, flStyles.duration);
                    }
                });
            })
        })
    }
}