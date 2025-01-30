import { useState } from "react"

export const useLikeToggle = () => {
    const [like, setLike] = useState("Like")
    return { like, toggle: () => setLike(like === "Like" ? "Unlike" : "Like") }
}