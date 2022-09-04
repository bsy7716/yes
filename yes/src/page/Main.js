import React from "react";
import AwardsList from "../component/AwardsList";
import HotList from "../component/HotList";
import Jumpo from "../component/Jumpo";

export function Main(){
    return(
        <main>
            <Jumpo/>
            <HotList/>
            <AwardsList/>
        </main>
    );
}