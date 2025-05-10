import logo from '../../images/logo.svg'
import image from '../../images/illustration-dashboard.png'

const Home = () => {
    return (
        <>
            <section className=''>
                <figure>
                    <img src={logo} alt="Logo ping" />
                </figure>
                <h1>We are launching <span>soon!</span></h1>
                <p>Subscribe and get notified</p>
                <form>
                    <input type="email" placeholder='Your email address....' />
                    <button>Notify Me</button>
                </form>
                <figure>
                    <img src={image} alt="Banner with estadistics" />
                </figure>
                <div>
                    <i class="ri-facebook-fill"></i>
                    <i class="ri-twitter-fill"></i>
                    <i class="ri-instagram-line"></i>
                </div>
            </section>
            <footer>© Copyright Ping. All rights reserved.</footer>
        </>
    )
}

export { Home }