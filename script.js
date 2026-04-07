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

/* ═══════════════════════════════════════════════════════
   Luma — Application Logic
   Single state object · clean architecture · no monkey-patching
   ═══════════════════════════════════════════════════════ */

/* ── Utility ─────────────────────────────────────────── */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const $ = id => document.getElementById(id);
function setText(id, val) { const el = $(id); if (el) el.textContent = val; }
function setKws(containerId, kws) {
  const el = $(containerId);
  if (!el) return;
  el.innerHTML = '';
  kws.forEach(k => { const s = document.createElement('span'); s.className = 'tag'; s.textContent = k; el.appendChild(s); });
}

/* ── State ───────────────────────────────────────────── */
const S = {
  lang:          'pl',
  view:          'cards',
  // art cards
  deck:          [],
  idx:           0,
  flipped:       false,
  activeCat:     'all',
  // science
  sciDeck:       [],
  sciIdx:        0,
  sciFlipped:    false,
  // vocab
  vocabDeck:     [],
  vocabIdx:      0,
  vocabFlipped:  false,
  // quiz
  quizQs:        [],
  quizIdx:       0,
  quizScore:     0,
  quizSel:       new Set(),
  quizAnswered:  false,
};

/* ── i18n ────────────────────────────────────────────── */
const UI = {
  pl: {
    hint:'Wskazówka', flipCue:'kliknij, by odkryć →', flipCueRev:'↺ wróć',
    artists:'Kluczowi artyści', philosophy:'Filozofia wizualna',
    cardOf:(i,n)=>`Karta ${i} z ${n}`, catAll:'Wszystkie kategorie',
    vocabOf:(i,n)=>`Termin ${i} z ${n}`, reshuffle:'Przetasuj',
    definition:'Definicja', termLabel:'Termin',
    field:'Dziedzina', discoveries:'Odkrycia',
    prev:'Poprzednia', next:'Następna',
    prevTerm:'Poprzedni', nextTerm:'Następny',
    startQuiz:'Rozpocznij →', quizTitle:'Wybierz kategorie',
    quizSub:'Możesz wybrać jedną lub więcej',
    correct:(a)=>`✓ Poprawnie!`, wrong:(a)=>`✗ Odpowiedź: ${a}`,
    nextQ:'Dalej →', finish:'Zobacz wynik →',
    resultLabel:'Twój wynik', again:'Zagraj ponownie', changeCat:'← Zmień kategorie',
    score:(s,n)=>`${s} / ${n}`,
  },
  en: {
    hint:'Hint', flipCue:'tap to reveal →', flipCueRev:'↺ return',
    artists:'Key Artists', philosophy:'Visual Philosophy',
    cardOf:(i,n)=>`Card ${i} of ${n}`, catAll:'All Categories',
    vocabOf:(i,n)=>`Term ${i} of ${n}`, reshuffle:'Reshuffle',
    definition:'Definition', termLabel:'Term',
    field:'Field', discoveries:'Discoveries',
    prev:'Previous', next:'Next',
    prevTerm:'Previous', nextTerm:'Next',
    startQuiz:'Start Quiz →', quizTitle:'Choose categories',
    quizSub:'Select one or more to begin',
    correct:(a)=>`✓ Correct!`, wrong:(a)=>`✗ Answer: ${a}`,
    nextQ:'Next →', finish:'See result →',
    resultLabel:'Your score', again:'Play again', changeCat:'← Change categories',
    score:(s,n)=>`${s} / ${n}`,
  }
};
const ui = () => UI[S.lang];
const L  = () => S.lang;

/* ── Quiz categories config ──────────────────────────── */
const QUIZ_CATS = [
  {key:'Eras',         label:{pl:'Epoki Sztuki',       en:'Art Eras'},         src:'art'},
  {key:'Styles',       label:{pl:'Style Artystyczne',  en:'Art Styles'},       src:'art'},
  {key:'Techniques',   label:{pl:'Techniki Artystyczne',en:'Art Techniques'},  src:'art'},
  {key:'Physics',      label:{pl:'Fizyka',             en:'Physics'},          src:'sci'},
  {key:'Chemistry',    label:{pl:'Chemia',             en:'Chemistry'},        src:'sci'},
  {key:'Technology',   label:{pl:'Technologia',        en:'Technology'},       src:'sci'},
  {key:'Universe',     label:{pl:'Wszechświat',        en:'Universe'},         src:'sci'},
  {key:'Earth Science',label:{pl:'Nauki o Ziemi',      en:'Earth Science'},    src:'sci'},
  {key:'Physics Laws', label:{pl:'Prawa Fizyki',       en:'Physics Laws'},     src:'sci'},
  {key:'Biology',      label:{pl:'Biologia',           en:'Biology'},          src:'sci'},
  {key:'Mathematics',  label:{pl:'Matematyka',         en:'Mathematics'},      src:'sci'},
  {key:'Astronomy',    label:{pl:'Astronomia',         en:'Astronomy'},        src:'sci'},
  {key:'Computer Science',label:{pl:'Informatyka',     en:'Computer Science'}, src:'sci'},
];

