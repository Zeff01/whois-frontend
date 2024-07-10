import React from "react";
import { formatDate } from "../utils/dateFormatter";

const DomainInfoTable = ({ data }) => {
  if (!data) return null;

  const hostnames = data.nameServers?.hostNames || [];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse block md:table shadow-lg rounded-lg overflow-hidden">
        <thead className="block md:table-header-group">
          <tr className="bg-gradient-to-r from-green-500 to-blue-500 text-white md:border-none block md:table-row">
            <th className="p-4 text-left block md:table-cell">Domain Name</th>
            <th className="p-4 text-left block md:table-cell">
              Registrar Name
            </th>
            <th className="p-4 text-left block md:table-cell">
              Registration Date
            </th>
            <th className="p-4 text-left block md:table-cell">
              Expiration Date
            </th>
            <th className="p-4 text-left block md:table-cell">
              Estimated Domain Age
            </th>
            <th className="p-4 text-left block md:table-cell">Hostnames</th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          <tr className="bg-white hover:bg-gray-100 transition-colors duration-300 ease-in-out border border-gray-200 md:border-none block md:table-row">
            <td className="p-4 text-left block md:table-cell">
              {data.domainName || "N/A"}
            </td>
            <td className="p-4 text-left block md:table-cell">
              {data.registrarName || "N/A"}
            </td>
            <td className="p-4 text-left block md:table-cell">
              {formatDate(data.createdDate) || "N/A"}
            </td>
            <td className="p-4 text-left block md:table-cell">
              {formatDate(data.expiresDate) || "N/A"}
            </td>
            <td className="p-4 text-left block md:table-cell">
              {data.estimatedDomainAge || "N/A"}
            </td>
            <td className="p-4 text-left block md:table-cell">
              {hostnames.length > 0
                ? hostnames.join(", ").substring(0, 25) +
                  (hostnames.join(", ").length > 25 ? "..." : "")
                : "N/A"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DomainInfoTable;
