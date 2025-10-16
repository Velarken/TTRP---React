import '../styles/Checkbox.css'
import { handleCheckboxClick } from '../index.js'
export function Checkbox({}) {

    return (
        <>
            <button className='checkbox' onClick={(e) => handleCheckboxClick(e)}>
        
            </button>
        </>
    )
}
export default Checkbox
