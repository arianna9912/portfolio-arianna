import React from "react";
import './SkillCard.css'

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
    return (
        <div className={`skills-card ${isActive ? "active" : ""}`} onClick={() => onClick()}>
            <div className="skill-icon">
                <img className="skills-icon" src={iconUrl} alt={title} />
            </div>
            <span className="text-white text-lg font-semibold">{title}</span>
        </div>
    )
}
export default SkillCard;