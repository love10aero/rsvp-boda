import { useState } from 'react'

export default function App() {
  const [form, setForm] = useState({ attending: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    console.log('RSVP data:', form)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-emerald-100">
        <h2 className="text-3xl text-center text-green-700">¡Gracias por tu respuesta! 💌</h2>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-100">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">¿Asistirás a la boda?</h1>
            <p className="text-gray-500 text-sm mb-2">Descripción (opcional)</p>
            <p className="text-gray-500 text-sm">Esperamos celebrarlo contigo 💍</p>
          </div>

          <div className="flex flex-col gap-4">
            <label className="block cursor-pointer">
              <div className={`flex items-center border rounded-lg p-3 ${form.attending === 'yes' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 hover:bg-gray-50'}`}>
                <span className="flex items-center justify-center w-6 h-6 mr-3 rounded-md bg-emerald-100 text-emerald-800 font-medium">A</span>
                <input type="radio" name="attending" value="yes" checked={form.attending === 'yes'} onChange={handleChange} className="sr-only" required />
                <span>Sí</span>
              </div>
            </label>
            <label className="block cursor-pointer">
              <div className={`flex items-center border rounded-lg p-3 ${form.attending === 'no' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 hover:bg-gray-50'}`}>
                <span className="flex items-center justify-center w-6 h-6 mr-3 rounded-md bg-emerald-100 text-emerald-800 font-medium">B</span>
                <input type="radio" name="attending" value="no" checked={form.attending === 'no'} onChange={handleChange} className="sr-only" required />
                <span>No</span>
              </div>
            </label>
          </div>

          <div className="mt-4">
            <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg transition font-medium">
              Enviar RSVP
            </button>
          </div>
        </form>
        <div className="hidden md:block">
          <img src="/Moment romantique minimaliste en noir et blanc-Photoroom.png" alt="Pareja" className="max-w-xs rounded-2xl" />
        </div>
      </div>
    </div>
  )
}
