

export default function Registration() {
   return(
      <div className="flex flex-col items-center gap-4 mt-5">
         <input type="text" name="name" id="name" placeholder="Name" className="border p-2 rounded-lg" />
         <input type="email" name="email" id="email" placeholder="Email" className="border p-2 rounded-lg" />
         <input type="text" name="password" id="password" placeholder="Password" className="border p-2 rounded-lg" />
         <input type="file" name="photo" id="photo"  className="border p-2 bg-blue-200 rounded-lg"/>
         <button className="px-10 py-3 bg-amber-400 rounded-2xl cursor-pointer hover:bg-amber-300">Registration</button>
      </div>
   )
}