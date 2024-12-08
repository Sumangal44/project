import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { FixedDepositProvider } from './context/FixedDepositContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import ExplorePage from './pages/ExporePage';
import ProfilePage from './pages/ProfilePage';
import PWABadge from './PWABadge';
import { dark } from '@clerk/themes'

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey} appearance={{
      baseTheme: dark,
    }}>
      <FixedDepositProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </main>
            <Footer />
            <PWABadge />
          </div>
        </Router>
      </FixedDepositProvider>
    </ClerkProvider>
  );
}

export default App;

