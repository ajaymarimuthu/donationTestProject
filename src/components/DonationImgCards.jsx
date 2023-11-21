import img from "../assets/one.png"

const DonationImgCards = () => {
    return (


        <div className="sm:flex flex-wrap max-w-[1216px] mx-auto flex gap-16 my-16  ">

            <div className="flex gap-4 shadow-lg rounded-lg p-4  bg-blue-400  max-w-[350px] transition duration-500 ease-in-out  transform  hover:scale-110 hover:w-1/2" >


                <p className="text-white font-medium">Donation</p>

                <div className="flex flex-col w-[250px] " >
                    <img src={img} className="w-full h-full " />
                </div>

            </div>


            <div className="flex gap-4 shadow-lg rounded-lg p-4   bg-blue-400  max-w-[350px] transition duration-500 ease-in-out  transform  hover:scale-110 hover:w-1/2" >


                <p className="text-white font-medium">Donation</p>

                <div className="flex flex-col w-[250px] " >
                    <img src={img} className="w-full h-full " />
                </div>

            </div>


            <div className="flex gap-4 shadow-lg rounded-lg p-4   bg-blue-400   max-w-[350px] transition duration-500 ease-in-out  transform  hover:scale-110 hover:w-1/2" >

           <p className="text-white font-medium">Donation</p>

                <div className="flex flex-col w-[250px] " >
                    <img src={img} className="w-full h-full " />
                </div>

            </div>




        </div>





    )
}

export default DonationImgCards