/* ── DOM refs (cached once) ──────────────────────────── */
const DOM = {
  // art
  flashcard:   $('flashcard'),    cardInner:    $('cardInner'),
  cardImg:     $('cardImg'),      frontCatPill: $('frontCatPill'),
  hintEyebrow: $('hintEyebrow'), hintText:     $('hintText'),
  cardTitle:   $('cardTitle'),    flipCueFront: $('flipCueFront'),
  backCat:     $('backCat'),      backTitle:    $('backTitle'),
  backPeriod:  $('backPeriod'),   backArtists:  $('backArtists'),
  backPhil:    $('backPhilosophy'),imageCredit: $('imageCredit'),
  progressFill:$('progressFill'), progressRole: $('progressRole'),
  progressText:$('progressText'), categoryLabel:$('categoryLabel'),
  cardCounter: $('cardCounter'),  prevBtn:      $('prevBtn'),
  nextBtn:     $('nextBtn'),      artistsLabel: $('artistsLabel'),
  philLabel:   $('philLabel'),    keywords:     $('keywords'),
  // science
  sciCard:     $('sciCard'),      sciCardInner: $('sciCardInner'),
  sciImg:      $('sciImg'),       sciPill:      $('sciPill'),
  sciHint:     $('sciHint'),      sciTitle:     $('sciTitle'),
  sciBackCat:  $('sciBackCat'),   sciBackTitle: $('sciBackTitle'),
  sciBackPeriod:$('sciBackPeriod'),sciField:    $('sciField'),
  sciDisc:     $('sciDisc'),      sciKeywords:  $('sciKeywords'),
  sciCredit:   $('sciCredit'),    sciProgress:  $('sciProgress'),
  sciCounter:  $('sciCounter'),   sciPrev:      $('sciPrev'),
  sciNext:     $('sciNext'),      sciCategory:  $('sciCategory'),
  // vocab
  vocabCard:     $('vocabCard'),    vocabCardInner:$('vocabCardInner'),
  vocabCounter:  $('vocabCounter'), vocabPrev:     $('vocabPrev'),
  vocabNext:     $('vocabNext'),    vocabReshuffle:$('vocabReshuffle'),
  // quiz
  quizCatGrid:   $('quizCatGrid'), quizStartBtn:  $('quizStartBtn'),
  quizActive:    $('quizActive'),  quizSetup:     $('quizSetup'),
  quizResult:    $('quizResult'),  qProgressFill: $('qProgressFill'),
  qCounter:      $('qCounter'),    qScore:        $('qScore'),
  qCatBadge:    $('qCatBadge'),   qQuestion:     $('qQuestion'),
  qOptions:      $('qOptions'),    qFeedback:     $('qFeedback'),
  qNextBtn:      $('qNextBtn'),    quizRestartBtn:$('quizRestartBtn'),
  quizBackBtn:   $('quizBackBtn'),
  // global
  langBtn:       $('langBtn'),     catFilters:    $('catFilters'),
};

/* ── Generic card flip ───────────────────────────────── */
function flipCard(cardEl, innerEl, stateKey, val, animate) {
  S[stateKey] = val;
  cardEl.setAttribute('aria-pressed', String(val));
  if (!animate) {
    innerEl.style.transition = 'none';
    cardEl.classList.toggle('is-flipped', val);
    void innerEl.offsetWidth;
    innerEl.style.transition = '';
  } else {
    cardEl.classList.toggle('is-flipped', val);
  }
}

function animateCard(cardEl) {
  cardEl.classList.add('card--refresh');
  void cardEl.offsetWidth;
  setTimeout(() => cardEl.classList.remove('card--refresh'), 320);
}

function setProgress(current, total) {
  const pct = total ? (current / total) * 100 : 0;
  DOM.progressFill.style.width = pct + '%';
  DOM.progressRole.setAttribute('aria-valuenow', Math.round(pct));
}

