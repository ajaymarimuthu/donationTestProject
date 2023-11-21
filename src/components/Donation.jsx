
import DonateCards from "./DonateCards"
import DonationForm from "./DonationForm"


const Donation = () => {
    return (
        <div>

            <div className="max-w-[1216px] mx-auto">
                <p className="text-[#2E90FA] font-medium leading-[24px]"  >Donation</p>

                <h2 className="text-2xl font-bold leading-[44px] ">Giving back to the community</h2>

                <p className="text-[12px] text-[#667085]">Giving money, goods, or resources to support causes, organizations, or</p>
                <p className="text-[12px] text-[#667085]"> individuals in need.</p>
            </div>

            <div className="bg-[#F9FAFB] max-w-[1216px] mx-auto border-2 border-black px-[104px] py-[32px]  ">


                <div className="my-8 sm:flex-col md:flex-col md:justify-center md:align-middle md:items-center ">

                    <h2 className="font-bold mb-6 leading-[30px]">Let us know about you</h2>

                    <DonateCards />

                </div>


                <div>
                    <h2 className="font-bold mb-6 leading-[30px]">Let’s complete your information details</h2>

                    <div className="flex p-6 gap-1 ">
                        <input className="h-4 w-4" type="checkbox" id="individual" />

                        <div className="flex flex-col">
                            <p className="text-[#344054] font-medium text-[16px]">I wish to have tax deduction</p>
                            <p className="text-[#667085] text-[16px]"> You are entitled to a tax-deduction of 2.5 times of your donation amount </p>
                        </div>

                    </div>

                    <DonationForm />

                </div>


            </div>


        </div>
    )
}

export default Donation


// border-2 border-red-600