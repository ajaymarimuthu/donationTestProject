
import { z } from "zod";
 
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
 
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userDetails";
  

import { useDispatch } from "react-redux"


// step1: npm i zod react-hook-form @hookform/resolvers

const DonationForm = () => {
    const navigate=useNavigate();
    const dispatch = useDispatch();
 
    const schema = z.object({

        fullName: z.string().min(3).max(25),
        email: z.string().email(),

        idType: z.string().min(3).max(25),
        tax: z.string().min(3).max(15),
        recipientName: z.string(),

        postalCode: z.string().min(3).max(25),
        address: z.string().min(3).max(70),
        
        unitNumber: z.number(),
        remarks: z.string().min(3).max(75),
        donation: z.number(),

    }).refine((data) =>dispatch(addUser({data}))  , {
        message: "Passwords do not match",
        path: ["donation"],
      
    });

 
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) })


    const submitData = () => {
         navigate("/success")
 
    }
 

    return (
        <div className="">
 
             <form onSubmit={handleSubmit(submitData)}>
                <div className="flex gap-3 mb-4">
                    <div className="w-[492px] ">
                        <input name="username" {...register("fullName")} placeholder="Full Name" type="text" className="w-full py-2 px-4  border-2 bg-white border-[#D0D5DD] rounded-lg" />
                        {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}
                    </div>
                    <div className="w-[492px]  ">
                        <input name="email" {...register("email")} placeholder="Email Address" type="text" className="w-full py-2 px-4  border-2 bg-white border-[#D0D5DD] rounded-lg" />
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    </div>
                </div>

                 <div className="flex gap-3 mb-4 ">
                    <div className="w-[492px] flex gap-5 items-center  ">
                        <div className="w-[160px] ">
                            <div className="inline-block relative w-full ">
                                <select {...register("idType")} className="form-select block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-5 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300">
                                    <option>NRIC 1</option>
                                    <option>NRIC 2</option>
                                    <option>NRIC 3</option>
                                </select>
                                <div className="w-full  pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M7 7l3-3 3 3m0 6l-3 3-3-3"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="w-full  ">
                            <input {...register("tax")} className="w-full  py-2 px-4  border-2 bg-white border-[#D0D5DD] rounded-lg" type="text" placeholder="Tax Tecipient ID" />
                            {errors.tax && <span className="text-red-500">{errors.tax.message}</span>}
                        </div>
                    </div>


  
                    <div className="w-[492px]  ">
                        <input {...register("recipientName")} name="recipientName" placeholder="Tax Recipient full Name" type="text" className="w-full py-2 px-4  border-2 bg-white border-[#D0D5DD] rounded-lg" />
                        {errors.recipientName && <span className="text-red-500">{errors.recipientName.message}</span>}
                    </div>  

                </div>  

                <div className="flex gap-3 mb-4 ">
                    <div className="w-[492px] ">
                        <input {...register("postalCode")} name="postalCode" placeholder="Postal Code" type="text" className="w-full py-2 px-4  border-2 bg-white border-[#D0D5DD] rounded-lg" />
                        {errors.postalCode && <span className="text-red-500">{errors.postalCode.message}</span>}
                    </div>
                    <div className="w-[492px]  ">
                        <input {...register("address")} name="address" placeholder="Address" type="text" className="w-full py-2 px-4  border-2 bg-white border-[#D0D5DD] rounded-lg" />
                        {errors.address && <span className="text-red-500">{errors.address.message}</span>}
                    </div>
                </div>



                <div className="flex gap-3 mb-4">
                    <div className="w-[492px] ">
                        <input  {...register("unitNumber", { valueAsNumber: true })} name="unitNumber" placeholder="Unit Numbere" type="number" className="w-full py-2 px-4  border-2 bg-white border-[#D0D5DD] rounded-lg" />
                        {errors.unitNumber && <span className="text-red-500">{errors.unitNumber.message}</span>}
                    </div>
                    <div className="w-[492px]  ">
                        <input {...register("remarks")} name="remarks" placeholder="Remarks" type="text" className="w-full py-2 px-4  border-2 bg-white border-[#D0D5DD] rounded-lg" />
                        {errors.remarks && <span className="text-red-500">{errors.remarks.message}</span>}
                    </div>
                </div>  



                 <div className="">
                    <h2 className="font-bold mb-6 leading-[30px]">How much would you like to donate?</h2>
                    <div >
                        <div className=" max-w-[384px] mx-auto flex flex-col">
                            <input {...register("donation", {valueAsNumber:true }) } className="w-full py-2 px-4  border-2 bg-white border-[#D0D5DD] rounded-lg" type="number" name="donation" placeholder="Donation Amount" id="" />
                            {errors.donation && <span className="text-red-500">{errors.donation.message}</span>}


                            <div className="flex mt-4 gap-2">

                                <div className="w-full py-2 px-4  border-2 bg-white border-[#D0D5DD] rounded-lg">Credit Card</div>

                                <div className="w-full py-2 px-4  border-2 bg-white border-[#D0D5DD] rounded-lg">Pay Now</div>

                            </div>

                            <div className="flex gap-2  justify-center mt-2">
                                <input type="checkbox" name="" id="" />
                                <p className="items-center">I agree with the <span className="text-[#1188F7]">terms and conditions</span></p>
                            </div>  

                            <div className="mx-auto">
                                <button type="submit" className="py-2 px-6 mt-3 max-w-[159px] items-center bg-[#2E90FA] text-white text-[16px] font-[600] leading-[24px]  rounded-lg ">Donate</button>
                            </div>
                        </div>
                    </div>
                </div>

            </form>  


        

       




        </div>
    )
}

export default DonationForm