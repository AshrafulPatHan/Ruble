import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function EasyLogin() {
   return(
   <>
   <h2 className="text-center mt-20 font-bold text-3xl ">Easy Login</h2>
      <div className="mt-5 flex  justify-center  ">
         <div className="flex flex-row gap-4 items-center bg-blue-400 py-4 px-[10vw] rounded-[8px]  ">
            <div className="bg-blue-300 p-4 rounded-[8px] ">
               <p className="text-xl font-medium flex items-center gap-2">
                  <FaGoogle className="text-blue-800" /> Google
               </p>
            </div>
            <div className="bg-blue-300 p-4 rounded-[8px] ">
               <p className="text-xl font-medium flex items-center gap-2">
                  <FaFacebook className="text-blue-800"/> Facebook
               </p>
            </div>
            <div className="bg-blue-300 p-4 rounded-[8px] ">
               <p className="text-xl font-medium flex items-center gap-2">
                  <FaGithub className="text-blue-800" /> Git Hub
               </p>
            </div>
         </div>
      </div>
   </>
   )
}