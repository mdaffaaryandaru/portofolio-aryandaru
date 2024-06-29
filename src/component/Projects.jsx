import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import { ProjectsCard } from './ProjectsCard'
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/project-img1.png'
export const Projects = () => {
    const projects = [
        {
            title: 'It Could Be Your  Project',
            description: 'It Could Be Your Project',
            imgUrl: projImg1,
        },
        {
            title: 'It Could Be Your  Project',
            description: 'It Could Be Your Project',
            imgUrl: projImg1,
        },
        {
            title: 'It Could Be Your  Project',
            description: 'It Could Be Your Project',
            imgUrl: projImg1,
        },
        {
            title: 'It Could Be Your  Project',
            description: 'It Could Be Your Project',
            imgUrl: projImg1,
        },
        {
            title: 'It Could Be Your  Project',
            description: 'It Could Be Your Project',
            imgUrl: projImg1,
        },
        {
            title: 'It Could Be Your  Project',
            description: 'It Could Be Your Project',
            imgUrl: projImg1,
        },
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            The projects I have worked on, may include yours if
                            you choose to engage my services.
                        </p>
                        <Tab.Container
                            id="projects-tabs"
                            defaultActiveKey="first"
                        >
                            <Nav
                                variant="pills"
                                defaultActiveKey="first"
                                className="nav-pills mb-5 justify-content-center align-items-center"
                                id="pills-tab"
                            >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        Tab One
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        Tab Two
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => {
                                            return (
                                                <ProjectsCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {projects.map((project, index) => {
                                            return (
                                                <ProjectsCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {projects.map((project, index) => {
                                            return (
                                                <ProjectsCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
