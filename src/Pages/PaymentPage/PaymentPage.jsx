import { useState } from "react";

const PaymentPage = ({ userInfo }) => {
    console.log(userInfo)
    const [confirmed, setConfirmed] = useState(false);

    const handleConfirmBooking = () => {
      // Code to save booking information to the database
      setConfirmed(true); // Set confirmed state to true after saving
    };
   
    return (
        <div className="container mx-auto px-4 py-8 pt-24 grid justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">Trainer Booking Confirmation</h1>
        <div className=" rounded-lg shadow-md p-6">
          <form>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2">Trainer Name:</label>
              <input type="text  " value={userInfo?.trainerName} readOnly className="input-field" />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2">Slot Name:</label>
              <input type="text" placeholder="fullName" value={userInfo?.slotName} readOnly className="input-field" />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2">Package Name:</label>
              <input type="text" value={userInfo?.packageName} readOnly className="input-field" />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2">Price:</label>
              <input type="text" value={userInfo?.price} readOnly className="input-field" />
            </div>
            {/* Display user info */}
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2">Your Name:</label>
              <input type="text" value={userInfo?.userName} readOnly className="input-field" />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2">Your Email:</label>
              <input type="email" value={userInfo?.email} readOnly className="input-field" />
            </div>
            {/* Display other info if needed */}
            <div className="flex justify-center mt-6">
              <button
                type="button"
                onClick={handleConfirmBooking}
                className=" px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                disabled={confirmed} // Disable button after confirming
              >
                {confirmed ? 'Booking Confirmed' : 'Confirm Booking'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default PaymentPage;