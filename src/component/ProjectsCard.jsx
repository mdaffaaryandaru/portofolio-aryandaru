import { Col } from 'react-bootstrap'

export const ProjectsCard = ({ title, description, imgUrl }) => {
    return (
        <Col sm={6} md={4} className="d-flex align-items-stretch">
            <div className="proj-imgbx d-flex flex-column">
                <img
                    src={imgUrl}
                    style={{ objectFit: 'cover', height: '200px' }}
                    alt={title}
                />
                <div className="proj-txtx flex-grow-1 d-flex flex-column justify-content-between">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}
