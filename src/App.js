import React, { useState } from "react";
import DomainLookupForm from "./components/DomainLookupForm";
import DomainInfoTable from "./components/DomainInfoTable";
import ContactInfoTable from "./components/ContactInfoTable";
import { fetchWhoisData } from "./api/whois";

function App() {
  const [domainInfo, setDomainInfo] = useState(null);
  const [contactInfo, setContactInfo] = useState(null);
  const [error, setError] = useState("");

  const handleLookup = async (domain, infoType) => {
    try {
      const data = await fetchWhoisData(domain);
      if (infoType === "domain") {
        setDomainInfo(data.WhoisRecord);
        setContactInfo(null);
      } else {
        setContactInfo(data.WhoisRecord);
        setDomainInfo(null);
      }
      setError("");
    } catch (err) {
      console.error("Error fetching data:", err.response || err.message || err);
      setError("Failed to fetch data. Please try again.");
      setDomainInfo(null);
      setContactInfo(null);
    }
  };

  return (
    <div className="p-6 bg-gray-400 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-100 animate-bounce">
        Whois Lookup
      </h1>
      <div className=" mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-col space-y-8">
        <DomainLookupForm onLookup={handleLookup} />
        {error && <p className="text-red-500 mt-4 animate-pulse">{error}</p>}
        {domainInfo && <DomainInfoTable data={domainInfo} />}
        {contactInfo && <ContactInfoTable data={contactInfo} />}
      </div>
    </div>
  );
}

export default App;
