import {useState} from "react"

const PasswordField = () => {
    const [isPasswordvisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisiblility = () => {
        if (isPasswordvisible == false) {
            setIsPasswordVisible(!isPasswordvisible);

        };

        return (
            <input type={isPasswordvisible ? "text" : "password"} />
        )
    }
}