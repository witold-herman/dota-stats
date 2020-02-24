import React from 'react';
import './Result.css'

const Result = props => {
    const {inputValue} = props.data;

    return (
        <div className="container">
            <output>
                {inputValue}
            </output>
        </div>
    )
};

export default Result;
