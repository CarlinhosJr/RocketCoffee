import React, { useState } from 'react'



const Navegation = () =>{
    const imgOpen = './public/menu-open.svg'
    const imgClose = './public/menu-close.svg'
    const [open, setOpen] = useState(false)

    const Links =[
        {name:"Home",link:"/"},
        {name:"Menu",link:"/"},
        {name:"Recompensas",link:"/"},
        {name:"Gift Card",link:"/"},
        {name:"Lojas",link:"/"},
      ];
    return(
        <div className='w-full mt-4 md:mt-[50px]'>
            <div className='md:flex items-center justify-around py-4 md:px-10 px-7'>
                <div className='cursor-pointer flex items-center'>
                    <span className='mr-1 pt-2'>
                        <img src="./public/logo-mobile.svg" alt="" />
                    </span>
                </div>
                <div 
                    onClick={()=>setOpen(!open)} 
                    className='absolute right-8 top-[50px] cursor-pointer md:hidden'>
                    <img src={open ?  imgClose : imgOpen } alt="" />       
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-2 transition-all duration-500 ease-in ${open ? 'top-24 ':'top-[-490px]'}`}>
                    {
                    Links.map((link)=>(
                        <li key={link.name} className='md:ml-8 md:my-0 my-7 border-b border-zinc-400 pb-1 md:border-none '>

                            <a href={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
                        </li>
                    ))
                    }
                </ul>
                <div className={`mt-28 md:hidden ${open ? 'hidden':''}`}>
                    <p className='text-white text-3xl font-medium text-center'>O café que fará seu código decolar para o próximo nivel</p>
                </div>
                <button className={`md:ml-8 text-white border-2 border-purple-700 rounded-lg py-2 px-6 ${open ? 'hidden':'mt-[88px] md:mt-0 ml-[127px] md:ml-0 '}`}>PEGAR MEU CAFÉ</button>
            </div>
        </div>
    )
}

export default Navegation 
