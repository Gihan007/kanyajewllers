import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'

class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (!this.state.error) return this.props.children
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24, textAlign: 'center', background: '#faf6ee', color: '#2f4237', fontFamily: 'Georgia, serif' }}>
        <p style={{ letterSpacing: '0.3em', fontSize: 26 }}>K A N Y Ã</p>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#87806f' }}>Sorry, something went wrong on this page.</p>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#87806f', maxWidth: 480 }}>{String(this.state.error?.message || this.state.error)}</p>
        <button onClick={() => { try { localStorage.removeItem('kanya-cart') } catch { /* ignore */ } window.location.href = '/' }} style={{ marginTop: 16, padding: '10px 24px', border: '1px solid #2f4237', background: 'transparent', color: '#2f4237', cursor: 'pointer' }}>
          Back to home
        </button>
      </div>
    )
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
