import React from 'react';
import { motion } from 'motion/react';
import { 
  Car, 
  Fuel, 
  Settings, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  Star, 
  Compass, 
  ParkingCircle,
  Users
} from 'lucide-react';

interface CarModel {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  specs: {
    motor: string;
    consumo: string;
    traccion: string;
  };
  pros: string[];
  cons: string[];
  link: string;
  comparison: {
    estilo: number;
    offroad: number;
    parking: number;
    consumo: number;
  };
}

const cars: CarModel[] = [
  {
    id: 'jeep-renegade',
    name: 'Jeep Renegade',
    subtitle: 'Estética 4x4 icónica con confort moderno',
    image: 'https://seo-cms.autoscout24.ch/wp-content/uploads/2025/02/611285B-1024x683.jpg',
    specs: {
      motor: '1.0 - 1.3 Turbo / Híbrido',
      consumo: '5.5 - 7.5 L/100km',
      traccion: 'Delantera o 4xe (Total)'
    },
    pros: [
      'Diseño con mucha personalidad',
      'Posición de conducción elevada',
      'Ideal tanto para ciudad como escapadas'
    ],
    cons: [
      'Maletero algo justo para su tamaño',
      'Aerodinámica ruidosa en autopista'
    ],
    link: 'https://www.autoscout24.es/lst/jeep/renegade',
    comparison: { estilo: 5, offroad: 4, parking: 3, consumo: 3 }
  },
  {
    id: 'vw-beetle',
    name: 'VW Beetle (Moderno)',
    subtitle: 'Estilo puro y diseño icónico',
    image: 'https://i.pinimg.com/736x/0f/30/17/0f301794d6fd4a68fb9a18440b7deb1f.jpg',
    specs: {
      motor: '1.2 - 2.0 TSI / TDI',
      consumo: '4.5 - 6.5 L/100km',
      traccion: 'Delantera'
    },
    pros: [
      'Diseño atemporal que siempre gusta',
      'Calidad de rodadura Volkswagen',
      'Muy cómodo para viajes largos'
    ],
    cons: [
      'Plazas traseras limitadas por la caída del techo',
      'Menos práctico que un SUV'
    ],
    link: 'https://www.coches.net/segunda-mano/?MakeId=45&ModelId=1055',
    comparison: { estilo: 5, offroad: 1, parking: 4, consumo: 4 }
  },
  {
    id: 'toyota-rav4',
    name: 'Toyota RAV4 (2000-2005)',
    subtitle: 'El SUV clásico indestructible en color Verde',
    image: 'https://i.pinimg.com/736x/89/5d/77/895d772e95569e49f315c035023dae35.jpg',
    specs: {
      motor: '2.0 VVTi / D4D',
      consumo: '8.5 - 9.5 L/100km',
      traccion: '4x4 Permanente'
    },
    pros: [
      'Fiabilidad mecánica legendaria',
      'Look retro-aventurero muy especial',
      'Capacidad real fuera de asfalto'
    ],
    cons: [
      'Consumo más elevado que modelos modernos',
      'Interior con tecnología de hace 20 años'
    ],
    link: 'https://www.autoscout24.es/lst/toyota/rav-4/ve_verde',
    comparison: { estilo: 4, offroad: 5, parking: 3, consumo: 2 }
  },
  {
    id: 'suzuki-jimny',
    name: 'Suzuki Jimny Nuevo',
    subtitle: 'Puro espíritu 4x4 (2 vs 4 asientos)',
    image: 'https://suzuki-gd.b-cdn.net/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaWtDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--eab98e9f6ad652f8aebb1f395ddb45ff14b66e07/Jimny%205D%20-%20Beige.jpg',
    specs: {
      motor: '1.5 Gasolina',
      consumo: '7.5 - 8.0 L/100km',
      traccion: '4x4 con Reductora'
    },
    pros: [
      'El mejor todoterreno por su precio',
      'Estética "Mini Mercedes G" irresistible',
      'Valor de reventa altísimo'
    ],
    cons: [
      'Versión Pro (2 plazas) sin asientos traseros',
      'Comportamiento en carretera algo saltarín'
    ],
    link: 'https://www.coches.net/segunda-mano/?MakeId=43&ModelId=358',
    comparison: { estilo: 5, offroad: 5, parking: 5, consumo: 2 }
  },
  {
    id: 'suzuki-ignis',
    name: 'Suzuki Ignis 4x4',
    subtitle: 'El micro-SUV inteligente (Mild Hybrid)',
    image: 'https://www.diariomotor.com/imagenes/2024/10/suzuki-ignis-4x4-1102960.jpg?class=XL',
    specs: {
      motor: '1.2 Dualjet Mild Hybrid',
      consumo: '4.8 - 5.2 L/100km',
      traccion: 'AllGrip (4x4)'
    },
    pros: [
      'Etiqueta ECO y consumo bajísimo',
      'Increíblemente fácil de aparcar',
      'Sorprendente espacio interior'
    ],
    cons: [
      'Diseño trasero polarizante',
      'Depósito de combustible pequeño'
    ],
    link: 'https://www.autoscout24.es/lst/suzuki/ignis?atype=C&cy=E&damaged_listing=exclude&powertype=kw&search_id=2f4z7z7z7z7&sort=standard&source=listpage_pagination&ustate=N%2CU',
    comparison: { estilo: 3, offroad: 3, parking: 5, consumo: 5 }
  },
  {
    id: 'fiat-panda-cross',
    name: 'Fiat Panda Cross',
    subtitle: 'Compacto, duro y con mucha personalidad',
    image: 'https://www.finpp.com/uploads/fotos_items/541579/1678869381_img_7862.jpg',
    specs: {
      motor: '0.9 TwinAir / 1.0 Hybrid',
      consumo: '5.0 - 6.0 L/100km',
      traccion: '4x4 con bloqueo'
    },
    pros: [
      'Capacidades 4x4 que avergüenzan a SUVs grandes',
      'Estética aventurera muy simpática',
      'Muy robusto y económico de mantener'
    ],
    cons: [
      'Tecnología de seguridad algo veterana',
      'Maletero pequeño'
    ],
    link: 'https://www.autoscout24.es/lst/fiat/panda?version=cross',
    comparison: { estilo: 4, offroad: 4, parking: 5, consumo: 4 }
  }
];

