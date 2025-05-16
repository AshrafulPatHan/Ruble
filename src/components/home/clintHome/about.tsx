import Image from "next/image";
import Notes from "@/assets/image/office-620817_1920.jpg";


export default function About() {
   return(
      <div>
         <h2 className="text-center mt-20 font-bold text-3xl ">About The Website</h2>
         <div className="flex flex-row justify-center gap-7 mt-4 ">
            <div>
               <Image src={Notes} alt="image" className="w-[500px] rounded-[8px] " />
            </div>
            <div>
               <h3>Notes</h3>
               <p> Notes is a Website there you can tack your notes</p>
               <button className="bg-blue-200 p-5 rounded-[8px] cursor-pointer ">
                  TRY ANONYMOUSLY
               </button>
            </div>
         </div>
      </div>
   )
}