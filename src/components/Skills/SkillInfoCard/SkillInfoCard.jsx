import React from "react";
import './SkillInfoCard.css'


const SkillInfoCard = ({ heading, skills }) => {
    return (
        <div className="skill-info-card">
            <h6 className="text-white">{heading}</h6>
            <div className="skills-info-content mx-3">
                {skills.map((item, index) => (
                    <React.Fragment key={`skill_${index}`}>
                        <div className="skill-info">
                            <p className="text-white mx-1 mt-2">{item.skill}</p>
                            <p className="percentage text-white mx-1">{item.percentage}</p>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress" style={{ width: item.percentage }}></div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default SkillInfoCard;