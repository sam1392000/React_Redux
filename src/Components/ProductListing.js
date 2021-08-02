import React,{useEffect} from 'react'
import { getAllProducts } from '../apiCalls'
import {useDispatch} from 'react-redux'
import { setproduct } from '../redux/actions/product_action'
import Pro from "./ProductComponent"
const ProductListing = () => {
    const dispatch = useDispatch();
    useEffect(() =>{
        getAllProducts().then(data => {
            if(data){
                dispatch(setproduct(data));
            }
        })
    },[])
    return (
        <div className="ui grid container">
        <Pro />
      </div>
    )
}

export default ProductListing
