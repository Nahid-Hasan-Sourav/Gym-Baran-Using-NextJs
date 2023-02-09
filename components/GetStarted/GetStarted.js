import Image from "next/image";
import workOut from "../../Assets/Img/image 78.png";
import { AiOutlineArrowRight } from 'react-icons/ai';

const GetStarted = () => {
    return (
        <div className="my-24">
            <div className="grid md:grid-cols-2">
            <div className=" flex items-center justify-center sm:px-0 px-7">
            <Image src={workOut} alt="image" width="80%" height="80%" ></Image>
            </div>
            <div className="px-10 flex flex-col justify-center md:order-last order-first ">
                <h2 className="font-logoFont font-extrabold text-5xl">Best full body<br></br> workout to lose fat</h2>
                <p>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
                <div className="mt-6">
                    <button className="bg-[#264373] w-[246px] h-[52] text-white p-3 rounded-lg flex items-center justify-around">Get Started
                    <p><AiOutlineArrowRight /></p>
                    </button>
                    <button><span className="text-[16px] sm:ml-7 ml-3 mt-1"></span></button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default GetStarted;