import twitter from '../../assets/twittericon.svg';
import upwork from '../../assets/upworkicon.svg';
import github from '../../assets/giticon.svg';


function Footer() {
    return (
    <footer>
        <div className="footerContainer">
        <a href="https://twitter.com/KeeslingCallan" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter link"/></a>
        <a href="https://www.upwork.com/freelancers/~0152dd60ce74eaf031" target="_blank" rel="noopener noreferrer"><img src={upwork} alt="upwork link"/></a>
        <a href="https://github.com/Callank21" target="_blank" rel="noopener noreferrer"><img src={github} alt="github link"/></a>
        </div>
    </footer>
    )
}

export default Footer;