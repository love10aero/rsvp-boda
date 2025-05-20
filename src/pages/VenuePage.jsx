import { useState } from 'react';

const venueTranslations = {
  en: {
    title: 'Venue Details & Practical Info',
    sections: [
      {
        icon: '🛂',
        heading: 'Required Documents',
        content: [
          'Valid passport: Must be valid for at least 6 months after your arrival in India.',
          'Visa required: Apply for a tourist e-visa online at the official site: https://indianvisaonline.gov.in',
          '✅ Apply at least 3 weeks before departure',
          '✅ Prepare a passport photo and a scanned copy of your passport',
          '✅ The visa is usually valid for 30 days'
        ]
      },
      {
        icon: '✈️',
        heading: 'Travel Insurance',
        content: [
          'Given the current international context, we strongly recommend purchasing flight cancellation insurance when booking your tickets.',
          'This will give you more flexibility and peace of mind in case of unforeseen events.'
        ]
      },
      {
        icon: '☀️',
        heading: 'Weather',
        content: [
          'Amritsar / Punjab: Mild and sunny during the day (20–25°C), cool in the evening (10–15°C).',
          'Kerala (Munnar & Alleppey): Pleasant tropical climate in January, temperatures around 20–30°C, little rain. Ideal for exploring the mountains and backwaters.'
        ]
      },
      {
        icon: '🩺',
        heading: 'Health',
        content: [
          'No mandatory vaccines, but the following are recommended: hepatitis A, typhoid, tetanus (consult your doctor).',
          'Bring a small first aid kit: digestive medicine, paracetamol, mosquito repellent, bandages, etc.'
        ]
      },
      {
        icon: '🔐',
        heading: 'Precautions & Safety',
        content: [
          'Leave valuables at home: precious jewelry, luxury watches, laptops, etc.',
          'Bring only: mobile phone, international bank card, a bit of cash (euros or rupees).',
          'India is generally welcoming: stay alert and you’ll be fine!'
        ]
      },
      {
        icon: '💰',
        heading: 'Local Currency',
        content: [
          'Currency: Indian rupee (INR)',
          'You can exchange euros at the airport or withdraw cash locally (beware of bank fees).',
          'Make sure your bank card is enabled for use abroad.'
        ]
      },
      {
        icon: '👗',
        heading: 'Dress Code',
        content: [
          'Respect local culture while staying comfortable',
          'Light, covering clothes',
          'A light jacket for cooler evenings',
          'Comfortable shoes for walking in nature (especially in Kerala)',
          'For wedding ceremonies, many guests enjoy wearing traditional Indian attire (like a sari, kurta, or lehenga).',
          'No obligation, but if you’re interested, a shopping trip will be organized on January 9 to find your traditional outfits in a friendly atmosphere.'
        ]
      }
    ]
  },
  fr: {
    title: 'Infos pratiques pour les invités',
    sections: [
      {
        icon: '🛂',
        heading: 'Documents nécessaires',
        content: [
          'Passeport valide : Doit être valable au moins 6 mois après votre arrivée en Inde.',
          'Visa obligatoire : Faites une demande de visa touristique en ligne (e-Tourist Visa) sur le site officiel : https://indianvisaonline.gov.in',
          '✅ À faire au moins 3 semaines avant le départ',
          '✅ Prévoir une photo d’identité et une copie scannée du passeport',
          '✅ Le visa est généralement valable pour 30 jours'
        ]
      },
      {
        icon: '✈️',
        heading: 'Assurance annulation',
        content: [
          'Étant donné le contexte international actuel, nous vous recommandons de souscrire à une assurance annulation de vol lors de l’achat de vos billets.',
          'Cela vous offrira plus de flexibilité et de tranquilité d’esprit en cas d’imprévu.'
        ]
      },
      {
        icon: '☀️',
        heading: 'Climat',
        content: [
          'Amritsar / Pendjab : Doux et ensoleillé en journée (20–25 °C), frais le soir (10–15 °C).',
          'Kerala (Munnar & Alleppey) : Climat tropical agréable en janvier, températures autour de 20–30 °C, peu de pluie. Idéal pour explorer les montagnes et les backwaters.'
        ]
      },
      {
        icon: '🩺',
        heading: 'Santé',
        content: [
          'Pas de vaccins obligatoires, mais les suivants sont recommandés : hépatite A, typhoïde, tétanos (consultez votre médecin).',
          'Pensez à une petite trousse de premiers soins : médicaments digestifs, paracétamol, répulsif anti-moustiques, pansements…'
        ]
      },
      {
        icon: '🔐',
        heading: 'Précautions & sécurité',
        content: [
          'Laissez les objets de valeur à la maison : bijoux précieux, montres de luxe, ordinateurs, etc.',
          'Apportez uniquement : téléphone portable, carte bancaire internationale, un peu de liquide (euros ou roupies).',
          'Globalement, l’Inde est accueillante : restez attentifs et tout ira bien !'
        ]
      },
      {
        icon: '💰',
        heading: 'Monnaie locale',
        content: [
          'Monnaie : roupie indienne (INR)',
          'Vous pouvez changer vos euros à l’aéroport ou retirer sur place (attention aux frais bancaires).',
          'Pensez à activer votre carte bancaire pour l’usage à l’étranger.'
        ]
      },
      {
        icon: '👗',
        heading: 'Tenue vestimentaire',
        content: [
          'Respecter la culture locale tout en étant à l’aise',
          'Vêtements légers et couvrants',
          'Une petite veste pour les soirées plus fraîches',
          'Chaussures confortables pour marcher dans la nature (notamment au Kerala)',
          'Pour les cérémonies de mariage, de nombreux invités souhaitent vivre l’expérience à fond en portant une tenue traditionnelle indienne (comme un sari, un kurta ou un lehenga).',
          'Pas d’obligation bien sûr, mais si cela vous tente, une excursion shopping sera proposée le 9 janvier pour trouver vos tenues traditionnelles dans une ambiance conviviale.'
        ]
      }
    ]
  },
  es: {
    title: 'Información práctica para invitados',
    sections: [
      {
        icon: '🛂',
        heading: 'Documentos necesarios',
        content: [
          'Pasaporte válido: Debe ser válido al menos 6 meses después de tu llegada a la India.',
          'Visado obligatorio: Solicita un visado turístico online (e-Tourist Visa) en el sitio oficial: https://indianvisaonline.gov.in',
          '✅ Hazlo al menos 3 semanas antes de la salida',
          '✅ Prepara una foto de carnet y una copia escaneada del pasaporte',
          '✅ El visado suele ser válido por 30 días'
        ]
      },
      {
        icon: '✈️',
        heading: 'Seguro de cancelación',
        content: [
          'Dada la situación internacional actual, te recomendamos encarecidamente contratar un seguro de cancelación de vuelo al comprar tus billetes.',
          'Esto te dará más flexibilidad y tranquilidad en caso de imprevistos.'
        ]
      },
      {
        icon: '☀️',
        heading: 'Clima',
        content: [
          'Amritsar / Punjab: Suave y soleado durante el día (20–25 °C), fresco por la noche (10–15 °C).',
          'Kerala (Munnar y Alleppey): Clima tropical agradable en enero, temperaturas alrededor de 20–30 °C, poca lluvia. Ideal para explorar las montañas y los backwaters.'
        ]
      },
      {
        icon: '🩺',
        heading: 'Salud',
        content: [
          'No hay vacunas obligatorias, pero se recomiendan: hepatitis A, fiebre tifoidea, tétanos (consulta a tu médico).',
          'Lleva un pequeño botiquín: medicamentos digestivos, paracetamol, repelente de mosquitos, tiritas, etc.'
        ]
      },
      {
        icon: '🔐',
        heading: 'Precauciones y seguridad',
        content: [
          'Deja los objetos de valor en casa: joyas, relojes de lujo, ordenadores, etc.',
          'Lleva solo: teléfono móvil, tarjeta bancaria internacional, algo de efectivo (euros o rupias).',
          'En general, la India es acogedora: ¡mantente atento y todo irá bien!'
        ]
      },
      {
        icon: '💰',
        heading: 'Moneda local',
        content: [
          'Moneda: rupia india (INR)',
          'Puedes cambiar euros en el aeropuerto o sacar dinero allí (ojo con las comisiones bancarias).',
          'Asegúrate de que tu tarjeta bancaria esté habilitada para uso en el extranjero.'
        ]
      },
      {
        icon: '👗',
        heading: 'Vestimenta',
        content: [
          'Respeta la cultura local y siéntete cómodo',
          'Ropa ligera y que cubra',
          'Una chaqueta ligera para las noches más frescas',
          'Zapatos cómodos para caminar por la naturaleza (especialmente en Kerala)',
          'Para las ceremonias de boda, muchos invitados disfrutan llevando ropa tradicional india (como sari, kurta o lehenga).',
          'No es obligatorio, pero si te apetece, el 9 de enero se organizará una salida de compras para encontrar tu atuendo tradicional en un ambiente agradable.'
        ]
      }
    ]
  }
};

