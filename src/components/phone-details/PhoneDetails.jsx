import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Details } from "../details/Details";

const PhoneDetails = () => {
    const mobilePhones = useLoaderData();
    const {id} = useParams()
    const [mobile, setMobile] = useState([])

    useEffect(()=>{
        const phone = mobilePhones.find((ph)=>{
            return ph.id === id
        });
        setMobile(phone)
    },[mobilePhones])


   
  return (
    <div>
        <Details mobile={mobile}/>
    </div>
  )
}

export default PhoneDetails