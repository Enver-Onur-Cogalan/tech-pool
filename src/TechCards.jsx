import React, { useState } from 'react';
import './TechCards.css';

import javascriptLogo from './assets/logos/javascript.svg';
import typescriptLogo from './assets/logos/typescript.svg';
import reactLogo from './assets/logos/react.svg';
import nodejsLogo from './assets/logos/nodejs.svg';
import firebaseLogo from './assets/logos/firebase.svg';
import mongodbLogo from './assets/logos/mongodb.svg';
import openaiLogo from './assets/logos/openai.svg';
import figmaLogo from './assets/logos/figma.svg';

const techStack = [
    {
        name: 'JavaScript',
        logo: javascriptLogo,
        color: '#F7DF1E',
        gradient: 'linear-gradient(135deg, #F7DF1E 0%, #F0DB4F 100%)',
        description: 'Dynamic Programming',
    },
    {
        name: 'TypeScript',
        logo: typescriptLogo,
        color: '#3178C6',
        gradient: 'linear-gradient(135deg, #3178C6 0%, #235A97 100%)',
        description: 'Type-Safe Development',
    },
    {
        name: 'React',
        logo: reactLogo,
        color: '#61DAFB',
        gradient: 'linear-gradient(135deg, #61DAFB 0%, #21A1C4 100%)',
        description: 'Web Apps',
    },
    {
        name: 'React Native',
        logo: reactLogo,
        color: '#61DAFB',
        gradient: 'linear-gradient(135deg, #61DAFB 0%, #21A1C4 100%)',
        description: 'Mobile Apps',
    },
    {
        name: 'Node.js',
        logo: nodejsLogo,
        color: '#339933',
        gradient: 'linear-gradient(135deg, #339933 0%, #66CC66 100%)',
        description: 'Backend Runtime',
    },
    {
        name: 'Firebase',
        logo: firebaseLogo,
        color: '#FFCA28',
        gradient: 'linear-gradient(135deg, #FFCA28 0%, #FFA000 100%)',
        description: 'Backend Platform',
    },
    {
        name: 'MongoDB',
        logo: mongodbLogo,
        color: '#47A248',
        gradient: 'linear-gradient(135deg, #47A248 0%, #4DB33D 100%)',
        description: 'NoSQL Database',
    },
    {
        name: 'OpenAI',
        logo: openaiLogo,
        color: '#10A37F',
        gradient: 'linear-gradient(135deg, #10A37F 0%, #1A7F64 100%)',
        description: 'AI Integration',
    },
    {
        name: 'Figma',
        logo: figmaLogo,
        color: '#F24E1E',
        gradient: 'linear-gradient(135deg, #F24E1E 0%, #FF7262 100%)',
        description: 'Design Tool',
    },
];

function TechCard({ tech, index }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="tech-card-wrapper"
            style={{
                animationDelay: `${index * 0.1}s`
            }}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div className={`tech-card ${isFlipped ? 'flipped' : ''}`}>
                {/* Ön yüz - Logo */}
                <div
                    className="tech-card-front"
                    style={{
                        background: tech.gradient,
                    }}
                >
                    <div className="tech-card-logo">
                        {tech.logo ? (
                            <img src={tech.logo} alt={tech.name} />
                        ) : (
                            // Placeholder - logoları ekleyince kaldırılacak
                            <div className="logo-placeholder" style={{ color: tech.color }}>
                                {tech.name.substring(0, 2)}
                            </div>
                        )}
                    </div>
                    <div className="tech-card-glow" style={{ background: tech.color }}></div>
                </div>

                {/* Arka yüz - İsim & Açıklama */}
                <div
                    className="tech-card-back"
                    style={{
                        background: `linear-gradient(135deg, ${tech.color}15 0%, ${tech.color}30 100%)`,
                        borderColor: tech.color,
                    }}
                >
                    <h3 style={{ color: tech.color }}>{tech.name}</h3>
                    <p>{tech.description}</p>
                    <div className="tech-card-decoration" style={{ background: tech.color }}></div>
                </div>
            </div>
        </div>
    );
}

export default function TechCards() {
    return (
        <div className="tech-cards-container">
            <div className="tech-cards-header">
                <h1>🎨 Tech Stack</h1>
                <p>Hover over the cards to explore</p>
            </div>

            <div className="tech-cards-grid">
                {techStack.map((tech, index) => (
                    <TechCard key={tech.name} tech={tech} index={index} />
                ))}
            </div>

            <div className="tech-cards-footer">
                <p>💡 9 Technologies • ✨ Interactive Experience</p>
            </div>
        </div>
    );
}