import React from "react";
import Container from "../../components/Container";
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
        }
      }
    `)
    console.log(data.contentfulArea.buttonText)
    let buttonText = data.contentfulArea.buttonText
    let placeholderText = data.contentfulArea.placeHolder
    let heading = data.contentfulArea.heading
    let image = getImage(data.contentfulArea.mainImage)
    let heading1 = heading.slice(0,16)
    let heading2 = heading.slice(16)



    return <Container>
        <section className="flex flex-col sm:flex-row pt-10 justify-between text-2xl" >
            <div className="m-auto w-1/2" > <h2 className="text-[#68BAE3] text-4xl mb-8" > {heading1} <b>{heading2}</b> </h2>
                <InputField placeholderText={placeholderText}  />
                <Button buttonText={buttonText} />
            </div>
            <div className="w-1/2 bg-yellow-100"> 
            <GatsbyImage image={image} className="w-12/12 h-5/6" />
            </div>
        </section>
    </Container>
}