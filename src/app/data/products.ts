// Datos de productos extraídos del CSV de Green Match
export interface ProductRecommendation {
  location: string;
  value: string;
  commitment: string;
  product: string;
  benefit: string;
  motivationalPhrase: string;
}

export const productRecommendations: ProductRecommendation[] = [
  {
    location: "Ciudad",
    value: "Cuidado personal",
    commitment: "Nunca",
    product: "Cepillo de bambú",
    benefit: "Reduce el uso de plásticos en tu rutina diaria.",
    motivationalPhrase: "Cada cepillada cuenta."
  },
  {
    location: "Ciudad",
    value: "Cuidado personal",
    commitment: "A veces",
    product: "Shampoo sólido",
    benefit: "Sin plástico y con ingredientes naturales.",
    motivationalPhrase: "Tu cabello también ama al planeta."
  },
  {
    location: "Ciudad",
    value: "Cuidado personal",
    commitment: "Siempre",
    product: "Desodorante ecológico",
    benefit: "Fórmula vegana y sin residuos químicos.",
    motivationalPhrase: "Tu piel merece conciencia."
  },
  {
    location: "Ciudad",
    value: "Cocina ecológica",
    commitment: "Nunca",
    product: "Tote bag reutilizable",
    benefit: "Ideal para reemplazar bolsas plásticas al hacer compras.",
    motivationalPhrase: "Cada hábito cuenta. Empezá por uno."
  },
  {
    location: "Ciudad",
    value: "Cocina ecológica",
    commitment: "A veces",
    product: "Envases de silicona",
    benefit: "Alternativa reutilizable al film plástico.",
    motivationalPhrase: "Cuidá lo que comés… y cómo lo guardás."
  },
  {
    location: "Ciudad",
    value: "Cocina ecológica",
    commitment: "Siempre",
    product: "Filtro de agua de carbón",
    benefit: "Purifica el agua sin necesidad de botellas plásticas.",
    motivationalPhrase: "Cada sorbo es más limpio."
  },
  {
    location: "Ciudad",
    value: "Ahorro de energía",
    commitment: "Nunca",
    product: "Luz LED portátil",
    benefit: "Consume 80% menos energía que las bombillas tradicionales.",
    motivationalPhrase: "Iluminá el cambio."
  },
  {
    location: "Ciudad",
    value: "Ahorro de energía",
    commitment: "A veces",
    product: "Bombilla LED inteligente",
    benefit: "Control automático para ahorrar energía sin esfuerzo.",
    motivationalPhrase: "Tecnología que cuida el futuro."
  },
  {
    location: "Ciudad",
    value: "Ahorro de energía",
    commitment: "Siempre",
    product: "Cargador solar USB",
    benefit: "Carga tus dispositivos con energía limpia del sol.",
    motivationalPhrase: "El sol como tu mejor aliado."
  },
  {
    location: "Campo",
    value: "Cuidado personal",
    commitment: "Nunca",
    product: "Jabón artesanal de glicerina",
    benefit: "Natural y sin químicos agresivos.",
    motivationalPhrase: "Volvé a lo esencial."
  },
  {
    location: "Campo",
    value: "Cuidado personal",
    commitment: "A veces",
    product: "Crema hidratante ecológica",
    benefit: "Ingredientes orgánicos sin parabenos.",
    motivationalPhrase: "Tu piel natural merece cuidado natural."
  },
  {
    location: "Campo",
    value: "Cuidado personal",
    commitment: "Siempre",
    product: "Kit de higiene zero waste",
    benefit: "Todo lo necesario sin generar residuos.",
    motivationalPhrase: "Cuidate sin culpa."
  },
  {
    location: "Campo",
    value: "Cocina ecológica",
    commitment: "Nunca",
    product: "Bolsas reutilizables de tela",
    benefit: "Perfectas para transportar verduras frescas.",
    motivationalPhrase: "Llevá lo bueno de forma consciente."
  },
  {
    location: "Campo",
    value: "Cocina ecológica",
    commitment: "A veces",
    product: "Frascos de vidrio herméticos",
    benefit: "Conservan mejor los alimentos sin plástico.",
    motivationalPhrase: "Guardá la frescura, guardá el planeta."
  },
  {
    location: "Campo",
    value: "Cocina ecológica",
    commitment: "Siempre",
    product: "Compostadora doméstica",
    benefit: "Convierte residuos orgánicos en tierra fértil.",
    motivationalPhrase: "De la mesa a la tierra, el ciclo perfecto."
  },
  {
    location: "Campo",
    value: "Ahorro de energía",
    commitment: "Nunca",
    product: "Termo de acero inoxidable",
    benefit: "Mantiene la temperatura sin usar energía.",
    motivationalPhrase: "Simple y eficiente."
  },
  {
    location: "Campo",
    value: "Ahorro de energía",
    commitment: "A veces",
    product: "Lámpara solar de jardín",
    benefit: "Iluminación nocturna sin cables ni electricidad.",
    motivationalPhrase: "Que la noche también sea verde."
  },
  {
    location: "Campo",
    value: "Ahorro de energía",
    commitment: "Siempre",
    product: "Panel solar portátil",
    benefit: "Genera electricidad limpia para tus dispositivos.",
    motivationalPhrase: "Independencia energética en tus manos."
  },
  {
    location: "Playa",
    value: "Cuidado personal",
    commitment: "Nunca",
    product: "Protector solar mineral",
    benefit: "Protege tu piel y los corales marinos.",
    motivationalPhrase: "Cuidá dos ecosistemas a la vez."
  },
  {
    location: "Playa",
    value: "Cuidado personal",
    commitment: "A veces",
    product: "Champú sólido para agua salada",
    benefit: "Especial para cabello expuesto al mar.",
    motivationalPhrase: "Sal en el cabello, no en el océano."
  },
  {
    location: "Playa",
    value: "Cuidado personal",
    commitment: "Siempre",
    product: "Kit beach clean",
    benefit: "Productos biodegradables para limpiar sin contaminar.",
    motivationalPhrase: "Limpio vos, limpio el mar."
  },
  {
    location: "Playa",
    value: "Cocina ecológica",
    commitment: "Nunca",
    product: "Set de cubiertos de bambú",
    benefit: "Portátil y biodegradable para picnics playeros.",
    motivationalPhrase: "Comé rico, dejá limpio."
  },
  {
    location: "Playa",
    value: "Cocina ecológica",
    commitment: "A veces",
    product: "Cooler biodegradable",
    benefit: "Mantiene frescos los alimentos sin poliestireno.",
    motivationalPhrase: "Frescura que no contamina."
  },
  {
    location: "Playa",
    value: "Cocina ecológica",
    commitment: "Siempre",
    product: "Purificador de agua portátil",
    benefit: "Convierte cualquier agua en potable sin botellas.",
    motivationalPhrase: "Hidratación infinita, residuos cero."
  },
  {
    location: "Playa",
    value: "Ahorro de energía",
    commitment: "Nunca",
    product: "Ventilador manual eco",
    benefit: "Refresca sin electricidad con materiales reciclados.",
    motivationalPhrase: "Aire fresco con conciencia."
  },
  {
    location: "Playa",
    value: "Ahorro de energía",
    commitment: "A veces",
    product: "Radio solar resistente al agua",
    benefit: "Entretenimiento sin pilas ni cables.",
    motivationalPhrase: "Música limpia bajo el sol."
  },
  {
    location: "Playa",
    value: "Ahorro de energía",
    commitment: "Siempre",
    product: "Mochila con panel solar integrado",
    benefit: "Carga tus dispositivos mientras caminás por la playa.",
    motivationalPhrase: "Energía que se mueve contigo."
  }
];

export const getRecommendation = (location: string, value: string, commitment: string): ProductRecommendation | null => {
  return productRecommendations.find(
    rec => rec.location === location && rec.value === value && rec.commitment === commitment
  ) || null;
};