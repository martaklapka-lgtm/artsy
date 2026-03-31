/* ── Mock database: 12 flashcards across 3 categories ── */
const CARDS = [

  // ── ERAS ─────────────────────────────────────────────

  {
    id: 1,
    category: 'Eras',
    title: 'The Renaissance',
    period: 'c. 1300 – 1600',
    hint: 'A cultural rebirth originating in 14th-century Florence that revived classical Greek and Roman ideals',
    image: 'https://images.unsplash.com/photo-1581343109297-b4a089f3a66a?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Vaulted painted ceilings of a Renaissance basilica',
    facts: 'The Renaissance was Europe\'s great cultural awakening, originating in Florence and spreading across the continent. Artists abandoned the flat symbolism of medieval painting in favour of naturalism, scientific perspective, and anatomical accuracy. Leonardo da Vinci, Michelangelo, and Raphael elevated painting and sculpture to entirely new heights. Key innovations include Brunelleschi\'s linear perspective, the idealised human figure, and mastery of oil glazing. The period gave us The Last Supper, the Sistine Chapel ceiling, and Botticelli\'s The Birth of Venus.',
    keywords: ['Humanism', 'Perspective', 'Florence', 'Classical Revival']
  },

  {
    id: 2,
    category: 'Eras',
    title: 'The Baroque Period',
    period: 'c. 1600 – 1750',
    hint: 'Born in Counter-Reformation Rome — dramatic chiaroscuro, grand scale, and intense emotion',
    image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Ornate baroque church interior with gilded details',
    facts: 'Baroque art emerged in Rome around 1600 as the Catholic Church used visual splendour to inspire awe and counter the Protestant Reformation. Characterised by dramatic lighting, intense emotion, and ornate grandeur, it spread across Europe with distinct national flavours. Caravaggio pioneered tenebrism — extreme chiaroscuro with pitch-black shadow; Rembrandt mastered psychological portraiture; Rubens brought sensuous dynamism. Bernini\'s St Peter\'s Square colonnade is the movement\'s supreme architectural statement. The Baroque prized theatricality, movement, and the blurring of boundaries between the arts.',
    keywords: ['Counter-Reformation', 'Caravaggio', 'Tenebrism', 'Grandeur']
  },

  {
    id: 3,
    category: 'Eras',
    title: 'Impressionism',
    period: 'c. 1860 – 1886',
    hint: 'Named mockingly after Monet\'s "Impression, Sunrise" — loose brushwork that captured fleeting light',
    image: 'https://images.unsplash.com/photo-1504198266287-1659872e6590?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Soft dappled light on water at golden hour',
    facts: 'Impressionism broke from centuries of academic tradition by prioritising captured light, atmosphere, and spontaneity over precise finish. Monet, Renoir, Degas, Pissarro, and Sisley painted rapidly en plein air — outdoors, in natural light. Their first group exhibition in 1874 was ridiculed; critic Louis Leroy coined "Impressionism" to mock Monet\'s Impression, Sunrise. The movement introduced broken brushwork, visible paint texture, and the radical idea that a transient moment deserved a painting. It dismantled the Academy and opened the door to all modern art that followed.',
    keywords: ['En Plein Air', 'Light', 'Monet', 'Brushwork']
  },

  {
    id: 4,
    category: 'Eras',
    title: 'Romanticism',
    period: 'c. 1780 – 1850',
    hint: 'Emotion over reason — a passionate reaction against the Enlightenment and industrial modernity',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Dramatic mountain landscape with stormy sky',
    facts: 'Romanticism arose as a counter-reaction to the Enlightenment\'s rationalism and the Industrial Revolution\'s mechanisation of life. Artists celebrated emotional intensity, individual freedom, the sublime power of nature, and historical or exotic subjects. J.M.W. Turner dissolved form into light and atmosphere; Caspar David Friedrich placed solitary figures before vast, humbling landscapes; Eugène Delacroix brought vivid colour and political urgency. Liberty Leading the People (1830) became one of art\'s great political images. The movement championed the artist as a passionate creative genius, not a skilled craftsman.',
    keywords: ['The Sublime', 'Nature', 'Emotion', 'Turner']
  },

  // ── STYLES ───────────────────────────────────────────

  {
    id: 5,
    category: 'Styles',
    title: 'Surrealism',
    period: 'Founded c. 1917',
    hint: 'Freudian dreams made visible — irrational imagery erupting from the unconscious mind',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Dreamlike double-exposure portrait',
    facts: 'Surrealism emerged from Dada and the psychoanalytic writings of Sigmund Freud. André Breton\'s 1924 Manifesto called for the liberation of the unconscious through automatism and dream imagery. Salvador Dalí\'s melting clocks (The Persistence of Memory, 1931), René Magritte\'s philosophical paradoxes (The Treachery of Images), and Max Ernst\'s frottage techniques unlocked the irrational. Surrealism was as much a philosophy as a style — dedicated to reconciling waking logic with the deeper grammar of dreams and desire. Its influence reaches into contemporary film, advertising, and fashion.',
    keywords: ['Automatism', 'Freud', 'Dalí', 'Magritte']
  },

  {
    id: 6,
    category: 'Styles',
    title: 'Abstract Expressionism',
    period: 'c. 1940s – 1950s',
    hint: 'New York\'s first major art movement — raw emotional energy channelled onto vast canvases',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Vivid abstract paint strokes and splashes of colour',
    facts: 'Abstract Expressionism shifted the global art world\'s centre from Paris to New York after WWII. The movement used abstraction as a vehicle for raw psychological expression. Jackson Pollock\'s radical drip paintings dissolved the boundary between artist and canvas; Mark Rothko\'s luminous colour fields aimed to evoke transcendence and grief; Willem de Kooning reinvented the figure in violent, ecstatic brushwork. The movement had two tendencies: Action Painting (gestural, spontaneous) and Color Field (chromatic, meditative). It established the New York School as the dominant force in postwar culture.',
    keywords: ['Action Painting', 'New York School', 'Pollock', 'Rothko']
  },

  {
    id: 7,
    category: 'Styles',
    title: 'Cubism',
    period: 'c. 1907 – 1930s',
    hint: 'Objects fractured across multiple simultaneous viewpoints — the most radical break with the Renaissance tradition',
    image: 'https://images.unsplash.com/photo-1547826039-a5183dd8b02f?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Geometric angular architecture and shadows',
    facts: 'Cubism was co-invented by Pablo Picasso and Georges Braque between 1907 and 1914, influenced by Cézanne\'s geometric analysis of form and the formal structures of African and Iberian art. Analytic Cubism (1908–12) shattered objects into grey-brown facets, presenting multiple perspectives at once. Synthetic Cubism (from 1912) introduced collage, brighter colour, and mixed media. Picasso\'s Les Demoiselles d\'Avignon (1907) was its genesis; Braque\'s Violin and Candlestick exemplified its logic. Cubism was the single most radical artistic revolution since the Renaissance invention of perspective.',
    keywords: ['Facets', 'Picasso', 'Braque', 'Multiple Perspectives']
  },

  {
    id: 8,
    category: 'Styles',
    title: 'Art Nouveau',
    period: 'c. 1890 – 1910',
    hint: 'Sinuous lines drawn from nature — flowers, vines, and the female form woven into architecture and design',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Organic curved ironwork with botanical motifs',
    facts: 'Art Nouveau was an international decorative style that celebrated organic forms — twisting plant stems, flowing hair, insects, and natural curves — applied across architecture, furniture, jewellery, and posters. It sought to erase the hierarchy between fine and decorative arts, insisting all craftsmanship was worthy of artistic ambition. Gustav Klimt merged symbolism with gilded ornament; Alphonse Mucha\'s lithographic posters became icons of the era; Antoni Gaudí\'s buildings grew into organic fantasy. Centred in Paris, Vienna, Barcelona, and Brussels, it lasted barely two decades before modernism swept it aside.',
    keywords: ['Organic Form', 'Klimt', 'Mucha', 'Gaudí']
  },

  // ── TECHNIQUES ───────────────────────────────────────

  {
    id: 9,
    category: 'Techniques',
    title: 'Chiaroscuro',
    period: 'Renaissance onward',
    hint: 'Italian for "light-dark" — modelling three-dimensional form through dramatic tonal contrast',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'A single face dramatically lit from one side, half in shadow',
    facts: 'Chiaroscuro (Italian: chiaro = light, scuro = dark) is the technique of strong tonal contrast to model three-dimensional form on a flat surface. Leonardo da Vinci refined it into sfumato — gradual, imperceptible tonal transitions. Caravaggio radicalised it into tenebrism: pitch-black backgrounds with a single raking light source creating theatrical, almost violent drama. Rembrandt used chiaroscuro as the basis for extraordinary psychological portraiture — light revealing character and emotion with surgical precision. The technique fundamentally transformed how Western art depicted volume, depth, and human inner life.',
    keywords: ['Tenebrism', 'Sfumato', 'Caravaggio', 'Volume']
  },

  {
    id: 10,
    category: 'Techniques',
    title: 'Pointillism',
    period: 'Developed c. 1886',
    hint: 'Tiny dots of pure unmixed colour — optical blending happens in the viewer\'s eye, not on the palette',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Close-up of vibrant coloured dots on a mosaic surface',
    facts: 'Pointillism was developed by Georges Seurat and Paul Signac in the 1880s, inspired by scientific theories of optical colour perception. Rather than blending pigments on the palette, artists applied tiny dots of pure colour in systematic patterns, allowing the viewer\'s eye to blend them at a distance — a process Seurat called Divisionism or Chromoluminarism. Seurat\'s monumental A Sunday on La Grande Jatte (1884–86) is the definitive work. The technique required immense patience and meticulous planning, in sharp contrast to Impressionism\'s spontaneous approach. Signac later codified its theory in D\'Eugène Delacroix au Néo-impressionnisme (1899).',
    keywords: ['Divisionism', 'Optical Mixing', 'Seurat', 'Colour Theory']
  },

  {
    id: 11,
    category: 'Techniques',
    title: 'Fresco',
    period: 'Antiquity – Renaissance',
    hint: 'From the Italian for "fresh" — pigment applied to wet plaster becomes chemically fused with the wall',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Painted interior of a classical church with high ceilings',
    facts: 'Fresco (buon fresco, "true fresco") is a mural technique where pigments dissolved in water are applied to freshly laid wet lime plaster. As the plaster dries and carbonates, it chemically locks the pigment into the wall permanently. The artist must work section by section (intonaco), completing each patch before it sets — making careful planning essential and revision nearly impossible. Michelangelo\'s Sistine Chapel ceiling (1508–12) remains the supreme achievement in the medium. Raphael\'s Vatican Stanze and the ancient Pompeian murals demonstrate fresco\'s extraordinary two-thousand-year lineage.',
    keywords: ['Buon Fresco', 'Intonaco', 'Michelangelo', 'Plaster']
  },

  {
    id: 12,
    category: 'Techniques',
    title: 'Encaustic',
    period: 'Ancient Egypt – Present',
    hint: 'Hot beeswax mixed with pigment and fused with heat — one of the oldest painting techniques in the world',
    image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Luminous layers of translucent warm-toned material',
    facts: 'Encaustic painting uses heated beeswax mixed with coloured pigments, then fused to the support surface with heat — from the Greek enkaiein, "to burn in." The technique dates to classical antiquity; the Fayum Mummy Portraits (1st–3rd century AD) from Roman Egypt are its greatest surviving examples, their subjects rendered with haunting psychological presence across nearly two millennia. The wax\'s natural translucency builds a luminous depth impossible with other media. Contemporary artist Jasper Johns revived encaustic in his celebrated Flag series (from 1954), exploiting the wax\'s ability to preserve embedded objects, newspaper fragments, and layered marks.',
    keywords: ['Beeswax', 'Fayum Portraits', 'Jasper Johns', 'Luminosity']
  }

];

