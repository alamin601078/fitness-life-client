// import Swal from "sweetalert2";
import { axiosPublic } from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";


const NewsletterSection = () => {
    const { user } = useAuth();
    console.log(user)
    const email = user?.email;
    const name = user?.displayName;
    const subscribers = () =>{
        const data ={email,name }
        axiosPublic.post('/addsubscribers', data)
        .then(res => {
            if (res.data.insertedId) {
                console.log('user added to the database')
                // Swal.fire({
                //     position: 'top-end',
                //     icon: 'success',
                //     title: 'User created successfully.',
                //     showConfirmButton: false,
                //     timer: 1500
                // });
                
            }
        })
    }
    return (
        <section className="px-5 py-10 dark:bg-gray-100 dark:text-gray-800">
        <div className="container grid grid-cols-6 justify-center items-center mx-auto gap-y-6 md:gap-10">
            <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
                <p className="text-6xl font-bold mb-2">News Section </p>
                <div className="mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-violet-600">
                    <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-violet-600">Latest</button>
                    <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:border- dark:text-gray-600">Popular</button>
                </div>
                <div className="flex flex-col divide-y dark:divide-gray-300">
                    <div className="flex px-1 py-4">
                        <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/244x324" />
                        <div className="flex flex-col flex-grow">
                            <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">BACK TO Fitness Facility Design & Layout Specialists</a>
                            <p className="mt-auto text-xs dark:text-gray-600">5 minutes ago
                                <a rel="noopener noreferrer" href="#" className="block dark:text-blue-600 lg:ml-2 lg:inline hover:underline">Politics</a>
                            </p>
                        </div>
                    </div>
                    <div className="flex px-1 py-4">
                        <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/245x325" />
                        <div className="flex flex-col flex-grow">
                            <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Experiences driven by design</a>
                            <p className="mt-auto text-xs dark:text-gray-600">14 minutes ago
                                <a rel="noopener noreferrer" href="#" className="block dark:text-blue-600 lg:ml-2 lg:inline hover:underline">Sports</a>
                            </p>
                        </div>
                    </div>
                    <div className="flex px-1 py-4">
                        <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/246x326" />
                        <div className="flex flex-col flex-grow">
                            <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Empower your brand</a>
                            <p className="mt-auto text-xs dark:text-gray-600">22 minutes ago
                                <a rel="noopener noreferrer" href="#" className="block dark:text-blue-600 lg:ml-2 lg:inline hover:underline">World</a>
                            </p>
                        </div>
                    </div>
                    <div className="flex px-1 py-4">
                        <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/247x327" />
                        <div className="flex flex-col flex-grow">
                            <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Visualize your space</a>
                            <p className="mt-auto text-xs dark:text-gray-600">37 minutes ago
                                <a rel="noopener noreferrer" href="#" className="block dark:text-blue-600 lg:ml-2 lg:inline hover:underline">Business</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center">
            <button onClick={subscribers} className="btn btn-primary">Subscribers</button>
        </div>
    </section>
    );
};

export default NewsletterSection;