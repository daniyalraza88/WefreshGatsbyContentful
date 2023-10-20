import React, { useState } from "react";
import Container from "../../components/Container";

export default function Questions() {
    const [toggle1,setToggle1] = useState(false)
    const [toggle2,setToggle2] = useState(false)
    const [toggle3,setToggle3] = useState(false)

    return <Container>
        <section className="bg-yellow-100 pt-10 pb-10 ">
            <div className="text-center">

            <h1 className="text-blue-200 text-3xl  " > Got questions? </h1>
            <h6> Perfect, we've got answers! </h6>
            </div>
            <br></br>
        <h4 className="border-2 hover:cursor-pointer mb-1" onClick={()=>{setToggle1(!toggle1)}}> {} This is question number one?</h4>
      {
          toggle1 ? 
        <p className="pb-3" > This is answer number one This is answer number one This is answer number one This is answer number one </p>
        :
        <div></div>
    }


        <h4 className="border-2 hover:cursor-pointer mb-1" onClick={()=>{setToggle2(!toggle2)}}> {} This is question number one?</h4>
      {
          toggle2 ? 
        <p className="pb-1"> This is answer number one This is answer number one This is answer number one This is answer number one </p>
        :
        <div></div>
    }


        <h4 className="border-2 hover:cursor-pointer " onClick={()=>{setToggle3(!toggle3)}}> {} This is question number one?</h4>
      {
          toggle3 ? 
        <p className="pb-1">  This is answer number one This is answer number one This is answer number one This is answer number one </p>
        :
        <div></div>
    }

        </section>






<section className="pt-16 pb-15" >

<div className="text-center" >

<h1 className="text-blue-200 text-3xl  " > Still have a question? </h1>
<br></br>
<h6 className="sm:w-1/2 w-2/2 m-auto" > Perfect, we've got answers! Perfect, we've got answers!Perfect, we've got answers!Perfect, we've got answers! </h6>
</div>
<br></br>
<div className="flex flex-col sm:flex-row justify-evenly sm:w-2/3 w-3/3 m-auto gap-2 " >
    <div className="border-2 sm:w-1/2 w-2/2 text-center pt-16">
        <h3> 03362255532 </h3>
        <p>Lorem ipsum dolor sint Lorem ipsum dolor sint</p>

    </div>
    
    <div className="border-2 sm:w-1/2 w-2/2 text-center pt-16">
    <h3> abc@email.com </h3>
        <p>Lorem ipsum dolor sint Lorem ipsum dolor sint</p>
    </div>

</div>




</section>


    </Container>
}