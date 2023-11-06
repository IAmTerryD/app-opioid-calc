import Medication from './Medication';
import { v4 as uuidv4 } from 'uuid';

const MedicationList = ({ medications, onDeleteItem}) => {

    return (
        <div>
            <ul className='list'>
                {medications.map((medication) => (
                    <Medication key={medication.id} medication={medication} onDeleteItem={onDeleteItem}>
                    </Medication>
                ))}
            </ul>
        </div>
    );
}

export default MedicationList;