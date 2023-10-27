import React from "react";
import Container from "../../components/Container-wrapper";
import InputField from "../../components/common/InputField";
import Button from "../../components/common/Button";
import { graphql, useStaticQuery } from "gatsby";
import { getImage,GatsbyImage } from "gatsby-plugin-image";



export default function Area() {

    const data = useStaticQuery(graphql`
    query MyQuery {
        contentfulArea {
          buttonText
          placeHolder
          heading
          mainImage{
            gatsbyImageData
          }
          backgroundImages{
            gatsbyImageData
          }
        }
      }
    `)
    console.log(data.contentfulArea.buttonText)
    let buttonText = data.contentfulArea.buttonText
    let placeholderText = data.contentfulArea.placeHolder
    let heading = data.contentfulArea.heading
    let image = getImage(data.contentfulArea.mainImage)
    let bgimage1 = getImage(data.contentfulArea.backgroundImages[0])
    let bgimage2 = getImage(data.contentfulArea.backgroundImages[1])

    let heading1 = heading.slice(0,16)
    let heading2 = heading.slice(16)



    return <section className="flex flex-col sm:flex-row pt-10 justify-between text-2xl pb-48 ">
            <div className="m-auto w-full sm:w-1/2" > <h2 className="text-[#68BAE3] text-4xl mb-8 text-center  " > {heading1} <b>{heading2}</b> </h2>
                <div className="text-center">
                <InputField placeholderText={placeholderText} width="w-2/3 sm:w-1/2 border-2 mr-2"  />
                <Button buttonText={buttonText} width="w-1/3" />
                </div>
                
            </div>
            <div className=" sm:w-1/2 w-full pt-24 relative"> 
            <GatsbyImage image={image} className="w-12/12 h-5/6 z-10" />
            <GatsbyImage image={bgimage1} className="absolute -left-16 -bottom-12 z-1" />
            <GatsbyImage image={bgimage2} className="absolute right-0 -top-20 z-2" />

            </div>
        </section>
    
}