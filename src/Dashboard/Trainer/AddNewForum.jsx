import { useState } from "react";

const AddNewForum = () => {
    const [forumTitle, setForumTitle] = useState('');
    const [forumContent, setForumContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newForum = {
            title: forumTitle,
            content: forumContent,
            createdBy: 'Trainer/Admin', // Adjust based on user type
            createdAt: new Date(),
        };
        
        console.log('New Forum Post:', newForum);
        // Add your API call here to submit the new forum post to the database

        // Reset form fields
        setForumTitle('');
        setForumContent('');
    };

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-2xl font-bold text-center mb-4">Add New Forum</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1">Forum Title:</label>
                    <input
                        type="text"
                        value={forumTitle}
                        onChange={(e) => setForumTitle(e.target.value)}
                        className="border rounded p-2 w-full"
                        placeholder="Enter forum title"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1">Forum Content:</label>
                    <textarea
                        value={forumContent}
                        onChange={(e) => setForumContent(e.target.value)}
                        className="border rounded p-2 w-full"
                        rows="5"
                        placeholder="Write your forum content here..."
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Forum
                </button>
            </form>
        </div>
    );
};

export default AddNewForum;
