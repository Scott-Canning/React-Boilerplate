import React from 'react';
import './styles/app.css';
import ExampleComponent from './ExampleComponent.js'

const App = () => {
    return (
        <div className='h-screen items-center justify-center'>
            <ExampleComponent/>
        </div>
    );
}

export default App;