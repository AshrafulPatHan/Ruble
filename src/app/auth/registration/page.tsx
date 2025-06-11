"use client"

export default function Registration() {

   const handelRegistration = (event:any):any => {
      event.preventDefault();

      // User data
      const name:string = event.target.name.value;
      const email:string = event.target.email.value;
      const password:string|number = event.target.password.value;
      let photo ;
      console.log(process.env.API_IMAGE_BB);
      console.log(name,email,password,photo);
      
   }
   return(
      <div className="flex flex-col items-center mt-5">
         <form onSubmit={handelRegistration}  
            className="flex flex-col items-center gap-4">
            <input type="text" name="name" id="name" placeholder="Name" required className="border p-2 rounded-lg" />
            <input type="email" name="email" id="email" placeholder="Email" required className="border p-2 rounded-lg" />
            <input type="text" name="password" id="password" placeholder="Password" required className="border p-2 rounded-lg" />
            <input type="file" name="photo" id="photo" required  className="border p-2 bg-blue-200 rounded-lg"/>
            <button type="submit" className="px-10 py-3 bg-amber-400 rounded-2xl cursor-pointer hover:bg-amber-300">Registration</button>
         </form>
      </div>
   )
}