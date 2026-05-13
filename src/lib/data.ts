// Fallback data — used when Sanity is not connected.
// Replace with real content once you've populated Sanity.

export const fallbackRooms = [
  {
    _id: 'pool-1',
    number: '01',
    name: 'Pool Villa One',
    subName: 'The Mahua',
    pricePerNight: 6500,
    sleeps: 2,
    sizeSqM: 62,
    description: 'Closest to the kitchen garden. Private plunge pool, outdoor rain shower, mahua tree shading the deck.',
    features: ['Private plunge pool', 'Outdoor shower', 'King bed', 'Forest-facing deck'],
    available: true,
  },
  {
    _id: 'pool-2',
    number: '02',
    name: 'Pool Villa Two',
    subName: 'The Gulmohar',
    pricePerNight: 6500,
    sleeps: 2,
    sizeSqM: 64,
    description: 'Set back along the bougainvillea path. The deepest pool, a hammock, and a writing desk by the window.',
    features: ['Private plunge pool', 'Hammock + day bed', 'King bed', 'Garden view'],
    available: true,
  },
  {
    _id: 'pool-3',
    number: '03',
    name: 'Pool Villa Three',
    subName: 'The Tendu',
    pricePerNight: 6500,
    sleeps: 3,
    sizeSqM: 72,
    description: 'The largest of the three, with a low loft for a child or a long afternoon\'s reading. Backs onto the forest.',
    features: ['Private plunge pool', 'Sleeping loft', 'King + single', 'Direct forest access'],
    available: true,
  },
];

export const fallbackAdventures = [
  { _id: 'a1', number: '01', title: 'Jungle Safari', subtitle: 'Ratapani Tiger Reserve', duration: '3.5 hrs', startTime: 'Dawn · 05:30', description: 'Open-jeep with a forest-department naturalist. Leopard, sloth bear, gaur, dhole if we\'re lucky; certainly painted spurfowl, malabar hornbill, three kinds of langur.', priceNote: 'Carries 6 guests · ₹4,500 per jeep' },
  { _id: 'a2', number: '02', title: 'Forest Trekking', subtitle: 'Six trails on, four off', duration: '1–5 hrs', startTime: 'Dawn or dusk', description: 'From the 40-minute walk to Aamla Pond to the half-day climb to Hathi Tola overlook. Our naturalist Sahil leads the longer ones; the short trails are signed.', priceNote: 'On us · just ask the front desk' },
  { _id: 'a3', number: '03', title: 'Birdwatching', subtitle: 'Aamla Pond & Hathi Tola', duration: '2 hrs', startTime: 'Dawn or dusk', description: 'Madhya Pradesh sits on a quiet flyway — paradise flycatchers in summer, bar-headed geese in winter. We keep a pair of Swarovskis at the front desk.', priceNote: 'Binoculars provided' },
  { _id: 'a4', number: '04', title: 'Bonfire & Stargazing', subtitle: 'On the lawn, after dinner', duration: 'As long as you like', startTime: 'Dusk onward', description: 'On clear nights we set out a fire, a couple of telescopes, and a flask of jaggery rum. Bhopal\'s bortle 4 sky means the milky way is visible most months.', priceNote: 'Complimentary' },
  { _id: 'a5', number: '05', title: 'Pottery with Mira', subtitle: 'Saturday afternoons', duration: '2 hrs', startTime: '16:00', description: 'Our potter Mira lives in the next village. She\'ll throw with you on the wheel and fire whatever you make in her kiln next week — we\'ll post it to you.', priceNote: '₹1,200 · Saturdays only' },
  { _id: 'a6', number: '06', title: 'Cooking Class', subtitle: 'In the open kitchen', duration: '3 hrs incl. lunch', startTime: '11:00', description: 'Three Bundelkhandi dishes with our cook, Rampyari. Mostly vegetarian. Always too much food. Ends with chai under the gulmohar.', priceNote: '₹1,800 incl. lunch' },
];

export const fallbackAaranyMenu = [
  { _id: 'm1', section: 'mornings', name: 'Garden parathas', description: 'Ghee, gud, set yoghurt', price: 240 },
  { _id: 'm2', section: 'mornings', name: 'Eggs, however', description: 'From our coop · with toast', price: 280 },
  { _id: 'm3', section: 'mornings', name: 'Mahua granola', description: 'House oats, jaggery, seasonal fruit', price: 260 },
  { _id: 'm4', section: 'all-day', name: 'Bundelkhandi thali', description: 'Bharta, dal-bati, mahuari, salad', price: 560 },
  { _id: 'm5', section: 'all-day', name: 'Garden khichdi', description: 'Hand-pounded rice, bay leaf, ghee', price: 380 },
  { _id: 'm6', section: 'all-day', name: 'Wood-fired flatbread', description: "Whatever's growing · changes daily", price: 320 },
  { _id: 'm7', section: 'evenings', name: 'Charcoal-grilled paneer', description: 'Tendu-leaf wrap, mint chutney', price: 440 },
  { _id: 'm8', section: 'evenings', name: 'Slow-cooked goat', description: 'Bone broth, fresh corn roti · Fri/Sat', price: 640 },
  { _id: 'm9', section: 'evenings', name: 'Mahua flower kheer', description: 'With seasonal fruit', price: 260 },
];

