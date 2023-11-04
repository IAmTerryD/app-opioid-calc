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
                <option value={4}>Methadone 0-20mg</option>
                <option value={8}>Methadone 20-40mg</option>
                <option value={10}>Methadone 40-60mg</option>
                <option value={12}>Methadone 60mg+</option>
            </select >
        </>
    );
}

export default MedicationSelector;