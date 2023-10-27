import React from "react";
import Container from "../../components/Container-wrapper";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";



export default function AppBusiness(){
    const data = useStaticQuery(graphql`
    { 
    contentfulGetapp {
        text
        heading
        logo {
          gatsbyImageData
        }
      }
    }
    `)
        console.log(data)
       

      let heading = data.contentfulGetapp.heading
      let text = data.contentfulGetapp.text
      let image = getImage(data.contentfulGetapp.logo)


    return <section className="bg-blue-100 pt-16 pb-16 mt-10 px-10" >
            <div className="text-center text-lg " >

<h1 className="text-[#68BAE3] text-4xl" > {heading}  </h1>
<br></br>
<h6 className="sm:w-1/2 w-2/2 m-auto text-[#868E95] " > {text} </h6>
</div>
<div className="flex flex-col sm:flex-row gap-3 sm:justify-center text-center pt-10" >
    <div> <GatsbyImage image={image} /> </div>
    <div><GatsbyImage image={image} /></div>

</div>
        </section>

}