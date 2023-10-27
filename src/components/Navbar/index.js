import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Container from "../Container-wrapper"

export default function Navbar(props) {
    const data = useStaticQuery(graphql`
   {  allContentfulWefresh{
        edges{
          node{
            id
            navbar
            logo {
              id
              url
              gatsbyImageData  
            }
            
          }
        }
      }
    }
`)
    console.log(data)
    const navArray = data.allContentfulWefresh.edges[0].node.navbar
    const logo = getImage(data.allContentfulWefresh.edges[0].node.logo)
    const menuIcon = getImage(data.allContentfulWefresh.edges[1].node.logo)

    return (
<header>
        <Container>
            <div>
                <div className=" text-lg mt-5 flex justify-between ">
                    <div  >
                        <GatsbyImage image={logo} className="mr-10 z-10" />
                    </div>

                    <div className="sm:hidden flex md:hidden lg:hidden" >
                        <button onClick={()=>{props.setToggle(false); console.log("clicked")}} >
                        <GatsbyImage  image={menuIcon}  className="w-10 h-8 mt-1"  />

                        </button>

                    </div>
                    <div className="sm:flex hidden md:flex lg:flex">

                        {navArray.map((val) => {
                            return <h3 className="ml-10 sm:ml-5 hover:cursor-pointer"> {val} </h3>
                        })}

                    </div>



                </div>



            </div>
        </Container>
</header>
    )


    // <div className=" bg-green-100 w-4/6 m-auto text-lg grid grid-cols-4 mt-5"> 


    //     <div >
    //     <GatsbyImage image={logo} className="mr-10" />
    //     </div>



    //     <div className="flex flex-wrap  sm:col-span-3 col-span-2">

    //     { navArray.map((val)=>{
    //   return  <h3 className="ml-10 hover:cursor-pointer"> {val} </h3>
    // })}
    //     </div>



    //  </div>
}