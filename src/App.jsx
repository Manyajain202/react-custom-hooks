import './App.css';
import useFetch from "./hooks/useFetch";


function App(){
  const { data,loading,error}= useFetch();

  if(loading) {
    return <h2>Loading products......</h2>;
  }
  if(error) {
    return <h2> Error: {error}</h2>;

  }
  if(!data|| data.length === 0) {
    return <h2>No products found.</h2>;

  }

  return ( 
    <div className="app">
      <h1>Our Products</h1>
          
          <div className="product-grid">
            
          {data.map((product)=> (
            <div className="product-card" key= {product.id}>

                {product.images?.[0] &&
                 !product.images[0].includes("placehold") && (
                   <img
                      src={product.images?.[0]}
                       alt={product.title}
                       className="product-image"
                       onError={(e) => {
                        e.currentTarget.style.display = "none";
                         }}
                      />
)}
                
                <h3>{product.title} </h3>
              <p className="price"> ${product.price}</p>
                  </div>
          ))}
    </div>
    </div>

  );
}

export default App;