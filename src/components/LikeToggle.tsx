import { useLikeToggle } from "../hooks/useLikeToggle"

const LikeToggle = () => {
    const { like, toggle } = useLikeToggle()
    return (
        <div>
            <button onClick={toggle}>{like}</button>
        </div>
    )
}

export default LikeToggle