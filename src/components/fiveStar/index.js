import React from "react";
import { useStaticQuery,graphql } from "gatsby";
import { GatsbyImage,getImage } from "gatsby-plugin-image";

export default function FiveStar(){


    const data = useStaticQuery(graphql`
     {
        contentfulPartners {
          heading
          text
          icons {
            gatsbyImageData
          }
        }
      }`)
      let icon = getImage(data.contentfulPartners.icons) 

    return <div> 
        
  <div className="flex flex-wrap justify-center items-center h-96 w-1/2">
  <div className="relative w-1/2 h-1/2">
    <GatsbyImage image = {icon} className="absolute top-0 left-0 w-1/4  rounded-full" />
  </div>
  <div className="relative w-1/2 h-1/2">
  <GatsbyImage image = {icon} className="absolute top-0 right-0 w-1/4  rounded-full" />

  </div>
  <div className="relative w-1/2 h-1/2">
  <GatsbyImage image = {icon}  className="absolute bottom-0 left-0 w-1/4 rounded-full"/>

  </div>
  <div className="relative w-1/2 h-1/2">
  <GatsbyImage image = {icon} className="absolute bottom-0 right-0 w-1/4 rounded-full" />

  </div>
  <div className="relative w-1/2 h-1/2">
  <GatsbyImage image = {icon} className="absolute top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 rounded-full"
    />

  </div>
</div>
         </div>
}