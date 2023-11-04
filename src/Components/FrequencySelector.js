const FrequencySelector = ({ handleFrequencyChange }) => {
    return (
        <>
            <select name="frequency" onChange={handleFrequencyChange}>
                <option>frequency</option>
                <option value={1}>once daily</option>
                <option value={2}>BID</option>
                <option value={3}>TID</option>
                <option value={4}>QID</option>
            </select>
        </>
    );
}

export default FrequencySelector;