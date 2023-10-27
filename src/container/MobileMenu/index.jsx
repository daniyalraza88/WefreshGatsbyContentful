import React from "react";
import Container from "../../components/Container-wrapper";
import { useStaticQuery, graphql } from "gatsby";
import { getImage,GatsbyImage } from "gatsby-plugin-image";
import Button from "../../components/common/Button";

export default function Menu(props){
        const data = useStaticQuery(graphql`
          {
                contentfulMobilemenu{
                  buttonText
                  logo{
                    gatsbyImageData
                  }
                  menucross{
                    gatsbyImageData
                  }
                  list
                }
        }
              
     `)

     console.log(data)

     const list = data.contentfulMobilemenu.list
     const logo = getImage(data.contentfulMobilemenu.logo)
     const cross = getImage(data.contentfulMobilemenu.menucross)
     const buttonText = data.contentfulMobilemenu.buttonText

     console.log(list)

return (
        <section className="bg-[#68BAE3] p-5 h-screen">
                        <div className=" ">
                <div className="flex justify-between"><GatsbyImage image={logo}/> <button onClick={()=>props.setToggle(true)}> <GatsbyImage image={cross} className="w-6 h-6" />   </button> </div> 
                <div> 
                        <ul className="pt-10 text-2xl text-white" >
                        <hr></hr>

                        {
                                list.map((val)=>{
                                        return <>  <li className="pt-5 pb-5">{val} </li> <hr></hr> </>
                                })
                        }
                        </ul>

                </div>
               
                <button className="mt-10 bg-yellow-200 w-full h-10 rounded text-2xl font-medium " > 
                {buttonText}
                </button>
                
                </div>
        </section>
    
)
}