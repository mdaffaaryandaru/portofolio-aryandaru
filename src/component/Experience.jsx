import { Col, Container, Row, Card } from 'react-bootstrap'
import { Calendar, Building, BriefcaseFill } from 'react-bootstrap-icons'
import colorSharp2 from '../assets/img/color-sharp2.png'
import '../style/Experience.css'

export const Experience = () => {
    const experiences = [
        {
            title: 'Software Engineer',
            company: 'PT Itasoft Pelagus Global',
            period: '2024 – Present',
            description:
                'Developed and maintained enterprise-grade web applications using Joget DX by implementing custom logic with Beanshell and JavaScript, optimizing MySQL queries, and translating business requirements into functional modules to ensure performance, scalability, and automation.',
            skills: ['Java', 'JavaScript', 'Joget DX', 'MySQL', 'Beanshell'],
            color: '#4e42d4', // Primary theme color
        },
        {
            title: 'Fullstack Programmer',
            company: 'PT. Nitoza',
            period: '2023 – 2024',
            description:
                'Contributed to the development of the Argapura project as a Fullstack Developer using AngularJS, NestJS, Hapi.js, and MongoDB by building scalable APIs, implementing reusable frontend components, and delivering responsive, user-focused solutions in collaboration with cross-functional teams.',
            skills: ['AngularJS', 'NestJS', 'Hapi.js', 'MongoDB', 'JavaScript'],
            color: '#6c49d8',
        },
        {
            title: 'Frontend Developer',
            company: 'Telkom University Information Technology Center',
            period: '2022– 2023',
            description:
                'Contributed to the successful launch of the My Tel-U Mobile website using React.js and Next.js by building responsive, cross-device interfaces and collaborating with cross-functional teams to ensure seamless integration and consistent user experience through UX best practices.',
            skills: ['React.js', 'Next.js', 'JavaScript', 'CSS', 'HTML'],
            color: '#8a50db',
        },
        {
            title: 'UI/UX Designer Mentor',
            company: 'Chevaliers Lab',
            period: '2021 - 2022',
            description:
                'Mentored junior designers in UI/UX fundamentals by providing guidance on usability, layout, and wireframing, conducting design reviews, and sharing practical insights to improve design thinking and user research.',
            skills: [
                'UI/UX Design',
                'Mentoring',
                'Wireframing',
                'Usability',
                'Design Thinking',
            ],
            color: '#a857de',
        },
    ]

    return (
        <section className="experience" id="experience">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col lg={8} className="text-center">
                        <h2 className="section-title mb-3">
                            Professional Experience
                        </h2>
                        <p className="section-subtitle">
                            My journey in software development and design
                        </p>
                    </Col>
                </Row>

                <div className="timeline-container">
                    {experiences.map((exp, index) => (
                        <Row
                            key={index}
                            className={`timeline-row ${
                                index % 2 === 0
                                    ? 'timeline-left'
                                    : 'timeline-right'
                            }`}
                        >
                            <Col
                                md={6}
                                className={`timeline-column ${
                                    index % 2 === 0
                                        ? 'offset-md-6 text-md-end'
                                        : ''
                                }`}
                            >
                                <div
                                    className="timeline-date-badge"
                                    style={{ backgroundColor: exp.color }}
                                >
                                    <span>{exp.period}</span>
                                </div>
                            </Col>

                            <Col
                                md={6}
                                className={`timeline-content-column ${
                                    index % 2 === 0 ? '' : 'offset-md-6'
                                }`}
                            >
                                <Card className="experience-card">
                                    <div
                                        className="experience-icon"
                                        style={{ backgroundColor: exp.color }}
                                    >
                                        <BriefcaseFill
                                            color="white"
                                            size={24}
                                        />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="mb-1">
                                            {exp.title}
                                        </Card.Title>
                                        <div className="company-info mb-3">
                                            <Building className="me-2" />
                                            <span className="company-name">
                                                {exp.company}
                                            </span>
                                        </div>

                                        <Card.Text className="experience-description">
                                            {exp.description}
                                        </Card.Text>

                                        <div className="skills-container">
                                            {exp.skills.map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    className="skill-badge"
                                                    style={{
                                                        backgroundColor: `${exp.color}20`,
                                                        color: exp.color,
                                                    }}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    ))}
                </div>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="background" />
        </section>
    )
}