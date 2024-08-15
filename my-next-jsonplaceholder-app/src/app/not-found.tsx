import React from "react";
import Image from "next/image";

const NotFoundPage = () => {
    return ( 
        <div className="w-full flex justify-center items-center grow">
            <Image src={"/img/notFoundPage.png"} width={300} height={300} loading="lazy" alt=""></Image>
        </div>
     );
}

export default NotFoundPage;