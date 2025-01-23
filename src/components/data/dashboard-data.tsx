
import { MdDashboard } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { PiSignOut } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePermMedia } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa6";

export type sidebarContentType = {
    id : number,
    name : string,
    icon : any,
    href : string
}

export const sidebarContents = [
    {
        id : 1,
        name : "Dashboard",
        icon : <MdDashboard/>,
        href : "/vendor-dashboard"
    },
    {
        id : 2,
        name : "Products",
        icon : <FaProductHunt/>,
        href : "/vendor-dashboard/products"
    },
    {
        id : 3,
        name : "Media",
        icon : <MdOutlinePermMedia/>,
        href : "/vendor-dashboard/media"
    },
    {
        id : 4,
        name : "Users",
        icon : <FaRegUser/>,
        href : "/vendor-dashboard/users"
    },
    {
        id : 5,
        name : "Settings",
        icon : <CiSettings/>,
        href : "/vendor-dashboard/settings"
    },
    {
        id : 6,
        name : "Sign Out",
        icon : <PiSignOut/>,
        href : "/vendor-dashboard/sign-out"
    },
]