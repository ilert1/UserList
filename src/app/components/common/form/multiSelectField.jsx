import React from 'react'
import Select from 'react-select';
export default function MultiSelectField({ options, onChange, name, label }) {
    const optionsArray = !Array.isArray(options) && typeof options === 'object' ?
        Object.keys(options).map(optionName => ({ label: options[optionName].name, value: options[optionName]._id })) : options;

    const handleChange = (value) => {
        onChange({ name: name, value });
    }
    return (
        <div className="mb-4">
            <label className='mb-2'>{label}</label>
            <Select
                isMulti
                options={optionsArray}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleChange}
                name={name}
                closeMenuOnSelect={false}
            />
        </div>
    )
}
