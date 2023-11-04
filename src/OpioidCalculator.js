import { useState } from 'react';
import AddMedicationButton from './AddMedicationButton';
import FrequencySelector from './FrequencySelector';
import MedicationSelector from './MedicationSelector';
import DoseInput from './DoseInput';

const OpioidCalculator = () => {
    const [medications, setMedications] = useState([]);
    const [morphineEquivalent, setMorphineEquivalent] = useState(0);
    const [doseFrequency, setDoseFrequency] = useState(0);
    const [dose, setDose] = useState(0);

    function handleEquivalentChange(object) {
        setMorphineEquivalent(parseInt(object.target.value));
    }

    function handleFrequencyChange(object) {
        setDoseFrequency(parseInt(object.target.value));
    }

    function handleDoseChange(object) {
        setDose(parseInt(object.target.value));
    }

    function handleAddMedication() {
        
        const medication = { 
            morphineEquivalent : {morphineEquivalent},
            dose : {dose},
            doseFrequency : {doseFrequency},
         }

         console.log(medication);

    };

    return (
        <div className='container'>
            <MedicationSelector handleEquivalentChange={handleEquivalentChange}></MedicationSelector>
            <DoseInput handleDoseChange={handleDoseChange}></DoseInput>
            <FrequencySelector handleFrequencyChange={handleFrequencyChange}></FrequencySelector>
            <AddMedicationButton handleAddMedication={handleAddMedication}></AddMedicationButton>
        </div>

    );
}

export default OpioidCalculator;