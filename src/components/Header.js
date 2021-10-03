

const Header = ({title}) => {
    return (
        <header className = {style}>
            <h1 className="p-2 text-2xl font-semibold ">{title}</h1>
            
        </header>
    )
}

Header.defaulProps = {
    title: 'Task Tracker',
}
const style = "flex justify-items-center p-4 "

export default Header
