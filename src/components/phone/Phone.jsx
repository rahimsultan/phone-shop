import { Link } from "react-router-dom"


export function Phone({phone}) {
    const {brand_name, image, phone_name, price, rating, id} = phone
  return (
    <div className=" rounded-md border flex flex-col">
      <div className="mx-auto h-[200px]">
      <img
        src={image}
        alt={brand_name}
        className=" max-h-full rounded-md object-contain"
      />
      </div>
      <div className="p-4 flex flex-col  grow">
        <div className="grow ">
        <h1 className="text-lg font-semibold">{phone_name}</h1>
        <h3 className="font-bold">Price: ${price}</h3>
        <h4>Rating: {rating}</h4>
        <p className="mt-3 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        </div>
        <div >
        <Link to={`/phone/${id}`}>
        <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          More Details
        </button>
        </Link>
        </div>
      </div>
    </div>
  )
}
