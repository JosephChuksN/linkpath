import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { useAuth } from '../Context/AppContext';
import axios from 'axios'
import {  Spinner } from 'flowbite-react/lib/esm/components';


const Profile = ({avater}) => {
    
    const {name} = useParams()
    const [user, setUser] = useState({})
    const [links, setLinks] = useState([])
    const [error, setError] = useState('')
    const { loading, setLoading } = useAuth()
    

    const getLinks = async(name) => {
      
      try {
        setLoading(true)
        const {data} = await axios.get(`https://linkpath-api.onrender.com/api/v1/link/${name}`)
        console.log(data)
        const {user, link} = data

      setUser(user)
      setLinks(link)
      setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(error.response.data.msg)
    
      }
    }

    useEffect(()=>{
        getLinks(name)
    }, [])

  return (
  <>
   <div className='h-full min-h-screen  mx-auto bg-cyan-600/20 flex flex-col justify-between items-center relative'>

  <div className='flex flex-col w-full lg:w-1/2 xl:w-2/5  md:w-1/2 px-10 h-full  items-center overflow-y-auto'>
    <div className={`${!user.profileImg &&  !error ? "bg-white" : null} flex flex-col h-64 items-center justify-center gap-1 w-full bg-no-repeat bg-cover `} style={{backgroundImage: `url(${user.profileImg})`}}>
           <span className={`${!user.profileImg &&  !error ? "bg-white" : "bg-black/40"} w-full h-full flex items-center justify-center  py-1 `}><span className='w-[85%] h-full bg-no-repeat bg-cover border border-transparent flex items-center justify-center capitalize font-bold text-6xl ' style={{backgroundImage: `url(${user.profileImg})`}}>{!user.profileImg &&  !error ? name.charAt(0) : null}</span></span>
    </div>
       <span className='flex flex-col   py-3 w-full text-center bg-cyan-600'> 
        <span className='text-xl font-medium  text-white capitalize'>{user.name || error}</span>
        <span className='text-[15px] text-gray-100 whitespace-pre-wrap '>{user.bio}</span>
       </span>

    <div className='w-full'>{
        links.map(data =>(
      <div className='flex  items-center py-4 bg-white justify-between px-1 border-b' key={data._id}>
        <div className='flex gap-3 items-center'>
        <span className='w-10 h-10 rounded bg-no-repeat bg-cover' style={{backgroundImage: `url(https://${new URL(data.siteLink).hostname}/favicon.ico)`}}></span>
        <span className='font-medium capitalize'><a href={data.siteLink} target="blank">{data.siteName.replace(".com", " ")}</a></span>
        </div>
        <span className='py-1 px-2 bg-gray-300/40 rounded'><a href={data.siteLink} target="blank">Visit</a></span>
      </div>
         ))
         }
    </div>
       
  </div>
      <span className='flex w-full justify-end pr-5 py-4  font-semibold text-xl '><span>Linkpath</span></span>
  <div className={`flex w-full h-screen top-0 z-20 bg-black/30 flex-wrap items-center gap-2 justify-center absolute ${loading? "block" : "hidden"}`}>
    <Spinner
    aria-label="Extra large spinner example"
    size="xl"
    color="success"
  />
  </div>
  </div> 
   
   </>
  )
}

export default Profile