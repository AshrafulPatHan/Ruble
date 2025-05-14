import Image from "next/image";


export default function ClintNav() {
   return(
      <div>
         <div className="flex flex-row items-center">
            <div className="flex flex-row items-center">
               <Image src="" alt="logo" />
               <p>Notes</p>
            </div>
            <div className="flex flex-row items-center">
               <p>ADD NOTES</p>
               <p>ADD CALENDAR</p>
               <p>CHATS</p>
               <p>TWITT</p>
            </div>
            <div className="flex flex-row items-center">
               <button>Logon</button>
               <button>Registration</button>
            </div>
         </div>
      </div>
   )
}