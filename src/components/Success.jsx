

import PropTypes from "prop-types"
import ThanksCard from "./ThanksCard";

import Navbar from "./Navbar";

const Success = ({ formData }) => {

    console.log(formData);
    return (
        <div >

            <div className="bg-[#1570EF]">
                <Navbar />
            </div>



            <ThanksCard />

  
        </div>
    )
}


Success.propTypes = {

    formData: PropTypes.object

}

export default Success