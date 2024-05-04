export const fadeIn = (direction, delay) => {
    return {
        // Defines the CSS properties when the element is hidden.
        hidden: {
            y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
            opacity: 0,
            x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
        },
        // Defines the CSS properties when the element is visible.
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            // Defines the transition animation.
            transition: {
                type: 'tween',
                duration: 0.5,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};