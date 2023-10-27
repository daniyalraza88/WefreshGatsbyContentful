import React from "react"
import Navbar from "../Navbar"
import Layout from "../layout"

export default function Container({ children }) {

    return (
        <div className=" max-w-[1440px] w-full px-[28px] md:px-[60px] lg:px-[180px] 2xl:px-100 mx-auto  ">
            {children}
        </div>
    )
}