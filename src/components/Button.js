const Button = ({text}) => {

    return (
        <button className={style} >{text}</button>
    )
}
const style = "w-24 bg-blue-600 hover:bg-blue-500 rounded-md text-white"
export default Button
