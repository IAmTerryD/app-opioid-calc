import { useState } from 'react';
import AddMedicationButton from './AddMedicationButton';
import FrequencySelector from './FrequencySelector';
import MedicationSelector from './MedicationSelector';
import DoseInput from './DoseInput';

const App = () => {
    const [medications, setMedications] = useState([]);
    const [medicationName, setMedicationName] = useState("");
    const [morphineFactor, setMorphineFactor] = useState(0);
    const [doseFrequency, setDoseFrequency] = useState(0);
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
        <div className='d-flex align-items-center justify-content-center'
            style={{ height: "100vh" }}>

            < div className='row' >
                <span className='d-flex justify-content-center'>
                    <MedicationSelector handleFactorChange={handleFactorChange} handleNameChange={handleNameChange} />
                </span>
            </div >

            <div className='row'>
                <div className='d-flex justify-content-center'>
                    <DoseInput handleDoseChange={handleDoseChange} />
                </div>
            </div>

            <div className='row'>
                <span className='d-flex justify-content-center'>
                    <FrequencySelector handleFrequencyChange={handleFrequencyChange} />
                </span>
            </div>

            <div className='row'>
                <span className='d-flex justify-content-center'>
                    <AddMedicationButton handleAddMedication={handleAddMedication} />
                </span>
            </div>
        </div >
    );
}

export default App;