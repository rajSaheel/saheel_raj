import React, { useEffect, useState } from "react"
import "../App.css"
import "../style.css"
import Icon from "./16.png"

interface AIIconProps {
    onClick: () => void
}

const AIIcon: React.FC<AIIconProps> = ({ onClick }) => {
    return (
        <img
            src={Icon}
            alt="AI Icon"
            className="ai-icon cursor-icon"
            onClick={onClick}
        />
    )
}

export default AIIcon
