

export default function Services(){
   return(
      <div className="mt-20 flex flex-row justify-center  ">
         <div className="flex flex-row gap-4 items-center bg-blue-400 py-4 px-[20vw] rounded-[8px]  ">
            <div className="bg-blue-300 p-4 rounded-[8px] ">
               <p className="text-xl font-medium">Notes</p>
            </div>
            <div className="bg-blue-300 p-4 rounded-[8px] ">
               <p className="text-xl font-medium">Calendar</p>
            </div>
            <div className="bg-blue-300 p-4 rounded-[8px] ">
               <p className="text-xl font-medium">Chates</p>
            </div>
            <div className="bg-blue-300 p-4 rounded-[8px] ">
               <p className="text-xl font-medium">Twitt</p>
            </div>
         </div>
      </div>
   )
}