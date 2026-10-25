import { useState, useEffect} from "react";

function useFetch(){
    const [data,setData] =useState (null);
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState(null);

    useEffect(() => {

        async function  fetchProducts(){
            try{
                const response= await fetch(

                    'https://api.escuelajs.co/api/v1/products'
                );
                 if (!response.ok) {
                    throw new Error('Failed to fetch products');

                 }

                 const products= await response.json();
                 setData(products);
                } catch(err){
                    setError(err.message);

                
            }finally {
                setLoading(false);

            }
        }
        fetchProducts();

    },[]);
      return{data, loading , error};
}
export default useFetch;