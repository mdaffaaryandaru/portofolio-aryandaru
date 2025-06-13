import { Col, Badge } from 'react-bootstrap'

export const ProjectsCard = ({
    title,
    description,
    imgUrl,
    tags,
    demoLink,
    codeLink,
    isUpcoming,
}) => {
    return (
        <Col lg={4} md={6} className="mb-4">
            <div className={`project-card ${isUpcoming ? 'upcoming' : ''}`}>
                <div className="project-img-container">
                    <img src={imgUrl} alt={title} />
                    <div className="project-overlay">
                        <div className="project-buttons">
                            {!isUpcoming && (
                                <>
                                    <a
                                        href={demoLink}
                                        className="project-btn demo-btn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa fa-external-link"></i>{' '}
                                        Live Demo
                                    </a>
                                </>
                            )}
                            {isUpcoming && (
                                <span className="coming-soon-badge">
                                    Coming Soon
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="project-info">
                    <h3>{title}</h3>
                    <p>{description}</p>

                    <div className="project-tags">
                        {tags &&
                            tags.map((tag, index) => (
                                <Badge
                                    key={index}
                                    bg="transparent"
                                    className="tech-badge"
                                >
                                    {tag}
                                </Badge>
                            ))}
                    </div>
                </div>
            </div>
        </Col>
    )
}
