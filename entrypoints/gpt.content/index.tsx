import "../popup/style.css"
import "../popup/App.css"
import ReactDOM from "react-dom/client"
import App from "../popup/App.tsx"

export default defineContentScript({
    matches: ["*://*.linkedin.com/messaging/thread/*"],
    cssInjectionMode: "ui",

    async main(ctx) {
        const injectAiIcon = async () => {
            const ui = await createShadowRootUi(ctx, {
                name: "gpt-ui",
                position: "inline",
                onMount: (container) => {
                    const target = document.querySelector(
                        ".msg-form__contenteditable"
                    )
                    const app = document.createElement("div")
                    app.id = "injected-shadow-element"
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
        // const pollForMessageContainer = setInterval(() => {
        //     const messagingContainer = document.querySelector(
        //         ".msg-form__contenteditable"
        //     )
        //     if (messagingContainer) {
        //         injectAiIcon()
        //         clearInterval(pollForMessageContainer)
        //     }
        // }, 2000)
        let injected = false

        const observer = new MutationObserver((mutations) => {
            if (document.querySelector(".msg-form__contenteditable")) {
                if (!injected) {
                    injected = true
                    injectAiIcon()
                }
            }
        })

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        })
    },
})
