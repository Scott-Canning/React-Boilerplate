import React from 'react';
import './styles/exampleComponent.css';

const ExampleComponent = () => {
    return (
        <div className='h-full flex items-center justify-center'>
            <div className='h-[100px] w-[500px] bg-light-blue text-center rounded-lg'>
                <span className='text-white'>Component</span>
            </div>
        </div>
    )
}

export default ExampleComponent;