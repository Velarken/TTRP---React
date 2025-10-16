import { useState } from 'react'
import { TraitDisplay } from './components/TraitDisplay.jsx'
import { ResourceDisplay } from './components/ResourceDisplay.jsx'
import './styles/App.css'
import WeaponDisplay from './components/WeaponDisplay.jsx'
import { weaponList, traitList, personalBuffList, personalResources, experienceList } from './script/data.js'
import ExperienceDisplay from './components/ExperienceDisplay.jsx'

function PlayerPage() {
 
  return (
    <>
      <TraitDisplay
        traits={personalBuffList}
      />
      <TraitDisplay 
        traits={traitList}
      />
      <ResourceDisplay
        traits={personalResources}
      />
      <div className="rowContainer">
        <WeaponDisplay
          traits={weaponList}
        />
        <ExperienceDisplay
          traits={experienceList}
        />
      </div>
    </>
  )
}

export default PlayerPage
