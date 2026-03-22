import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
const StateContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [installed, setInstalled] = useState(false);
  const [storedData, setStoredData] = useState([]);

  // handle remove data from local storage
  const handleRemoveData = (appId) => {
    const existingIDs = JSON.parse(localStorage.getItem('installedApps')) || [];
    const updatedIDs = existingIDs.filter((id) => id !== appId);
    localStorage.setItem('installedApps', JSON.stringify(updatedIDs));
    setStoredData(updatedIDs);
    setInstalled(false);
    Swal.fire({
      title: 'App Removed Successfully!',
      icon: 'success',
      draggable: false,
      showConfirmButton: false,
      timer: 1000,
    });
  };

  // handleAddData to local storage
  const handleAddData = (appId) => {
    const newID = [appId],
      existingIDs = JSON.parse(localStorage.getItem('installedApps')) || [];
    const updatedIDs = [...new Set([...existingIDs, ...newID])];
    localStorage.setItem('installedApps', JSON.stringify(updatedIDs));
    setInstalled(true);
    Swal.fire({
      title: 'App Installed Successfully!',
      icon: 'success',
      draggable: false,
      showConfirmButton: false,
      timer: 1000,
    });
  };
  // all context data will be here
  const data = {
    apps,
    loading,
    handleAddData,
    installed,
    setInstalled,
    storedData,
    handleRemoveData,
  };
  useEffect(() => {
    setTimeout(() => {
      const fetchApps = async () => {
        try {
          const storedApps =
            (await JSON.parse(localStorage.getItem('installedApps'))) || [];
          const response = await axios.get('/app-data.json');
          setApps(response?.data);
          setStoredData(storedApps);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching app data:', error);
          setLoading(false);
        }
      };
      fetchApps();
    }, 1000);
  }, []);

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export default ContextProvider;
export { StateContext };
