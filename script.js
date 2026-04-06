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