/* ── Render: art cards ───────────────────────────────── */
function render(animate = false) {
  if (!S.deck.length) return;
  const card = S.deck[S.idx];
  const u = ui(); const l = L();
  if (animate) animateCard(DOM.flashcard);

  DOM.cardImg.src              = card.image;
  DOM.cardImg.alt              = card.imageAlt;
  DOM.frontCatPill.textContent = card.category[l];
  DOM.hintEyebrow.textContent  = u.hint;
  DOM.hintText.textContent     = card.hint[l];
  DOM.cardTitle.textContent    = card.title[l];
  DOM.flipCueFront.textContent = u.flipCue;
  DOM.backCat.textContent      = card.category[l];
  DOM.backTitle.textContent    = card.title[l];
  DOM.backPeriod.textContent   = card.period[l];
  DOM.backArtists.textContent  = card.keyArtists.join('  ·  ');
  DOM.backPhil.textContent     = card.philosophy[l];
  DOM.imageCredit.textContent  = card.imageCredit;
  if (DOM.artistsLabel) DOM.artistsLabel.textContent = u.artists;
  if (DOM.philLabel)    DOM.philLabel.textContent    = u.philosophy;
  setKws('keywords', card.keywords[l]);
  DOM.categoryLabel.textContent = S.activeCat === 'all'
    ? u.catAll : (S.deck[0]?.category[l] ?? S.activeCat);
  DOM.progressText.textContent = u.cardOf(S.idx + 1, S.deck.length);
  DOM.cardCounter.textContent  = `${S.idx + 1} / ${S.deck.length}`;
  setProgress(S.idx + 1, S.deck.length);
  DOM.prevBtn.disabled = S.idx === 0;
  DOM.nextBtn.disabled = S.idx === S.deck.length - 1;
  flipCard(DOM.flashcard, DOM.cardInner, 'flipped', false, false);
}

/* ── Render: science ─────────────────────────────────── */
function renderSci(animate = false) {
  if (!S.sciDeck.length) return;
  const card = S.sciDeck[S.sciIdx];
  const u = ui(); const l = L();
  if (animate) animateCard(DOM.sciCard);

  DOM.sciImg.src               = card.image;
  DOM.sciImg.alt               = card.imageAlt;
  DOM.sciPill.textContent      = card.category[l];
  DOM.sciHint.textContent      = card.hint[l];
  DOM.sciTitle.textContent     = card.title[l];
  DOM.sciBackCat.textContent   = card.category[l];
  DOM.sciBackTitle.textContent = card.title[l];
  DOM.sciBackPeriod.textContent= card.period[l];
  DOM.sciField.textContent     = card.field[l];
  DOM.sciDisc.textContent      = card.discoveries[l];
  DOM.sciCredit.textContent    = card.imageCredit;
  setText('sciFieldLabel', u.field);
  setText('sciDiscLabel',  u.discoveries);
  setKws('sciKeywords', card.keywords[l]);
  DOM.sciProgress.textContent  = u.cardOf(S.sciIdx + 1, S.sciDeck.length);
  DOM.sciCounter.textContent   = `${S.sciIdx + 1} / ${S.sciDeck.length}`;
  setProgress(S.sciIdx + 1, S.sciDeck.length);
  DOM.sciPrev.disabled = S.sciIdx === 0;
  DOM.sciNext.disabled = S.sciIdx === S.sciDeck.length - 1;
  flipCard(DOM.sciCard, DOM.sciCardInner, 'sciFlipped', false, false);
}

/* ── Render: vocab ───────────────────────────────────── */
function renderVocab(animate = false) {
  if (!S.vocabDeck.length) return;
  const term = S.vocabDeck[S.vocabIdx];
  const u = ui(); const l = L();
  if (animate) animateCard(DOM.vocabCard);

  setText('vocabTermLabel', u.termLabel);
  setText('vocabTermText',  term.term[l]);
  setText('vocabTermSub',   l === 'pl' ? term.term.en : term.term.pl);
  setText('vocabDefLabel',  u.definition);
  setText('vocabDefText',   term.def[l]);
  setText('reshuffleLabel', u.reshuffle);

  DOM.vocabCounter.textContent = u.vocabOf(S.vocabIdx + 1, S.vocabDeck.length);
  setText('vocabCounterNav', `${S.vocabIdx + 1} / ${S.vocabDeck.length}`);
  DOM.vocabPrev.disabled = S.vocabIdx === 0;
  DOM.vocabNext.disabled = S.vocabIdx === S.vocabDeck.length - 1;
  setProgress(S.vocabIdx + 1, S.vocabDeck.length);
  flipCard(DOM.vocabCard, DOM.vocabCardInner, 'vocabFlipped', false, false);
}

