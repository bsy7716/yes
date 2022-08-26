import React from "react";
import HotList from "../component/HotList";
import Jumpo from "../component/Jumpo";
import MainSub from "../component/MainSub";

export function Main(){
    return(
        <main>
            <Jumpo/>
            <HotList/>
        </main>
    );
}