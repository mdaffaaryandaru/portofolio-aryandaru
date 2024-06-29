import {
    LogoFacebook,
    LogoGithub,
    LogoInstagram,
    LogoLinkedin,
} from 'react-ionicons'

export const Footer = () => {
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
            <p>
                @2024 Muhammad Daffa Aryandaru | All Rights Reserved | Created
                with &hearts;
            </p>
        </footer>
    )
}
