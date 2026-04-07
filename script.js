/* ── Wikimedia helper ──────────────────────────────── */
const WM = (file, w = 800) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${w}`;

const CARDS = [
  { id:1, category:{en:'Eras',pl:'Epoki'}, title:{en:'The Renaissance',pl:'Renesans'}, period:{en:'14th – 17th Century',pl:'XIV – XVII wiek'},
    hint:{en:'Began in 14th-century Florence — a "rebirth" of classical Greek and Roman learning, beauty, and humanism',pl:'Zrodził się w XIV-wiecznej Florencji — „odrodzenie" klasycznej kultury greckiej i rzymskiej, piękna i humanizmu'},
    image:WM('"The_School_of_Athens"_by_Raffaello_Sanzio_da_Urbino.jpg'), imageAlt:'Raphael — The School of Athens, c. 1509–11', imageCredit:'Raphael · The School of Athens · c. 1509–11 · Vatican',
    keyArtists:['Leonardo da Vinci','Michelangelo','Raphael','Sandro Botticelli','Donatello'],
    philosophy:{en:'Humanist revival of classical antiquity through mathematical linear perspective, anatomical precision, and the idealised human figure as the measure of all things.',pl:'Humanistyczne odrodzenie starożytności przez matematyczną perspektywę liniową, precyzję anatomiczną i wyidealizowaną postać ludzką jako miarę wszechrzeczy.'},
    keywords:{en:['Humanism','Linear Perspective','Naturalism','Florence'],pl:['Humanizm','Perspektywa liniowa','Naturalizm','Florencja']}},
  { id:2, category:{en:'Eras',pl:'Epoki'}, title:{en:'The Baroque',pl:'Barok'}, period:{en:'17th – Early 18th Century',pl:'XVII – pocz. XVIII w.'},
    hint:{en:'Counter-Reformation grandeur — extreme drama, dark shadows, and ornate excess meant to overwhelm the senses',pl:'Przepych kontrreformacji — skrajny dramatyzm, ciemne cienie i ornamentalna przesada mające przytłaczać zmysły'},
    image:WM('1665_Girl_with_a_Pearl_Earring.jpg'), imageAlt:'Johannes Vermeer — Girl with a Pearl Earring, 1665', imageCredit:'Vermeer · Girl with a Pearl Earring · 1665 · Mauritshuis, The Hague',
    keyArtists:['Caravaggio','Rembrandt van Rijn','Johannes Vermeer','Peter Paul Rubens','Gian Lorenzo Bernini'],
    philosophy:{en:'Theatricality, movement, and tenebrism used to produce emotional intensity and religious awe — art as drama.',pl:'Teatralność, ruch i tenebryzmizm stosowane do wywoływania emocjonalnego napięcia i religijnego lęku — sztuka jako dramat.'},
    keywords:{en:['Tenebrism','Counter-Reformation','Drama','Chiaroscuro'],pl:['Tenebryzmizm','Kontrreformacja','Dramatyzm','Chiaroscuro']}},
  { id:3, category:{en:'Eras',pl:'Epoki'}, title:{en:'Impressionism',pl:'Impresjonizm'}, period:{en:'c. 1860 – 1886',pl:'ok. 1860 – 1886'},
    hint:{en:'Named mockingly after Monet\'s painting "Impression, Sunrise" by a critic who meant to insult it',pl:'Nazwa pochodzi z kpiny krytyka po obrazie Moneta „Impresja, wschód słońca" — miała być obelgą'},
    image:WM('Monet_-_Impression,_Sunrise.jpg'), imageAlt:'Claude Monet — Impression, Sunrise, 1872', imageCredit:'Claude Monet · Impression, Sunrise · 1872 · Musée Marmottan, Paris',
    keyArtists:['Claude Monet','Pierre-Auguste Renoir','Edgar Degas','Camille Pissarro','Berthe Morisot'],
    philosophy:{en:'Capture the transient effects of light and atmosphere en plein air with loose brushwork — prioritising momentary sensation over academic polish.',pl:'Uchwycenie ulotnych efektów światła i atmosfery w plenerze swobodnym pociągnięciem pędzla — chwilowe wrażenie ponad akademicką perfekcją.'},
    keywords:{en:['En Plein Air','Broken Brushwork','Light','Everyday Life'],pl:['Plenery','Swobodny pędzel','Światło','Życie codzienne']}},
  { id:4, category:{en:'Eras',pl:'Epoki'}, title:{en:'Romanticism',pl:'Romantyzm'}, period:{en:'c. 1780 – 1850',pl:'ok. 1780 – 1850'},
    hint:{en:'A revolt against Enlightenment reason — wild nature, emotion, and the "sublime" terror of the infinite',pl:'Bunt przeciw rozumowi Oświecenia — dzika natura, emocje i „wzniosły" lęk wobec nieskończoności'},
    image:WM('Caspar_David_Friedrich_-_Wanderer_above_the_Sea_of_Fog.jpeg'), imageAlt:'Caspar David Friedrich — Wanderer above the Sea of Fog, c. 1818', imageCredit:'C. D. Friedrich · Wanderer above the Sea of Fog · c. 1818 · Hamburger Kunsthalle',
    keyArtists:['Caspar David Friedrich','J.M.W. Turner','Eugène Delacroix','Théodore Géricault','Francisco Goya'],
    philosophy:{en:'Privileged emotion, imagination, and the sublime over rationalism. The solitary individual confronting vast, indifferent nature became the defining Romantic image.',pl:'Emocja, wyobraźnia i wzniosłość ponad racjonalizmem. Samotna jednostka wobec rozległej, obojętnej natury stała się ikonicznym obrazem romantyzmu.'},
    keywords:{en:['The Sublime','Emotion','Nature','Individualism'],pl:['Wzniosłość','Emocja','Natura','Indywidualizm']}},
  { id:5, category:{en:'Styles',pl:'Style'}, title:{en:'Surrealism',pl:'Surrealizm'}, period:{en:'Founded 1924',pl:'od 1924'},
    hint:{en:'André Breton\'s Manifesto called for art from the unconscious — dreamlike imagery that defies waking logic',pl:'Manifest André Bretona wzywał do sztuki z nieświadomości — oniryczne obrazy przeczące logice jawy'},
    image:WM('John_Henry_Fuseli_-_The_Nightmare.JPG'), imageAlt:'Henry Fuseli — The Nightmare, 1781', imageCredit:'Henry Fuseli · The Nightmare · 1781 · Detroit Institute of Arts',
    keyArtists:['Salvador Dalí','René Magritte','Max Ernst','Joan Miró','Frida Kahlo'],
    philosophy:{en:'Liberate the unconscious through automatism and dream imagery. Juxtapose unrelated objects in impossible contexts to create uncanny, thought-provoking dissonance.',pl:'Wyzwolenie nieświadomości przez automatyzm i oniryczne obrazy. Zestawianie niepowiązanych obiektów w niemożliwych kontekstach — niesamowity, prowokujący dysonans.'},
    keywords:{en:['Automatism','The Uncanny','Freudian Dreams','Irrational'],pl:['Automatyzm','Niesamowitość','Sny freudowskie','Irracjonalizm']}},
  { id:6, category:{en:'Styles',pl:'Style'}, title:{en:'Abstract Expressionism',pl:'Ekspresjonizm Abstrakcyjny'}, period:{en:'1940s – 1950s',pl:'lata 40.–50. XX w.'},
    hint:{en:'America\'s first globally dominant art movement — New York overtook Paris as the world\'s art capital',pl:'Pierwszy globalnie dominujący ruch artystyczny Ameryki — Nowy Jork przejął od Paryża palmę pierwszeństwa'},
    image:WM('Vassily_Kandinsky,_1911_-_Composition_No_4.jpg'), imageAlt:'Wassily Kandinsky — Composition No. 4, 1911', imageCredit:'Wassily Kandinsky · Composition No. 4 · 1911 · Kunstsammlung NRW, Düsseldorf',
    keyArtists:['Jackson Pollock','Mark Rothko','Willem de Kooning','Franz Kline','Lee Krasner'],
    philosophy:{en:'Pure emotional expression through gesture, scale, and colour — the act of painting becomes the subject. Split into Action Painting (gestural) and Color Field (meditative).',pl:'Czysta ekspresja emocji przez gest, skalę i kolor — sam akt malowania staje się tematem. Podział na Action Painting (gestyczny) i Color Field (medytacyjny).'},
    keywords:{en:['Action Painting','Color Field','Gesture','New York School'],pl:['Action Painting','Color Field','Gest','Szkoła nowojorska']}},
  { id:7, category:{en:'Styles',pl:'Style'}, title:{en:'Cubism',pl:'Kubizm'}, period:{en:'c. 1907 – 1930s',pl:'ok. 1907 – lata 30.'},
    hint:{en:'Co-invented by Picasso and Braque after being inspired by Cézanne\'s geometric analysis and African masks',pl:'Współtworzony przez Picassa i Braque\'a pod wpływem geometrycznej analizy Cézanne\'a i afrykańskich masek'},
    image:WM('Juan_Gris_-_Portrait_of_Pablo_Picasso_-_Google_Art_Project.jpg'), imageAlt:'Juan Gris — Portrait of Pablo Picasso, 1912', imageCredit:'Juan Gris · Portrait of Pablo Picasso · 1912 · Art Institute of Chicago',
    keyArtists:['Pablo Picasso','Georges Braque','Juan Gris','Fernand Léger','Robert Delaunay'],
    philosophy:{en:'Shatter the single-viewpoint illusion of the Renaissance by depicting objects from multiple simultaneous perspectives, flattened into fragmented geometric facets.',pl:'Rozbicie renesansowej iluzji jednego punktu widzenia — obiekty z wielu perspektyw jednocześnie, spłaszczone w geometryczne fragmenty.'},
    keywords:{en:['Facets','Multiple Viewpoints','Collage','Analytic & Synthetic'],pl:['Fasety','Wielość perspektyw','Kolaż','Analityczny i syntetyczny']}},
  { id:8, category:{en:'Styles',pl:'Style'}, title:{en:'Art Nouveau',pl:'Secesja'}, period:{en:'c. 1890 – 1910',pl:'ok. 1890 – 1910'},
    hint:{en:'Sinuous lines drawn from nature — flowing hair, plant stems, and peacock feathers translated into architecture and design',pl:'Faliste linie z natury — płynące włosy, łodygi roślin i pawie pióra przetłumaczone na architekturę i design'},
    image:WM('The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg'), imageAlt:'Gustav Klimt — The Kiss, 1907–08', imageCredit:'Gustav Klimt · The Kiss · 1907–08 · Österreichische Galerie Belvedere, Vienna',
    keyArtists:['Gustav Klimt','Alphonse Mucha','Antoni Gaudí','Hector Guimard','Louis Comfort Tiffany'],
    philosophy:{en:'Unify fine and decorative arts through organic, sinuous forms. Elevate craft, reject industrial mass production, and embrace the total artwork (Gesamtkunstwerk).',pl:'Unifikacja sztuk pięknych i użytkowych przez organiczne, faliste formy natury. Rehabilitacja rzemiosła i idea dzieła totalnego (Gesamtkunstwerk).'},
    keywords:{en:['Organic Form','Total Artwork','Decorative Arts','Symbolism'],pl:['Forma organiczna','Dzieło totalne','Sztuka użytkowa','Symbolizm']}},
  { id:9, category:{en:'Techniques',pl:'Techniki'}, title:{en:'Chiaroscuro',pl:'Chiaroscuro'}, period:{en:'Renaissance onward',pl:'od Renesansu'},
    hint:{en:'Italian: chiaro (light) + scuro (dark) — modelling solid form through gradations of shadow',pl:'Wł.: chiaro (jasny) + scuro (ciemny) — modelowanie bryły przez stopniowanie cienia'},
    image:WM('Caravaggio_-_Giuditta_e_Oloferne_(ca._1599).jpg'), imageAlt:'Caravaggio — Judith Beheading Holofernes, c. 1598–99', imageCredit:"Caravaggio · Judith Beheading Holofernes · c. 1598–99 · Galleria Nazionale d'Arte Antica, Rome",
    keyArtists:['Caravaggio (tenebrism)','Rembrandt van Rijn','Leonardo da Vinci (sfumato)','Vermeer','Georges de La Tour'],
    philosophy:{en:'Create three-dimensionality and psychological drama through the radical opposition of light and dark. In tenebrism, figures emerge from pitch-black voids lit by a single raking source.',pl:'Trójwymiarowość i dramatyzm psychologiczny przez radykalną opozycję światła i ciemności. W tenebryzmie postaci wyłaniają się z czerni oświetlone jednym bocznym źródłem.'},
    keywords:{en:['Tenebrism','Sfumato','Modelling','Volume'],pl:['Tenebryzmizm','Sfumato','Modelunek','Bryła']}},
  { id:10, category:{en:'Techniques',pl:'Techniki'}, title:{en:'Pointillism',pl:'Pointylizm'}, period:{en:'c. 1886 onward',pl:'od ok. 1886'},
    hint:{en:'Pure-colour dots placed side-by-side — the viewer\'s eye optically mixes them at a distance rather than the palette',pl:'Czyste barwne kropki obok siebie — oko widza miesza je optycznie z odległości, a nie paleta malarska'},
    image:WM('A_Sunday_on_La_Grande_Jatte,_Georges_Seurat,_1884.jpg'), imageAlt:'Georges Seurat — A Sunday on La Grande Jatte, 1884–86', imageCredit:'Georges Seurat · A Sunday on La Grande Jatte · 1884–86 · Art Institute of Chicago',
    keyArtists:['Georges Seurat','Paul Signac','Camille Pissarro','Maximilien Luce'],
    philosophy:{en:'Apply unmixed colour in systematic dots (Divisionism), exploiting simultaneous-contrast theory to produce greater luminosity than blended pigments.',pl:'Nakładanie niemieszanego koloru systematycznymi kropkami (dywizjonizm), wykorzystując teorię kontrastu równoczesnego dla większej luminancji niż przy mieszaniu pigmentów.'},
    keywords:{en:['Divisionism','Optical Mixing','Colour Theory','Neo-Impressionism'],pl:['Dywizjonizm','Mieszanie optyczne','Teoria koloru','Neoimpresjonizm']}},
  { id:11, category:{en:'Techniques',pl:'Techniki'}, title:{en:'Fresco',pl:'Fresk'}, period:{en:'Ancient Greece – Renaissance',pl:'Starożytna Grecja – Renesans'},
    hint:{en:'Italian for "fresh" — pigment dissolved in water is applied to still-wet lime plaster and becomes part of the wall',pl:'Wł. „świeży" — pigment w wodzie nakłada się na mokry wapiennik i trwale zespala ze ścianą'},
    image:WM('Michelangelo_-_Creation_of_Adam_(cropped).jpg'), imageAlt:'Michelangelo — The Creation of Adam, Sistine Chapel, 1508–12', imageCredit:'Michelangelo · The Creation of Adam · 1508–12 · Sistine Chapel, Vatican',
    keyArtists:['Michelangelo','Raphael','Giotto di Bondone','Masaccio','Diego Rivera'],
    philosophy:{en:'Paint chemically bonded to the wall — permanent and impossible to touch up once dry. Each section (giornata) must be completed in a single day before the plaster sets.',pl:'Farba chemicznie związana ze ścianą — trwała i niemożliwa do poprawienia po wyschnięciu. Każda sekcja (giornata) musi zostać ukończona jednego dnia.'},
    keywords:{en:['Buon Fresco','Giornata','Lime Plaster','Permanent Bond'],pl:['Buon Fresco','Giornata','Wapiennik','Trwałe związanie']}},
  { id:12, category:{en:'Techniques',pl:'Techniki'}, title:{en:'Encaustic',pl:'Enkaustyka'}, period:{en:'Ancient Egypt – Present',pl:'Starożytny Egipt – dziś'},
    hint:{en:'From Greek enkaiein, "to burn in" — hot beeswax mixed with pigment, fused to the surface with heat',pl:'Z gr. enkaiein, „wypalać" — gorący wosk pszczeli z pigmentem, łączony z podłożem za pomocą ciepła'},
    image:WM('Fayum-34.jpg'), imageAlt:'Fayum Mummy Portrait — encaustic on wood, c. 100–150 AD', imageCredit:'Fayum Mummy Portrait · encaustic on wood · c. 100–150 AD · Roman Egypt',
    keyArtists:['Fayum portrait artists (1st–3rd c. AD)','Jasper Johns','Diego Rivera','Brice Marden'],
    philosophy:{en:'Build translucent, luminous layers of beeswax and pigment, fusing each with heat. The wax\'s depth and warm glow produces a presence impossible to achieve with oil or tempera.',pl:'Budowanie przezroczystych, świetlistych warstw wosku i pigmentu łączonych ciepłem. Głębia i ciepły blask wosku daje obecność nieosiągalną olejem ani temperą.'},
    keywords:{en:['Beeswax','Translucency','Fayum Portraits','Encaustic Wax'],pl:['Wosk pszczeli','Przezroczystość','Portrety fajumskie','Wosk enkaustyczny']}}
];

const VOCAB = [
  {term:{en:'Chiaroscuro',pl:'Chiaroscuro'},def:{en:'The use of strong contrasts between light and dark to model three-dimensional form and create dramatic atmosphere.',pl:'Stosowanie silnych kontrastów światła i cienia do modelowania bryły i budowania dramatycznej atmosfery.'}},
  {term:{en:'Sfumato',pl:'Sfumato'},def:{en:"Leonardo's technique of softening contours with imperceptible transitions between light and shadow — smoky blending.",pl:'Technika Leonarda — zmiękczanie konturów niezauważalnymi przejściami między światłem a cieniem, jak dym.'}},
  {term:{en:'Contrapposto',pl:'Kontrapost'},def:{en:'A sculptural pose where weight shifts to one leg, causing hips and shoulders to tilt in opposite directions.',pl:'Rzeźbiarska poza z ciężarem ciała na jednej nodze — biodra i ramiona przechylają się w przeciwnych kierunkach.'}},
  {term:{en:'Impasto',pl:'Impasto'},def:{en:"Thick application of paint leaving visible brush or knife marks; texture becomes part of the work's meaning.",pl:'Gruba warstwa farby zostawiająca widoczne ślady pędzla lub szpachli; tekstura staje się częścią znaczenia dzieła.'}},
  {term:{en:'Tenebrism',pl:'Tenebryzmizm'},def:{en:'Extreme chiaroscuro: figures emerge dramatically from a near-total dark background — associated with Caravaggio.',pl:'Skrajna forma chiaroscuro: postaci wyłaniają się dramatycznie z niemal całkowicie czarnego tła — kojarzona z Caravaggio.'}},
  {term:{en:'En plein air',pl:'Plenery'},def:{en:'Painting outdoors, directly from nature, to capture natural light and atmosphere — central to Impressionism.',pl:'Malowanie w plenerze, bezpośrednio z natury, dla uchwycenia naturalnego światła i atmosfery — serce impresjonizmu.'}},
  {term:{en:'Foreshortening',pl:'Skrót perspektywiczny'},def:{en:'Depicting a body at an extreme angle so it appears shorter along the line of sight, creating a sense of depth.',pl:'Przedstawianie ciała pod ekstremalnym kątem — skrócone wzdłuż linii wzroku, co tworzy wrażenie głębi.'}},
  {term:{en:"Trompe-l'œil",pl:'Iluzjonizm'},def:{en:'French for "deceive the eye" — hyper-realistic painting creating the optical illusion of three-dimensional objects.',pl:'Franc. „zwieść oko" — hiperrealistyczne malarstwo tworzące optyczną iluzję trójwymiarowych obiektów.'}},
  {term:{en:'Vanitas',pl:'Vanitas'},def:{en:'A still-life genre featuring objects evoking the transience of life, death, and the futility of worldly pleasures.',pl:'Gatunek martwej natury z obiektami przywołującymi przemijanie życia, śmierć i próżność uciech ziemskich.'}},
  {term:{en:'Grisaille',pl:'Grisaille (gryzela)'},def:{en:'Painting executed entirely in shades of grey to simulate the effect of sculpture or bas-relief.',pl:'Malarstwo wykonane wyłącznie w odcieniach szarości, imitujące rzeźbę lub płaskorzeźbę.'}},
  {term:{en:'Iconography',pl:'Ikonografia'},def:{en:'The study of symbolic imagery in art — decoding the visual language of signs, attributes, and allegories.',pl:'Nauka o symbolicznych obrazach w sztuce — odczytywanie wizualnego języka znaków, atrybutów i alegorii.'}},
  {term:{en:'Provenance',pl:'Proweniencja'},def:{en:"The documented history of an artwork's ownership, used to establish authenticity and legal title.",pl:'Udokumentowana historia własności dzieła sztuki, służąca do ustalenia autentyczności i legalnego tytułu.'}},
  {term:{en:'Pentimento',pl:'Pentimento'},def:{en:"Visible traces of earlier work showing through the final paint layer — evidence of an artist's changes of mind.",pl:'Widoczne ślady wcześniejszych warstw przebijające przez końcową farbę — dowód zmian decyzji artysty.'}},
  {term:{en:'Sotto in sù',pl:'Sotto in sù'},def:{en:'Extreme ceiling perspective seen from directly below — figures are dramatically foreshortened for floor-level viewers.',pl:'Skrajny skrót perspektywiczny na suficie — postacie dramatycznie skrócone, by wyglądały przekonująco z podłogi.'}},
  {term:{en:'Divisionism',pl:'Dywizjonizm'},def:{en:"Systematic separation of colour into individual dots, relying on the viewer's eye to optically blend them — the theory behind Pointillism.",pl:'Systematyczny podział koloru na kropki; oko widza miesza je optycznie — teoria stojąca za pointylizmem.'}},
  {term:{en:'Gesamtkunstwerk',pl:'Dzieło totalne'},def:{en:'"Total artwork" — the ideal of unifying all art forms (music, architecture, painting) into one unified experience.',pl:'„Dzieło totalne" — ideał zjednoczenia wszystkich sztuk (muzyki, architektury, malarstwa) w jedno doświadczenie.'}},
  {term:{en:'Automatism',pl:'Automatyzm'},def:{en:'The Surrealist method of creating art without conscious control, bypassing reason to access the unconscious directly.',pl:'Surrealistyczna metoda tworzenia sztuki bez świadomej kontroli — ominięcie rozumu dla dostępu do nieświadomości.'}},
  {term:{en:'Giornata',pl:'Giornata'},def:{en:"Italian for \"day's work\" — the section of fresh plaster a fresco painter must complete before it dries.",pl:'Wł. „praca dnia" — fragment świeżego tynku, który malarz freskowy musi ukończyć przed jego wyschnięciem.'}},
  {term:{en:'Linear Perspective',pl:'Perspektywa liniowa'},def:{en:'A geometric system depicting 3D space on a flat surface, with parallel lines converging at a vanishing point on the horizon.',pl:'Geometryczny system odwzorowania przestrzeni trójwymiarowej: linie równoległe zbiegają się w punkcie zbiegu na horyzoncie.'}},
  {term:{en:'The Sublime',pl:'Wzniosłość'},def:{en:'An aesthetic quality of awe-inspiring vastness — in Romantic art, the terrifying beauty of wild nature that overwhelms human comprehension.',pl:'Estetyczna jakość budzącego trwogę ogromu — w romantyzmie: przerażające piękno dzikiej natury przytłaczające ludzki rozum.'}}
];

/* ── State ─────────────────────────────────────────── */
let deck           = [...CARDS];
let index          = 0;
let isFlipped      = false;
let activeCategory = 'all';
let lang           = 'pl';
let view           = 'cards';
let vocabIndex     = 0;
let vocabFlipped   = false;
let vocabDeck      = [];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const UI = {
  en: { hint:'Hint', flipCue:'tap to reveal →', flipCueBack:'↺ return', artists:'Key Artists', philosophy:'Visual Philosophy',
        cardOf:(i,n)=>`Card ${i} of ${n}`, catAll:'All Categories', vocabOf:(i,n)=>`Term ${i} of ${n}`,
        reshuffle:'Reshuffle', definition:'Definition', termLabel:'Term' },
  pl: { hint:'Wskazówka', flipCue:'kliknij, by odkryć →', flipCueBack:'↺ wróć', artists:'Kluczowi artyści', philosophy:'Filozofia wizualna',
        cardOf:(i,n)=>`Karta ${i} z ${n}`, catAll:'Wszystkie kategorie', vocabOf:(i,n)=>`Termin ${i} z ${n}`,
        reshuffle:'Przetasuj', definition:'Definicja', termLabel:'Termin' }
};

/* ── DOM refs ──────────────────────────────────────── */
const flashcard      = document.getElementById('flashcard');
const cardInner      = document.getElementById('cardInner');
const progressFill   = document.getElementById('progressFill');
const progressRole   = document.getElementById('progressRole');
const progressText   = document.getElementById('progressText');
const categoryLabel  = document.getElementById('categoryLabel');
const cardCounter    = document.getElementById('cardCounter');
const prevBtn        = document.getElementById('prevBtn');
const nextBtn        = document.getElementById('nextBtn');
const cardImg        = document.getElementById('cardImg');
const frontCatPill   = document.getElementById('frontCatPill');
const hintText       = document.getElementById('hintText');
const cardTitle      = document.getElementById('cardTitle');
const backCat        = document.getElementById('backCat');
const backTitle      = document.getElementById('backTitle');
const backPeriod     = document.getElementById('backPeriod');
const backArtists    = document.getElementById('backArtists');
const backPhilosophy = document.getElementById('backPhilosophy');
const imageCredit    = document.getElementById('imageCredit');
const keywords       = document.getElementById('keywords');
const artistsLabel   = document.getElementById('artistsLabel');
const philLabel      = document.getElementById('philLabel');
const vocabView      = document.getElementById('vocabView');
const cardsView      = document.getElementById('cardsView');
const vocabCard      = document.getElementById('vocabCard');
const vocabCardInner = document.getElementById('vocabCardInner');
const vocabCounter   = document.getElementById('vocabCounter');
const vocabPrev      = document.getElementById('vocabPrev');
const vocabNext      = document.getElementById('vocabNext');
const vocabReshuffle = document.getElementById('vocabReshuffle');
const langBtn        = document.getElementById('langBtn');
const vocabTabBtn    = document.getElementById('vocabTabBtn');
const cardsTabBtn    = document.getElementById('cardsTabBtn');

/* ── Render flashcard ────────────────────────────────── */
function render(animate) {
  if (!deck.length) return;
  const card = deck[index];
  const ui   = UI[lang];
  const L    = lang;
  if (animate) { flashcard.classList.add('card--refreshing'); void flashcard.offsetWidth; setTimeout(() => flashcard.classList.remove('card--refreshing'), 350); }
  cardImg.src = card.image; cardImg.alt = card.imageAlt;
  frontCatPill.textContent = card.category[L];
  hintText.textContent = card.hint[L];
  cardTitle.textContent = card.title[L];
  document.querySelectorAll('.hint-eyebrow').forEach(el => el.textContent = ui.hint);
  document.querySelectorAll('.flip-cue:not(.flip-cue--reverse)').forEach(el => el.textContent = ui.flipCue);
  document.querySelectorAll('.flip-cue--reverse').forEach(el => el.textContent = ui.flipCueBack);
  backCat.textContent = card.category[L]; backTitle.textContent = card.title[L];
  backPeriod.textContent = card.period[L]; backArtists.textContent = card.keyArtists.join('  ·  ');
  backPhilosophy.textContent = card.philosophy[L]; imageCredit.textContent = card.imageCredit;
  if (artistsLabel) artistsLabel.textContent = ui.artists;
  if (philLabel)    philLabel.textContent    = ui.philosophy;
  keywords.innerHTML = '';
  card.keywords[L].forEach(kw => { const s = document.createElement('span'); s.className = 'keyword'; s.textContent = kw; keywords.appendChild(s); });
  const pct = ((index + 1) / deck.length) * 100;
  progressFill.style.width = pct + '%'; progressRole.setAttribute('aria-valuenow', Math.round(pct));
  progressText.textContent = ui.cardOf(index + 1, deck.length); cardCounter.textContent = `${index + 1} / ${deck.length}`;
  if (categoryLabel) categoryLabel.textContent = activeCategory === 'all' ? ui.catAll : (deck[0]?.category[L] ?? activeCategory);
  prevBtn.disabled = (index === 0); nextBtn.disabled = (index === deck.length - 1);
  setFlipped(false, false);
}

function setFlipped(state, animate) {
  if (!animate) { cardInner.style.transition = 'none'; flashcard.classList.toggle('is-flipped', state); void cardInner.offsetWidth; cardInner.style.transition = ''; }
  else { flashcard.classList.toggle('is-flipped', state); }
  isFlipped = state; flashcard.setAttribute('aria-pressed', String(state));
}

/* ── Render vocab ────────────────────────────────────── */
function renderVocab(animate) {
  const term = vocabDeck[vocabIndex];
  const ui   = UI[lang];
  const L    = lang;
  if (animate) { vocabCard.classList.add('card--refreshing'); void vocabCard.offsetWidth; setTimeout(() => vocabCard.classList.remove('card--refreshing'), 350); }
  const $ = id => document.getElementById(id);
  $('vocabTermLabel').textContent = ui.termLabel;
  $('vocabTermText').textContent  = term.term[L];
  $('vocabTermSub').textContent   = L === 'pl' ? term.term.en : term.term.pl;
  $('vocabDefLabel').textContent  = ui.definition;
  $('vocabDefText').textContent   = term.def[L];
  vocabCounter.textContent = ui.vocabOf(vocabIndex + 1, vocabDeck.length);
  vocabPrev.disabled = (vocabIndex === 0); vocabNext.disabled = (vocabIndex === vocabDeck.length - 1);
  if (vocabReshuffle) vocabReshuffle.textContent = ui.reshuffle;
  setVocabFlipped(false, false);
}

function setVocabFlipped(state, animate) {
  if (!animate) { vocabCardInner.style.transition = 'none'; vocabCard.classList.toggle('is-flipped', state); void vocabCardInner.offsetWidth; vocabCardInner.style.transition = ''; }
  else { vocabCard.classList.toggle('is-flipped', state); }
  vocabFlipped = state;
}

/* ── View & lang ─────────────────────────────────────── */
function showView(v) {
  view = v;
  cardsView.classList.toggle('view-hidden', v !== 'cards');
  vocabView.classList.toggle('view-hidden', v !== 'vocab');
  cardsTabBtn.classList.toggle('tab-active', v === 'cards');
  vocabTabBtn.classList.toggle('tab-active',  v === 'vocab');
  if (v === 'vocab') renderVocab(false); else render(false);
}

function toggleLang() {
  lang = lang === 'pl' ? 'en' : 'pl';
  langBtn.textContent = lang === 'pl' ? 'EN' : 'PL';
  updateCatBtns();
  if (view === 'cards') render(false); else renderVocab(false);
}

function updateCatBtns() {
  const map = { all:{en:'All',pl:'Wszystkie'}, Eras:{en:'Eras',pl:'Epoki'}, Styles:{en:'Styles',pl:'Style'}, Techniques:{en:'Techniques',pl:'Techniki'} };
  document.querySelectorAll('.cat-btn[data-cat]').forEach(btn => { const k = btn.dataset.cat; if (map[k]) btn.textContent = map[k][lang]; });
}

/* ── Navigation ─────────────────────────────────────── */
function goNext() { if (index < deck.length - 1) { index++; render(true); } }
function goPrev() { if (index > 0)               { index--; render(true); } }
function setCategory(cat) {
  activeCategory = cat;
  deck  = (cat === 'all') ? [...CARDS] : CARDS.filter(c => c.category.en === cat);
  index = 0; render(false);
}

/* ── Events ──────────────────────────────────────────── */
flashcard.addEventListener('click', () => setFlipped(!isFlipped, true));
nextBtn.addEventListener('click', goNext);
prevBtn.addEventListener('click', goPrev);
document.querySelectorAll('.cat-btn[data-cat]').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.id === 'vocabTabBtn' || btn.id === 'cardsTabBtn') return;
    document.querySelectorAll('.cat-btn[data-cat]').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    setCategory(btn.dataset.cat);
  });
});
vocabCard.addEventListener('click', () => setVocabFlipped(!vocabFlipped, true));
vocabPrev.addEventListener('click', () => { if (vocabIndex > 0)                    { vocabIndex--; renderVocab(true); } });
vocabNext.addEventListener('click', () => { if (vocabIndex < vocabDeck.length - 1) { vocabIndex++; renderVocab(true); } });
if (vocabReshuffle) vocabReshuffle.addEventListener('click', () => { vocabDeck = shuffle(VOCAB); vocabIndex = 0; renderVocab(true); });
vocabTabBtn.addEventListener('click', () => showView('vocab'));
cardsTabBtn.addEventListener('click', () => {
  document.querySelectorAll('.cat-btn[data-cat]').forEach(b => b.classList.remove('is-active'));
  document.querySelector('.cat-btn[data-cat="all"]').classList.add('is-active');
  setCategory('all'); showView('cards');
});
langBtn.addEventListener('click', toggleLang);
document.addEventListener('keydown', e => {
  if (view === 'cards') {
    const onCard = document.activeElement === flashcard || document.activeElement === document.body;
    if ((e.key === ' ' || e.key === 'Enter') && onCard) { e.preventDefault(); setFlipped(!isFlipped, true); }
    if (e.key === 'ArrowRight') { e.preventDefault(); goNext(); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goPrev(); }
  } else {
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); setVocabFlipped(!vocabFlipped, true); }
    if (e.key === 'ArrowRight') { e.preventDefault(); if (vocabIndex < vocabDeck.length - 1) { vocabIndex++; renderVocab(true); } }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); if (vocabIndex > 0)                    { vocabIndex--; renderVocab(true); } }
  }
});

/* ── Init ───────────────────────────────────────────── */
vocabDeck = shuffle(VOCAB);
deck      = shuffle([...CARDS]);
updateCatBtns();
showView('cards');

/* ══════════════════════════════════════════════════════
   SCIENCE CARDS — 10 naukowców PL + EN
   ══════════════════════════════════════════════════════ */
const SCIENCE_CARDS = [
  {
    id:'sci-1',
    category:{en:'Physics',pl:'Fizyka'},
    title:{en:'Marie Curie',pl:'Maria Curie-Skłodowska'},
    period:{en:'1867 – 1934',pl:'1867 – 1934'},
    hint:{en:'First person to win two Nobel Prizes — in Physics and Chemistry. Born in Warsaw.',pl:'Pierwsza osoba z dwoma Nagrodami Nobla — z fizyki i chemii. Urodzona w Warszawie.'},
    image:WM('Marie_Curie_c1920.jpg'),
    imageAlt:'Marie Curie, c. 1920',
    imageCredit:'Marie Curie · fotografia ok. 1920 · domena publiczna',
    field:{en:'Radioactivity, Nuclear Chemistry',pl:'Radioaktywność, Chemia Jądrowa'},
    discoveries:{en:'Discovered polonium and radium; coined the term "radioactivity"; first woman to win a Nobel Prize (Physics 1903, Chemistry 1911).',pl:'Odkryła polon i rad; ukuła termin „radioaktywność"; pierwsza kobieta z Noblem (fizyka 1903, chemia 1911).'},
    keywords:{en:['Radioactivity','Polonium','Radium','Nobel Prize'],pl:['Radioaktywność','Polon','Rad','Nagroda Nobla']}
  },
  {
    id:'sci-2',
    category:{en:'Physics',pl:'Fizyka'},
    title:{en:'Albert Einstein',pl:'Albert Einstein'},
    period:{en:'1879 – 1955',pl:'1879 – 1955'},
    hint:{en:'His 1905 "miracle year" produced four papers that each transformed a field of physics.',pl:'W swoim „cudownym roku" 1905 opublikował cztery artykuły, z których każdy odmienił dziedzinę fizyki.'},
    image:WM('Einstein_1921_by_F_Schmutzer_-_restoration.jpg'),
    imageAlt:'Albert Einstein, 1921',
    imageCredit:'Albert Einstein · 1921 · F. Schmutzer · domena publiczna',
    field:{en:'Theoretical Physics',pl:'Fizyka Teoretyczna'},
    discoveries:{en:'Special and General Relativity (E=mc²); photoelectric effect (Nobel 1921); Brownian motion; laid foundations for quantum mechanics.',pl:'Szczególna i ogólna teoria względności (E=mc²); efekt fotoelektryczny (Nobel 1921); ruch Browna; podstawy mechaniki kwantowej.'},
    keywords:{en:['Relativity','E=mc²','Spacetime','Photoelectric Effect'],pl:['Względność','E=mc²','Czasoprzestrzeń','Efekt fotoelektryczny']}
  },
  {
    id:'sci-3',
    category:{en:'Biology',pl:'Biologia'},
    title:{en:'Charles Darwin',pl:'Karol Darwin'},
    period:{en:'1809 – 1882',pl:'1809 – 1882'},
    hint:{en:'His five-year voyage on HMS Beagle collecting specimens from the Galápagos changed our understanding of life.',pl:'Pięcioletnia podróż na HMS Beagle i okazy z Galapagos zmieniły nasze rozumienie życia.'},
    image:WM('Charles_Darwin_by_Julia_Margaret_Cameron,_1868.jpg'),
    imageAlt:'Charles Darwin, 1868',
    imageCredit:'Charles Darwin · 1868 · Julia Margaret Cameron · domena publiczna',
    field:{en:'Evolutionary Biology, Natural History',pl:'Biologia Ewolucyjna, Historia Naturalna'},
    discoveries:{en:'"On the Origin of Species" (1859): natural selection drives evolution; common ancestry of all life on Earth.',pl:'„O powstawaniu gatunków" (1859): dobór naturalny napędza ewolucję; wspólne pochodzenie całego życia na Ziemi.'},
    keywords:{en:['Natural Selection','Evolution','Adaptation','Galapagos'],pl:['Dobór naturalny','Ewolucja','Adaptacja','Galapagos']}
  },
  {
    id:'sci-4',
    category:{en:'Physics',pl:'Fizyka'},
    title:{en:'Isaac Newton',pl:'Izaak Newton'},
    period:{en:'1643 – 1727',pl:'1643 – 1727'},
    hint:{en:'Developed calculus independently from Leibniz and wrote his three laws of motion during a plague lockdown.',pl:'Opracował rachunek różniczkowy niezależnie od Leibniza i sformułował trzy prawa ruchu podczas lockdownu z powodu dżumy.'},
    image:WM('GodfreyKneller-IsaacNewton-1689.jpg'),
    imageAlt:'Isaac Newton, 1689, by Godfrey Kneller',
    imageCredit:'Isaac Newton · 1689 · Godfrey Kneller · domena publiczna',
    field:{en:'Classical Mechanics, Optics, Mathematics',pl:'Mechanika Klasyczna, Optyka, Matematyka'},
    discoveries:{en:'Three laws of motion; universal gravitation; calculus; decomposed white light into spectrum with a prism.',pl:'Trzy prawa ruchu; grawitacja powszechna; rachunek różniczkowy; rozkład białego światła na widmo za pomocą pryzmatu.'},
    keywords:{en:['Gravity','Laws of Motion','Calculus','Optics'],pl:['Grawitacja','Prawa ruchu','Rachunek różniczkowy','Optyka']}
  },
  {
    id:'sci-5',
    category:{en:'Astronomy',pl:'Astronomia'},
    title:{en:'Nicolaus Copernicus',pl:'Mikołaj Kopernik'},
    period:{en:'1473 – 1543',pl:'1473 – 1543'},
    hint:{en:'A Polish canon who quietly revolutionised astronomy — his heliocentric model dethroned Earth from the centre of the universe.',pl:'Polski kanonik, który po cichu zrewolucjonizował astronomię — jego model heliocentryczny obalił Ziemię z centrum wszechświata.'},
    image:WM('Nikolaus_Kopernikus.jpg'),
    imageAlt:'Mikołaj Kopernik, portret ok. 1530',
    imageCredit:'Mikołaj Kopernik · portret ok. 1530 · domena publiczna',
    field:{en:'Astronomy, Mathematics',pl:'Astronomia, Matematyka'},
    discoveries:{en:'"De revolutionibus orbium coelestium" (1543): Sun — not Earth — is at the centre of the solar system. Launched the Copernican Revolution.',pl:'„De revolutionibus orbium coelestium" (1543): Słońce — nie Ziemia — jest centrum układu słonecznego. Zapoczątkował rewolucję kopernikańską.'},
    keywords:{en:['Heliocentrism','Solar System','Copernican Revolution','Astronomy'],pl:['Heliocentryzm','Układ słoneczny','Rewolucja kopernikańska','Astronomia']}
  },
  {
    id:'sci-6',
    category:{en:'Mathematics',pl:'Matematyka'},
    title:{en:'Leonhard Euler',pl:'Leonhard Euler'},
    period:{en:'1707 – 1783',pl:'1707 – 1783'},
    hint:{en:'Produced mathematical papers even after going completely blind — he dictated them from memory.',pl:'Tworzył prace matematyczne nawet po całkowitej utracie wzroku — dyktował je z pamięci.'},
    image:WM('Leonhard_Euler_-_edit1.jpg'),
    imageAlt:'Leonhard Euler, portret ok. 1753',
    imageCredit:'Leonhard Euler · ok. 1753 · domena publiczna',
    field:{en:'Mathematics, Physics, Astronomy',pl:'Matematyka, Fizyka, Astronomia'},
    discoveries:{en:"Euler's identity (e^iπ + 1 = 0); graph theory (Königsberg bridges); notation f(x), Σ, i, e, π; prolific author of ~92 volumes.",pl:'Wzór Eulera (e^iπ + 1 = 0); teoria grafów (mosty królewieckie); notacje f(x), Σ, i, e, π; ok. 92 tomy prac.'},
    keywords:{en:["Euler's Identity",'Graph Theory','Number Theory','Mathematical Notation'],pl:['Wzór Eulera','Teoria grafów','Teoria liczb','Notacja matematyczna']}
  },
  {
    id:'sci-7',
    category:{en:'Chemistry',pl:'Chemia'},
    title:{en:'Dmitri Mendeleev',pl:'Dmitrij Mendelejew'},
    period:{en:'1834 – 1907',pl:'1834 – 1907'},
    hint:{en:'He dreamed of the complete periodic table and was able to predict the properties of elements not yet discovered.',pl:'Przyśniła mu się kompletna tablica układu okresowego — był w stanie przewidzieć właściwości jeszcze nieodkrytych pierwiastków.'},
    image:WM('Mendeleev_by_repin.jpg'),
    imageAlt:'Dmitri Mendeleev, portret Ilji Repina, 1885',
    imageCredit:'Dmitrij Mendelejew · 1885 · Ilja Repin · domena publiczna',
    field:{en:'Chemistry',pl:'Chemia'},
    discoveries:{en:'Created the Periodic Table of Elements (1869), organising 63 known elements by atomic weight and predicting undiscovered ones (gallium, germanium, scandium).',pl:'Stworzył układ okresowy pierwiastków (1869), porządkując 63 znane pierwiastki według masy atomowej i przewidując nieodkryte (gal, german, skandium).'},
    keywords:{en:['Periodic Table','Elements','Atomic Mass','Prediction'],pl:['Układ okresowy','Pierwiastki','Masa atomowa','Przepowiednia']}
  },
  {
    id:'sci-8',
    category:{en:'Biology',pl:'Biologia'},
    title:{en:'Gregor Mendel',pl:'Gregor Mendel'},
    period:{en:'1822 – 1884',pl:'1822 – 1884'},
    hint:{en:'An Augustinian friar who discovered the laws of inheritance by patiently crossbreeding 29,000 pea plants in his monastery garden.',pl:'Augustiański zakonnik, który odkrył prawa dziedziczenia, krzyżując cierpliwie 29 000 roślin grochu w klasztornym ogrodzie.'},
    image:WM('Gregor_Mendel_2.jpg'),
    imageAlt:'Gregor Mendel, ok. 1880',
    imageCredit:'Gregor Mendel · ok. 1880 · domena publiczna',
    field:{en:'Genetics, Botany',pl:'Genetyka, Botanika'},
    discoveries:{en:'Laws of Segregation and Independent Assortment (1866) — the foundation of classical genetics. Discovered dominant and recessive traits.',pl:'Prawa segregacji i niezależnego rozdziału (1866) — fundament klasycznej genetyki. Odkrył cechy dominujące i recesywne.'},
    keywords:{en:['Genetics','Heredity','Dominant & Recessive','Pea Plants'],pl:['Genetyka','Dziedziczność','Dominujące i recesywne','Rośliny grochu']}
  },
  {
    id:'sci-9',
    category:{en:'Physics',pl:'Fizyka'},
    title:{en:'Nikola Tesla',pl:'Nikola Tesla'},
    period:{en:'1856 – 1943',pl:'1856 – 1943'},
    hint:{en:'Held over 300 patents and envisioned wireless global communication in 1900 — over a century before Wi-Fi.',pl:'Posiadał ponad 300 patentów i w 1900 roku wyobraził sobie bezprzewodową komunikację globalną — na ponad wiek przed Wi-Fi.'},
    image:WM('N.Tesla.JPG'),
    imageAlt:'Nikola Tesla, ok. 1890',
    imageCredit:'Nikola Tesla · ok. 1890 · domena publiczna',
    field:{en:'Electrical Engineering, Physics',pl:'Inżynieria Elektryczna, Fizyka'},
    discoveries:{en:'Alternating current (AC) electrical system; induction motor; Tesla coil; early radio patents; rotating magnetic field.',pl:'System prądu przemiennego (AC); silnik indukcyjny; cewka Tesli; wczesne patenty radiowe; wirujące pole magnetyczne.'},
    keywords:{en:['Alternating Current','Induction Motor','Tesla Coil','AC Power'],pl:['Prąd przemienny','Silnik indukcyjny','Cewka Tesli','Energia AC']}
  },
  {
    id:'sci-10',
    category:{en:'Computer Science',pl:'Informatyka'},
    title:{en:'Ada Lovelace',pl:'Ada Lovelace'},
    period:{en:'1815 – 1852',pl:'1815 – 1852'},
    hint:{en:'Daughter of Lord Byron, she wrote the world\'s first computer algorithm — for a machine that was never built.',pl:'Córka Lorda Byrona — napisała pierwszy na świecie algorytm komputerowy dla maszyny, która nigdy nie powstała.'},
    image:WM('Ada_Lovelace_portrait.jpg'),
    imageAlt:'Ada Lovelace, ok. 1840',
    imageCredit:'Ada Lovelace · ok. 1840 · domena publiczna',
    field:{en:'Mathematics, Computer Science',pl:'Matematyka, Informatyka'},
    discoveries:{en:"Wrote the first algorithm intended for Babbage's Analytical Engine (1843); foresaw computers as general-purpose machines far beyond mere calculation.",pl:'Napisała pierwszy algorytm dla Maszyny Analitycznej Babbage\'a (1843); przewidziała komputery jako maszyny ogólnego przeznaczenia, daleko poza zwykłymi obliczeniami.'},
    keywords:{en:['First Algorithm','Analytical Engine','Programming','Visionary'],pl:['Pierwszy algorytm','Maszyna analityczna','Programowanie','Wizjonerka']}
  }
];

/* ── Science state ───────────────────────────────────── */
let sciDeck    = [];
let sciIndex   = 0;
let sciFlipped = false;

/* ── Science DOM refs ────────────────────────────────── */
const sciCard      = document.getElementById('sciCard');
const sciCardInner = document.getElementById('sciCardInner');
const sciImg       = document.getElementById('sciImg');
const sciPill      = document.getElementById('sciPill');
const sciHint      = document.getElementById('sciHint');
const sciTitle     = document.getElementById('sciTitle');
const sciBackCat   = document.getElementById('sciBackCat');
const sciBackTitle = document.getElementById('sciBackTitle');
const sciBackPeriod= document.getElementById('sciBackPeriod');
const sciField     = document.getElementById('sciField');
const sciDisc      = document.getElementById('sciDisc');
const sciKeywords  = document.getElementById('sciKeywords');
const sciCredit    = document.getElementById('sciCredit');
const sciProgress  = document.getElementById('sciProgress');
const sciCounter   = document.getElementById('sciCounter');
const sciPrev      = document.getElementById('sciPrev');
const sciNext      = document.getElementById('sciNext');
const sciFieldLabel= document.getElementById('sciFieldLabel');
const sciDiscLabel = document.getElementById('sciDiscLabel');
const scienceView  = document.getElementById('scienceView');
const scienceTabBtn= document.getElementById('scienceTabBtn');

/* ── Render science card ─────────────────────────────── */
function renderSci(animate) {
  if (!sciDeck.length) return;
  const card = sciDeck[sciIndex];
  const L    = lang;
  const ui   = UI[L];

  if (animate) {
    sciCard.classList.add('card--refreshing');
    void sciCard.offsetWidth;
    setTimeout(() => sciCard.classList.remove('card--refreshing'), 350);
  }

  sciImg.src          = card.image;
  sciImg.alt          = card.imageAlt;
  sciPill.textContent = card.category[L];
  sciHint.textContent = card.hint[L];
  sciTitle.textContent= card.title[L];

  sciBackCat.textContent    = card.category[L];
  sciBackTitle.textContent  = card.title[L];
  sciBackPeriod.textContent = card.period[L];
  sciField.textContent      = card.field[L];
  sciDisc.textContent       = card.discoveries[L];
  sciCredit.textContent     = card.imageCredit;

  if (sciFieldLabel) sciFieldLabel.textContent = L === 'pl' ? 'Dziedzina' : 'Field';
  if (sciDiscLabel)  sciDiscLabel.textContent  = L === 'pl' ? 'Odkrycia'  : 'Discoveries';

  sciKeywords.innerHTML = '';
  card.keywords[L].forEach(kw => {
    const s = document.createElement('span');
    s.className = 'keyword'; s.textContent = kw;
    sciKeywords.appendChild(s);
  });

  const pct = ((sciIndex + 1) / sciDeck.length) * 100;
  progressFill.style.width = pct + '%';
  progressRole.setAttribute('aria-valuenow', Math.round(pct));
  sciProgress.textContent = L === 'pl'
    ? `Karta ${sciIndex + 1} z ${sciDeck.length}`
    : `Card ${sciIndex + 1} of ${sciDeck.length}`;
  sciCounter.textContent = `${sciIndex + 1} / ${sciDeck.length}`;

  sciPrev.disabled = (sciIndex === 0);
  sciNext.disabled = (sciIndex === sciDeck.length - 1);

  setSciFlipped(false, false);
}

function setSciFlipped(state, animate) {
  if (!animate) {
    sciCardInner.style.transition = 'none';
    sciCard.classList.toggle('is-flipped', state);
    void sciCardInner.offsetWidth;
    sciCardInner.style.transition = '';
  } else {
    sciCard.classList.toggle('is-flipped', state);
  }
  sciFlipped = state;
}

/* ── Patch showView to include science ───────────────── */
const _origShowView = showView;
// Override showView entirely
showView = function(v) {
  view = v;
  document.getElementById('cardsView').classList.toggle('view-hidden', v !== 'cards');
  document.getElementById('vocabView').classList.toggle('view-hidden',  v !== 'vocab');
  scienceView.classList.toggle('view-hidden', v !== 'science');

  document.getElementById('cardsTabBtn').classList.toggle('tab-active',   v === 'cards');
  scienceTabBtn.classList.toggle('tab-active',  v === 'science');
  document.getElementById('vocabTabBtn').classList.toggle('tab-active',   v === 'vocab');

  // show/hide category filters
  const catFilters = document.getElementById('catFilters');
  if (catFilters) catFilters.style.display = (v === 'cards') ? '' : 'none';

  if (v === 'science') renderSci(false);
  else if (v === 'vocab') renderVocab(false);
  else render(false);
};

/* ── Patch toggleLang to include science ─────────────── */
const _origToggleLang = toggleLang;
toggleLang = function() {
  lang = lang === 'pl' ? 'en' : 'pl';
  document.getElementById('langBtn').textContent = lang === 'pl' ? 'EN' : 'PL';
  updateCatBtns();
  if (view === 'cards') render(false);
  else if (view === 'science') renderSci(false);
  else renderVocab(false);
};

/* ── Science events ──────────────────────────────────── */
sciCard.addEventListener('click', () => setSciFlipped(!sciFlipped, true));
sciPrev.addEventListener('click', () => { if (sciIndex > 0)                    { sciIndex--; renderSci(true); } });
sciNext.addEventListener('click', () => { if (sciIndex < sciDeck.length - 1)   { sciIndex++; renderSci(true); } });
scienceTabBtn.addEventListener('click', () => showView('science'));

/* ── Science keyboard (patch keydown) ───────────────── */
document.addEventListener('keydown', e => {
  if (view !== 'science') return;
  if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); setSciFlipped(!sciFlipped, true); }
  if (e.key === 'ArrowRight') { e.preventDefault(); if (sciIndex < sciDeck.length - 1) { sciIndex++; renderSci(true); } }
  if (e.key === 'ArrowLeft')  { e.preventDefault(); if (sciIndex > 0)                  { sciIndex--; renderSci(true); } }
}, true);

/* ── Science init ────────────────────────────────────── */
sciDeck = shuffle(SCIENCE_CARDS);

/* Re-run showView to init cat filter visibility */
showView('cards');

/* ══════════════════════════════════════════════════════
   EXTRA SCIENCE CARDS — Chemia i Technologia
   Źródła: Wikipedia, Britannica, Nobel Prize official records
   ══════════════════════════════════════════════════════ */
SCIENCE_CARDS.push(

  /* ── CHEMIA ──────────────────────────────────────── */

  {
    id:'sci-11',
    category:{en:'Chemistry',pl:'Chemia'},
    title:{en:'Antoine Lavoisier',pl:'Antoine Lavoisier'},
    period:{en:'1743 – 1794',pl:'1743 – 1794'},
    hint:{en:'Proved that burning is a chemical reaction with oxygen — not the release of a mysterious substance called phlogiston.',pl:'Udowodnił, że spalanie to reakcja chemiczna z tlenem — a nie uwolnienie tajemniczej substancji zwanej flogistonem.'},
    image:WM('David_-_Portrait_of_Monsieur_Lavoisier_and_His_Wife.jpg'),
    imageAlt:'Lavoisier i jego żona, portret Jacques-Louis Davida, 1788',
    imageCredit:'J.-L. David · Lavoisier i jego żona · 1788 · Metropolitan Museum of Art',
    field:{en:'Chemistry, Biology',pl:'Chemia, Biologia'},
    discoveries:{en:'Named oxygen (1778) and hydrogen; formulated the law of conservation of mass; established modern chemical nomenclature; proved combustion requires oxygen, disproving phlogiston theory.',pl:'Nazwał tlen (1778) i wodór; sformułował prawo zachowania masy; opracował nowoczesną nomenklaturę chemiczną; obalił teorię flogistonu, dowodząc że spalanie wymaga tlenu.'},
    keywords:{en:['Oxygen','Conservation of Mass','Combustion','Chemical Nomenclature'],pl:['Tlen','Zachowanie masy','Spalanie','Nomenklatura chemiczna']}
  },

  {
    id:'sci-12',
    category:{en:'Chemistry',pl:'Chemia'},
    title:{en:'Dmitri Mendeleev (Periodic Law)',pl:'Prawo Okresowe Mendelejewa'},
    period:{en:'Published 1869',pl:'Opublikowano 1869'},
    hint:{en:'He left gaps in his table for undiscovered elements and correctly predicted their properties — including gallium and germanium.',pl:'Pozostawił luki w tabeli dla jeszcze nieodkrytych pierwiastków i poprawnie przewidział ich właściwości — m.in. galu i germanu.'},
    image:WM('Periodic_table_large.svg'),
    imageAlt:'Współczesny układ okresowy pierwiastków',
    imageCredit:'Układ Okresowy Pierwiastków · domena publiczna',
    field:{en:'Inorganic Chemistry, Classification of Elements',pl:'Chemia Nieorganiczna, Klasyfikacja Pierwiastków'},
    discoveries:{en:'Periodic Law: properties of elements repeat periodically when arranged by atomic mass. Predicted 8 undiscovered elements. Foundation of all modern chemistry.',pl:'Prawo Okresowe: właściwości pierwiastków powtarzają się periodycznie przy uporządkowaniu według masy atomowej. Przewidział 8 nieodkrytych pierwiastków. Fundament całej nowoczesnej chemii.'},
    keywords:{en:['Periodic Law','Elements','Prediction','Atomic Mass'],pl:['Prawo Okresowe','Pierwiastki','Przepowiednia','Masa atomowa']}
  },

  {
    id:'sci-13',
    category:{en:'Chemistry',pl:'Chemia'},
    title:{en:'Dorothy Hodgkin',pl:'Dorothy Hodgkin'},
    period:{en:'1910 – 1994',pl:'1910 – 1994'},
    hint:{en:'She used X-rays to photograph the structure of penicillin, vitamin B12, and insulin — molecules too complex for anyone else to solve.',pl:'Używała promieni X do fotografowania struktury penicyliny, witaminy B12 i insuliny — cząsteczek zbyt złożonych, by ktokolwiek inny je rozwiązał.'},
    image:WM('Dorothy_Hodgkin_Nobel.jpg'),
    imageAlt:'Dorothy Hodgkin, zdjęcie noblowskie, 1964',
    imageCredit:'Dorothy Hodgkin · Nobel Prize portrait · 1964',
    field:{en:'X-ray Crystallography, Biochemistry',pl:'Krystalografia Rentgenowska, Biochemia'},
    discoveries:{en:'Nobel Prize in Chemistry 1964. Determined 3D structures of penicillin (1945), vitamin B12 (1956), and insulin (1969) using X-ray crystallography — enabling modern drug design.',pl:'Nobel z chemii 1964. Określiła trójwymiarowe struktury penicyliny (1945), witaminy B12 (1956) i insuliny (1969) metodą krystalografii rentgenowskiej — umożliwiając nowoczesne projektowanie leków.'},
    keywords:{en:['X-ray Crystallography','Penicillin','Insulin','Nobel 1964'],pl:['Krystalografia rentgenowska','Penicylina','Insulina','Nobel 1964']}
  },

  {
    id:'sci-14',
    category:{en:'Chemistry',pl:'Chemia'},
    title:{en:'Fritz Haber',pl:'Fritz Haber'},
    period:{en:'1868 – 1934',pl:'1868 – 1934'},
    hint:{en:'His process for pulling nitrogen from the air to make fertiliser now feeds roughly half of all people on Earth.',pl:'Jego proces wychwytywania azotu z powietrza do produkcji nawozów dziś wyżywia mniej więcej połowę ludzkości.'},
    image:WM('Fritz_Haber.png'),
    imageAlt:'Fritz Haber, ok. 1918',
    imageCredit:'Fritz Haber · ok. 1918 · domena publiczna',
    field:{en:'Physical Chemistry, Industrial Chemistry',pl:'Chemia Fizyczna, Chemia Przemysłowa'},
    discoveries:{en:'Haber–Bosch process (1909): synthesis of ammonia from atmospheric nitrogen and hydrogen under high pressure and temperature. Nobel Prize in Chemistry 1918. Enabled mass production of fertilisers.',pl:'Proces Habera–Boscha (1909): synteza amoniaku z azotu atmosferycznego i wodoru pod wysokim ciśnieniem i temperaturą. Nobel z chemii 1918. Umożliwił masową produkcję nawozów sztucznych.'},
    keywords:{en:['Ammonia Synthesis','Nitrogen Fixation','Haber–Bosch','Fertilisers'],pl:['Synteza amoniaku','Wiązanie azotu','Proces Habera–Boscha','Nawozy sztuczne']}
  },

  {
    id:'sci-15',
    category:{en:'Chemistry',pl:'Chemia'},
    title:{en:'Rosalind Franklin',pl:'Rosalind Franklin'},
    period:{en:'1920 – 1958',pl:'1920 – 1958'},
    hint:{en:'Her X-ray photograph "Photo 51" showed the helical structure of DNA — the critical evidence Watson and Crick used without her knowledge.',pl:'Jej zdjęcie rentgenowskie „Photo 51" ukazało spiralną strukturę DNA — kluczowy dowód, z którego Watson i Crick skorzystali bez jej wiedzy.'},
    image:WM('Rosalind_Franklin_(1920-1958).jpg'),
    imageAlt:'Rosalind Franklin, ok. 1955',
    imageCredit:'Rosalind Franklin · ok. 1955 · MRC Laboratory of Molecular Biology',
    field:{en:'X-ray Crystallography, Biophysics',pl:'Krystalografia Rentgenowska, Biofizyka'},
    discoveries:{en:'"Photo 51" (1952): the sharpest X-ray diffraction image of DNA, revealing its double-helix structure. Also determined the structure of coal microstructure and tobacco mosaic virus.',pl:'„Photo 51" (1952): najostrzejsze rentgenowskie zdjęcie dyfrakcyjne DNA, ujawniające jego podwójną helisę. Określiła też mikrostrukturę węgla i wirusa mozaiki tytoniowej.'},
    keywords:{en:['Photo 51','DNA Double Helix','X-ray Diffraction','Biophysics'],pl:['Photo 51','Podwójna helisa DNA','Dyfrakcja rentgenowska','Biofizyka']}
  },

  {
    id:'sci-16',
    category:{en:'Chemistry',pl:'Chemia'},
    title:{en:'Robert Boyle',pl:'Robert Boyle'},
    period:{en:'1627 – 1691',pl:'1627 – 1691'},
    hint:{en:'He distinguished between mixtures, compounds, and elements — and proved that air has weight by pumping it out of a sealed jar.',pl:'Rozróżnił mieszaniny, związki i pierwiastki — i udowodnił, że powietrze ma wagę, wypompowując je ze szczelnego słoja.'},
    image:WM('Robert_Boyle_0001.jpg'),
    imageAlt:'Robert Boyle, portret ok. 1689',
    imageCredit:'Robert Boyle · ok. 1689 · domena publiczna',
    field:{en:'Chemistry, Physics',pl:'Chemia, Fizyka'},
    discoveries:{en:"Boyle's Law (1662): at constant temperature, pressure and volume of a gas are inversely proportional (PV = constant). First modern definition of a chemical element. Pioneer of the scientific method in chemistry.",pl:'Prawo Boyle\'a-Mariotte\'a (1662): w stałej temperaturze ciśnienie i objętość gazu są odwrotnie proporcjonalne (PV = const). Pierwsza nowoczesna definicja pierwiastka chemicznego. Pionier metody naukowej w chemii.'},
    keywords:{en:["Boyle's Law",'Gas Laws','Chemical Element','Scientific Method'],pl:['Prawo Boyle\'a','Prawa gazowe','Pierwiastek chemiczny','Metoda naukowa']}
  },

  /* ── TECHNOLOGIA ─────────────────────────────────── */

  {
    id:'sci-17',
    category:{en:'Technology',pl:'Technologia'},
    title:{en:'Alan Turing',pl:'Alan Turing'},
    period:{en:'1912 – 1954',pl:'1912 – 1954'},
    hint:{en:'His theoretical "Turing machine" (1936) described the logical foundation for all modern computers — before computers existed.',pl:'Jego teoretyczna „maszyna Turinga" (1936) opisała logiczny fundament wszystkich nowoczesnych komputerów — zanim komputery istniały.'},
    image:WM('Alan_Turing_Aged_16.jpg'),
    imageAlt:'Alan Turing, wiek 16 lat, ok. 1928',
    imageCredit:'Alan Turing · ok. 1928 · Sherborne School Archives',
    field:{en:'Computer Science, Mathematics, Cryptanalysis',pl:'Informatyka, Matematyka, Kryptanaliza'},
    discoveries:{en:'Turing Machine (1936): universal model of computation. Broke the Enigma cipher at Bletchley Park (WWII). Turing Test (1950): criterion for machine intelligence. Father of computer science and artificial intelligence.',pl:'Maszyna Turinga (1936): uniwersalny model obliczeń. Złamał szyfr Enigma w Bletchley Park (II WŚ). Test Turinga (1950): kryterium inteligencji maszynowej. Ojciec informatyki i sztucznej inteligencji.'},
    keywords:{en:['Turing Machine','Enigma','Artificial Intelligence','Turing Test'],pl:['Maszyna Turinga','Enigma','Sztuczna inteligencja','Test Turinga']}
  },

  {
    id:'sci-18',
    category:{en:'Technology',pl:'Technologia'},
    title:{en:'Michael Faraday',pl:'Michael Faraday'},
    period:{en:'1791 – 1867',pl:'1791 – 1867'},
    hint:{en:'A bookbinder\'s apprentice with almost no formal education who discovered the principle behind every electric motor and generator.',pl:'Czeladnik introligatora prawie bez formalnego wykształcenia, który odkrył zasadę działania każdego silnika elektrycznego i generatora.'},
    image:WM('Michael_Faraday_001.jpg'),
    imageAlt:'Michael Faraday, portret ok. 1861',
    imageCredit:'Michael Faraday · ok. 1861 · John Watkins · domena publiczna',
    field:{en:'Electromagnetism, Electrochemistry',pl:'Elektromagnetyzm, Elektrochemia'},
    discoveries:{en:'Electromagnetic induction (1831): changing magnetic fields generate electric current — the principle of every generator and transformer. Invented the electric motor. Laws of electrolysis. Discovered benzene.',pl:'Indukcja elektromagnetyczna (1831): zmieniające się pole magnetyczne generuje prąd elektryczny — zasada każdego generatora i transformatora. Wynalazł silnik elektryczny. Prawa elektrolizy. Odkrył benzen.'},
    keywords:{en:['Electromagnetic Induction','Electric Motor','Electrolysis','Faraday Cage'],pl:['Indukcja elektromagnetyczna','Silnik elektryczny','Elektroliza','Klatka Faradaya']}
  },

  {
    id:'sci-19',
    category:{en:'Technology',pl:'Technologia'},
    title:{en:'James Watt',pl:'James Watt'},
    period:{en:'1736 – 1819',pl:'1736 – 1819'},
    hint:{en:'He didn\'t invent the steam engine — but his improvements made it efficient enough to power the entire Industrial Revolution.',pl:'Nie wynalazł silnika parowego — ale jego ulepszenia sprawiły, że był wystarczająco wydajny, by napędzić całą rewolucję przemysłową.'},
    image:WM('James_Watt_by_Henry_Howard.jpg'),
    imageAlt:'James Watt, portret Henry Howarda, ok. 1800',
    imageCredit:'James Watt · ok. 1800 · Henry Howard · domena publiczna',
    field:{en:'Mechanical Engineering, Thermodynamics',pl:'Inżynieria Mechaniczna, Termodynamika'},
    discoveries:{en:'Separate condenser (1765): made steam engines 4× more efficient. Rotary motion conversion (1781). Invented the concept of horsepower. The SI unit of power (watt) is named after him.',pl:'Osobny skraplacz (1765): uczynił silniki parowe 4× wydajniejszymi. Przekształcenie ruchu posuwisto-zwrotnego w obrotowy (1781). Wprowadził pojęcie konia mechanicznego (KM). Jednostka mocy wat nosi jego imię.'},
    keywords:{en:['Steam Engine','Condenser','Horsepower','Industrial Revolution'],pl:['Silnik parowy','Skraplacz','Koń mechaniczny','Rewolucja przemysłowa']}
  },

  {
    id:'sci-20',
    category:{en:'Technology',pl:'Technologia'},
    title:{en:'Tim Berners-Lee',pl:'Tim Berners-Lee'},
    period:{en:'b. 1955',pl:'ur. 1955'},
    hint:{en:'He invented the Web in 1989 at CERN and gave it to the world for free — refusing to patent it so everyone could use it.',pl:'Wynalazł sieć WWW w 1989 roku w CERN-ie i podarował ją światu za darmo — odmówił opatentowania, by każdy mógł z niej korzystać.'},
    image:WM('Tim_Berners-Lee_2012.jpg'),
    imageAlt:'Tim Berners-Lee, 2012',
    imageCredit:'Tim Berners-Lee · 2012 · Paul Clarke · CC BY-SA 4.0',
    field:{en:'Computer Science, Information Technology',pl:'Informatyka, Technologie Informacyjne'},
    discoveries:{en:'Invented the World Wide Web (1989): HTML (markup language), HTTP (transfer protocol), and URL (addressing system). Wrote the first web browser and server. Founded W3C to maintain open web standards.',pl:'Wynalazł World Wide Web (1989): HTML (język znaczników), HTTP (protokół transferu) i URL (system adresowania). Napisał pierwszą przeglądarkę i serwer WWW. Założył W3C do utrzymania otwartych standardów sieci.'},
    keywords:{en:['World Wide Web','HTML','HTTP','Open Standards'],pl:['World Wide Web','HTML','HTTP','Otwarte standardy']}
  }

);

/* Update sciDeck after push */
sciDeck = shuffle(SCIENCE_CARDS);

/* ══════════════════════════════════════════════════════
   CIEKAWOSTKI — Prawa Fizyki, Ziemia, Wszechświat
   Źródła: NASA, ESA, Britannica, Wikipedia
   ══════════════════════════════════════════════════════ */
SCIENCE_CARDS.push(

  {
    id:'sci-21',
    category:{en:'Universe',pl:'Wszechświat'},
    title:{en:'The Big Bang',pl:'Wielki Wybuch'},
    period:{en:'~13.8 billion years ago',pl:'~13,8 mld lat temu'},
    hint:{en:'The universe began not from an explosion in space, but as an expansion of space itself — from a state of infinite density called a singularity.',pl:'Wszechświat nie powstał w eksplozji w przestrzeni, lecz jako rozszerzanie się samej przestrzeni — ze stanu nieskończonej gęstości zwanego osobliwością.'},
    image:WM('Planck_CMB_2013_vs_2015_-_warming-up.png'),
    imageAlt:'Mapa mikrofalowego promieniowania tła (CMB) misji Planck ESA',
    imageCredit:'ESA / Planck Collaboration · Cosmic Microwave Background · 2015',
    field:{en:'Cosmology, Astrophysics',pl:'Kosmologia, Astrofizyka'},
    discoveries:{en:'Universe is 13.8 billion years old (NASA/ESA Planck 2015). Within the first second: all fundamental particles formed. After 380,000 yrs: atoms formed, releasing the Cosmic Microwave Background (CMB) — still detectable today.',pl:'Wszechświat ma 13,8 mld lat (NASA/ESA Planck 2015). W pierwszej sekundzie: wszystkie cząstki elementarne. Po 380 tys. lat: powstały atomy, emitując kosmiczne promieniowanie tła (CMB) — wykrywalne do dziś.'},
    keywords:{en:['Big Bang','CMB','Singularity','13.8 Billion Years'],pl:['Wielki Wybuch','CMB','Osobliwość','13,8 mld lat']}
  },

  {
    id:'sci-22',
    category:{en:'Universe',pl:'Wszechświat'},
    title:{en:'Dark Matter & Dark Energy',pl:'Ciemna Materia i Energia'},
    period:{en:'Concept developed 1930s–1990s',pl:'Koncepcja rozwinięta 1930–1990'},
    hint:{en:'95% of the universe is made of things we cannot see, detect directly, or fully explain — dark matter and dark energy.',pl:'95% wszechświata zbudowane jest z czegoś, czego nie możemy zobaczyć, bezpośrednio wykryć ani w pełni wyjaśnić — ciemnej materii i ciemnej energii.'},
    image:WM('Bullet_cluster.jpg'),
    imageAlt:'Gromada Kula (Bullet Cluster) — dowód na istnienie ciemnej materii, NASA/Chandra',
    imageCredit:'NASA / CXC / M. Weiss · Bullet Cluster · Chandra X-ray Observatory',
    field:{en:'Cosmology, Particle Physics',pl:'Kosmologia, Fizyka Cząstek'},
    discoveries:{en:'Normal matter: 5% of universe. Dark matter: ~27% (Fritz Zwicky 1933, Vera Rubin 1970s) — inferred from gravitational effects. Dark energy: ~68% — drives accelerating expansion of universe (Nobel 2011: Perlmutter, Riess, Schmidt).',pl:'Zwykła materia: 5% wszechświata. Ciemna materia: ~27% (Zwicky 1933, Vera Rubin lata 70.) — wnioskowana z efektów grawitacyjnych. Ciemna energia: ~68% — napędza przyspieszone rozszerzanie wszechświata (Nobel 2011).'},
    keywords:{en:['Dark Matter','Dark Energy','Expanding Universe','Vera Rubin'],pl:['Ciemna materia','Ciemna energia','Rozszerzanie wszechświata','Vera Rubin']}
  },

  {
    id:'sci-23',
    category:{en:'Universe',pl:'Wszechświat'},
    title:{en:'Black Holes',pl:'Czarne Dziury'},
    period:{en:'Theory 1916, first image 2019',pl:'Teoria 1916, pierwsze zdjęcie 2019'},
    hint:{en:'The first-ever photograph of a black hole (M87*, 2019) required linking eight radio telescopes across four continents into a single Earth-sized dish.',pl:'Pierwsze w historii zdjęcie czarnej dziury (M87*, 2019) wymagało połączenia ośmiu radioteleskopów na czterech kontynentach w jeden teleskop wielkości Ziemi.'},
    image:WM('Black_hole_-_Messier_87_crop_max_res.jpg'),
    imageAlt:'Pierwsza fotografia czarnej dziury — M87*, Event Horizon Telescope, 2019',
    imageCredit:'Event Horizon Telescope Collaboration · M87* · 2019 · CC BY 4.0',
    field:{en:'Astrophysics, General Relativity',pl:'Astrofizyka, Ogólna Teoria Względności'},
    discoveries:{en:'Predicted by Einstein\'s General Relativity (1916). First confirmed: Cygnus X-1 (1971). First imaged: M87* (2019, Event Horizon Telescope). Gravitational waves from merging black holes detected by LIGO (2015, Nobel 2017).',pl:'Przewidziane przez ogólną teorię względności Einsteina (1916). Pierwsze potwierdzone: Cygnus X-1 (1971). Pierwsze sfotografowane: M87* (2019, EHT). Fale grawitacyjne z łączących się czarnych dziur wykryte przez LIGO (2015, Nobel 2017).'},
    keywords:{en:['Event Horizon','Singularity','Gravitational Waves','LIGO'],pl:['Horyzont zdarzeń','Osobliwość','Fale grawitacyjne','LIGO']}
  },

  {
    id:'sci-24',
    category:{en:'Physics Laws',pl:'Prawa Fizyki'},
    title:{en:'Laws of Thermodynamics',pl:'Prawa Termodynamiki'},
    period:{en:'Formulated 1824–1850',pl:'Sformułowane 1824–1850'},
    hint:{en:'The three laws of thermodynamics have a famous joke summary: 1. You can\'t win. 2. You can\'t break even. 3. You can\'t quit the game.',pl:'Trzy prawa termodynamiki mają żartobliwe podsumowanie: 1. Nie możesz wygrać. 2. Nie możesz wyjść na zero. 3. Nie możesz opuścić gry.'},
    image:WM('Carnot_heat_engine_2.svg'),
    imageAlt:'Schemat silnika cieplnego Carnota ilustrujący II zasadę termodynamiki',
    imageCredit:'Silnik Carnota · diagram · domena publiczna',
    field:{en:'Thermodynamics, Physics',pl:'Termodynamika, Fizyka'},
    discoveries:{en:'0th Law: thermal equilibrium is transitive. 1st Law: energy is conserved — you cannot create or destroy it. 2nd Law: entropy always increases — disorder grows (Clausius 1850). 3rd Law: absolute zero (−273.15°C) is unreachable.',pl:'0. zasada: równowaga termiczna jest przechodnia. 1. zasada: energia jest zachowana — nie można jej stworzyć ani zniszczyć. 2. zasada: entropia zawsze rośnie — nieporządek wzrasta (Clausius 1850). 3. zasada: zero absolutne (−273,15°C) jest nieosiągalne.'},
    keywords:{en:['Entropy','Conservation of Energy','Absolute Zero','Carnot'],pl:['Entropia','Zachowanie energii','Zero absolutne','Carnot']}
  },

  {
    id:'sci-25',
    category:{en:'Physics Laws',pl:'Prawa Fizyki'},
    title:{en:'Quantum Mechanics',pl:'Mechanika Kwantowa'},
    period:{en:'Developed 1900–1930s',pl:'Rozwijana 1900–1930'},
    hint:{en:'An electron passes through two slits and interferes with itself — until you try to observe which slit it used, whereupon it stops interfering.',pl:'Elektron przechodzi przez dwie szczeliny i interferuje sam ze sobą — dopóki nie spróbujesz obserwować, przez którą szczelę przeszedł, po czym przestaje interferować.'},
    image:WM('Wave_function_of_a_particle_in_a_1D_box.png'),
    imageAlt:'Funkcja falowa cząstki w studni potencjału — wizualizacja mechaniki kwantowej',
    imageCredit:'Funkcja falowa w 1D · domena publiczna',
    field:{en:'Quantum Physics, Atomic Physics',pl:'Fizyka Kwantowa, Fizyka Atomowa'},
    discoveries:{en:'Planck (1900): energy is quantised (E=hf). Heisenberg Uncertainty Principle (1927): position and momentum cannot both be known precisely. Schrödinger\'s equation (1926): wave function describes probability of particle states. Wave-particle duality.',pl:'Planck (1900): energia jest skwantowana (E=hf). Zasada nieoznaczoności Heisenberga (1927): pozycji i pędu nie można jednocześnie dokładnie znać. Równanie Schrödingera (1926): funkcja falowa opisuje prawdopodobieństwo stanów. Dualizm korpuskularno-falowy.'},
    keywords:{en:['Wave-Particle Duality','Uncertainty Principle','Superposition','Quantisation'],pl:['Dualizm falowo-korpuskularny','Zasada nieoznaczoności','Superpozycja','Kwantowanie']}
  },

  {
    id:'sci-26',
    category:{en:'Physics Laws',pl:'Prawa Fizyki'},
    title:{en:'Speed of Light & Relativity',pl:'Prędkość Światła i Względność'},
    period:{en:'c measured 1676; SR 1905',pl:'c zmierzona 1676; SR 1905'},
    hint:{en:'A clock on the ISS runs 0.007 seconds per day slower than on Earth — GPS satellites must correct for this relativistic effect or navigation would drift 10 km per day.',pl:'Zegar na ISS tyka 0,007 s dziennie wolniej niż na Ziemi — satelity GPS muszą korygować ten efekt relatywistyczny, inaczej nawigacja dryfowałaby 10 km na dobę.'},
    image:WM('World_line.svg'),
    imageAlt:'Stożek świetlny — diagram czasoprzestrzeni w szczególnej teorii względności',
    imageCredit:'Light cone diagram · domena publiczna',
    field:{en:'Special Relativity, Optics',pl:'Szczególna Teoria Względności, Optyka'},
    discoveries:{en:'Speed of light c = 299,792,458 m/s (exact, by definition since 1983). Special Relativity (Einstein 1905): nothing with mass can reach c; time dilates and length contracts at relativistic speeds. E=mc² — mass and energy are equivalent.',pl:'Prędkość światła c = 299 792 458 m/s (dokładna, z definicji od 1983). Szczególna teoria względności (Einstein 1905): żaden obiekt z masą nie może osiągnąć c; czas zwalnia, a długość kurczy przy prędkościach relatywistycznych. E=mc².'},
    keywords:{en:['Speed of Light','Time Dilation','E=mc²','Spacetime'],pl:['Prędkość światła','Dylatacja czasu','E=mc²','Czasoprzestrzeń']}
  },

  {
    id:'sci-27',
    category:{en:'Earth Science',pl:'Nauki o Ziemi'},
    title:{en:'Plate Tectonics',pl:'Tektonika Płyt'},
    period:{en:'Theory confirmed 1960s',pl:'Teoria potwierdzona lata 60. XX w.'},
    hint:{en:'The continents move at roughly the speed your fingernails grow — but over millions of years that\'s enough to open and close entire oceans.',pl:'Kontynenty przemieszczają się mniej więcej z prędkością, z jaką rosną paznokcie — ale w ciągu milionów lat to wystarczy, by otwierać i zamykać całe oceany.'},
    image:WM('Tectonic_plates.png'),
    imageAlt:'Mapa płyt tektonicznych Ziemi',
    imageCredit:'United States Geological Survey (USGS) · Tectonic Plates · domena publiczna',
    field:{en:'Geophysics, Geology',pl:'Geofizyka, Geologia'},
    discoveries:{en:'Alfred Wegener\'s continental drift hypothesis (1912) confirmed by seafloor spreading (Harry Hess, 1960). Earth\'s lithosphere is divided into ~15 major tectonic plates moving 2–15 cm/yr. Drives earthquakes, volcanoes, and mountain formation.',pl:'Hipoteza dryftu kontynentalnego Wegenera (1912) potwierdzona przez spreading dna oceanicznego (Harry Hess, 1960). Litosfera Ziemi podzielona na ~15 głównych płyt, poruszających się 2–15 cm/rok. Napędza trzęsienia ziemi, wulkany i górotwórczość.'},
    keywords:{en:['Continental Drift','Seafloor Spreading','Wegener','Lithosphere'],pl:['Dryfowanie kontynentów','Spreading','Wegener','Litosfera']}
  },

  {
    id:'sci-28',
    category:{en:'Earth Science',pl:'Nauki o Ziemi'},
    title:{en:'Earth\'s Age & Formation',pl:'Wiek i Powstanie Ziemi'},
    period:{en:'4.54 billion years ago',pl:'4,54 mld lat temu'},
    hint:{en:'We know Earth\'s age not from Earth itself (its rocks get recycled), but from meteorites that fell from the same cloud of dust that formed the Solar System.',pl:'Wiek Ziemi znamy nie z samej Ziemi (jej skały się recyklingują), lecz z meteorytów, które spadły z tej samej chmury pyłu, z której powstał Układ Słoneczny.'},
    image:WM('Protoplanetary-disk.jpg'),
    imageAlt:'Dysk protoplanetarny — wizja artystyczna formowania się planety',
    imageCredit:'NASA/JPL-Caltech · Protoplanetary disk · public domain',
    field:{en:'Geophysics, Planetary Science',pl:'Geofizyka, Nauki Planetarne'},
    discoveries:{en:'Earth is 4.54 ± 0.05 billion years old (radiometric dating, Claire Patterson 1956). Formed by accretion from the solar nebula. The Moon formed ~4.5 Gya when a Mars-sized body (Theia) collided with early Earth.',pl:'Ziemia ma 4,54 ± 0,05 mld lat (datowanie radiometryczne, Claire Patterson 1956). Powstała przez akrecję z mgławicy słonecznej. Księżyc uformował się ~4,5 mld lat temu po zderzeniu z ciałem wielkości Marsa (Theia).'},
    keywords:{en:['Radiometric Dating','Solar Nebula','Theia Impact','4.54 Billion Years'],pl:['Datowanie radiometryczne','Mgławica słoneczna','Zderzenie z Theią','4,54 mld lat']}
  },

  {
    id:'sci-29',
    category:{en:'Earth Science',pl:'Nauki o Ziemi'},
    title:{en:'Earth\'s Magnetic Field',pl:'Pole Magnetyczne Ziemi'},
    period:{en:'Generated continuously',pl:'Generowane nieprzerwanie'},
    hint:{en:'Earth\'s magnetic poles wander over time and have reversed completely ~170 times in the past 76 million years — north becomes south and vice versa.',pl:'Bieguny magnetyczne Ziemi wędrują z czasem i całkowicie się odwróciły ~170 razy w ciągu ostatnich 76 mln lat — północ staje się południem i odwrotnie.'},
    image:WM('Van_allen_belts.svg'),
    imageAlt:'Pasy Van Allena — struktura magnetosfery Ziemi',
    imageCredit:'NASA · Van Allen Belts · public domain',
    field:{en:'Geophysics, Magnetism',pl:'Geofizyka, Magnetyzm'},
    discoveries:{en:'Generated by convection of liquid iron in Earth\'s outer core (geodynamo). Shields Earth from solar wind and cosmic radiation. Extends ~65,000 km into space (magnetosphere). Van Allen radiation belts trap energetic particles.',pl:'Generowane przez konwekcję płynnego żelaza w zewnętrznym jądrze Ziemi (geodynamo). Chroni Ziemię przed wiatrem słonecznym i promieniowaniem kosmicznym. Sięga ~65 000 km w przestrzeń kosmiczną (magnetosfera). Pasy Van Allena pułapkują energetyczne cząstki.'},
    keywords:{en:['Geodynamo','Magnetic Reversal','Magnetosphere','Van Allen Belts'],pl:['Geodynamo','Odwrócenie biegunów','Magnetosfera','Pasy Van Allena']}
  },

  {
    id:'sci-30',
    category:{en:'Physics Laws',pl:'Prawa Fizyki'},
    title:{en:'Entropy & the Arrow of Time',pl:'Entropia i Strzałka Czasu'},
    period:{en:'2nd Law — Clausius 1850',pl:'2. zasada — Clausius 1850'},
    hint:{en:'You can easily crack an egg — but you\'ve never seen a broken egg reassemble itself. That asymmetry is why time has a direction.',pl:'Możesz łatwo rozbić jajko — ale nigdy nie widziałeś, żeby rozbite jajko się ponownie złożyło. Ta asymetria sprawia, że czas ma kierunek.'},
    image:WM('Entropy_illustration.svg'),
    imageAlt:'Ilustracja entropii — wzrost nieporządku w układzie izolowanym',
    imageCredit:'Entropy illustration · domena publiczna',
    field:{en:'Thermodynamics, Statistical Mechanics',pl:'Termodynamika, Mechanika Statystyczna'},
    discoveries:{en:'Entropy (S) always increases in isolated systems (2nd Law). Boltzmann (1877): entropy is related to the number of microstates — S = k·ln(W). The "arrow of time" flows in the direction of increasing entropy. Near the Big Bang, entropy was extremely low.',pl:'Entropia (S) zawsze rośnie w układach izolowanych (2. zasada). Boltzmann (1877): entropia zależy od liczby mikrostanów — S = k·ln(W). „Strzałka czasu" płynie w kierunku wzrostu entropii. Tuż po Wielkim Wybuchu entropia była ekstremalnie niska.'},
    keywords:{en:['Entropy','Arrow of Time','Boltzmann','Disorder'],pl:['Entropia','Strzałka czasu','Boltzmann','Nieporządek']}
  }

);
sciDeck = shuffle(SCIENCE_CARDS);

/* ══════════════════════════════════════════════════════
   QUIZ SYSTEM
   Questions auto-generated from SCIENCE_CARDS + CARDS
   ══════════════════════════════════════════════════════ */

/* All quiz categories (value = filter key used in cards) */
const QUIZ_CATS = [
  { key:'Eras',        label:{en:'Art Eras',          pl:'Epoki Sztuki'},    src:'art' },
  { key:'Styles',      label:{en:'Art Styles',         pl:'Style Artystyczne'},src:'art' },
  { key:'Techniques',  label:{en:'Art Techniques',     pl:'Techniki Artystyczne'},src:'art'},
  { key:'Physics',     label:{en:'Physics',            pl:'Fizyka'},          src:'sci' },
  { key:'Chemistry',   label:{en:'Chemistry',          pl:'Chemia'},          src:'sci' },
  { key:'Technology',  label:{en:'Technology',         pl:'Technologia'},     src:'sci' },
  { key:'Universe',    label:{en:'Universe',           pl:'Wszechświat'},     src:'sci' },
  { key:'Earth Science',label:{en:'Earth Science',     pl:'Nauki o Ziemi'},  src:'sci' },
  { key:'Physics Laws',label:{en:'Physics Laws',       pl:'Prawa Fizyki'},    src:'sci' },
  { key:'Biology',     label:{en:'Biology',            pl:'Biologia'},        src:'sci' },
  { key:'Mathematics', label:{en:'Mathematics',        pl:'Matematyka'},      src:'sci' },
  { key:'Astronomy',   label:{en:'Astronomy',          pl:'Astronomia'},      src:'sci' },
  { key:'Computer Science',label:{en:'Computer Science',pl:'Informatyka'},    src:'sci' },
];

/* Build a question from a card */
function cardToQuestion(card, isArt) {
  const L = lang;
  const c = isArt ? card : card;
  const title    = isArt ? card.title[L]    : card.title[L];
  const category = isArt ? card.category[L] : card.category[L];
  const hint     = isArt ? card.hint[L]     : card.hint[L];
  const period   = isArt ? card.period[L]   : card.period[L];

  // Pick one of multiple question templates randomly
  const templates = isArt ? [
    { q: L==='pl'
        ? `Do której epoki / stylu należy: "${title}"?`
        : `Which era / style does "${title}" belong to?`,
      answer: category,
      pool: 'art-cat' },
    { q: L==='pl'
        ? `"${hint}" — o czym mowa?`
        : `"${hint}" — what is being described?`,
      answer: title,
      pool: 'art-title' },
    { q: L==='pl'
        ? `Kiedy rozwijał się / kiedy żył: ${title}?`
        : `When did ${title} flourish / live?`,
      answer: period,
      pool: 'art-period' },
  ] : [
    { q: L==='pl'
        ? `"${hint}" — o kim lub o czym mowa?`
        : `"${hint}" — who or what is described?`,
      answer: title,
      pool: 'sci-title' },
    { q: L==='pl'
        ? `Do jakiej dziedziny należy: ${title}?`
        : `What field does ${title} belong to?`,
      answer: category,
      pool: 'sci-cat' },
    { q: L==='pl'
        ? `Kiedy żył / kiedy odkryto: ${title}?`
        : `When did ${title} live / was discovered?`,
      answer: period,
      pool: 'sci-period' },
  ];
  return templates[Math.floor(Math.random() * templates.length)];
}

/* Generate wrong options from a pool list */
function makeOptions(correct, pool) {
  const distractors = pool.filter(x => x !== correct);
  const picked = shuffle(distractors).slice(0, 3);
  const opts = shuffle([correct, ...picked]);
  return { options: opts, answerIndex: opts.indexOf(correct) };
}

/* Build full quiz from selected category keys */
function buildQuiz(selectedKeys) {
  const artKeys = selectedKeys.filter(k => QUIZ_CATS.find(c=>c.key===k&&c.src==='art'));
  const sciKeys = selectedKeys.filter(k => QUIZ_CATS.find(c=>c.key===k&&c.src==='sci'));

  const artPool  = artKeys.length ? CARDS.filter(c => artKeys.includes(c.category.en)) : [];
  const sciPool  = sciKeys.length ? SCIENCE_CARDS.filter(c => sciKeys.includes(c.category.en)) : [];

  const allCards = shuffle([...artPool, ...sciPool]);
  const sample   = allCards.slice(0, Math.min(15, allCards.length));

  // Build title pools for wrong options
  const artTitles = CARDS.map(c=>c.title[lang]);
  const sciTitles = SCIENCE_CARDS.map(c=>c.title[lang]);
  const artCats   = [...new Set(CARDS.map(c=>c.category[lang]))];
  const sciCats   = [...new Set(SCIENCE_CARDS.map(c=>c.category[lang]))];
  const artPeriods= [...new Set(CARDS.map(c=>c.period[lang]))];
  const sciPeriods= [...new Set(SCIENCE_CARDS.map(c=>c.period[lang]))];

  const poolMap = {
    'art-title':  artTitles,
    'art-cat':    artCats,
    'art-period': artPeriods,
    'sci-title':  sciTitles,
    'sci-cat':    sciCats,
    'sci-period': sciPeriods,
  };

  return sample.map(card => {
    const isArt = !!artPool.find(a=>a.id===card.id);
    const tpl   = cardToQuestion(card, isArt);
    const pool  = poolMap[tpl.pool] || [...artTitles, ...sciTitles];
    const { options, answerIndex } = makeOptions(tpl.answer, pool);
    return {
      question: tpl.q,
      options,
      answer: answerIndex,
      cat: isArt ? card.category[lang] : card.category[lang],
    };
  });
}

/* ── Quiz state ────────────────────────────────────── */
let quizQuestions  = [];
let quizQIndex     = 0;
let quizScore      = 0;
let quizSelected   = new Set();
let quizAnswered   = false;

/* ── Quiz DOM ──────────────────────────────────────── */
const quizView       = document.getElementById('quizView');
const quizSetup      = document.getElementById('quizSetup');
const quizActive     = document.getElementById('quizActive');
const quizResult     = document.getElementById('quizResult');
const quizCatGrid    = document.getElementById('quizCatGrid');
const quizStartBtn   = document.getElementById('quizStartBtn');
const quizRestartBtn = document.getElementById('quizRestartBtn');
const quizBackBtn    = document.getElementById('quizBackBtn');
const qProgressFill  = document.getElementById('qProgressFill');
const qCounter       = document.getElementById('qCounter');
const qScore         = document.getElementById('qScore');
const qCatBadge      = document.getElementById('qCatBadge');
const qQuestion      = document.getElementById('qQuestion');
const qOptions       = document.getElementById('qOptions');
const qFeedback      = document.getElementById('qFeedback');
const qNextBtn       = document.getElementById('qNextBtn');
const qResultScore   = document.getElementById('qResultScore');
const qResultPct     = document.getElementById('qResultPct');
const qResultLabel   = document.getElementById('qResultLabel');
const quizTabBtn     = document.getElementById('quizTabBtn');

/* ── Build category picker ─────────────────────────── */
function buildCatGrid() {
  quizCatGrid.innerHTML = '';

  // Only show cats that have cards
  const available = QUIZ_CATS.filter(cat => {
    if (cat.src === 'art') return CARDS.some(c=>c.category.en===cat.key);
    return SCIENCE_CARDS.some(c=>c.category.en===cat.key);
  });

  available.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'quiz-cat-tile';
    btn.textContent = cat.label[lang];
    btn.dataset.key = cat.key;
    if (quizSelected.has(cat.key)) btn.classList.add('selected');
    btn.addEventListener('click', () => {
      btn.classList.toggle('selected');
      if (quizSelected.has(cat.key)) quizSelected.delete(cat.key);
      else quizSelected.add(cat.key);
      quizStartBtn.disabled = (quizSelected.size === 0);
    });
    quizCatGrid.appendChild(btn);
  });

  quizStartBtn.disabled = (quizSelected.size === 0);
  const ui = UI[lang];
  document.getElementById('quizSetupTitle').textContent = lang==='pl' ? 'Wybierz kategorie quizu' : 'Choose quiz categories';
  document.getElementById('quizSetupSub').textContent   = lang==='pl' ? 'Możesz wybrać jedną lub więcej' : 'You can select one or more';
  quizStartBtn.textContent  = lang==='pl' ? 'Rozpocznij Quiz →' : 'Start Quiz →';
}

/* ── Start quiz ────────────────────────────────────── */
function startQuiz() {
  quizQuestions = buildQuiz([...quizSelected]);
  if (!quizQuestions.length) return;
  quizQIndex  = 0;
  quizScore   = 0;
  quizAnswered= false;
  quizSetup.classList.add('view-hidden');
  quizResult.classList.add('view-hidden');
  quizActive.classList.remove('view-hidden');
  renderQuizQ();
}

/* ── Render question ───────────────────────────────── */
function renderQuizQ() {
  const q   = quizQuestions[quizQIndex];
  const pct = (quizQIndex / quizQuestions.length) * 100;
  qProgressFill.style.width = pct + '%';
  qCounter.textContent  = `${quizQIndex + 1} / ${quizQuestions.length}`;
  qScore.textContent    = `✓ ${quizScore}`;
  qCatBadge.textContent = q.cat;
  qQuestion.textContent = q.question;
  qFeedback.textContent = '';
  qFeedback.className   = 'quiz-feedback';
  qNextBtn.classList.add('view-hidden');
  quizAnswered = false;

  qOptions.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className   = 'quiz-option';
    btn.innerHTML   = `<span class="quiz-opt-letter">${'ABCD'[i]}.</span> ${opt}`;
    btn.addEventListener('click', () => answerQuiz(i));
    qOptions.appendChild(btn);
  });
}

/* ── Answer ────────────────────────────────────────── */
function answerQuiz(chosen) {
  if (quizAnswered) return;
  quizAnswered = true;
  const q       = quizQuestions[quizQIndex];
  const correct = (chosen === q.answer);
  if (correct) quizScore++;

  qOptions.querySelectorAll('.quiz-option').forEach((btn, i) => {
    if (i === q.answer) btn.classList.add('correct');
    else if (i === chosen && !correct) btn.classList.add('wrong');
    btn.disabled = true;
  });

  qFeedback.textContent = correct
    ? (lang==='pl' ? '✓ Poprawnie!' : '✓ Correct!')
    : (lang==='pl' ? `✗ Poprawna odpowiedź: ${q.options[q.answer]}` : `✗ Correct answer: ${q.options[q.answer]}`);
  qFeedback.className = 'quiz-feedback ' + (correct ? 'ok' : 'err');
  qNextBtn.textContent = (quizQIndex + 1 < quizQuestions.length)
    ? (lang==='pl' ? 'Dalej →' : 'Next →')
    : (lang==='pl' ? 'Zobacz wynik →' : 'See result →');
  qNextBtn.classList.remove('view-hidden');
}

/* ── Next question / finish ────────────────────────── */
qNextBtn.addEventListener('click', () => {
  quizQIndex++;
  if (quizQIndex >= quizQuestions.length) showQuizResult();
  else renderQuizQ();
});

function showQuizResult() {
  quizActive.classList.add('view-hidden');
  quizResult.classList.remove('view-hidden');
  const pct = Math.round((quizScore / quizQuestions.length) * 100);
  qResultScore.textContent = `${quizScore} / ${quizQuestions.length}`;
  qResultPct.textContent   = `${pct}%`;
  qResultLabel.textContent = lang==='pl' ? 'Twój wynik' : 'Your score';
  quizRestartBtn.textContent = lang==='pl' ? 'Zagraj ponownie' : 'Play again';
  quizBackBtn.textContent    = lang==='pl' ? '← Zmień kategorie' : '← Change categories';
  progressFill.style.width   = '100%';
}

quizStartBtn.addEventListener('click', startQuiz);
quizRestartBtn.addEventListener('click', startQuiz);
quizBackBtn.addEventListener('click', () => {
  quizResult.classList.add('view-hidden');
  quizActive.classList.add('view-hidden');
  quizSetup.classList.remove('view-hidden');
  buildCatGrid();
});

/* ── Patch showView to include quiz ──────────────────── */
const _showViewWithQuiz = showView;
showView = function(v) {
  view = v;
  document.getElementById('cardsView').classList.toggle('view-hidden', v !== 'cards');
  document.getElementById('vocabView').classList.toggle('view-hidden',  v !== 'vocab');
  document.getElementById('scienceView').classList.toggle('view-hidden',v !== 'science');
  quizView.classList.toggle('view-hidden', v !== 'quiz');

  document.getElementById('cardsTabBtn').classList.toggle('tab-active',   v === 'cards');
  document.getElementById('scienceTabBtn').classList.toggle('tab-active', v === 'science');
  document.getElementById('vocabTabBtn').classList.toggle('tab-active',   v === 'vocab');
  quizTabBtn.classList.toggle('tab-active', v === 'quiz');

  const catFilters = document.getElementById('catFilters');
  if (catFilters) catFilters.style.display = (v === 'cards') ? '' : 'none';

  progressFill.style.width = '0%';

  if (v === 'quiz')    buildCatGrid();
  else if (v === 'science') renderSci(false);
  else if (v === 'vocab')   renderVocab(false);
  else render(false);
};

quizTabBtn.addEventListener('click', () => showView('quiz'));

/* Re-init */
showView('cards');
