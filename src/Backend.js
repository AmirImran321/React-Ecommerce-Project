
import { useState,useEffect } from "react";

const Backend = () => {
const [backendData, setBackendData] = useState("");

useEffect(() => {
    fetch("http://localhost:5000")
      .then((response) => response.json())
      .then((data) => setBackendData(data.message))
      .catch((error) => console.error("Error fetching backend data:", error));
  }, []);

return(
    <div>
       <h1>Backend Page</h1>
    <div>Backend Data: {backendData}</div>
    </div>
)};

export default Backend;