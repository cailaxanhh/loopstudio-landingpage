import './Footer.css';
import logo from '../../assets/logo.svg';
import fb from '../../assets/icon-facebook.svg';
import twt from '../../assets/icon-twitter.svg';
import ptr from '../../assets/icon-pinterest.svg';
import ins from '../../assets/icon-instagram.svg';

function Footer() {
    return (
        <div className='Footer'>
            <div className='footer-logo'>
                <img src={logo} id='logo' />
            </div>
            <div className='nav'>
                <ul>
                    <li><a href="about">About</a></li>
                    <li><a href="carrers">Carrers</a></li>
                    <li><a href="events">Events</a></li>
                    <li><a href="products">Products</a></li>
                    <li><a href="support">Support</a></li>
                </ul>
            </div>
            <div className='socials'>
                <img id="fb" src={fb}></img>
                <img id="twt" src={twt}></img>
                <img id="ptr" src={ptr}></img>
                <img id="ins" src={ins}></img>
            </div>
            <p>&copy; 2021 Loopstudios. All right reserved.</p>
        </div>
    );
}

export default Footer;