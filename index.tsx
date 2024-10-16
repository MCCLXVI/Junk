import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Ensure your CSS file is correctly linked

const App: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div>
            <header>
                <h1>All LOL Champs Personal Winrate</h1>
                <button className="toggle-button" onClick={toggleSidebar}>☰</button>
                <nav>
                    <a href="milo.html" className="button">Milo</a>
                    <a href="callum.html" className="button">Callum</a>
                    <a href="combined.html" className="button">Combined</a>
                </nav>
            </header>
            <main>
                <div className={`sidebar ${sidebarOpen ? 'open' : ''}`} id="sidebar">
                    <h2>Sidebar</h2>
                    <p>Links or content can go here.</p>
                    <a href="about.html" className="button">About Us</a>
                    <a href="Car Tier List.html" className="button">Car Tier List</a>
                </div>
                <div className="content">
                    <section id="Milo">
                        <h2>Milo</h2>
                        <p>Milo's section of the website to store his data.</p>
                        <p><a className="link" href="milo.html">Link to page</a></p>
                    </section>
                    <section id="Callum">
                        <h2>Callum</h2>
                        <p>Callum's section of the website to store his data.</p>
                        <p><a className="link" href="callum.html">Link to page</a></p>
                    </section>
                    <section id="Combined">
                        <h2>Combined</h2>
                        <p>This is the section of the website to combine our data and achieve overall percentages.</p>
                        <p><a className="link" href="combined.html">Link to page</a></p>
                    </section>
                </div>
            </main>
            <footer>
                <p>&copy; Skibidi</p>
                <p>
                    View our <a className="link" href="https://github.com/CT126/league-champs-thingy" target="_blank">GitHub repository</a>.
                </p>
            </footer>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
