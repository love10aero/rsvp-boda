import { useState } from 'react'

const translations = {
  es: {
    rsvpTitle: "RSVP – ¡Confirma tu asistencia!",
    rsvpSubtitle: "Esperamos celebrarlo contigo 💍",
    attendingQuestion: "¿Asistirás a la boda?",
    yes: "Sí",
    no: "No",
    plusOneQuestion: "¿Traerás un acompañante (+1)?",
    guestDetailsTitle: "Nombre de los Asistentes",
    mainGuestNameLabel: "Tu nombre completo",
    mainGuestNamePlaceholder: "Escribe tu nombre completo",
    plusOneNameLabel: "Nombre completo del acompañante",
    plusOneNamePlaceholder: "Escribe el nombre de tu acompañante",
    keralaQuestion: "¿Te apuntas al viaje posterior a Kerala (1 semana)?",
    keralaDetails: "Detalles",
    nextButton: "Siguiente",
    backButton: "Atrás",
    submitButton: "Enviar RSVP",
    thankYouMessageTitle: "¡Gracias por tu respuesta! 💌",
    thankYouSeeYou: "¡Nos vemos en la celebración!",
    thankYouSummaryTitle: "Resumen de tu RSVP:",
    summaryAttending: "Asistencia:",
    summaryPlusOne: "Lleva acompañante:",
    summaryMainGuestName: "Invitado principal:",
    summaryPlusOneGuestName: "Nombre del acompañante:",
    summaryKeralaTrip: "Viaje a Kerala:",
    summaryKeralaYes: "Sí",
    summaryKeralaNo: "No",
    thankYouRegret: "Lamentamos que no puedas acompañarnos. ¡Gracias por responder!",
    altPareja: "Pareja",
    keralaTripTitle: "VIAJE POST-BODA: Descubre Kerala",
    keralaTripDescription: `Después de la boda en Punjab, extiende la magia con una semana explorando la exuberante belleza de Kerala: desde montañas cubiertas de niebla hasta los tranquilos remansos.

✈️ Salida – 13 de enero de 2026
El 13 de enero, acompáñanos rumbo al sur, al estado tropical de Kerala. El punto de partida es el Aeropuerto Internacional de Cochin (COK), a unas 3 horas en coche de Munnar.

🏞️ Munnar – 2 días en las montañas del té
En las colinas de los Ghats Occidentales, Munnar es famosa por sus paisajes y plantaciones de té. Destacados:
- Visita a Kolukkumalai Tea Estate, la plantación de té más alta del mundo.
- Recorridos por paisajes y flora local.
- Descubre el Museo del Té KDHP y la historia del té en Kerala.

🚤 Alappuzha (Alleppey) – 2 días en los remansos
Después de Munnar, iremos a Alleppey —la “Venecia del Este”— para un crucero relajante:
- Navega en una casa flotante tradicional por los remansos.
- Observa la vida local junto al agua.
- Prueba comidas caseras al estilo Kerala a bordo.
Alleppey está a 1,5 horas del aeropuerto de Cochin.

🛬 Regreso – 19 de enero de 2026
El viaje termina en Cochin, desde donde puedes tomar tu vuelo de regreso.

Este viaje es una oportunidad para compartir más tiempo juntos en un entorno precioso. Léa y Love se encargarán de la logística —transporte, alojamiento y actividades— para que solo tengas que disfrutar.

Cada invitado cubrirá sus gastos de viaje, pero nos aseguraremos de que todo sea fácil de organizar y lo más asequible posible.`,
    keralaTripLang: "Idioma",
    phoneLabel: "Tu número de teléfono (WhatsApp)",
    phoneDescription: "Usaremos este número para enviarte información práctica sobre la boda por WhatsApp.",
    phonePlaceholder: "Ejemplo: +34 600 123 456",
    phoneRequired: "Por favor, introduce tu número de teléfono.",
  },
  fr: {
    rsvpTitle: "RSVP – Confirme ta présence !",
    rsvpSubtitle: "Nous avons hâte de célébrer ce moment avec vous 💍",
    attendingQuestion: "Seras-tu présent/e à notre mariage ?",
    yes: "Oui",
    no: "Non",
    plusOneQuestion: "Viendras-tu accompagné/e (+1) ?",
    guestDetailsTitle: "Noms des invités",
    mainGuestNameLabel: "Ton nom complet",
    mainGuestNamePlaceholder: "Entre ton nom complet",
    plusOneNameLabel: "Nom complet de ton +1",
    plusOneNamePlaceholder: "Entre le nom de ton accompagnant(e)",
    keralaQuestion: "Es-tu intéressé pour te joindre au voyage prévu dans le Kerala après le mariage (1 semaine) ?",
    keralaDetails: "Détails",
    nextButton: "Suivant",
    backButton: "Retour",
    submitButton: "Envoyer le RSVP",
    thankYouMessageTitle: "Merci pour ta réponse ! 💌",
    thankYouSeeYou: "Nous avons hâte de vous retrouver pour cette belle célébration !",
    thankYouSummaryTitle: "Résumé de ta réponse :",
    summaryAttending: "Présence :",
    summaryPlusOne: "Sera accompagné(e) :",
    summaryMainGuestName: "Invité(e) principal(e) :",
    summaryPlusOneGuestName: "Nom du +1 :",
    summaryKeralaTrip: "Voyage dans le Kerala :",
    summaryKeralaYes: "Oui",
    summaryKeralaNo: "Non",
    thankYouRegret: "Nous sommes désolés que vous ne puissiez pas vous joindre à nous. Merci d'avoir répondu !",
    altPareja: "Couple",
    keralaTripTitle: "VOYAGE POST-MARIAGE : Découvrez le Kerala",
    keralaTripDescription: `Après la fête au Pendjab, prolongez la magie avec une semaine à travers la beauté luxuriante du Kerala — des montagnes brumeuses aux paisibles backwaters.

✈️ Départ – 13 janvier 2026
Le 13 janvier, rejoignez-nous pour descendre dans l’État tropical du Kerala. Le point de départ est l’aéroport international de Cochin (COK), à environ 3 heures de route de Munnar.

🏞️ Munnar – 2 jours dans les montagnes du thé
Au cœur des Ghâts occidentaux, Munnar est célèbre pour ses collines et plantations de thé. Points forts :
- Visite de Kolukkumalai Tea Estate, la plus haute plantation de thé au monde.
- Balades dans les paysages verdoyants et découverte de la flore locale.
- Découverte du musée du thé KDHP et de l’histoire du thé au Kerala.

🚤 Alappuzha (Alleppey) – 2 jours sur les backwaters
Après Munnar, direction Alleppey — la “Venise de l’Est” — pour une croisière relaxante :
- Navigation sur une houseboat traditionnelle dans les backwaters.
- Observer la vie locale au fil de l’eau.
- Déguster des plats maison typiques du Kerala à bord.
Alleppey est à 1h30 de l’aéroport de Cochin.

🛬 Retour – 19 janvier 2026
Le voyage se termine à Cochin, d’où vous pourrez prendre votre vol retour.

Ce voyage post-mariage est une belle occasion de partager encore plus de moments ensemble. Léa et Love s’occupent de toute la logistique — transport, hébergement, activités — pour que vous puissiez simplement profiter.

Chaque invité prend en charge ses frais de voyage, mais nous veillerons à ce que tout soit facile à organiser et aussi abordable que possible.`,
    keralaTripLang: "Langue",
    phoneLabel: "Ton numéro de téléphone (WhatsApp)",
    phoneDescription: "Nous utiliserons ce numéro pour t’envoyer des infos pratiques sur le mariage via WhatsApp.",
    phonePlaceholder: "Exemple : +33 6 12 34 56 78",
    phoneRequired: "Merci d'indiquer ton numéro de téléphone.",
  },
  en: {
    keralaTripTitle: "POST-WEDDING TRIP: Discover Kerala",
    keralaTripDescription: `After the wedding celebrations in Punjab, extend the magic with a one-week journey through the lush beauty of Kerala — from misty mountains to peaceful backwaters.

✈️ Departure – 13 January 2026
On 13 January, join us as we head south to the tropical state of Kerala. The starting point is Cochin International Airport (COK), located about 3 hours by car from Munnar.

🏞️ Munnar – 2 Days in the Tea Mountains
Nestled in the Western Ghats, Munnar is known for its scenic hills and endless tea plantations. Highlights include:
- Visiting Kolukkumalai Tea Estate, the highest tea plantation in the world.
- Exploring lush landscapes and local flora.
- Discovering the KDHP Tea Museum and learning the story of tea in Kerala.

🚤 Alappuzha (Alleppey) – 2 Days on the Backwaters
After Munnar, we’ll head to Alleppey — the “Venice of the East” — for a relaxing cruise:
- Sailing on a traditional houseboat through the calm backwaters.
- Watching village life unfold by the water.
- Tasting homemade Kerala-style meals aboard.
Alleppey is about 1.5 hours from Cochin Airport.

🛬 Return – 19 January 2026
The journey will end in Cochin, from where you can take your flight home.

This post-wedding trip is a wonderful opportunity to spend more time together in a beautiful setting. Léa and Love will happily take care of all the logistics — transport, accommodation, and activities — so that you can simply enjoy the journey.

Each guest will cover their own travel expenses, but we’ll make sure everything is easy to organise and as affordable as possible.`,
    keralaTripLang: "Language",
    phoneLabel: "Your phone number (WhatsApp)",
    phoneDescription: "We’ll use this number to send you practical information about the wedding via WhatsApp.",
    phonePlaceholder: "e.g. +44 7123 456789",
    phoneRequired: "Please enter your phone number.",
  }
};

