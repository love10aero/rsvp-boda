import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RsvpPage from './pages/RsvpPage';
import Background from './components/Background';

// HomePage Component
function HomePage() {
  return (
    <Background>
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
        <div className="bg-white bg-opacity-90 p-8 sm:p-10 md:p-12 rounded-2xl shadow-xl border border-gray-300 max-w-md w-full">
          <h1 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6 sm:mb-8">
            Welcome!
          </h1>
          <nav>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/rsvp" 
                  className="block w-full py-3 px-4 text-lg sm:text-xl text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition duration-150 ease-in-out font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
                >
                  Go to RSVP Page
                </Link>
              </li>
              {/* You can add links to other pages here in the future */}
            </ul>
          </nav>
        </div>
      </div>
    </Background>
  );
}

// Main App component for routing
function App() {
  return (
    <BrowserRouter basename="/rsvp-boda">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rsvp" element={<RsvpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;