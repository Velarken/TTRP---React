import { Trait } from './Trait'
import '/src/styles/Trait.css'

export function TraitDisplay({traits}) {
    const listItems = traits.map((trait) => {
        return (
            <>
                <Trait
                    key={trait.key}
                    traitName={trait.name}
                    traitValue={trait.value}
                    traitDesc={trait.desc}
                />
            </>
        )
    })
    return (
        <div className='traitsContainer'>
            {listItems}
        </div>
    )
}
export default TraitDisplay