import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"

function C3() {
    const veri = useContext(GlobalContext)

    return (
        <>
            <p>
                C3
            </p>
            Son bileşene ulaşıldı.. Global Contexteki veri: {veri}
        </>
    )
}

export default C3