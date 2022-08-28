import '../Styles/Buttons.css'

export default function Buttons () {
    return (
        <div className='btns'>
            <div className='sect sect1'>
                <span className="material-symbols-outlined icon icon1">mail</span>
                <button className='gotoBtn'>Email</button>
            </div>
            <div className='sect sect2'>
                <span className="material-symbols-outlined icon icon2">call</span>
                <button className='gotoBtn gotoBtn2'>Call Me</button>
            </div>
        </div>
    )
}