import { useState } from 'react'
import Background from './components/Background'

export default function App() {
  const [form, setForm] = useState({ 
    attending: '',
    plusOne: '',
    guestNames: '',
    kerala: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  
  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, totalSteps))
  }
  
  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Format date as YYYY-MM-DD
    const today = new Date();
    const rsvpDate = today.toISOString().split('T')[0];

    const airtableData = {
      records: [
        {
          fields: {
            "Attendee Name": form.guestNames,
            "RSVP Date": rsvpDate,
            "assist": form.attending === 'yes',
            "plus one": form.plusOne === 'yes',
            "kerala": form.kerala === 'yes' // Only 'yes' maps to true, 'no' and 'maybe' map to false
          }
        }
      ]
    };

    try {
      const response = await fetch('https://api.airtable.com/v0/appYGZJIDZEa2YrY5/RSVPs', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer patUfEdZgqpHMF1wm.5c81de6606e7bd6d9218c57fa46d911a979e66b995e110b9ca1fac8aa09891dd', // IMPORTANT: Replace with your actual token
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(airtableData)
      });

      if (response.ok) {
        // const responseData = await response.json();
        // console.log('Airtable response:', responseData);
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error('Error submitting to Airtable:', response.status, errorData);
        // Optionally, set an error state here to inform the user
        // For now, we'll still show the thank you page, but log the error
        setSubmitted(true); // Or handle error display differently
      }
    } catch (error) {
      console.error('Network error submitting to Airtable:', error);
      // Optionally, set an error state here
      setSubmitted(true); // Or handle error display differently
    }
  }

  if (submitted) {
    return (
      <Background>
        <div className="bg-white bg-opacity-95 px-10 py-8 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-300 relative">
          <div className="absolute top-[-20px] left-[-20px] w-16 h-16 opacity-70" style={{ backgroundImage: `url('/4057631.jpg')`, backgroundPosition: 'left top', backgroundSize: '300%' }}></div>
          <div className="absolute bottom-[-20px] right-[-20px] w-16 h-16 opacity-70" style={{ backgroundImage: `url('/4057631.jpg')`, backgroundPosition: 'right bottom', backgroundSize: '300%' }}></div>
          <h2 className="text-3xl text-center text-emerald-700 relative">
            <span className="relative z-10">¡Gracias por tu respuesta! 💌</span>
            <span className="absolute bottom-1 left-0 w-full h-1 bg-gray-200 opacity-50"></span>
          </h2>
          
          {form.attending === 'yes' ? (
            <div className="mt-5">
              <p className="text-center text-emerald-600 text-lg font-medium">¡Nos vemos en la celebración!</p>
              
              <div className="mt-6 bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                <h3 className="text-md font-medium text-emerald-800 mb-2">Resumen de tu RSVP:</h3>
                <ul className="space-y-2 text-emerald-700">
                  <li><strong>Asistencia:</strong> {form.attending === 'yes' ? 'Sí' : 'No'}</li>
                  <li><strong>Acompañante:</strong> {form.plusOne === 'yes' ? 'Sí' : 'No'}</li>
                  <li><strong>Invitados:</strong> {form.guestNames}</li>
                  <li><strong>Viaje a Kerala:</strong> {
                    form.kerala === 'yes' ? 'Sí' : 
                    form.kerala === 'no' ? 'No' : 
                    'Aún por decidir'
                  }</li>
                </ul>
              </div>
            </div>
          ) : (
            <p className="text-center text-emerald-600 mt-3">
              Lamentamos que no puedas acompañarnos. ¡Gracias por responder!
            </p>
          )}
        </div>
      </Background>
    )
  }

  return (
    <Background>
      {/* Outer container for centering the form */}
      <div className="flex items-center justify-center w-full min-h-screen p-4">
        <form onSubmit={handleSubmit} className="bg-white bg-opacity-95 rounded-2xl shadow-xl w-full max-w-5xl border border-gray-300 flex flex-col md:flex-row overflow-hidden">
          {/* Image Side: Appears on top on mobile (due to flex-col and DOM order), left on desktop (md:flex-row) */}
          <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-8 md:border-r border-gray-200">
            <img 
              src="/Moment romantique minimaliste en noir et blanc-Photoroom.png" 
              alt="Pareja" 
              className="w-full max-w-[280px] sm:max-w-xs md:max-w-full rounded-2xl shadow-lg object-cover" 
              style={{
                filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
              }}
            />
          </div>

          {/* Form Fields Side */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 space-y-6">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-emerald-800 mb-2 relative inline-block">
                <span className="relative z-10">RSVP – ¡Confirma tu asistencia!</span>
              </h1>
              <p className="text-emerald-600 text-sm">Esperamos celebrarlo contigo 💍</p>
            </div>
            
            {/* Indicador de progreso */}
            <div className="flex justify-center space-x-2 mb-6">
              {[1, 2, 3, 4].map(step => (
                <div 
                  key={step} 
                  className={`w-3 h-3 rounded-full ${currentStep >= step ? 'bg-emerald-600' : 'bg-emerald-200'}`}
                ></div>
              ))}
            </div>

            {/* Pregunta 1: ¿Asistirás a la boda? */}
            {currentStep === 1 && (
              <>
                <div className="mb-4">
                  <h2 className="text-xl font-medium text-emerald-800 mb-3">¿Asistirás a la boda?</h2>
                  <div className="flex flex-col gap-3">
                    <label className="block cursor-pointer">
                      <div className={`flex items-center border rounded-lg p-3 ${form.attending === 'yes' ? 'border-emerald-500 bg-emerald-50' : 'border-emerald-100 hover:bg-emerald-50'}`}>
                        <span className="flex items-center justify-center w-6 h-6 mr-3 rounded-md bg-emerald-100 text-emerald-800 font-medium border border-emerald-300">A</span>
                        <input type="radio" name="attending" value="yes" checked={form.attending === 'yes'} onChange={handleChange} className="sr-only" required />
                        <span className="text-emerald-800">Sí</span>
                      </div>
                    </label>
                    <label className="block cursor-pointer">
                      <div className={`flex items-center border rounded-lg p-3 ${form.attending === 'no' ? 'border-emerald-500 bg-emerald-50' : 'border-emerald-100 hover:bg-emerald-50'}`}>
                        <span className="flex items-center justify-center w-6 h-6 mr-3 rounded-md bg-emerald-100 text-emerald-800 font-medium border border-emerald-300">B</span>
                        <input type="radio" name="attending" value="no" checked={form.attending === 'no'} onChange={handleChange} className="sr-only" />
                        <span className="text-emerald-800">No</span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="mt-6">
                  <button 
                    type="button" 
                    onClick={nextStep} 
                    disabled={!form.attending} 
                    className={`w-full py-3 rounded-lg transition font-medium border shadow-md ${form.attending ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-300' : 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300'}`}
                  >
                    Siguiente
                  </button>
                </div>
              </>
            )}

            {/* Pregunta 2: ¿Traerás un acompañante (+1)? */}
            {currentStep === 2 && (
              <>
                <div className="mb-4">
                  <h2 className="text-xl font-medium text-emerald-800 mb-3">¿Traerás un acompañante (+1)?</h2>
                  <div className="flex flex-col gap-3">
                    <label className="block cursor-pointer">
                      <div className={`flex items-center border rounded-lg p-3 ${form.plusOne === 'yes' ? 'border-emerald-500 bg-emerald-50' : 'border-emerald-100 hover:bg-emerald-50'}`}>
                        <span className="flex items-center justify-center w-6 h-6 mr-3 rounded-md bg-emerald-100 text-emerald-800 font-medium border border-emerald-300">A</span>
                        <input type="radio" name="plusOne" value="yes" checked={form.plusOne === 'yes'} onChange={handleChange} className="sr-only" required />
                        <span className="text-emerald-800">Sí</span>
                      </div>
                    </label>
                    <label className="block cursor-pointer">
                      <div className={`flex items-center border rounded-lg p-3 ${form.plusOne === 'no' ? 'border-emerald-500 bg-emerald-50' : 'border-emerald-100 hover:bg-emerald-50'}`}>
                        <span className="flex items-center justify-center w-6 h-6 mr-3 rounded-md bg-emerald-100 text-emerald-800 font-medium border border-emerald-300">B</span>
                        <input type="radio" name="plusOne" value="no" checked={form.plusOne === 'no'} onChange={handleChange} className="sr-only" />
                        <span className="text-emerald-800">No</span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="mt-6 flex space-x-3">
                  <button type="button" onClick={prevStep} className="flex-1 bg-white border border-emerald-300 hover:bg-gray-50 text-emerald-700 py-3 rounded-lg transition font-medium shadow-sm">
                    Atrás
                  </button>
                  <button 
                    type="button" 
                    onClick={nextStep}
                    disabled={!form.plusOne}
                    className={`flex-1 py-3 rounded-lg transition font-medium border shadow-md ${form.plusOne ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-300' : 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300'}`}
                  >
                    Siguiente
                  </button>
                </div>
              </>
            )}

            {/* Pregunta 3: Nombre(s) de los invitados */}
            {currentStep === 3 && (
              <>
                <div className="mb-4">
                  <h2 className="text-xl font-medium text-emerald-800 mb-3">Nombre(s) de los invitados</h2>
                  <textarea
                    name="guestNames"
                    value={form.guestNames}
                    onChange={handleChange}
                    className="w-full p-3 border border-emerald-200 rounded-lg focus:ring focus:ring-emerald-200 focus:border-emerald-400 outline-none transition"
                    placeholder="Escribe los nombres de todas las personas que asistirán"
                    rows={3}
                  />
                </div>
                <div className="mt-6 flex space-x-3">
                  <button type="button" onClick={prevStep} className="flex-1 bg-white border border-emerald-300 hover:bg-gray-50 text-emerald-700 py-3 rounded-lg transition font-medium shadow-sm">
                    Atrás
                  </button>
                  <button 
                    type="button" 
                    onClick={nextStep} 
                    disabled={!form.guestNames.trim()}
                    className={`flex-1 py-3 rounded-lg transition font-medium border shadow-md ${form.guestNames.trim() ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-300' : 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300'}`}
                  >
                    Siguiente
                  </button>
                </div>
              </>
            )}

            {/* Pregunta 4: ¿Te apuntas al viaje posterior a Kerala? */}
            {currentStep === 4 && (
              <>
                <div className="mb-4">
                  <h2 className="text-xl font-medium text-emerald-800 mb-3">¿Te apuntas al viaje posterior a Kerala (aproximadamente 1 semana)?</h2>
                  <p className="text-emerald-600 text-sm mb-3">(Los detalles se enviarán más adelante)</p>
                  <div className="flex flex-col gap-3">
                    <label className="block cursor-pointer">
                      <div className={`flex items-center border rounded-lg p-3 ${form.kerala === 'yes' ? 'border-emerald-500 bg-emerald-50' : 'border-emerald-100 hover:bg-emerald-50'}`}>
                        <span className="flex items-center justify-center w-6 h-6 mr-3 rounded-md bg-emerald-100 text-emerald-800 font-medium border border-emerald-300">A</span>
                        <input type="radio" name="kerala" value="yes" checked={form.kerala === 'yes'} onChange={handleChange} className="sr-only" required />
                        <span className="text-emerald-800">Sí</span>
                      </div>
                    </label>
                    <label className="block cursor-pointer">
                      <div className={`flex items-center border rounded-lg p-3 ${form.kerala === 'no' ? 'border-emerald-500 bg-emerald-50' : 'border-emerald-100 hover:bg-emerald-50'}`}>
                        <span className="flex items-center justify-center w-6 h-6 mr-3 rounded-md bg-emerald-100 text-emerald-800 font-medium border border-emerald-300">B</span>
                        <input type="radio" name="kerala" value="no" checked={form.kerala === 'no'} onChange={handleChange} className="sr-only" />
                        <span className="text-emerald-800">No</span>
                      </div>
                    </label>
                    <label className="block cursor-pointer">
                      <div className={`flex items-center border rounded-lg p-3 ${form.kerala === 'maybe' ? 'border-emerald-500 bg-emerald-50' : 'border-emerald-100 hover:bg-emerald-50'}`}>
                        <span className="flex items-center justify-center w-6 h-6 mr-3 rounded-md bg-emerald-100 text-emerald-800 font-medium border border-emerald-300">C</span>
                        <input type="radio" name="kerala" value="maybe" checked={form.kerala === 'maybe'} onChange={handleChange} className="sr-only" />
                        <span className="text-emerald-800">Aún no lo sé</span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="mt-6 flex space-x-3">
                  <button type="button" onClick={prevStep} className="flex-1 bg-white border border-emerald-300 hover:bg-gray-50 text-emerald-700 py-3 rounded-lg transition font-medium shadow-sm">
                    Atrás
                  </button>
                  <button 
                    type="submit" 
                    disabled={!form.kerala}
                    className={`flex-1 py-3 rounded-lg transition font-medium border shadow-md ${form.kerala ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-300' : 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300'}`}
                  >
                    Enviar RSVP
                  </button>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </Background>
  )
}
