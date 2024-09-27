import { useState } from "react"
import "./App.css"
import "./style.css"

import React from "react"
import AIIcon from "./components/AIIcon.tsx"
import Modal from "./components/Modal.tsx"

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [generatedText, setGeneratedText] = useState<string>("")

    const handleGPTIconClick = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setGeneratedText("")
    }

    const handleGenerate = (command: string) => {
        setGeneratedText(
            "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
        )
    }

    const handleInsert = () => {
        console.log("Insert Clicked")
        if (generatedText) {
            const inputField = document.querySelector(
                ".msg-form__contenteditable p"
            )
            const placeholder = document.querySelector(".msg-form__placeholder")
            if (inputField) {
                console.log("Insert Clicked")
                placeholder?.setAttribute("data-placeholder", "")
                inputField.textContent = generatedText
            }
            handleCloseModal()
        }
    }

    return (
        <>
            <AIIcon onClick={handleGPTIconClick} />
            <Modal
                command={generatedText}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onGenerate={handleGenerate}
                onInsert={handleInsert}
            />
        </>
    )
}

export default App
