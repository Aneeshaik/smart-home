const Header = () => {
    return (
            <div className="flex justify-between items-center">
                    <h1 className="text-left text-white font-semibold text-3xl m-2">Hey Anees!</h1>
                    <ul className="backdrop-blur-3xl bg-white/20 flex w-max m-2 p-2 font-medium rounded-3xl space-x-6 items-center text-white">
                        <li>Living room</li>
                        <li>Bed room</li>
                        <li>Kitchen</li>
                        <li>Bathroom</li>
                        <li>Room 1</li>
                        <li>Room 2</li>
                        <li>
                            <button className="bg-gradient-to-r from-[#000046] to-[#1CB5E0]  shadow-md shadow-slate-800 px-2 py-1 rounded-2xl">Add room +</button>
                        </li>
                    </ul>
            </div>
    )
}

export default Header;