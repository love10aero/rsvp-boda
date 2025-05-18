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
    keralaQuestion: "¿Te apuntas al viaje posterior a Kerala (aproximadamente 1 semana)?",
    keralaDetails: "(Los detalles se enviarán más adelante)",
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
    altPareja: "Pareja"
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
    keralaQuestion: "Es-tu intéressé pour te joindre au voyage prévu dans le Kerala après le mariage (environ 1 semaine) ?",
    keralaDetails: "(Les informations seront communiquées ultérieurement)",
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
    altPareja: "Couple"
  }
};

export default function RsvpForm() {
  const [form, setForm] = useState({
    attending: '',
    plusOne: '',
    mainGuestName: '',
    plusOneName: '',
    kerala: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const [language, setLanguage] = useState('es');

  const t = (key) => translations[language][key] || key;

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

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
          kerala: form.kerala === 'yes'
        }
      });

      if (form.plusOne === 'yes' && form.plusOneName) {
        recordsToSubmit.push({
          fields: {
            "Attendee Name": form.plusOneName,
            "RSVP Date": rsvpDate,
            assist: true,
            "plus one": true,
            kerala: form.kerala === 'yes'
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
          kerala: false
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
        <div
          className="absolute top-[-20px] left-[-20px] w-16 h-16 opacity-70"
          style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}Moment romantique minimaliste en noir et blanc-Photoroom.png')`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div
          className="absolute bottom-[-20px] right-[-20px] w-16 h-16 opacity-70"
          style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}Moment romantique minimaliste en noir et blanc-Photoroom.png')`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <h2 className="text-3xl text-center text-teal-700 relative">
          <span className="relative z-10">{t('thankYouMessageTitle')}</span>
          <span className="absolute bottom-1 left-0 w-full h-1 bg-gray-200 opacity-50"></span>
        </h2>

        {form.attending === 'yes' ? (
          <div className="mt-5">
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

      <div className="w-full md:w-1/2 p-6 sm:p-8 space-y-6">
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
          {[1, 2, 3, 4].map((step) => (
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
                onClick={nextStep}
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
                onClick={prevStep}
                className="flex-1 bg-white border border-teal-300 hover:bg-gray-50 text-teal-700 py-3 rounded-lg transition font-medium shadow-sm"
              >
                {t('backButton')}
              </button>
              <button
                type="button"
                onClick={nextStep}
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
                onClick={prevStep}
                className="flex-1 bg-white border border-teal-300 hover:bg-gray-50 text-teal-700 py-3 rounded-lg transition font-medium shadow-sm"
              >
                {t('backButton')}
              </button>
              <button
                type="button"
                onClick={nextStep}
                disabled={!form.mainGuestName.trim() || (form.plusOne === 'yes' && !form.plusOneName.trim())}
                className={`flex-1 py-3 rounded-lg transition font-medium border shadow-md ${
                  !form.mainGuestName.trim() || (form.plusOne === 'yes' && !form.plusOneName.trim())
                    ? 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300'
                    : 'bg-teal-600 hover:bg-teal-700 text-white border-teal-300'
                }`}
              >
                {t('nextButton')}
              </button>
            </div>
          </>
        )}

        {currentStep === 4 && (
          <>
            <div className="mb-4">
              <h2 className="text-xl sm:text-lg font-medium text-teal-800 mb-3">{t('keralaQuestion')}</h2>
              <p className="text-teal-600 text-sm sm:text-xs mb-3">{t('keralaDetails')}</p>
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
                onClick={prevStep}
                className="flex-1 bg-white border border-teal-300 hover:bg-gray-50 text-teal-700 py-3 rounded-lg transition font-medium shadow-sm"
              >
                {t('backButton')}
              </button>
              <button
                type="submit"
                disabled={!form.kerala || isSubmitting}
                className={`flex-1 py-3 rounded-lg transition font-medium border shadow-md ${
                  !form.kerala || isSubmitting
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