export default function RsvpForm({ onNavClick }) {
  const [form, setForm] = useState({
    attending: '',
    plusOne: '',
    mainGuestName: '',
    plusOneName: '',
    kerala: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [language, setLanguage] = useState('es');
  const [showModal, setShowModal] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const t = (key) => translations[language][key] || key;

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Steps logic
  let steps = [1];
  if (form.attending === 'yes') {
    steps = [1, 2, 3, 4, 5];
  } else if (form.attending === 'no') {
    steps = [1, 3]; // Only ask name, then submit
  }

  // Find the current step index in the steps array
  const currentStepIndex = steps.indexOf(currentStep);
  const goToNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStep(steps[currentStepIndex + 1]);
    }
  };
  const goToPrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStep(steps[currentStepIndex - 1]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (form.attending === 'yes' && !form.phone.trim()) {
      setPhoneError(t('phoneRequired'));
      setCurrentStep(5);
      return;
    }
    setPhoneError('');

    setIsSubmitting(true);

    const today = new Date();
    const rsvpDate = today.toISOString().split('T')[0];
    let recordsToSubmit = [];

    if (form.attending === 'yes') {
      recordsToSubmit.push({
        fields: {
          "Attendee Name": form.mainGuestName,
          "RSVP Date": rsvpDate,
          assist: true,
          "plus one": form.plusOne === 'yes',
          kerala: form.kerala === 'yes',
          phonenumber: form.phone
        }
      });

      if (form.plusOne === 'yes' && form.plusOneName) {
        recordsToSubmit.push({
          fields: {
            "Attendee Name": form.plusOneName,
            "RSVP Date": rsvpDate,
            assist: true,
            "plus one": true,
            kerala: form.kerala === 'yes',
            phonenumber: form.phone
          }
        });
      }
    } else {
      recordsToSubmit.push({
        fields: {
          "Attendee Name": form.mainGuestName,
          "RSVP Date": rsvpDate,
          assist: false,
          "plus one": false,
          kerala: false,
          phonenumber: form.phone
        }
      });
    }

    if (recordsToSubmit.length === 0) {
      console.warn("No records to submit, check form logic.");
      setSubmitted(true);
      return;
    }

    const airtableData = { records: recordsToSubmit };

    try {
      const response = await fetch('https://api.airtable.com/v0/appYGZJIDZEa2YrY5/RSVPs', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(airtableData)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error('Error submitting to Airtable:', response.status, errorData);
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Network error submitting to Airtable:', error);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white bg-opacity-95 px-10 py-8 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-300 relative max-w-lg w-full">
        <h2 className="text-3xl text-center text-teal-700 relative">
          <span className="relative z-10">{t('thankYouMessageTitle')}</span>
          <span className="absolute bottom-1 left-0 w-full h-1 bg-gray-200 opacity-50"></span>
        </h2>

        {form.attending === 'yes' ? (
          <div className="mt-5">
            <div className="flex justify-center mb-4">              <img
              src={`${import.meta.env.BASE_URL}tyga.png`}
              alt="Tyga the cat"
              className="w-40 h-auto object-contain rounded-lg shadow-md"
              style={{ background: '#fff', maxHeight: '180px' }}
            />
            </div>
            <p className="text-center text-teal-600 text-lg font-medium">{t('thankYouSeeYou')}</p>

            <div className="mt-6 bg-teal-50 border border-teal-100 rounded-lg p-4">
              <h3 className="text-md font-medium text-teal-800 mb-2">{t('thankYouSummaryTitle')}</h3>
              <ul className="space-y-2 text-teal-700">
                <li>
                  <strong>{t('summaryAttending')}</strong> {form.attending === 'yes' ? t('yes') : t('no')}
                </li>
                <li>
                  <strong>{t('summaryPlusOne')}</strong> {form.plusOne === 'yes' ? t('yes') : t('no')}
                </li>
                <li>
                  <strong>{t('summaryMainGuestName')}</strong> {form.mainGuestName}
                </li>
                {form.plusOne === 'yes' && form.plusOneName && (
                  <li>
                    <strong>{t('summaryPlusOneGuestName')}</strong> {form.plusOneName}
                  </li>
                )}
                <li>
                  <strong>{t('summaryKeralaTrip')}</strong>{' '}
                  {form.kerala === 'yes' ? t('summaryKeralaYes') : form.kerala === 'no' ? t('summaryKeralaNo') : ''}
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <p className="text-center text-teal-600 mt-3">{t('thankYouRegret')}</p>
        )}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white bg-opacity-95 rounded-2xl shadow-xl w-full max-w-5xl border border-gray-300 flex flex-col md:flex-row overflow-hidden"
    >
      <div className="w-full md:w-1/2 flex justify-center items-center p-4 sm:p-6 md:p-8 md:border-r border-gray-200">
        <img
          src={`${import.meta.env.BASE_URL}Moment romantique minimaliste en noir et blanc-Photoroom.png`}
          alt={t('altPareja')}
          className="w-full max-w-[240px] sm:max-w-xs md:max-w-full rounded-2xl shadow-lg object-cover max-h-[200px] sm:max-h-[250px] md:max-h-none"
          style={{
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
          }}
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-8 space-y-6">
        <div className="flex justify-end space-x-3 mb-4">
          <button
            type="button"
            onClick={() => toggleLanguage('es')}
            className={`p-1 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 ${
              language === 'es' ? 'ring-2 ring-teal-500 opacity-100' : 'opacity-60 hover:opacity-100'
            }`}
          >
            <span role="img" aria-label="Spanish Flag" className="text-2xl">
              🇪🇸
            </span>
          </button>
          <button
            type="button"
            onClick={() => toggleLanguage('fr')}
            className={`p-1 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 ${
              language === 'fr' ? 'ring-2 ring-teal-500 opacity-100' : 'opacity-60 hover:opacity-100'
            }`}
          >
            <span role="img" aria-label="French Flag" className="text-2xl">
              🇫🇷
            </span>
          </button>
        </div>

        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-teal-800 mb-2 relative inline-block">
            <span className="relative z-10">{t('rsvpTitle')}</span>
          </h1>
          <p className="text-teal-600 text-sm">{t('rsvpSubtitle')}</p>
        </div>

        <div className="flex justify-center space-x-2 mb-6">
          {steps.map((step) => (
            <div
              key={step}
              className={`w-3 h-3 rounded-full ${currentStep >= step ? 'bg-teal-600' : 'bg-teal-200'}`}
            ></div>
          ))}
        </div>

        {currentStep === 1 && (
          <>
            <div className="mb-4">
              <h2 className="text-xl sm:text-lg font-medium text-teal-800 mb-3">{t('attendingQuestion')}</h2>
              <div className="flex flex-col gap-3">
                <label className="block cursor-pointer">
                  <div
                    className={`flex items-center border rounded-lg p-3 ${
                      form.attending === 'yes'
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-teal-100 hover:bg-teal-50'
                    }`}
                  >
                    <span className="flex items-center justify-center w-6 h-6 mr-3 rounded-md bg-teal-100 text-teal-800 font-medium border border-teal-300">
                      A
                    </span>
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={form.attending === 'yes'}
                      onChange={handleChange}
                      className="sr-only"
                      required
                    />
                    <span className="text-teal-800 text-base sm:text-sm">{t('yes')}</span>
                  </div>
                </label>
                <label className="block cursor-pointer">
                  <div
                    className={`flex items-center border rounded-lg p-3 ${
                      form.attending === 'no'
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-teal-100 hover:bg-teal-50'
                    }`}
                  >
                    <span className="flex items-center justify-center w-6 h-6 mr-3 rounded-md bg-teal-100 text-teal-800 font-medium border border-teal-300">
                      B
                    </span>
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={form.attending === 'no'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="text-teal-800 text-base sm:text-sm">{t('no')}</span>
                  </div>
                </label>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="button"
                onClick={goToNextStep}
                disabled={!form.attending}
                className={`w-full py-3 rounded-lg transition font-medium border shadow-md ${
                  form.attending
                    ? 'bg-teal-600 hover:bg-teal-700 text-white border-teal-300'
                    : 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300'
                }`}
              >
                {t('nextButton')}
              </button>
            </div>
          </>
        )}

        {currentStep === 2 && form.attending === 'yes' && (
          <>
            <div className="mb-4">
              <h2 className="text-xl sm:text-lg font-medium text-teal-800 mb-3">{t('plusOneQuestion')}</h2>
              <div className="flex flex-col gap-3">
                <label className="block cursor-pointer">
                  <div
                    className={`flex items-center border rounded-lg p-3 ${
                      form.plusOne === 'yes'
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-teal-100 hover:bg-teal-50'
                    }`}
                  >
                    <span className="flex items-center justify-center w-6 h-6 mr-3 rounded-md bg-teal-100 text-teal-800 font-medium border border-teal-300">
                      A
                    </span>
                    <input
                      type="radio"
                      name="plusOne"
                      value="yes"
                      checked={form.plusOne === 'yes'}
                      onChange={handleChange}
                      className="sr-only"
                      required
                    />
                    <span className="text-teal-800 text-base sm:text-sm">{t('yes')}</span>
                  </div>
                </label>
                <label className="block cursor-pointer">
                  <div
                    className={`flex items-center border rounded-lg p-3 ${
                      form.plusOne === 'no'
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-teal-100 hover:bg-teal-50'
                    }`}
                  >
                    <span className="flex items-center justify-center w-6 h-6 mr-3 rounded-md bg-teal-100 text-teal-800 font-medium border border-teal-300">
                      B
                    </span>
                    <input
                      type="radio"
                      name="plusOne"
                      value="no"
                      checked={form.plusOne === 'no'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="text-teal-800 text-base sm:text-sm">{t('no')}</span>
                  </div>
                </label>
              </div>
            </div>
            <div className="mt-6 flex space-x-3">
              <button
                type="button"
                onClick={goToPrevStep}
                className="flex-1 bg-white border border-teal-300 hover:bg-gray-50 text-teal-700 py-3 rounded-lg transition font-medium shadow-sm"
              >
                {t('backButton')}
              </button>
              <button
                type="button"
                onClick={goToNextStep}
                disabled={!form.plusOne}
                className={`flex-1 py-3 rounded-lg transition font-medium border shadow-md ${
                  form.plusOne
                    ? 'bg-teal-600 hover:bg-teal-700 text-white border-teal-300'
                    : 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300'
                }`}
              >
                {t('nextButton')}
              </button>
            </div>
          </>
        )}

        {currentStep === 3 && (
          <>
            <div className="mb-4">
              <h2 className="text-xl sm:text-lg font-medium text-teal-800 mb-3">{t('guestDetailsTitle')}</h2>

              <div className="mb-4">
                <label htmlFor="mainGuestName" className="block text-sm font-medium text-teal-700 mb-1">
                  {t('mainGuestNameLabel')}
                </label>
                <input
                  type="text"
                  name="mainGuestName"
                  id="mainGuestName"
                  value={form.mainGuestName}
                  onChange={handleChange}
                  className="w-full p-3 border border-teal-200 rounded-lg focus:ring focus:ring-teal-200 focus:border-teal-400 outline-none transition text-base sm:text-sm"
                  placeholder={t('mainGuestNamePlaceholder')}
                  required
                />
              </div>

              {form.plusOne === 'yes' && (
                <div className="mb-4">
                  <label htmlFor="plusOneName" className="block text-sm font-medium text-teal-700 mb-1">
                    {t('plusOneNameLabel')}
                  </label>
                  <input
                    type="text"
                    name="plusOneName"
                    id="plusOneName"
                    value={form.plusOneName}
                    onChange={handleChange}
                    className="w-full p-3 border border-teal-200 rounded-lg focus:ring focus:ring-teal-200 focus:border-teal-400 outline-none transition text-base sm:text-sm"
                    placeholder={t('plusOneNamePlaceholder')}
                    required
                  />
                </div>
              )}
            </div>
            <div className="mt-6 flex space-x-3">
              <button
                type="button"
                onClick={goToPrevStep}
                className="flex-1 bg-white border border-teal-300 hover:bg-gray-50 text-teal-700 py-3 rounded-lg transition font-medium shadow-sm"
              >
                {t('backButton')}
              </button>
              {form.attending === 'no' ? (
                <button
                  type="submit"
                  disabled={!form.mainGuestName.trim() || isSubmitting}
                  className={`flex-1 py-3 rounded-lg transition font-medium border shadow-md ${
                    !form.mainGuestName.trim() || isSubmitting
                      ? 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300'
                      : 'bg-teal-600 hover:bg-teal-700 text-white border-teal-300'
                  }`}
                >
                  {isSubmitting ? (t('submitButton') === "Enviar RSVP" ? "Enviando..." : "Envoi en cours...") : t('submitButton')}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={goToNextStep}
                  disabled={!form.mainGuestName.trim() || (form.plusOne === 'yes' && !form.plusOneName.trim())}
                  className={`flex-1 py-3 rounded-lg transition font-medium border shadow-md ${
                    !form.mainGuestName.trim() || (form.plusOne === 'yes' && !form.plusOneName.trim())
                      ? 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300'
                      : 'bg-teal-600 hover:bg-teal-700 text-white border-teal-300'
                  }`}
                >
                  {t('nextButton')}
                </button>
              )}
            </div>
          </>
        )}

        {currentStep === 4 && form.attending === 'yes' && (
          <>
            <div className="mb-4">
              <h2 className="text-xl sm:text-lg font-medium text-teal-800 mb-3">{t('keralaQuestion')}</h2>
              <p className="text-teal-600 text-sm mb-2 cursor-pointer underline" onClick={() => setShowModal(true)}>{t('keralaDetails')}</p>
              {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                  <div className="bg-white rounded-xl shadow-lg p-6 max-w-xs w-full text-center">
                    <h3 className="text-lg font-bold text-teal-800 mb-2">{language === 'fr' ? 'Attention' : language === 'es' ? 'Atención' : 'Warning'}</h3>
                    <p className="mb-4 text-teal-700 text-sm">{language === 'fr' ? 'Si vous consultez les détails du voyage, votre progression dans le formulaire sera perdue.' : language === 'es' ? 'Si consultas los detalles del viaje, perderás el progreso del formulario.' : 'If you view trip details, your form progress will be lost.'}</p>
                    <div className="flex justify-center gap-3">
                      <button className="px-4 py-2 rounded bg-gray-200 text-teal-800 font-medium" onClick={() => setShowModal(false)}>{language === 'fr' ? 'Annuler' : language === 'es' ? 'Cancelar' : 'Cancel'}</button>
                      <button className="px-4 py-2 rounded bg-teal-600 text-white font-medium" onClick={() => { setShowModal(false); onNavClick && onNavClick('kerala'); }}>{language === 'fr' ? 'Continuer' : language === 'es' ? 'Continuar' : 'Continue'}</button>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex flex-col gap-3">
                <label className="block cursor-pointer">
                  <div
                    className={`flex items-center border rounded-lg p-3 ${
                      form.kerala === 'yes'
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-teal-100 hover:bg-teal-50'
                    }`}
                  >
                    <span className="flex items-center justify-center w-6 h-6 mr-3 rounded-md bg-teal-100 text-teal-800 font-medium border border-teal-300">
                      A
                    </span>
                    <input
                      type="radio"
                      name="kerala"
                      value="yes"
                      checked={form.kerala === 'yes'}
                      onChange={handleChange}
                      className="sr-only"
                      required
                    />
                    <span className="text-teal-800 text-base sm:text-sm">{t('yes')}</span>
                  </div>
                </label>
                <label className="block cursor-pointer">
                  <div
                    className={`flex items-center border rounded-lg p-3 ${
                      form.kerala === 'no'
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-teal-100 hover:bg-teal-50'
                    }`}
                  >
                    <span className="flex items-center justify-center w-6 h-6 mr-3 rounded-md bg-teal-100 text-teal-800 font-medium border border-teal-300">
                      B
                    </span>
                    <input
                      type="radio"
                      name="kerala"
                      value="no"
                      checked={form.kerala === 'no'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="text-teal-800 text-base sm:text-sm">{t('no')}</span>
                  </div>
                </label>
              </div>
            </div>
            <div className="mt-6 flex space-x-3">
              <button
                type="button"
                onClick={goToPrevStep}
                className="flex-1 bg-white border border-teal-300 hover:bg-gray-50 text-teal-700 py-3 rounded-lg transition font-medium shadow-sm"
              >
                {t('backButton')}
              </button>
              <button
                type="button"
                onClick={goToNextStep}
                disabled={!form.kerala}
                className={`flex-1 py-3 rounded-lg transition font-medium border shadow-md ${
                  !form.kerala
                    ? 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300'
                    : 'bg-teal-600 hover:bg-teal-700 text-white border-teal-300'
                }`}
              >
                {t('nextButton')}
              </button>
            </div>
          </>
        )}

        {currentStep === 5 && (
          <>
            <div className="mb-4">
              <h2 className="text-xl sm:text-lg font-medium text-teal-800 mb-3">{t('phoneLabel')}</h2>
              <p className="text-teal-600 text-sm mb-2">{t('phoneDescription')}</p>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={form.phone}
                onChange={e => { setForm({ ...form, phone: e.target.value }); setPhoneError(''); }}
                className="w-full p-3 border border-teal-200 rounded-lg focus:ring focus:ring-teal-200 focus:border-teal-400 outline-none transition text-base sm:text-sm"
                placeholder={t('phonePlaceholder')}
                required
              />
              {phoneError && <p className="text-red-600 text-xs mt-1">{phoneError}</p>}
            </div>
            <div className="mt-6 flex space-x-3">
              <button
                type="button"
                onClick={goToPrevStep}
                className="flex-1 bg-white border border-teal-300 hover:bg-gray-50 text-teal-700 py-3 rounded-lg transition font-medium shadow-sm"
              >
                {t('backButton')}
              </button>
              <button
                type="submit"
                disabled={!form.phone.trim() || isSubmitting}
                className={`flex-1 py-3 rounded-lg transition font-medium border shadow-md ${
                  !form.phone.trim() || isSubmitting
                    ? 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300'
                    : 'bg-teal-600 hover:bg-teal-700 text-white border-teal-300'
                }`}
              >
                {isSubmitting ? (t('submitButton') === "Enviar RSVP" ? "Enviando..." : "Envoi en cours...") : t('submitButton')}
              </button>
            </div>
          </>
        )}
      </div>
    </form>
  );
}