document.addEventListener('DOMContentLoaded', () => {
    filtr.load({
        useTransition: true,
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOutDown',
        duration: 800
    });
    filtr.fire();
});