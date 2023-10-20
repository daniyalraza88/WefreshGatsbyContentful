import React from "react";
import Container from "../../components/Container";

export default function Footer(){
    return <>
        <footer className="bg-blue-100 pt-16 pb-16 mt-10 sm:justify-center px-10 flex flex-col sm:flex-row gap-14  " >
            <div>Logo</div>
            <div>
                <h3>SERVICE AREA</h3>
                <ul className="mt-3" >
                    <li>Lorem ipsum dd </li>
                    <li>Lorem ips um</li>
                    <li>Lorem </li>
                    <li>Lorem ipsum dolor</li>
                </ul>
            </div>
            <div>
            <h3>SERVICE AREA</h3>
                <ul className="mt-3" >
                    <li>Lorem ipsum dd </li>
                    <li>Lorem ips um</li>
                    <li>Lorem </li>
                    <li>Lorem ipsum dolor</li>
                </ul>
            </div>
            <div>
            <h3>SERVICE AREA</h3>
                <ul className="mt-3" >
                    <li>Lorem ipsum dd </li>
                    <li>Lorem ips um</li>
                    <li>Lorem </li>
                    <li>Lorem ipsum dolor</li>
                </ul>
            </div>
            <div className="text-center" >Available on 
                <div className="flex gap-5 justify-center" > 
                <div>A</div>
                <div>B</div>
                 </div>
                 </div>
        </footer>
    </>
}