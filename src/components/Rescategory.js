import Accbody from "./Accbody";
import { useState } from "react";

const Rescategory=({rescat})=>{
    console.log(rescat);
    const [open,setOpen]=useState(false);
    return(
      <div className="my-6">
      {/* Category header */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center cursor-pointer hover:bg-gray-200 transition" onClick={()=>setOpen(!open)}>
        <h2 className="text-lg font-semibold">{`${rescat?.title} (${rescat?.itemCards?.length})`}</h2>
        <span className="text-xl text-gray-600 transform transition-transform duration-200">
    &darr;
  </span>
      </div>

      {/* Category items */}
      {open &&
      <div className="mt-4 space-y-4">
        {rescat?.itemCards?.map((i) => (
          <Accbody key={i.card.info.id} accdata={i.card.info} />
        ))}
      </div>
}
    </div>
      
    )
}
export default Rescategory;