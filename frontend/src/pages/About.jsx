import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
    return (
        <div>
            <div className='pt-8 text-2xl text-center border-t'>
                <Title text1={'ABOUT'} text2={'US'}/>
            </div>

            <div className='flex flex-col gap-16 my-10 md:flex-row'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className='flex flex-col justify-center gap-6 text-gray-600 md:w-2/4'>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, orci iaculis malesuada viverra himenaeos integer massa mollis, leo sem quam erat semper netus. Lorem ipsum dolor sit amet consectetur adipiscing elit eleifend pellentesque viverra, curae nisl montes mus vitae risus eros erat cubilia, auctor suspendisse nostra libero himenaeos ornare sem massa mattis. 
                        Fames rutrum turpis accumsan donec at netus inceptos nunc diam mauris nulla gravida tortor.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, orci iaculis malesuada viverra himenaeos integer massa mollis, leo sem quam erat semper netus. Lorem ipsum dolor sit amet consectetur adipiscing elit eleifend pellentesque viverra, curae nisl montes mus vitae risus eros erat cubilia, auctor suspendisse nostra libero himenaeos ornare sem massa mattis. 
                    Fames rutrum turpis accumsan donec at netus inceptos nunc diam mauris nulla gravida tortor</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, orci iaculis malesuada viverra himenaeos integer massa mollis, leo sem quam erat semper netus. Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

            <div className='py-4 text-xl'>
                <Title text1={'WHY'} text2={'CHOOSE US'}/>
            </div>

            <div className='flex flex-col mb-20 text-sm md:flex-row'>
                <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
                    <b>Quality Assurance:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur fermentum porttitor penatibus, 
                        dignissim interdum vehicula consequat imperdiet lacus dis placerat</p>
                </div>
                <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
                    <b>Convenience:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur fermentum porttitor penatibus, 
                        dignissim interdum vehicula consequat imperdiet lacus dis placerat</p>
                </div>
                <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
                    <b>Exceptional Customer Service:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur fermentum porttitor penatibus, 
                        dignissim interdum vehicula consequat imperdiet lacus dis placerat</p>
                </div>
            </div>

            <NewsletterBox />
        </div>
    )
}

export default About