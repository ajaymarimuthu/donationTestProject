
import DonationImgCards from "./DonationImgCards"
import StartHelping from "./startHelping"

const Header = () => {
    return (
        <div className="bg-[#1570EF] pb-5">
     
                <div className="bg-blue flex justify-between max-w-[1216px] mx-auto pt-5 mb-16 ">


                    <ul className="flex">
                        <li className="text-white text-[16px] leading-[24px] font-medium mr-5 hover:text-black">Logoipsum</li>
                        <li className="text-white text-[16px] leading-[24px] font-medium mr-5 hover:text-black">Home</li>
                        <li className="text-white text-[16px] leading-[24px] font-medium mr-5 hover:text-black">Start Helping</li>
                        <li className="text-white text-[16px] leading-[24px] font-medium mr-5 hover:text-black">About Us</li>
                    </ul>


                    <button className="bg-[#EAAA08] text-white text-[16px] font-[600] leading-[24px] px-3 py-2 rounded-lg ">Contact Us</button>

 
                </div>

      

            <StartHelping/>

            <DonationImgCards/>

            
        </div>




    )
}

export default Header