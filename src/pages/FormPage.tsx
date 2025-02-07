import { useState, useRef } from "react"

const FormPage = () => {
    // Uncontrolled component/input
    const inputUsernameRef = useRef<HTMLInputElement>(null)
    const inputEmailRef = useRef<HTMLInputElement>(null)

    // Controlled component/input
    const [fullname, setFullname] = useState("")
    const [password, setPassword] = useState("")

    const [fullnameError, setFullnameError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const formHandler = () => {
        const fullnameValidatioin = fullname.length < 5
        const passwordValidation = password.length < 8

        if (fullnameValidatioin) {
            setFullnameError("Fullname minimal 5 karakter")
        }

        if (passwordValidation) {
            setPasswordError("Password minimal 8 karakter")
        }
    }

    return (
        <div>
            <h1>Form Page</h1>
            <p>Fullname : {fullname}, Password : {password}</p>
            <div className="form">
                <label htmlFor="username">Username</label>
                <input ref={inputUsernameRef} id="username" type="text" />
                <label htmlFor="email">Email</label>
                <input ref={inputEmailRef} id="email" type="email" />
            </div>
            <div className="form">
                <label htmlFor="fullname">Fullname</label>
                <input
                    onChange={
                        (e) => {
                            setFullname(e.target.value)

                            if (e.target.value.length < 5) {
                                setFullnameError("Fullname minimal 5 karakter")
                            } else {
                                setFullnameError("")
                            }
                        }
                    }
                    id="fullname"
                    type="text"
                />
                <span style={{ color: "red" }}>{fullnameError}</span>

                <label htmlFor="email">password</label>
                <input
                    onChange={
                        (e) => {
                            setPassword(e.target.value)

                            if (e.target.value.length < 8) {
                                setPasswordError("Password minimal 8 karakter")
                            } else {
                                setPasswordError("")
                            }
                        }
                    }
                    id="password"
                    type="password"
                />
                <span style={{ color: "red"}}>{passwordError}</span>
                
            </div>
            <button onClick={formHandler}>Submit</button>
        </div>
    )
}

export default FormPage