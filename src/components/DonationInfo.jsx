

import PropTypes from "prop-types"
import { useSelector } from "react-redux";
 

const DonationInfo = () => {
    const user = useSelector(store => store.donationUser.data)
 

    console.log(user);

    const date = new Date();

 

    return (
        <div className="  rounded-lg max-w-[800px]   mx-auto border-2 border-[#D0D5DD] p-4 mb-10">



            <div className="flex justify-between pb-5">
                <div>
                    <p className="text-[#667085]">Donation No</p>

                    <div className="flex">
                        <p className="font-bold text-[24px]">#1234-89095</p>

                        <div className="ml-2 rounded-3xl bg-[#D5FCD3] items-center flex justify-center px-2 ">
                            <p className="text-[11px] font-bold text-[#138E57]">RECEIVED</p>
                        </div>


                    </div>

                </div>

                <div>
                    <p className="text-[#667085]">Donation Date</p>
                    <p className="text-[24px] font-bold">{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</p>
                </div>
            </div>

            <hr />


            <div className="mt-5">
                <p className="font-bold text-[24px]">Donator Information</p>

                <div className=" flex gap-10">
                    <div className="flex flex-col">
                        <p className="text-[#667085]">Name</p>
                        <p className="text-[#667085]">Email</p>
                        <p className="text-[#667085]">PostalCode</p>
                        <p className="text-[#667085]">UnitNumber</p>
                        <p className="text-[#667085]">Address</p>
                        <p className="text-[#667085]">Remarks</p>

                    </div>

                    <div>
                        <p className="font-medium">{user.fullName } </p>
                        <p className="font-medium">{user.email}</p>
                        <p className="font-medium">{user.postalCode}</p>
                        <p className="font-medium">{user.unitNumber}</p>
                        <p className="font-medium">{user.address}</p>
                        <p className="font-medium">{user.remarks}</p>
                    </div>


                </div>

            </div>

            <div className="mt-5">
                <p className="font-bold text-[24px]">Tax Deduction Information</p>


                <div className="flex gap-4">

                    <div className="">
                        <p className="text-[#667085]">Tax Recipient FUll Name</p>
                        <p className="font-medium"> {user.recipientName}</p>
                    </div>

                    <div>
                        <p className="text-[#667085]">Tax Recipient ID No</p>
                        <p className="font-medium"> {user.idType}</p>
                    </div>

                </div>



            </div>







        </div>
    )
}


DonationInfo.propTypes = {

    formData: PropTypes.object

}


export default DonationInfo