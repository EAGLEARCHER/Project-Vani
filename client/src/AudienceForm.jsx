import { useState } from "react";

export default function AudienceForm() {
  const [photo, setPhoto] = useState(null); // State to store the uploaded photo
  const [transactionScreenshot, setTransactionScreenshot] = useState(null); // State to store the uploaded transaction screenshot
  const [formData, setFormData] = useState({
    userName: "",
    igUserName: "",
    phoneNumber: "",
    photo: null,
    numberOfPeople: 1,
    namesOfPeople: [],
    paymentMode: "UPI",
    paymentSS: "",
    howDoYouKnow: "",
  });

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file); // Update the state with the selected photo
  };

  const handleTransactionScreenshotChange = (e) => {
    const file = e.target.files[0];
    setTransactionScreenshot(file); // Update the state with the selected transaction screenshot
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCountChange = (e) => {
    const count = parseInt(e.target.value) || 0;
    const newNames = Array(count).fill("");
    setFormData((prevFormData) => ({
      ...prevFormData,
      numberOfPeople: count,
      namesOfPeople: newNames,
    }));
  };

  const handlePaymentModeChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      paymentMode: e.target.value,
    }));
  };

  const handleSaveData = (e) => {
    e.preventDefault();
    console.log("save data", formData);
  };

  const {
    userName,
    igUserName,
    phoneNumber,
    numberOfPeople,
    namesOfPeople,
    paymentMode,
    howDoYouKnow,
  } = formData;

  return (
    <form
      className="px-10 py-4 flex justify-center align-center"
      onSubmit={handleSaveData}
    >
      <div className="space-y-12" style={{ width: "25rem" }}>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* NAME DATA OF USER */}
            <div className="sm:col-span-4">
              <label
                htmlFor="userName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    required
                    type="text"
                    name="userName"
                    id="userName"
                    autoComplete="name"
                    className="block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    value={userName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            {/* IG USERNAME DATA OF USER */}
            <div className="sm:col-span-4">
              <label
                htmlFor="igUserName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Instagram Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    required
                    type="text"
                    name="igUserName"
                    id="igUserName"
                    autoComplete="username"
                    className="block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    value={igUserName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Contact Number of the user */}
            <div className="sm:col-span-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    required
                    type="number"
                    name="phoneNumber"
                    id="phoneNumber"
                    autoComplete="phone"
                    className="block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="1234567890"
                    value={phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            {/* PHOTO OF THE USER */}
            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <img
                  src={
                    photo
                      ? URL.createObjectURL(photo)
                      : "/default-placeholder.jpg"
                  }
                  alt="Uploaded"
                  className="h-12 w-12 object-cover rounded-full"
                />
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  className="sr-only"
                  onChange={handlePhotoChange} // Add onChange event handler
                  required // Make the input required
                />
                <label
                  htmlFor="photo"
                  className="cursor-pointer rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Upload
                </label>
              </div>
            </div>
            {/* Number of People with the user */}
            <div className="sm:col-span-4">
              <label
                htmlFor="numberOfPeople"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Number of people with you
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    name="numberOfPeople"
                    id="numberOfPeople"
                    autoComplete="count"
                    className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    value={numberOfPeople}
                    onChange={handleCountChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                {namesOfPeople.map((_, index) => (
                  <div key={index} className="mt-2">
                    <label
                      htmlFor={`person-${index + 1}`}
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Person {index + 1} Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id={`person-${index + 1}`}
                        name={`namesOfPeople[${index}]`}
                        value={namesOfPeople[index] || ""}
                        onChange={handleInputChange}
                        className="block flex-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-indigo-500 focus:ring-0 sm:text-sm sm:leading-6 border border-gray-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Payment Mode Selection */}
            <div className="sm:col-span-4">
              <label
                htmlFor="paymentMode"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Payment Mode
              </label>
              <select
                id="paymentMode"
                name="paymentMode"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={paymentMode}
                onChange={handlePaymentModeChange}
              >
                <option value="Gpay">Gpay</option>
                <option value="Paytm">Paytm</option>
                <option value="Phonepay">Phonepay</option>
                <option value="Bhim">Bhim</option>
              </select>
            </div>
            {/* Add the screenshot of transaction */}
            <div className="col-span-full">
              <label
                htmlFor="transactionScreenshot"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Transaction Screenshot
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <img
                  src={
                    transactionScreenshot
                      ? URL.createObjectURL(transactionScreenshot)
                      : "/default-placeholder.jpg"
                  }
                  alt="Uploaded"
                  className="h-12 w-12 object-cover rounded-full"
                />
                <input
                  type="file"
                  id="transactionScreenshot"
                  name="transactionScreenshot"
                  accept="image/*"
                  className="sr-only"
                  onChange={handleTransactionScreenshotChange} // Add onChange event handler
                  required // Make the input required
                />
                <label
                  htmlFor="transactionScreenshot"
                  className="cursor-pointer rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Upload
                </label>
              </div>
            </div>
            {/*How do you know about us*/}
            <div className="sm:col-span-4">
              <label
                htmlFor="howDoYouKnow"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                How do you know about us
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="howDoYouKnow"
                    id="howDoYouKnow"
                    autoComplete="howDoYouKnow"
                    className="block flex-1 border-0 bg- py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Instagram/Friend/Other"
                    value={howDoYouKnow}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={() => setFormData({})}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
