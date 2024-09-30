import React from 'react'
import { skillData } from '../utils/skillData'
const Skill = () => {
  return (
    <div>
     <h1 className='text-center font-bold text-3xl text-white' id='skill'>Skills</h1> 
    <div className="grid md:grid-cols-6 sm:grid-cols-2 gap-6 items-center pl-16 pt-10 m-10">
   {
        skillData.map((index) => (
            <div key={index.id} className=''>
                <img src={index.img} alt={index.alt} className='w-20'/>
            </div>
        ))
   }
    </div>
     </div>
  )
}

export default Skill
