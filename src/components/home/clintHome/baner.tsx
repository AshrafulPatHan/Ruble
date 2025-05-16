import Image from "next/image";
import Notes from "@/assets/image/kit-formerly-convertkit-RvPiAVE-zWo-unsplash.jpg";


export default function Baner(){
   return(
      <div>
         <div className="flex flex-row justify-center mt-20 gap-4 ">
            <div>
               <h1>Add Your Notes</h1>
               <p>Notes a Free and opensuse web app for add your notes and clanger</p>
               <button className="bg-blue-200 p-5 rounded-[8px] cursor-pointer ">
                  TRY ANONYMOUSLY
               </button>
            </div>
            <div>
               <Image src={Notes} alt="image" className="w-[500px] rounded-[8px] "/>
            </div>
         </div>
      </div>
   )
}