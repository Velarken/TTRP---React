import "./styles.css"

export function handleCheckboxClick(e) {
    let checkbox = e.target
    checkbox.style.backgroundColor = 'red'
    console.log('clicked!')
}