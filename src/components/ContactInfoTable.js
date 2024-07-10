import React from "react";

const ContactInfoTable = ({ data }) => {
  if (!data) return null;

  const { registrant, technicalContact, administrativeContact } = data;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse block md:table shadow-lg rounded-lg overflow-hidden">
        <thead className="block md:table-header-group">
          <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white md:border-none block md:table-row">
            <th className="p-4 text-left block md:table-cell">
              Registrant Name
            </th>
            <th className="p-4 text-left block md:table-cell">
              Technical Contact Name
            </th>
            <th className="p-4 text-left block md:table-cell">
              Administrative Contact Name
            </th>
            <th className="p-4 text-left block md:table-cell">Contact Email</th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          <tr className="bg-white hover:bg-gray-100 transition-colors duration-300 ease-in-out border border-gray-200 md:border-none block md:table-row">
            <td className="p-4 text-left block md:table-cell">
              {registrant?.name || "N/A"}
            </td>
            <td className="p-4 text-left block md:table-cell">
              {technicalContact?.name || "N/A"}
            </td>
            <td className="p-4 text-left block md:table-cell">
              {administrativeContact?.name || "N/A"}
            </td>
            <td className="p-4 text-left block md:table-cell">
              {data.contactEmail || "N/A"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactInfoTable;
