import { useState } from "react";
import Select from 'react-select';
const previousData = {
    name: 'Jane Smith',
    email: 'jane@example.com',
    qualifications: 'Certified Yoga Instructor',
};

const daysOptions = [
    { value: 'monday', label: 'Monday' },
    { value: 'tuesday', label: 'Tuesday' },
    { value: 'wednesday', label: 'Wednesday' },
    { value: 'thursday', label: 'Thursday' },
    { value: 'friday', label: 'Friday' },
];

const classesOptions = [
    { value: 'yoga', label: 'Yoga' },
    { value: 'pilates', label: 'Pilates' },
    { value: 'zumba', label: 'Zumba' },
    { value: 'hiit', label: 'High-Intensity Interval Training' },
];
const AddNewSlots = () => {
    const [selectedDays, setSelectedDays] = useState([]);
    const [slotName, setSlotName] = useState('');
    const [slotTime, setSlotTime] = useState('');
    const [selectedClasses, setSelectedClasses] = useState([]);
    const [otherInfo, setOtherInfo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSlot = {
            slotName,
            slotTime,
            selectedDays,
            selectedClasses,
            otherInfo,
        };
        console.log('New Slot Info:', newSlot);
        // Add your API call here to submit the new slot to the database
    };
    return (
        <div className="container mx-auto p-5">
        <h1 className="text-2xl font-bold text-center mb-4">Add New Slot</h1>
        <div className="mb-6">
            <h2 className="text-lg font-semibold">Trainer Information</h2>
            <p>Name: {previousData.name}</p>
            <p>Email: {previousData.email}</p>
            <p>Qualifications: {previousData.qualifications}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block mb-1">Select Days:</label>
                <Select
                    isMulti
                    options={daysOptions}
                    onChange={setSelectedDays}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div>
            <div>
                <label className="block mb-1">Slot Name:</label>
                <input
                    type="text"
                    value={slotName}
                    onChange={(e) => setSlotName(e.target.value)}
                    className="border rounded p-2 w-full"
                    placeholder="Example: Morning Slot"
                    required
                />
            </div>
            <div>
                <label className="block mb-1">Slot Time:</label>
                <input
                    type="text"
                    value={slotTime}
                    onChange={(e) => setSlotTime(e.target.value)}
                    className="border rounded p-2 w-full"
                    placeholder="Example: 1 Hour"
                    required
                />
            </div>
            <div>
                <label className="block mb-1">Classes Include:</label>
                <Select
                    isMulti
                    options={classesOptions}
                    onChange={setSelectedClasses}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div>
            <div>
                <label className="block mb-1">Other Info (if needed):</label>
                <textarea
                    value={otherInfo}
                    onChange={(e) => setOtherInfo(e.target.value)}
                    className="border rounded p-2 w-full"
                    rows="3"
                ></textarea>
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Class
            </button>
        </form>
    </div>
    );
};

export default AddNewSlots;