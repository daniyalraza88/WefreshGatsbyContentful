import React from "react";
import Container from "../../components/Container-wrapper";
import InputField from "../../components/common/InputField";
import Button from "../../components/common/Button";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Partner() {

    const data = useStaticQuery(graphql`
     {
        contentfulPartners {
          heading
          text
          icons {
            gatsbyImageData
          }
          backgroundImages{
            gatsbyImageData
          }
        }
      }`)


      console.log(data)
      let heading = data.contentfulPartners.heading
      let text = data.contentfulPartners.text

      let heading1 = heading.slice(0,4)
      let heading2 = heading.slice(4)
      let icon = getImage(data.contentfulPartners.icons) 
      let bgImage = getImage(data.contentfulPartners.backgroundImages) 


        
    return  <section className="lg:px-[120px]  2xl:px-[20%] md-custom:px-8 3xl-custom:px-[20%] 4xl-custom:px-[30%]" >
            <div className="flex flex-col md:flex-row  " >
                <div className=" w-full md:w-1/2 pt-10 pb-24 mb-24 sm: ">
                    <div className="sm:w-96 w-full m-auto  relative flex justify-center items-center">
                      <GatsbyImage image={bgImage} className="z-5 absolute w-[120%] top-6 " />
                      <div className="z-10" >

                    <h2 className="text-center text-3xl pt-24 text-[#68BAE3] ">{heading1} <b>{heading2}</b></h2>
                    <p className="text-center pt-5 text-[#868E95] "> {text}</p>
                      </div>
                    </div>
                </div>


              <div className=" md:w-1/2 sm:w-2/3   sm:m-auto md:m-0 sm:mb-48 w-full  relative mb-48 md:mb-0 ">
                <div className="sm-custom:w-36 md-custom:w-40 w-28  absolute -top-5 left-0" >
              <GatsbyImage  image={icon} />  
                </div>
                <div className="w-28 sm-custom:w-36 md-custom:w-40 absolute bottom-0 left-0" >
              <GatsbyImage image={icon} />  
                </div>
                <div className="w-28 sm-custom:w-36 md-custom:w-40 absolute -bottom-5 right-0" >
              <GatsbyImage image={icon} />  
                </div><div className="w-28 sm-custom:w-36 md-custom:w-40 absolute top-7 right-0" >
              <GatsbyImage image={icon} />  
                </div>
                <div className="w-28 sm-custom:w-36 md-custom:w-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <GatsbyImage image={icon}  />
                </div>
                
              </div>


                
                {/* <div className="sm:hidden block relative mt-48 mb-36 ">
                <GatsbyImage image={icon} className="w-40 absolute top-16"  />
                <GatsbyImage image={icon} className="w-40  absolute bottom-8"/>
                <GatsbyImage image={icon} className="w-40  absolute left-32 -top-12"/>
                <GatsbyImage image={icon} className="w-40  absolute left-64 top-16"/>
                <GatsbyImage image={icon} className="w-40  absolute left-72 -bottom-8"/>
                </div> */}


                {/* <div className=" w-1/2 relative sm:block hidden bg-yellow-200 h- ">  */}
                
                {/* <GatsbyImage image={icon} className="w-40  absolute top-0 left-0"/> */}
                {/* <GatsbyImage image={icon} className="w-40  absolute  left-0"/> */}


                {/* <GatsbyImage image={icon} className="w-40  absolute top-5 right-0"/> */}
                {/* <GatsbyImage image={icon} className="w-40  absolute -bottom-28 left-0"/> */}
                {/* <GatsbyImage image={icon} className="w-40  absolute top-28 left-44 "/> */}
                {/* <GatsbyImage image={icon} className="w-40  absolute -bottom-36 right-0 "/> */}




                {/* <GatsbyImage image={icon} className="w-40  absolute top-24 left-0"/> */}
                
                {/* <GatsbyImage image={icon} className="w-40  absolute top-0 right-0"/> */}

                <br></br>
               


                {/* </div> */}
            </div>
        </section>
    
}