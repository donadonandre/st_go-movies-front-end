import {useState} from "react";
import Input from "./form/Input";
import {useNavigate, useOutletContext} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {setJwtToken, setAlertClassName, setAlertMessage, toggleRefresh} = useOutletContext();

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        let payload = {
            email: email,
            password: password,
        }

        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(payload)
        }

        fetch(`${process.env.REACT_APP_BACKEND}/authenticate`, requestOptions)
            .then((response) => {console.log(response); return response.json();})
            .then((data) => {
                console.log(data);
                if (data.error) {
                    setAlertClassName("alert-danger");
                    setAlertMessage(data.message);
                } else {
                    setJwtToken(data.access_token);
                    setAlertClassName("d-none");
                    setAlertMessage("");
                    toggleRefresh(true);
                    navigate("/");
                }
            })
            .catch(error=>{
                console.log(error);
                setAlertClassName("alert-danger");
                setAlertMessage(error)
            })

        // if (email === "admin@example.com") {
        //     setJwtToken("abc");
        //     setAlertClassName("d-none");
        //     setAlertMessage("");
        //     navigate("/")
        // } else {
        //     setAlertClassName("alert-danger");
        //     setAlertMessage("Invalid credentials");
        // }
    }

    return (
        <div className="col-md-6 offset-md-3">
            <h2>Login</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <Input
                    title="Email Address"
                    type="email"
                    className="form-control"
                    name="email"
                    autoComplete="email-new"
                    onChange={(event) => setEmail(event.target.value)}
                />

                <Input
                    title="Password"
                    type="password"
                    className="form-control"
                    name="password"
                    autoComplete="password-new"
                    onChange={(event) => setPassword(event.target.value)}
                />

                <hr/>

                <div className="text-center">
                <input
                    type="submit"
                    className="btn btn-primary"
                    value="Login"
                />
                </div>

            </form>
        </div>
    )
}

export default Login;