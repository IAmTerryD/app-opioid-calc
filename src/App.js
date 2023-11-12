import { useEffect, useState } from 'react';

import Form from './Components/Form';
import MedicationList from './Components/MedicationList';

export default function App() {

    const [medications, setMedications] = useState([]);

    let [total, setTotal] = useState(0);

    function handleAddMedication(medication) {
        setMedications((oldArrayState) => [...oldArrayState, medication]);
    };

    function handleDeleteItem(medicationID) {
        setMedications((medications) => medications.filter(medication => medication.id !== medicationID));
    }


    useEffect(() => {
        let total = 0;
        for (let m of medications) {
            total += m.morphineEquivalent;
        }
        setTotal(total);
    }, [medications]
    );

    return (
        <div className='d-flex align-items-center justify-content-center'
            style={{ height: "100vh" }}>
            <Form onAddMedication={handleAddMedication} />

            <MedicationList
                medications={medications}
                onDeleteItem={handleDeleteItem} />

            <div className='total-morphine'>
                Total Morphine Equivalents: {total}
            </div>

        </div >
    );
}

