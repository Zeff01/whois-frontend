import React, { useState } from "react";

const DomainLookupForm = ({ onLookup }) => {
  const [domain, setDomain] = useState("");
  const [infoType, setInfoType] = useState("domain");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLookup(domain, infoType);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        placeholder="Enter domain name"
        className="border p-2 w-full"
        required
      />
      <select
        value={infoType}
        onChange={(e) => setInfoType(e.target.value)}
        className="border p-2 w-full"
      >
        <option value="domain">Domain Information</option>
        <option value="contact">Contact Information</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 w-full mt-2 hover:bg-blue-700"
      >
        Lookup
      </button>
    </form>
  );
};

export default DomainLookupForm;
