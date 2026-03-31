/* ── Flashcard database — public domain images via Wikimedia Commons ── */
const CARDS = [

  // ── ERAS ─────────────────────────────────────────────

  {
    id: 1,
    category: 'Eras',
    title: 'The Renaissance',
    period: '14th – 17th Century',
    hint: 'Began in 14th-century Florence — a "rebirth" of classical Greek and Roman learning, beauty, and humanism',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1000px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
    imageAlt: 'Raphael — The School of Athens, c. 1509–11',
    imageCredit: 'Raphael · The School of Athens · c. 1509–11 · Vatican',
    keyArtists: ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Sandro Botticelli', 'Donatello'],
    philosophy: 'Humanist revival of classical antiquity through mathematical linear perspective, anatomical precision, and the idealised human figure as the measure of all things.',
    keywords: ['Humanism', 'Linear Perspective', 'Naturalism', 'Florence']
  },

  {
    id: 2,
    category: 'Eras',
    title: 'The Baroque',
    period: '17th – Early 18th Century',
    hint: 'Counter-Reformation grandeur — extreme drama, dark shadows, and ornate excess meant to overwhelm the senses',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg',
    imageAlt: 'Johannes Vermeer — Girl with a Pearl Earring, 1665',
    imageCredit: 'Vermeer · Girl with a Pearl Earring · 1665 · Mauritshuis, The Hague',
    keyArtists: ['Caravaggio', 'Rembrandt van Rijn', 'Johannes Vermeer', 'Peter Paul Rubens', 'Gian Lorenzo Bernini'],
    philosophy: 'Theatricality, movement, and tenebrism (extreme light-dark contrast) used to produce emotional intensity and religious awe — art as drama.',
    keywords: ['Tenebrism', 'Counter-Reformation', 'Drama', 'Chiaroscuro']
  },

  {
    id: 3,
    category: 'Eras',
    title: 'Impressionism',
    period: 'c. 1860 – 1886',
    hint: 'Named mockingly after Monet\'s painting "Impression, Sunrise" by a critic who meant to insult it',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/960px-Monet_-_Impression%2C_Sunrise.jpg',
    imageAlt: 'Claude Monet — Impression, Sunrise, 1872',
    imageCredit: 'Claude Monet · Impression, Sunrise · 1872 · Musée Marmottan, Paris',
    keyArtists: ['Claude Monet', 'Pierre-Auguste Renoir', 'Edgar Degas', 'Camille Pissarro', 'Berthe Morisot'],
    philosophy: 'Capture the transient effects of light and atmosphere en plein air with loose, visible brushwork — prioritising momentary sensation over academic polish.',
    keywords: ['En Plein Air', 'Broken Brushwork', 'Light', 'Everyday Life']
  },

  {
    id: 4,
    category: 'Eras',
    title: 'Romanticism',
    period: 'c. 1780 – 1850',
    hint: 'A revolt against Enlightenment reason — wild nature, emotion, and the "sublime" terror of the infinite',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg',
    imageAlt: 'Caspar David Friedrich — Wanderer above the Sea of Fog, c. 1818',
    imageCredit: 'C. D. Friedrich · Wanderer above the Sea of Fog · c. 1818 · Hamburger Kunsthalle',
    keyArtists: ['Caspar David Friedrich', 'J.M.W. Turner', 'Eugène Delacroix', 'Théodore Géricault', 'Francisco Goya'],
    philosophy: 'Privileged emotion, imagination, and the sublime over rationalism. The solitary individual confronting vast, indifferent nature became the defining Romantic image.',
    keywords: ['The Sublime', 'Emotion', 'Nature', 'Individualism']
  },

  // ── STYLES ───────────────────────────────────────────

  {
    id: 5,
    category: 'Styles',
    title: 'Surrealism',
    period: 'Founded 1924',
    hint: 'André Breton\'s Manifesto called for art from the unconscious — dreamlike imagery that defies waking logic',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Vassily_Kandinsky%2C_1911_-_Composition_IV.jpg/960px-Vassily_Kandinsky%2C_1911_-_Composition_IV.jpg',
    imageAlt: 'Giorgio de Chirico — The Uncertainty of the Poet, 1913',
    imageCredit: 'Inspired by: de Chirico · metaphysical precursor to Surrealism · 1913',
    keyArtists: ['Salvador Dalí', 'René Magritte', 'Max Ernst', 'Joan Miró', 'Frida Kahlo'],
    philosophy: 'Liberate the unconscious through automatism and dream imagery. Juxtapose unrelated objects in impossible contexts to create uncanny, thought-provoking dissonance.',
    keywords: ['Automatism', 'The Uncanny', 'Freudian Dreams', 'Irrational']
  },

  {
    id: 6,
    category: 'Styles',
    title: 'Abstract Expressionism',
    period: '1940s – 1950s',
    hint: 'America\'s first globally dominant art movement — New York overtook Paris as the world\'s art capital',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Vassily_Kandinsky%2C_1911_-_Composition_IV.jpg/960px-Vassily_Kandinsky%2C_1911_-_Composition_IV.jpg',
    imageAlt: 'Wassily Kandinsky — Composition IV, 1911 (precursor to Abstract Expressionism)',
    imageCredit: 'Wassily Kandinsky · Composition IV · 1911 · Kunstsammlung NRW, Düsseldorf',
    keyArtists: ['Jackson Pollock', 'Mark Rothko', 'Willem de Kooning', 'Franz Kline', 'Lee Krasner'],
    philosophy: 'Pure emotional expression through gesture, scale, and colour — the act of painting itself becomes the subject. Split into Action Painting (gestural) and Color Field (meditative).',
    keywords: ['Action Painting', 'Color Field', 'Gesture', 'New York School']
  },

  {
    id: 7,
    category: 'Styles',
    title: 'Cubism',
    period: 'c. 1907 – 1930s',
    hint: 'Co-invented by Picasso and Braque after being inspired by Cézanne\'s geometric analysis and African masks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Juan_Gris_-_Portrait_of_Pablo_Picasso_-_Google_Art_Project.jpg/800px-Juan_Gris_-_Portrait_of_Pablo_Picasso_-_Google_Art_Project.jpg',
    imageAlt: 'Juan Gris — Portrait of Pablo Picasso, 1912',
    imageCredit: 'Juan Gris · Portrait of Pablo Picasso · 1912 · Art Institute of Chicago',
    keyArtists: ['Pablo Picasso', 'Georges Braque', 'Juan Gris', 'Fernand Léger', 'Robert Delaunay'],
    philosophy: 'Shatter the single-viewpoint illusion of the Renaissance by depicting objects from multiple simultaneous perspectives, flattened into fragmented geometric facets.',
    keywords: ['Facets', 'Multiple Viewpoints', 'Collage', 'Analytic & Synthetic']
  },

  {
    id: 8,
    category: 'Styles',
    title: 'Art Nouveau',
    period: 'c. 1890 – 1910',
    hint: 'Sinuous lines drawn from nature — flowing hair, plant stems, and peacock feathers translated into architecture and design',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/800px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg',
    imageAlt: 'Gustav Klimt — The Kiss, 1907–08',
    imageCredit: 'Gustav Klimt · The Kiss · 1907–08 · Österreichische Galerie Belvedere, Vienna',
    keyArtists: ['Gustav Klimt', 'Alphonse Mucha', 'Antoni Gaudí', 'Hector Guimard', 'Louis Comfort Tiffany'],
    philosophy: 'Unify fine and decorative arts through organic, sinuous forms drawn from nature. Elevate craft, reject industrial mass production, and embrace the total artwork (Gesamtkunstwerk).',
    keywords: ['Organic Form', 'Total Artwork', 'Decorative Arts', 'Symbolism']
  },

  // ── TECHNIQUES ───────────────────────────────────────

  {
    id: 9,
    category: 'Techniques',
    title: 'Chiaroscuro',
    period: 'Renaissance onward',
    hint: 'Italian: chiaro (light) + scuro (dark) — modelling solid form through gradations of shadow',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Michelangelo_Caravaggio_023.jpg/800px-Michelangelo_Caravaggio_023.jpg',
    imageAlt: 'Caravaggio — Judith Beheading Holofernes, c. 1598–99',
    imageCredit: 'Caravaggio · Judith Beheading Holofernes · c. 1598–99 · Galleria Nazionale d\'Arte Antica, Rome',
    keyArtists: ['Caravaggio (tenebrism)', 'Rembrandt van Rijn', 'Leonardo da Vinci (sfumato)', 'Vermeer', 'Georges de La Tour'],
    philosophy: 'Create three-dimensionality and psychological drama through the radical opposition of light and dark. In tenebrism, figures emerge from pitch-black voids lit by a single raking source.',
    keywords: ['Tenebrism', 'Sfumato', 'Modelling', 'Volume']
  },

  {
    id: 10,
    category: 'Techniques',
    title: 'Pointillism',
    period: 'c. 1886 onward',
    hint: 'Pure-colour dots placed side-by-side — the viewer\'s eye optically mixes them at a distance rather than the palette',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/960px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg',
    imageAlt: 'Georges Seurat — A Sunday on La Grande Jatte, 1884–86',
    imageCredit: 'Georges Seurat · A Sunday on La Grande Jatte · 1884–86 · Art Institute of Chicago',
    keyArtists: ['Georges Seurat', 'Paul Signac', 'Camille Pissarro', 'Maximilien Luce'],
    philosophy: 'Apply unmixed colour in systematic dots (Divisionism / Chromoluminarism), exploiting Chevreul\'s simultaneous-contrast theory to produce greater luminosity than blended pigments.',
    keywords: ['Divisionism', 'Optical Mixing', 'Colour Theory', 'Neo-Impressionism']
  },

  {
    id: 11,
    category: 'Techniques',
    title: 'Fresco',
    period: 'Ancient Greece – Renaissance',
    hint: 'Italian for "fresh" — pigment dissolved in water is applied to still-wet lime plaster and becomes part of the wall',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/960px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg',
    imageAlt: 'Michelangelo — The Creation of Adam, Sistine Chapel, 1508–12',
    imageCredit: 'Michelangelo · The Creation of Adam · 1508–12 · Sistine Chapel, Vatican',
    keyArtists: ['Michelangelo', 'Raphael', 'Giotto di Bondone', 'Masaccio', 'Diego Rivera'],
    philosophy: 'Paint chemically bonded to the wall — permanent and impossible to touch up once dry. Each section (giornata) must be completed in a single day before the plaster sets.',
    keywords: ['Buon Fresco', 'Giornata', 'Lime Plaster', 'Permanent Bond']
  },

  {
    id: 12,
    category: 'Techniques',
    title: 'Encaustic',
    period: 'Ancient Egypt – Present',
    hint: 'From Greek enkaiein, "to burn in" — hot beeswax mixed with pigment, fused to the surface with heat',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Fayum-01.jpg/600px-Fayum-01.jpg',
    imageAlt: 'Fayum Mummy Portrait — encaustic on wood, c. 100–150 AD',
    imageCredit: 'Fayum Mummy Portrait · encaustic on wood · c. 100–150 AD · Roman Egypt',
    keyArtists: ['Fayum portrait artists (1st–3rd c. AD)', 'Jasper Johns', 'Diego Rivera', 'Brice Marden'],
    philosophy: 'Build translucent, luminous layers of beeswax and pigment, fusing each with heat. The wax\'s depth and warm glow produces a presence impossible to achieve with oil or tempera.',
    keywords: ['Beeswax', 'Translucency', 'Fayum Portraits', 'Encaustic Wax']
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

// Back (structured)
const backCat       = document.getElementById('backCat');
const backTitle     = document.getElementById('backTitle');
const backPeriod    = document.getElementById('backPeriod');
const backArtists   = document.getElementById('backArtists');
const backPhilosophy= document.getElementById('backPhilosophy');
const imageCredit   = document.getElementById('imageCredit');
const keywords      = document.getElementById('keywords');

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

  // Back (structured)
  backCat.textContent        = card.category;
  backTitle.textContent      = card.title;
  backPeriod.textContent     = card.period;
  backArtists.textContent    = card.keyArtists.join('  ·  ');
  backPhilosophy.textContent = card.philosophy;
  imageCredit.textContent    = card.imageCredit;

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

  prevBtn.disabled = (index === 0);
  nextBtn.disabled = (index === deck.length - 1);

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
