import { useState } from 'react';
import RsvpForm from './pages/RsvpPage'; // Renamed import
import Background from './components/Background';

// TopBar Component
function TopBar({ onNavClick }) {
  const navButtonBaseStyle = "text-white hover:text-teal-200 transition duration-150 ease-in-out font-medium text-sm sm:text-base flex items-center space-x-2"; // emerald-200 to teal-200

  return (
    <nav className="bg-teal-700 p-4 shadow-md sticky top-0 z-50 w-full"> {/* bg-emerald-700 to bg-teal-700 */}
      <ul className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8">
        <li>
          <button 
            onClick={() => onNavClick('rsvp')}
            className={navButtonBaseStyle}
          >
            <span role="img" aria-label="RSVP icon">💌</span>
            <span>RSVP</span>
          </button>
        </li>
        <li>
          <button 
            onClick={() => onNavClick('venue')}
            className={navButtonBaseStyle}
          >
            <span role="img" aria-label="Venue icon">📍</span>
            <span>Venue Details <span className="text-xs opacity-70">(Coming Soon)</span></span>
          </button>
        </li>
        <li>
          <button 
            onClick={() => onNavClick('kerala')}
            className={navButtonBaseStyle}
          >
            <span role="img" aria-label="Trip icon">✈️</span>
            <span>Trip to Kerala <span className="text-xs opacity-70">(Coming Soon)</span></span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

// Main App component
function App() {
  const [activeView, setActiveView] = useState('canva'); // 'canva', 'rsvp', 'venue', 'kerala'

  const handleNavClick = (view) => {
    setActiveView(view);
  };

  return (
    <Background>
      {/* This div ensures TopBar and main content are stacked vertically */}
      <div className="flex flex-col w-full"> {/* Added w-full here */}
        <TopBar onNavClick={handleNavClick} />
        {/* Main content area - starts below TopBar due to pt-14. min-h fills remaining viewport. */}
        <main className="flex flex-col items-center justify-start w-full pt-14 pb-8 px-6 text-center min-h-[calc(100vh-theme(spacing.14))]">
          {activeView === 'canva' && (
            <>
              {/* This h1 was moved here from inside the card below */}
              <h1 className="text-3xl sm:text-4xl font-bold text-teal-800 mb-6 sm:mb-8"> {/* text-emerald-800 to text-teal-800 */}
                Léa and Love's Wedding!
              </h1>
              <div className="bg-white bg-opacity-90 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-gray-300 max-w-md w-full">
                <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '177.7778%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
                  <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
                    src="https://www.canva.com/design/DAGncb6xKys/uMe7OEMFa8gvJ9lBSo7GmQ/view?embed" allowFullScreen="allowfullscreen" allow="fullscreen">
                  </iframe>
                </div>
              </div>
            </>
          )}

          {activeView === 'rsvp' && (
            <RsvpForm />
          )}

          {activeView === 'venue' && (
            <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl border border-gray-300 max-w-md w-full">
              <h2 className="text-2xl font-bold text-teal-800">Venue Details</h2> {/* text-emerald-800 to text-teal-800 */}
              <p className="mt-4 text-gray-700">Coming soon...</p>
            </div>
          )}

          {activeView === 'kerala' && (
            <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl border border-gray-300 max-w-md w-full">
              <h2 className="text-2xl font-bold text-teal-800">Trip to Kerala</h2> {/* text-emerald-800 to text-teal-800 */}
              <p className="mt-4 text-gray-700">Coming soon...</p>
            </div>
          )}
        </main>
      </div>
    </Background>
  );
}

export default App;