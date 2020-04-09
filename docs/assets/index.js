document.addEventListener('DOMContentLoaded', () => {
    filtrr.load({
        useTransitions: true,
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOutDown',
        duration: 800
    });
    filtrr.fire();
});