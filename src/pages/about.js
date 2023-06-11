import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useRef, useEffect } from "react";
import profilePic from "../../public/images/profile/ian_digital_artwork.png";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";


const about = () => {
    return (
        <>
            <Head>
                <title>About | Ian Riera</title>
                <meta name="description" content="Ian Riera's personal website" />
            </Head>
            <TransitionEffect />
            <main className="pt-12 flex w-full flex-col items-center justify-center dark:text-light
            ">
                <Layout className="pt-16">
                    <AnimatedText text="Exploring the Potential of AI and Computer Vision! " className="mb-16
                    lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className="col-span-4 flex flex-col items-start justify-start
                        md:order-2 md:col-span-8 leading-loose">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75
                            dark:text-light/75">Biography</h2>
                            <p className="font-medium">
                                Hello world, I'm Ian. I am a Telecommunications engineer specialized in Computer Vision.  
                            </p>
                            <p className="my-4 font-medium">My work experience in Computer Vision began at <a className="underline hover:text-blue-800" href="https://beamagine.com/">Beamagine S.L.</a>, after completing there my <a className="underline hover:text-blue-800" href="https://mcv.uab.cat/">Master</a> Thesis as an internship in collaboration with the <a className="underline hover:text-blue-800" href="https://imatge.upc.edu/web/">Image Processing Group</a> from UPC. The thesis focused on pedestrian detection on point clouds obtained with the company's Lidar.
                             Prior to the Computer Vision master, I completed a bachelor degree in Telecommunication Engineering at <a className="underline hover:text-blue-800" href="https://telecos.upc.edu/en/study-programs/degrees/bachelors-degree-in-telecommunications-technologies-and-services-engineering">UPC</a> and
                             the corresponding master at <a className="underline hover:text-blue-800" href="http://beslasalle.salleurl.edu/en/master-universitario-ingenieria-telecomunicacion">La Salle - Universitat Ramon Llull</a>. These comprehensive educational experiences have provided me with a solid
                            foundation in engineering principles.</p>
                            <p className="my-4 font-medium">
                                I am currently working at <a href="https://coatingai.com/" className="underline hover:text-blue-800">CoatingAI AG</a>, a startup that aims to leverage the power of artificial intelligence
                                to automate coating processes and boost efficiency.
                                My main role includes developing software tools for computer vision based solutions,
                                both as standalone applications and packages of the company's full software pipeline.
                            </p>
                            <p className="my-4 font-medium">
                                Lately, I have been helping with the development of a web application for the company's current flagship product, the Flightpath.
                            </p>
                            <p className="font-medium">
                                Whether it is for work or for fun, I love to explore new technologies and learn new skills.
                                From data science to web development, I am always looking for new challenges to tackle. Currently, paying
                                attention to the latest trends in AI, exploring the potential of these tools and how to apply them to real world problems. I guess it's all about
                                writing the right prompt!

                            </p>
                        </div>

                        <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark
                    bg-light p-8 dark:bg-dark dark:border-light md:order-1 md:col-span-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark
                            dark:bg-light"></div>
                            <Image src={profilePic} alt="IanRiera" className='w-full h-auto rounded-xl'
                                priority
                                sizes="(max-width: 768px) 100vw,
                                          (max-width: 1200px) 40vw,
                                          40vw" />

                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>

    )
}

export default about