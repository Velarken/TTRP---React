export function Trait({traitName,traitValue,traitDesc}) {
    return (
        <>
            <div className='traitContainer'>
                <h4>{traitName}</h4>
                <h3>{traitValue}</h3>
                <p>{traitDesc}</p>
            </div>
        </>
    )
}
export default Trait