/* ── Show view (single, authoritative) ──────────────── */
const VIEWS = ['cards', 'science', 'vocab', 'quiz'];

function showView(v) {
  S.view = v;
  VIEWS.forEach(id => {
    const el = $(id + 'View');
    if (el) el.classList.toggle('hidden', id !== v);
  });
  document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === v);
  });
  // show art category filters only on art view
  if (DOM.catFilters) DOM.catFilters.style.display = v === 'cards' ? '' : 'none';
  // reset progress bar on view switch then re-render
  setProgress(0, 1);
  if      (v === 'cards')   render();
  else if (v === 'science') renderSci();
  else if (v === 'vocab')   renderVocab();
  else if (v === 'quiz')    renderQuizSetup();
}

/* ── Language toggle ─────────────────────────────────── */
function updateCatChips() {
  const map = {
    all:{pl:'Wszystkie',en:'All'}, Eras:{pl:'Epoki',en:'Eras'},
    Styles:{pl:'Style',en:'Styles'}, Techniques:{pl:'Techniki',en:'Techniques'}
  };
  document.querySelectorAll('.chip[data-cat]').forEach(btn => {
    const k = btn.dataset.cat;
    if (map[k]) btn.textContent = map[k][S.lang];
  });
}

function toggleLang() {
  S.lang = S.lang === 'pl' ? 'en' : 'pl';
  DOM.langBtn.textContent = S.lang === 'pl' ? 'EN' : 'PL';
  document.documentElement.lang = S.lang;
  updateCatChips();
  if      (S.view === 'cards')   render();
  else if (S.view === 'science') renderSci();
  else if (S.view === 'vocab')   renderVocab();
  else if (S.view === 'quiz')    renderQuizSetup();
}

/* ── Navigation ──────────────────────────────────────── */
function go(dir) {
  if (S.view === 'cards') {
    const ni = S.idx + dir;
    if (ni >= 0 && ni < S.deck.length) { S.idx = ni; render(true); }
  } else if (S.view === 'science') {
    const ni = S.sciIdx + dir;
    if (ni >= 0 && ni < S.sciDeck.length) { S.sciIdx = ni; renderSci(true); }
  } else if (S.view === 'vocab') {
    const ni = S.vocabIdx + dir;
    if (ni >= 0 && ni < S.vocabDeck.length) { S.vocabIdx = ni; renderVocab(true); }
  }
}

function setCat(cat) {
  S.activeCat = cat;
  S.idx = 0;
  S.deck = cat === 'all' ? shuffle([...CARDS]) : CARDS.filter(c => c.category.en === cat);
  render(false);
}

/* ═══════════════════════════════════════════════════════
   QUIZ SYSTEM
   ═══════════════════════════════════════════════════════ */

function buildQuestion(card, isArt) {
  const l = L();
  const title  = card.title[l];
  const cat    = card.category[l];
  const period = card.period[l];
  const hint   = card.hint[l];
  const templates = isArt ? [
    {q: l==='pl' ? `"${hint}" — o czym mowa?` : `"${hint}" — what is this?`,
     answer:title, pool:'artTitle'},
    {q: l==='pl' ? `Do której kategorii należy: "${title}"?` : `Which category is "${title}"?`,
     answer:cat, pool:'artCat'},
    {q: l==='pl' ? `Kiedy rozwijał się: ${title}?` : `When did ${title} flourish?`,
     answer:period, pool:'artPeriod'},
  ] : [
    {q: l==='pl' ? `"${hint}" — o kim lub o czym mowa?` : `"${hint}" — who or what?`,
     answer:title, pool:'sciTitle'},
    {q: l==='pl' ? `Do jakiej dziedziny należy: ${title}?` : `What field is ${title} in?`,
     answer:cat, pool:'sciCat'},
    {q: l==='pl' ? `Kiedy żył / odkryto: ${title}?` : `When did ${title} live / was discovered?`,
     answer:period, pool:'sciPeriod'},
  ];
  return templates[Math.floor(Math.random() * templates.length)];
}

function makeOptions(correct, poolArr) {
  const others = shuffle(poolArr.filter(x => x && x !== correct)).slice(0, 3);
  // pad if pool too small
  while (others.length < 3) others.push('—');
  const opts = shuffle([correct, ...others]);
  return {options: opts, answer: opts.indexOf(correct)};
}

