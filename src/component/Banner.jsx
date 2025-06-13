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
                            Fullstack Software Engineer with over 3 years of
                            hands-on experience in building end-to-end web
                            applications. Proficient in fullstack development
                            using modern frameworks such as React.js, Next.js,
                            NestJS, and Hapi.js. Experienced in designing
                            scalable architectures, integrating APIs, and
                            optimizing performance across the stack. Adept at
                            turning complex requirements into reliable,
                            maintainable, and user-friendly solutions.
                            Passionate about continuous improvement, clean code,
                            and delivering high-impact digital products on time
                            and within scope.
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
