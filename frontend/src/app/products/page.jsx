'use client'
import axios from "axios";
import { SiAffinitydesigner } from "react-icons/si";
import { GrCloudSoftware } from "react-icons/gr";
import { FaBook } from "react-icons/fa6";
import { AiOutlineAudio } from "react-icons/ai";
import { SiVirginmedia } from "react-icons/si";
import { FaAffiliatetheme } from "react-icons/fa";
import { GiVrHeadset } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import { TiFlowParallel } from "react-icons/ti";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IoMdCreate } from "react-icons/io";
import * as React from 'react';
import Link from "next/link";
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Create from "../Create";
import AddToCart from "../AddToCart";




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: "30px",
    p: 4,

};





export default function Product() {
    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        axios.get('http://localhost:8000/products')
            .then((resp) => {
                setProducts(resp.data)
            })
    }, [])


    const deleteproduct = async (id) => {
        await axios.delete(`http://localhost:8000/products/${id}`, { headers: { Authorization: `bearer ${localStorage.getItem("token")}` } });
        const newProducts = [...products];
        setProducts(newProducts.filter(product => product._id != id));
    }

    return (
        <>

            <div className="bg-[#EC4B9A] rounded-full fixed right-5 bottom-5 z-50 opacity-85 hover:cursor-pointer hover:opacity-100">
                <div>

                    <div>
                        <div className="bg-[#EC4B9A]  rounded-full fixed right-5 bottom-5 z-50 opacity-85 hover:cursor-pointer hover:opacity-100">
                            <IoMdCreate onClick={handleOpen} className="size-14 text-center text-white p-4" />
                        </div>
                        <div>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">

                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        <Create />
                                    </Typography>
                                </Box>
                            </Modal>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex justify-center ">
                <div>
                    <div className="hidden lg:flex py-4">
                        <a href="" className="px-2 text-xs border rounded-2xl flex items-center py-2 mx-2 hover:bg-[#EC4B9A] hover:text-white"> <TiFlowParallel className=" text-lg mr-3 " /> All</a>
                        <a href="" className="px-2 text-xs border rounded-2xl flex items-center py-2 mx-2 hover:bg-[#EC4B9A] hover:text-white"> <SiAffinitydesigner className=" text-lg mr-3 " />Design</a>
                        <a href="" className="px-2 text-xs border rounded-2xl flex items-center py-2 mx-2 hover:bg-[#EC4B9A] hover:text-white"> <GrCloudSoftware className=" text-lg mr-3 " /> Software & Applications</a>
                        <a href="" className="px-2 text-xs border rounded-2xl flex items-center py-2 mx-2 hover:bg-[#EC4B9A] hover:text-white"> <FaBook className=" text-lg mr-3 " /> E-Books</a>
                        <a href="" className="px-2 text-xs border rounded-2xl flex items-center py-2 mx-2 hover:bg-[#EC4B9A] hover:text-white"> <AiOutlineAudio className=" text-lg mr-3 " /> Audiobooks</a>
                        <a href="" className="px-2 text-xs border rounded-2xl flex items-center py-2 mx-2 hover:bg-[#EC4B9A] hover:text-white">  <SiVirginmedia className=" text-lg mr-3 " /> Digital Media</a>
                        <a href="" className="px-2 text-xs border rounded-2xl flex items-center py-2 mx-2 hover:bg-[#EC4B9A] hover:text-white"> <FaAffiliatetheme className=" text-lg mr-3 " /> Templates & Themes</a>
                        <a href="" className="px-2 text-xs border rounded-2xl flex items-center py-2 mx-2 hover:bg-[#EC4B9A] hover:text-white">  <GiVrHeadset className=" text-lg mr-3 " /> Digital Marketing</a>
                        <a href="" className="px-2 text-xs border rounded-2xl flex items-center py-2 mx-2 hover:bg-[#EC4B9A] hover:text-white"><FaReact className=" text-lg mr-3 " /> WeDevelopment</a>
                    </div>
                </div>
            </div>

            {/* /----------------- maping --------------/ */}
            {/* <div className="grid grid-rows-2 grid-cols-3">
                {
                    products.map((product) => {
                        return (
                            <div key={product._id}>

                                <div className="mx-32 my-10">
                                    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <Link href={`/products/${product._id}`}>
                                                <img class="p-8 rounded-t-lg" src={`http://localhost:8000/${product.image}`} alt="product image" />
                                            </Link>
                                        </a>
                                        <div class="px-5 pb-5">
                                            <a href="#">
                                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                                            </a>
                                            <div class="flex items-center mt-2.5 mb-5">
                                                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                </div>
                                                <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                            </div>
                                            <div class="flex items-center justify-between">
                                                <span class="text-3xl font-bold text-gray-900 dark:text-white">{product.price}$</span>
                                                <AddToCart />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div> */}

            <div className="lg:grid lg:grid-rows-1 lg:grid-cols-4 gap-10 px-20 lg:px-32 py-10 ">
                {
                    products.map((product) => {
                        return (
                            <div key={product._id}>
                                <div className="w-72 hover:scale-105 transition-all ease-in duration-300 rounded-3xl mb-5 hover:cursor-pointer shadow-pink-200 shadow-xl ">

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
                                            <AddToCart product ={product}/>
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
        </>
    )
}