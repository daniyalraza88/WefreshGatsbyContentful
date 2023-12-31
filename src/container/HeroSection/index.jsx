import React from "react"
import Container from "../../components/Container-wrapper"
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
          backgroundImages{
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
    let bgImage1 = getImage(data.contentfulHeroSection.backgroundImages[6])
    let bgImage2 = getImage(data.contentfulHeroSection.backgroundImages[9])
    let bgImage3 = getImage(data.contentfulHeroSection.backgroundImages[4])
    let bgImage4 = getImage(data.contentfulHeroSection.backgroundImages[8])




    console.log(data)




    return (
      <div>
              {/* <div className="absolute lg:right-0 -right-48" >
                <GatsbyImage image={bgImage4}/>
              </div> */}
              <div className="absolute -left-72 2lg-custom:-left-52 1xl-custom:-left-36 top-0 bg-yellow-100  2xl-custom:left-0 z-5 ">
                <GatsbyImage image={bgImage1} className="h-[800px] w-fit" />
              </div>
        <Container>
            <section className="flex flex-col sm:flex-row sm:pt-28 justify-between relative">
              <div className="absolute -top-12 -right-48 w-2/3" >
                {/* <GatsbyImage image={bgImage3} /> */}
              </div>
              {/* <div className="absolute -top-14 -left-44 h-96 w-10/12 z-5 ">
                <GatsbyImage image={bgImage1}  />
              </div> */}

              
                <div className="text-white sm:w-3/5 text-2xl sm:text-2xl md:text-3xl lg:4xl sm:text-left text-center pt-32 z-10 ">
                    {heading1} 
                    <br></br>
                   <b> {heading2} </b> 
                    <br></br>
                    <br></br>

                    {/* <input placeholder="Enter phone number" /> 
                    <button className="ml-2" > Send </button> */}
                    {/* <div className="w-full bg-green-500 " >  */}
                    <InputField placeholderText={placeholderText} width = "w-3/6 mr-3 border-1 rounded-md " />
                      
                       {/* </div> */}
                    <Button buttonText={buttonText} width="w-2/6 text-gray-900" />
                    <br></br>
                    <br></br>

                    <p>{extraText}</p>
                    <br></br>
                   
                    <span> <GatsbyImage image = {appleLogo} /> </span>
                    <span  className="ml-3"> <GatsbyImage image = {googleLogo} /> </span>
                </div>
                <div className="  sm:pt-0 pt-16 m-auto sm:m-0  flex justify-center items-center" >
                   <GatsbyImage image={mainPhone} className="z-10"  />
                   <GatsbyImage image={bgImage2} className="z-5 absolute w-[45%] -bottom-8" />

                   
                </div>



            </section>
        </Container>
      </div>
    )
    
    
    
}