import { HiUserAdd } from "react-icons/hi";
import { PiListBulletsFill } from "react-icons/pi";
import { MdHomeFilled } from "react-icons/md"


export const navigation = [
    {
        label: "Generate QR",
        href: "generate",
        icon: <HiUserAdd />
    },
    {
        label:"Guests",
        href:"guestlist",
        icon: <PiListBulletsFill  />
    }
]

export const mobileNavigation = [
    {
        label: "Home",
        href:"/",
        icon: <MdHomeFilled />
    },
    ...navigation
]