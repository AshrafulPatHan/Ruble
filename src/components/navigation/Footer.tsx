import Image from "next/image";
import logo from "@/assets/image/logo.svg";


export default function Footer(){
   return(
      <div>
         <div className="flex flex-col items-center gap-4 mt-20 bg-cyan-400 pt-7 ">
            <div className="flex flex-row items-start justify-between gap-[60vw] ">
               <div className="flex flex-col  ">
                  <div className="flex flex-row items-center gap-2">
                     <Image src={logo} alt="logo" width={30} />
                     <p>Notes</p>
                  </div>
                  <div>
                     <p>lorem1</p>
                     <p>lorem2</p>
                  </div>
               </div>
               <div className="flex flex-row gap-6 ">
                  <div className="flex flex-col ">
                     <h3>lorem3</h3>
                     <p>lorem4</p>
                     <p>lorem5</p>
                     <p>lorem6</p>
                  </div>
                  <div className="flex flex-col ">
                     <h3>lorem7</h3>
                     <p>lorem8</p>
                     <p>lorem9</p>
                     <p>lorem10</p>
                  </div>
                  <div className="flex flex-col ">
                     <h3>lorem11</h3>
                     <p>lorem12</p>
                     <p>lorem13</p>
                     <p>lorem14</p>
                  </div>
               </div>
            </div>
            <hr className="w-[80vw] " />
            <p>lorem</p>
         </div>
      </div>
   )
}