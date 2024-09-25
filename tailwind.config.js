/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./entrypoints/popup/**/*.{html,js,ts,jsx,tsx}",
        "./entrypoints/gpt.content/index.tsx",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
