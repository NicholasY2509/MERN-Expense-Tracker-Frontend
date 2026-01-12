
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Home from './pages/dashboard/home'
import Income from './pages/dashboard/income'
import Expense from './pages/dashboard/expense'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/dashboard/income" element={<Income />} />
          <Route path="/dashboard/expense" element={<Expense />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

const Root = () => {
  const isAuthenticaed = !!localStorage.getItem('token');

  return (
    <Navigate to={isAuthenticaed ? "/dashboard" : "/login"} replace />
  )
}