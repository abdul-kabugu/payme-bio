import {RiLinksLine} from 'react-icons/ri'
import {GrTransaction} from 'react-icons/gr'
import {TbFileInvoice} from 'react-icons/tb'
import {AiOutlineUser, AiOutlineHome} from 'react-icons/ai'
import {CiViewBoard} from 'react-icons/ci'
export const links = [
    {
        name : 'Dashboard',
         to : '/dashboard',
         icon : AiOutlineHome,
    },

   
    {
        name : 'Profile',
         to : '/dashboard/profile',
         icon : AiOutlineUser,
    },
    
   

]

export const comingSoon = [
    {
        name : 'All links',
         to : '/links',
         icon : RiLinksLine,
    },
    {
        name : 'Transactions',
         to : '/transactions',
         icon : GrTransaction,
    },
    {
        name : 'Invoices',
         to : '/invoices',
         icon : TbFileInvoice,
    },
    {
        name : 'Request',
         to : '/request',
         icon : GrTransaction,
    },
]