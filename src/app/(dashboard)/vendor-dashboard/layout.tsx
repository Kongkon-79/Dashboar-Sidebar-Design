import React, { ReactNode } from 'react';
import DashboardSidebar from './dashboard-sidebar/page';

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex'>
            <DashboardSidebar/>
            <div>
                {children}
            </div>
        </div>

    );
};

export default layout;