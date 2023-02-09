import Image from "next/image";
import BannerIMg from "../../Assets/Img/Group 4227.png"
import vector from '../../Assets/Img/Vector.png'
import vectorOne from '../../Assets/Img/Vector _1.png'
import nike from'../../Assets/Img/nike.png'
import adidas from '../../Assets/Img/adidas.png'
import puma from '../../Assets/Img/puma-removebg-preview.png'
import reebok from '../../Assets/Img/reebok-removebg-preview.png'
const Banner = () => {
    return (
      <div className="container mx-auto ">
        <div className="grid md:grid-cols-2">
          <div className="">
            <div className="div md:w-[565px] w-full md:h-[80%] flex flex-col justify-center px-10">
              <div>
                <h2 className="md:text-7xl text-5xl font-logoFont">
                  Healthy in side fresh out side
                </h2>
                <p className="md:w-[492px] md:text-center">
                  Exercise is a very important need for our body. Health and
                  fitness will be obtained if you can do regular exercise and
                  run a healthy routine.
                </p>
              </div>
              <div className="flex justify-between mt-6">
                <button className="btn bg-[#264373] md:w-44 py-4 rounded-[10px] text-white font-Poppins flex justify-around h-100 items-center ">
                  Get started
                  <Image src={vector} alt="play img"></Image>
                </button>
                <button className="btn bg-white md:w-40 py-4 rounded-[10px]  font-Poppins flex justify-around h-100 items-center text-[#264373] drop-shadow-lg">
                  <Image src={vectorOne} alt="play img"></Image>
                  Learn more
                </button>
              </div>
            </div>
            <div className="ml-8 md:mt-0 mt-6">
                <p>Brands : </p>

                <div className="grid grid-cols-4">
                <div className="">
                    <Image src={nike} alt="img" width={60} height={34}></Image>
                </div>
                <div className="">
                    <Image src={adidas} alt="img" width={60} height={34}></Image>
                </div>
                <div className="">
                    <Image src={puma} alt="img" width={60} height={34}></Image>
                </div>
                <div className="">
                    <Image src={reebok} alt="img" width={60} height={34}></Image>
                </div>
                </div>
            </div>
          </div>

          <div className="md:pl-[50px] md:mt-0 mt-7">
            <Image
              src={BannerIMg}
              alt="image"
              width={584}
              height={580}
              className="cursor-pointer text-right block"
            ></Image>
          </div>
        </div>
      </div>
    );
};

export default Banner;