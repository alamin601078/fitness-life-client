import { useState } from "react";

const applicantsData = [
    { id: 1, name: 'John Doe', status: 'Pending', feedback: '' },
    { id: 2, name: 'Jane Smith', status: 'Rejected', feedback: 'Not enough experience.' },
];
const Activity = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const showModal = (message) => {
        setFeedbackMessage(message);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <div className="container mx-auto p-5">
        <h1 className="text-2xl font-bold text-center mb-4">Activity Log</h1>
        <h2 className="text-lg text-center mb-6">Status of Trainer Applications</h2>
        <table className="min-w-full border-collapse border border-gray-300">
            <thead>
                <tr>
                    <th className="border border-gray-300 p-2">Applicant Name</th>
                    <th className="border border-gray-300 p-2">Status</th>
                    <th className="border border-gray-300 p-2">Action</th>
                </tr>
            </thead>
            <tbody>
                {applicantsData.map((applicant) => (
                    <tr key={applicant.id}>
                        <td className="border border-gray-300 p-2">{applicant.name}</td>
                        <td className={`border border-gray-300 p-2 ${applicant.status === 'Rejected' ? 'text-red-600' : ''}`}>
                            {applicant.status}
                        </td>
                        <td className="border border-gray-300 p-2">
                            {applicant.status === 'Rejected' && (
                                <button
                                    className="text-blue-500"
                                    onClick={() => showModal(applicant.feedback)}
                                >
                                    👁️
                                </button>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        {modalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-5 rounded shadow-lg">
                    <h2 className="text-xl font-bold">Rejection Feedback</h2>
                    <p className="mt-2">{feedbackMessage}</p>
                    <button
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={closeModal}
                    >
                        Close
                    </button>
                </div>
            </div>
        )}
    </div>
    );
};

export default Activity;