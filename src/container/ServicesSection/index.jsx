import React from "react"
import Container from "../../components/Container-wrapper"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {Swiper,SwiperSlide} from 'swiper/react'






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
              backgroundImages{
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
    let bgimage = getImage(data.allContentfulServices.edges[0].node.backgroundImages)


    return (<Container>
        <section>
            <div className="text-purple-300 text-center text-4xl pt-20" > {heading1} <b> {heading2} </b>  </div>
            <br></br>
            <div id="servicesIcons" className= " hidden sm:flex justify-evenly pt-5 text-center text-2xl mb-5">
                <div className="hover:scale-[1.2] transition-transform duration-300 ease-in-out" >
                    <GatsbyImage image = {icon} />
                <h1 className=" pt-3 " >{iconText}</h1>
                </div>

                <div className="hover:scale-[1.2] transition-transform duration-300 ease-in-out">
                    <GatsbyImage image = {icon} />
                <h1 className=" pt-3" >{iconText}</h1>

                </div>
                <div className="hover:scale-[1.2] transition-transform duration-300 ease-in-out">
                    <GatsbyImage image = {icon} />
                <h1 className=" pt-3" >{iconText}</h1>

                </div>
                <div className="hover:scale-[1.2] transition-transform duration-300 ease-in-out">
                    <GatsbyImage image = {icon} />
                <h1 className=" pt-3" >{iconText}</h1>

                </div>

            </div>


          <div className="sm:hidden pl-[35%] ">

            <Swiper  
      spaceBetween={50}
      slidesPerView={1.5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
      <SwiperSlide><GatsbyImage image = {icon}/> </SwiperSlide>
      <SwiperSlide><GatsbyImage image = {icon}/> </SwiperSlide>
      <SwiperSlide><GatsbyImage image = {icon}/> </SwiperSlide>
      <SwiperSlide><GatsbyImage image = {icon}/> </SwiperSlide>
    </Swiper>
      </div>


            <br></br>









            <section className="  flex flex-col sm:flex-row pt-28 justify-between   ">
                <div className=" sm:w-1/2 w-2/2 m-auto relative flex justify-center items-center">
                   <GatsbyImage image={mainPhone} className="z-10" />
                     <GatsbyImage image={bgimage}  className="z-5 absolute "  />
                  
                </div>
                <div className="  sm:pt-0 pt-16 m-auto sm:w-1/2 w-2/2">
                <div className="hover:bg-[#EBF7FC] p-5">
                    <h4 className="text-lg text-[#68BAE3]" > Lorem ipsum dolor sit amet. </h4>
                    <p className="text-[#868E95]" > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia, urna eget volutpat hendrerit, tortor nisl feugiat nunc   </p>
                </div>
                <br></br>
                <div className="hover:bg-[#EBF7FC] p-5">
                    <h4 className="text-lg text-[#68BAE3]"> Lorem ipsum dolor sit amet. </h4>
                    <p className="text-[#868E95]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia, urna eget volutpat hendrerit, tortor nisl feugiat nunc  </p>
                </div>
                <br></br>
                <div className="hover:bg-[#EBF7FC] p-5">
                    <h4 className="text-lg text-[#68BAE3]"> Lorem ipsum dolor sit amet. </h4>
                    <p className="text-[#868E95]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia, urna eget volutpat hendrerit, tortor nisl feugiat nunc  </p>
                </div>


                </div>
            </section>









        </section>
    </Container>)
}