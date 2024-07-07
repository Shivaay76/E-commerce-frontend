/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#f13a01',
            },
            animation: {
                'slow-bounce': ' bounce 2s infinite',
                'low-bounce': 'wiggle 2.5s  infinite'
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(5px)' },
                }
            }
        },
    },
    plugins: [],
}

