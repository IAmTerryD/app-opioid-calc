const Medication = ({ medication, onDeleteItem }) => {

    return (
        <li>
            <span>
                {`
                ${medication.medicationName}
                ${medication.dose} mg 
                ${medication.doseFrequency} times a day is ${medication.morphineEquivalent}mg of Morphine.`}
            </span>

            <button onClick={() => onDeleteItem(medication.id)}>❌</button>
        </li>
    );
}

export default Medication;
