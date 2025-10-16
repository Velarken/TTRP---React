import '../styles/Weapon.css'
export function Weapon({traits}) {
    return (
        <div className="weaponContainer">
            <div className="weaponHeader">
                <h4>{traits.name}</h4>
                <div>{traits.range}</div>
            </div>
            <div className="weaponButtons">
                <button>{'+ ' + traits.traitModifier}</button>
                <button>{traits.damage + ' + ' + traits.damageBonus}</button>
            </div>
        </div>
    )
}