import logo from './logo.svg'
import './App.css'
import { NavBar } from './component/NavBar'
import { Banner } from './component/Banner'
import { Skills } from './component/Skills'
import { Projects } from './component/Projects'
import { Contact } from './component/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Footer } from './component/Footer'
import { Experience } from './component/Experience'

function App() {
    return (
        <div className="App">
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
