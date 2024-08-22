import livingRoom from "../assets/images/living-room.jpg"

const Middle = () => {
    return (
        <div className="backdrop-blur-3xl m-2 bg-white/20 items-center rounded-3xl">
                <img className="rounded-3xl p-2" src={livingRoom} alt="living room" />
        </div>
    )
}

export default Middle