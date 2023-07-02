import { Link } from "react-router-dom"


const WriteMessage = () => {
   return (
     <div className="p-5">
       <div className="flex">
         <h1 className="font-bold text-red-400 text-xl">Write a Message</h1>
       </div>
       <div className="py-5">
         <form action="">
           <div className="space-y-2">
             <div className="border border-red-400 rounded-md">
               <input
                 type="text"
                 placeholder="To someone..."
                 className="w-full text-xs h-8 px-2"
               />
             </div>
             <div className="border border-red-400 h-40 rounded-md flex justify-center items-center">
               <input
                 type="text"
                 placeholder="Write message..."
                 className="rounded-md text-center text-sm h-full w-full"
               />
             </div>
           </div>
         </form>
       </div>
       <div className="space-y-2">
         <Link to="/">
           <div className="border border-red-400 rounded-md h-8 text-sm flex items-center justify-center">
             <button className="text-red-400">Cancel</button>
           </div>
         </Link>
         <div className="bg-red-400 rounded-md h-8 text-sm flex items-center justify-center">
           <button className="text-white">Submit</button>
         </div>
       </div>
     </div>
   );
}

export default WriteMessage