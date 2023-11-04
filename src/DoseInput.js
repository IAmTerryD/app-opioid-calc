const DoseInput = ({ handleDoseChange }) => {
    return (
        <>
            <input placeholder='Enter dosage' onChange={handleDoseChange} />
            
            <select>
                <option>mg</option>
                <option>mcg</option>
            </select>
        </>
    );
}

export default DoseInput;