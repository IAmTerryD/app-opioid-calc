import { useState } from 'react';

import Form from './Components/Form';
import MedicationList from './Components/MedicationList';

export default function App() {

    const [medications, setMedications] = useState([]);

    function handleAddMedication(medication) {
        setMedications((oldArrayState) => [...oldArrayState, medication]);
    };

    function handleDeleteItem(medicationID) {
        setMedications((medications) => medications.filter(medication => medication.id !== medicationID));
    }

    return (
        <div className='d-flex align-items-center justify-content-center'
            style={{ height: "100vh" }}>
            <Form onAddMedication={handleAddMedication}></Form>
            <MedicationList medications={medications} onDeleteItem={handleDeleteItem}></MedicationList>

        </div >
    );
}

