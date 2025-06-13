import { Col, Container, Row, ProgressBar, Badge } from 'react-bootstrap'
import { useState } from 'react'
import colorSharp2 from '../assets/img/color-sharp2.png'
import '../style/Style.css'

export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('languages')

    // Function to convert percentage to proficiency level text
    const getProficiencyLevel = (level) => {
        if (level >= 90) return 'Expert'
        if (level >= 80) return 'Advanced'
        if (level >= 70) return 'Proficient'
        if (level >= 50) return 'Intermediate'
        return 'Beginner'
    }

    const skillCategories = {
        languages: [
            { name: 'JavaScript', level: 100, icon: '🟨', color: '#F7DF1E' },
            { name: 'TypeScript', level: 95, icon: '🔷', color: '#3178C6' },
            { name: 'Java', level: 80, icon: '☕', color: '#007396' },
            { name: 'PHP', level: 70, icon: '🐘', color: '#777BB4' },
        ],
        frontend: [
            { name: 'React JS', level: 90, icon: '⚛️', color: '#61DAFB' },
            { name: 'Angular JS', level: 80, icon: '🅰️', color: '#DD0031' },
            { name: 'Next JS', level: 90, icon: '▲', color: '#ffffff' },
            {
                name: 'Laravel (Blade)',
                level: 75,
                icon: '🔪',
                color: '#FF2D20',
            },
        ],
        backend: [
            { name: 'Nest JS', level: 90, icon: '🐈', color: '#E0234E' },
            { name: 'Hapi JS', level: 75, icon: '🐶', color: '#ED7D31' },
            { name: 'Laravel (PHP)', level: 70, icon: '🔥', color: '#FF2D20' },
            { name: 'Next JS (API)', level: 90, icon: '📡', color: '#ffffff' },
            { name: 'Springboot', level: 70, icon: '🍃', color: '#6DB33F' },
        ],
        databases: [
            { name: 'MySQL', level: 90, icon: '🐬', color: '#4479A1' },
            { name: 'MongoDB', level: 90, icon: '🍃', color: '#47A248' },
            { name: 'PostgreSQL', level: 90, icon: '🐘', color: '#336791' },
        ],
        api: [
            {
                name: 'RESTful API Design',
                level: 90,
                icon: '📝',
                color: '#009688',
            },
            { name: 'Swagger', level: 90, icon: '📄', color: '#85EA2D' },
            { name: 'API Testing', level: 90, icon: '🧪', color: '#8C9EFF' },
            { name: 'Postman', level: 90, icon: '👨‍🚀', color: '#FF6C37' },
        ],
        deployment: [
            { name: 'Vercel', level: 90, icon: '▲', color: '#ffffff' },
        ],
        devops: [
            { name: 'Git', level: 100, icon: '📝', color: '#F05032' },
            { name: 'Docker', level: 75, icon: '🐳', color: '#2496ED' },
            { name: 'CI/CD', level: 80, icon: '🔄', color: '#4285F4' },
        ],
        tools: [
            { name: 'ESLint', level: 85, icon: '🔍', color: '#4B32C3' },
            { name: 'Prettier', level: 90, icon: '💅', color: '#F7B93E' },
            { name: 'SonarLint', level: 80, icon: '🔎', color: '#CB2029' },
        ],
        management: [
            { name: 'Zoho', level: 90, icon: '📊', color: '#EB4034' },
            { name: 'Trello', level: 90, icon: '📋', color: '#0079BF' },
            { name: 'Notion', level: 90, icon: '📓', color: '#ffffff' },
            { name: 'Slack', level: 90, icon: '💬', color: '#dd8fff' },
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
                    <Col lg={3} md={4} xs={12} className="categories-column">
                        <div className="skill-categories-vertical">
                            {Object.keys(skillCategories).map((category) => (
                                <button
                                    key={category}
                                    className={`category-btn-vertical ${
                                        activeCategory === category
                                            ? 'active'
                                            : ''
                                    }`}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category === 'languages'
                                        ? 'Programming Languages'
                                        : category === 'frontend'
                                        ? 'Frontend Web Frameworks'
                                        : category === 'backend'
                                        ? 'Backend Web Frameworks'
                                        : category === 'databases'
                                        ? 'Databases'
                                        : category === 'api'
                                        ? 'API Documentation'
                                        : category === 'deployment'
                                        ? 'Deployment & Hosting'
                                        : category === 'devops'
                                        ? 'Version Control & DevOps'
                                        : category === 'tools'
                                        ? 'Linting & Formatting Tools'
                                        : category === 'management'
                                        ? 'Project Management'
                                        : category.charAt(0).toUpperCase() +
                                          category.slice(1)}
                                </button>
                            ))}
                        </div>
                    </Col>
                    <Col lg={9} md={8} xs={12}>
                        <div className="skills-grid">
                            {skillCategories[activeCategory].map(
                                (skill, index) => (
                                    <div key={index} className="skill-card">
                                        <div className="skill-header">
                                            <div
                                                className="skill-icon-wrapper"
                                                style={{
                                                    background: `linear-gradient(90deg, ${skill.color} 0%, #4a2fbd 100%)`,
                                                }}
                                            >
                                                <span className="skill-icon">
                                                    {skill.icon}
                                                </span>
                                            </div>
                                            <h3 className="skill-name">
                                                {skill.name}
                                            </h3>
                                            <Badge
                                                bg="transparent"
                                                className="proficiency-badge"
                                                style={{
                                                    borderColor: skill.color,
                                                    color: skill.color,
                                                }}
                                            >
                                                {getProficiencyLevel(
                                                    skill.level
                                                )}
                                            </Badge>
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