/* ── State ─────────────────────────────────────────── */
let deck           = [...CARDS];
let index          = 0;
let isFlipped      = false;
let activeCategory = 'all';

/* ── DOM refs ──────────────────────────────────────── */
const flashcard    = document.getElementById('flashcard');
const cardInner    = document.getElementById('cardInner');
const progressFill = document.getElementById('progressFill');
const progressRole = document.getElementById('progressRole');
const progressText = document.getElementById('progressText');
const categoryLabel= document.getElementById('categoryLabel');
const cardCounter  = document.getElementById('cardCounter');
const prevBtn      = document.getElementById('prevBtn');
const nextBtn      = document.getElementById('nextBtn');

// Front
const cardImg      = document.getElementById('cardImg');
const frontCatPill = document.getElementById('frontCatPill');
const hintText     = document.getElementById('hintText');
const cardTitle    = document.getElementById('cardTitle');

// Back
const backCat      = document.getElementById('backCat');
const backTitle    = document.getElementById('backTitle');
const backPeriod   = document.getElementById('backPeriod');
const backFacts    = document.getElementById('backFacts');
const keywords     = document.getElementById('keywords');

/* ── Render ─────────────────────────────────────────── */
function render(animate) {
  if (!deck.length) return;

  const card = deck[index];

  if (animate) {
    flashcard.classList.add('card--refreshing');
    void flashcard.offsetWidth;
    setTimeout(() => flashcard.classList.remove('card--refreshing'), 350);
  }

  // Front
  cardImg.src              = card.image;
  cardImg.alt              = card.imageAlt;
  frontCatPill.textContent = card.category;
  hintText.textContent     = card.hint;
  cardTitle.textContent    = card.title;

  // Back
  backCat.textContent    = card.category;
  backTitle.textContent  = card.title;
  backPeriod.textContent = card.period;
  backFacts.textContent  = card.facts;

  keywords.innerHTML = '';
  card.keywords.forEach(kw => {
    const span = document.createElement('span');
    span.className   = 'keyword';
    span.textContent = kw;
    keywords.appendChild(span);
  });

  // Progress
  const pct = ((index + 1) / deck.length) * 100;
  progressFill.style.width = pct + '%';
  progressRole.setAttribute('aria-valuenow', Math.round(pct));
  progressText.textContent = `Card ${index + 1} of ${deck.length}`;
  cardCounter.textContent  = `${index + 1} / ${deck.length}`;

  // Buttons
  prevBtn.disabled = (index === 0);
  nextBtn.disabled = (index === deck.length - 1);

  // Reset flip without animation
  setFlipped(false, false);
}

