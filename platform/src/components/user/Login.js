import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 눈 모양 아이콘 추가
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); // 비밀번호 표시 여부 상태
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: 로그인 요청
        console.log(email, password);
        navigate("/imops-platform");
    };


    return (
        <div className="login-page">
            <img src="/re_symbol.png" alt="Logo" className="logo" />
            <div className="login-container">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Email"
                        />
                    </div>
                    <div className="input-group password-group">
                        <input
                            type={showPassword ? "text" : "password"} // 비밀번호 표시 여부에 따라 type 변경
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Password"
                        />
                        <span
                            className="password-toggle"
                            onClick={() => setShowPassword(!showPassword)} // 클릭 시 상태 변경
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                    </div>
                    <button type="submit" className="login-button">Sign In</button>
                </form>
                <div className="separator">
                    <p>OR</p>
                </div>
                <div className="signup-link">
                    <span className="signup-question">Don't have an account?</span>{" "}
                    <Link to="/imops-platform/user/signup">Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;