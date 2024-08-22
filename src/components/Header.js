const Header = () => {
    return (
            <div className="flex justify-between items-center">
                    <h1 className="text-left text-white font-semibold text-3xl m-2">Welcome Anees!</h1>
                    <ul className="backdrop-blur-lg bg-black/10 flex w-max m-2 p-2 font-medium rounded-3xl space-x-6 items-center text-white">
                        <li>Living room</li>
                        <li>Bed room</li>
                        <li>Kitchen</li>
                        <li>Bathroom</li>
                        <li>Room 1</li>
                        <li>Room 2</li>
                        <li>
                            <button className="bg-gradient-to-r from-blue-600 to-blue-950 px-2 py-1 rounded-2xl">Add room +</button>
                        </li>
                    </ul>
            </div>
    )
}

export default Header;