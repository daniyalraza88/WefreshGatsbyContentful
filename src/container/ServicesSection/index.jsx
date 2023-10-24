import React from "react"
import Container from "../../components/Container"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Services() {

    const data = useStaticQuery(graphql`
    {
        allContentfulServices {
          edges {
            node {
              heading
              iconText
              loremText
              loremHeading
              mainPhone {
                gatsbyImageData
              }
              newHeading {
                raw
              }
              icons {
                gatsbyImageData
              }
            }
          }
        }
      }
    `)
    console.log(data.allContentfulServices.edges[0].node)
    let heading  = data.allContentfulServices.edges[0].node.heading
    let heading1 = heading.slice(0,10)
    let heading2 = heading.slice(11)
    let iconText = data.allContentfulServices.edges[0].node.iconText
    let loremHeading = data.allContentfulServices.edges[0].node.iconText
    let loremText = data.allContentfulServices.edges[0].node.iconText
    let icon = getImage(data.allContentfulServices.edges[0].node.icons[0])
    let mainPhone = getImage(data.allContentfulServices.edges[0].node.mainPhone)

    return (<Container>
        <section>

            <div className="text-purple-300 text-center text-4xl pt-20" > {heading1} <b> {heading2} </b>  </div>
            <br></br>
            <div id="servicesIcons" className="flex justify-evenly pt-5 text-center text-2xl mb-5">
                <div className="hover:translate-y-3 transition-transform duration-300 ease-in-out" >
                    <GatsbyImage image = {icon} />
                <h1 className=" pt-3 " >{iconText}</h1>

                </div>
                <div className="hover:translate-y-3 transition-transform duration-300 ease-in-out">
                    <GatsbyImage image = {icon} />
                <h1 className=" pt-3" >{iconText}</h1>

                </div>
                <div className="hover:translate-y-3 transition-transform duration-300 ease-in-out">
                    <GatsbyImage image = {icon} />
                <h1 className=" pt-3" >{iconText}</h1>

                </div>
                <div className="hover:translate-y-3 transition-transform duration-300 ease-in-out">
                    <GatsbyImage image = {icon} />
                <h1 className=" pt-3" >{iconText}</h1>

                </div>

            </div>
            <br></br>









            <section className="  flex flex-col sm:flex-row pt-28 justify-between  bg-yellow-100">
                <div className=" sm:w-1/2 w-2/2 m-auto ">
                   <GatsbyImage image={mainPhone} />
                  
                   
                 

                </div>
                <div className="  sm:pt-0 pt-16 m-auto sm:w-1/2 w-2/2   " >
                <div className="hover:bg-blue-100 p-5" >
                    <h4 className="text-lg text-[#68BAE3]" > Lorem ipsum dolor sit amet. </h4>
                    <p className="text-gray-900" > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia, urna eget volutpat hendrerit, tortor nisl feugiat nunc   </p>
                </div>
                <br></br>
                <div className="hover:bg-blue-100 p-5">
                    <h4 className="text-lg text-[#68BAE3]"> Lorem ipsum dolor sit amet. </h4>
                    <p className="text-gray-900"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia, urna eget volutpat hendrerit, tortor nisl feugiat nunc  </p>
                </div>
                <br></br>
                <div className="hover:bg-blue-100 p-5">
                    <h4 className="text-lg text-[#68BAE3]"> Lorem ipsum dolor sit amet. </h4>
                    <p className="text-gray-900"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia, urna eget volutpat hendrerit, tortor nisl feugiat nunc  </p>
                </div>


                </div>
            </section>









        </section>
    </Container>)
}