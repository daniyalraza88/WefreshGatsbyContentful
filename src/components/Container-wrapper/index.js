import React from "react"
import Navbar from "../Navbar"
import Layout from "../layout"
import { getImage,GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery,graphql } from "gatsby"

export default function Container({ children }) {
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

    let bgImage1 = getImage(data.contentfulHeroSection.backgroundImages[4])
    let bgImage2 = getImage(data.contentfulHeroSection.backgroundImages[8])


    return ( <> 
        <div className=" max-w-[1440px] w-full px-[28px] md:px-[60px] lg:px-[180px] 2xl:px-100 mx-auto ">
            {children}
        </div>

        {/* <div className="relative" >
            <GatsbyImage image={bgImage2} className="absolute  right-0" />
        </div> */}
        </>
    )
}