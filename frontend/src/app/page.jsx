"use client"
import { FaAngleRight } from "react-icons/fa";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from "next/link";
import { useState , useEffect } from "react";
import axios from "axios";
import AddToCart from "./AddToCart";



export default function Landingpage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/products')
            .then((resp) => {
                setProducts(resp.data)
            })
    }, [])
    return (
        <>
            <div className="px-5 text-center lg:text-start lg:px-32 py-20 bg-[#faf9f9] rounded-b-3xl">
                <div className="lg:flex justify-between items-center">
                    <div>
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-black py-7">
                                Discover  Unique <br /> Digital Product In <br />  Our marketplace
                            </h1>
                            <p className="lg:text-sm font-light pb-6">We stand for digital experiences with a wow effect, <br /> Because for us that's the only thing that makes  <br />Lorem ipsum dolor sit, amet consectetur  elit. .</p>
                        </div>
                        <div className="flex gap-5 justify-center my-10 lg:gap-0 lg:my-0 lg:flex">
                            <button className="bg-[#EC4B9A] rounded-2xl px-10 py-1 flex items-center text-white lg:mr-3">
                                Explore
                                <FaAngleRight className="text-white ml-1" />
                            </button>
                            <Link href="/contact"><button className="border-2 rounded-2xl px-10 py-1 ">Contact</button></Link>
                        </div>
                    </div>
                    <div>
                        <img src="/bg.jpg" className="w-[600px] rounded-3xl" />
                    </div>
                </div>
            </div>
            <div>
                <div className="px-5 lg:px-0 pt-20">
                    <h1 className="text-4xl font-black text-center">
                        Explore In Our Market
                    </h1>
                    <p className="text-xs font-light text-center py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur molestias.</p>
                </div>
                <div className="flex justify-center items-center pt-3">
                    <h3 className="text-white font-light text-sm bg-[#EC4B9A] w-fit px-10 py-2 rounded-2xl">All category</h3>
                </div>
            </div>
            {/* /*----------- seconde part --------*/}

            <div className="lg:grid lg:grid-rows-1 lg:grid-cols-4 gap-10 px-20 lg:px-32 py-10">
                {
                    products.map((product) => {
                        return (
                            <div key={product._id}>
                                <div className="w-72 hover:scale-105 transition-all ease-in duration-300 rounded-3xl mb-5 hover:cursor-pointer ">

                                    <Card sx={{ maxWidth: 300, borderRadius: "20px" }}>
                                        <Link href={`/products/${product._id}`}>
                                            <CardMedia
                                                sx={{ height: 300 }}
                                                image={`http://localhost:8000/${product.image}`}
                                            />
                                        </Link>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" className="text-lg font-semibold">
                                                {product.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <div className="h-28">{product.description}
                                                </div>
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            {/* <div className="text-white bg-[#EC4B9A] px-2 rounded-2xl font-semiebold text-md ">
                                            </div> */}
                                            <div>
                                            <AddToCart/>
                                            </div>
                                            
                                            {/* <button onClick={() => deleteproduct(product._id)} className="text-[#709dd3] px-4 pb-1">delete</button> */}
                                            <div className="px-5">
                                            <h1 className="text-xl text-pink-500 font-black py-1">{product.price}$</h1>
                                            </div>
                                        </CardActions>
                                    </Card>


                                </div>
                            </div>
                        )

                    })
                }
            </div>
            <div className="flex justify-center">
                <Link href="/products"><button className="text-white font-light text-sm bg-[#EC4B9A] w-fit px-14 py-2 rounded-3xl">Product</button></Link>
                <Link href="/login"><button className="text-[#EC4B9A] font-light text-sm border-2 ml-3 w-fit px-14 py-2 rounded-3xl">LOGIN</button></Link>

            </div>
        </>
    )
}