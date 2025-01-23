'use client'
import React from 'react';
import { motion } from "framer-motion"

const Products = () => {
    return (
        <motion.div 
        initial={{opacity : 0, y:-50}}
        animate={{opacity : 1, y:0}}
        transition={{duration:1}}
        className='text-3xl font-bold text-center p-20'>
            products content
        </motion.div>
    );
};

export default Products;