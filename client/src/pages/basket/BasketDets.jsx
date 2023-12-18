import axios from "axios"

const productDetails = (props)=>{
    function removeItem(){
        axios.delete(`http://localhost:5001/api/basket/remove/${props.data.products_productID}`).then(()=>{
            props.getItems()
        })
    }

    return(
        <div className="justify-between mb-6 rounded-lg bg-white bg-opacity-10 p-6 shadow-md sm:flex sm:justify-start">
        <img src={props.data.imageUrl} alt="product-image" className="w-full rounded-lg sm:w-40" />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-white">{props.data.name}</h2>
            <p className="mt-1 text-xs text-gray-400">{props.data.details}</p>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100">
              <span className="cursor-pointer rounded-l bg-gray-100 bg-opacity-20 py-1 px-3.5 duration-100 hover:bg-violet-500 hover:text-blue-50">
                {' '}
                -{' '}
              </span>
              <input
                className="h-8 w-8 border bg-white bg-opacity-20 text-center text-xs outline-none"
                type="number"
                value={1}
                min="1"
              />
              <span className="cursor-pointer rounded-r bg-gray-100 bg-opacity-20 py-1 px-3 duration-100 hover:bg-violet-500 hover:text-blue-50">
                {' '}
                +{' '}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-sm text-white">{props.data.price}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 cursor-pointer text-white duration-150 hover:text-red-500"
                onClick={removeItem}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
}
export default productDetails;