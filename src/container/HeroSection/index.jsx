import React from "react"
import Container from "../../components/Container"

export default function Home(){
    return (
        <Container>
            <section className="flex flex-col sm:flex-row pt-28 justify-between" >
                <div className="text-slate-50 text-2xl sm:text-2xl md:text-3xl lg:4xl sm:text-left text-center ">
                    The smarter way <br></br>
                    <b>to order your food</b>
                    <br></br>
                    <br></br>

                    <input placeholder="Enter phone number" />
                    <button className="ml-2" > Send </button>
                    <br></br>
                    <br></br>

                    <p>Available on</p>
                    <br></br>
                   
                    <span>A</span>
                    <span  className="ml-3" >B</span>
                </div>
                <div className=" sm:mr-28 sm:pt-0 pt-16 m-auto  " >
                    hello
                    <br></br>
                    hello
                    <br></br>

                    hello
                    <br></br>
                    hello
                    <br></br>
                    hello
                    hello
                    <br></br>
                    hello
                    hello
                    <br></br>
                    hello
                    <br></br>
                    hello
                    hello

                </div>
            </section>
        </Container>
    )
    
    
    
}