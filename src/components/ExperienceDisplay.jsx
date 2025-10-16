import Experience from "./Experience"

export function ExperienceDisplay({traits}) {
    const listItems = traits.map((experience) => {
        return (
            <Experience
                trait={experience}
            />
        )
    })
    
    return (
        <div className='experienceContainer'>
            {listItems}
        </div>
    )
}
export default ExperienceDisplay