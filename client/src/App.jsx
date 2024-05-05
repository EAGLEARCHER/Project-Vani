import React, { useState } from "react";
import ParticipantForm from "./ParticipantForm";
import AudienceForm from "./AudienceForm";

export default function App() {
  const [role, setRole] = useState("part");
  return (
    <div className="bg-[url('/src/assets/bg.png')] flex justify-center align-center flex-col w-full">
      <div className="m-auto w-80 mt-5">
        <label
          htmlFor="role"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Please Select Your Role
        </label>
        <select
          id="role"
          name="role"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        >
          <option value="part">Artist</option>
          <option value="aud">Audience</option>
        </select>
      </div>
      <div>{role === "part" ? <ParticipantForm /> : <AudienceForm />}</div>
    </div>
  );
}
