export const InputProduct = ( {
    product,
    setProduct,
    addProduct, 
    updateProductsList,
    isLoading,
    setIsLoading,
} ) => {

  const isDisabled = () => {
    return product === "" || isLoading;
  }

  return (
    <form className="fixed z-10 w-full flex py-4 px-2 mb-4 border-b-2 border-stone-900 bg-slate-200">
        <input
            className="border border-gray-300 rounded-md py-2 px-4 flex-1"
            type="text" 
            placeholder="Escribir producto"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
        />
        <button 
            className={
            isDisabled() ? 
                "bg-gray-300 rounded-full ml-4 p-4 text-white cursor-not-allowed" : 
                "bg-green-500 hover:bg-green-700 rounded-full mx-4 p-4 text-white" 
            }
            onClick={async () => {
                setIsLoading(true);
                await addProduct(product);
                await updateProductsList();
                setProduct("");
                setIsLoading(false);
                }
            }
            disabled={isDisabled()}
        >Agregar</button>
    </form>
  )
}