import { useEffect, useState } from 'react';
import './css/TitleBar.css';
import icon from '../../../assets/icon.png';

const TitleBar = () => {
    const [isMaximized, setIsMaximized] = useState(false);

    useEffect(() => {
        if (!window.electron?.on) return;

        window.electron.on('window-is-maximized', (maximized) => {
            setIsMaximized(maximized);
        });
    }, []);

    const handleMinimize = () => window.electron?.send('window-minimize');
    const handleMaximize = () => window.electron?.send('window-maximize');
    const handleClose = () => window.electron?.send('window-close');

    return (
        <div className="titlebar-container">
            <img src={icon} alt="App Icon" className="titlebar-icon" />
            <div className="titlebar-buttons">
                <button onClick={handleMinimize}>&#x2013;</button>
                <button onClick={handleMaximize}>
                    {isMaximized ? '\u25A1' : '\u25A2'}
                </button>
                <button className="quit-button" onClick={handleClose}>&#x2715;</button>
            </div>
        </div>
    );
};

export default TitleBar;