export const fallbackPinkleafMenu = [
  { _id: 'p1', section: 'espresso', name: 'Single', description: 'Coorg or Araku', price: 140, restaurant: 'pinkleaf' },
  { _id: 'p2', section: 'espresso', name: 'Double', description: 'Two shots, no fuss', price: 180, restaurant: 'pinkleaf' },
  { _id: 'p3', section: 'espresso', name: 'Cortado', description: 'Steamed milk, a kiss', price: 220, restaurant: 'pinkleaf' },
  { _id: 'p4', section: 'espresso', name: 'Iced filter', description: 'Long, cold, citrusy', price: 260, restaurant: 'pinkleaf' },
  { _id: 'p5', section: 'bakery', name: 'Sourdough toastie', description: 'Bombay cheese, green chutney', price: 320, restaurant: 'pinkleaf' },
  { _id: 'p6', section: 'bakery', name: 'Citrus loaf', description: 'December orange, olive oil', price: 240, restaurant: 'pinkleaf' },
  { _id: 'p7', section: 'bakery', name: 'Mahua brownie', description: 'Single square, no judgment', price: 220, restaurant: 'pinkleaf' },
  { _id: 'p8', section: 'bakery', name: 'Banana bread', description: 'With brown butter', price: 220, restaurant: 'pinkleaf' },
  { _id: 'p9', section: 'garden', name: 'Hibiscus iced tea', description: 'Two-day cold-brewed', price: 220, restaurant: 'pinkleaf' },
  { _id: 'p10', section: 'garden', name: 'Tulsi limeade', description: 'Mint, gud, soda', price: 200, restaurant: 'pinkleaf' },
  { _id: 'p11', section: 'garden', name: 'Kokum cooler', description: 'From the Konkan', price: 220, restaurant: 'pinkleaf' },
];

export const fallbackBeans = [
  { _id: 'b1', name: 'Coorg, Karnataka', description: 'Single-estate arabica from the Hattihole estate. Honey, dark cocoa, a soft fig finish.', roastLevel: 'medium' },
  { _id: 'b2', name: 'Araku Valley, AP', description: 'A natural-process from a tribal cooperative. Stone fruit, jaggery, and a long, almost-tea finish.', roastLevel: 'light' },
  { _id: 'b3', name: 'Chikmagalur Robusta', description: 'When you want espresso that punches back. Cocoa, peanut, a thick crema.', roastLevel: 'dark' },
];

export const fallbackCafeHours = {
  schedule: [
    { day: 'Tuesday', hours: '06:00 — 18:00', note: '' },
    { day: 'Wednesday', hours: '06:00 — 18:00', note: '' },
    { day: 'Thursday', hours: '06:00 — 18:00', note: '' },
    { day: 'Friday', hours: '06:00 — 22:00', note: 'jazz from 8' },
    { day: 'Saturday', hours: '06:00 — 22:00', note: '' },
    { day: 'Sunday', hours: '07:00 — 18:00', note: 'live music 11–14' },
    { day: 'Monday', hours: 'Closed', note: 'resting' },
  ],
};

export const fallbackGallery = [
  { _id: 'g1', caption: 'Pool villa, golden hour', aspectRatio: 'portrait', order: 1 },
  { _id: 'g2', caption: 'Open jeep, red dirt track', aspectRatio: 'wide', order: 2 },
  { _id: 'g3', caption: 'Breakfast on the veranda', aspectRatio: 'square', order: 3 },
  { _id: 'g4', caption: 'Mahua tree, looking up', aspectRatio: 'portrait', order: 4 },
  { _id: 'g5', caption: 'Pink Leaf café — pink wall, single chair', aspectRatio: 'square', order: 5 },
  { _id: 'g6', caption: 'Cook, Rampyari, in the kitchen', aspectRatio: 'portrait', order: 6 },
  { _id: 'g7', caption: 'Path through the garden, monsoon', aspectRatio: 'wide', order: 7 },
  { _id: 'g8', caption: 'Bonfire on the lawn', aspectRatio: 'square', order: 8 },
  { _id: 'g9', caption: 'Sloth bear, at distance, dusk', aspectRatio: 'portrait', order: 9 },
  { _id: 'g10', caption: 'Hammock under gulmohar', aspectRatio: 'square', order: 10 },
  { _id: 'g11', caption: 'Pottery — Mira at the wheel', aspectRatio: 'portrait', order: 11 },
  { _id: 'g12', caption: 'Plunge pool, water at rest', aspectRatio: 'portrait', order: 12 },
];

export const fallbackRenovationNotice = {
  active: true,
  headline: 'A NOTE FROM THE FRONT DESK · 07 MAY 2026',
  body: "The restaurant is part-way through renovation. Some of the kitchen is open, some isn't — the menu is shorter than usual until we're done. As a thank-you for your patience, we're applying a 20% goodwill discount on all stays during this period.",
  discountPercent: 20,
};

export const fallbackTestimonial = {
  quote: "We came for two nights and stayed five. The pool, the silence, the way Ramu brings the coffee without being asked — we'll be back.",
  author: 'Seema S.',
  meta: 'Booked May 2026 · 3 villas',
};
