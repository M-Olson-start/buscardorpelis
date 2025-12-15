import React from 'react';




export const moviesData = [
  {
    id: 1,
    title: "Evita, El Funeral",
    theme: "Historia",
    description: "Un documental",
    duration: "120 min",
    rating: 4.8,
    year: 2009,
    poster: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR3AJjxzA_uTR8XSlchh3XUZOOtsHTR1bxQfspQF82EKnonAaVjCgIKqXZ9LnfHutDHXfTrxHS0hWaD9SN_g5sHfIlp4OYWhg",
    director: "Jonathan Martin"
  },
  {
    id: 2,
    title: "El Universo: Una Odisea del Espacio-Tiempo",
    theme: "Ciencias",
    description: "Una serie documental que explora los misterios del cosmos, desde las partículas subatómicas hasta las galaxias más distantes.",
    duration: "45 min",
    rating: 4.9,
    year: 2014,
    poster: "https://images.unsplash.com/photo-1575467678971-7cd5c2937dc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZWR1Y2F0aW9uJTIwZmlsbXxlbnwxfHx8fDE3NTc1MDcyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    director: "Neil deGrasse Tyson"
  },
  {
    id: 3,
    title: "Shakespeare en Acción",
    theme: "Literatura",
    description: "Una adaptación cinematográfica que acerca las obras de Shakespeare a las nuevas generaciones con un enfoque moderno y dinámico.",
    duration: "95 min",
    rating: 4.6,
    year: 2018,
    poster: "https://images.unsplash.com/photo-1599402351482-f66f0a807675?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXRlcmF0dXJlJTIwYm9vayUyMG1vdmllfGVufDF8fHx8MTc1NzUwNzI3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    director: "Emma Thompson"
  },
  {
    id: 4,
    title: "Nuestro Planeta Azul",
    theme: "Geografía",
    description: "Un documental espectacular sobre los océanos de la Tierra y la vida marina que los habita, desde las profundidades abisales hasta los arrecifes de coral.",
    duration: "85 min",
    rating: 4.7,
    year: 2020,
    poster: "https://images.unsplash.com/photo-1624204761823-4ae9fa33e1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9ncmFwaHklMjBuYXR1cmUlMjBkb2N1bWVudGFyeXxlbnwxfHx8fDE3NTc1MDcyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    director: "David Attenborough"
  },
  {
    id: 5,
    title: "Los Secretos de las Matemáticas",
    theme: "Matemáticas",
    description: "Un documental educativo que revela la belleza y la importancia de las matemáticas en nuestra vida cotidiana y en el universo.",
    duration: "75 min",
    rating: 4.5,
    year: 2019,
    poster: "https://images.unsplash.com/photo-1750776418412-1548a2b3f4b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NTc0NTEwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    director: "Marcus du Sautoy"
  },
  {
    id: 6,
    title: "Grandes Maestros del Arte",
    theme: "Arte",
    description: "Una serie que explora la vida y obra de los artistas más influyentes de la historia, desde da Vinci hasta Picasso.",
    duration: "60 min",
    rating: 4.8,
    year: 2017,
    poster: "https://images.unsplash.com/photo-1614082636396-f8927eb06739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBtdXNldW0lMjBwYWludGluZ3xlbnwxfHx8fDE3NTc1MDcyNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    director: "Simon Schama"
  },
  {
    id: 7,
    title: "El Imperio Romano",
    theme: "Historia",
    description: "Una miniserie documental que recrea la grandeza y la caída del Imperio Romano con recreaciones históricas espectaculares.",
    duration: "180 min",
    rating: 4.7,
    year: 2016,
    poster: "https://images.unsplash.com/photo-1646342029622-12f25838181e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3J5JTIwZG9jdW1lbnRhcnklMjBtb3ZpZXxlbnwxfHx8fDE3NTc1MDcyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    director: "Jeremy Freeston"
  },
  {
    id: 8,
    title: "La Célula: Unidad de Vida",
    theme: "Ciencias",
    description: "Un documental científico que nos adentra en el fascinante mundo microscópico de las células y su funcionamiento.",
    duration: "90 min",
    rating: 4.4,
    year: 2021,
    poster: "https://images.unsplash.com/photo-1575467678971-7cd5c2937dc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZWR1Y2F0aW9uJTIwZmlsbXxlbnwxfHx8fDE3NTc1MDcyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    director: "Sarah Mitchell"
  },
  {
    id: 9,
    title: "Cervantes y el Quijote",
    theme: "Literatura",
    description: "Un análisis profundo de la obra maestra de Cervantes y su impacto en la literatura mundial.",
    duration: "105 min",
    rating: 4.6,
    year: 2015,
    poster: "https://images.unsplash.com/photo-1599402351482-f66f0a807675?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXRlcmF0dXJlJTIwYm9vayUyMG1vdmllfGVufDF8fHx8MTc1NzUwNzI3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    director: "Carlos Saura"
  },
  {
    id: 10,
    title: "Los Continentes en Movimiento",
    theme: "Geografía",
    description: "Un documental sobre la tectónica de placas y cómo los continentes han cambiado a lo largo de millones de años.",
    duration: "70 min",
    rating: 4.5,
    year: 2022,
    poster: "https://images.unsplash.com/photo-1624204761823-4ae9fa33e1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9ncmFwaHklMjBuYXR1cmUlMjBkb2N1bWVudGFyeXxlbnwxfHx8fDE3NTc1MDcyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    director: "James Cameron"
  }
];