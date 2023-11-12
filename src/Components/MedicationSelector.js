const MedicationSelector = ({ handleFactorChange, handleNameChange }) => {

    return (
        <>
            <select className="medication" onChange={(e) => {
                handleFactorChange(e);
                handleNameChange(e);
            }
            }>
                <option>select medication</option>
                <option value={1}>Morphine </option>
                <option value={.1}>Tramadol </option>
                <option value={4}>Hydromorphone</option>
                <option value={1}>Hydrocodone</option>
                <option value={1.5}>Oxycodone</option>
                <option value={.15}>Codiene</option>
                <option value={1}>Methadone</option>
            </select >
        </>
    );
}

export default MedicationSelector;