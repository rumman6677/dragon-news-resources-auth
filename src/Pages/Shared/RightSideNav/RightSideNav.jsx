import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import qZone1 from '../../../assets/swimming.png';
import qZone2 from '../../../assets/class.png';
import qZone3 from '../../../assets/playground.png';

const RightSideNav = () => {
    return (

        <div>
            
        <div className="p-4 space-y-3  mb-6">
            <h2 className="font-bold text-3xl">Login With</h2>
            <button className="btn btn-outline w-full">
              <FcGoogle />
               Login with Google
            </button>
            <button className="btn btn-outline w-full">
            <AiFillGithub />
               Login with Github
            </button>
        </div>

        {/* find us */}
        <div className="p-4 mb-6">
            <h2 className="font-bold text-3xl">Find Us On</h2>
            <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
            <FaFacebook className="mr-3"></FaFacebook>
            <span>Facebook</span>
            </a>
            <a className="p-4 flex text-lg items-center border rounded-x" href="">
            <FaTwitter className="mr-3"></FaTwitter>
            <span>Twitter</span>
            </a>
            <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
            <BsInstagram className="mr-3"></BsInstagram>
            <span>Instagram</span>
            </a>
        </div>

        {/* Q zone*/}
        <div className="p-4 mb-6">
            <h2 className="font-bold text-3xl">Q Zone</h2>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
         
        </div>

        </div>

    );
};

export default RightSideNav;