const RatingStars = ({ value }: { value: number }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star 
          key={s} 
          size={14} 
          className={s <= value ? "fill-emerald-600 text-emerald-600" : "text-gray-300"} 
        />
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Hero Section */}
      <header className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000" 
            alt="Mountain Adventure" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest text-emerald-400 uppercase bg-emerald-950/50 rounded-full border border-emerald-500/30">
              Para Janis
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
              Elige tu próxima <br />
              <span className="text-emerald-400 italic font-serif">aventura</span>
            </h1>
          </motion.div>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-4 py-12 space-y-16">
        {/* Intro Text */}
        <section className="text-center space-y-4">
          <p className="text-stone-500 text-lg leading-relaxed">
            He preparado esta selección especial pensando en lo que buscas: estilo, versatilidad y ese toque aventurero que tanto te gusta.
          </p>
          <div className="w-12 h-1 bg-emerald-500 mx-auto rounded-full" />
        </section>

        {/* Car Cards */}
        <div className="space-y-12">
          {cars.map((car, index) => (
            <motion.article
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                    Opción {index + 1}
                  </span>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">{car.name}</h2>
                  <p className="text-emerald-700 font-medium text-sm mt-1">{car.subtitle}</p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-2 py-4 border-y border-stone-100">
                  <div className="text-center space-y-1">
                    <Settings size={18} className="mx-auto text-stone-400" />
                    <p className="text-[10px] uppercase tracking-wider text-stone-400 font-bold">Motor</p>
                    <p className="text-xs font-semibold">{car.specs.motor.split(' ')[0]}</p>
                  </div>
                  <div className="text-center space-y-1 border-x border-stone-100">
                    <Fuel size={18} className="mx-auto text-stone-400" />
                    <p className="text-[10px] uppercase tracking-wider text-stone-400 font-bold">Consumo</p>
                    <p className="text-xs font-semibold">{car.specs.consumo.split(' ')[0]}</p>
                  </div>
                  <div className="text-center space-y-1">
                    <Compass size={18} className="mx-auto text-stone-400" />
                    <p className="text-[10px] uppercase tracking-wider text-stone-400 font-bold">Tracción</p>
                    <p className="text-xs font-semibold">{car.specs.traccion.split(' ')[0]}</p>
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      Por qué te gustará
                    </h3>
                    <ul className="space-y-2">
                      {car.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-stone-600 flex items-start gap-2">
                          <span className="w-1 h-1 bg-emerald-500 rounded-full mt-2 shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 flex items-center gap-2">
                      <AlertCircle size={14} className="text-amber-500" />
                      A tener en cuenta
                    </h3>
                    <ul className="space-y-2">
                      {car.cons.map((con, i) => (
                        <li key={i} className="text-sm text-stone-500 flex items-start gap-2">
                          <span className="w-1 h-1 bg-amber-400 rounded-full mt-2 shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Button */}
                <a 
                  href={car.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-stone-900 text-white rounded-2xl font-bold text-sm transition-all hover:bg-emerald-700 active:scale-95"
                >
                  Ver anuncio original
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Comparison Table Section */}
        <section className="space-y-8 pt-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Resumen rápido</h2>
            <p className="text-stone-500 text-sm">Comparativa directa para decidir mejor</p>
          </div>

          <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-stone-50 border-bottom border-stone-200">
                    <th className="p-4 text-[10px] uppercase tracking-widest font-bold text-stone-400">Modelo</th>
                    <th className="p-4 text-[10px] uppercase tracking-widest font-bold text-stone-400 text-center">Estilo</th>
                    <th className="p-4 text-[10px] uppercase tracking-widest font-bold text-stone-400 text-center">Off-road</th>
                    <th className="p-4 text-[10px] uppercase tracking-widest font-bold text-stone-400 text-center">Parking</th>
                    <th className="p-4 text-[10px] uppercase tracking-widest font-bold text-stone-400 text-center">Consumo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {cars.map((car) => (
                    <tr key={car.id} className="hover:bg-stone-50 transition-colors">
                      <td className="p-4">
                        <p className="text-xs font-bold text-stone-900 leading-tight">{car.name.split(' ')[0]}</p>
                        <p className="text-[10px] text-stone-400">{car.name.split(' ').slice(1).join(' ')}</p>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center"><RatingStars value={car.comparison.estilo} /></div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center"><RatingStars value={car.comparison.offroad} /></div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center"><RatingStars value={car.comparison.parking} /></div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center"><RatingStars value={car.comparison.consumo} /></div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-12 pb-8 space-y-6 border-t border-stone-200">
          <div className="flex justify-center gap-4">
            <div className="p-3 bg-emerald-100 rounded-full text-emerald-700">
              <Car size={24} />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-stone-900 font-bold">¿Cuál es tu favorito?</p>
            <p className="text-stone-500 text-sm px-8">
              Cualquiera de estos será una gran elección para nuestras próximas escapadas.
            </p>
          </div>
          <p className="text-[10px] text-stone-400 uppercase tracking-[0.2em] font-bold">
            Hecho con ❤️ para Janis
          </p>
        </footer>
      </main>
    </div>
  );
}
