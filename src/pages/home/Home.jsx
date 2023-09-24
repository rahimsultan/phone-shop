import { useLoaderData } from "react-router-dom";
import { Phone } from "../../components/phone/Phone";


const Home = () => {
    const phones = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto lg:px-8 my-10">
        <div className="h-[55vh] bg-green-100 rounded-md -mt-5 flex justify-center items-center">
            <h4 className="font-bold">Banner Goes to Here</h4>
        </div>
            <h2 className="text-2xl font-bold text-center my-5">Latest Phones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-16">
            {
                phones.map(phone => <Phone key={phone.id} phone={phone}/>)
            }
        </div>

    </div>
  )
}

export default Home