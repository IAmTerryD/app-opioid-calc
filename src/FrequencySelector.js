const FrequencySelector = ({ handleFrequencyChange }) => {
    return (
        <>
            <label>Frequency</label>
            <select name="frequency" onChange={handleFrequencyChange}>
                <option value={1}>Once</option>
                <option value={2}>BID</option>
                <option value={3}>TID</option>
                <option value={4}>QID</option>
            </select>
        </>
    );
}

export default FrequencySelector;