/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [],
    theme: {
    /* colors are read from abstracts/_colors.scss */
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: 'hsl(var(--td-color-white), <alpha-value>)',
            black: 'hsl(var(--td-color-black), <alpha-value>)',
            blue: {
                DEFAULT: 'hsl(var(--td-color-blue-400), <alpha-value>)',
                700: 'hsl(var(--td-color-blue-700), <alpha-value>)' /* heading, teams bar */,
                600: 'hsl(var(--td-color-blue-600), <alpha-value>)' /* heading, teams bar */,
                500: 'hsl(var(--td-color-blue-500), <alpha-value>)' /* teams sidebar block default color */,
                400: 'hsl(var(--td-color-blue-400), <alpha-value>)' /* topnav color, login background color */,
                300: 'hsl(var(--td-color-blue-300), <alpha-value>)' /* text color, Teams sidebar active team border */,
                200: 'hsl(var(--td-color-blue-200), <alpha-value>)' /* top nav text color */,
                100: 'hsl(var(--td-color-blue-100), <alpha-value>)' /* tag color */
            },
            gray: {
                300: 'hsl(var(--td-color-gray-300), <alpha-value>)' /* TODO: forgot */,
                200: 'hsl(var(--td-color-gray-200), <alpha-value>)' /* borders */,
                100: 'hsl(var(--td-color-gray-100), <alpha-value>)' /* button color */
            },
            orange: {
                DEFAULT: 'hsl(var(--td-color-orange-400), <alpha-value>)',
                500: 'hsl(var(--td-color-orange-500), <alpha-value>)',
                400: 'hsl(var(--td-color-orange-400), <alpha-value>)',
                100: 'hsl(var(--td-color-orange-100), <alpha-value>)'
            },
            turquoise: {
                DEFAULT:
          'hsl(var(--td-color-turquoise-400), <alpha-value>)' /* check marks in plan selection */,
                400: 'hsl(var(--td-color-turquoise-400), <alpha-value>)' /* check marks in plan selection */,
                100: 'hsl(var(--td-color-turquoise-100), <alpha-value>)' /* check marks in plan selection */
            },
            // color aliases for easy use
            border: 'hsl(var(--td-color-gray-200), <alpha-value>)',
            header: 'hsl(var(--td-color-blue-600), <alpha-value>)',
            text: 'hsl(var(--td-color-blue-300), <alpha-value>)',
            link: 'hsl(var(--td-color-blue-400), <alpha-value>)'
        },
        fontFamily: {
            body: 'Lato Regular',
            header: 'Lato Bold'
        },
        extend: {
            opacity: {
                7: '.07'
            }
        }
    },
    plugins: []
};
