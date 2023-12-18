import axios from "axios"

const productDetails = (props)=>{
    console.log(props.data)
    function removeItem(){
        axios.delete(`http://localhost:5001/api/basket/remove/${props.data.products_productID}`).then(()=>{
            props.getItems()
        })
    }

    return(
        <span className="ml-2">
            <h2 className="  text-blue-600 ml-11">{props.data.productName}</h2>
         <img src={props.data.imageUrl} className=" h-52  w-40" alt="" />
         <p className="text-blue-600"> price  {props.data.price} $</p>
         <button onClick={removeItem} className=" text-white p-[1px] px-4 rounded-2xl  bg-continue">delete from basket</button>
        </span>
    )
}
export default productDetails;