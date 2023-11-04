import Medication from './Medication';

const MedicationList = ({ medications }) => {
    return (
        <div>
            <ul>
                {medications.map((medication) => {
                    <Medication></Medication>
                })}
            </ul>
        </div>
    );
}

export default MedicationList;