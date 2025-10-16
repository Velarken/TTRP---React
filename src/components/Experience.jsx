import '../styles/Experience.css'
export function Experience({trait}) {

    return (
        <div className='experience'>
            <p>{trait.name}</p>
            <button>{trait.bonus}</button>
        </div>
    )
}
export default Experience