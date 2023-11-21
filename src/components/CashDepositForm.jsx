
import PropTypes from 'prop-types';

import {z} from "zod";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"


const CashDepositForm = (props) => {
    // console.log(props.submitFunciton);


    const schema=z.object({     
        donation:z.number(),
    })
    .refine((data)=>console.log(data),{
        message:"EMail is valid",
        path:["confirm"],
    })

    const {register,formState:errors} =useForm({resolver:zodResolver(schema)})



    return (
        <div className="">
            <h2 className="font-bold mb-6 leading-[30px]">How much would you like to donate?</h2>

            <form onSubmit={props.handleSubmit(props.submitFunction)}>

                <div className=" max-w-[384px] mx-auto flex flex-col">
                    <input  {...register("donation")}className="w-full py-2 px-4  border-2 bg-white border-[#D0D5DD] rounded-lg" type="number" name="donationAmount" placeholder="Donation Amount" id="" />
                    {errors.donation && <span>{errors.donation.message}</span>}

                    <div className="flex mt-4 gap-2">

                        <div className="w-full py-2 px-4  border-2 bg-white border-[#D0D5DD] rounded-lg">Credit Card</div>

                        <div className="w-full py-2 px-4  border-2 bg-white border-[#D0D5DD] rounded-lg">Pay Now</div>

                    </div>

                    <div className="flex gap-2  justify-center mt-2">
                        <input type="checkbox" name="" id="" />
                        <p className="items-center">I agree with the <span className="text-[#1188F7]">terms and conditions</span></p>
                    </div>

                    <div className="mx-auto">
                        <button className="py-2 px-6 mt-3 max-w-[159px] items-center bg-[#2E90FA] text-white text-[16px] font-[600] leading-[24px]  rounded-lg ">Donate</button>
                    </div>
                </div>

            </form>


        </div>

    )
}

CashDepositForm.propTypes={
    handleSubmit:PropTypes.func.isRequired,
    submitFunction:PropTypes.func.isRequired,
}

export default CashDepositForm