function buildQuiz(selectedKeys) {
  const artKeys = selectedKeys.filter(k => QUIZ_CATS.find(c=>c.key===k&&c.src==='art'));
  const sciKeys = selectedKeys.filter(k => QUIZ_CATS.find(c=>c.key===k&&c.src==='sci'));
  const artPool = artKeys.length ? CARDS.filter(c=>artKeys.includes(c.category.en)) : [];
  const sciPool = sciKeys.length ? SCIENCE_CARDS.filter(c=>sciKeys.includes(c.category.en)) : [];
  const l = L();
  const pools = {
    artTitle:  CARDS.map(c=>c.title[l]),
    artCat:    [...new Set(CARDS.map(c=>c.category[l]))],
    artPeriod: [...new Set(CARDS.map(c=>c.period[l]))],
    sciTitle:  SCIENCE_CARDS.map(c=>c.title[l]),
    sciCat:    [...new Set(SCIENCE_CARDS.map(c=>c.category[l]))],
    sciPeriod: [...new Set(SCIENCE_CARDS.map(c=>c.period[l]))],
  };
  return shuffle([...artPool, ...sciPool]).slice(0, 15).map(card => {
    const isArt = !!artPool.find(a=>a.id===card.id);
    const tpl = buildQuestion(card, isArt);
    const {options, answer} = makeOptions(tpl.answer, pools[tpl.pool]);
    return {question:tpl.q, options, answer, cat:card.category[l]};
  });
}

/* ── Quiz render ─────────────────────────────────────── */
function renderQuizSetup() {
  const u = ui();
  setText('quizSetupTitle', u.quizTitle);
  setText('quizSetupSub',   u.quizSub);
  setText('quizStartBtn',   u.startQuiz);
  DOM.quizStartBtn.disabled = S.quizSel.size === 0;

  const available = QUIZ_CATS.filter(cat =>
    cat.src === 'art'
      ? CARDS.some(c => c.category.en === cat.key)
      : SCIENCE_CARDS.some(c => c.category.en === cat.key)
  );

  DOM.quizCatGrid.innerHTML = '';
  available.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'quiz-tile' + (S.quizSel.has(cat.key) ? ' sel' : '');
    btn.textContent = cat.label[S.lang];
    btn.dataset.key = cat.key;
    btn.addEventListener('click', () => {
      S.quizSel.has(cat.key) ? S.quizSel.delete(cat.key) : S.quizSel.add(cat.key);
      btn.classList.toggle('sel', S.quizSel.has(cat.key));
      DOM.quizStartBtn.disabled = S.quizSel.size === 0;
    });
    DOM.quizCatGrid.appendChild(btn);
  });

  DOM.quizSetup.classList.remove('hidden');
  DOM.quizActive.classList.add('hidden');
  DOM.quizResult.classList.add('hidden');
}

function startQuiz() {
  S.quizQs    = buildQuiz([...S.quizSel]);
  S.quizIdx   = 0;
  S.quizScore = 0;
  S.quizAnswered = false;
  if (!S.quizQs.length) return;
  DOM.quizSetup.classList.add('hidden');
  DOM.quizResult.classList.add('hidden');
  DOM.quizActive.classList.remove('hidden');
  renderQ();
}

function renderQ() {
  const q = S.quizQs[S.quizIdx];
  const u = ui();
  const pct = (S.quizIdx / S.quizQs.length) * 100;
  DOM.qProgressFill.style.width = pct + '%';
  DOM.qCounter.textContent = u.cardOf(S.quizIdx + 1, S.quizQs.length);
  DOM.qScore.textContent   = `✓ ${S.quizScore}`;
  DOM.qCatBadge.textContent= q.cat;
  DOM.qQuestion.textContent= q.question;
  DOM.qFeedback.textContent= '';
  DOM.qFeedback.className  = 'quiz-fb hidden';
  DOM.qNextBtn.classList.add('hidden');
  S.quizAnswered = false;

  DOM.qOptions.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt';
    btn.innerHTML = `<span class="opt-letter">${'ABCD'[i]}</span>${opt}`;
    btn.addEventListener('click', () => answerQ(i));
    DOM.qOptions.appendChild(btn);
  });
}

