// Servicio para obtener imágenes de Unsplash
const UNSPLASH_BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
}

// Términos de búsqueda específicos para cada producto
const productSearchTerms: Record<string, string> = {
  'Cepillo de bambú': 'bamboo toothbrush sustainable',
  'Shampoo sólido': 'solid shampoo bar natural',
  'Desodorante ecológico': 'natural deodorant eco friendly',
  'Tote bag reutilizable': 'reusable tote bag cotton',
  'Envases de silicona': 'silicone food containers',
  'Filtro de agua de carbón': 'water filter carbon natural',
  'Luz LED portátil': 'portable LED light sustainable',
  'Bombilla LED inteligente': 'smart LED bulb energy saving',
  'Cargador solar USB': 'solar charger USB portable',
  'Jabón artesanal de glicerina': 'handmade glycerin soap natural',
  'Crema hidratante ecológica': 'organic moisturizer natural skincare',
  'Kit de higiene zero waste': 'zero waste hygiene kit',
  'Bolsas reutilizables de tela': 'reusable fabric bags mesh',
  'Frascos de vidrio herméticos': 'glass jars airtight storage',
  'Compostadora doméstica': 'home composter sustainable',
  'Termo de acero inoxidable': 'stainless steel thermos bottle',
  'Lámpara solar de jardín': 'solar garden lamp outdoor',
  'Panel solar portátil': 'portable solar panel outdoor',
  'Protector solar mineral': 'mineral sunscreen natural',
  'Champú sólido para agua salada': 'solid shampoo saltwater natural',
  'Kit beach clean': 'beach cleanup kit eco',
  'Set de cubiertos de bambú': 'bamboo cutlery set portable',
  'Cooler biodegradable': 'biodegradable cooler sustainable',
  'Purificador de agua portátil': 'portable water purifier filter',
  'Ventilador manual eco': 'manual fan eco friendly',
  'Radio solar resistente al agua': 'solar radio waterproof outdoor',
  'Mochila con panel solar integrado': 'solar backpack panel integrated'
};

// Cache simple para evitar múltiples llamadas
const imageCache: Record<string, string> = {};

export const getProductImage = async (productName: string): Promise<string> => {
  // Si ya tenemos la imagen en caché, la devolvemos
  if (imageCache[productName]) {
    return imageCache[productName];
  }

  // Si no hay API key, devolver imagen placeholder
  if (!ACCESS_KEY) {
    console.warn('Unsplash API key not found');
    return getPlaceholderImage(productName);
  }

  try {
    const searchTerm = productSearchTerms[productName] || `${productName} eco sustainable`;
    
    const response = await fetch(
      `${UNSPLASH_BASE_URL}/search/photos?query=${encodeURIComponent(searchTerm)}&per_page=1&orientation=portrait`,
      {
        headers: {
          'Authorization': `Client-ID ${ACCESS_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch from Unsplash');
    }

    const data = await response.json();
    
    if (data.results && data.results.length > 0) {
      const image: UnsplashImage = data.results[0];
      const imageUrl = image.urls.small;
      
      // Guardar en caché
      imageCache[productName] = imageUrl;
      
      return imageUrl;
    } else {
      // No se encontraron imágenes, usar placeholder
      return getPlaceholderImage(productName);
    }
  } catch (error) {
    console.error('Error fetching image from Unsplash:', error);
    return getPlaceholderImage(productName);
  }
};

// Función para generar imágenes placeholder con colores verdes
const getPlaceholderImage = (productName: string): string => {
  const colors = ['4ade80', '22c55e', '16a34a', '15803d', '166534'];
  const colorIndex = productName.length % colors.length;
  const color = colors[colorIndex];
  
  // Generar placeholder con Picsum (alternativa gratuita)
  return `https://picsum.photos/seed/${encodeURIComponent(productName)}/400/300?blur=1`;
};

// Función para precargar imágenes de productos más comunes
export const preloadPopularProductImages = async () => {
  const popularProducts = [
    'Cepillo de bambú',
    'Shampoo sólido',
    'Tote bag reutilizable',
    'Set de cubiertos de bambú',
    'Panel solar portátil'
  ];

  for (const product of popularProducts) {
    try {
      await getProductImage(product);
    } catch (error) {
      console.warn(`Failed to preload image for ${product}`);
    }
  }
};