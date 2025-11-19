import React from 'react'

function LoginForm() {
  return (
    <div className="login-card">
      <div className="login-header">
        <div className="brand">
          <span className="brand-mark">✈️</span>
          <span className="brand-name">Voyage</span>
        </div>
        <p className="tagline">Sign in to plan your next journey</p>
      </div>

      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <label className="field">
          <span className="field-label">Email</span>
          <input
            className="input"
            type="email"
            placeholder="you@example.com"
            required
          />
        </label>

        <label className="field">
          <span className="field-label">Password</span>
          <input
            className="input"
            type="password"
            placeholder="••••••••"
            required
          />
        </label>

        <div className="actions">
          <label className="remember">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <a href="#" className="link">Forgot password?</a>
        </div>

        <button className="btn-primary" type="submit">Sign in</button>

        <div className="divider">
          <span>or</span>
        </div>

        <button className="btn-ghost" type="button">Continue as guest</button>
      </form>
    </div>
  )
}

export default LoginForm
