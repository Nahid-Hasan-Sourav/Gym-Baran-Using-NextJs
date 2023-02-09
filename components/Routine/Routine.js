import Image from "next/image";
import iconOne from "../../Assets/Img/crucified-pose.png"
import iconTwo from "../../Assets/Img/dancer-pose.png"
import iconThree from "../../Assets/Img/dancer-motion.png"
import { AiOutlineArrowRight } from 'react-icons/ai';
const Routine = () => {
    return (
        <div className="px-4">
           <div className="container mx-auto  bg-gradient-to-b from-[#6462F0] to-[#8583e7] rounded-[10px] my-20">
            <div className="grid md:grid-cols-3 gap-6">
                <div className="flex p-10">
                    <div className="bg-[#C1C0F8] p-[30px] rounded-xl">
                        <Image src={iconOne} alt="..." width={38} height={40} className="text-white "></Image>
                    </div>
                    <div className="pl-7">
                        <h2 className="font-Poppins font-extrabold text-white md:text-xl text-lg">
                        Get that 11 line in 30 days
                        </h2>
                        <p className="flex items-center  text-[#FFFFFF] text-mute">Learn more 
                            <span className="text-[16px] sm:ml-7 ml-3 mt-1"><AiOutlineArrowRight /></span>
                        </p>
                    </div>
                </div>
                <div className="flex p-10">
                    <div className="bg-[#C1C0F8] p-[30px] rounded-xl">
                        <Image src={iconTwo} alt="..." width={38} height={40} className="text-white "></Image>
                    </div>
                    <div className="pl-7">
                        <h2 className="font-Poppins font-extrabold text-white md:text-xl text-lg">
                        14 Days sherd challenge
                        </h2>
                        <p className="flex items-center  text-[#FFFFFF] text-mute">Learn more 
                            <span className="text-[16px] sm:ml-7 ml-3 mt-1"><AiOutlineArrowRight /></span>
                        </p>
                    </div>
                </div>
                <div className="flex p-10">
                    <div className="bg-[#C1C0F8] p-[30px] rounded-xl">
                        <Image src={iconThree} alt="..." width={38} height={40} className="text-white "></Image>
                    </div>
                    <div className="pl-7">
                        <h2 className="font-Poppins font-extrabold text-white md:text-xl text-lg">
                        Get flat belly in 30 days
                        </h2>
                        <p className="flex items-center  text-[#FFFFFF] text-mute">Learn more 
                            <span className="text-[16px] sm:ml-7 ml-3 mt-1"><AiOutlineArrowRight /></span>
                        </p>
                    </div>
                </div>
               
            </div>
            </div> 
        </div>
    );
};

export default Routine;