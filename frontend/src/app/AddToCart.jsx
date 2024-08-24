"use client";



import { useDispatch } from "react-redux";
import { addItem } from "../lib/cartSlice";
import { PiShoppingCartSimpleFill } from "react-icons/pi";




export default function AddToCart({ product }) {
    const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(addItem(product))}  className="bg-[#EC4B9A] px-6 py-2 text-white text-lg rounded-3xl"><PiShoppingCartSimpleFill/></button>
  );
}
