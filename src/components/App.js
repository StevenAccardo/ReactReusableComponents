import React, { useState } from 'react';

import Input from './Input';
import Select from './Select';
import Modal from './Modal';

const App = () => {
    const navArr = [
        {
            title: 'Home',
            url: '',
            children: null
        },
        {
            title: 'Home',
            url: '',
            children: [
                {
                    title: 'Home',
                    url: '',
                    children: null,
                },
                {
                    title: 'Home',
                    url: '',
                    children: null,
                },
            ]
        },
    ]

    const [inputValue, setInputValue] = useState('');
    const [selectData] = useState([{id: 1, name: 'dog'}, {id: 2, name: 'cat'}, {id: 3, name: 'pig'}]);
    const [navData] = useState()
    const [selectedValue, setSelectedValue] = useState('');

    function updateInput(newInputValue) {
        setInputValue(newInputValue);
    }

    function updatedSelected(newSelectedValue) {
        setSelectedValue(newSelectedValue);
    }

    return (
        <div className="app">
            <Input inputType="text" onChange={updateInput} classDef='reuse-input'/>
            <p>Input Value: {inputValue}</p>

            <Select data={selectData} onChange={updatedSelected} classDef='reuse-select'/>
            <p>Selected Value: {selectedValue}</p>

            <Modal classDef="reuse-modal" timeout={3000} show>I have displayed!</Modal>
        </div>
    );
};

export default App;
