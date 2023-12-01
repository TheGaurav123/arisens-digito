import React from 'react'
import { Button, Header } from '../components'
import { Globe, Arrow, DownArrow, DoubleArrowRight, Location, Dialer, Mail, GoogleMap, Logo, Partners, Blog, ServiceVector } from '../assets/images'
import StarImage from '../assets/images/Star.svg'
import { BrowserRouter } from 'react-router-dom'
import Image from '../assets/images/Testimonial.svg'

const Service_Data = [
    {
        id: 1,
        label: '101',
        text: 'Success in getting happy customer'
    },
    {
        id: 2,
        label: '51',
        text: 'Thousands of successful business'
    },
    {
        id: 3,
        label: '500+',
        text: 'Total clients who loves Arisens Digito'
    },
    {
        id: 4,
        label: '25',
        text: 'Stars reviews given by satisfied clients'
    },
]

const SERVICES = [
    {
        id: 1,
        label: 'BRANDING',
        text: 'We take your brand from zero to hero. Our branding workshops provide clarity about your vision, purpose and positioning, along with essentials like tone of voice and customer journey.',
        css: 'bg-primary'
    },
    {
        id: 2,
        label: 'CREATIVE',
        text: "Make people notice with creative and copy that’s uniquely you. Our designers and copywriters capture your style with content that stands out and stops the scroll.",
        css: 'bg-white text-black'
    },
    {
        id: 3,
        label: 'WEBSITE',
        text: "Want a website that just works? We improve the look, feel and experience of your website by running audits that identify how it could be even better.",
        css: 'bg-primary'
    },
    {
        id: 4,
        label: 'PAID',
        text: "We’re paid ads experts. Reach new customers and drive conversions with paid social, PPC and Google ads – we’ll figure out what works best for you!",
        css: 'bg-white text-black'
    },
    {
        id: 5,
        label: 'CONTENT',
        text: "Keep people coming back to your brand with fresh content. Our content strategies keep consumers interested with targeted emails, organic social and SEO-optimised blogs.",
        css: 'bg-primary'
    },
    {
        id: 6,
        label: 'INFLUENCER',
        text: "Engage your audience with people they already know and love. We work with brand-appropriate influencers to create exciting, trustworthy content that’ll put your brand on the digital map.",
        css: 'bg-white text-black'
    },
]

const TESTIMONIALS = [
    {
        id: 1,
        name: 'Jene Mordan',
        designation: 'Senior Head',
        comment: "We’re paid ads experts. Reach new customers and drive conversions with paid social, PPC and Google ads – we’ll figure out what works best for you!",
        avatar: Image
    },
    {
        id: 2,
        name: 'Jene Mordan',
        designation: 'Senior Head',
        comment: "We’re paid ads experts. Reach new customers and drive conversions with paid social, PPC and Google ads – we’ll figure out what works best for you!",
        avatar: Image
    },
    {
        id: 3,
        name: 'Jene Mordan',
        designation: 'Senior Head',
        comment: "We’re paid ads experts. Reach new customers and drive conversions with paid social, PPC and Google ads – we’ll figure out what works best for you!",
        avatar: Image
    },
]

