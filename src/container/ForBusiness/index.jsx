import React from "react";
import Container from "../../components/Container-wrapper";
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

<h1 className="text-[#68BAE3] text-3xl "> {heading} </h1>
<br></br>
<h6 className="  sm:w-1/2 w-2/2 m-auto text-[#868E95] " > {text} </h6>
<br></br>
<div className="sm:w-1/2 md-custom:w-2/3 m-auto" >

<InputField placeholderText={placeholderText} width="w-2/3" />
<Button buttonText={buttonText} width="w-1/3" />
</div>

</div>





</section>

        
         </Container>
}