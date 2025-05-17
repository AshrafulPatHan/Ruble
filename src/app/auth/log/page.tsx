

export default function Login(){
   return(
      <div className="flex flex-col items-center gap-4 mt-5">
         <input type="email" name="email" id="email" placeholder="Email" className="border p-2 rounded-lg" />
         <input type="text" name="password" id="password" placeholder="Password" className="border p-2 rounded-lg" />
         <button className="px-10 py-3 bg-amber-400 rounded-2xl cursor-pointer hover:bg-amber-300">Login</button>
      </div>
   )
}