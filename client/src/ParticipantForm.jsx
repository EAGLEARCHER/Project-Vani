import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { RiScreenshot2Fill } from "react-icons/ri";

export default function ParticipantForm() {
  const [formFields, setFormFields] = useState({
    userName: "",
    igUserName: "",
    phoneNumber: "",
    photo: null,
    numberOfPeople: 1,
    namesOfPeople: [],
    performanceType: "",
    performanceTheme: "",
    paymentMode: "UPI",
    paymentSS: "",
    howDoYouKnow: "",
    expectations: "",
  });

  const [count, setCount] = useState(1); // State to track the count of people
  const [names, setNames] = useState({});
  const [paymentMode, setPaymentMode] = useState("UPI");
  const handleCountChange = (e) => {
    if (!e.target.value) {
      setCount(0);
    } else {
      setCount(parseInt(e.target.value)); // Update the count state when the input value changes
      const newCount = parseInt(e.target.value);
      setFormFields((prevFields) => ({
        ...prevFields,
        numberOfPeople: newCount,
        // Clear namesOfPeople when count is decreased
        namesOfPeople:
          newCount < prevFields.numberOfPeople ? [] : prevFields.namesOfPeople,
      }));
    }
    if (newCount < count) {
      setNames({});
    }
  };
  const handleNameChange = (e, index) => {
    const newName = e.target.value;
    setNames((prevNames) => ({
      ...prevNames,
      [index]: newName,
    }));
    console.log(names);
  };
  const handlePaymentModeChange = (e) => {
    const newPaymentMode = e.target.value;
    setFormFields((prevFields) => ({
      ...prevFields,
      paymentMode: newPaymentMode,
    }));
  };
  const handleName = (e) => {
    const name = e.target.value;
    if (name) {
      setFormFields((prevFields) => ({ ...prevFields, userName: name }));
    }
    console.log(formFields.userName);
  };
  const handleIGName = (e) => {
    const username = e.target.value;
    if (username) {
      setFormFields((prevFields) => ({ ...prevFields, igUserName: username }));
    }
    console.log(formFields.igUserName);
  };
  const handlePhoneNumber = (e) => {
    let phone = e.target.value;

    setFormFields((prevFields) => ({ ...prevFields, phoneNumber: phone }));
  };
  return (
    <form className="px-10 py-4 flex justify-center align-center">
      <div className="space-y-12" style={{width:"25rem"}}>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* NAME DATA OF USER*/}
            <div className="sm:col-span-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                    onChange={handleName}
                  />
                </div>
              </div>
            </div>
            {/* IG USERNAME DATA OF USER */}
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Instagram Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                    onChange={handleIGName}
                  />
                </div>
              </div>
            </div>

            {/* Contact Number of the user */}
            <div className="sm:col-span-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="phone"
                    className="block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="1234567890"
                    onChange={handlePhoneNumber}
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
                <UserCircleIcon
                  className="h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Upload
                </button>
              </div>
            </div>
            {/* Number of People with the user */}
            <div className="sm:col-span-4">
              <label
                htmlFor="count"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Number of people with you
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    name="count"
                    id="count"
                    autoComplete="count"
                    className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder=""
                    value={count}
                    onChange={handleCountChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                {count === 0
                  ? null
                  : [...Array(count)].map((_, index) => (
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
                            name={`person-${index + 1}`}
                            value={names[index] || ""}
                            onChange={(e) => handleNameChange(e, index)}
                            className="block flex-1 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-indigo-500 focus:ring-0 sm:text-sm sm:leading-6 border border-gray-300"
                          />
                        </div>
                      </div>
                    ))}
              </div>
            </div>
            {/* What is going to be performed */}
            <div className="sm:col-span-4">
              <label
                htmlFor="performanceType"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Performance Type
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="performanceType"
                    id="performanceType"
                    autoComplete="performanceType"
                    className="block flex-1 border-0 bg- py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Singing/Standup/Poetry"
                  />
                </div>
              </div>
            </div>
            {/* Theme of the performance */}
            <div className="col-span-full">
              <label
                htmlFor="performanceTheme"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Performance Description
              </label>
              <div className="mt-2">
                <textarea
                  id="performanceTheme"
                  name="performanceTheme"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a brief description about performance.
              </p>
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
                value={formFields.paymentMode} // Use formFields.paymentMode to sync with the state
                onChange={handlePaymentModeChange}
              >
                <option value="UPI">UPI</option>
                <option value="Cash">Cash</option>
              </select>
            </div>
            {/* If payment mode is upi then add the screenshot of transaction */}
            <div className="col-span-full">
              {formFields.paymentMode === "UPI" ? (
                <div>
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Screenshot of transaction
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <RiScreenshot2Fill
                      className="h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />

                    <button
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Upload
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={() => setFormFields({})}
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
