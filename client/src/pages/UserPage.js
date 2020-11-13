import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation"
import UserProfile from "../components/UserProfile";

function UserPage(props) {
    

    return <>
        <Navigation user={props.user}/>
        {props.user? <UserProfile user={props.user} /> : ""}
    </>
}

export default UserPage;