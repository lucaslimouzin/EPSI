import React from "react"
function Login(){
    return(
        <div className="d-flex justify-content-center align-items-center container">
            <div className="bg-light p-5 rounded-lg">
                <form action="/login" method="POST">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="password"/>
                    </div>
                    <button className="submit-btn" type="submit">Login</button>
                    <button className="submit-btn" type="submit">Signup</button>
        
                </form>
            </div>
        </div>
    )
}

export default Login