import React from 'react';

const NavigBar = ({onsetClick})=> {
    const handleClick=()=>{
        onsetClick(1);
    };

    return (
        <div className='navig-bar'>
            <ul>
                <h1 className='heading'>LETS GROW MORE</h1>
                <button onClick={handleClick} className='button btn'>Get Users</button>
            </ul>
        </div>
    );
};

export default NavigBar;