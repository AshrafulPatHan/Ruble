

export default function AnonymousLogon(){
   return(
      <div>
         <h2 className="text-center mt-20 font-bold text-3xl ">Login Anonymously </h2>
         <div className="flex flex-row items-center justify-center gap-3 mt-5">
            <div className="flex flex-col justify-between w-[300px] h-[400px] text-center rounded-[8px] bg-blue-300 p-4  ">
               <p>Try for one time</p>
               <button className="bg-amber-300 p-2 rounded-[8px] cursor-pointer ">Anonymous Login</button>
            </div>
            <div className="flex flex-col justify-between w-[300px] h-[400px] text-center rounded-[8px] bg-blue-300 p-4  ">
               <p>Try for Day for free</p>
               <button className="bg-amber-300 p-2 rounded-[8px] cursor-pointer ">Anonymous Login</button>
            </div>
            <div className="flex flex-col justify-between w-[300px] h-[400px] text-center rounded-[8px] bg-blue-300 p-4  ">
               <p>Try for 1 Year for 20 tk</p>
               <button className="bg-amber-300 p-2 rounded-[8px] cursor-pointer ">Anonymous Login</button>
            </div>
         </div>
      </div>
   )
}