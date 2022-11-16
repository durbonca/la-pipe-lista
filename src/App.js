import { useState, useEffect } from "react";
import { addProduct, deleteProduct } from "./api/product";
import { db } from './firebase/firebase'
import { collection, onSnapshot } from "firebase/firestore";
import { InputProduct, Product } from "./components";

export const App = () => {

  const [productsList, setProductsList] = useState([]);
  const [product, setProduct] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const updateProductsList = async () => {
    onSnapshot(collection(db, "list"), (querySnapshot) => {
        const products = [];
        querySnapshot.forEach((doc) => {
          let { product } = doc.data();
          let id = doc.id;
          products.push({
            product,
            id,
          });
        });
        setProductsList(products)
      },
      (error) => console.error(error)
    );
  }

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