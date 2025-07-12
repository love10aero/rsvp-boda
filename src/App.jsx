import { useState } from 'react';
import RsvpForm from './pages/RsvpPage'; // Renamed import
import VenuePage from './pages/VenuePage';
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
            <span>Venue Details</span>
          </button>
        </li>
        <li>
          <button 
            onClick={() => onNavClick('kerala')}
            className={navButtonBaseStyle}
          >
            <span role="img" aria-label="Trip icon">✈️</span>
            <span>Post-Wedding Trip</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

// Main App component
function App() {
  const [activeView, setActiveView] = useState('canva'); // 'canva', 'rsvp', 'venue', 'kerala'
  const [keralaLang, setKeralaLang] = useState('en'); // Language state for Kerala section
  const [showFlightModal, setShowFlightModal] = useState(false);

  const translations = {
    en: {
      keralaTripTitle: "Post-Wedding Trip",
      keralaTripTimeline: [
        {
          icon: "💍",
          title: "Wedding in Punjab, Northwest India",
          date: "11 January 2026",
          description: "Celebrate the wedding in Punjab."
        },
        {
          icon: "✈️",
          title: "Flight to Kerala, South India",
          date: "13 January 2026",
          description: (
            <>
              Fly from Amritsar (ATQ) to Cochin International Airport (COK), Kerala. 
              <button type="button" onClick={() => setShowFlightModal(true)} className="text-teal-700 underline ml-1">See flight details</button>.
              Spend one night in Cochin to rest before the road to the mountains.
            </>
          )
        },
        {
          icon: "🏞️",
          title: "Munnar – Tea Mountains",
          date: "14–16 January 2026",
          description: "2 days in Munnar: Visit Kolukkumalai Tea Estate (the highest tea plantation in the world), explore lush landscapes, and discover the KDHP Tea Museum.",
          image: "/munnar.jpg"
        },
        {
          icon: "🏖️",
          title: "Marari Beach – Relax by the Sea",
          date: "16–18 January 2026",
          description: "2 days at Marari Beach: Relax on pristine white sand beaches, enjoy beachside activities, and unwind by the Arabian Sea.",
          image: "/marari.jpeg"
        },
        {
          icon: "🚤",
          title: "Alappuzha (Alleppey) – Backwaters",
          date: "18 January 2026",
          description: "Day cruise in Alleppey: Cruise on a traditional houseboat, observe village life along the canals, and enjoy Kerala-style meals aboard.",
          image: "/allepey.jpg"
        },
        {
          icon: "🏨",
          title: "Airport Hotel – Final Night",
          date: "18–19 January 2026",
          description: "Stay at a hotel near Cochin International Airport for convenience before departure."
        },
        {
          icon: "🛬",
          title: "Return",
          date: "19 January 2026",
          description: "End of the post-wedding trip. Take your return flight from Cochin International Airport (COK)."
        }
      ],
      keralaTripSummary: "We will take care of logistics and trip organization (ground transport, accommodation, activities). Each guest covers all their own expenses (flights, accommodation, meals, transport, etc.), but we'll make everything easy and affordable!"
    },
    fr: {
      keralaTripTitle: "Voyage dans le Kerala, Sud de l'Inde",
      keralaTripTimeline: [
        {
          icon: "💍",
          title: "Pendjab, Nord-Ouest de l'Inde",
          date: "11 janvier 2026",
          description: "Mariage de Léa et Love"
        },
        {
          icon: "✈️",
          title: "Départ pour la région du Kerala, Sud de l'Inde",
          date: "13 janvier 2026",
          description: (
            <>
              Vol depuis Amritsar (ATQ) vers l'aéroport international de Cochin (COK), Kerala. 
              <button type="button" onClick={() => setShowFlightModal(true)} className="text-teal-700 underline ml-1">Voir les détails du vol</button>.
              Nuit à Cochin pour se reposer avant la route vers les montagnes.
            </>
          )
        },
        {
          icon: "🏞️",
          title: "Munnar – Montagnes du thé",
          date: "14–16 janvier 2026",
          description: "2 jours à Munnar : Repos, visite de Kolukkumalai Tea Estate (la plus haute plantation de thé au monde), balades, exploration des paysages verdoyants et visite du musée du thé KDHP.",
          image: "/munnar.jpg"
        },
        {
          icon: "🏖️",
          title: "Plage de Marari – Détente au bord de mer",
          date: "16–18 janvier 2026",
          description: "2 jours à la plage de Marari : Détente sur des plages de sable blanc immaculées, activités de plage, et relaxation au bord de la mer d'Arabie.",
          image: "/marari-beach.jpg"
        },
        {
          icon: "🚤",
          title: "Alappuzha (Alleppey) – Backwaters",
          date: "18 janvier 2026",
          description: "Croisière d'une journée à Alleppey : Croisière dans les canaux backwaters à bord d'une houseboat traditionnelle, observation de la vie locale au fil de l'eau, et découverte des spécialités culinaires du Kerala préparées par le chef à bord.",
          image: "/allepey.jpg"
        },
        {
          icon: "🏨",
          title: "Hôtel près de l'aéroport – Dernière nuit",
          date: "18–19 janvier 2026",
          description: "Nuit dans un hôtel près de l'aéroport international de Cochin pour faciliter le départ."
        },
        {
          icon: "🛬",
          title: "Retour",
          date: "19 janvier 2026",
          description: "Fin du voyage post-mariage. Vol retour depuis l'aéroport international de Cochin (COK)."
        }
      ],
      keralaTripSummary: "Nous nous occuperont de la logistique et de l'organisation du voyage (transport terrestre, hébergement, activités) - c'est pour cela que votre confirmation doit être faite d'ici fin juin 2025 :). Chaque invité prend en charge tous ses frais (vols, hébergement, repas, transport, etc.), mais nous veillerons à ce que tout soit facile et abordable !"
    },
    es: {
      keralaTripTitle: "Viaje a Kerala, Sur de India",
      keralaTripTimeline: [
        {
          icon: "💍",
          title: "Punjab, Noroeste de India",
          date: "11 enero 2026",
          description: "¡Celebramos la boda!"
        },
        {
          icon: "✈️",
          title: "Vuelo a Kerala, Sur de India",
          date: "13 enero 2026",
          description: (
            <>
              Vuelo desde Amritsar (ATQ) al Aeropuerto Internacional de Cochin (COK), Kerala. 
              <button type="button" onClick={() => setShowFlightModal(true)} className="text-teal-700 underline ml-1">Ver detalles del vuelo</button>.
              Pasamos una noche en Cochin para descansar antes de ir a las montañas.
            </>
          )
        },
        {
          icon: "🏞️",
          title: "Munnar – Montañas del té",
          date: "14–16 enero 2026",
          description: "2 días en Munnar: Visita Kolukkumalai Tea Estate (la plantación de té más alta del mundo), explora paisajes y flora local, y visita el Museo del Té KDHP.",
          image: "/munnar.jpg"
        },
        {
          icon: "🏖️",
          title: "Playa de Marari – Relax junto al mar",
          date: "16–18 enero 2026",
          description: "2 días en la playa de Marari: Relájate en playas de arena blanca prístina, disfruta de actividades de playa y descansa junto al Mar Arábigo.",
          image: "/marari-beach.jpg"
        },
        {
          icon: "🚤",
          title: "Alappuzha (Alleppey) – Remansos",
          date: "18 enero 2026",
          description: "Crucero de un día en Alleppey: Crucero en casa flotante tradicional, observando la vida local junto a los canales y disfrutando de comidas típicas de Kerala a bordo.",
          image: "/allepey.jpg"
        },
        {
          icon: "🏨",
          title: "Hotel cerca del aeropuerto – Última noche",
          date: "18–19 enero 2026",
          description: "Noche en un hotel cerca del Aeropuerto Internacional de Cochin para mayor comodidad antes de la salida."
        },
        {
          icon: "🛬",
          title: "Regreso",
          date: "19 enero 2026",
          description: "Fin del viaje post-boda. Vuelo de regreso desde el Aeropuerto Internacional de Cochin (COK)."
        }
      ],
      keralaTripSummary: "Nos encargaremos de la logística y de la organización el viaje (transporte terrestre, alojamiento, actividades). Cada invitado cubre todos sus gastos (vuelos, alojamiento, comidas, transporte, etc.), ¡pero haremos que todo sea fácil y asequible!"
    }
  };

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
            <RsvpForm onNavClick={handleNavClick} />
          )}

          {activeView === 'venue' && (
            <VenuePage />
          )}

          {activeView === 'kerala' && (
            <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl border border-gray-300 max-w-2xl w-full">
              <div className="flex justify-end space-x-3 mb-4">
                <button
                  type="button"
                  onClick={() => setKeralaLang('en')}
                  className={`p-1 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 ${keralaLang === 'en' ? 'ring-2 ring-teal-500 opacity-100' : 'opacity-60 hover:opacity-100'}`}
                >
                  <span role="img" aria-label="English" className="text-2xl">🇬🇧</span>
                </button>
                <button
                  type="button"
                  onClick={() => setKeralaLang('fr')}
                  className={`p-1 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 ${keralaLang === 'fr' ? 'ring-2 ring-teal-500 opacity-100' : 'opacity-60 hover:opacity-100'}`}
                >
                  <span role="img" aria-label="French" className="text-2xl">🇫🇷</span>
                </button>
                <button
                  type="button"
                  onClick={() => setKeralaLang('es')}
                  className={`p-1 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 ${keralaLang === 'es' ? 'ring-2 ring-teal-500 opacity-100' : 'opacity-60 hover:opacity-100'}`}
                >
                  <span role="img" aria-label="Spanish" className="text-2xl">🇪🇸</span>
                </button>
              </div>
              <h2 className="text-2xl font-bold text-teal-800 mb-8">{translations[keralaLang].keralaTripTitle}</h2>
              <ol className="space-y-8">
                {translations[keralaLang].keralaTripTimeline.map((step, idx) => (
                  <li key={idx} className="flex flex-col md:flex-row items-center md:items-center md:space-x-6">
                    <div className="flex flex-col items-center md:items-center w-full md:w-40 mb-4 md:mb-0">
                      <span className="text-4xl mb-2">{step.icon}</span>
                      <span className="text-teal-700 font-semibold text-lg text-center">{step.title}</span>
                      <span className="text-gray-500 text-sm text-center">{step.date}</span>
                    </div>
                    <div className="flex-1 w-full flex flex-col items-center">
                      {step.image && (
                        <img src={step.image} alt={step.title} className="rounded-xl shadow-md mb-2 w-full max-w-xs mx-auto" style={{objectFit:'cover'}} />
                      )}
                      <p className="text-teal-800 text-base text-center whitespace-pre-line">{step.description}</p>
                    </div>
                    {idx < translations[keralaLang].keralaTripTimeline.length - 1 && (
                      <div className="hidden md:block absolute left-1/2 top-full w-1 h-8 bg-teal-200 rounded-full" style={{transform: 'translateX(-50%)'}}></div>
                    )}
                  </li>
                ))}
              </ol>
              {/* Cost breakdown section (after itinerary) */}
              <div className="mt-10 mb-8 bg-white border border-teal-200 rounded-xl shadow p-6 max-w-md mx-auto">
                <h3 className="text-lg font-bold text-teal-800 mb-4 flex items-center justify-center gap-2">
                  <span role="img" aria-label="Money">💶</span>
                  {keralaLang === 'fr' ? 'Coût estimé par personne' : keralaLang === 'es' ? 'Coste estimado por persona' : 'Estimated Cost per Person'}
                </h3>
                <ul className="divide-y divide-teal-100 text-teal-700 text-base mb-4">
                  <li className="flex items-center justify-between py-2">
                    <span className="flex items-center gap-2 text-left"><span role="img" aria-label="Flight">✈️</span>{keralaLang === 'fr' ? 'Vol Amritsar → Cochin' : keralaLang === 'es' ? 'Vuelo Amritsar → Cochin' : 'Flight Amritsar → Cochin'}</span>
                    <span className="font-semibold">150€</span>
                  </li>
                  <li className="flex items-center justify-between py-2">
                    <span className="flex items-center gap-2 text-left"><span role="img" aria-label="Bus">🚌</span>{keralaLang === 'fr' ? 'Transport terrestre (bus partagé)' : keralaLang === 'es' ? 'Transporte terrestre (bus compartido)' : 'Ground transport (shared bus)'}</span>
                    <span className="font-semibold">50€</span>
                  </li>
                  <li className="flex items-center justify-between py-2">
                    <span className="flex items-center gap-2 text-left"><span role="img" aria-label="Hotel">🏨</span>{keralaLang === 'fr' ? 'Hébergements (toutes les étapes)' : keralaLang === 'es' ? 'Alojamiento (todas las etapas)' : 'Accommodation (all places)'}</span>
                    <span className="font-semibold">200€</span>
                  </li>
                  <li className="flex items-center justify-between py-2">
                    <span className="flex items-center gap-2 text-left"><span role="img" aria-label="Meal">🍛</span>{keralaLang === 'fr' ? 'Repas (7 jours)' : keralaLang === 'es' ? 'Comidas (7 días)' : 'Meals (7 days)'}</span>
                    <span className="font-semibold">100€</span>
                  </li>
                </ul>
                <div className="text-xl font-extrabold text-teal-900 bg-teal-100 rounded-lg py-2 px-4 mb-2 flex items-center justify-center gap-2">
                  <span role="img" aria-label="Total">🧮</span>
                  {keralaLang === 'fr' ? 'Total estimé' : keralaLang === 'es' ? 'Total estimado' : 'Estimated Total'}: <span className="ml-2">500€</span>
                </div>
              </div>
              <div className="mt-10 bg-teal-50 border border-teal-100 rounded-lg p-4 text-teal-700 text-base text-center">
                {translations[keralaLang].keralaTripSummary}
              </div>
            </div>
          )}

          {showFlightModal && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full text-center relative">
        <button onClick={() => setShowFlightModal(false)} className="absolute top-2 right-2 text-gray-400 hover:text-teal-600 text-2xl font-bold">&times;</button>
        <img src="/flight-details.png" alt="Flight details" className="w-full rounded-lg mb-2" />
        <div className="text-sm text-teal-700 mt-2">{keralaLang === 'fr' ? 'Détails du vol Amritsar → Kerala' : keralaLang === 'es' ? 'Detalles del vuelo Amritsar → Kerala' : 'Flight details Amritsar → Kerala'}</div>
      </div>
    </div>
  )}
        </main>
      </div>
    </Background>
  );
}

export default App;
