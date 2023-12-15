import React from 'react'

const Basket = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState("");
  console.log(product,"ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/products/get/1`);
        const data = await response.json();
        console.log(response,"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
        console.log(typeof data)
        setProduct(data);

      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [productID]);

  return (
    <div>
      
    </div>
  )
}

export default Basket