function VenuePage() {
  const [lang, setLang] = useState('fr');
  const t = venueTranslations[lang];

  return (
    <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl border border-gray-300 max-w-2xl w-full mx-auto mt-8 mb-8">
      <div className="flex justify-end space-x-3 mb-4">
        <button type="button" onClick={() => setLang('en')} className={`p-1 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 ${lang === 'en' ? 'ring-2 ring-teal-500 opacity-100' : 'opacity-60 hover:opacity-100'}`}><span role="img" aria-label="English" className="text-2xl">🇬🇧</span></button>
        <button type="button" onClick={() => setLang('fr')} className={`p-1 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 ${lang === 'fr' ? 'ring-2 ring-teal-500 opacity-100' : 'opacity-60 hover:opacity-100'}`}><span role="img" aria-label="French" className="text-2xl">🇫🇷</span></button>
        <button type="button" onClick={() => setLang('es')} className={`p-1 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 ${lang === 'es' ? 'ring-2 ring-teal-500 opacity-100' : 'opacity-60 hover:opacity-100'}`}><span role="img" aria-label="Spanish" className="text-2xl">🇪🇸</span></button>
      </div>
      <h2 className="text-2xl font-bold text-teal-800 mb-8">{t.title}</h2>
      <div className="space-y-8 text-left">
        {t.sections.map((section, idx) => (
          <div key={idx}>
            <div className="flex flex-col items-center mb-2">
              <span className="text-3xl mb-1">{section.icon}</span>
              <span className="text-lg font-semibold text-teal-700 text-center">{section.heading}</span>
            </div>
            <ul className="list-disc ml-8 space-y-1 text-teal-800">
              {section.content.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VenuePage;
