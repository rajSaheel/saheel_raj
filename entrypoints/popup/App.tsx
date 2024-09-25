import { useState } from "react"
import "./App.css"

import React from "react"
import AIIcon from "./components/AIIcon.tsx"
import Modal from "./components/Modal.tsx"

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [generatedText, setGeneratedText] = useState<string | null>(null)

    const handleAIIconClick = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setGeneratedText(null)
    }

    const handleGenerate = (command: string) => {
        setGeneratedText(
            "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
        )
    }

    const handleInsert = () => {
        if (generatedText) {
            const inputField = document.querySelector(
                ".msg-form__contenteditable p"
            )
            if (inputField) {
                console.log("Insert Clicked")
                inputField.textContent = generatedText
                const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
                    window.HTMLDivElement.prototype,
                    "innerText"
                )?.set
                if (nativeInputValueSetter) {
                    nativeInputValueSetter.call(inputField, generatedText)
                    const event = new Event("input", { bubbles: true })
                    inputField.dispatchEvent(event)
                }
            } else alert("target")
            handleCloseModal()
        }
    }

    return (
        <>
            <AIIcon onClick={handleAIIconClick} />
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onGenerate={handleGenerate}
            />
            {generatedText && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg p-6 w-80 shadow-lg relative">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={handleCloseModal}
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-semibold mb-4">
                            Generated Reply
                        </h2>
                        <p className="mb-4">{generatedText}</p>
                        <button
                            onClick={handleInsert}
                            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
                        >
                            Insert
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default App
