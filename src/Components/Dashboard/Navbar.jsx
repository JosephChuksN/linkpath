import React from 'react'
import { NavLink } from 'react-router-dom';




const DashboardNav = () => {



    const isActiveLink =" border-b-2 text-cyan-700 border-cyan-600 transitional-all  ease-linear"
const navData = [
    {id:1, name:'Links', link:'links'},
    {id:2, name:'Appearance', link:'appearance'},
    {id:4, name:'Settings', link:'settings'}
]
    


  return (
   <>
    <div className= 'sticky bg-white z-20 top-0'>
        <ul className='flex  px-3 gap-10 text-[1rem] font-normal text-gray-400 border-b'>{
        navData.map((data)=>(
           <NavLink className={({isActive})=> isActive? isActiveLink : null} key={data.id} to={data.link} end><li className='py-3'>{data.name}</li></NavLink>
        ))    
            }</ul>
    </div>
 

    </>
  )
}

export default DashboardNav