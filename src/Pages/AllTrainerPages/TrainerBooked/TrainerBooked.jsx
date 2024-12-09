import Packages from "./Packages";

const TrainerBooked = () => {
    const trainerName = 'John Doe';
    const selectedSlot = 'slot';
    const classes = ['Yoga', 'Spinning'];

    
    return (
        <div className="pt-24">
             <div className="container mx-auto px-4 py-8 grid justify-center items-center">
                <h1 className="text-3xl font-bold mb-4">Trainer Booked</h1>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-lg mb-2"><span className="font-bold">Trainer Name:</span> {trainerName}</p>
                    <p className="text-lg mb-2"><span className="font-bold">Selected Slot:</span> {selectedSlot}</p>
                    <p className="text-lg mb-4"><span className="font-bold">Classes:</span> {classes.join(', ')}</p>
                </div>
             </div>
            <Packages/>
        </div>
    );
};

export default TrainerBooked;