import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import contactImg from '../assets/img/contact-img.svg'

export const Contact = () => {
    const formIntititalDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }
    const [formDetails, setFormDetails] = useState(formIntititalDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setButtonText('Sending...')
        let response = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json;charset=utf-8',
            },
            body: JSON.stringify(formDetails),
        })
        setButtonText('Send')
        let result = await response.json()
        setFormDetails(formIntititalDetails)
        if (result.code === 200) {
            setStatus({
                success: true,
                message: 'Message sent',
            })
        } else {
            setStatus({
                success: false,
                message: 'Message not sent',
            })
        }
    }
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.firstName}
                                        placeholder="First Name"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                'firstName',
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.lastName}
                                        placeholder="Last Name"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                'lastName',
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.email}
                                        placeholder="Email"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                'email',
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.phone}
                                        placeholder="Phone Number"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                'phone',
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                                <Col>
                                    <textarea
                                        row="6"
                                        value={formDetails.message}
                                        placeholder="message"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                'message',
                                                e.target.value
                                            )
                                        }
                                    />
                                    <button type="submit" disabled>
                                        <span>{buttonText}</span>
                                    </button>
                                    <p className="danger mt-3">
                                        Sorry, the email function is under
                                        maintenance because I have been working
                                        in the backend service :( Please contact
                                        me on other platforms. Thank you! -
                                        Daffa
                                    </p>
                                </Col>
                                {status.message && (
                                    <Col>
                                        <p
                                            className={
                                                status.success === false
                                                    ? 'danger'
                                                    : 'success'
                                            }
                                        >
                                            {status.message}
                                        </p>
                                    </Col>
                                )}
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
