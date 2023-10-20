import React from "react";
import Container from "../../components/Container";
import Button from "../../components/common/Button";
import InputField from "../../components/common/InputField";

export default function Business(){
    return <Container> 
        <section className="pt-16 pb-15" >

<div className="text-center" >

<h1 className="text-blue-200 text-3xl  " > <b>Wefresh</b> for business </h1>
<br></br>
<h6 className="sm:w-1/2 w-2/2 m-auto" > Perfect, we've got answers! Perfect, we've got answers!Perfect, we've got answers!Perfect, we've got answers! </h6>
<br></br>
<InputField placeholderText="Enter your area..." />
<Button buttonText="Search" />

</div>





</section>

        
         </Container>
}