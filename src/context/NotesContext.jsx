import { createContext, useEffect, useState } from "react";
import LoadingPage from "../pages/LoadingPage";

export const NotesContext = createContext();

const NotesProvider = ({children}) => {
  
  const [loading, setLoading] = useState(false);

  const contextData = {};

  return (
    <NotesContext.Provider value = {contextData} >
      {loading ? <LoadingPage /> : children}
    </NotesContext.Provider>
  )
}

export default NotesProvider;