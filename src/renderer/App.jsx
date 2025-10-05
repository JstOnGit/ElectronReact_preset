import { HashRouter, Routes, Route } from 'react-router-dom';
import TitleBar from './components/TitleBar';
import Home from './pages/Home';
import './App.css';

const App = () => {
    return (
        <HashRouter>
            <TitleBar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </HashRouter>
    );
};

export default App;