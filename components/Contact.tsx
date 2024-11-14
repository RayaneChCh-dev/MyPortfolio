"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ContactItem {
    email: string;
    address: string;
    phone: string;
}

interface ContactData {
    contact: ContactItem;
}

const Contact = () => {
    
    const [data, setData] = useState<ContactData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/data.json');
            const jsonData: ContactData = await response.json();
            setData(jsonData);
        };

        fetchData();
    }, []);


    return ( 
        <div className="border-b border-[#1A1A2E] pb-20">
            <motion.h1 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl text-white">
                    Me Contacter
            </motion.h1>
            <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                className="text-center tracking-tighter">
                <p className="my-4 text-white">{data?.contact.address}</p>
                <p className="my-4 text-white">{data?.contact.phone}</p>
                <a href={`mailto:${data?.contact.email}`} className="my-4 text-white underline">{data?.contact.email}</a>
            </motion.div>
        </div>
     );
}
 
export default Contact;
