/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/pages/**/*.{html,js}"],
    theme: {
        fontFamily: {
            poppins: 'Poppins, sans-serif'
        },
        extend: {
            colors: {
                'primary': '#4640DE',
                'secondary': '#F6F6FD',
                'grey': '#ABB3C4',
                'dark': '#121F3E',
                'page': '#F8F8FA',
                'success': '#2ED16C',
            }
        },
    },
    plugins: [],
}

