
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

import HeaderLogo from "../../components/HeaderLogo";
import CardStory from './CardStory';
import Border from '../../components/Border';
import Footer from "../../components/Footer";
import styles from './styles.module.css'

import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";
import card4 from "../../images/card4.png";



const SignUp = () => {

    return (
        <div>
            <div className={styles['container-background-img']}>
                <div className={styles['container-opacity']}></div>
                <div className={styles['container']}>
                    <HeaderLogo />

                    <section className={styles['description']}>
                        <h1>Unlimited movies, TV shows, and more.</h1>

                        <h3>Watch anywhere. Cancel anytime.</h3>

                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className={styles["form-element"]}>
                            <input type="email" />
                            <label className={styles["floating-label"]} htmlFor="password">Password</label>
                            <button>{`Get Start >`} </button>
                        </div>
                    </section>
                </div>

            </div >

            <div>
                <Border />
                <CardStory
                    title='Enjoy on your TV.'
                    description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
                    img={card1}
                />
                <Border />
                <CardStory
                    revertRow={true}
                    title='Download your shows to watch offline.'
                    description="Save your favorites easily and always have something to watch."
                    img={card2}
                />
                <Border />
                <CardStory
                    title='Watch everywhere.'
                    description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
                    img={card3}
                />
                <Border />
                <CardStory
                    revertRow={true}
                    title='Create profiles for kids.'
                    description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
                    img={card4}
                />
                <Border />

            </div>
            <Footer
                backgroundColor='black'
            >
                <h5> Questions? Call 800 855 855</h5>

                <div className={styles['footer-links']}>

                    <a href="https://github.com/GardeniaOliveira">FAQ</a>
                    <a href='https://github.com/GardeniaOliveira' >Help Center</a>
                    <a href="https://github.com/GardeniaOliveira"> Account</a>
                    <a href="https://github.com/GardeniaOliveira">Media Center</a>
                    <a href="https://github.com/GardeniaOliveira">Investor Relations</a>
                    <a href="https://github.com/GardeniaOliveira">Jobs</a>
                    <a href="https://github.com/GardeniaOliveira">Redeem Gift Cards</a>
                    <a href="https://github.com/GardeniaOliveira">Buy Gift Cards</a>
                    <a href="https://github.com/GardeniaOliveira">Ways to Watch</a>
                    <a href="https://github.com/GardeniaOliveira">Terms of Use</a>
                    <a href="https://github.com/GardeniaOliveira">Privacy</a>
                    <a href="https://github.com/GardeniaOliveira">Cookie Preferences</a>
                    <a href="https://github.com/GardeniaOliveira">Corporate Information</a>
                    <a href="https://github.com/GardeniaOliveira">Contact Us</a>
                    <a href="https://github.com/GardeniaOliveira">Speed Test</a>
                    <a href="https://github.com/GardeniaOliveira">Legal Guarantee</a>
                    <a href="https://github.com/GardeniaOliveira">Legal Notices</a>
                    <a href="https://github.com/GardeniaOliveira">Only on Netflix</a>
                </div>

                <div className={styles["footer-language"]}>
                    <div className="icon">
                        🌐
                    </div>
                    <select name="language" className={styles['select-language']} >
                        <option value="english">English</option>
                        {/* <option value="Portuguese">Portuguese</option> */}

                    </select>
                </div>


            </Footer>
        </div>
    )
}



export default SignUp