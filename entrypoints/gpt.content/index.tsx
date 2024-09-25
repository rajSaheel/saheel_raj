import "./gpt.css"
import ReactDOM from "react-dom/client"
import App from "../popup/App.tsx"

export default defineContentScript({
    matches: ["*://*.linkedin.com/messaging/thread/*"],
    cssInjectionMode: "ui",

    async main(ctx) {
        const injectAiIcon = async () => {
            const ui = createIntegratedUi(ctx, {
                position: "inline",
                onMount: (container) => {
                    const target = document.querySelector(
                        ".msg-form__contenteditable"
                    )
                    const app = document.createElement("div")
                    app.id = "injected-gpt-icon"
                    target?.append(app)

                    const root = ReactDOM.createRoot(app)
                    root.render(<App />)
                    return root
                },
                onRemove: (root) => {
                    root?.unmount()
                },
            })

            ui.mount()
        }

        const observer = new MutationObserver((mutations) => {
            const messagingContainer = document.querySelector(
                ".msg-form__contenteditable"
            )
            const injected = document.querySelector("#injected-gpt-icon")

            if (messagingContainer && !injected) injectAiIcon()
        })

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        })
    },
})
