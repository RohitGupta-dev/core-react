import React from "react";
import Context from "./Context";

const UserContextProvider = ({children}) => {
    debugger;
    const [user, setUser] = React.useState(null)
    return(
        <Context.Provider value={{user, setUser}}>
        {children}
        </Context.Provider>
    )
}

export default UserContextProvider