import '../Styles/SocialIcons.css'
import TwitterLogo from '../Images/Twitter.png'
import FacebookLogo from '../Images/Facebook.png'
import InstagramLogo from '../Images/Instagram.png'
import GithubLogo from '../Images/GitHub.png'


export default function SocialIcons() {
    return(
        <div className='SocialIcons'>
            <div>
                <img src={TwitterLogo}></img>
                <img src={FacebookLogo}></img>
                <img src={InstagramLogo}></img>
                <img src={GithubLogo}></img>
            </div>
        </div>
    )
}