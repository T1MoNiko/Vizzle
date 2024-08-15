import React from "react";

const Main: React.FC<{children: React.ReactNode}> = ({children}) => {
    return ( 
        <main className="flex flex-col grow relative">
            {children}
        </main>
     );
}
 
export default Main;