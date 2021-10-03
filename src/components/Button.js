const Button = ({text, onClick}) => {
    return (
        <button className={style} onClick = {onClick}>{text}</button>
    )
}
const style = "w-24 bg-blue-600 hover:bg-blue-500 rounded-md text-white"
export default Button
