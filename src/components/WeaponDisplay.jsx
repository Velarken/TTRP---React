import { Weapon } from "./Weapon"

export function WeaponDisplay({traits}) {
    return (
        <>
        <div className='weaponsContainer'>
            <div className="primaryWeapon">
                <Weapon 
                    traits={traits[0]}
                />
            </div>
            <div className="secondaryWeapon">
                <Weapon
                    traits={traits[1]}
                />
            </div>
        </div>
        </>
    )
}
export default WeaponDisplay