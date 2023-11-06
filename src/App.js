import { useState } from 'react';

import Form from './Components/Form';
import MedicationList from './Components/MedicationList';

const App = () => {

    const [medications, setMedications] = useState([]);

    function handleAddMedication(medication) {
        setMedications((oldArrayState) => [...oldArrayState, medication]);
    };

    return (
        <div className='d-flex align-items-center justify-content-center'
            style={{ height: "100vh" }}>

            <Form onAddMedication={handleAddMedication}></Form>
            <MedicationList medications={medications}></MedicationList>

        </div >
    );
}

export default App;
