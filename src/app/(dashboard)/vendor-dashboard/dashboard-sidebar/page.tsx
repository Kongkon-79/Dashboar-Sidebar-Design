import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import DashboardSidebarItem from '../dashboard-sidebar-items/page';
import { sidebarContents } from '@/components/data/dashboard-data';


const DashboardSidebar = () => {
    return (
        <div>
            <div className='w-[300px] h-screen bg-blue-400 '>
                <ScrollArea className="h-full w-full">
                    <div className='pt-10'>
                        {
                            sidebarContents?.map((item)=>(
                                <DashboardSidebarItem key={item?.id} item={item} />
                            ))
                        }
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
};

export default DashboardSidebar;