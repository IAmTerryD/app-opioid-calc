const Medication = ({ medication }) => {

    return (
        <li>
            <span>
                {`${medication.medicationName} ${medication.dose}mg ${medication.doseFrequency} times a day is ${medication.morphineEquivalent}mg of Morphine.`}
            </span>
        </li>
    );
}

export default Medication;