import React from 'react'
import { Logo } from '../../assets/images'
import { Button } from '..'
import { HashLink as Link } from 'react-router-hash-link'

const index = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
                <img
                    src={Logo}
                    alt='Arisens Digito'
                    className='object-contain h-8'
                />
                <h2 className='text-md tracking-wide font-semibold'>ARISENSDIGITO</h2>
            </div>

            <div className='hidden md:flex items-center gap-8'>
                {/* Anchor Tags */}
                <div className='flex items-center gap-6 font-Inter font-[500] text-sm'>
                    <Link className='hover:underline underline-offset-4' smooth to={'#home'}>Home</Link>
                    <Link className='hover:underline underline-offset-4' smooth to={'#about'}>About us</Link>
                    <Link className='hover:underline underline-offset-4' smooth to={'#service'}>Service</Link>
                    <Link className='hover:underline underline-offset-4' smooth to={'#blog'}>Blog</Link>
                    <Link className='hover:underline underline-offset-4' smooth to={'#contact'}>Contact</Link>
                </div>

                {/* Call To Action Button */}
                <div>
                    <Button
                        title='Get Proposal'
                    />
                </div>
            </div>
        </div>
    )
}

export default index