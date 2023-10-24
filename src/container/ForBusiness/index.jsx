import React from "react";
import Container from "../../components/Container";
import Button from "../../components/common/Button";
import InputField from "../../components/common/InputField";
import { graphql, useStaticQuery } from "gatsby";

export default function Business(){


const data = useStaticQuery(graphql`
{
    contentfulBusiness {
      heading
      placeHolder
      text
      buttonText
    }
  }`)
  let heading = data.contentfulBusiness.heading
  let placeholderText = data.contentfulBusiness.placeHolder
  let text = data.contentfulBusiness.text
  let buttonText = data.contentfulBusiness.buttonText




    return <Container> 
        <section className="pt-16 pb-15" >

<div className="text-center" >

<h1 className="text-blue-200 text-3xl "> {heading} </h1>
<br></br>
<h6 className="sm:w-1/2 w-2/2 m-auto" > {text} </h6>
<br></br>
<InputField placeholderText={placeholderText} />
<Button buttonText={buttonText} />

</div>





</section>

        
         </Container>
}