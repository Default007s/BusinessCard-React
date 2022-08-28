import '../Styles/BasicInfo.css'
import mainPic from '../profpic.png'

export default function BasicInfo () {
    return (
        <div>
            <img className='profile-pic' src={mainPic} alt="Person's Pic"></img>
            <h1 className='name'>Ahmed Jalal</h1>   
            <p className='profession'>Frontend Developer</p>
            <p className='site'>jalalportfolio.netlify.app</p>
        </div>
    )
}