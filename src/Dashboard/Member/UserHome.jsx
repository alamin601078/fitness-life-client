
const user = {
    role: 'trainer', // Change to 'admin' to see admin view
    name: 'Jane Smith',
};
const UserHome = () => {
    return (
        <div className="container mx-auto p-5">
        <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h1>
        {user.role === 'trainer' ? (
            <div>
                {/* <h2 className="text-xl font-semibold mb-2">Trainer Dashboard</h2>
                <ul className="list-disc pl-5">
                    <li>Manage Your Slots</li>
                    <li>Add New Slots</li>
                    <li>View Your Classes</li>
                    <li>Engage with the Community</li>
                </ul> */}
            </div>
        ) : (
            <div>
                <h2 className="text-xl font-semibold mb-2">Admin Dashboard</h2>
                <ul className="list-disc pl-5">
                    <li>Manage Trainers</li>
                    <li>View All Forums</li>
                    <li>Manage Classes</li>
                    <li>Monitor User Activity</li>
                </ul>
            </div>
        )}
    </div>
    );
};

export default UserHome;