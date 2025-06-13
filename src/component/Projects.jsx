import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import { ProjectsCard } from './ProjectsCard'
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import projImg4 from '../assets/img/project-img4.png'
import projImg5 from '../assets/img/project-img5.png'
import projImg6 from '../assets/img/project-img6.png'
import '../style/Project.css'

export const Projects = () => {
    const personalProjects = [
        {
            title: 'AI Question Generator',
            description:
                'Generates questions based on the Enhanced Indonesian Spelling System dictionary using Flask and React.',
            imgUrl: projImg1,
            tags: ['React', 'Flask', 'AI', 'NLP'],
            demoLink: '#',
        },
        {
            title: 'Kawula Cafe',
            description:
                'Elegant landing page for Kawula Cafe built with Next.js and modern UI design principles.',
            imgUrl: projImg2,
            tags: ['Next.js', 'UI/UX', 'Responsive'],
            demoLink: '#',
        },
        {
            title: 'Masjid Baiturrahim',
            description:
                'Feature-rich website for Masjid Baiturrahim using React with integrated CMS for content management.',
            imgUrl: projImg3,
            tags: ['React', 'CMS', 'Web Design'],
            demoLink: '#',
        },
    ]

    const clientProjects = [
        {
            title: 'Draft Genix Team Randomizer',
            description:
                'Custom team formation tool featuring advanced randomization algorithms and user-friendly interface.',
            imgUrl: projImg4,
            tags: ['JavaScript', 'Algorithm', 'Frontend'],
            demoLink: '#',
        },
        {
            title: 'Oasys Company Management',
            description:
                'Comprehensive HRIS and Project Management platform built with Joget DX for streamlined operations.',
            imgUrl: projImg5,
            tags: ['Joget DX', 'HRIS', 'Project Management'],
            demoLink: '#',
        },
        {
            title: 'ISTW Digital Signature',
            description:
                'Secure digital signature solution with Joget DX, featuring authentication and document verification.',
            imgUrl: projImg6,
            tags: ['Joget DX', 'Security', 'Digital Sinature'],
            demoLink: '#',
        },
    ]

    const upcomingProjects = [
        {
            title: 'E-Commerce Platform',
            description:
                'Full-stack e-commerce solution with payment integration and inventory management (In Development).',
            imgUrl: projImg1,
            tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
            demoLink: '#',
            isUpcoming: true,
        },
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col lg={8} className="text-center">
                        <h2 className="section-title mb-3">
                            Featured Projects
                        </h2>
                        <p className="section-subtitle">
                            A showcase of my work across different domains and
                            technologies. Each project represents unique
                            challenges and solutions.
                        </p>
                    </Col>
                </Row>

                <Tab.Container id="projects-tabs" defaultActiveKey="personal">
                    <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                    >
                        <Nav.Item>
                            <Nav.Link eventKey="personal">
                                <span className="nav-icon">💼</span> Personal
                                Projects
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="client">
                                <span className="nav-icon">🤝</span> Client Work
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="upcoming">
                                <span className="nav-icon">🚀</span> Upcoming
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="personal">
                            <Row className="project-cards-container">
                                {personalProjects.map((project, index) => (
                                    <ProjectsCard key={index} {...project} />
                                ))}
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="client">
                            <Row className="project-cards-container">
                                {clientProjects.map((project, index) => (
                                    <ProjectsCard key={index} {...project} />
                                ))}
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="upcoming">
                            <Row className="project-cards-container">
                                {upcomingProjects.map((project, index) => (
                                    <ProjectsCard key={index} {...project} />
                                ))}
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Container>
            <img
                className="background-image-right"
                src={colorSharp2}
                alt="background decoration"
            />
        </section>
    )
}
