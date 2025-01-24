import React, { useState } from 'react';

const SignIn: React.FC = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (isRegistering) {
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
        }
    };

    function loginningIn(){
        fetch('http://localhost:3002/user/'+login+'/'+password)
            .then(res => res.json())
            .then((user) => {
                if(user.length === 0){
                    alert('Wrong login or password');
                }
                else{
                    localStorage.setItem("login", user[0].username);
                }
                
            })
    }

    function registeringIn(){
        fetch('/register', {
            body: JSON.stringify({
                login,
                password
            })
        })
    }



    return (
        <div className="auth-container">
            <h2>{isRegistering ? 'Register' : 'Sign In'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Login:</label>
                    <input
                        type="login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Hasłow:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {isRegistering && (
                    <div>
                        <label>Powtórz hasło:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                )}
                <button type="submit" onClick={() => {

                    if(isRegistering){
                        if (password !== confirmPassword) {
                            alert('Passwords do not match');
                            return;
                        }
                        registeringIn();
                    }
                    else{
                        loginningIn();
                    }
                }}>{isRegistering ? 'Register' : 'Sign In'}</button>
            </form>
            <button onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? 'Already have an account? Sign In' : 'Don\'t have an account? Register'}
            </button>
        </div>
    );
};

export default SignIn;