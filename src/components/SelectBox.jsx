import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
const SelectBox = () => {
    const [option, setOption] = useState()
    const handleChange = (selectedOption) => {
        setOption(selectedOption)
    };
    return <Select
        value={option}
        onChange={handleChange}
        options={options}
    />
}
export default SelectBox