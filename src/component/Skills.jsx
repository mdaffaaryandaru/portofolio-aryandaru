import { Col, Container, Row, ProgressBar } from 'react-bootstrap'
import { useState } from 'react'
import colorSharp2 from '../assets/img/color-sharp2.png'
import '../style/Style.css'

export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('frontend')

    const skillCategories = {
        frontend: [
            { name: 'React', level: 90, icon: '⚛️', color: '#61DAFB' },
            { name: 'JavaScript', level: 85, icon: '🟨', color: '#F7DF1E' },
            { name: 'HTML/CSS', level: 95, icon: '🎨', color: '#E34F26' },
            { name: 'Next.js', level: 80, icon: '▲', color: '#000000' },
        ],
        backend: [
            { name: 'Node.js', level: 75, icon: '🟢', color: '#339933' },
            { name: 'Python', level: 70, icon: '🐍', color: '#3776AB' },
            { name: 'Flask', level: 65, icon: '🌶️', color: '#000000' },
            { name: 'MongoDB', level: 70, icon: '🍃', color: '#47A248' },
        ],
        tools: [
            { name: 'Git', level: 85, icon: '📝', color: '#F05032' },
            { name: 'VS Code', level: 90, icon: '💻', color: '#007ACC' },
            { name: 'Figma', level: 75, icon: '🎯', color: '#F24E1E' },
            { name: 'Docker', level: 60, icon: '🐳', color: '#2496ED' },
        ],
    }

    return (
        <section className="skills" id="skills">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col lg={8} className="text-center">
                        <h2 className="section-title mb-3">
                            Skills & Technologies
                        </h2>
                        <p className="section-subtitle">
                            My technical expertise across different domains
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center mb-4">
                    <Col lg={8} className="text-center">
                        <div className="skill-categories">
                            {Object.keys(skillCategories).map((category) => (
                                <button
                                    key={category}
                                    className={`category-btn ${
                                        activeCategory === category
                                            ? 'active'
                                            : ''
                                    }`}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category.charAt(0).toUpperCase() +
                                        category.slice(1)}
                                </button>
                            ))}
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="skills-grid">
                            {skillCategories[activeCategory].map(
                                (skill, index) => (
                                    <div key={index} className="skill-card">
                                        <div className="skill-header">
                                            <div className="skill-icon-wrapper">
                                                <span className="skill-icon">
                                                    {skill.icon}
                                                </span>
                                            </div>
                                            <h3 className="skill-name">
                                                {skill.name}
                                            </h3>
                                            <span className="skill-percentage">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="progress-container">
                                            <ProgressBar
                                                now={skill.level}
                                                variant="custom"
                                                style={{
                                                    '--progress-color':
                                                        skill.color ||
                                                        '#aa367c',
                                                }}
                                            />
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
            <img
                className="background-image-right"
                src={colorSharp2}
                alt="background"
            />
        </section>
    )
}
