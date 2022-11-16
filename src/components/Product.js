import React from 'react'

export const Product = ( {item, deleteProduct, updateProductsList, isLoading, setIsLoading} ) => {

  const { id, product } = item
  return (
    <li className="flex justify-between items-center px-2 py-4 border-b border-gray-300">
        <p className="text-2xl">
            {product}
        </p>
        <button 
            onClick={async () => {
                setIsLoading(true);
                await deleteProduct(id)
                updateProductsList();
                setIsLoading(false);
            }}
            className={ isLoading ?
            "bg-gray-300 rounded-full ml-4 p-4 text-white cursor-not-allowed":
            "bg-red-500 hover:bg-red-700 rounded-full ml-4 p-4 text-white"}
            disabled={isLoading}
        >
            Eliminar
        </button>
    </li>
  )
}