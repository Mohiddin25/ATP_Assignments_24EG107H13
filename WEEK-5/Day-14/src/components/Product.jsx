function Product(props){
    const {productObj}=props;
    // state 
  
    // return a react element
    return(
        <div className="shadow-2xl text-center p-2"> 
            <h1 className="text-2xl text-blue-400">{productObj.title}</h1>
            <p className="font-bold">{productObj.price}</p>
            <p className="font-bold">{productObj.description}</p>

        </div>
    )
}

export default Product
