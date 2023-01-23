import { useEffect, useState } from "react";
import {  List, X } from "phosphor-react"
import Link from 'next/link';
import classes from './SideBar.module.scss';



export function SideBar(){
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handler = () => setIsOpen(false)

        window.addEventListener('click', handler)
        return () => {
            window.addEventListener('click', handler)
        }
    },[])
    const handleInputClick = (e) => {
        e.stopPropagation()
        setIsOpen(!isOpen)
    }
    return(

        <div className={classes.dropdown_cart_container}>
        <div className={classes.container_aside} onClick={handleInputClick}>
            {isOpen ? 
          
             <X size={34} 
                color="#fffafa" 
                className={classes.svgX} />      
            : 
             <List size={34} 
                   color="#fffafa" 
                   className={classes.svgList} />}
         { isOpen  &&   (          
                <aside>
                <ul>
                    <li> <Link href='/'>All Meetups</Link> </li>
                    <li> <Link href='/newMeetup'>+ New Meetup</Link></li>
                   
                </ul>
                </aside> )}

        </div>
        </div>

    )
}
