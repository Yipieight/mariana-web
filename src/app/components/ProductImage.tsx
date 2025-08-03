'use client';

import { useState, useEffect } from 'react';
import { getProductImage } from '../service/unsplash';

interface ProductImageProps {
  productName: string;
  fallbackEmoji: string;
  className?: string;
}

export default function ProductImage({ productName, fallbackEmoji, className = '' }: ProductImageProps) {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadImage = async () => {
      try {
        setIsLoading(true);
        setHasError(false);
        
        const url = await getProductImage(productName);
        
        if (isMounted) {
          setImageUrl(url);
        }
      } catch (error) {
        console.error('Error loading product image:', error);
        if (isMounted) {
          setHasError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadImage();

    return () => {
      isMounted = false;
    };
  }, [productName]);

  const handleImageError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  // Si está cargando, mostrar skeleton
  if (isLoading) {
    return (
      <div className={`product-image-container ${className}`}>
        <div className="product-image-skeleton">
          <div className="skeleton-shimmer"></div>
          <div className="loading-emoji">{fallbackEmoji}</div>
        </div>
      </div>
    );
  }

  // Si hay error o no hay imagen, mostrar emoji
  if (hasError) {
    return (
      <div className={`product-image-container ${className}`}>
        <div className="product-image-fallback">
          <span className="fallback-emoji">{fallbackEmoji}</span>
        </div>
      </div>
    );
  }

  // Mostrar imagen real
  return (
    <div className={`product-image-container ${className}`}>
      <img
        src={imageUrl}
        alt={`Imagen de ${productName}`}
        className="product-image-real"
        onError={handleImageError}
        onLoad={handleImageLoad}
        loading="lazy"
      />
    </div>
  );
}