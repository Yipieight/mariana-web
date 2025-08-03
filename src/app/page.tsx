'use client';

import { useState } from 'react';
import { getRecommendation, type ProductRecommendation } from './data/products';

interface Question {
  id: string;
  title: string;
  subtitle: string;
  options: Array<{
    value: string;
    label: string;
    emoji: string;
  }>;
}

const questions: Question[] = [
  {
    id: 'location',
    title: '¿Dónde vivís?',
    subtitle: 'Tu entorno influye en qué productos son más útiles para tu día a día',
    options: [
      { value: 'Ciudad', label: 'Ciudad', emoji: '🏙️' },
      { value: 'Campo', label: 'Campo', emoji: '🌾' },
      { value: 'Playa', label: 'Playa', emoji: '🏖️' }
    ]
  },
  {
    id: 'value',
    title: '¿Qué valorás más en tu día a día?',
    subtitle: 'Esto nos ayuda a encontrar productos que realmente se adapten a tu estilo de vida',
    options: [
      { value: 'Cuidado personal', label: 'Cuidado personal', emoji: '🌸' },
      { value: 'Cocina ecológica', label: 'Cocina ecológica', emoji: '🥗' },
      { value: 'Ahorro de energía', label: 'Ahorro de energía', emoji: '💡' }
    ]
  },
  {
    id: 'commitment',
    title: '¿Qué tan comprometido/a estás con el consumo sostenible?',
    subtitle: 'No hay respuestas correctas o incorrectas, solo queremos conocerte mejor',
    options: [
      { value: 'Nunca', label: 'Recién empiezo (nunca compré productos ecológicos)', emoji: '🌱' },
      { value: 'A veces', label: 'A veces busco opciones verdes', emoji: '🌿' },
      { value: 'Siempre', label: 'Siempre elijo opciones sostenibles', emoji: '🌳' }
    ]
  }
];

const productEmojis: Record<string, string> = {
  'Cepillo de bambú': '🦷',
  'Shampoo sólido': '🧴',
  'Desodorante ecológico': '🌿',
  'Tote bag reutilizable': '🛍️',
  'Envases de silicona': '📦',
  'Filtro de agua de carbón': '💧',
  'Luz LED portátil': '🔦',
  'Bombilla LED inteligente': '💡',
  'Cargador solar USB': '🔌',
  'Jabón artesanal de glicerina': '🧼',
  'Crema hidratante ecológica': '🧴',
  'Kit de higiene zero waste': '🎁',
  'Bolsas reutilizables de tela': '👜',
  'Frascos de vidrio herméticos': '🫙',
  'Compostadora doméstica': '🗑️',
  'Termo de acero inoxidable': '🍵',
  'Lámpara solar de jardín': '🏮',
  'Panel solar portátil': '☀️',
  'Protector solar mineral': '🧴',
  'Champú sólido para agua salada': '🌊',
  'Kit beach clean': '🧽',
  'Set de cubiertos de bambú': '🍴',
  'Cooler biodegradable': '🧊',
  'Purificador de agua portátil': '💧',
  'Ventilador manual eco': '🪭',
  'Radio solar resistente al agua': '📻',
  'Mochila con panel solar integrado': '🎒'
};

export default function GreenMatchQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recommendation, setRecommendation] = useState<ProductRecommendation | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const goToNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate recommendation
      const result = getRecommendation(
        answers.location,
        answers.value,
        answers.commitment
      );
      setRecommendation(result);
      setShowResult(true);
    }
  };

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setRecommendation(null);
    setShowResult(false);
  };

  const currentQuestionData = questions[currentQuestion];
  const isAnswered = currentQuestionData && answers[currentQuestionData.id];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResult && recommendation) {
    return (
      <div className="main-container">
        <div className="quiz-wrapper">
          <div className="result-card">
            <div className="result-header">
              <div className="result-badge">
                ¡Tu producto ideal!
              </div>
              <h1 className="product-name">{recommendation.product}</h1>
              <div className="product-image">
                {productEmojis[recommendation.product] || '🌱'}
              </div>
            </div>
            
            <p className="product-benefit">
              {recommendation.benefit}
            </p>
            
            <p className="motivational-phrase">
              &quot;{recommendation.motivationalPhrase}&quot;
            </p>
            
            <button onClick={restart} className="restart-button">
              🔄 Intentar de nuevo
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="quiz-wrapper">
        {/* Header */}
        <div className="header">
          <h1 className="logo">Green Match</h1>
          <p className="subtitle">
            Descubrí el producto ecológico perfecto para tu estilo de vida
          </p>
        </div>

        {/* Progress */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="progress-text">
            Pregunta {currentQuestion + 1} de {questions.length}
          </p>
        </div>

        {/* Question Card */}
        <div className="question-card">
          <div className="question-header">
            <div className="question-number">
              Pregunta {currentQuestion + 1}
            </div>
            <h2 className="question-title">
              {currentQuestionData.title}
            </h2>
            <p className="question-subtitle">
              {currentQuestionData.subtitle}
            </p>
          </div>

          <div className="options-grid">
            {currentQuestionData.options.map((option) => (
              <button
                key={option.value}
                className={`option-button ${
                  answers[currentQuestionData.id] === option.value ? 'selected' : ''
                }`}
                onClick={() => handleAnswer(currentQuestionData.id, option.value)}
              >
                <span className="option-text">{option.label}</span>
                <span className="option-emoji">{option.emoji}</span>
              </button>
            ))}
          </div>

          <div className="navigation">
            <button
              onClick={goToPrevious}
              disabled={currentQuestion === 0}
              className="nav-button"
            >
              ← Anterior
            </button>
            
            <button
              onClick={goToNext}
              disabled={!isAnswered}
              className="nav-button primary"
            >
              {currentQuestion === questions.length - 1 ? 'Ver mi producto 🌱' : 'Siguiente →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}