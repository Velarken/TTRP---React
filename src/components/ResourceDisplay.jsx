import { Checkbox } from './Checkbox'
import '../styles/ResourceDisplay.css'

export function ResourceDisplay({traits}) {

    const listItems = traits.map((trait) => {
        let checkboxes = new Array(trait.value).fill(1);
        let displayBoxes = checkboxes.map((checkbox) => {
            return (
                <>
                    <Checkbox 
                        
                    />
                </>
            )
        })
        return (
            <div className='resourceContainer'>
                <h3>{trait.name}</h3>
                <div className="checkboxes">{displayBoxes}</div>
            </div>
        )
    })

    return (
        <div className='resourceGrid'>
            {listItems}
        </div>
    )
}
export default ResourceDisplay