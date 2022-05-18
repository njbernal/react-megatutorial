import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Contact from '../../components/Contact/Contact';
import Projects from '../../components/Projects/Projects';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </BrowserRouter>

    )
}

export default App