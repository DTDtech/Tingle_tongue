'use client'

import { useEffect, useState } from "react"
import Script from "next/script";

const DishesSection = ({ dishes }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex === dishes.length - 1) {
            setCurrentIndex(0);
        }
        else {
            setCurrentIndex(currentIndex + 1);
        }
        console.log(dishes[currentIndex].video_id)
    }

    const handlePrevious = () => {
        if (currentIndex === 0) {
            setCurrentIndex(dishes.length - 1);
        }
        else {
            setCurrentIndex(currentIndex - 1);
        }
        console.log(dishes[currentIndex].video_id)
    }

    return (
        <div className="flex flex-row items-center w-full h-full px-8" >
            <div className="flex justify-start w-1/5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="size-6 text-black" onClick={handlePrevious}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </div>

            <div key={currentIndex} className="w-3/5 flex flex-col h-full space-y-5">
                <div className="flex justify-center w-full h-full">
                    <lite-youtube videoid={dishes[currentIndex].video_id} js-api></lite-youtube>
                    {/* <button onClick={adjustVolume} className="">Adjust Volume</button> */}
                </div>
                <div>
                    <div
                        key={currentIndex}
                        className="card w-full bg-base-100 shadow-xl text-black"
                    >
                        <div className="card-body">
                            <div className="flex justify-center">
                                <h1 className="card-title"> {dishes[currentIndex].name} </h1>
                            </div>
                            <h2 className="font-medium text-lg"> Ingredients: </h2>
                            <ul className="list-disc text-black space-y-5"></ul>
                            {dishes[currentIndex].ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                            <ul />
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex justify-end w-1/5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="size-6 text-black" onClick={handleNext}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
            <Script src="/scripts/lite-yt-embed.js" />

        </div>
    )
}

export default DishesSection;