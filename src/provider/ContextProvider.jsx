import { createContext, useState } from 'react';
const StateContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [apps, setApps] = useState([]);

  console.log(apps);

  const handleName = () => {
    console.log('name is being called');
  };
  // all context data will be here
  const data = {
    handleName,
  };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export default ContextProvider;
export { StateContext };
