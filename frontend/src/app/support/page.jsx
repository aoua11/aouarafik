import { FaMessage } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";
import { Gi3dStairs } from "react-icons/gi";
import { AiFillAlert } from "react-icons/ai";


export default function Support() {
    return (
        <>
            <div className="h-screen">
                <div className="flex  sm:items-center sm:justify-center flex-col mt-32">
                    <h1 className="font-black sm:text-3xl py-3 text-center">Help when you need it</h1>
                    <p className="text-center sm:text-lg">We’re committed to helping our 20k sellers thrive, <br/> with support and education for shops big and small.</p>
                </div>
                <div className=" sm:flex sm:items-center sm:justify-center sm:mx-72 mt-10">
                    <div className="sm:px-5">
                        <div className="flex my-10">
                            <div className="border-2 border-black max-w-fit rounded-full">
                                <FaMessage className="hidden md:flex sm:size-16 sm:mx-5 sm:my-5 text-[#EC4B9A]" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="font-bold sm:text-2xl px-5">Talk to us</h1>
                                <p className="font-light sm:text-base px-5 sm:w-96">
                                    Talk to us
                                    Reach our support staff by email or request a phone call whenever you have a question.</p>
                            </div>
                        </div>
                        <div className="flex ">
                            <div className="border-2 border-black max-w-fit rounded-full">
                                <AiFillAlert className="hidden md:flex sm:size-16 sm:mx-5 sm:my-5 text-[#EC4B9A]"/> 
                            </div>
                            <div className="flex flex-col">
                                <h1 className="font-bold sm:text-2xl px-5">	
                                Seller newsletter</h1>
                                <p className="font-light sm:text-base px-5 sm:w-96">
                                Read the Etsy Success newsletter for tips on improving your shop, delivered straight to your inbox.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex my-10">
                            <div className="border-2 border-black max-w-fit rounded-full">
                                <Gi3dStairs className="hidden md:flex sm:size-16 sm:mx-5 sm:my-5 text-[#EC4B9A]"/> 
                            </div>
                            <div className="flex flex-col">
                                <h1 className="font-bold sm:text-2xl px-5">	
                                Tips for success</h1>
                                <p className="font-light sm:text-base px-5 sm:w-96">
                                Learn best practices for your business with our always-updating Seller Handbook.</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="border-2 border-black max-w-fit rounded-full">
                                <FaLightbulb className="hidden md:flex sm:size-16 sm:mx-5 sm:my-5 text-[#EC4B9A]"/>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="font-bold sm:text-2xl px-5">	
                                Get advice</h1>
                                <p className="font-light sm:text-base px-5 sm:w-96">
                                Ask questions and find a community of sellers like you in Etsy’s forums and Teams.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}