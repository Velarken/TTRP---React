export const weaponList = [
  {
    name:'Greatsword of Burning',
    usesTrait:'Strength',
    traitModifier:4,
    range:'Very Close',
    damage:'2d12',
    damageBonus:6
  },
  {
    name:'Staff of Rolling Flames',
    usesTrait:'Knowledge',
    traitModifier:3,
    range:'Far',
    damage:'3d8',
    damageBonus:4
  }
]
export const traitList = [
  {
    name:'Agility',
    value:['+4'],
    desc:'Sprint, Leap, Dodge',
    key:0
  },
  {
    name:'Strength',
    value:['-1'],
    desc:'Lift, Smash, Grapple',
    key:1
  },
  {
    name:'Finesse',
    value:['+2'],
    desc:'Control, Hide, Tinker',
    key:2
  },
  {
    name:'Instinct',
    value:['+3'],
    desc:'Percieve, Sense, Navigate',
    key:3
  },
  {
    name:'Presence',
    value:['+0'],
    desc:'Charm, Perform, Decieve',
    key:4
  },
  {
    name:'knowledge',
    value:['+4'],
    desc:'Recall, Analyze, Plan Ahead',
    key:5
  }
]
export const personalBuffList = [
  {
    name:'conditions',
    value:['restrained'],
    key:0
  },
  {
    name:'resistances',
    value:['lightning, ', 'fire, ', 'poison'],
    key:1
  },
  {
    name:'immunities',
    value:['celestial'],
    key:2
  }
]
export const personalResources = [
  {
    name:'Armor Slots',
    value:5,
    key:0
  },
  {
    name:'Hit Points',
    value:9,
    key:1
  },
  {
    name:'Stress',
    value:8,
    key:2
  },
  {
    name:'Hope',
    value:6,
    key:3
  }
]
export const experienceList = [
  {
    name:'The Quick and the Dead',
    bonus:4
  },
  {
    name:'Smile Through the Pain',
    bonus:2
  },
  {
    name:'Everything is negotiable!',
    bonus:2
  },
  {
    name:'Professional con artist',
    bonus:5
  },
]