import { useState } from 'react';
import AddMedicationButton from './AddMedicationButton';
import FrequencySelector from './FrequencySelector';
import MedicationSelector from './MedicationSelector';
import DoseInput from './DoseInput';

const App = () => {
    const [medications, setMedications] = useState([]);
    const [medicationName, setMedicationName] = useState("Morphine");
    const [morphineFactor, setMorphineFactor] = useState(1);
    const [doseFrequency, setDoseFrequency] = useState(1);
    const [dose, setDose] = useState(0);

    function handleNameChange(event) {
        let selectedOption = event.target.options.selectedIndex;
        setMedicationName(event.target.options[selectedOption].text);
    }

    function handleFactorChange(event) {
        setMorphineFactor(parseInt(event.target.value));
    }

    function handleFrequencyChange(event) {
        setDoseFrequency(parseInt(event.target.value));
    }

    function handleDoseChange(event) {
        setDose(parseInt(event.target.value));
    }

    function getMorphineEquivalent() {
        return (morphineFactor * dose) * doseFrequency;
    }

    function handleAddMedication() {
        if (!dose) { return }

        let morphineEquivalent = getMorphineEquivalent();

        const medication = {
            medication_name: { medicationName },
            morphine_factor: { morphineFactor },
            dose: { dose },
            dose_frequency: { doseFrequency },
            morphine_equivalent: { morphineEquivalent }
        }

        setMedications((oldArrayState) => [...oldArrayState, medication]);
    };


    return (
        <div className='container'>
            <MedicationSelector handleFactorChange={handleFactorChange} handleNameChange={handleNameChange} />

            <DoseInput handleDoseChange={handleDoseChange} />

            <FrequencySelector handleFrequencyChange={handleFrequencyChange} />

            <AddMedicationButton handleAddMedication={handleAddMedication} />

        </div>

    );
}

export default App;