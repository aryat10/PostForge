export default function LoginPage() {
  return (
    <div className="login-page">
      <form className="login-form" action="">
        <h2 className="form-heading">Welcome Back to Post Forge</h2>
        <p className="form-subtext">Let's spread your post/blog again!</p>
        <input type="text" className="form-input" placeholder="Username" />
        <input type="password" className="form-input" placeholder="Password" />
        <button className="form-button">Log In</button>
      </form>
    </div>
  );
}
