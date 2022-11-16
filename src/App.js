import { useState, useEffect } from "react";
import { addProduct, deleteProduct, getProducts } from "./api/product";
import { InputProduct, Product } from "./components";

export const App = () => {

  const [productsList, setProductsList] = useState([]);
  const [product, setProduct] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const updateProductsList = async () => {
    const products = await getProducts();
    setProductsList(products);
  };

  useEffect(() => {
    updateProductsList();
  }, []);

  return (
    <div className="absolute w-full">
      <InputProduct
       product={product}
       setProduct={setProduct}
       addProduct={addProduct}
       updateProductsList={updateProductsList}
       isLoading={isLoading}
       setIsLoading={setIsLoading}
      />
      <ul className="relative mt-28">
        { productsList && productsList.map((product) => <Product
            key={product.id}
            item={product} 
            deleteProduct={deleteProduct} 
            updateProductsList={updateProductsList}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            />
          )}
      </ul>
    </div>    
  );
}