'use client'

import React from "react";

interface ViewUserButtonProps {
    userId :number
}
const ViewUserButton: React.FC<ViewUserButtonProps>=(userId) => {
    const handleClick = () => alert ('User Id: ${userId}');
    return(
     <>
        <button onClick={handleClick}>lihat user</button>
        </>
    );
};

export default ViewUserButton