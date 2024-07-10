import axios from "axios";

const WHOIS_API_URL = "https://www.whoisxmlapi.com/whoisserver/WhoisService";
const API_KEY = process.env.REACT_APP_WHOIS_API_KEY;

console.log("API_KEY:", API_KEY); // Add this line

export const fetchWhoisData = async (domain, outputFormat = "JSON") => {
  const response = await axios.get(WHOIS_API_URL, {
    params: {
      domainName: domain,
      apiKey: API_KEY,
      outputFormat,
    },
  });
  console.log("response:", response);
  return response.data;
};
