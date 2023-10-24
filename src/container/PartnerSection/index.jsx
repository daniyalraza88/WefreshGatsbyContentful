import React from "react";
import Container from "../../components/Container";
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
        }
      }`)


      console.log(data)
      let heading = data.contentfulPartners.heading
      let heading1 = heading.slice(0,4)
      let heading2 = heading.slice(4)
      let icon = getImage(data.contentfulPartners.icons) 
        
    return <Container>
        <section>
            <section className="flex flex-col sm:flex-row pt-10 pb-24" >
                <div className=" w-2/2 sm:w-1/2  bg-yellow-100 ">
                    <div className="sm:w-64 w-full m-auto">
                    <h2 className="text-center text-3xl pt-24">{heading1} <b>{heading2}</b></h2>
                    <p className="text-center pt-5" > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia, urna eget volutpat hendrerit, tortor nisl feugiat nunc </p>
                    </div>
                </div>
                <div className="sm:hidden block relative mt-48 mb-36 ">
                <GatsbyImage image={icon} className="w-40 absolute top-16"  />
                <GatsbyImage image={icon} className="w-40  absolute bottom-8"/>
                <GatsbyImage image={icon} className="w-40  absolute left-32 -top-12"/>
                <GatsbyImage image={icon} className="w-40  absolute left-64 top-16"/>
                <GatsbyImage image={icon} className="w-40  absolute left-72 -bottom-8"/>
                    abc

                </div>
                <div className=" w-1/2 m-auto sm:relative sm:block hidden    "> 
                <GatsbyImage image={icon} className="w-40 absolute top-16"  />
                <GatsbyImage image={icon} className="w-40  absolute bottom-8"/>
                <GatsbyImage image={icon} className="w-40  absolute left-32 -top-12"/>
                <GatsbyImage image={icon} className="w-40  absolute left-64 top-16"/>
                <GatsbyImage image={icon} className="w-40  absolute left-72 -bottom-8"/>

                
                <br></br>
               


                </div>
            </section>
        </section>
    </Container>
}