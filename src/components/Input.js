import React, { useState } from 'react';

export default function Input({ inputType, onChange, classDef}) {

    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value);
        if (onChange) onChange(e.target.value);
    }

    return (
        <input type={inputType} value={inputValue} name="input" onChange={handleChange} className={classDef} />
    );
}