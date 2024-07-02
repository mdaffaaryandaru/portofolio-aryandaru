import {
    LogoFacebook,
    LogoGithub,
    LogoInstagram,
    LogoLinkedin,
} from 'react-ionicons'

export const Footer = () => {
    const downloadPDF = () => {
        const link = document.createElement('a')
        link.href =
            'https://drive.google.com/file/d/1aafnGsts6-MQb-uRtJ9vPEThKwD_fFmi/view?usp=sharing'
        link.target = '_blank'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <footer>
            <ul className="social-icon-footer">
                <li>
                    <a
                        href="https://www.instagram.com/daffaryndru?"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LogoInstagram color={'#ffff'} />
                    </a>
                    <a
                        href="https://github.com/mdaffaaryandaru"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LogoGithub color={'#ffff'} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/muhammad-aryandaru-b6569320b/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LogoLinkedin color={'#ffff'} />
                    </a>
                </li>
            </ul>
            <button onClick={downloadPDF}>
                <span>Download My CV</span>
            </button>
            <p>
                @2024 Muhammad Daffa Aryandaru | All Rights Reserved | Created
                with &hearts;
            </p>
        </footer>
    )
}
