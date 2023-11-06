import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Form({ onAddMedication }) {

    // We'll create the objects in the form, then pass it to the array.

    const [medicationName, setMedicationName] = useState("Morphine");
    const [morphineFactor, setMorphineFactor] = useState(1);
    const [doseFrequency, setDoseFrequency] = useState(1);
    const [dose, setDose] = useState(1);

    function getMorphineEquivalent() {
        return (morphineFactor * dose) * doseFrequency;
    }

    function handleSubmit(onSubmitEvent) {

        onSubmitEvent.preventDefault();

        if (!dose) { return }

        let morphineEquivalent = getMorphineEquivalent();

        const medication = {
            medicationName,
            morphineFactor,
            dose,
            doseFrequency,
            morphineEquivalent,
            id: uuidv4(),
        }

        // This function is passed from the Parent. It adds the medication to the medications array. 
        onAddMedication(medication);
    }

    return (
        <form className='add-form' onSubmit={handleSubmit}>

            <select onChange={(e) => {
                setMorphineFactor(parseFloat(e.target.value));
                let selectedOption = e.target.options.selectedIndex;
                setMedicationName(e.target.options[selectedOption].text);
            }
            }>
                <option value={1}>Morphine </option>
                <option value={.1}>Tramadol </option>
                <option value={4}>Hydromorphone</option>
                <option value={1}>Hydrocodone</option>
                <option value={1.5}>Oxycodone</option>
                <option value={.15}>Codiene</option>
                <option value={4}>Methadone 0-20mg</option>
                <option value={8}>Methadone 20-40mg</option>
                <option value={10}>Methadone 40-60mg</option>
                <option value={12}>Methadone 60mg+</option>
            </select >

            <input type="text" className='dose' placeholder="0" value={dose} onChange={(e) => setDose(e.target.value)} />

            <select>
                <option>mg</option>
                <option>mcg</option>
            </select>

            <select className="frequency" onChange={(e) => {setDoseFrequency(e.target.value)}}>
                <option value={1}>once daily</option>
                <option value={2}>BID</option>
                <option value={3}>TID</option>
                <option value={4}>QID</option>
            </select>

            <button className='AddMedication'>Add</button>
        </form>
    );
}
