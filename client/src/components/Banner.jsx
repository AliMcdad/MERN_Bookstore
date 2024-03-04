import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
    return (
        <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
            <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
                {/*left side*/}
                <div className='md:w-1/2 space-y-8 h-full'>
                    <h2 className='text-6xl font-bold leading-snug text-black'>Buy and Sell your Books <span className='text-blue-700'>for the Best Prices</span></h2>
                    <p className='md:w-4/5'>"Dive into a captivating world where imagination knows no bounds in this enthralling fiction novel. Follow the journey of a group of diverse characters as they navigate through love, loss, and redemption in a tapestry of intertwining destinies. With vivid storytelling and unexpected twists, this book weaves a spellbinding narrative that will keep you turning the pages until the very end. Prepare to be transported to a realm where dreams collide with reality, and where the power of storytelling is at its most potent. This novel is a must-read for those who crave an escape into the extraordinary realms of fiction."
                    </p>
                    <div>
                        <input type="search" name='search' id='search' placeholder='Search a book' className='py-2
                        px-2 rounded-s-sm outline-none'/>
                        <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black
                        transition-all ease-in duration-200'>Search</button>
                    </div>
                </div>
                {/*right side*/}
                <div>
                    <BannerCard></BannerCard>
                </div>
            </div>
        </div>
    )
}

export default Banner