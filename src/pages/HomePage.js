import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HomePage.css';
import Button from '../components/Button';

function HomePage() {
  return (
    <div className="HomePage">
      <div className="bhudda-container">
        <img src="/images/bhudda.svg" alt="Bhudda" />
        <h1>Welcome to Templation</h1>
      </div>
      <div className="button-container">
        <div>
            <Link to='/create-animation'>
                <Button
                text="Create Animation"
                position={{ top: '100px', right: '400px' }}
                />
            </Link>
        </div>
            <Button
            text="View Animations"
            onClick={() => alert('Feature in progress')}
            position={{ top: '100px', left: '400px' }} // Adjust position as needed
            />
            <Button
            text="Monastery"
            onClick={() => alert('Feature in progress')}
            position={{ top: '100px', right: '930px' }} // Adjust position as needed
            />
      </div>
    </div>
  );
}

export default HomePage;
