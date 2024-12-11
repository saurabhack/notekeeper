import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// Create the context
const fetchedData = createContext();

// Provider component
function FetchContext({ children }) {
  const [data, setData] = useState([]);

  const fetchAllData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/notekeepers/all");
      const sortedData = response.data.sort(
        (a, b) => (b.pin ? 1 : 0) - (a.pin ? 1 : 0)
      );
      setData(sortedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch tasks.", { position: "top-center" });
    }
  };

  return (
    <fetchedData.Provider value={{ fetchAllData, data }}>
      {children}
    </fetchedData.Provider>
  );
}

export default FetchContext;
