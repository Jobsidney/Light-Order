import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import { Link } from 'react-router-dom'


export const SideBarData=[

    {
        Title: 'Dashbord',
        path:'/',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        Title: 'Electronics',
        path:'/abouts',
        icon: <FaIcons.FaRegAddressBook/>,
        cName:'nav-text'
    },
    {
        Title: 'Furniture',
        path:'/menu',
        icon: <FaIcons.FaRegAddressBook/>,
        cName:'nav-text'
    },
    {
        Title: 'Kitchens',
        path:'/reservation',
        icon: <IoIcons.IoIosCall/>,
        cName:'nav-text'
        
    },
    {
        Title: 'Groceries',
        path:'/reservation',
        icon: <IoIcons.IoIosCall/>,
        cName:'nav-text'
    },
    {
        Title: 'Health & Beuty',
        path:'/reservation',
        icon: <IoIcons.IoIosCall/>,
        cName:'nav-text'
    },
    {
        Title: 'Fashion',
        path:'/reservation',
        icon: <IoIcons.IoIosCall/>,
        cName:'nav-text'
    },
    {
        Title: 'Gaming',
        path:'/reservation',
        icon: <IoIcons.IoIosCall/>,
        cName:'nav-text'
    },
    {
        Title: 'Sporting Goods',
        path:'/reservation',
        icon: <IoIcons.IoIosCall/>,
        cName:'nav-text'
    }
]