const Layout = () => {
    return (
        <BrowserRouter>
            <div className='bg-support text-white min-h-screen p-4'>
                <Header />

                {/* Home Section */}
                <div id='home' className='min-h-screen flex flex-col md:flex-row justify-center items-center'>
                    {/* Smartphone Right */}
                    <div className='md:hidden'>
                        <img
                            src={Globe}
                            alt='Globe'
                        />
                    </div>

                    {/* Left */}
                    <div className='flex flex-col gap-16'>
                        <div className='flex flex-col gap-4'>
                            <div className='relative'>
                                <h2 className='text-5xl xl:text-8xl tracking-wide leading-tight font-Poppins'>Shaping Brands<br />for the digital era</h2>
                                <img
                                    src={Arrow}
                                    alt='h2'
                                    className='absolute hidden md:block w-1/3 lg:right-12 lg:bottom-10 xl:right-17 xl:bottom-0'
                                />
                            </div>
                            <div className='relative'>
                                <p className='text-md leading-[20px]'>Keep Consumer insights & touch-points in mind,<br /> We bring in strategic value.</p>
                                <img
                                    src={DownArrow}
                                    alt='p'
                                    className='absolute left-52 bottom-[-2px]'
                                />
                            </div>
                        </div>
                        <div>
                            <Button
                                title='Get Started'
                                className={'bg-amber-400 text-lg px-3'}
                            />
                        </div>
                    </div>

                    {/* Right */}
                    <div className='hidden md:block'>
                        <img
                            src={Globe}
                            alt='Globe'
                        />
                    </div>
                </div>

                {/* About Section */}
                <div id='about' className='min-h-screen flex flex-col gap-24 justify-center items-center'>
                    <div className='flex flex-col items-center lg:flex-row gap-10'>

                        {/* Left */}
                        <div className='w-[70%] flex justify-center'>
                            <img
                                src={ServiceVector}
                                alt='service_vector'
                            />
                        </div>

                        {/* Right */}
                        <div className='flex flex-col gap-16'>
                            <div className='flex flex-col gap-4'>
                                <h2 className='lg:text-4xl xl:text-6xl tracking-wide font-Poppins'>About The Arisens<br /> Digito Services and <br />It's Innovative IT<br />Solutions</h2>
                                <p className='text-md leading-[20px]'>The complexity of your project, and your design
                                    preferences. It's a good idea to review the portfolios
                                    and client reviews of the service providers you're
                                    considering. Also, reach out to them to discuss your
                                    specific project requirements to get a sense of
                                    their expertise and responsiveness.
                                    <br /><br />
                                    Ultimately, the best website design service for you
                                    will depend on your unique needs and goals.</p>
                            </div>
                            <div className='relative flex items-center'>
                                <img
                                    src={DoubleArrowRight}
                                    alt='DoubleArrowRight'
                                    className='absolute left-[-35px]'
                                />
                                <Button
                                    title='More Details'
                                    className={'bg-amber-400 text-lg px-3 rounded-xls'}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center gap-5'>
                        <h2 className='text-5xl text-center'>Our Proven Process</h2>
                        <p className='text-sm font-Montserrat font-[400]'>Marketing fundamentals drive results – not tactics or fads. That’s what our approach is all about:<br /> universal performance marketing truths that stand the test of time and help you win.</p>
                        <div className='flex gap-3 justify-center mt-10'>
                            <div className='w-4 h-4 bg-primary' />
                            <div className='w-4 h-4 bg-white rounded-full' />
                            <div className='w-4 h-4 bg-primary' />
                        </div>
                    </div>

                    <div className='flex flex-wrap md:flex-nowrap justify-between gap-2 bg-primary text-black font-Poppins w-[100%] p-5'>
                        {Service_Data.map((val) => {
                            const { id, label, text } = val
                            return (
                                <div key={id} className='flex items-center gap-5'>
                                    <h2 className=' font-bold tracking-wider lg:text-xl xl:text-4xl text-white'>{label}</h2>
                                    <p className='font-[400] lg:text-sm xl:text-lg'>{text}</p>
                                </div>
                            )
                        })}

                    </div>

                </div>

                {/* Service Section */}
                <div id='service' className='flex flex-col gap-10 min-h-screen'>
                    {/* Title */}
                    <div className='flex justify-center mt-10'>
                        <h2 className='bg-primary px-6 py-2 text-xl text-black rounded-full'>Services</h2>
                    </div>

                    {/* Services */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 font-Montserrat'>
                        {SERVICES.map((val) => {
                            const { id, label, text, css } = val
                            return (
                                <div key={id} className={`px-14 py-9 flex flex-col gap-4 rounded bg-primary ${css}`}>
                                    <h2 className='uppercase lg:md xl:text-3xl font-[600]'>{label}</h2>
                                    <p className='lg:text-md xl:text-xl tracking-wide font-[400]'>{text}</p>
                                </div>
                            )
                        })}
                    </div>

                    {/* Clients Testimonial */}
                    <div>
                        <div className='flex flex-col items-center gap-4'>
                            <h2 className='font-Poppins font-[400] text-lg'>Testimonial</h2>
                            <h1 className='lg:text-4xl xl:text-6xl'>Our Client Saying!</h1>
                        </div>

                        <div className='flex flex-col md:flex-row justify-center gap-20 md:gap-5 mt-20'>
                            {TESTIMONIALS.map((val) => {
                                const { id, name, designation, avatar, comment } = val
                                return (
                                    <div key={id} className='relative font-Montserrat  bg-[rgba(245,245,245,1)] w-[100%] md:w-1/4 text-black p-5 rounded-lg'>
                                        <img
                                            src={avatar}
                                            alt='testimonial'
                                            className='relative bottom-14 rounded-full h-20 w-20 shadow-lg'
                                        />
                                        <div className='flex flex-col gap-6'>
                                            <p className='font-[300] italic mt-[-30px]'>{comment}</p>
                                            <div className='flex flex-col gap-1'>
                                                <h4 className='font-[600] lg:text-md xl:text-xl'>{name}</h4>
                                                <h6 className='font-[500] lg:text-sm xl:text-md '>{designation}</h6>
                                            </div>
                                            <img
                                                className='absolute bottom-10 right-5 lg:w-20 xl:w-24 '
                                                src={StarImage}
                                                alt='rating'
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Enquiry Section */}
                <div id='contact' className='justify-center flex mt-24'>
                    <div className='w-[80%] hidden lg:flex bg-white rounded-2xl p-4 flex-col gap-10 border-primary border border-4'>
                        <div className='flex justify-center gap-4'>
                            <div className='flex items-center gap-3 bg-primary text-black font-Poppins w-1/4 p-4 rounded-lg'>
                                <img
                                    src={Location}
                                    alt='address'
                                    className='w-12 h-12 p-3 bg-white rounded-full'
                                />
                                <div>
                                    <h2 className='font-[600] xl:text-lg'>Address</h2>
                                    <p>Harsha Complex, Guru Nanak
                                        <br /> Pura,Laxmi Nagar, New Delhi,
                                        110042</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 bg-primary text-black font-Poppins w-1/4 p-4 rounded-lg'>
                                <img
                                    src={Dialer}
                                    alt='callus'
                                    className='w-12 h-12 p-3 bg-white rounded-full'
                                />
                                <div>
                                    <h2 className='font-[600] xl:text-lg'>Call US</h2>
                                    <p>+91 7759047283</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 bg-primary text-black font-Poppins w-1/4 p-4 rounded-lg'>
                                <img
                                    src={Mail}
                                    alt='mail'
                                    className='w-12 h-12 p-3 bg-white rounded-full'
                                />
                                <div>
                                    <h2 className='font-[600] xl:text-lg'>Email US</h2>
                                    <p>xyz@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center gap-10'>
                            {/* Left */}
                            <div>
                                <img
                                    src={GoogleMap}
                                    alt='Location'
                                    className='w-[650px]'
                                />
                            </div>

                            {/* Right */}
                            <div className='bg-primary rounded-lg'>
                                <form className='flex flex-col gap-10 w-96 p-4 '>
                                    <input className='p-2' placeholder='Your Name' />
                                    <input className='p-2' placeholder='Your Name' />
                                    <input className='p-2' placeholder='Your Phone No.' />
                                    <textarea cols={20} rows={10}></textarea>
                                    <Button title='Free Enquiry' className={'bg-black text-white'} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Partners Section */}
                <div className='mt-20 hidden lg:flex flex-col gap-10'>
                    <div>
                        <h2 className='text-4xl text-center'>Our Partners</h2>
                    </div>
                    <div className='bg-gray-100 flex justify-center'>
                        <img
                            src={Partners}
                            alt='partners'
                        />
                    </div>
                </div>

                {/* Blogs Section */}
                <div id='blog' className='mt-20 hidden lg:flex flex-col gap-10'>
                    <div className='flex flex-col gap-10'>
                        <h2 className='text-4xl text-center'>Blogs!</h2>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-5xl font-Poppins text-center'>Curious To Know More!</h1>
                            <h2 className='text-5xl font-Poppins text-center'>Read Our Digital Marketing Blogs</h2>
                        </div>
                    </div>
                    <div className='flex justify-center gap-7'>
                        <div className='font-Poppins bg-white w-1/4 text-black flex flex-col gap-3 p-4 rounded'>
                            <img
                                src={Blog}
                                alt='Blog'
                                className='w-96 mx-auto'
                            />
                            <h2 className='text-lg'>Engage your audience with peoplw they already know and love.</h2>
                            <a className='font-semibold'>View Details</a>
                        </div>
                        <div className='font-Poppins bg-white w-1/4 text-black flex flex-col gap-3 p-4 rounded'>
                            <img
                                src={Blog}
                                alt='Blog'
                                className='w-96 mx-auto'
                            />
                            <h2 className='text-lg'>Engage your audience with peoplw they already know and love.</h2>
                            <a className='font-semibold'>View Details</a>
                        </div>
                        <div className='font-Poppins bg-white w-1/4 text-black flex flex-col gap-3 p-4 rounded'>
                            <img
                                src={Blog}
                                alt='Blog'
                                className='w-96 mx-auto'
                            />
                            <h2 className='text-lg'>Engage your audience with peoplw they already know and love.</h2>
                            <a className='font-semibold'>View Details</a>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className='font-Poppins hidden lg:flex my-20 flex-col items-center gap-20'>
                    <div className='flex  items-center justify-center gap-56'>
                        <div className='flex flex-col gap-4'>
                            <img
                                src={Logo}
                                alt='ArisensDigito'
                                className='w-40'
                            />
                            <h2 className='text-2xl'>ARISENSDIGITO</h2>
                        </div>

                        <div className='flex gap-40'>
                            <div className='flex flex-col gap-2 text-lg'>
                                <h2 className='font-semibold mb-2'>Information</h2>
                                <a>Home</a>
                                <a>About us</a>
                                <a>Blog</a>
                                <a>Contact us</a>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className='font-semibold mb-2'>Contact</h2>
                                <a>+91 77590 47283</a>
                                <a>arisensdigito@support.com</a>
                                <a>Harsha Complex, Guru Nanak<br />Pura, Laxmi Nagar, New Delhi,<br />110042</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-gray-400'>ARISENS DIGITO. All Rights Reserved</h2>
                    </div>
                </div>

            </div>
        </BrowserRouter>

    )
}

export default Layout