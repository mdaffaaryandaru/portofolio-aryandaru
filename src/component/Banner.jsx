import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['Web Developer', 'Software Engineer', 'Programmer']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1)
        setText(updatedText)
        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Hello, I'm Muhammad Daffa Aryandaru
                        </span>
                        <h1>
                            <span className="wrap">{text}</span>
                        </h1>
                        <p>
                            My name is Muhammad Daffa Aryandaru. I am a Website
                            Developer with over 2 years of experience in the
                            technology industry. Skilled in designing and
                            developing responsive and user-friendly websites
                            using HTML, CSS, and JavaScript. I also have a good
                            understanding of server-side development using
                            programming languages such as TypeScript and
                            JavaScript. I have a high enthusiasm for learning
                            and continuously developing my skills in web
                            development. Committed to producing quality products
                            and completing tasks on time.
                        </p>
                        <button
                            onClick={() => {
                                console.log('Connect Anjng')
                            }}
                        >
                            Let's Connect <ArrowRightCircle size={25} />
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
