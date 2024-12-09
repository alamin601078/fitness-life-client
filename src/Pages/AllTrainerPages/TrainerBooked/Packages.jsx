import { Link } from "react-router-dom";

const Packages = () => {
    const memberships = [
        {
          title: 'Basic Membership',
          price: '$10',
          description: [
            'Access to gym facilities during regular operating hours.',
            'Use of cardio and strength training equipment.',
            'Access to locker rooms and showers.',
          ],
        },
        {
          title: 'Standard Membership',
          price: '$50',
          description: [
            'All benefits of the basic membership.',
            'Access to group fitness classes (yoga, spinning, Zumba).',
          ],
        },
        {
          title: 'Premium Membership',
          price: '$100',
          description: [
            'All benefits of the standard membership.',
            'Access to personal training sessions with certified trainers.',
            'Use of additional amenities (sauna, steam room).',
            'Discounts on additional services (massage, nutrition counseling).',
          ],
        },
      ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-5">
            {
                memberships.map(m => <div key={m.length} className="border border-gray-200 rounded-lg p-6 shadow-md" >
                      <div className="flex flex-col">
                      <h2 className="text-center font-bold text-xl md:text-2xl mb-4">{m?.title}</h2>
                        <ul className="list-disc pl-5">
                            {m?.description.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p className="text-center font-bold mt-4">{m?.price}</p>
                      </div>
                      <Link to={"/pamentpages"} className="block btn mx-auto mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Join Now
                        </Link>
                </div>)
            }
        </div>
   
      
    );
};

export default Packages;