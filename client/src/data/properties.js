const properties = [
  {
    id: 'p1',
    title: 'Skyline Residences',
    type: 'Residential',
    location: 'Bandra East',
    neighborhood: 'SeaView District',
    price: 9800000,
    area: 1980,
    bedrooms: 4,
    baths: 3,
    status: 'For Sale',
    tag: 'Featured',
    featured: true,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80'
    ],
    description: 'A premium waterfront apartment with glass facades, lounge terraces, and concierge services. Crafted for a refined city lifestyle with smart home integration.',
    agent: {
      name: 'Ayesha Kapoor',
      phone: '+91 98765 43210',
      email: 'ayesha@mannatspaces.in'
    }
  },
  {
    id: 'p2',
    title: 'Nova Business Hub',
    type: 'Commercial',
    location: 'Connaught Place',
    neighborhood: 'Central Business District',
    price: 22500000,
    area: 5100,
    bedrooms: 0,
    baths: 4,
    status: 'For Lease',
    tag: 'Luxury',
    featured: false,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=1400&q=80'
    ],
    description: 'A curated commercial campus with open-plan offices, experiential amenities, and a landmark glass atrium. Ideal for premium enterprise presence.',
    agent: {
      name: 'Rohan Malhotra',
      phone: '+91 91234 56789',
      email: 'rohan@mannatspaces.in'
    }
  },
  {
    id: 'p3',
    title: 'Aurora Plot Estate',
    type: 'Plot',
    location: 'Hebbal',
    neighborhood: 'Emerald Ridge',
    price: 4300000,
    area: 2400,
    bedrooms: 0,
    baths: 0,
    status: 'For Sale',
    tag: 'Elite',
    featured: false,
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80'
    ],
    description: 'A future-facing premium plot near the city ring road with master-planned infrastructure and sunset views. Designed for luxury residential development.',
    agent: {
      name: 'Nisha Verma',
      phone: '+91 99876 54321',
      email: 'nisha@mannatspaces.in'
    }
  }
];

export default properties;
