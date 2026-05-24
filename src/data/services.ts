export const SERVICES = [
  { num: '01', name: 'Mural', desc: 'Mural personalizado interior o exterior. Diseño + materiales + ejecución.', price: 'Desde $300.000' },
  { num: '02', name: 'Retrato', desc: 'Retrato en lienzo, acrílica o técnica mixta. Pequeño, mediano o grande.', price: 'Desde $50.000' },
  { num: '03', name: 'Graffiti', desc: 'Lettering, throw-ups y wildstyle para fachadas, eventos o muros autorizados.', price: 'A consultar' },
  { num: '04', name: 'Fotografía para eventos', desc: 'Cobertura fotográfica de inauguraciones, talleres, exposiciones y procesos creativos.', price: 'A consultar' },
  { num: '05', name: 'Dibujo', desc: 'Ilustración a mano o digital. Encargos, retratos rápidos y proyectos editoriales.', price: 'Desde $50.000' },
  { num: '06', name: 'Clases de arte', desc: 'Clases individuales o grupales en pintura, dibujo, color y manga. Virtual o presencial.', price: 'Desde $30k/curso' },
  { num: '07', name: 'Conferencias · teoría del arte', desc: 'Charlas y conversatorios sobre arte contemporáneo, muralismo, color y procesos creativos.', price: 'A consultar' },
  { num: '08', name: 'Curaduría', desc: 'Acompañamiento curatorial para exposiciones de artistas emergentes y colectivos.', price: 'A consultar' },
  { num: '09', name: 'Gestión de proyectos comunitarios', desc: 'Diseño y producción de proyectos artísticos con comunidades, barrios y colectivos.', price: 'A consultar' },
] as const;

export const STEPS = [
  {
    num: '01',
    h: 'Conversación',
    p: 'Cuéntame tu idea por WhatsApp, Instagram o correo. Espacio, propósito, referencias, fechas. Mientras más contexto, mejor.',
    applies: ['mural', 'retrato', 'graffiti', 'ilustración', 'fotografía', 'curso'],
  },
  {
    num: '02',
    h: 'Propuesta',
    p: 'Devuelvo un primer concepto: boceto, moodboard o plan de trabajo según el proyecto. Iteramos hasta que cuadre con lo que buscas.',
    applies: ['mural', 'ilustración', 'curaduría', 'gestión'],
  },
  {
    num: '03',
    h: 'Cotización',
    p: 'Recibes presupuesto detallado con materiales, tiempos y forma de pago. Sin sorpresas. Confirmamos con un abono inicial.',
    applies: ['todos los servicios'],
  },
  {
    num: '04',
    h: 'Creación',
    p: 'Doy vida al proyecto. Te comparto avances durante el proceso para que lo vivas conmigo. Entregamos juntxs.',
    applies: ['mural', 'retrato', 'graffiti', 'fotografía', 'ilustración'],
  },
] as const;
