'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

const TasteForm = () => {

    const router = useRouter();

    const handleClick = (e) => {
        router.push(`/dishes/${e.currentTarget.value}/`);
    }

    return (
        <div className="w-full">
            <div className="flex flex-col font-mono">
                {/* <div className="flex sm:max-lg:flex-col lg:flex-row items-center sm:max-lg:mb-5 sm:max-lg:gap-y-5 lg:gap-x-3"> */}
                <div className="flex flex-col lg:flex-row lg:justify-center items-center mb-5 gap-y-5 lg:gap-y-5 lg:gap-x-3">
                    <button type="button" id="garlicky" name="signature" value="garlicky"
                        className="btn w-3/4 lg:w-72 h-28 text-lg" onClick={handleClick}>
                        <span className="w-full flex justify-center items-center">
                            <Image
                                src="/garlicky.svg"
                                width={70}
                                height={70}
                                alt="garlicky"
                            />
                            <span className="w-1/2">
                                Garlicky
                            </span>
                        </span>
                    </button>
                    <button type="button" id="spicy" name="signature" value="spicy"
                        className="btn w-3/4 lg:w-72 h-28 text-lg" onClick={handleClick}>
                        <span className="w-full flex justify-center items-center">
                            <Image
                                src="/spicy.svg"
                                width={70}
                                height={70}
                                alt="spicy"
                            />
                            <span className="w-1/2">
                                Spicy
                            </span>
                        </span>
                    </button>
                    <button type="button" id="crunchy" name="signature" value="crunchy"
                        className="btn w-3/4 lg:w-72 h-28 text-lg" onClick={handleClick}>
                        <span className="w-full flex justify-center items-center">

                            <Image
                                src="/crunchy.jpeg"
                                width={70}
                                height={70}
                                alt="crunchy"
                            />
                            <span className="w-1/2">
                                Crunchy
                            </span>
                        </span>
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-center items-center mb-5 gap-y-5 lg:gap-x-3">
                    <button type="button" id="sweet" name="signature" value="sweet"
                        className="btn w-3/4 lg:w-72 h-28 text-lg" onClick={handleClick}>
                        <span className="w-full flex justify-center items-center">

                            <Image
                                src="/sweet.jpeg"
                                width={70}
                                height={70}
                                alt="sweet"
                            />
                            <span className="w-1/2">
                                Sweet
                            </span>
                        </span>
                    </button>
                    <button type="button" id="comforting" name="signature" value="comforting"
                        className="btn w-3/4 lg:w-72 h-28 text-lg" onClick={handleClick}>
                        <span className="w-full flex justify-center items-center">

                            <Image
                                src="/comforting.jpeg"
                                width={70}
                                height={70}
                                alt="comforting"
                            />
                            <span className="w-1/2">
                                Comforting
                            </span>
                        </span>
                    </button>
                    <button type="button" id="seafoody" name="signature" value="seafoody"
                        className="btn w-3/4 lg:w-72 h-28 text-lg" onClick={handleClick}>
                        <span className="w-full flex justify-center items-center">

                            <Image
                                src="/seafoody.jpeg"
                                width={70}
                                height={70}
                                alt="seafoody"
                            />
                            <span className="w-1/2">
                                Seafoody
                            </span>
                        </span>
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-center items-center mb-5 gap-y-5 lg:gap-x-3">
                    <button type="button" id="savory" name="signature" value="savory"
                        className="btn w-3/4 lg:w-72 h-28 text-lg" onClick={handleClick}>
                        <span className="w-full flex justify-center items-center">

                            <Image
                                src="/savory.jpeg"
                                width={70}
                                height={70}
                                alt="savory"
                            />
                            <span className="w-1/2">
                                Savory
                            </span>
                        </span>
                    </button>
                    <button type="button" id="beefy" name="signature" value="beefy"
                        className="btn w-3/4 lg:w-72 h-28 text-lg" onClick={handleClick}>
                        <span className="w-full flex justify-center items-center">

                            <Image
                                src="/beefy.jpeg"
                                width={70}
                                height={70}
                                alt="beefy"
                            />
                            <span className="w-1/2">
                                Beefy
                            </span>
                        </span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default TasteForm;