import React from 'react'
import Button from '../components/Button'
import Canvas from '../components/Canvas'
import { Link } from 'react-router-dom';

function CreateAnimation() {
    return (
        <div className="CreateAnimation">
            <div>
                <Canvas
                    width={700}
                    height={500}
                />
            </div>
            <div>
                <Link to='/'>
                    <Button
                        text="Return to homepage"
                        position={{ top: '100px', right: '930px' }}
                    />
                </Link>
            </div>
        </div>
    );
}

export default CreateAnimation;