const DoseInput = ({ handleDoseChange }) => {
    return (
        <>
            <input className='dose' placeholder="0" onChange={handleDoseChange} />

            <select>
                <option>mg</option>
                <option>mcg</option>
            </select>
        </>
    );
}

export default DoseInput;