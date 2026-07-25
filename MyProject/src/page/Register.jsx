import '../css/Register.css';
function Register() {
    return (
        <div className="register-container">
            <div className="register-box">
                <h1>Register</h1>
                <input type="text" placeholder='Enter Full Name' />
                <input type="text" placeholder='Enter Email' />
                <input type="text" placeholder='Enter Password' />
                <input type="text" placeholder='Confirm Password' />
                <button>Register</button>

            </div>
        </div>
    );
}
export default Register;