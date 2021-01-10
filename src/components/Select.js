import React from 'react';


export default function Select({classDef, onChange, data}) {
    function renderOptions() {
        return data.map(item => {
            return(
                <option key={item.id} value={item.id}>
                    {item.name}
                </option>
            );
        });
    }

    return (
        <select name="select" onChange={(e) => onChange(e.target.value)} className={classDef}>
            <option>Select Item</option>
            {renderOptions()}
        </select>
    );
}