import logo from '../../images/logo.svg'
import image from '../../images/illustration-dashboard.png'

const Home = () => {
    return (
        <>
            <section className='flex flex-col items-center justify-center mt-21'>
                <figure>
                    <img className='w-20 mb-10' src={logo} alt="Logo ping" />
                </figure>
                <h1 className='text-2xl text-gray-59 font-extralight mb-3 lg:text-5xl lg:mb-4'>We are launching <span className='font-semibold text-very-dark-blue'>soon!</span></h1>
                <p className='text-xs text-gray-59 mb-8 lg:text-xl'>Subscribe and get notified</p>
                <form className='flex flex-col w-screen px-8 gap-3 mb-10 md:max-w-130 md:gap-3 lg:flex-row lg:items-center lg:justify-center lg:mb-12 lg:gap-3 lg:max-w-170'>
                    <input className='border border-pale-blue-01 py-3 pl-9 rounded-full text-sm placeholder:text-pale-blue-01 lg:w-120' type="email" placeholder='Your email address....' />
                    <button className='py-3 px-5 rounded-full bg-blue-62 text-white text-sm shadow-[0px_5px_10px_4px_rgba(59,_130,_246,_0.15)] lg:w-55'>Notify Me</button>
                </form>
                <figure className='p-7 mb-25 md:max-w-150 lg:max-w-170 lg:mb-20'>
                    <img src={image} alt="Banner with estadistics" />
                </figure>
                <div className='flex gap-5 text-lg text-blue-62'>
                    <div className='border border-pale-blue-01 rounded-full mb-2 w-8 flex items-center justify-center'>
                        <i className="ri-facebook-fill"></i>
                    </div>
                    <div className='border border-pale-blue-01 rounded-full mb-2 w-8 flex items-center justify-center'>
                        <i className="ri-twitter-fill"></i>
                    </div>
                    <div className='border border-pale-blue-01 rounded-full mb-2 w-8 flex items-center justify-center'>
                        <i className="ri-instagram-line"></i>
                    </div>
                </div>
            </section>
            <footer className='text-center text-xs text-gray-59 m-9'>© Copyright Ping. All rights reserved.</footer>
        </>
    )
}

export { Home }