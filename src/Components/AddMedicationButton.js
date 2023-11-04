const AddMedicationButton = ({ handleAddMedication }) => {
    return (
        <button className='AddMedication' onClick={handleAddMedication}>Add</button>
    );
}

export default AddMedicationButton;