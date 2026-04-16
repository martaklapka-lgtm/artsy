const WM = (file, w = 800) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${w}`;

const CARDS = [
  { id:1, category:{en:'Eras',pl:'Epoki'}, title:{en:'The Renaissance',pl:'Renesans'}, period:{en:'14th – 17th Century',pl:'XIV – XVII wiek'},
    hint:{en:'Began in 14th-century Florence — a "rebirth" of classical Greek and Roman learning, beauty, and humanism',pl:'Zrodził się w XIV-wiecznej Florencji — „odrodzenie" klasycznej kultury greckiej i rzymskiej, piękna i humanizmu'},
    images:[WM('"The_School_of_Athens"_by_Raffaello_Sanzio_da_Urbino.jpg'), WM('Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg'), WM('Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg')],
    imageAlt:'Raphael — The School of Athens, c. 1509–11', imageCredit:'Raphael · The School of Athens · c. 1509–11 · Vatican / da Vinci · Mona Lisa / Botticelli · Birth of Venus',
    keyArtists:['Leonardo da Vinci','Michelangelo','Raphael','Sandro Botticelli','Donatello'],
    philosophy:{en:'Humanist revival of classical antiquity through mathematical linear perspective, anatomical precision, and the idealised human figure as the measure of all things.',pl:'Humanistyczne odrodzenie starożytności przez matematyczną perspektywę liniową, precyzję anatomiczną i wyidealizowaną postać ludzką jako miarę wszechrzeczy.'},
    keywords:{en:['Humanism','Linear Perspective','Naturalism','Florence'],pl:['Humanizm','Perspektywa liniowa','Naturalizm','Florencja']}},
  { id:2, category:{en:'Eras',pl:'Epoki'}, title:{en:'The Baroque',pl:'Barok'}, period:{en:'17th – Early 18th Century',pl:'XVII – pocz. XVIII w.'},
    hint:{en:'Counter-Reformation grandeur — extreme drama, dark shadows, and ornate excess meant to overwhelm the senses',pl:'Przepych kontrreformacji — skrajny dramatyzm, ciemne cienie i ornamentalna przesada mające przytłaczać zmysły'},
    images:[WM('1665_Girl_with_a_Pearl_Earring.jpg'), WM('Rembrandt_-_Self-Portrait_at_the_Age_of_34.jpg')],
    imageAlt:'Johannes Vermeer — Girl with a Pearl Earring, 1665', imageCredit:'Vermeer · Girl with a Pearl Earring · 1665 / Rembrandt · Self-Portrait · 1640',
    keyArtists:['Caravaggio','Rembrandt van Rijn','Johannes Vermeer','Peter Paul Rubens','Gian Lorenzo Bernini'],
    philosophy:{en:'Theatricality, movement, and tenebrism used to produce emotional intensity and religious awe — art as drama.',pl:'Teatralność, ruch i tenebryzmizm stosowane do wywoływania emocjonalnego napięcia i religijnego lęku — sztuka jako dramat.'},
    keywords:{en:['Tenebrism','Counter-Reformation','Drama','Chiaroscuro'],pl:['Tenebryzmizm','Kontrreformacja','Dramatyzm','Chiaroscuro']}},
  { id:3, category:{en:'Eras',pl:'Epoki'}, title:{en:'Impressionism',pl:'Impresjonizm'}, period:{en:'c. 1860 – 1886',pl:'ok. 1860 – 1886'},
    hint:{en:'Named mockingly after Monet\'s painting "Impression, Sunrise" by a critic who meant to insult it',pl:'Nazwa pochodzi z kpiny krytyka po obrazie Moneta „Impresja, wschód słońca" — miała być obelgą'},
    images:[WM('Monet_-_Impression,_Sunrise.jpg'), WM('Pierre-Auguste_Renoir_-_Dance_at_Le_moulin_de_la_Galette.jpg'), WM('Claude_Monet_-_Water_Lilies_-_1906,_Ryerson.jpg')],
    imageAlt:'Claude Monet — Impression, Sunrise, 1872', imageCredit:'Monet · Impression, Sunrise · 1872 / Renoir · Moulin de la Galette · 1876 / Monet · Water Lilies · 1906',
    keyArtists:['Claude Monet','Pierre-Auguste Renoir','Edgar Degas','Camille Pissarro','Berthe Morisot'],
    philosophy:{en:'Capture the transient effects of light and atmosphere en plein air with loose brushwork — prioritising momentary sensation over academic polish.',pl:'Uchwycenie ulotnych efektów światła i atmosfery w plenerze swobodnym pociągnięciem pędzla — chwilowe wrażenie ponad akademicką perfekcją.'},
    keywords:{en:['En Plein Air','Broken Brushwork','Light','Everyday Life'],pl:['Plenery','Swobodny pędzel','Światło','Życie codzienne']}},
  { id:4, category:{en:'Eras',pl:'Epoki'}, title:{en:'Romanticism',pl:'Romantyzm'}, period:{en:'c. 1780 – 1850',pl:'ok. 1780 – 1850'},
    hint:{en:'A revolt against Enlightenment reason — wild nature, emotion, and the "sublime" terror of the infinite',pl:'Bunt przeciw rozumowi Oświecenia — dzika natura, emocje i „wzniosły" lęk wobec nieskończoności'},
    images:[WM('Caspar_David_Friedrich_-_Wanderer_above_the_Sea_of_Fog.jpeg'), WM('Eugène_Delacroix_-_La_liberté_guidant_le_peuple.jpg')],
    imageAlt:'Caspar David Friedrich — Wanderer above the Sea of Fog, c. 1818', imageCredit:'C. D. Friedrich · Wanderer · 1818 / Delacroix · Liberty Leading the People · 1830',
    keyArtists:['Caspar David Friedrich','J.M.W. Turner','Eugène Delacroix','Théodore Géricault','Francisco Goya'],
    philosophy:{en:'Privileged emotion, imagination, and the sublime over rationalism. The solitary individual confronting vast, indifferent nature became the defining Romantic image.',pl:'Emocja, wyobraźnia i wzniosłość ponad racjonalizmem. Samotna jednostka wobec rozległej, obojętnej natury stała się ikonicznym obrazem romantyzmu.'},
    keywords:{en:['The Sublime','Emotion','Nature','Individualism'],pl:['Wzniosłość','Emocja','Natura','Indywidualizm']}},
  { id:5, category:{en:'Styles',pl:'Style'}, title:{en:'Surrealism',pl:'Surrealizm'}, period:{en:'Founded 1924',pl:'od 1924'},
    hint:{en:'André Breton\'s Manifesto called for art from the unconscious — dreamlike imagery that defies waking logic',pl:'Manifest André Bretona wzywał do sztuki z nieświadomości — oniryczne obrazy przeczące logice jawy'},
    images:[WM('John_Henry_Fuseli_-_The_Nightmare.JPG'), WM('The_Persistence_of_Memory.jpg')],
    imageAlt:'Henry Fuseli — The Nightmare, 1781', imageCredit:'Fuseli · The Nightmare · 1781 / Dalí · The Persistence of Memory · 1931',
    keyArtists:['Salvador Dalí','René Magritte','Max Ernst','Joan Miró','Frida Kahlo'],
    philosophy:{en:'Liberate the unconscious through automatism and dream imagery. Juxtapose unrelated objects in impossible contexts to create uncanny, thought-provoking dissonance.',pl:'Wyzwolenie nieświadomości przez automatyzm i oniryczne obrazy. Zestawianie niepowiązanych obiektów w niemożliwych kontekstach — niesamowity, prowokujący dysonans.'},
    keywords:{en:['Automatism','The Uncanny','Freudian Dreams','Irrational'],pl:['Automatyzm','Niesamowitość','Sny freudowskie','Irracjonalizm']}},
  { id:6, category:{en:'Styles',pl:'Style'}, title:{en:'Abstract Expressionism',pl:'Ekspresjonizm Abstrakcyjny'}, period:{en:'1940s – 1950s',pl:'lata 40.–50. XX w.'},
    hint:{en:'America\'s first globally dominant art movement — New York overtook Paris as the world\'s art capital',pl:'Pierwszy globalnie dominujący ruch artystyczny Ameryki — Nowy Jork przejął od Paryża palmę pierwszeństwa'},
    images:[WM('Vassily_Kandinsky,_1911_-_Composition_No_4.jpg'), WM('Kandinsky_-_Composition_X.jpg')],
    imageAlt:'Wassily Kandinsky — Composition No. 4, 1911', imageCredit:'Kandinsky · Composition IV · 1911 / Kandinsky · Composition X · 1939',
    keyArtists:['Jackson Pollock','Mark Rothko','Willem de Kooning','Franz Kline','Lee Krasner'],
    philosophy:{en:'Pure emotional expression through gesture, scale, and colour — the act of painting becomes the subject. Split into Action Painting (gestural) and Color Field (meditative).',pl:'Czysta ekspresja emocji przez gest, skalę i kolor — sam akt malowania staje się tematem. Podział na Action Painting (gestyczny) i Color Field (medytacyjny).'},
    keywords:{en:['Action Painting','Color Field','Gesture','New York School'],pl:['Action Painting','Color Field','Gest','Szkoła nowojorska']}},
  { id:7, category:{en:'Styles',pl:'Style'}, title:{en:'Cubism',pl:'Kubizm'}, period:{en:'c. 1907 – 1930s',pl:'ok. 1907 – lata 30.'},
    hint:{en:'Co-invented by Picasso and Braque after being inspired by Cézanne\'s geometric analysis and African masks',pl:'Współtworzony przez Picassa i Braque\'a pod wpływem geometrycznej analizy Cézanne\'a i afrykańskich masek'},
    images:[WM('Juan_Gris_-_Portrait_of_Pablo_Picasso_-_Google_Art_Project.jpg'), WM("Les_Demoiselles_d'Avignon.jpg")],
    imageAlt:'Juan Gris — Portrait of Pablo Picasso, 1912', imageCredit:"Juan Gris · Portrait of Picasso · 1912 / Picasso · Les Demoiselles d'Avignon · 1907",
    keyArtists:['Pablo Picasso','Georges Braque','Juan Gris','Fernand Léger','Robert Delaunay'],
    philosophy:{en:'Shatter the single-viewpoint illusion of the Renaissance by depicting objects from multiple simultaneous perspectives, flattened into fragmented geometric facets.',pl:'Rozbicie renesansowej iluzji jednego punktu widzenia — obiekty z wielu perspektyw jednocześnie, spłaszczone w geometryczne fragmenty.'},
    keywords:{en:['Facets','Multiple Viewpoints','Collage','Analytic & Synthetic'],pl:['Fasety','Wielość perspektyw','Kolaż','Analityczny i syntetyczny']}},
  { id:8, category:{en:'Styles',pl:'Style'}, title:{en:'Art Nouveau',pl:'Secesja'}, period:{en:'c. 1890 – 1910',pl:'ok. 1890 – 1910'},
    hint:{en:'Sinuous lines drawn from nature — flowing hair, plant stems, and peacock feathers translated into architecture and design',pl:'Faliste linie z natury — płynące włosy, łodygi roślin i pawie pióra przetłumaczone na architekturę i design'},
    images:[WM('The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg'), WM('Alphonse_Mucha_-_1895_-_Gismonda.jpg')],
    imageAlt:'Gustav Klimt — The Kiss, 1907–08', imageCredit:'Klimt · The Kiss · 1907–08 · Belvedere, Vienna / Mucha · Gismonda · 1895',
    keyArtists:['Gustav Klimt','Alphonse Mucha','Antoni Gaudí','Hector Guimard','Louis Comfort Tiffany'],
    philosophy:{en:'Unify fine and decorative arts through organic, sinuous forms. Elevate craft, reject industrial mass production, and embrace the total artwork (Gesamtkunstwerk).',pl:'Unifikacja sztuk pięknych i użytkowych przez organiczne, faliste formy natury. Rehabilitacja rzemiosła i idea dzieła totalnego (Gesamtkunstwerk).'},
    keywords:{en:['Organic Form','Total Artwork','Decorative Arts','Symbolism'],pl:['Forma organiczna','Dzieło totalne','Sztuka użytkowa','Symbolizm']}},
  { id:9, category:{en:'Techniques',pl:'Techniki'}, title:{en:'Chiaroscuro',pl:'Chiaroscuro'}, period:{en:'Renaissance onward',pl:'od Renesansu'},
    hint:{en:'Italian: chiaro (light) + scuro (dark) — modelling solid form through gradations of shadow',pl:'Wł.: chiaro (jasny) + scuro (ciemny) — modelowanie bryły przez stopniowanie cienia'},
    images:[WM('Caravaggio_-_Giuditta_e_Oloferne_(ca._1599).jpg'), WM('Rembrandt_-_The_Night_Watch.jpg')],
    imageAlt:'Caravaggio — Judith Beheading Holofernes, c. 1598–99', imageCredit:"Caravaggio · Judith · c. 1598–99 / Rembrandt · The Night Watch · 1642",
    keyArtists:['Caravaggio (tenebrism)','Rembrandt van Rijn','Leonardo da Vinci (sfumato)','Vermeer','Georges de La Tour'],
    philosophy:{en:'Create three-dimensionality and psychological drama through the radical opposition of light and dark. In tenebrism, figures emerge from pitch-black voids lit by a single raking source.',pl:'Trójwymiarowość i dramatyzm psychologiczny przez radykalną opozycję światła i ciemności. W tenebryzmie postaci wyłaniają się z czerni oświetlone jednym bocznym źródłem.'},
    keywords:{en:['Tenebrism','Sfumato','Modelling','Volume'],pl:['Tenebryzmizm','Sfumato','Modelunek','Bryła']}},
  { id:10, category:{en:'Techniques',pl:'Techniki'}, title:{en:'Pointillism',pl:'Pointylizm'}, period:{en:'c. 1886 onward',pl:'od ok. 1886'},
    hint:{en:'Pure-colour dots placed side-by-side — the viewer\'s eye optically mixes them at a distance rather than the palette',pl:'Czyste barwne kropki obok siebie — oko widza miesza je optycznie z odległości, a nie paleta malarska'},
    images:[WM('A_Sunday_on_La_Grande_Jatte,_Georges_Seurat,_1884.jpg'), WM('Paul_Signac_-_Portrait_of_Felix_Feneon.jpg')],
    imageAlt:'Georges Seurat — A Sunday on La Grande Jatte, 1884–86', imageCredit:'Seurat · La Grande Jatte · 1884–86 · Art Institute of Chicago / Signac · Portrait of Fénéon · 1890',
    keyArtists:['Georges Seurat','Paul Signac','Camille Pissarro','Maximilien Luce'],
    philosophy:{en:'Apply unmixed colour in systematic dots (Divisionism), exploiting simultaneous-contrast theory to produce greater luminosity than blended pigments.',pl:'Nakładanie niemieszanego koloru systematycznymi kropkami (dywizjonizm), wykorzystując teorię kontrastu równoczesnego dla większej luminancji niż przy mieszaniu pigmentów.'},
    keywords:{en:['Divisionism','Optical Mixing','Colour Theory','Neo-Impressionism'],pl:['Dywizjonizm','Mieszanie optyczne','Teoria koloru','Neoimpresjonizm']}},
  { id:11, category:{en:'Techniques',pl:'Techniki'}, title:{en:'Fresco',pl:'Fresk'}, period:{en:'Ancient Greece – Renaissance',pl:'Starożytna Grecja – Renesans'},
    hint:{en:'Italian for "fresh" — pigment dissolved in water is applied to still-wet lime plaster and becomes part of the wall',pl:'Wł. „świeży" — pigment w wodzie nakłada się na mokry wapiennik i trwale zespala ze ścianą'},
    images:[WM('Michelangelo_-_Creation_of_Adam_(cropped).jpg'), WM('Raphael_-_The_Transfiguration.jpg')],
    imageAlt:'Michelangelo — The Creation of Adam, Sistine Chapel, 1508–12', imageCredit:'Michelangelo · Creation of Adam · 1508–12 · Sistine Chapel / Raphael · The Transfiguration · 1520',
    keyArtists:['Michelangelo','Raphael','Giotto di Bondone','Masaccio','Diego Rivera'],
    philosophy:{en:'Paint chemically bonded to the wall — permanent and impossible to touch up once dry. Each section (giornata) must be completed in a single day before the plaster sets.',pl:'Farba chemicznie związana ze ścianą — trwała i niemożliwa do poprawienia po wyschnięciu. Każda sekcja (giornata) musi zostać ukończona jednego dnia.'},
    keywords:{en:['Buon Fresco','Giornata','Lime Plaster','Permanent Bond'],pl:['Buon Fresco','Giornata','Wapiennik','Trwałe związanie']}},
  { id:12, category:{en:'Techniques',pl:'Techniki'}, title:{en:'Encaustic',pl:'Enkaustyka'}, period:{en:'Ancient Egypt – Present',pl:'Starożytny Egipt – dziś'},
    hint:{en:'From Greek enkaiein, "to burn in" — hot beeswax mixed with pigment, fused to the surface with heat',pl:'Z gr. enkaiein, „wypalać" — gorący wosk pszczeli z pigmentem, łączony z podłożem za pomocą ciepła'},
    images:[WM('Fayum-34.jpg'), WM('Egyptian_mummy_portrait_of_a_young_woman.jpg')],
    imageAlt:'Fayum Mummy Portrait — encaustic on wood, c. 100–150 AD', imageCredit:'Fayum Mummy Portraits · encaustic on wood · c. 100–150 AD · Roman Egypt',
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
    id:'sci-1', category:{en:'Physics',pl:'Fizyka'},
    title:{en:'Marie Curie',pl:'Maria Curie-Skłodowska'}, period:{en:'1867 – 1934',pl:'1867 – 1934'},
    hint:{en:'First person to win two Nobel Prizes — in Physics (1903) and Chemistry (1911). Born in Warsaw, Poland.',pl:'Pierwsza osoba z dwoma Nagrodami Nobla — z fizyki (1903) i chemii (1911). Urodzona w Warszawie.'},
    images:[WM('Marie_Curie_c1920.jpg'), WM('Pierre_and_Marie_Curie.jpg')],
    imageAlt:'Marie Curie, c. 1920', imageCredit:'Marie Curie · c. 1920 / Pierre & Marie Curie · domena publiczna',
    field:{en:'Radioactivity, Nuclear Chemistry',pl:'Radioaktywność, Chemia Jądrowa'},
    discoveries:{en:'Discovered polonium and radium; coined the term "radioactivity"; first woman to win a Nobel Prize; first person to win in two different sciences. Her research directly contributed to cancer radiotherapy. She died of aplastic anaemia caused by decades of radiation exposure.',pl:'Odkryła polon i rad; ukuła termin „radioaktywność"; pierwsza kobieta z Noblem; pierwsza osoba z nagrodami w dwóch dziedzinach nauki. Jej badania bezpośrednio przyczyniły się do radioterapii nowotworów. Zmarła na anemię aplastyczną spowodowaną dekadami narażenia na promieniowanie.'},
    keywords:{en:['Radioactivity','Polonium','Radium','Nobel Prize'],pl:['Radioaktywność','Polon','Rad','Nagroda Nobla']}
  },
  {
    id:'sci-2', category:{en:'Physics',pl:'Fizyka'},
    title:{en:'Albert Einstein',pl:'Albert Einstein'}, period:{en:'1879 – 1955',pl:'1879 – 1955'},
    hint:{en:'His 1905 "miracle year" produced four papers that each individually transformed physics — and he was working as a patent clerk at the time.',pl:'W swoim „cudownym roku" 1905 opublikował cztery artykuły, z których każdy odmienił fizykę — pracował wtedy jako urzędnik patentowy.'},
    images:[WM('Einstein_1921_by_F_Schmutzer_-_restoration.jpg'), WM('Einstein_blackboard_1931.jpg')],
    imageAlt:'Albert Einstein, 1921', imageCredit:'Albert Einstein · 1921 · F. Schmutzer · domena publiczna',
    field:{en:'Theoretical Physics',pl:'Fizyka Teoretyczna'},
    discoveries:{en:'Special Relativity (1905): time slows and mass increases at high velocities; E=mc² shows mass and energy are equivalent. General Relativity (1915): gravity is the curvature of spacetime. Predicted black holes, gravitational waves (confirmed 2015), and gravitational lensing. Nobel Prize 1921 for the photoelectric effect, not relativity.',pl:'Szczególna teoria względności (1905): czas zwalnia, masa rośnie przy dużych prędkościach; E=mc² — masa i energia są równoważne. Ogólna teoria względności (1915): grawitacja to krzywizna czasoprzestrzeni. Przewidział czarne dziury, fale grawitacyjne (potwierdzone 2015) i soczewkowanie grawitacyjne. Nobel 1921 za efekt fotoelektryczny, nie za względność.'},
    keywords:{en:['Relativity','E=mc²','Spacetime','Photoelectric Effect'],pl:['Względność','E=mc²','Czasoprzestrzeń','Efekt fotoelektryczny']}
  },
  {
    id:'sci-3', category:{en:'Biology',pl:'Biologia'},
    title:{en:'Charles Darwin',pl:'Karol Darwin'}, period:{en:'1809 – 1882',pl:'1809 – 1882'},
    hint:{en:'His five-year voyage on HMS Beagle and specimens from the Galápagos changed our understanding of life on Earth.',pl:'Pięcioletnia podróż na HMS Beagle i okazy z Galapagos zmieniły nasze rozumienie życia na Ziemi.'},
    images:[WM('Charles_Darwin_by_Julia_Margaret_Cameron,_1868.jpg'), WM("Darwin's_finches_by_Gould.jpg")],
    imageAlt:'Charles Darwin, 1868', imageCredit:"Darwin · 1868 · Julia Margaret Cameron / Darwin's Finches · J. Gould · 1845",
    field:{en:'Evolutionary Biology, Natural History',pl:'Biologia Ewolucyjna, Historia Naturalna'},
    discoveries:{en:'"On the Origin of Species" (1859): natural selection drives evolution — organisms with beneficial traits survive and reproduce more. All life on Earth shares a common ancestor. Darwin also explained sexual selection and studied coral reefs, barnacles, and the formation of soil by earthworms.',pl:'„O powstawaniu gatunków" (1859): dobór naturalny napędza ewolucję — organizmy z korzystnymi cechami przeżywają i rozmnażają się częściej. Całe życie na Ziemi ma wspólnego przodka. Darwin badał też dobór płciowy, rafy koralowe i tworzenie gleby przez dżdżownice.'},
    keywords:{en:['Natural Selection','Evolution','Adaptation','Galapagos'],pl:['Dobór naturalny','Ewolucja','Adaptacja','Galapagos']}
  },
  {
    id:'sci-4', category:{en:'Physics',pl:'Fizyka'},
    title:{en:'Isaac Newton',pl:'Izaak Newton'}, period:{en:'1643 – 1727',pl:'1643 – 1727'},
    hint:{en:'Developed calculus independently from Leibniz and wrote his three laws of motion during a plague lockdown in 1666.',pl:'Opracował rachunek różniczkowy niezależnie od Leibniza i sformułował trzy prawa ruchu podczas lockdownu dżumowego w 1666 roku.'},
    images:[WM('GodfreyKneller-IsaacNewton-1689.jpg'), WM('NewtonsPrincipia.jpg')],
    imageAlt:'Isaac Newton, 1689, by Godfrey Kneller', imageCredit:"Newton · 1689 · Godfrey Kneller / Newton's Principia · 1687",
    field:{en:'Classical Mechanics, Optics, Mathematics',pl:'Mechanika Klasyczna, Optyka, Matematyka'},
    discoveries:{en:'Three Laws of Motion (inertia, F=ma, action-reaction); Universal Law of Gravitation: F=Gm₁m₂/r². Mathematica Principia Naturalis (1687) unified terrestrial and celestial mechanics — the same gravity that pulls apples also governs planetary orbits. Developed calculus, decomposed white light into a spectrum.',pl:'Trzy prawa ruchu (bezwładność, F=ma, akcja-reakcja); powszechne prawo grawitacji: F=Gm₁m₂/r². Principia (1687) zunifikowały mechanikę ziemską i niebieską — ta sama grawitacja przyciąga jabłka i rządzi orbitami planet. Rozwinął rachunek różniczkowy, rozkład białego światła na widmo.'},
    keywords:{en:['Gravity','Laws of Motion','Calculus','Principia'],pl:['Grawitacja','Prawa ruchu','Rachunek różniczkowy','Principia']}
  },
  {
    id:'sci-5', category:{en:'Astronomy',pl:'Astronomia'},
    title:{en:'Nicolaus Copernicus',pl:'Mikołaj Kopernik'}, period:{en:'1473 – 1543',pl:'1473 – 1543'},
    hint:{en:'A Polish canon who quietly revolutionised astronomy — he delayed publishing his heliocentric model for decades, fearing the Church\'s reaction.',pl:'Polski kanonik, który po cichu zrewolucjonizował astronomię — przez dekady zwlekał z publikacją modelu heliocentrycznego, obawiając się reakcji Kościoła.'},
    images:[WM('Nikolaus_Kopernikus.jpg'), WM('Copernican_heliocentrism_diagram-2.jpg')],
    imageAlt:'Mikołaj Kopernik, portret ok. 1530', imageCredit:'Kopernik · ok. 1530 / Diagram heliocentryczny · domena publiczna',
    field:{en:'Astronomy, Mathematics',pl:'Astronomia, Matematyka'},
    discoveries:{en:'"De revolutionibus orbium coelestium" (1543): Sun — not Earth — is at the centre of the solar system. Earth completes one orbit per year and rotates daily. This "Copernican Revolution" overturned 1,400 years of Ptolemaic geocentrism and laid the foundation for Galileo, Kepler, and Newton.',pl:'„De revolutionibus orbium coelestium" (1543): Słońce — nie Ziemia — jest centrum układu słonecznego. Ziemia okrąża Słońce raz do roku i obraca się wokół własnej osi każdego dnia. Rewolucja kopernikańska obaliła 1400 lat geocentryzmu Ptolemeusza i dała podstawy Galileuszowi, Keplerowi i Newtonowi.'},
    keywords:{en:['Heliocentrism','Solar System','Copernican Revolution','De Revolutionibus'],pl:['Heliocentryzm','Układ słoneczny','Rewolucja kopernikańska','De Revolutionibus']}
  },
  {
    id:'sci-6', category:{en:'Mathematics',pl:'Matematyka'},
    title:{en:'Leonhard Euler',pl:'Leonhard Euler'}, period:{en:'1707 – 1783',pl:'1707 – 1783'},
    hint:{en:'Produced mathematical papers even after going completely blind — he dictated them from memory, averaging one paper per week.',pl:'Tworzył prace matematyczne nawet po całkowitej utracie wzroku — dyktował je z pamięci, średnio jedną tygodniowo.'},
    images:[WM('Leonhard_Euler_-_edit1.jpg')],
    imageAlt:'Leonhard Euler, portret ok. 1753', imageCredit:'Leonhard Euler · ok. 1753 · domena publiczna',
    field:{en:'Mathematics, Physics, Astronomy',pl:'Matematyka, Fizyka, Astronomia'},
    discoveries:{en:"Euler's Identity: e^(iπ) + 1 = 0 — considered the most beautiful equation in mathematics, linking five fundamental constants. Founded graph theory (Königsberg Bridge Problem, 1736). Introduced standard notation: f(x), Σ, i (imaginary unit), e (Euler's number), π. Author of ~92 volumes — the most prolific mathematician in history.",pl:'Wzór Eulera: e^(iπ) + 1 = 0 — uznawany za najpiękniejsze równanie w matematyce, łączące pięć fundamentalnych stałych. Założyciel teorii grafów (problem mostów królewieckich, 1736). Wprowadził standardowe notacje: f(x), Σ, i (jednostka urojona), e, π. Autor ok. 92 tomów — najplodniejszy matematyk w historii.'},
    keywords:{en:["Euler's Identity",'Graph Theory','Number Theory','e^iπ+1=0'],pl:['Wzór Eulera','Teoria grafów','Teoria liczb','e^iπ+1=0']}
  },
  {
    id:'sci-7', category:{en:'Chemistry',pl:'Chemia'},
    title:{en:'Dmitri Mendeleev',pl:'Dmitrij Mendelejew'}, period:{en:'1834 – 1907',pl:'1834 – 1907'},
    hint:{en:'He organised the Periodic Table while writing a chemistry textbook — and predicted the properties of undiscovered elements with remarkable accuracy.',pl:'Stworzył układ okresowy, pisząc podręcznik chemii — i z niezwykłą dokładnością przewidział właściwości jeszcze nieodkrytych pierwiastków.'},
    images:[WM('Mendeleev_by_repin.jpg'), WM("Mendeleev's_1871_periodic_table.png")],
    imageAlt:'Dmitri Mendeleev, portret Ilji Repina, 1885', imageCredit:'Mendelejew · 1885 · Ilja Repin / Układ okresowy Mendelejewa · 1871',
    field:{en:'Chemistry',pl:'Chemia'},
    discoveries:{en:'Periodic Table of Elements (1869): organised 63 known elements by atomic weight and valence. Left deliberate gaps for undiscovered elements and predicted their properties. Gallium (1875), scandium (1879), and germanium (1886) were later found matching his predictions almost exactly.',pl:'Układ okresowy pierwiastków (1869): uporządkował 63 znane pierwiastki według masy atomowej i wartościowości. Pozostawił celowe luki dla nieodkrytych pierwiastków i przewidział ich właściwości. Gal (1875), skandium (1879) i german (1886) odkryto niemal dokładnie zgodnie z jego przewidywaniami.'},
    keywords:{en:['Periodic Table','Elements','Atomic Weight','Prediction'],pl:['Układ okresowy','Pierwiastki','Masa atomowa','Przepowiednia']}
  },
  {
    id:'sci-8', category:{en:'Biology',pl:'Biologia'},
    title:{en:'Gregor Mendel',pl:'Gregor Mendel'}, period:{en:'1822 – 1884',pl:'1822 – 1884'},
    hint:{en:'An Augustinian friar who discovered the laws of inheritance by crossbreeding 29,000 pea plants — his work was ignored for 35 years.',pl:'Augustiański zakonnik, który odkrył prawa dziedziczenia, krzyżując 29 000 roślin grochu — jego praca była ignorowana przez 35 lat.'},
    images:[WM('Gregor_Mendel_2.jpg'), WM('Mendel_peas.jpg')],
    imageAlt:'Gregor Mendel, ok. 1880', imageCredit:'Gregor Mendel · ok. 1880 / Ilustracja grochu · domena publiczna',
    field:{en:'Genetics, Botany',pl:'Genetyka, Botanika'},
    discoveries:{en:'Laws of Segregation and Independent Assortment (1866): each organism inherits two versions of each trait (one from each parent); traits are passed independently. Discovered dominant and recessive traits. His work was rediscovered in 1900 and became the foundation of genetics — later unified with Darwin\'s evolution in the Modern Synthesis.',pl:'Prawa segregacji i niezależnego rozdziału (1866): każdy organizm dziedziczy dwie wersje każdej cechy (po jednej od każdego rodzica); cechy przekazywane są niezależnie. Odkrył cechy dominujące i recesywne. Jego praca odkryta na nowo w 1900 roku stała się fundamentem genetyki — zjednoczonej z ewolucją Darwina w Nowoczesnej Syntezie.'},
    keywords:{en:['Genetics','Heredity','Dominant & Recessive','Pea Plants'],pl:['Genetyka','Dziedziczność','Dominujące i recesywne','Rośliny grochu']}
  },
  {
    id:'sci-9', category:{en:'Physics',pl:'Fizyka'},
    title:{en:'Nikola Tesla',pl:'Nikola Tesla'}, period:{en:'1856 – 1943',pl:'1856 – 1943'},
    hint:{en:'Held over 300 patents and in 1900 envisioned wireless global communication — over a century before Wi-Fi became reality.',pl:'Posiadał ponad 300 patentów i w 1900 roku wyobraził sobie bezprzewodową komunikację globalną — na ponad wiek przed Wi-Fi.'},
    images:[WM('N.Tesla.JPG'), WM('Tesla_colorado.jpg')],
    imageAlt:'Nikola Tesla, ok. 1890', imageCredit:'Nikola Tesla · ok. 1890 / Tesla w laboratorium Colorado Springs · 1899',
    field:{en:'Electrical Engineering, Physics',pl:'Inżynieria Elektryczna, Fizyka'},
    discoveries:{en:'Alternating current (AC) system — won the "War of Currents" against Edison\'s DC; AC powers the world today. Invented the induction motor, the Tesla coil, and polyphase power distribution. Pioneered radio (Marconi used his patents). Built Wardenclyffe Tower to transmit power wirelessly — the project was defunded by J.P. Morgan.',pl:'System prądu przemiennego (AC) — wygrał „wojnę prądów" z Edisonem; AC zasila świat do dziś. Wynalazł silnik indukcyjny, cewkę Tesli i wielofazowy system zasilania. Był pionierem radia (Marconi korzystał z jego patentów). Zbudował wieżę Wardenclyffe do bezprzewodowego przesyłu energii — projekt wycofał J.P. Morgan.'},
    keywords:{en:['Alternating Current','Induction Motor','Tesla Coil','Wireless Power'],pl:['Prąd przemienny','Silnik indukcyjny','Cewka Tesli','Energia bezprzewodowa']}
  },
  {
    id:'sci-10', category:{en:'Computer Science',pl:'Informatyka'},
    title:{en:'Ada Lovelace',pl:'Ada Lovelace'}, period:{en:'1815 – 1852',pl:'1815 – 1852'},
    hint:{en:'Daughter of Lord Byron, she wrote the world\'s first computer algorithm — for a machine that was never built in her lifetime.',pl:'Córka Lorda Byrona — napisała pierwszy na świecie algorytm komputerowy dla maszyny, która nie powstała za jej życia.'},
    images:[WM('Ada_Lovelace_portrait.jpg'), WM('Analytical_engine_Babbage_London.jpg')],
    imageAlt:'Ada Lovelace, ok. 1840', imageCredit:'Ada Lovelace · ok. 1840 / Maszyna Analityczna Babbage\'a · Science Museum London',
    field:{en:'Mathematics, Computer Science',pl:'Matematyka, Informatyka'},
    discoveries:{en:"Wrote Algorithm #1 for Babbage's Analytical Engine (1843) — to calculate Bernoulli numbers. Crucially, she foresaw that the Engine could go beyond mere calculation to compose music or process any symbolic data — a vision of general-purpose computing 100 years before the digital age. The programming language Ada (1980) is named in her honour.",pl:'Napisała Algorytm nr 1 dla Maszyny Analitycznej Babbage\'a (1843) — obliczenie liczb Bernoulliego. Co kluczowe, przewidziała, że Maszyna może wyjść poza obliczenia i komponować muzykę lub przetwarzać dowolne dane symboliczne — wizja komputera ogólnego przeznaczenia 100 lat przed erą cyfrową. Język programowania Ada (1980) nosi jej imię.'},
    keywords:{en:['First Algorithm','Analytical Engine','General Computing','Ada Language'],pl:['Pierwszy algorytm','Maszyna analityczna','Komputery ogólne','Język Ada']}
  },
  {
    id:'sci-11', category:{en:'Universe',pl:'Wszechświat'},
    title:{en:'The Big Bang',pl:'Wielki Wybuch'}, period:{en:'13.8 billion years ago',pl:'13,8 mld lat temu'},
    hint:{en:'The universe did not begin as an explosion in space — space itself expanded from an incredibly hot, dense state about 13.8 billion years ago.',pl:'Wszechświat nie zaczął się jako eksplozja w przestrzeni — sama przestrzeń rozszerzyła się z niezwykle gorącego, gęstego stanu ok. 13,8 mld lat temu.'},
    images:[WM('Ilc_9yr_moll4096.png'), WM('CMB_Timeline300_no_WMAP.jpg')],
    imageAlt:'WMAP — Cosmic Microwave Background radiation map', imageCredit:'WMAP · CMB All-Sky Map · NASA/WMAP Science Team · 2012',
    field:{en:'Cosmology, Astrophysics',pl:'Kosmologia, Astrofizyka'},
    discoveries:{en:'Georges Lemaître (1927) proposed the universe expanded from a "primeval atom." Hubble (1929) confirmed galaxies are receding. The Cosmic Microwave Background (CMB) — discovered by Penzias & Wilson in 1965 (Nobel 1978) — is heat leftover from 380,000 years after the Big Bang. The Planck satellite (2013) measured the universe\'s age at 13.8 billion years with 0.3% precision.',pl:'Georges Lemaître (1927) zaproponował, że wszechświat rozszerzył się z „pierwotnego atomu". Hubble (1929) potwierdził ucieczkę galaktyk. Kosmiczne Mikrofalowe Tło (CMB) — odkryte przez Penziasa i Wilsona w 1965 (Nobel 1978) — to ciepło pozostałe z 380 000 lat po Wielkim Wybuchu. Satelita Planck (2013) zmierzył wiek wszechświata na 13,8 mld lat z dokładnością 0,3%.'},
    keywords:{en:['CMB','Inflation','Cosmic Expansion','Lemaître'],pl:['CMB','Inflacja','Rozszerzanie kosmosu','Lemaître']}
  },
  {
    id:'sci-12', category:{en:'Universe',pl:'Wszechświat'},
    title:{en:'Black Holes',pl:'Czarne Dziury'}, period:{en:'Predicted 1916 · Imaged 2019',pl:'Przepowiedziane 1916 · Sfotografowane 2019'},
    hint:{en:'So massive that not even light can escape — yet in 2019 a telescope the size of Earth captured the first image of one.',pl:'Tak masywne, że nawet światło nie może uciec — jednak w 2019 roku teleskop wielkości Ziemi uchwycił pierwsze zdjęcie czarnej dziury.'},
    images:[WM('Messier_87_black_hole_EHT_image.jpg'), WM('Black_Hole_Milky_Way.jpg')],
    imageAlt:'M87* — first image of a black hole, Event Horizon Telescope, 2019', imageCredit:'M87* · Event Horizon Telescope Collaboration · 2019 / Sgr A* · EHT · 2022',
    field:{en:'Astrophysics, General Relativity',pl:'Astrofizyka, Ogólna Teoria Względności'},
    discoveries:{en:'Karl Schwarzschild (1916) derived the first exact solution to Einstein\'s equations, predicting a gravitational singularity. Stephen Hawking (1974) showed black holes emit thermal radiation (Hawking radiation) and eventually evaporate. The Event Horizon Telescope (2019) imaged M87* — a black hole of 6.5 billion solar masses, 55 million light-years away. In 2022, EHT imaged Sagittarius A*, the 4-million-solar-mass black hole at our galaxy\'s centre.',pl:'Karl Schwarzschild (1916) wyprowadził pierwsze dokładne rozwiązanie równań Einsteina, przewidując osobliwość grawitacyjną. Stephen Hawking (1974) wykazał, że czarne dziury emitują promieniowanie termiczne (promieniowanie Hawkinga) i stopniowo odparowują. Teleskop EHT (2019) sfotografował M87* — czarną dziurę o masie 6,5 mld Słońc, 55 mln lat świetlnych stąd. W 2022 EHT sfotografował Sgr A*, czarną dziurę o masie 4 mln Słońc w centrum naszej galaktyki.'},
    keywords:{en:['Event Horizon','Hawking Radiation','EHT','Singularity'],pl:['Horyzont zdarzeń','Promieniowanie Hawkinga','EHT','Osobliwość']}
  },
  {
    id:'sci-13', category:{en:'Universe',pl:'Wszechświat'},
    title:{en:'The Expanding Universe',pl:'Rozszerzający się Wszechświat'}, period:{en:'1929 – present',pl:'1929 – dziś'},
    hint:{en:'Edwin Hubble proved galaxies are flying apart in all directions — the universe has no centre and no edge, only expansion.',pl:'Edwin Hubble dowiódł, że galaktyki odlatują we wszystkich kierunkach — wszechświat nie ma centrum ani krawędzi, tylko rozszerzanie.'},
    images:[WM('Hubble_ultra_deep_field.jpg'), WM('Edwin_Hubble.jpg')],
    imageAlt:'Hubble Ultra Deep Field — ~10,000 galaxies in a tiny patch of sky', imageCredit:'Hubble Ultra Deep Field · NASA/ESA · 2004 / Edwin Hubble · domena publiczna',
    field:{en:'Cosmology, Observational Astronomy',pl:'Kosmologia, Astronomia Obserwacyjna'},
    discoveries:{en:"Hubble's Law (1929): galaxy recession velocity ∝ distance (v = H₀·d). The Hubble constant H₀ ≈ 70 km/s/Mpc. Saul Perlmutter, Brian Schmidt & Adam Riess (Nobel 2011) discovered the expansion is accelerating — driven by dark energy, which makes up ~68% of the universe. The Hubble Ultra Deep Field (2004) revealed ~10,000 galaxies in a patch of sky smaller than 1/10 the Moon's diameter.",pl:'Prawo Hubble\'a (1929): prędkość ucieczki galaktyki ∝ odległość (v = H₀·d). Stała Hubble\'a H₀ ≈ 70 km/s/Mpc. Perlmutter, Schmidt i Riess (Nobel 2011) odkryli, że rozszerzanie przyspiesza — napędza je ciemna energia (~68% wszechświata). Hubble Ultra Deep Field (2004) ujawnił ~10 000 galaktyk w wycinku nieba mniejszym niż 1/10 tarczy Księżyca.'},
    keywords:{en:["Hubble's Law",'Dark Energy','Redshift','Hubble Deep Field'],pl:['Prawo Hubble\'a','Ciemna energia','Przesunięcie ku czerwieni','Hubble Deep Field']}
  },
  {
    id:'sci-14', category:{en:'Universe',pl:'Wszechświat'},
    title:{en:'Gravitational Waves',pl:'Fale Grawitacyjne'}, period:{en:'Predicted 1916 · Detected 2015',pl:'Przepowiedziane 1916 · Wykryte 2015'},
    hint:{en:'Einstein predicted ripples in spacetime in 1916. It took 100 years and a detector sensitive to 1/1000th the width of a proton to prove him right.',pl:'Einstein przewidział fale grawitacyjne w 1916 roku. Minęło 100 lat i trzeba było detektora czułego na 1/1000 szerokości protonu, by go potwierdzić.'},
    images:[WM('LIGO_Hanford_aerial_05.jpg'), WM('GW150914_discovery_signals.png')],
    imageAlt:'LIGO Hanford Observatory — detector for gravitational waves', imageCredit:'LIGO Hanford Observatory · aerial view · Caltech/MIT/LIGO Lab',
    field:{en:'Astrophysics, Gravitational Physics',pl:'Astrofizyka, Fizyka Grawitacyjna'},
    discoveries:{en:'LIGO (Laser Interferometer Gravitational-Wave Observatory) detected GW150914 on 14 September 2015 — a chirp lasting 0.2 seconds from two black holes of 29 and 36 solar masses merging 1.3 billion light-years away. The signal was 1/1000th the diameter of a proton. Nobel Prize 2017 (Rainer Weiss, Barry Barish, Kip Thorne). LIGO/Virgo have since detected neutron star mergers, confirming the origin of heavy elements like gold.',pl:'LIGO wykryło GW150914 14 września 2015 — ćwierkanie trwające 0,2 s od zlania dwóch czarnych dziur (29 i 36 mas Słońca) 1,3 mld lat świetlnych stąd. Sygnał odpowiadał przemieszczeniu 1/1000 średnicy protonu. Nobel 2017 (Rainer Weiss, Barry Barish, Kip Thorne). LIGO/Virgo wykryły też zderzenia gwiazd neutronowych, potwierdzając pochodzenie ciężkich pierwiastków jak złoto.'},
    keywords:{en:['LIGO','Spacetime Ripples','Black Hole Merger','Nobel 2017'],pl:['LIGO','Fale w czasoprzestrzeni','Zlanie czarnych dziur','Nobel 2017']}
  },
  {
    id:'sci-15', category:{en:'Universe',pl:'Wszechświat'},
    title:{en:'Dark Matter & Dark Energy',pl:'Ciemna Materia i Ciemna Energia'}, period:{en:'Hypothesised 1933 · Confirmed 1990s',pl:'Hipoteza 1933 · Potwierdzone lata 90.'},
    hint:{en:'96% of the universe is invisible — 27% is dark matter (detectable only by gravity) and 68% is dark energy causing accelerating expansion.',pl:'96% wszechświata jest niewidoczne — 27% to ciemna materia (wykrywalna tylko grawitacyjnie) i 68% to ciemna energia powodująca przyspieszające rozszerzanie.'},
    images:[WM('Bullet_cluster_optical_full.jpg'), WM('DarkMatterPie.jpg')],
    imageAlt:'Bullet Cluster — evidence for dark matter via gravitational lensing', imageCredit:'Bullet Cluster · NASA/CXC/CfA · X-ray + optical composite',
    field:{en:'Cosmology, Particle Physics',pl:'Kosmologia, Fizyka Cząstek'},
    discoveries:{en:'Fritz Zwicky (1933) found galaxies in the Coma Cluster moved too fast to be held by visible matter — coined "dark matter." Vera Rubin (1970s) confirmed: galaxy rotation curves don\'t match visible mass — dark matter forms invisible halos around galaxies. The Bullet Cluster (2006) provides direct evidence: dark matter passed through a galaxy collision unimpeded while hot gas slowed. Dark energy (discovered 1998) accelerates cosmic expansion and remains the greatest mystery in physics.',pl:'Fritz Zwicky (1933) odkrył, że galaktyki w gromadzie Coma poruszają się za szybko, by utrzymywała je widzialna materia — ukuł termin „ciemna materia". Vera Rubin (lata 70.) potwierdziła: krzywe rotacji galaktyk nie pasują do widzialnej masy. Gromada Pocisk (2006) daje bezpośredni dowód. Ciemna energia (odkryta 1998) przyspiesza rozszerzanie kosmosu i pozostaje największą zagadką fizyki.'},
    keywords:{en:['Dark Matter','Dark Energy','Vera Rubin','Bullet Cluster'],pl:['Ciemna materia','Ciemna energia','Vera Rubin','Gromada Pocisk']}
  },
  {
    id:'sci-16', category:{en:'Biology',pl:'Biologia'},
    title:{en:'DNA Double Helix',pl:'Podwójna Helisa DNA'}, period:{en:'Structure solved 1953',pl:'Struktura ustalona 1953'},
    hint:{en:'The molecule of life — its structure was solved in 1953 using X-ray crystallography data taken by a scientist who received no Nobel Prize.',pl:'Cząsteczka życia — jej strukturę ustalono w 1953 roku przy użyciu danych krystalograficznych wykonanych przez naukowca, który nie otrzymał Nagrody Nobla.'},
    images:[WM('Photo_51_x-ray_diffraction_image.jpg'), WM('DNA_simple2.svg')],
    imageAlt:'Photo 51 — Rosalind Franklin\'s X-ray diffraction image of DNA, 1952', imageCredit:"Photo 51 · Rosalind Franklin · 1952 / DNA structure diagram · domena publiczna",
    field:{en:'Molecular Biology, Biochemistry',pl:'Biologia Molekularna, Biochemia'},
    discoveries:{en:'Watson & Crick (1953) deduced the double helix structure of DNA using Rosalind Franklin\'s Photo 51 — without her knowledge. DNA: two strands of nucleotides wound in a helix, paired by complementary bases (A-T, G-C). The sequence of ~3 billion base pairs encodes all instructions for a human being. Watson, Crick & Wilkins won the Nobel Prize in 1962; Franklin had died of cancer in 1958 at age 37.',pl:'Watson i Crick (1953) ustalili strukturę podwójnej helisy DNA, korzystając z Zdjęcia 51 Rosalind Franklin — bez jej wiedzy. DNA: dwa łańcuchy nukleotydów skręcone w helisę, łączone przez komplementarne zasady (A-T, G-C). Sekwencja ~3 mld par zasad koduje wszystkie instrukcje człowieka. Watson, Crick i Wilkins dostali Nobla w 1962; Franklin zmarła na raka w 1958 w wieku 37 lat.'},
    keywords:{en:['Double Helix','Base Pairs','Photo 51','Rosalind Franklin'],pl:['Podwójna helisa','Pary zasad','Zdjęcie 51','Rosalind Franklin']}
  },
  {
    id:'sci-17', category:{en:'Physics',pl:'Fizyka'},
    title:{en:'Quantum Mechanics',pl:'Mechanika Kwantowa'}, period:{en:'1900 – 1930s',pl:'1900 – lata 30.'},
    hint:{en:'At the atomic scale, particles exist in multiple states simultaneously until measured — and the act of measuring changes the result.',pl:'W skali atomowej cząstki istnieją jednocześnie w wielu stanach, dopóki nie zostaną zmierzone — a sam akt pomiaru zmienia wynik.'},
    images:[WM('Niels_Bohr.jpg'), WM('Schrodinger_cat.png')],
    imageAlt:'Niels Bohr, physicist, founder of quantum mechanics framework', imageCredit:"Niels Bohr / Schrödinger's Cat — gedankenexperiment",
    field:{en:'Theoretical Physics, Quantum Physics',pl:'Fizyka Teoretyczna, Fizyka Kwantowa'},
    discoveries:{en:"Max Planck (1900): energy is quantised — E=hν. Einstein (1905): light comes in packets (photons). Bohr (1913): electrons occupy discrete energy levels. Heisenberg's Uncertainty Principle (1927): Δx·Δp ≥ ℏ/2 — position and momentum cannot both be known precisely. Schrödinger's equation describes how quantum states evolve. Entanglement: two particles can remain correlated across any distance — Einstein called it 'spooky action at a distance.' QM underlies all modern electronics, lasers, and MRI.",pl:'Planck (1900): energia jest skwantowana — E=hν. Einstein (1905): światło to fotony. Bohr (1913): elektrony zajmują dyskretne poziomy energetyczne. Zasada nieoznaczoności Heisenberga (1927): Δx·Δp ≥ ℏ/2 — położenia i pędu nie można znać jednocześnie z dowolną dokładnością. Równanie Schrödingera opisuje ewolucję stanów kwantowych. Splątanie: dwie cząstki mogą być skorelowane przez dowolną odległość. Mechanika kwantowa leży u podstaw całej elektroniki, laserów i rezonansu magnetycznego.'},
    keywords:{en:['Superposition','Uncertainty Principle','Wave-Particle Duality','Entanglement'],pl:['Superpozycja','Zasada nieoznaczoności','Dualizm falowo-cząstkowy','Splątanie']}
  },
  {
    id:'sci-18', category:{en:'Earth Science',pl:'Nauki o Ziemi'},
    title:{en:'Plate Tectonics',pl:'Tektonika Płyt'}, period:{en:'Hypothesis 1912 · Confirmed 1960s',pl:'Hipoteza 1912 · Potwierdzone lata 60.'},
    hint:{en:'The continents were once one supercontinent — Pangaea — and they are still moving today at the speed your fingernails grow.',pl:'Kontynenty były kiedyś jednym superkontyntentem — Pangea — i nadal się poruszają z prędkością wzrostu paznokci.'},
    images:[WM('Pangaea_continents.svg'), WM('Alfred_Wegener.jpg')],
    imageAlt:'Pangaea — supercontinent 250 million years ago', imageCredit:'Pangaea reconstruction / Alfred Wegener · domena publiczna',
    field:{en:'Geology, Earth Science',pl:'Geologia, Nauki o Ziemi'},
    discoveries:{en:'Alfred Wegener (1912) proposed continental drift — ridiculed by geologists for 50 years. Seafloor spreading (Harry Hess, 1960) and magnetic stripes on the ocean floor confirmed the theory. Earth\'s lithosphere is divided into ~15 major plates moving 2–15 cm/year. Plate collisions create mountain ranges (Himalayas), ocean trenches (Mariana), and trigger 90% of earthquakes. The theory also explains why identical fossils appear on separate continents.',pl:'Alfred Wegener (1912) zaproponował dryfowanie kontynentów — wyśmiewano go przez 50 lat. Rozchylanie się dna oceanicznego (Harry Hess, 1960) i magnetyczne pasy na dnie oceanów potwierdziły teorię. Litosfera Ziemi dzieli się na ~15 głównych płyt poruszających się 2–15 cm rocznie. Kolizje płyt tworzą góry (Himalaje), rowy oceaniczne (Mariana) i wywołują 90% trzęsień ziemi.'},
    keywords:{en:['Continental Drift','Pangaea','Seafloor Spreading','Wegener'],pl:['Dryf kontynentalny','Pangea','Rozchylanie dna','Wegener']}
  },
  {
    id:'sci-19', category:{en:'Universe',pl:'Wszechświat'},
    title:{en:'The Standard Model',pl:'Model Standardowy'}, period:{en:'Developed 1970s · Completed 2012',pl:'Opracowany lata 70. · Ukończony 2012'},
    hint:{en:'The most precisely tested theory in science — it describes all known fundamental particles and three of the four forces, accurate to one part in ten billion.',pl:'Najdokładniej przetestowana teoria w nauce — opisuje wszystkie znane cząstki fundamentalne i trzy z czterech sił, z dokładnością do jednej na dziesięć miliardów.'},
    images:[WM('Standard_Model_of_Elementary_Particles.svg'), WM('CMS_Higgs-event.jpg')],
    imageAlt:'Standard Model of Elementary Particles diagram', imageCredit:'Standard Model diagram / CMS Higgs boson event · CERN · 2012',
    field:{en:'Particle Physics, Quantum Field Theory',pl:'Fizyka Cząstek, Kwantowa Teoria Pola'},
    discoveries:{en:"The Standard Model classifies 17 fundamental particles: 6 quarks, 6 leptons, 4 force-carrying bosons, and the Higgs boson. Quarks combine into protons and neutrons; electrons orbit nuclei. The model describes electromagnetism, the weak force (radioactive decay), and the strong force (holding nuclei together). The Higgs boson — 'God particle' — was discovered at CERN's LHC on 4 July 2012 (Nobel 2013). Gravity is not yet included.",pl:'Model Standardowy klasyfikuje 17 cząstek fundamentalnych: 6 kwarków, 6 leptonów, 4 bozony sił i bozon Higgsa. Kwarki tworzą protony i neutrony; elektrony krążą wokół jąder. Model opisuje elektromagnetyzm, oddziaływanie słabe (rozpad promieniotwórczy) i silne (spójność jąder). Bozon Higgsa — „cząstka Boga" — odkryty w CERN 4 lipca 2012 (Nobel 2013). Grawitacja nie jest jeszcze uwzględniona.'},
    keywords:{en:['Quarks','Higgs Boson','CERN LHC','Fundamental Forces'],pl:['Kwarki','Bozon Higgsa','CERN LHC','Siły fundamentalne']}
  },
  {
    id:'sci-20', category:{en:'Computer Science',pl:'Informatyka'},
    title:{en:'Alan Turing',pl:'Alan Turing'}, period:{en:'1912 – 1954',pl:'1912 – 1954'},
    hint:{en:'Invented the theoretical basis of all modern computing — and in WWII broke the Nazi Enigma cipher, a feat kept secret for 50 years.',pl:'Wymyślił teoretyczne podstawy całego nowoczesnego komputerstwa — i podczas II WŚ złamał szyfr Enigmy, czego przez 50 lat nie ujawniano.'},
    images:[WM('Alan_Turing_Aged_16.jpg'), WM('Bombe-rebuild.jpg')],
    imageAlt:'Alan Turing, aged 16', imageCredit:"Alan Turing · ok. 1928 / Odbudowa bomby kryptoanalitycznej · Bletchley Park",
    field:{en:'Mathematics, Computer Science, Cryptography',pl:'Matematyka, Informatyka, Kryptografia'},
    discoveries:{en:'Turing Machine (1936): a theoretical model of computation that defines what any algorithm can or cannot compute — the foundation of computer science. Broke the Nazi Enigma cipher at Bletchley Park (1940), credited with shortening WWII by 2–4 years and saving ~14 million lives. Proposed the Turing Test (1950) for machine intelligence. Prosecuted for homosexuality in 1952 and chemically castrated; died in 1954, officially suicide. Received a posthumous royal pardon in 2013.',pl:'Maszyna Turinga (1936): teoretyczny model obliczeń definiujący, co algorytm może i czego nie może obliczyć — fundament informatyki. Złamał szyfr Enigmy w Bletchley Park (1940), skracając II WŚ o 2–4 lata i ratując ~14 mln istnień. Zaproponował Test Turinga (1950) dla inteligencji maszynowej. W 1952 r. skazany za homoseksualność i poddany kastracji chemicznej; zmarł w 1954. Pośmiertne ułaskawienie królewskie w 2013.'},
    keywords:{en:['Turing Machine','Enigma','Artificial Intelligence','Bletchley Park'],pl:['Maszyna Turinga','Enigma','Sztuczna inteligencja','Bletchley Park']}
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
  lang:          'en',
  view:          'cards',
  navDir:        0,
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
  // favourites
  favs:          new Set(JSON.parse(localStorage.getItem('luma_favs') || '[]')),
  // gallery (image index per deck)
  artGalIdx:     0,
  sciGalIdx:     0,
};

/* ── Favourites helpers ──────────────────────────────── */
function saveFavs() {
  localStorage.setItem('luma_favs', JSON.stringify([...S.favs]));
}
function artKey(card)   { return 'art:'   + card.title.en; }
function sciKey(card)   { return 'sci:'   + card.title.en; }
function vocabKey(term) { return 'vocab:' + term.term.en;  }

function setFavBtn(btnEl, active) {
  if (!btnEl) return;
  btnEl.textContent = active ? '♥' : '♡';
  btnEl.classList.toggle('is-fav', active);
}
function toggleFav(key, btnEl) {
  if (S.favs.has(key)) S.favs.delete(key); else S.favs.add(key);
  saveFavs();
  setFavBtn(btnEl, S.favs.has(key));
  btnEl.classList.remove('pop');
  void btnEl.offsetWidth;
  btnEl.classList.add('pop');
  // refresh saved chip label count
  updateCatChips();
}

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
  // fav buttons
  favBtn:        $('favBtn'),      sciFavBtn:     $('sciFavBtn'),
  vocabFavBtn:   $('vocabFavBtn'),
  // gallery
  artGalDots:    $('artGalDots'), artGalPrev:    $('artGalPrev'), artGalNext:    $('artGalNext'),
  sciGalDots:    $('sciGalDots'), sciGalPrev:    $('sciGalPrev'), sciGalNext:    $('sciGalNext'),
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
  const cls = S.navDir > 0 ? 'card--slide-fwd' : S.navDir < 0 ? 'card--slide-bwd' : 'card--refresh';
  S.navDir = 0;
  cardEl.classList.remove('card--slide-fwd', 'card--slide-bwd', 'card--refresh');
  void cardEl.offsetWidth;
  cardEl.classList.add(cls);
  setTimeout(() => cardEl.classList.remove(cls), 320);
}

function setProgress(current, total) {
  const pct = total ? (current / total) * 100 : 0;
  DOM.progressFill.style.width = pct + '%';
  DOM.progressRole.setAttribute('aria-valuenow', Math.round(pct));
}

/* ── Gallery helper ──────────────────────────────────── */
function renderGallery(images, idx, imgEl, dotsEl, prevEl, nextEl) {
  if (!images || !images.length) return;
  const i = Math.max(0, Math.min(idx, images.length - 1));
  imgEl.src = images[i];
  const multi = images.length > 1;
  if (prevEl) prevEl.style.display = multi ? '' : 'none';
  if (nextEl) nextEl.style.display = multi ? '' : 'none';
  if (!dotsEl) return;
  dotsEl.innerHTML = '';
  if (multi) {
    images.forEach((_, di) => {
      const d = document.createElement('span');
      d.className = 'gal-dot' + (di === i ? ' active' : '');
      dotsEl.appendChild(d);
    });
  }
}

/* ── Render: art cards ───────────────────────────────── */
function render(animate = false) {
  if (!S.deck.length) {
    DOM.cardTitle.textContent = L()==='pl' ? 'Brak zapisanych kart' : 'No saved cards yet';
    DOM.hintText.textContent  = L()==='pl' ? 'Kliknij ♡ na karcie, by zapisać' : 'Tap ♡ on any card to save it';
    DOM.cardImg.src = ''; DOM.frontCatPill.textContent = ''; DOM.flipCueFront.textContent = '';
    DOM.cardCounter.textContent = '0 / 0'; DOM.progressText.textContent = '';
    DOM.prevBtn.disabled = true; DOM.nextBtn.disabled = true;
    setFavBtn(DOM.favBtn, false);
    setProgress(0, 1);
    return;
  }
  const card = S.deck[S.idx];
  const u = ui(); const l = L();
  if (animate) animateCard(DOM.flashcard);

  S.artGalIdx = 0;
  renderGallery(card.images, 0, DOM.cardImg, DOM.artGalDots, DOM.artGalPrev, DOM.artGalNext);
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
  setFavBtn(DOM.favBtn, S.favs.has(artKey(card)));
  flipCard(DOM.flashcard, DOM.cardInner, 'flipped', false, false);
}

/* ── Render: science ─────────────────────────────────── */
function renderSci(animate = false) {
  if (!S.sciDeck.length) return;
  const card = S.sciDeck[S.sciIdx];
  const u = ui(); const l = L();
  if (animate) animateCard(DOM.sciCard);

  S.sciGalIdx = 0;
  renderGallery(card.images, 0, DOM.sciImg, DOM.sciGalDots, DOM.sciGalPrev, DOM.sciGalNext);
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
  setFavBtn(DOM.sciFavBtn, S.favs.has(sciKey(card)));
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
  setFavBtn(DOM.vocabFavBtn, S.favs.has(vocabKey(term)));
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
  const artFavCount = CARDS.filter(c => S.favs.has(artKey(c))).length;
  const map = {
    all:   {pl:'Wszystkie', en:'All'},
    Eras:  {pl:'Epoki',     en:'Eras'},
    Styles:{pl:'Style',     en:'Styles'},
    Techniques:{pl:'Techniki',en:'Techniques'},
    favs:  {pl:`♥ Zapisane${artFavCount ? ' '+artFavCount : ''}`,
            en:`♥ Saved${artFavCount ? ' '+artFavCount : ''}`},
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
  S.navDir = dir;
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
  if (cat === 'favs') {
    S.deck = CARDS.filter(c => S.favs.has(artKey(c)));
  } else {
    S.deck = cat === 'all' ? shuffle([...CARDS]) : CARDS.filter(c => c.category.en === cat);
  }
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

// Art flip / nav / fav
DOM.flashcard.addEventListener('click', () =>
  flipCard(DOM.flashcard, DOM.cardInner, 'flipped', !S.flipped, true));
DOM.prevBtn.addEventListener('click', () => go(-1));
DOM.nextBtn.addEventListener('click', () => go(1));
DOM.favBtn.addEventListener('click', e => {
  e.stopPropagation();
  const card = S.deck[S.idx];
  if (card) toggleFav(artKey(card), DOM.favBtn);
  // if viewing favs and just un-faved, refresh deck
  if (S.activeCat === 'favs') { setCat('favs'); }
});

// Science flip / nav / fav
DOM.sciCard.addEventListener('click', () =>
  flipCard(DOM.sciCard, DOM.sciCardInner, 'sciFlipped', !S.sciFlipped, true));
DOM.sciPrev.addEventListener('click', () => go(-1));
DOM.sciNext.addEventListener('click', () => go(1));
DOM.sciFavBtn.addEventListener('click', e => {
  e.stopPropagation();
  const card = S.sciDeck[S.sciIdx];
  if (card) toggleFav(sciKey(card), DOM.sciFavBtn);
});

// Vocab flip / nav / reshuffle / fav
DOM.vocabCard.addEventListener('click', () =>
  flipCard(DOM.vocabCard, DOM.vocabCardInner, 'vocabFlipped', !S.vocabFlipped, true));
DOM.vocabPrev.addEventListener('click', () => go(-1));
DOM.vocabNext.addEventListener('click', () => go(1));
DOM.vocabFavBtn.addEventListener('click', e => {
  e.stopPropagation();
  const term = S.vocabDeck[S.vocabIdx];
  if (term) toggleFav(vocabKey(term), DOM.vocabFavBtn);
});
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

// Gallery navigation
if (DOM.artGalPrev) DOM.artGalPrev.addEventListener('click', e => {
  e.stopPropagation();
  const imgs = S.deck[S.idx]?.images;
  if (imgs && S.artGalIdx > 0) {
    S.artGalIdx--;
    renderGallery(imgs, S.artGalIdx, DOM.cardImg, DOM.artGalDots, DOM.artGalPrev, DOM.artGalNext);
  }
});
if (DOM.artGalNext) DOM.artGalNext.addEventListener('click', e => {
  e.stopPropagation();
  const imgs = S.deck[S.idx]?.images;
  if (imgs && S.artGalIdx < imgs.length - 1) {
    S.artGalIdx++;
    renderGallery(imgs, S.artGalIdx, DOM.cardImg, DOM.artGalDots, DOM.artGalPrev, DOM.artGalNext);
  }
});
if (DOM.sciGalPrev) DOM.sciGalPrev.addEventListener('click', e => {
  e.stopPropagation();
  const imgs = S.sciDeck[S.sciIdx]?.images;
  if (imgs && S.sciGalIdx > 0) {
    S.sciGalIdx--;
    renderGallery(imgs, S.sciGalIdx, DOM.sciImg, DOM.sciGalDots, DOM.sciGalPrev, DOM.sciGalNext);
  }
});
if (DOM.sciGalNext) DOM.sciGalNext.addEventListener('click', e => {
  e.stopPropagation();
  const imgs = S.sciDeck[S.sciIdx]?.images;
  if (imgs && S.sciGalIdx < imgs.length - 1) {
    S.sciGalIdx++;
    renderGallery(imgs, S.sciGalIdx, DOM.sciImg, DOM.sciGalDots, DOM.sciGalPrev, DOM.sciGalNext);
  }
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
