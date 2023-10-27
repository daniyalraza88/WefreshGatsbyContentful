import React, { useState } from "react";
import Container from "../../components/Container-wrapper";
import { graphql, useStaticQuery } from "gatsby";

export default function Questions() {


    const data = useStaticQuery(graphql`
     {
        contentfulQuestions{
          heading1
          heading1answer
          heading2
          heading2answer
          questions
          answers
          number
          email
          
        }
      }
    `)


      let heading1 = data.contentfulQuestions.heading1
      let heading2 = data.contentfulQuestions.heading2
      let answer1 = data.contentfulQuestions.heading1answer
      let answer2 = data.contentfulQuestions.heading2answer
      let questions = data.contentfulQuestions.questions
      let answers = data.contentfulQuestions.answers
      let number = data.contentfulQuestions.number
      let email = data.contentfulQuestions.email

      let answerHeading = answers.slice(0,40)





    const [toggle1,setToggle1] = useState(false)
    const [toggle2,setToggle2] = useState(false)
    const [toggle3,setToggle3] = useState(false)

    return <Container>
        <section className=" pt-10 pb-10 text-lg">
            <div className="text-center">

            <h1 className="text-blue-200 text-3xl pl-5 " > {heading1} </h1>
            <h6> {answer1} </h6>
            </div>
            <br></br>


            {/* <div className="sm:w-3/4 w-full m-auto"> 
        <h4 className="border-2 rounded-lg py-2 px-10 hover:cursor-pointer mb-2 " onClick={()=>{setToggle1(!toggle1)}}> {questions} </h4>
      
          
        <p className={ `pb-3 p-5 border-2 rounded-lg py-2 px-10 mb-2 text-[#868E95]  transition-max-h-0 ${toggle1 ? "max-h-full" : "max-h-0" } `}> <span className="text-lg text-[#68BAE3]"> {answerHeading}</span> <br></br> {answers} </p>
        
        <div></div>
    


        <h4 className="border-2 rounded-lg py-2 px-10 hover:cursor-pointer mb-2" onClick={()=>{setToggle2(!toggle2)}}> {questions} </h4>
      {
          toggle2 ? 
          <p className="pb-3 p-5 border-2 rounded-lg py-2 px-10 mb-2 text-[#868E95]"> <span className="text-lg text-[#68BAE3]"> {answerHeading}</span> <br></br> {answers} </p>

        :
        <div></div>
    }


        <h4 className="border-2 rounded-lg py-2 px-10 hover:cursor-pointer mb-2" onClick={()=>{setToggle3(!toggle3)}}> {questions} </h4>
      {
          toggle3 ? 
          <p className="pb-3 p-5 border-2 rounded-lg py-2 px-10 text-[#868E95]"> <span className="text-lg text-[#68BAE3]"> {answerHeading}</span> <br></br> {answers} </p>

        :
        <div></div>
    }
    </div> */}



            <div className="sm:w-3/4 w-full m-auto " > 
        <h4 className="border-2 rounded-lg py-2 px-10 hover:cursor-pointer mb-2 " onClick={()=>{setToggle1(!toggle1)}}> {questions} </h4>
      {
          toggle1 ? 
        <p className="pb-3 p-5 border-2 rounded-lg py-2 px-10 mb-2 text-[#868E95]  "> <span className="text-lg text-[#68BAE3]"> {answerHeading}</span> <br></br> {answers} </p>
        :
        <div></div>
    }


        <h4 className="border-2 rounded-lg py-2 px-10 hover:cursor-pointer mb-2" onClick={()=>{setToggle2(!toggle2)}}> {questions} </h4>
      {
          toggle2 ? 
          <p className="pb-3 p-5 border-2 rounded-lg py-2 px-10 mb-2 text-[#868E95]"> <span className="text-lg text-[#68BAE3]"> {answerHeading}</span> <br></br> {answers} </p>

        :
        <div></div>
    }


        <h4 className="border-2 rounded-lg py-2 px-10 hover:cursor-pointer mb-2" onClick={()=>{setToggle3(!toggle3)}}> {questions} </h4>
      {
          toggle3 ? 
          <p className="pb-3 p-5 border-2 rounded-lg py-2 px-10 text-[#868E95]"> <span className="text-lg text-[#68BAE3]"> {answerHeading}</span> <br></br> {answers} </p>

        :
        <div></div>
    }
    </div>

        </section>






<section className="pt-16 pb-15" >

<div className="text-center" >

<h1 className="text-blue-200 text-3xl  " > {heading2} </h1>
<br></br>
<h6 className="sm:w-1/2 w-2/2 m-auto" > {answer2} </h6>
</div>
<br></br>
<div className="flex flex-col sm:flex-row justify-evenly sm:w-2/3 w-3/3 m-auto gap-2 " >
    <div className="border-2 sm:w-1/2 w-2/2 text-center pt-16">
        <h3> {number} </h3>
        <p className="text-[#868E95]" >{answerHeading}</p>

    </div>
    
    <div className="border-2 sm:w-1/2 w-2/2 text-center pt-16">
    <h3> {email} </h3>
        <p className="text-[#868E95]">{answerHeading}</p>
    </div>

</div>




</section>


    </Container>
}