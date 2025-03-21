
import { FC } from 'react';
import './LandingPage.css';

const LandingPage: FC = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="container">
          <h1>Welcome to Our Landing Page</h1>
          <p className="subtitle">Built with React and Vite</p>
        </div>
      </header>
      <main>
        <section className="features-section">
          <div className="container">
            <h2>Features</h2>
            <ul className="features-list">
              <li>Fast development with Vite</li>
              <li>Modern React patterns</li>
              <li>Responsive design</li>
              <li>Easy to customize</li>
            </ul>
          </div>
        </section>
      </main>
      <footer className="landing-footer">
        <div className="container">
          <p>&copy; 2025 - All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
