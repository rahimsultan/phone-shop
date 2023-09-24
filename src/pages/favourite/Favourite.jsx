import { useEffect, useState } from "react";
import { Phone } from "../../components/phone/Phone";
import { getSavedPhones } from "../../utility/localstorage";

const Favourite = () => {
    const [phones, setPhones] = useState([])
    const [isShow, setIsShow] = useState(false)

    useEffect(()=>{
        const savedPhones = getSavedPhones();
        setPhones(savedPhones)   
    },[])

    const handleClear=()=>{
        localStorage.clear()
        setPhones([])
    }

    const price = phones.reduce((p, n)=> p + n.price ,0).toFixed(2)
    // console.log(price);


  return (
    <>
    {
        phones.length > 0 ?
    
    <div className="max-w-7xl mx-auto lg:px-8 my-10">
        <div className="text-center my-5">
        <button
        onClick={handleClear}
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Clear All
          </button>
          <h4 className="font-bold my-4">Total Price: ${price}</h4>
        </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-5 ">
        {
            isShow ? phones.map(phone=> <Phone key={phone.id} phone={phone}/>) :
            phones.slice(0,4).map(phone=> <Phone key={phone.id} phone={phone}/>)
            
        }
    </div>
    <div className="text-center my-5">
        {
            phones.length > 4 && <button onClick={()=>setIsShow(!isShow)}
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {
                isShow ?  "Show Less" : 'Show All'
            }
          </button>
        }
    </div>
    </div>
    : <div className="flex justify-center items-center h-screen"><h3 className="font-bold">No Data Found</h3></div>
    }
    </>
  )
}

export default Favourite