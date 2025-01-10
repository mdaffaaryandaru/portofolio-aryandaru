import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import contactImg from '../assets/img/contact-img.svg'
import emailjs from 'emailjs-com'

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

        const templateParams = {
            from_name: `${formDetails.firstName} ${formDetails.lastName}`,
            from_email: formDetails.email,
            phone: formDetails.phone,
            message: formDetails.message,
            to_email: 'daffaaryandaru100815@gmail.com',
        }

        emailjs
            .send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text)
                    setButtonText('Send')
                    setFormDetails(formIntititalDetails)
                    setStatus({
                        success: true,
                        message: 'Message sent',
                    })
                },
                (error) => {
                    console.log('FAILED...', error)
                    setButtonText('Send')
                    setStatus({
                        success: false,
                        message: 'Message not sent',
                    })
                }
            )
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
                                        rows="6"
                                        value={formDetails.message}
                                        placeholder="Message"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                'message',
                                                e.target.value
                                            )
                                        }
                                    />
                                    <button type="submit">
                                        <span>{buttonText}</span>
                                    </button>
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
