
export default function Login() {
    return (
        <main className="form-signin w-50 m-auto py-5">
            <form action="/login" method="POST">
                <h1 className="h3 mb-3 fw-normal text-center">Entrar</h1>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="btn btn-primary w-100 py-2 my-3 m-auto" type="submit">Sign in</button>
            </form>
        </main>
    )
}