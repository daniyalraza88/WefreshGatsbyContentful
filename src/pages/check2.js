import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage,GatsbyImage } from "gatsby-plugin-image";

export default () => {

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
    return (
<div className="flex flex-wrap justify-center items-center ">
  <div className="relative w-1/2 h-1/2">
    <GatsbyImage image={icon}
      className="absolute top-0 left-0 w-30 h-30 rounded-full"
    />
  </div>
  <div className="relative w-1/2 h-1/2">
    <GatsbyImage image={icon}
      className="absolute top-0 right-0 w-30 h-30 rounded-full"
    />
  </div>
  <div className="relative w-1/2 h-1/2">
    <GatsbyImage image={icon}
      className="absolute bottom-0 left-0 w-30 h-30 rounded-full"
    />
  </div>
  <div className="relative w-1/2 h-1/2">
    <GatsbyImage image={icon}
      className="absolute bottom-0 right-0 w-30 h-30 rounded-full"
    />
  </div>
  <div className="relative w-1/2 h-1/2">
    <GatsbyImage image={icon}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-30 h-30 rounded-full"
    />
  </div>
</div>

        
    )
}