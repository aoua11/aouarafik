import axios from "axios";
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { TiFlowParallel } from "react-icons/ti";
import AddToCart from "@/app/AddToCart";
import { addItem } from "@/lib/cartSlice";


export default async function Single({ params }) {
    const resp = await axios.get('http://localhost:8000/products/' + params.id);
    const product = resp.data;
    return (<>

        <div className="flex  my-10 p-20 items-center  ">
            <div className="px-10">
                <img src={`http://localhost:8000/${product.image}`} className=" w-[600px] rounded-2xl" />
            </div>
            <div>
                <h1 className="font-black text-5xl pb-7">{product.title}</h1>
                <p className="text-sm font-light w-1/2">{product.description}</p>
                <div>
                    <h3 className="px-10 text-xs border rounded-2xl flex items-center py-2 my-4 w-fit"><TiFlowParallel className=" text-lg mr-3 " />{product.category}</h3>
                </div>
                <div>
                    <Stack spacing={1}>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    </Stack>
                </div>
                <div>
                    <h5 className="text-[#EC4B9A] font-bold text-4xl py-3">{product.price}$</h5>
                </div>
                <div className="flex gap-4 py-6">
                    <button className="bg-[#EC4B9A] px-12 py-3 text-white text-sm rounded-3xl">Buy Now</button>
                    <AddToCart product= {product}/>
                </div>
            </div>
        </div>




    </>)
}