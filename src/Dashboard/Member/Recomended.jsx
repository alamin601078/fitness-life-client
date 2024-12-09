
const recommendedClassesData = [
    { id: 1, title: 'Yoga for Beginners', popularity: 85 },
    { id: 2, title: 'Advanced Pilates', popularity: 92 },
    { id: 3, title: 'High-Intensity Interval Training', popularity: 78 },
    { id: 4, title: 'Meditation and Mindfulness', popularity: 88 },
    { id: 5, title: 'Zumba Dance Fitness', popularity: 80 },
];
const Recomended = () => {

    return (
        <div className="container mx-auto p-5">
        <h1 className="text-2xl font-bold text-center mb-4">Recommended Classes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendedClassesData.map((classItem) => (
                <div
                    key={classItem.id}
                    className="border rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
                >
                    <h2 className="text-lg font-semibold">{classItem.title}</h2>
                    <p className="text-gray-500">Popularity: {classItem.popularity}%</p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                        Enroll Now
                    </button>
                </div>
            ))}
        </div>
    </div>
    );
};

export default Recomended;