function answerQ(chosen) {
  if (S.quizAnswered) return;
  S.quizAnswered = true;
  const q = S.quizQs[S.quizIdx];
  const ok = chosen === q.answer;
  if (ok) S.quizScore++;
  const u = ui();

  DOM.qOptions.querySelectorAll('.quiz-opt').forEach((btn, i) => {
    if (i === q.answer) btn.classList.add('correct');
    else if (i === chosen && !ok) btn.classList.add('wrong');
    btn.disabled = true;
  });

  DOM.qFeedback.textContent = ok ? u.correct(q.options[q.answer]) : u.wrong(q.options[q.answer]);
  DOM.qFeedback.className   = 'quiz-fb ' + (ok ? 'ok' : 'err');
  DOM.qNextBtn.textContent  = S.quizIdx + 1 < S.quizQs.length ? u.nextQ : u.finish;
  DOM.qNextBtn.classList.remove('hidden');
  DOM.qScore.textContent = `✓ ${S.quizScore}`;
}

function finishQuiz() {
  const u = ui();
  DOM.quizActive.classList.add('hidden');
  DOM.quizResult.classList.remove('hidden');
  const pct = Math.round((S.quizScore / S.quizQs.length) * 100);
  setText('qResultLabel', u.resultLabel);
  DOM.qResultScore.textContent = `${S.quizScore} / ${S.quizQs.length}`;
  DOM.qResultPct.textContent   = `${pct}%`;
  setText('quizRestartBtn', u.again);
  setText('quizBackBtn',    u.changeCat);
  setProgress(100, 100);
}

/* ═══════════════════════════════════════════════════════
   EVENT LISTENERS
   ═══════════════════════════════════════════════════════ */

// View tabs
document.querySelectorAll('.nav-tab').forEach(btn => {
  btn.addEventListener('click', () => showView(btn.dataset.view));
});

// Art category chips
document.querySelectorAll('.chip[data-cat]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.chip[data-cat]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    setCat(btn.dataset.cat);
  });
});

// Lang toggle
DOM.langBtn.addEventListener('click', toggleLang);

// Art flip / nav
DOM.flashcard.addEventListener('click', () =>
  flipCard(DOM.flashcard, DOM.cardInner, 'flipped', !S.flipped, true));
DOM.prevBtn.addEventListener('click', () => go(-1));
DOM.nextBtn.addEventListener('click', () => go(1));

// Science flip / nav
DOM.sciCard.addEventListener('click', () =>
  flipCard(DOM.sciCard, DOM.sciCardInner, 'sciFlipped', !S.sciFlipped, true));
DOM.sciPrev.addEventListener('click', () => go(-1));
DOM.sciNext.addEventListener('click', () => go(1));

// Vocab flip / nav / reshuffle
DOM.vocabCard.addEventListener('click', () =>
  flipCard(DOM.vocabCard, DOM.vocabCardInner, 'vocabFlipped', !S.vocabFlipped, true));
DOM.vocabPrev.addEventListener('click', () => go(-1));
DOM.vocabNext.addEventListener('click', () => go(1));
DOM.vocabReshuffle.addEventListener('click', () => {
  S.vocabDeck = shuffle([...VOCAB]);
  S.vocabIdx  = 0;
  renderVocab(true);
});

// Quiz events
DOM.quizStartBtn.addEventListener('click', startQuiz);
DOM.quizRestartBtn.addEventListener('click', startQuiz);
DOM.quizBackBtn.addEventListener('click', () => renderQuizSetup());
DOM.qNextBtn.addEventListener('click', () => {
  S.quizIdx++;
  if (S.quizIdx >= S.quizQs.length) finishQuiz();
  else renderQ();
});

// Keyboard navigation
document.addEventListener('keydown', e => {
  const tag = document.activeElement?.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA') return;
  const isFlipKey = e.key === ' ' || e.key === 'Enter';
  const v = S.view;

  if (v === 'cards') {
    if (isFlipKey) { e.preventDefault(); flipCard(DOM.flashcard, DOM.cardInner, 'flipped', !S.flipped, true); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); go(-1); }
  } else if (v === 'science') {
    if (isFlipKey) { e.preventDefault(); flipCard(DOM.sciCard, DOM.sciCardInner, 'sciFlipped', !S.sciFlipped, true); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); go(-1); }
  } else if (v === 'vocab') {
    if (isFlipKey) { e.preventDefault(); flipCard(DOM.vocabCard, DOM.vocabCardInner, 'vocabFlipped', !S.vocabFlipped, true); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); go(-1); }
  }
});

/* ═══════════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════════ */
S.deck      = shuffle([...CARDS]);
S.sciDeck   = shuffle([...SCIENCE_CARDS]);
S.vocabDeck = shuffle([...VOCAB]);
updateCatChips();
showView('cards');
