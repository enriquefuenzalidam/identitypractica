"use client";

import { Footer } from 'components/footer';
import Link from 'next/link';
import Image from 'next/image';

import VerticalVideo from 'components/verticalvideo';
import hockeyacademylogob from 'public/hockeyacademycamp/hockeyacademylogob.png';

import hockeyacademycampimagen01 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_01.jpg';
import hockeyacademycampimagen02 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_02.jpg';
import hockeyacademycampimagen03 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_03.jpg';
import hockeyacademycampimagen04 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_04.jpg';
import hockeyacademycampimagen05 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_05.jpg';
import hockeyacademycampimagen06 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_06.jpg';
import hockeyacademycampimagen07 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_07.jpg';
import hockeyacademycampimagen08 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_08.jpg';
import hockeyacademycampimagen09 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_09.jpg';
import hockeyacademycampimagen10 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_10.jpg';
import hockeyacademycampimagen11 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_11.jpg';
import hockeyacademycampimagen12 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_12.jpg';
import hockeyacademycampimagen13 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_13.jpg';
import hockeyacademycampimagen14 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_14.jpg';
import hockeyacademycampimagen15 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_15.jpg';
import hockeyacademycampimagen16 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_16.jpg';
import hockeyacademycampimagen17 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_17.jpg';
import hockeyacademycampimagen18 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_18.jpg';
import hockeyacademycampimagen19 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_19.jpg';
import hockeyacademycampimagen20 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_20.jpg';
import hockeyacademycampimagen21 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_21.jpg';
import hockeyacademycampimagen22 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_22.jpg';
import hockeyacademycampimagen23 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_23.jpg';
import hockeyacademycampimagen24 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_24.jpg';
import hockeyacademycampimagen25 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_25.jpg';

const hockeyacademycampimagenes = [
    hockeyacademycampimagen01,
    hockeyacademycampimagen02,
    hockeyacademycampimagen03,
    hockeyacademycampimagen04,
    hockeyacademycampimagen05,
    hockeyacademycampimagen06,
    hockeyacademycampimagen07,
    hockeyacademycampimagen08,
    hockeyacademycampimagen09,
    hockeyacademycampimagen10,
    hockeyacademycampimagen11,
    hockeyacademycampimagen12,
    hockeyacademycampimagen13,
    hockeyacademycampimagen14,
    hockeyacademycampimagen15,
    hockeyacademycampimagen16,
    hockeyacademycampimagen17,
    hockeyacademycampimagen18,
    hockeyacademycampimagen19,
    hockeyacademycampimagen20,
    hockeyacademycampimagen21,
    hockeyacademycampimagen22,
    hockeyacademycampimagen23,
    hockeyacademycampimagen24,
    hockeyacademycampimagen25

]


export default function HAenimagenes() {
    return (


        <main className={`block relative z-0 w-full pl-0 md:pl-32 mt-[4.4rem] md:mt-0`}>

            <div className={` relative bg-otoFondo `}>
                <div className={` absolute inset-0 opacity-15 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />


                <div className={`  bg-whiteFadedFondo`}>

                    <section className={` relative mx-auto max-w-5xl pt-16 text-center `}>
                        <Image className={` w-2/5 md:w-2/5 h-auto mx-auto `} src={hockeyacademylogob} alt='' />
                    </section>

                    <section className={` block relative max-w-5xl w-full bg-transparent mt-14 mx-auto px-4 gx:px-0 `}>
                        <div className={` bg-black w-full shadow-lg shadow-[rgba(0,0,0,0.5)] rounded-md overflow-hidden `}>
                            <video poster='hockeyacademycamp/hockeyacademyinicio.jpg' className='w-full aspect-[24/11]' preload="auto" autoPlay="autoplay" loop playsInline controls >
                                <source src='hockeyacademycamp/hockeyacademyinicio_b.mp4' type="video/mp4" />
                            </video>
                        </div>
                    </section>

                    <section className={` relative mx-auto max-w-5xl z-30 pt-28 `}>
                        <h2 data-aos-once="true" data-aos="zoom-out-down" className={` text-center tracking-wide font-BebasNeue text-[#000] text-4xl mx-8 mb-6`}>Hockey Academy Camp en Videos</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-12 `} />

                        <div className={` grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-2 px-4 gx:px-0 `}>

                            {['hockeyacademycamp/hockeyacademycamp_video_01.mp4',
                                'hockeyacademycamp/hockeyacademycamp_video_02.mp4',
                                'hockeyacademycamp/hockeyacademycamp_video_03.mp4',
                                'hockeyacademycamp/hockeyacademycamp_video_04.mp4'
                            ].map((videoSrc, index) => (<VerticalVideo key={index} videoSrc={videoSrc} />))}

                        </div>
                    </section>
                    <section className={` relative mx-auto max-w-5xl z-30 pb-32 pt-32`}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Hockey Academy en Imágenes</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-12 `} />


                        {!!hockeyacademycampimagenes && (
                            <div className={`  relative text-center w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 gx:p-0`}>
                                {hockeyacademycampimagenes.map((imgn, index) => (
                                    <Link key={index} href={imgn.src} className={` cursor-pointer inline-block relative w-full aspect-1 overflow-hidden shadow-lg shadow-[rgba(0,0,0,0.5)] rounded-sm m-0 p-0 border-0 hover:scale-125 z-10 hover:z-50 transition-all ease-in-out duration-700 `}>
                                        <Image data-aos-once="true" data-aos="fade" src={imgn} alt='' className={` object-center object-cover w-full h-full `} />
                                    </Link>
                                ))}
                            </div>

                        )}

                    </section>
                </div>
                <Footer />
            </div>
        </main>


    );
}

