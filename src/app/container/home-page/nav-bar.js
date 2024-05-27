'use client'

import Image from "next/image"
import { useRouter } from "next/navigation";

const HomeNavBar = () => {

    const router = useRouter();

    return (
        <div className="navbar flex justify-center w-full lg:w-3/4 bg-primary space-x-5 p-3 rounded-lg">
            <div>
                <button className="btn btn-lg glass btn-square btn-ghost relative" 
                onClick={() => router.push("/")}>
                    <span className="">
                        <span className="text-2xl">&#129316;</span>
                    </span>
                </button>
            </div>
            <div>
                <h1 className="font-mono text-2xl font-bold"> What tingles your fancy today? </h1>
            </div>
        </div>
    )
}

export default HomeNavBar;