function setFlipped(state, animate) {
  if (!animate) {
    cardInner.style.transition = 'none';
    flashcard.classList.toggle('is-flipped', state);
    void cardInner.offsetWidth;
    cardInner.style.transition = '';
  } else {
    flashcard.classList.toggle('is-flipped', state);
  }
  isFlipped = state;
  flashcard.setAttribute('aria-pressed', String(state));
}

/* ── Navigation ─────────────────────────────────────── */
function goNext() {
  if (index < deck.length - 1) { index++; render(true); }
}

function goPrev() {
  if (index > 0) { index--; render(true); }
}

/* ── Category filter ─────────────────────────────────── */
function setCategory(cat) {
  activeCategory = cat;
  deck  = (cat === 'all') ? [...CARDS] : CARDS.filter(c => c.category === cat);
  index = 0;
  categoryLabel.textContent = (cat === 'all') ? 'All Categories' : cat;
  render(false);
}

/* ── Events ─────────────────────────────────────────── */
flashcard.addEventListener('click', () => setFlipped(!isFlipped, true));
nextBtn.addEventListener('click', goNext);
prevBtn.addEventListener('click', goPrev);

document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    setCategory(btn.dataset.cat);
  });
});

document.addEventListener('keydown', e => {
  const onCard = document.activeElement === flashcard || document.activeElement === document.body;
  if ((e.key === ' ' || e.key === 'Enter') && onCard) { e.preventDefault(); setFlipped(!isFlipped, true); }
  if (e.key === 'ArrowRight') { e.preventDefault(); goNext(); }
  if (e.key === 'ArrowLeft')  { e.preventDefault(); goPrev(); }
});

/* ── Init ───────────────────────────────────────────── */
render(false);
