import { useState } from "react";

const initialSlots = [
    { id: 1, time: '10:00 AM - 11:00 AM', booked: true, bookedBy: 'John Doe' },
    { id: 2, time: '11:00 AM - 12:00 PM', booked: false, bookedBy: '' },
    { id: 3, time: '01:00 PM - 02:00 PM', booked: true, bookedBy: 'Jane Smith' },
];

const ManageSlotes = () => {
    const [slots, setSlots] = useState(initialSlots);

    const handleDeleteSlot = (slotId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this slot?');
        if (confirmDelete) {
            setSlots(slots.filter(slot => slot.id !== slotId));
            // Add your API call here to delete the slot from the database
        }
    };
    return (
        <div className="container mx-auto p-5">
            <h1 className="text-2xl font-bold text-center mb-4">Manage Slots</h1>
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Time Slot</th>
                        <th className="border border-gray-300 p-2">Status</th>
                        <th className="border border-gray-300 p-2">Booked By</th>
                        <th className="border border-gray-300 p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {slots.map(slot => (
                        <tr key={slot.id}>
                            <td className="border border-gray-300 p-2">{slot.time}</td>
                            <td className="border border-gray-300 p-2">
                                {slot.booked ? 'Booked' : 'Available'}
                            </td>
                            <td className="border border-gray-300 p-2">
                                {slot.booked ? slot.bookedBy : 'N/A'}
                            </td>
                            <td className="border border-gray-300 p-2">
                                <button
                                    className="text-red-500"
                                    onClick={() => handleDeleteSlot(slot.id)}
                                >
                                    🗑️ Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageSlotes;