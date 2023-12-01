import React from 'react'

const index = ({ title = 'Title', className, icon: Icon }) => {
    return (
        <button className={`bg-buttonBg p-2 rounded font-semibold text-black text-sm font-Inter ${className}`}>
            {Icon && <img
                src={Icon}
                alt='Button Image'
            />}
            {title}
        </button>
    )
}

export default index