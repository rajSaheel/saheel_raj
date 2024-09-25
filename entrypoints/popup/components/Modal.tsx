import React, { useEffect, useRef, useState } from "react"
import "../App.css"
import "../style.css"

interface ModalProps {
    command: string
    isOpen: boolean
    onClose: () => void
    onGenerate: (command: string) => void
    onInsert: () => void
}

const Modal: React.FC<ModalProps> = ({
    command,
    isOpen,
    onClose,
    onGenerate,
    onInsert,
}) => {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        } else {
            document.removeEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isOpen, onClose])

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose()
            }
        }
        document.addEventListener("keydown", handleEscape)
        return () => {
            document.removeEventListener("keydown", handleEscape)
        }
    }, [onClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div
                ref={modalRef}
                className="bg-white rounded-lg p-6 w-80 shadow-lg relative"
            >
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    &times;
                </button>
                <h2 className="text-xl font-semibold mb-4">
                    Generate AI Reply
                </h2>
                <input
                    name="modal-input"
                    id="modal-input"
                    type="text"
                    placeholder="Enter your command..."
                    value={command}
                    onChange={(e) => (command = e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <button
                    onClick={() => onGenerate(command)}
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Generate
                </button>
                <button
                    onClick={() => onInsert()}
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Insert
                </button>
            </div>
        </div>
    )
}

export default Modal
