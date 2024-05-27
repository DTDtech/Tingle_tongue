'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const DishesSection = ({ dishes }) => {

    async function adjustVolume() {
        let player = await document.querySelector(`lite-youtube[videoid='${dishes[currentIndex].video_id}']`).getYTPlayer();
        player?.setVolume(20);
    }

    // useEffect(() => {

    // }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    const chevronVariants = {
        hover: {
            scale: 1.3,
            transition: { duration: 0.2 },
        },
    };

    return (
        <>
            {/* {dishes.map((dish, index) => ( */}
                <div className="flex flex-row items-center w-full h-full px-8">
                    <motion.div
                        variants={chevronVariants}
                        whileHover="hover"
                        className="flex justify-start w-1/5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="size-6 text-black" onClick={() => setCurrentIndex(currentIndex - 1)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </motion.div>

                    <motion.div className="w-3/5">
                        {console.log(dishes[currentIndex].video_id)}
                        <div>
                            <div className="card lg:card-side w-full bg-base-100 shadow-xl text-black">
                                <div>
                                    <lite-youtube videoid={dishes[currentIndex].video_id} js-api></lite-youtube>
                                    <button onClick={adjustVolume} className="text-black">Adjust volume</button>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>

                    <motion.div
                        variants={chevronVariants}
                        whileHover="hover"
                        className="flex justify-end w-1/5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                        className="size-6 text-black" onClick={() => setCurrentIndex(currentIndex + 1)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </motion.div>
                </div>
            {/* ))} */}
        </>
    )
}

export default DishesSection;