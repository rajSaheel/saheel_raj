/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./**/*.{js,jsx,ts,tsx}",
        "./entrypoints/",
        "./entrypoints/popup/main.tsx",
        "entrypointspopupApp.tsx",
        "./entrypoints/gpt.content/index.tsx",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
