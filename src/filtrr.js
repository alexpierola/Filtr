const flStyles = {
    transitionOut: '',
    transitionIn: '',
    useTransitions: false,
    display: 'inherit',
    duration: 100
}

const load = ({ useTransitions, transitionIn, transitionOut, duration }) => {
    if (useTransitions !== null && useTransitions === true) {
        //check for transitions
        if (transitionIn !== null && transitionOut !== null) {
            flStyles.transitionOut = transitionOut;
            flStyles.transitionIn = transitionIn;
            flStyles.useTransitions = useTransitions;
        } else {
            console.error('TransitionIn or TransitionOut value is incorrect');
        }
        // check the duration value
        if (duration != null && !isNaN(duration)) {
            flStyles.duration = duration;
        } else {
            console.eror('Duration value is incorrect');
        }
    }
}

const fire = () => {
    const filters = document.querySelectorAll('.controls .filtrr-btn');
    filters.forEach(filter => {
        filter.addEventListener('click', e => {
            // get filtrr value and elements
            const tofiltrr = e.target.getAttribute('data-filtrr');
            const listElems = document.querySelectorAll('.filtrr-elem');
            listElems.forEach((elem) => {
                if (elem.style.display !== '' && elem.style.display !== 'none') {
                    flStyles.display = elem.style.display;
                }
                // only if transitions have value
                if (flStyles.useTransitions) {
                    elem.classList.add('animated', flStyles.transitionOut);
                }
                elem.style.transitionDuration = flStyles.duration;
                setTimeout(() => {
                    elem.style.display = 'none';
                    if (flStyles.useTransitions) {
                        elem.classList.remove('animated', flStyles.transitionOut, flStyles.transitionIn);
                    }
                    // to show all the elements
                    if (tofiltrr === '-') {
                        elem.style.display = flStyles.display;
                        elem.classList.add('animated', flStyles.transitionIn);
                        return;
                    }
                }, flStyles.duration);
            });
            listElems.forEach((elem) => {
                // filter the elements to show
                if (elem.getAttribute('data-elem') === tofiltrr) {
                    setTimeout(() => {
                        elem.style.display = flStyles.display;
                        if (flStyles.useTransitions) {
                            elem.classList.add('animated', flStyles.transitionIn);
                        }
                        elem.style.transitionDuration = flStyles.duration;
                    }, flStyles.duration);
                }
            });
        })
    })
}

export const filtrr = {
    load,
    fire
}