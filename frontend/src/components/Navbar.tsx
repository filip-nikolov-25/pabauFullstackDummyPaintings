import { NavbarProps } from '@/types'
import React from 'react'

const Navbar = ({setIsAddingPainting}:NavbarProps) => {
  return (
    <div className="flex justify-between bg-gray-500 p-10 ">
    <h3 className="text-3xl cursor-pointer">Dummy Paintings</h3>
    <h3 className="text-3xl cursor-pointer text-red-500" onClick={() => setIsAddingPainting(true)}>Add your dummy painting +</h3>
  </div>
  )
}

export default Navbar