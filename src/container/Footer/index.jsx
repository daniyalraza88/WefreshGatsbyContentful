import React from "react";
import Container from "../../components/Container";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Footer(){

const data = useStaticQuery(graphql`
{
    contentfulFooter {
      headings
      extraText
      list
      logo {
        gatsbyImageData
      }
      logos {
        gatsbyImageData
      }
    }
  }
`)

console.log(data)
let headings = data.contentfulFooter.headings
let extraText = data.contentfulFooter.extraText
let list = data.contentfulFooter.list
let mainLogo = getImage(data.contentfulFooter.logo) 
let appleLogo = getImage(data.contentfulFooter.logos[0])
let googleLogo = getImage(data.contentfulFooter.logos[1])



    return <>
        <footer className="bg-blue-100 pt-16 pb-16 mt-10 sm:justify-center px-10 flex flex-col sm:flex-row gap-14  " >
            <div className="-mt-2" ><GatsbyImage image={mainLogo}  /></div>
            <div>
                <h3>{headings}</h3>
                <ul className="mt-3">
                    {list.map((val=>{
                        return <li> {val} </li>
                    }))}
                </ul>
            </div>
            <div>
            <h3>{headings}</h3>
                <ul className="mt-3" >
                {list.map((val=>{
                        return <li> {val} </li>
                    }))}
                </ul>
            </div>
            <div>
            <h3>{headings}</h3>
                <ul className="mt-3" >
                {list.map((val=>{
                        return <li> {val} </li>
                    }))}
                </ul>
            </div>
            <div className="text-center" >{extraText} 
                <div className="flex gap-5 justify-center pt-5 " > 
                <div> <GatsbyImage image={appleLogo} /> </div>
                <div> <GatsbyImage image={googleLogo} /> </div>
                 </div>
                 </div>
        </footer>
    </>
}