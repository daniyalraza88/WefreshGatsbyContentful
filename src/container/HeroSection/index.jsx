import React from "react"
import Container from "../../components/Container"
import InputField from "../../components/common/InputField"
import Button from "../../components/common/Button"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage,getImage } from "gatsby-plugin-image"

export default function Home(){
    const data = useStaticQuery(graphql`
    {
        contentfulHeroSection{
          heading
          inputPlaceholder
          buttonText
          extraText
          miniLogos{
            gatsbyImageData
          }
          mainPhone{
            gatsbyImageData
          }
        }
      }
    `)
    console.log(data.contentfulHeroSection)
    let heading = data.contentfulHeroSection.heading
    let heading1 = heading.slice(0,15)
    let heading2 = heading.slice(15)
    let placeholderText = data.contentfulHeroSection.inputPlaceholder
    let buttonText = data.contentfulHeroSection.buttonText
    let extraText = data.contentfulHeroSection.extraText
    let appleLogo = getImage(data.contentfulHeroSection.miniLogos[0])
    let googleLogo = getImage(data.contentfulHeroSection.miniLogos[1])
    let mainPhone = getImage(data.contentfulHeroSection.mainPhone)

    console.log(data)




    return (
        <Container>
            <section className="flex flex-col sm:flex-row pt-28 justify-between" >
                <div className="text-slate-50 bg-yellow-200 text-2xl sm:text-2xl md:text-3xl lg:4xl sm:text-left text-center pt-32">
                    {heading1}
                    <br></br>
                   <b> {heading2} </b> 
                    <br></br>
                    <br></br>

                    {/* <input placeholder="Enter phone number" />
                    <button className="ml-2" > Send </button> */}
                    <InputField placeholderText={placeholderText} />
                    <Button buttonText={buttonText} />
                    <br></br>
                    <br></br>

                    <p>{extraText}</p>
                    <br></br>
                   
                    <span> <GatsbyImage image = {appleLogo} /> </span>
                    <span  className="ml-3"> <GatsbyImage image = {googleLogo} /> </span>
                </div>
                <div className="  sm:pt-0 pt-16 m-auto sm:m-0  bg-yellow-100" >
                   <GatsbyImage image={mainPhone} />
                </div>
            </section>
        </Container>
    )
    
    
    
}