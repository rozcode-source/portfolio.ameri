import React, { useState, useContext } from 'react';
import './App.css'
const AppContext = React.createContext();


const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState(false);
  const [nav, setNav] = useState(false);
  const [pop, setPop] = useState(true);



 const languagechanger = () => {
    setLanguage(!language);
  };
  const closemenu = () => {
    setNav(false);
  };
  
  const closepop= () => {
    setPop(false);
  };
  /* const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };*/

  return (
    <AppContext.Provider
      value={{
        languagechanger,language,setLanguage,nav,setNav,closemenu,closepop,pop,setPop
     
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
