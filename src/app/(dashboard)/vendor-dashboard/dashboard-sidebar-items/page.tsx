"use client"
import { sidebarContentType } from '@/components/data/dashboard-data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface props {
    item: sidebarContentType

}

const DashboardSidebarItem = ({ item }: props) => {
    const pathName = usePathname();
    console.log(pathName)
    const isActive = pathName === item.href;
    // console.log(item)
    return (
        <div className='relative pl-4'>
            <Link className={`flex items-center gap-2 px-6 py-4 rounded-l-full text-xl font-bold hover:text-white focus:text-black ${isActive && "bg-white"}`} href={item.href}>{item.icon} {item.name}</Link>
            <span className={`absolute top-[-48px] right-0 w-12 h-12 bg-transparent rounded-full shadow-[35px_35px_0_10px_white] ${isActive ? "block" : "hidden bg-white"}`}></span>
            <span className={`absolute bottom-[-48px] right-0 w-12 h-12 bg-transparent rounded-full shadow-[35px_-35px_0_10px_white] ${isActive ? "block" : "hidden"}`}></span>
        </div>
    );
};

export default DashboardSidebarItem;