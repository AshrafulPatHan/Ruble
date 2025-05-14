import Image from "next/image";


export default function Footer(){
   return(
      <div>
         <div className="flex flex-col items-center">
            <div className="flex flex-col ">
               <div className="flex flex-row items-center">
                  <Image src="" alt="logo" />
                  <p>Notes</p>
               </div>
               <div>
                  <p></p>
                  <p></p>
               </div>
            </div>
            <div className="flex flex-row ">
               <div className="flex flex-col ">
                  <h3></h3>
                  <p></p>
                  <p></p>
                  <p></p>
               </div>
               <div className="flex flex-col ">
                  <h3></h3>
                  <p></p>
                  <p></p>
                  <p></p>
               </div>
               <div className="flex flex-col ">
                  <h3></h3>
                  <p></p>
                  <p></p>
                  <p></p>
               </div>
            </div>
            <hr className="w-[80vw] " />
            <p></p>
         </div>
      </div>
   )
}