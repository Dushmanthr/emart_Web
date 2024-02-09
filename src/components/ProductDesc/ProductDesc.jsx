import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import {Link} from "react-router-dom"
import Skeleton from 'react-loading-skeleton';
const ProductDesc = () => {

    const {id} = useParams();
    const [productDesc, setProductDesc] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProductDesc(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = ()=>{
        return(
            <>
            <div className="col-md-6">
                <Skeleton height={400}/>  
            </div>
            <div className="col-md-6">
            <Skeleton height={50} width={300}/>
            <Skeleton height={75} width={150}/>
            <Skeleton height={25} />
            </div>
            </>
            
        )
    }

    const ShowProduct = () => {
        return(
            <>
                <div className="col-md-6">
                    <img src={productDesc.image} alt="" height="400px" width="400px" className="mt-5"/>
                </div>

                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{productDesc.category}</h4>
                    <h1 className="display-5">{productDesc.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {productDesc.rating && productDesc.rating.rate}
                        <FaStar className='ps-1'/>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                       $ {productDesc.price}
                    </h3>

                    <p className='lead'>{productDesc.description}</p>
                    <button className="btn btn-outline-dark ">Add to Cart</button>
                    <Link to='/cart'><button className="btn btn-dark ms-2 px-3">Go to Cart</button></Link>
                </div>
            </>
        )
    }
  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
            {loading ? <Loading/> : <ShowProduct/>}
        </div>
      </div>
    </div>
  )
}

export default ProductDesc
