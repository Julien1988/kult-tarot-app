export default defineEventHandler((event) => {
  const cart: object = {
    ["MÉTROPOLIS"]: [
      "Métropolis représente la demeure ancestrale de l’Humanité, la Cité éternelle\n" +
        "et le cœur même de la machinerie du\n" +
        "Démiurge.",
      "Individu: une veuve endeuillée. Le\n" +
        "concierge d’une usine vide. Un architecte désespéré. Un manager strict et\n" +
        "dépourvu d’imagination.\n" +
        "Lieu: une chapelle funéraire. Une cité\n" +
        "en ruine. Un labyrinthe de ruelles.\n" +
        "L’Abysse. La Cité Machine. Les citadelles\n" +
        "de Métropolis.\n" +
        "Organisation: Section 11. Les Prophètes\n" +
        "du Troisième Temple. Les Flakchatters.\n" +
        "Situation: un sentiment de grandeur.\n" +
        "Une maladie mortelle mais lente. Percevoir l’ombre du Créateur. Un héritage\n" +
        "en attente.\n" +
        "Créature: le serviteur d’une Puissance supérieure détruite. Les anges\n" +
        "des Chœurs célestes. Les bêtes de\n" +
        "Métropolis.\n" +
        "Objet: une peinture représentant l’une\n" +
        "des citadelles de Métropolis. Un cercueil de chêne noir. Une urne remplie\n" +
        "de cendres. Des clefs sur un anneau.\n" +
        "L’oraison funèbre d’un patriarche mort\n" +
        "depuis bien longtemps.",
    ],
    ["L’OUBLI"]: [
      "L’Oubli représente ce que la mémoire a\n" +
        "perdu. Il est fortement lié au cycle de la\n" +
        "renaissance et aux Oubliettes de l’Oubli de\n" +
        "Métropolis",
      "Individu: un hypnotiseur. Un citoyen\n" +
        "âgé. Un comptable négligent. La victime d’un traumatisme. Une babysitter\n" +
        "étourdie. Un prêtre distrait. Un mauvais\n" +
        "chirurgien.\n" +
        "Lieu: les Oubliettes de l’Oubli. Un\n" +
        "coffrefort verrouillé. La demeure de\n" +
        "personnes âgées. Une ville fantôme.\n" +
        "Une station essence perdue au milieu\n" +
        "de nulle part.\n" +
        "Organisation: un forum internet traitant de la réincarnation. Les serviteurs\n" +
        "d’une ancienne famille noble.\n" +
        "Situation: un événement traumatisant. Alzheimer. La démence. La perte\n" +
        "de mémoire. Des esprits manipulés.\n" +
        "Des vies antérieures. Des décharges\n" +
        "électriques.\n" +
        "Créature: subsiste grâce aux souvenirs\n" +
        "qu’elle vole. Résurgence d’une vie antérieure. Un ange à la recherche d’une\n" +
        "âme perdue.\n" +
        "Objet: un carnet. De vieilles lettres.\n" +
        "Des drogues. Enterré. Une équation à\n" +
        "laquelle manquent les derniers chiffres.\n" +
        "Du matériel de lobotomie. Des cartons\n" +
        "dans un grenier.",
    ],
    ["LES RESTES"]: [
      "Les Restes représentent ce que l’on\n" +
        "retrouve après la mort, la destruction ou\n" +
        "la transition.",
      [
        "Individu: un archéologue pragmatique. Un excentrique héritier. Un soldat ayant appartenu à une unité à présent dissoute. Un clochard vivant dans\n" +
          "une décharge.\n" +
          "Lieu: d’antiques ruines. Une maison\n" +
          "abandonnée par une famille. Une\n" +
          "épave au fond de la mer.\n" +
          "Organisation: un office notarial gérant\n" +
          "des héritages. Un culte des ancêtres.\n" +
          "Situation: des secrets de famille. Le\n" +
          "dernier membre d’une lignée. Un\n" +
          "orphelin dont personne ne veut. Se\n" +
          "retrouver seul au monde. Découvrir les\n" +
          "secrets de son passé.\n" +
          "Créature: des anges déchus. Des créatures Ravagées. Des azghouls.\n" +
          "Objet: la dernière page d’un livre. Un\n" +
          "message déformé sur une cassette\n" +
          "audio. Un signal de détresse automatisé. Une étrange machinerie dont\n" +
          "manquent certaines parties.",
      ],
    ],
    ["L’ESPRIT"]: [
      "L’Esprit représente la psyché, l’essence\n" +
        "immatérielle et la machinerie qui enchaîne\n" +
        "l’âme divine",
      "L’Esprit représente la psyché, l’essence\n" +
        "immatérielle et la machinerie qui enchaîne\n" +
        "l’âme divine.\n" +
        "Individu: un médium chic avec une\n" +
        "clientèle riche. Une fille de banlieue qui\n" +
        "voit des « fantômes ». Des scientifiques\n" +
        "qui tentent de photographier le monde\n" +
        "des esprits. Un sorcier capable d’invoquer les esprits et qui habite un train\n" +
        "abandonné. Un enfant possédé attaché\n" +
        "à un lit.\n" +
        "Les Arcanes mineurs\n" +
        "Les Arcanes mineurs représentent des aspects de l’Illusion et de notre prison.\n" +
        "Les Crânes\n" +
        "Cette couleur représente la Mort comme un passage de l’autre côté, tout comme\n" +
        "la destruction matérielle des liens qui nous retiennent à notre chair. Les Crânes\n" +
        "sont fermement liés à Métropolis et aux Archontes, ainsi qu’à l’Inferno et aux\n" +
        "Anges de la Mort.\n" +
        "Lieu: la mer calme et froide. La\n" +
        "demeure d’un tueur en série, dont les\n" +
        "murs renferment des corps mutilés. Un\n" +
        "bourbier couvert d’une brume blanche.\n" +
        "Un vieux phare sur une île déserte.\n" +
        "Organisation: une émission internet qui enquête sur des phénomènes\n" +
        "paranormaux.\n" +
        "Situation: la légende d’une personne\n" +
        "qui se murmure dans les cités. Un\n" +
        "chant qui appelle depuis Achlys dans\n" +
        "l’Inframonde.\n" +
        "Créature: des spectres et des fantômes.\n" +
        "Une âme humaine. Un psyphago.\n" +
        "Objet: un jeu de tarot aux lames\n" +
        "tachées. Une poupée possédée par\n" +
        "un esprit. Un plateau de ouija taché\n" +
        "de bière et de sang. Un tas de vieilles\n" +
        "lettres rédigées en français.",
    ],
    ["LA TRANSITION"]: [
      "La Transition représente le passage de\n" +
        "la vie à la mort ou à toute autre forme\n" +
        "d’existence.",
      "Individu: un tueur à gages méthodique\n" +
        "et parfaitement préparé. Un bourreau\n" +
        "qui peine à garder le contrôle. La victime d’un trauma qui lutte entre la vie\n" +
        "et la mort. Une infirmière avec un sentiment de supériorité démentiel. Une\n" +
        "star du porno qui fétichise l’asphyxie.\n" +
        "Un sorcier de la mort séducteur.\n" +
        "Lieu: une clinique d’avortement. Une\n" +
        "porte cachée dans une tombe. Un portail secret qui mène à la Cité des Morts.\n" +
        "Un abattoir désolé. Une maison de\n" +
        "retraite.\n" +
        "14 Utiliser le tarot de KULT\n" +
        "Organisation: un escadron de la mort.\n" +
        "Une organisation scientifique qui\n" +
        "cherche à enregistrer le moment précis\n" +
        "du décès.\n" +
        "Situation: une mère qui meurt en\n" +
        "couches.\n" +
        "Créature: un Frontalier. Une créature\n" +
        "qui existe entre la vie et la mort.\n" +
        "Objet: une arme biologique bricolée.\n" +
        "Une seringue remplie de liquide d’embaumement. Un défibrillateur automatisé externe avec une seule et dernière\n" +
        "charge. Un fœtus, préservé dans du\n" +
        "formol, qui tressaille de temps à autre.\n" +
        "Une fiole remplie de semence versée\n" +
        "au moment du décès.",
    ],
    [" LA CHAIR"]: [
      "La Chair représente le corps sous forme de\n" +
        "coquille après la mort ou de prison pour\n" +
        "une âme qui aurait dû être libérée.",
      "Individu: un chirurgien morbide qui\n" +
        "vole des trophées. Un jeune fou qui\n" +
        "conserve le corps de son défunt père\n" +
        "attaché sur un lit dans le grenier. Un\n" +
        "fossoyeur maître de lui en proie à des\n" +
        "envies sexuelles, mais déviantes, quasi\n" +
        "irrépressibles. Une fille lobotomisée\n" +
        "gardée dans le soussol d’un bordel.\n" +
        "Lieu: une morgue en acier inoxydable\n" +
        "où l’odeur d’antiseptique masque à\n" +
        "peine la puanteur de la pourriture. Des\n" +
        "charniers à l’extérieur d’une petite ville.\n" +
        "Un musée médical.\n" +
        "Organisation: une société de sorciers de la mort. Un culte cannibale de\n" +
        "campagne.\n" +
        "Situation: plusieurs cas graves de lèpre.\n" +
        "Les morts reviennent à la vie. Cannibalisme forcé. Cannibalisme volontaire.\n" +
        "Créature: des légionnaires damnés.\n" +
        "Objet: un corps difforme recousu\n" +
        "et dont les parties sont fondues les\n" +
        "unes dans les autres. Un livre en peau\n" +
        "humaine. Des organes volés dans une\n" +
        "caisse remplie de glace. Une boîte de\n" +
        "scalpels et de couteaux chirurgicaux.",
    ],
    ["L’ARME"]: [
      "L’Arme représente l’outil qui dispense la\n" +
        "mort et qui déclenche une transition par\n" +
        "la violence",
      "Individu: un justicier de banlieue armé\n" +
        "d’un pistolet à silencieux. Un homme\n" +
        "de main de la Bratva. Un tireur d’élite\n" +
        "qui tire une certaine fierté de son travail. Un meurtrier qui utilise le couteau\n" +
        "pour faire de ses actes un moment\n" +
        "intime et personnel.\n" +
        "Lieu: une salle d’exécution équipée\n" +
        "d’une chaise électrique. Un monument\n" +
        "commémoratif d’une guerre. Un entrepôt d’armes. Le quartier général d’une\n" +
        "armée.\n" +
        "Organisation: des trafiquants d’armes.\n" +
        "Les forces spéciales d’une armée.\n" +
        "Un groupe de mercenaires. Un gang\n" +
        "violent.\n" +
        "Situation: des lyncheurs armés de\n" +
        "machettes et de fusils. Une fusillade au\n" +
        "volant. Un braquage à main armée. Une\n" +
        "tentative d’assassinat. Une embuscade.\n" +
        "Créature: se nourrit de violence et de\n" +
        "souffrance.\n" +
        "Objet: une lame affûtée. Un pistoletmitrailleur Ingram MAC-11. Des vidéos\n" +
        "d’exécutions et d’accidents mortels.\n" +
        "Une vieille VHS diffusant un snuff\n" +
        "movie porno. Un paquet de cigarettes.\n" +
        "Une grenade de la Seconde Guerre\n" +
        "mondiale. Des codes militaires sur du\n" +
        "papier pour imprimante matricielle.\n" +
        "Des photos de scènes de crime présentant des messages cachés.",
    ],
    ["LA SOUFFRANCE"]: [
      "La Souffrance représente la douleur issue\n" +
        "de la mort et de la purification de l’âme.\n" +
        "Elle est fortement liée au cycle de la\n" +
        "renaissance et aux Oubliettes de la Douleur de l’Inferno.",
      "Individu: un prophète adepte de l’automutilation. Une dominatrice professionnelle. Un expert en interrogatoire\n" +
        "militaire. Un pénitent religieux.\n" +
        "Lieu: un purgatoire qui crée un pont\n" +
        "entre l’Élysée et l’Inferno. Les Oubliettes\n" +
        "de la Douleur. Une salle d’interrogatoire\n" +
        "insonorisée. Un club BDSM réservé à ses\n" +
        "membres. L’entrée d’une cave secrète.\n" +
        "Une chambre de torture médiévale.\n" +
        "Organisation: une organisation antiterroriste secrète. Un culte de Golab.\n" +
        "Situation: un douloureux cancer des\n" +
        "os. Des secrets de famille. Une vidéo\n" +
        "montrant un jeune enfant dépecé\n" +
        "vivant. D’horribles flash-back.\n" +
        "Créature: des purgatides. Des népharites. Des razides.\n" +
        "Objet: une couronne d’épines en fil\n" +
        "barbelé. L’équipement nécessaire à la\n" +
        "torture par l’eau. Des pics rouillés. Des\n" +
        "entraves gravées de runes.",
    ],
    ["L’INFERNO"]: [
      "L’Inferno représente l’ombre de Métropolis,\n" +
        "les nombreux enfers et citadelles, ainsi\n" +
        "que le royaume d’où s’écoule la volonté\n" +
        "d’Astaroth.",
      "Individu: un tatoueur qui lie ses clients\n" +
        "à l’Inferno. Un gourou charismatique\n" +
        "qui offre des lames de rasoir. Un accro\n" +
        "à l’héroïne qui a appris à arpenter la\n" +
        "frontière entre les mondes. Un fanatique violent qui capte des visions de\n" +
        "l’Inferno.\n" +
        "Lieu: la citadelle d’Astaroth. Les dix\n" +
        "citadelles des Anges de la Mort. Un labyrinthe entre des chambres de torture.\n" +
        "Un portail entre l’Élysée et l’Inferno.\n" +
        "Organisation: un culte de suicidaires\n" +
        "qui cherchent à échapper à notre\n" +
        "monde.\n" +
        "Situation: un enfant trempé d’essence\n" +
        "et de sang est placé sur les marches\n" +
        "d’un monastère. Des secrets murmurés sur un lit de mort. Les paroles d’un\n" +
        "groupe de black metal invoquent les\n" +
        "puissances de l’enfer.\n" +
        "Créature: un népharite. Un Incarné\n" +
        "d’Astaroth.\n" +
        "Objet: une vieille clef capable d’ouvrir\n" +
        "les portails entre les mondes. Un 33\n" +
        "tours qui joue un air troublant. Une\n" +
        "boîte d’allumettes remplie de dents\n" +
        "humaines. « Pardonne-moi » écrit en\n" +
        "lettres de sang sur un morceau de\n" +
        "papier.",
    ],
    ["GAÏA"]: [
      "Gaïa représente la Nature Sauvage, ce qui\n" +
        "ne peut être contrôlé, la faim primitive et\n" +
        "les émotions pures.",
      "Individu: un fou plus bestial qu’humain. Un adorateur de la nature néopaïen. Un shaman membre des Premières Tribus qui exige un sacrifice.\n" +
        "Lieu: la frontière de Gaïa. Une maison\n" +
        "dévorée par les plantes. Les profondeurs sauvages. Le nid d’un animal.\n" +
        "Organisation: un culte qui vénère la\n" +
        "nature sauvage.\n" +
        "Situation: du cannibalisme primitif.\n" +
        "Être submergé par des émotions. Le\n" +
        "plus fort tue le plus faible. La nature\n" +
        "submerge la civilisation. Perdre le\n" +
        "contrôle dans une extase sauvage. Un\n" +
        "corps qui se change et se déforme en\n" +
        "quelque chose de bestial.\n" +
        "Créature: un Ensauvagé. Une Sentinelle.\n" +
        "Objet: une carte qui mène à la nature.\n" +
        "Une silhouette tribale gravée dans un\n" +
        "os. Un crâne humain sur une pique.\n" +
        "Une carcasse en putréfaction rongée\n" +
        "par les vers",
    ],
    ["LA NAISSANCE"]: [
      "La Naissance représente ce qui résulte de\n" +
        "la passion, le début de quelque chose de\n" +
        "nouveau, une âme mêlée à la chair",
      "Individu: une sage-femme sévère. Une\n" +
        "mère dépressive. Un nourrisson dans\n" +
        "un incubateur. Un parrain fier. Des\n" +
        "parents adolescents. Un kidnappeur de\n" +
        "bébé désespéré.\n" +
        "Lieu: une maternité délabrée. Un\n" +
        "orphelinat de campagne. Un tunnel\n" +
        "étroit.\n" +
        "Organisation: une agence de mères\n" +
        "porteuses. Un centre d’adoption.\n" +
        "Situation: la naissance d’un enfant.\n" +
        "L’aube d’un jour nouveau. L’âge des\n" +
        "responsabilités. Un lien familial. Une\n" +
        "adoption. Un enfant mort-né. Un test\n" +
        "de paternité.\n" +
        "Créature: un étrange rejeton. Un\n" +
        "gynachid.\n" +
        "Objet: une bouteille de lait maternel\n" +
        "mélangé à du sang. Un berceau vide.\n" +
        "Des objets tranchants au fond d’un carton de linge pour bébé.",
    ],
    ["LA SURVIE"]: [
      "La Survie représente la volonté d’aller de\n" +
        "l’avant malgré tout, la loi du plus fort et\n" +
        "le fait de surmonter les difficultés grâce à\n" +
        "une pure volonté de fer.",
      "Individu: un plouc survivaliste doté\n" +
        "d’une volonté de fer. Un soldat des\n" +
        "forces spéciales. Une femme battue. Un\n" +
        "enfant soldat. Un vétéran endurci.\n" +
        "Lieu: les profondeurs sauvages. Une\n" +
        "zone de guerre. Un quartier difficile. Un\n" +
        "foyer d’accueil violent. Un bunker secret\n" +
        "rempli de nourriture et d’équipement.\n" +
        "Organisation: un réseau de survivalistes. Un groupe de mercenaires. Des\n" +
        "explorateurs urbains.\n" +
        "Situation: perdu dans la nature. Votre\n" +
        "tête mise à prix. Se rendre à plus fort\n" +
        "que soi. Montrer sa domination. Un\n" +
        "acte de cannibalisme désespéré.\n" +
        "Créature: un être venu des profondeurs de Gaïa.\n" +
        "Objet: une chaîne de porte. Des rations\n" +
        "de combat. Une carte figurant des chemins secrets. Une boussole tachée de\n" +
        "sang",
    ],
    [". LA CROISSANCE"]: [
      "La Croissance représente ce qui gagne\n" +
        "en force et se répand, qu’il s’agisse de la\n" +
        "volonté, du corps ou de la nature.",
      "Individu: un garçon présentant des\n" +
        "difformités. Un garde du corps dévoué.\n" +
        "Une femme grotesquement obèse.\n" +
        "Lieu: un endroit réclamé par la nature.\n" +
        "Un laboratoire qui peine à obtenir ses\n" +
        "subventions. Une pièce aux murs et au\n" +
        "plafond couverts de moisissures. Une\n" +
        "salle de sport en banlieue. Des champs\n" +
        "labourés.\n" +
        "Organisation: un centre de procréation médicalement assistée. Un gouvernement ou une entreprise expansionniste. Une association qui organise des\n" +
        "concours de culturisme.\n" +
        "Situation: une idée évolue en obsession. Une mutation génétique. Une\n" +
        "amitié qui devient désir incontrôlable.\n" +
        "Un enfant qui atteint la puberté. Un\n" +
        "cancer qui se répand dans le corps.\n" +
        "Créature: un libith/darthea. Un animal\n" +
        "muté par Gaïa.\n" +
        "Objet: une seringue remplie de stéroïdes. Des graines plantées dans une\n" +
        "terre noire. Un œuf fertilisé. Un livre de\n" +
        "développement personnel.",
    ],
    [" LE PRÉDATEUR"]: [
      "Le Prédateur représente le chasseur, celui\n" +
        "qui a faim et s’en prend aux faibles.",
      "Individu: un magnat de l’industrie\n" +
        "cinématographique. Une femme fatale\n" +
        "manipulatrice. Un tueur en série impulsif. Un violeur en série dont la famille\n" +
        "ignore ses crimes. Un paparazzi sans\n" +
        "scrupules. Un PDG agressif. Un profil en\n" +
        "ligne dont le pseudo est « Male_Alpha ».\n" +
        "Un sorcier de la Passion.\n" +
        "Lieu: un hôtel sordide à proximité du\n" +
        "quartier rouge. Une cabane au fond\n" +
        "des bois. Une grange dans laquelle on\n" +
        "dépèce des animaux.\n" +
        "Organisation: un culte célébrant le\n" +
        "meurtre. Une société de chasse au gros\n" +
        "gibier.\n" +
        "Situation: s’en prendre aux faibles.\n" +
        "Suivre quelqu’un la nuit. La séduction.\n" +
        "Une attaque en embuscade. Des motivations cachées.\n" +
        "Créature: un nosferatu qui chasse\n" +
        "depuis les ombres. Une créature née de\n" +
        "la Passion.\n" +
        "Objet: un rouge à lèvres écarlate. Un\n" +
        "stylet. Des préservatifs et du lubrifiant.\n" +
        "Des lunettes de vision nocturne. Une\n" +
        "drogue qui assomme. Un miroir de\n" +
        "maquillage. Une limousine conduite\n" +
        "par un chauffeur fidèle.",
    ],
    [". LA NUÉE"]: [
      "La Nuée représente une assemblée, un\n" +
        "esprit collectif, une foule dévorée par la\n" +
        "passion et qui agit comme un seul homme.",
      "Individu\n" +
        ": un disciple dévoué. Un dres\n" +
        "\n" +
        "seur. Un pêcheur cachant un sombre\n" +
        "secret. Un supporter de foot troublé.\n" +
        "Lieu\n" +
        ": un parc et des rues. Des marais\n" +
        "infestés de moustiques. Un camp de\n" +
        "jeunes. Des cités en banlieue. Un ranch\n" +
        "de bétail.\n" +
        "Organisation\n" +
        ": des supporters de foot.\n" +
        "Une secte religieuse. Des syndiqués.\n" +
        "Situation\n" +
        ": se laisser porter. Un sacrifice\n" +
        "pour le bien du groupe. Un châtiment\n" +
        "collectif. Une assemblée. Un embou\n" +
        "\n" +
        "teillage pendant l’heure de pointe. Un\n" +
        "groupe qui partage le même état d’es\n" +
        "\n" +
        "prit. Une foule en colère sur les réseaux\n" +
        "sociaux. Des usagers de transports en\n" +
        "commun.\n" +
        "Créature\n" +
        ": une meute de loups. Des\n" +
        "cafards. Des zéloths.\n" +
        "Objet\n" +
        ": un pot de miel. Des fourmis\n" +
        "mortes dans une boîte d’allumettes.\n" +
        "Une broche en bronze figurant une\n" +
        "sauterelle.",
    ],
    [". LA PROIE"]: [
      "La Proie représente la victime de la pas\n" +
        "\n" +
        "sion, la cible d’un ennemi ou la victime\n" +
        "potentielle d’une situation dangereuse.",
      "un harceleur sans pitié. Un père de\n" +
        "famille que l’on fait chanter. Un fugitif\n" +
        "recherché. Un bouc émissaire en ligne.\n" +
        "Un adolescent crédule. Un enfant de\n" +
        "chœur qui ressemble à une poupée.\n" +
        "Une victime de traite humaine.\n" +
        "Lieu\n" +
        ": une pièce secrète dans le sous-sol\n" +
        "d’une maison. Des rues vides la nuit. Un\n" +
        "refuge pour femmes. Une vieille route\n" +
        "forestière.\n" +
        "Organisation\n" +
        ": un groupe de soutien\n" +
        "pour victimes de viol et d’abus sexuels.\n" +
        "Situation\n" +
        ": être piégé. Être contraint\n" +
        "d’obéir par le chantage. Être traqué par\n" +
        "quelqu’un ou quelque chose.\n" +
        "Créature\n" +
        ": une créature de la Passion.\n" +
        "Des Enfants de la Nuit.\n" +
        "Objet\n" +
        ": des pleurs et des suppliques sur\n" +
        "un répondeur. Un passeport volé. Un\n" +
        "pistolet dans un sac à main. Une vidéo\n" +
        "incriminante.",
    ],
    ["L’AMOUR"]: [
      "L’Amour représente un lien qui peut être\n" +
        "plus fort que la mort. Il peut conférer force\n" +
        "et raison d’être, mais aussi tirer vers le bas\n" +
        "et condamner celui qui l’éprouve.",
      "Individu\n" +
        ": un homme au cœur brisé. Un\n" +
        "romantique désespéré. Un conseiller\n" +
        "matrimonial. Un beau-père retors. Une\n" +
        "épouse dévouée.\n" +
        "Lieu\n" +
        ": un motel à proximité d’une auto\n" +
        "\n" +
        "route. Une cabane dans les bois. Une\n" +
        "église de campagne. Un splendide parc\n" +
        "en plein cœur de la ville. Une boutique\n" +
        "de robes de mariée. Un site de ren\n" +
        "\n" +
        "contre. Un cadavre enterré dans les bois.\n" +
        "Organisation\n" +
        ": une agence matrimoniale.\n" +
        "Situation\n" +
        ": être transi d’amour. Des\n" +
        "sentiments inattendus. Une relation\n" +
        "cachée. Un amour interdit. Un amour\n" +
        "à sens unique. Une cérémonie de\n" +
        "mariage. Une lune de miel. Un inceste.\n" +
        "Une mise à jour des réseaux sociaux.\n" +
        "Créature\n" +
        ": une créature de la Passion.\n" +
        "Objet\n" +
        ": une alliance en or toute simple.\n" +
        "Un contrat de mariage. Un smartphone\n" +
        "rempli de messages et de photos ro\n" +
        "\n" +
        "mantiques. Un gâteau de mariage. Une\n" +
        "robe de mariée. Un roman Harlequin\n" +
        "dans lequel on a surligné des passages.\n" +
        "Une lettre d’amour ensanglantée.",
    ],
    ["ACHLYS"]: [
      "Achlys représente le néant, l’infinité, le\n" +
        "vide mais aussi l’oblitération de l’âme.",
      "Individu: une âme en grave dépression. Une personne souffrant d’apathie sévère. Un patient dans le coma.\n" +
        "Un misanthrope autodestructeur. Un\n" +
        "prêtre qui a perdu la foi. Un prisonnier en isolement total. Un plongeur\n" +
        "sous-marin imprudent.\n" +
        "Lieu: le vide de l’espace. Un puits profond. Des eaux calmes et noires. Un\n" +
        "caisson de privation sensorielle. Un\n" +
        "bourbier sans fond. Les profondeurs\n" +
        "de l’océan. Une cellule d’isolement aux\n" +
        "murs noirs.\n" +
        "Organisation: un culte qui vénère Celle\n" +
        "Qui Attend En Dessous.\n" +
        "Situation: la destruction totale de ce\n" +
        "qui caractérise une personne. Être atomisé. Un maelström qui vous attire\n" +
        "dans les profondeurs.\n" +
        "Créature: les Enfants de l’Inframonde.\n" +
        "Un spectre.\n" +
        "Objet: un caisson de privation sensorielle. Un encrier rempli d’encre\n" +
        "noire. Une seringue d’injection létale.\n" +
        "Le nombre π gravé dans du cuir. Une\n" +
        "lettre de suicide.",
    ],
    ["LE FUTUR"]: [
      "Le Futur représente ce qui n’a pas encore\n" +
        "eu lieu, ainsi que le potentiel caché.",
      "Individu: un diseur de bonne aventure de banlieue. Un professeur d’analyse prédictive. Un joueur invétéré. Un\n" +
        "nourrisson sans parents. Un agent de\n" +
        "change. Un jeune espoir. Un jardinier\n" +
        "infatigable. Un sportif briguant une\n" +
        "place en ligue. Un politicien en herbe.\n" +
        "Un génie des technologies.\n" +
        "Lieu: un orphelinat. Une autoroute en\n" +
        "construction. Un site de construction.\n" +
        "Organisation: des analystes du futur.\n" +
        "Un fonds d’investissement. Une université technique.\n" +
        "Situation: une prédiction. Des intrigues\n" +
        "complexes. Une interprétation de tarot.\n" +
        "Une levée de fonds. Un financement\n" +
        "participatif en ligne.\n" +
        "Créature: un être venu du futur. Celui\n" +
        "sans Yeux.\n" +
        "Objet: une vieille montre à gousset. Un\n" +
        "journal intime rempli de prédictions.\n" +
        "Une graine que personne n’a plantée.\n" +
        "Les plans d’un gratte-ciel. Une arme\n" +
        "biologique.",
    ],
    ["LE PASSÉ"]: [
      "Le Passé représente ce qui s’est déjà produit et se reproduit, ou ce qui peut être\n" +
        "découvert si l’on regarde au bon endroit.",
      "Individu: un nostalgique du bon vieux\n" +
        "temps. Un antiquaire amer. Un archéologue qui ne sait pas se taire. Une historienne amatrice. Un mémorialiste\n" +
        "dévoué. Le membre d’une sous-culture\n" +
        "rétro.\n" +
        "Lieu: un musée oublié. Des ruines perdues au fin fond de la nature. Un cimetière envahi par les mauvaises herbes.\n" +
        "Des archives poussiéreuses. Un vieux\n" +
        "champ de bataille. Une bibliothèque\n" +
        "universitaire. Une maison de famille.\n" +
        "Organisation: un centre d’études\n" +
        "généalogiques. Une société d’archéologues. Un groupe de sous-culture vintage en ligne.\n" +
        "Situation: des fouilles archéologiques.\n" +
        "Un interrogatoire.\n" +
        "Créature: un être venu d’un lointain\n" +
        "passé. Une antique créature de l’Inframonde. Un dieu oublié.\n" +
        "Objet: un livre d’histoire de famille. Un\n" +
        "calice du Moyen-Âge. La photo de personnes mortes depuis longtemps. Un\n" +
        "certificat de naissance plié.",
    ],
    ["L’ESPACE"]: [
      "L’Espace représente quelqu’un ou quelque\n" +
        "chose qui avance physiquement, que ce\n" +
        "soit avec un but ou non.",
      "Individu: un chauffeur poids lourd\n" +
        "travailleur. Un routard philosophe. Un\n" +
        "pilote de ligne infidèle. Un amant tourmenté. Un vagabond en haillons. Un\n" +
        "auto-stoppeur psychopathe. Un chauffeur de taxi de confiance. Un marathonien aux nombreux secrets. Un accusé\n" +
        "en fuite. Un jeune fugueur.\n" +
        "Lieu: une autoroute sans fin. Un chemin de fer. Une rivière au cours lent. Un\n" +
        "monte-charge.\n" +
        "Organisation: une entreprise de déménagement. Une compagnie maritime.\n" +
        "Une organisation de traite humaine.\n" +
        "Situation: un voyage en bateau. Un\n" +
        "voyage en train. Une chasse. Une voiture lancée à toute vitesse. Un transfert\n" +
        "d’informations. Des lignes électriques.\n" +
        "Créature: les Danseurs fous. Le dieu\n" +
        "des autoroutes. Un être capable de se\n" +
        "téléporter.\n" +
        "Objet: un téléphone avec des données\n" +
        "GPS. Une bouteille d’eau. Une paire de\n" +
        "chaussures. Un passeport.",
    ],
    ["LA FRONTIÈRE"]: [
      "La Frontière représente le lieu qui sépare\n" +
        "deux mondes ou deux états, ou bien celui\n" +
        "où le Temps et l’Espace rencontrent le\n" +
        "monde physique.",
      "Individu: un douanier véreux. Un\n" +
        "immigrant avec un dédoublement de\n" +
        "la personnalité. Un diplomate étranger.\n" +
        "Un enfant qui entre dans la puberté. Un\n" +
        "malade du SIDA à l’article de la mort.\n" +
        "Un shaman urbain.\n" +
        "Lieu: un endroit où l’Illusion est faible.\n" +
        "Une berge mangée par les hautes\n" +
        "herbes. Un poste de contrôle à la frontière. Un mur particulièrement haut.\n" +
        "Une ambassade.\n" +
        "Organisation: un culte qui protège la\n" +
        "frontière.\n" +
        "Situation: exister entre deux mondes.\n" +
        "Une loyauté remise en question. Un\n" +
        "accord entre deux puissances. Être\n" +
        "à moitié éveillé. Être entre la vie et\n" +
        "la mort. Un statu quo. Être dans une\n" +
        "impasse.\n" +
        "Créature: un Frontalier.\n" +
        "Objet: une lettre de présentation. Des\n" +
        "papiers d’identité. Une boussole. Un\n" +
        "couteau à tapis. Une carte pliée. Un passeport diplomatique.\n",
    ],
    ["LA CACHETTE"]: [
      "La Cachette représente ce qui est dissimulé\n" +
        "et caché. Elle est fortement liée à la ville\n" +
        "de Ktonor, dans l’Inframonde.",
      "Individu\n" +
        ": un agent sous couverture. Un\n" +
        "immigrant illégal. Un prisonnier évadé.\n" +
        "Une taupe. Un soldat camouflé.\n" +
        "Lieu\n" +
        ": Ktonor. Un sanctuaire caché. Une\n" +
        "chambre forte poussiéreuse. Une pièce\n" +
        "sécurisée. Un passage secret. Un che\n" +
        "\n" +
        "min inconnu dans la nature. Une voie\n" +
        "de contrebande. Un refuge.\n" +
        "Organisation\n" +
        ": une agence d’espion\n" +
        "\n" +
        "nage. Une communauté de sans-abri\n" +
        "secrète.\n" +
        "Situation\n" +
        ": une opération sous cou\n" +
        "\n" +
        "verture. Rester en dehors des pro\n" +
        "\n" +
        "blèmes. Des sous-entendus dans les\n" +
        "conversations.\n" +
        "Créature\n" +
        ": les Enfants de l’Inframonde.\n" +
        "Un monstre invisible.\n" +
        "Objet\n" +
        ": la clef d’un refuge. La carte vers\n" +
        "un itinéraire secret. Un antique arte\n" +
        "\n" +
        "fact. Des secrets enfouis.",
    ],
    ["LE LABYRINTHE"]: [
      "Le Labyrinthe représente un dédale de\n" +
        "dangers et de confusion, et il est lié à\n" +
        "l’Inframonde.",
      "Individu\n" +
        ": un mathématicien qui\n" +
        "cherche la clef d’un problème impos\n" +
        "\n" +
        "sible à résoudre. Un patient en hôpital\n" +
        "psychiatrique, qui comprend certains\n" +
        "aspects de la Vérité. Un spéléologue.\n" +
        "Un psychologue qui explore l’esprit\n" +
        "de tueurs en série. Une vieille femme\n" +
        "obsédée par les énigmes.\n" +
        "Lieu\n" +
        ": un système d’égouts. Un réseau\n" +
        "de ruelles tortueuses. Un labyrinthe\n" +
        "végétal. Une cave obscure. Un réseau\n" +
        "de grottes. Des tunnels de métro. Une\n" +
        "favela.\n" +
        "Organisation\n" +
        ": un culte qui vénère les\n" +
        "créatures de l’Inframonde.\n" +
        "Situation\n" +
        ": être perdu. Être confus.\n" +
        "Une embuscade. Se retrouver dans\n" +
        "un endroit imprévu. Tourner en rond.\n" +
        "Entendre d’étranges échos.\n" +
        "Créature\n" +
        ": un cairath. Des zéloths. Un\n" +
        "gransangthir.\n" +
        "Objet\n" +
        ": la boussole d’un vieux bateau.\n" +
        "Un puzzle de 1000 pièces. Un code\n" +
        "rédigé par un fou.",
    ],
    ["LE CARREFOUR"]: [
      "Le Carrefour relie deux voies distinctes, il\n" +
        "représente un choix qui doit être fait et\n" +
        "dont chaque option entraînera des consé\n" +
        "\n" +
        "quences bien différentes.",
      "Individu\n" +
        ": une femme qui fuit son\n" +
        "passé. Un politicien sous pression. Une\n" +
        "ado qui envisage d’avorter. Un conseil\n" +
        "\n" +
        "ler matrimonial amer.\n" +
        "Lieu\n" +
        ": un carrefour. Une bretelle de sor\n" +
        "\n" +
        "tie d’autoroute. Une gare. Des escaliers\n" +
        "qui conduisent au métro souterrain.\n" +
        "Organisation\n" +
        ": un centre de procréa\n" +
        "\n" +
        "tion médicalement assistée. Une com\n" +
        "\n" +
        "pagnie de paris.\n" +
        "Situation\n" +
        ": un choix important. Un\n" +
        "dilemme cruel. Une rupture. Un cri\n" +
        "qui risque de ne pas être entendu. Un\n" +
        "enfant qui joue avec une arme à feu.\n" +
        "Créature\n" +
        ": un tisseur de pacte. Le Dealer\n" +
        "de troc.\n" +
        "Objet\n" +
        ": une lettre contenant des infor\n" +
        "\n" +
        "mations pouvant changer une vie. Un\n" +
        "sac à dos. Une machine à sous.",
    ],
    ["LE PORTAIL"]: [
      "Le Portail représente un seuil à protéger\n" +
        "ou un obstacle à surmonter.",
      "Individu\n" +
        ": un agent de sécurité. Un\n" +
        "serrurier autodidacte. Un pirate infor\n" +
        "\n" +
        "matique déterminé. Un chef d’équipe\n" +
        "antipathique.\n" +
        "Lieu\n" +
        ": le coffre d’une banque. La porte\n" +
        "d’un bâtiment abandonné. Un passage\n" +
        "sous un pont. Une bouche d’égout. Un\n" +
        "portail vers un autre monde.\n" +
        "Organisation\n" +
        ": une banque. Des doua\n" +
        "\n" +
        "niers. Un culte qui a juré de protéger\n" +
        "un secret.\n" +
        "Situation\n" +
        ": quelque chose qui doit être\n" +
        "ouvert. Quelque chose qui doit être\n" +
        "protégé. Quelqu’un qui garde de nom\n" +
        "\n" +
        "breux secrets. Des souvenirs oubliés.\n" +
        "Créature\n" +
        ": un gardien. Un Ouvreur de\n" +
        "Chemins.\n" +
        "Objet\n" +
        ": un dossier crypté. Un livre écrit\n" +
        "dans une langue inconnue. Un cadenas.\n" +
        "Une pilule rouge.",
    ],
    [" LE VORTEX"]: [
      "Le Vortex représente la source même de la\n" +
        "création, des rêves et du chaos sans cesse\n" +
        "changeant qui trouve son origine dans les\n" +
        "profondeurs des Limbes",
      "Individu: un visionnaire capable de\n" +
        "changer le monde. Un dangereux\n" +
        "démagogue. Un sorcier des Rêves.\n" +
        "Lieu: le Vortex. Le Monde du Rêve. Des\n" +
        "songes en lambeaux.\n" +
        "Organisation: un ordre secret de sorciers. Un centre d’études du sommeil.\n" +
        "Situation: chaotique et qui enchaîne\n" +
        "le monde. Une tornade. Un maelström.\n" +
        "Une vie mise sens dessus dessous.\n" +
        "Créature: un Prince des Songes. Des\n" +
        "créatures des rêves. Un mage des\n" +
        "Rêves.\n" +
        "Objet: un artefact magique. Un antique\n" +
        "tapis persan. Un rêve mis en bouteille.",
    ],
    ["LA CRÉATION"]: [
      "La Création représente le pouvoir, divin et\n" +
        "brut, de façonner le monde et de transformer pensées et rêves en quelque chose\n" +
        "d’inspirant.",
      "Individu: un peintre inspiré. Un architecte de renom. La victime d’expérimentations médicales. Un scientifique\n" +
        "fou. Un garçon muet avec des crayons.\n" +
        "Un black métalleux autodestructeur.\n" +
        "Un réalisateur enragé. Un artiste 3D\n" +
        "isolé. Un poète avec une lame de rasoir.\n" +
        "Un danseur de ballet anorexique.\n" +
        "Lieu: un gratte-ciel. Une salle à l’acoustique étrange. Un musée d’art. Un rêve\n" +
        "sans cesse changeant. Un vieux théâtre.\n" +
        "Organisation: une fondation d’art classique. Un collectif artistique. Un gang\n" +
        "de graffeurs. Une maison de disques en\n" +
        "galère.\n" +
        "Situation: une étrange mélodie portée\n" +
        "par le vent. Une exposition artistique.\n" +
        "Créature: une créature artificielle\n" +
        "venue à la vie. Des créatures des\n" +
        "Limbes, à l’agonie, qui survivent grâce\n" +
        "à la beauté.\n" +
        "Objet: une planche à dessin. Une peinture de l’un des grands maîtres. Un\n" +
        "instrument de musique maudit. Un pinceau d’où coule une peinture épaisse.\n" +
        "Une vieille photographie. Une machine\n" +
        "à écrire Olympia SM3 portable",
    ],
    ["LA CHUTE"]: [
      "La Chute fait partie du cycle naturel de\n" +
        "l’effondrement et de l’oblitération des\n" +
        "idées, des structures, des corps, des rêves\n" +
        "et des mondes",
      "Individu: un tueur à gages sans pitié.\n" +
        "Un criminel de guerre. Un avocat qui\n" +
        "démantèle des entreprises. Un terroriste à la bombe. Un censeur fanatique.\n" +
        "Lieu: un bâtiment érodé. Une usine\n" +
        "de traitement des déchets. Un compresseur de voitures. Une décharge.\n" +
        "Un camp de concentration. Un centre\n" +
        "d’avortement.\n" +
        "Organisation: une entreprise de démolition. Une secte de la fin des temps. Un\n" +
        "culte de suicidaires nihilistes.\n" +
        "Situation: une opération de dissimulation. Des informations effacées. Une\n" +
        "mort mise en scène. Un krach boursier.\n" +
        "Un séisme. Un brasier. Une vie ruinée.\n" +
        "Des papiers brûlés. Une explosion.\n" +
        "Créature: un cairath. Quelque chose\n" +
        "qui consume et détruit.\n" +
        "Objet: un bombardier. Un incinérateur.\n" +
        "Un lance-flammes. Une cuve d’acide.\n" +
        "Une masse. Un virus informatique. Un\n" +
        "pistolet utilisé lors d’une guerre.\n",
    ],
    ["LA TRANSFORMATION"]: [
      "La Transformation représente un changement radical et une métamorphose",
      "Individu: un chirurgien plastique qui\n" +
        "mène des expériences. Un adepte de\n" +
        "la méthode Stanislavski. Un maquilleur.\n" +
        "Un urbaniste mégalomane. Un bodmodeur extrême.\n" +
        "Lieu: un cabinet d’architectes-paysagistes.\n" +
        "Un laboratoire de génétique. Une clinique discrète. Un centre de thérapie\n" +
        "de réorientation sexuelle chrétien.\n" +
        "Organisation: un mouvement politique de la base. Des bodmodeurs.\n" +
        "Situation: changer d’avis. Délaisser une\n" +
        "mauvaise habitude. Une maladie en\n" +
        "phase terminale. Transitionner. Un programme gouvernemental. Changer de\n" +
        "visage. Un relooking total. Une fausse\n" +
        "identité assumée.\n" +
        "Créature: un métamorphe.\n" +
        "Objet: un nécessaire de maquillage. Un\n" +
        "cocon. Une boîte à outils. Un seau de\n" +
        "peinture. Un masque de carnaval.",
    ],
    ["LE LIEN"]: [
      "Le Lien relie des structures ou des volontés,\n" +
        "ou il représente ce qui peut gêner ou aider.",
      "Individu: un réparateur cupide. Un\n" +
        "lobbyiste beau parleur. Un technicien\n" +
        "réseau irrité. Une femme fatale et son\n" +
        "harem d’amants. Un contact de rue. Un\n" +
        "électricien fouineur. Un propriétaire de\n" +
        "club charismatique. Un gourou.\n" +
        "Lieu: un archipel. Un petit village. Des\n" +
        "grottes. Un carrefour. Des rails. Un grillage très haut. Un delta.\n" +
        "Organisation: un groupe de pirates\n" +
        "informatiques. Un réseau de cellules\n" +
        "terroristes. Un club de gentlemen. Un\n" +
        "cartel de narcotrafiquants. Une chaîne\n" +
        "de fast-foods. Un cabinet d’avocats.\n" +
        "Situation: une conspiration. Être piégé\n" +
        "et capturé. Être attaché. Se développer.\n" +
        "Créature: un tekron. Un marionnettiste.\n" +
        "Objet: un réseau de serveurs. Un filet\n" +
        "de pêcheur. Une toile d’araignée. Des\n" +
        "menottes. Des lignes électriques. Un\n" +
        "cerveau dans un bocal.",
    ],
    ["LA FUSION"]: [
      "La Fusion représente le mélange d’idées,\n" +
        "de corps et d’esprits. Deux choses se\n" +
        "fondent en une seule.",
      "fondent en une seule.\n" +
        "Individu\n" +
        ": un prêtre au grand cœur. Des\n" +
        "frères siamois. Un responsable de la\n" +
        "branche des acquisitions d’une entre\n" +
        "\n" +
        "prise. Le chef charismatique d’un culte.\n" +
        "Un couple marié qui agit à l’unisson.\n" +
        "Lieu\n" +
        ": un confluent. Deux villes qui se\n" +
        "sont rejointes en s’étendant.\n" +
        "Organisation\n" +
        ": une corporation mondiale.\n" +
        "Situation\n" +
        ": un acte d’amour. Prêter\n" +
        "allégeance à un culte secret. Se fondre\n" +
        "dans le décor. Une minorité intégrée à\n" +
        "une société. Le mythe et la réalité ne\n" +
        "font plus qu’un. La fusion de deux idéo\n" +
        "\n" +
        "logies. Deux personnes se révèlent être\n" +
        "le même individu.\n" +
        "Créature\n" +
        ": un cairath. Un être de la\n" +
        "Passion.\n" +
        "Objet\n" +
        ": deux objets en plastique fondus\n" +
        "l’un dans l’autre. Une croix qui dissi\n" +
        "\n" +
        "mule une lame. Une fiole contenant le\n" +
        "sang de douze enfants.",
    ],
    ["LE REFLET"]: [
      "Le Reflet peut révéler la vérité, tromper ou\n" +
        "refléter une personne ou un lieu.",
      "Individu\n" +
        ": un jumeau. Un médium\n" +
        "trompeur. Un réalisateur amateur. Un\n" +
        "mime travailleur. Un artiste adepte des\n" +
        "performances au seuil du surmenage.\n" +
        "Un parolier honnête. Un comportemen\n" +
        "\n" +
        "taliste cognitif qui pense bien faire.\n" +
        "Lieu\n" +
        ": un étang calme. Un carnaval. Un\n" +
        "palais des glaces. Des rues détrempées\n" +
        "par la pluie. Un cimetière désolé.\n" +
        "Organisation\n" +
        ": un culte dédié à Malk\n" +
        "\n" +
        "uth. Une société de philosophes.\n" +
        "Situation\n" +
        ": un mirage. Une hallucina\n" +
        "\n" +
        "tion. Un éclair de vérité. Un écho du\n" +
        "passé. Une double identité.\n" +
        "Créature\n" +
        ": un doppelgänger.\n" +
        "Objet\n" +
        ": une vitrine. Un miroir. Une image\n" +
        "effacée. Une boule de cristal. Un vieux\n" +
        "kaléidoscope. Un test de Rorschach.",
    ],
    ["LA RÉPÉTITION"]: [
      "La Répétition représente une boucle infi\n" +
        "\n" +
        "nie, un thème récurrent, un sentiment de\n" +
        "déjà-vu ou quelque chose auquel on ne\n" +
        "peut pas échapper",
      "Individu\n" +
        ": un facteur qui lit le courrier.\n" +
        "Une opératrice de téléphone rose. Un\n" +
        "conférencier qui hiverne. Une personne\n" +
        "isolée accro à la télé. Un veilleur de\n" +
        "nuit. Un opérateur de machine à eutha\n" +
        "\n" +
        "nasie volontaire. Un mauvais comique\n" +
        "de stand-up avec seulement deux\n" +
        "bonnes blagues. Un somnambule.\n" +
        "Lieu\n" +
        ": une chapelle de mariage. Un\n" +
        "salon de coiffure et de manucure. Un\n" +
        "bureau gouvernemental. Un club bon\n" +
        "marché présentant le même spectacle\n" +
        "tous les soirs. Un parc d’attractions\n" +
        "dont les slogans et les manèges n’ont\n" +
        "pas bougé en vingt ans.\n" +
        "Organisation\n" +
        ": un groupe de réflexion\n" +
        "conservateur. Une entreprise pharma\n" +
        "\n" +
        "ceutique qui fournit des antidépres\n" +
        "\n" +
        "seurs à la classe moyenne.\n" +
        "Situation\n" +
        ": un groupe qui joue les\n" +
        "mêmes reprises soir après soir. Res\n" +
        "\n" +
        "sasser ses anciens mérites. Raconter\n" +
        "la même histoire encore et encore. Un\n" +
        "déjà-vu. Devoir recommencer la même\n" +
        "procédure.\n" +
        "Créature\n" +
        ": un acrotide. Un tekron. Un\n" +
        "spectre presque dénué de conscience.\n" +
        "Objet\n" +
        ": une roue de hamster. Un manus\n" +
        "\n" +
        "crit refusé. Une boîte à musique qui\n" +
        "joue une mélodie en boucle.",
    ],
    [". L’IMMOBILITÉ"]: [
      "L’Immobilité représente l’apathie, la\n" +
        "tranquillité et une situation qui semble\n" +
        "immuable.",
      "Individu\n" +
        ": un gourou calme et sédui\n" +
        "\n" +
        "sant. Une mère de famille qui a baissé\n" +
        "les bras et fume cigarette sur cigarette.\n" +
        "Un vieux hippie qui ne s’exprime que\n" +
        "par énigmes.\n" +
        "Lieu\n" +
        ": une petite ville endormie sem\n" +
        "\n" +
        "blant gelée dans le temps. Des maisons\n" +
        "de banlieue dans une impasse. Un jar\n" +
        "\n" +
        "din japonais. Une rivière au cours lent\n" +
        "dans une campagne bucolique. Une\n" +
        "ville fantôme. Un drive-in abandonné.\n" +
        "Organisation\n" +
        ": un centre de méditation.\n" +
        "Un centre de recherches qui cartogra\n" +
        "\n" +
        "phie les émotions humaines.\n" +
        "Situation\n" +
        ": un jour calme et tranquille.\n" +
        "Une réunion d’anciens élèves où aucun\n" +
        "d’entre eux n’a changé d’un iota. Un\n" +
        "dîner de famille strict.\n" +
        "Créature\n" +
        ": un dieu perdu qui a oublié sa\n" +
        "nature.\n" +
        "Objet\n" +
        ": des somnifères. Un CD de\n" +
        "musique calme et harmonieuse. Un\n" +
        "tableau représentant un paysage déser\n" +
        "\n" +
        "tique. Un livre présentant au lecteur les\n" +
        "12 étapes pour contrôler son agressi\n" +
        "\n" +
        "vité. Une flûte de pan.",
    ],
    ["L’ÉLYSÉE"]: [
      "L’Élysée est le cœur même de l’Illusion et\n" +
        "de la machinerie complexe qui nous maintient enchaînés.",
      "Individu: un politicien influent. Le\n" +
        "chef du clergé. Un officier miliaire haut\n" +
        "gradé. Le propriétaire d’une entreprise\n" +
        "cotée à plusieurs milliards de dollars.\n" +
        "Un profil médiatique particulièrement\n" +
        "crédible.\n" +
        "Lieu: un bâtiment gouvernemental.\n" +
        "Une cathédrale. Un monument historique. Un territoire occupé. Une capitale religieuse.\n" +
        "Organisation: un culte au sein de\n" +
        "l’armée. Les masses endormies. Une\n" +
        "société secrète au sein des chefs\n" +
        "politiques.\n" +
        "Situation: des valeurs culturelles. Des\n" +
        "réunions de famille. Des traditions et\n" +
        "des jours fériés.\n" +
        "Créature: les licteurs. Les Principes primordiaux. Les Gardiens de l’Illusion.\n" +
        "Objet: un code législatif. La propagande politique. Le drapeau national.\n" +
        "Un bandeau. Un sédatif. Un PDF de la\n" +
        "Constitution américaine",
    ],
    ["L’EMPRISONNEMENT"]: [
      "L’Emprisonnement du corps, de l’âme et de\n" + "l’esprit.",
      "Individu: un officier de police. Un\n" +
        "directeur d’établissement pénitentiaire.\n" +
        "Un proviseur. Un agent secret. Un gardien de prison. Un avocat dévoué. Un\n" +
        "juge sévère.\n" +
        "Lieu: une prison de haute sécurité.\n" +
        "Une cellule de détention. Un lycée. Un\n" +
        "bureau de banque. Un bureau de prêt.\n" +
        "Organisation: les forces de l’ordre. Le\n" +
        "système scolaire. Le système bancaire.\n" +
        "Le système judiciaire.\n" +
        "Situation: des factures à payer. Des\n" +
        "dettes. Être recherché. Être instruit. Être\n" +
        "déclaré ennemi d’état.\n" +
        "Créature: un eldermensch. Les licteurs.\n" +
        "Objet: des menottes. Un fauteuil roulant. Une liste de règles strictes. Des\n" +
        "caméras de surveillance. Un drone de\n" +
        "surveillance. Des diplômes pliés.",
    ],
    ["LA FOI"]: [
      "La Foi représente ce qui donne un but,\n" + "mais aveugle.",
      "Individu: un télévangéliste. Un responsable des relations publiques. Une\n" +
        "mère de famille fascinée. Un athée\n" +
        "convaincu. Un supporter de foot. Un\n" +
        "prêcheur de rue.\n" +
        "Lieu: un temple perdu. Une vieille\n" +
        "église. Un stade. Un monument\n" +
        "grandiose.\n" +
        "Organisation: une secte religieuse. Un\n" +
        "groupe marxiste. Une cellule terroriste.\n" +
        "Situation: une cérémonie. Un événement sportif. Une prière. Un rituel de\n" +
        "purification. Un don d’argent.\n" +
        "Créature: les anges de Chokmah.\n" +
        "Objet: un clou rouillé de la Sainte Croix.\n" +
        "Des vêtements religieux. Une épingle\n" +
        "en cuivre. Une affiche de propagande\n" +
        "de Vladimir Poutine. La première édition originale de L’Origine des espèces de\n" +
        "Charles Darwin.",
    ],
    [" LES DISTRACTIONS"]: [
      "Les Distractions représentent ce qui, dans\n" +
        "la vie quotidienne, cache la Vérité aux\n" +
        "yeux de tous.",
      "Individu: un vendeur téléphonique\n" +
        "importun. L’ado canon de la porte d’à\n" +
        "côté. Un marchand ambulant. Une célébrité internet charismatique. Un acteur\n" +
        "célèbre. Un voisin trop porté sur les\n" +
        "potins.\n" +
        "Lieu: un cinéma. Un centre commercial. Un complexe de vacances. Un club\n" +
        "de striptease.\n" +
        "Organisation: une agence de publicité.\n" +
        "Une maison de couture. Une chaîne de\n" +
        "fast-food.\n" +
        "Situation: un scandale sur les réseaux\n" +
        "sociaux. Des émissions de télé. Les\n" +
        "journaux. Les podcasts. Les diffusions\n" +
        "en direct sur Twitch. Les publicités. Les\n" +
        "appels téléphoniques. Les bruits soudains. La panique morale. Les dîners de\n" +
        "famille. Les discussions politiques.\n" +
        "Créature: un mancipium. Une créature\n" +
        "de la Passion. Quelque chose qui se fait\n" +
        "passer pour un humain ordinaire. Une\n" +
        "créature de la Folie. Les serviteurs de\n" +
        "Tiphareth.\n" +
        "Objet: un smartphone. Les jeux vidéo.\n" +
        "Les forums internet. Le porno. Les\n" +
        "affiches publicitaires. L’alcool bon marché. Les magazines de remise en forme.",
    ],
    ["LA DIVISION"]: [
      "La Division représente ce qui nous occupe\n" +
        "par des luttes incessantes",
      "Individu: un agitateur en ligne. Un\n" +
        "membre de l’alt-right. Un homme qui\n" +
        "hait les féministes. Un imam salafiste.\n" +
        "Un étudiant bien-pensant. Un nationaliste extrémiste. Un psychologue\n" +
        "conservateur. Un écrivain que l’on\n" +
        "évite. Un négationniste.\n" +
        "Lieu: les réseaux sociaux. Les forums\n" +
        "en ligne. YouTube. Une cache en soussol. Un lieu de rendez-vous discret. Des\n" +
        "salles de conférence.\n" +
        "Organisation: une minorité ethnique.\n" +
        "L’extrême droite. Un groupe de harceleurs en ligne. Des conspirationnistes.\n" +
        "Situation: un meeting politique. Le harcèlement. Des menaces de mort. Un\n" +
        "incendie volontaire. Un discours haineux. Des débats enflammés.\n" +
        "Créature: les serviteurs d’Hareb-Serap\n" +
        "et de Gamichicoth.\n" +
        "Objet: une propagande haineuse. Des\n" +
        "pamphlets racistes. Le SCUM manifesto.\n" +
        "Une chanson provocante sur Spotify.\n" +
        "Un essai sur Foucault. Un dessin qui se\n" +
        "moque d’un prophète religieux.\n",
    ],
    ["LA RÉBELLION"]: [
      "La Rébellion et la lutte contre l’ordre\n" + "établi.",
      "Individu\n" +
        ": un solitaire têtu. Un ado\n" +
        "\n" +
        "lescent rebelle. Un criminel. Un chef\n" +
        "politique charismatique. Un chef de la\n" +
        "mafia. Un néonazi violent. Un membre\n" +
        "de gang. Un critique YouTube. Un pirate\n" +
        "informatique. Un anarchiste.\n" +
        "Lieu\n" +
        ": une maison occupée. Un club\n" +
        "secret. La demeure d’un survivaliste.\n" +
        "Une planque. Un bar à l’extérieur de la\n" +
        "ville.\n" +
        "Organisation\n" +
        ": des guérilleros. Un\n" +
        "groupe de punk. Un groupe d’extré\n" +
        "\n" +
        "mistes. Un mouvement de défense des\n" +
        "animaux.\n" +
        "Situation\n" +
        ": une révolution. Une émeute.\n" +
        "Un concert. Un meeting politique. Une\n" +
        "manifestation.\n" +
        "Créature\n" +
        ": les anges de Malkuth. Un\n" +
        "azghoul.\n" +
        "Objet\n" +
        ": un pamphlet de propagande.\n" +
        "Une bombe de peinture. Un manifeste\n" +
        "communiste. Une lettre de menaces.\n" +
        "Des bottes coquées. Une affiche.",
    ],
    ["LA FOLIE"]: [
      "La Folie représente ce qui vous submerge\n" +
        "et vous déchire, mais qui peut aussi\n" +
        "octroyer une certaine compréhension.",
      "Individu\n" +
        ": un patient bouleversé. Un\n" +
        "ordonné sadique. Un jazzman qui se\n" +
        "fait des idées. Une fille gardée cachée.\n" +
        "Un garçon dépourvu de bouche. Un\n" +
        "mathématicien aux yeux fous. Un\n" +
        "vétérinaire qui mène de cruelles\n" +
        "expériences.\n" +
        "Lieu\n" +
        ": un hôpital psychiatrique. Une cel\n" +
        "\n" +
        "lule d’isolement. Une maison décrépite.\n" +
        "Un appartement dont le papier peint\n" +
        "est arraché.\n" +
        "Organisation\n" +
        ": les Fous. Un institut de\n" +
        "psychologie. Une secte dans un parc\n" +
        "pour caravanes.\n" +
        "Situation\n" +
        ": la psychose. Une dépres\n" +
        "\n" +
        "sion sévère. La schizophrénie. Le TSPT.\n" +
        "L’anxiété. Des attaques de panique.\n" +
        "La névrose. La paranoïa. Une attitude\n" +
        "agressive. Des personnalités multiples.\n" +
        "Un effet de meute. Des hallucinations\n" +
        "collectives.\n" +
        "Créature\n" +
        ": une créature de la Folie.\n" +
        "Objet\n" +
        ": une poupée à moitié brûlée.\n" +
        "Le journal d’un patient. Des drogues\n" +
        "pharmaceutiques. Une camisole. Des\n" +
        "gribouillages sur le plan d’une ville.\n" +
        "Des symboles brûlés sur de la chair\n" +
        "humaine. Des notes cachées dans\n" +
        "un livre sur l’hystérie féminine. Une\n" +
        "enveloppe contenant 10 capsules de\n" +
        "bouteille.",
    ],
    ["LES VISIONS"]: [
      "Les Visions représentent ce qui peut ame\n" +
        "\n" +
        "ner de la compréhension, mais aussi ce qui\n" +
        "peut écarter de la vérité.",
      "Individu\n" +
        ": un oracle de banlieue. Un\n" +
        "prophète autoproclamé. Un architecte\n" +
        "inspiré. Un vidéaste excentrique. Le\n" +
        "PDG d’une entreprise de support infor\n" +
        "\n" +
        "matique à la croissance rapide. Un\n" +
        "patient dément.\n" +
        "Lieu\n" +
        ": un vieux temple. Un carnaval. Une\n" +
        "fumerie d’opium brumeuse. Un asile.\n" +
        "Un club de techno. Un graffiti dans un\n" +
        "parking.\n" +
        "Organisation\n" +
        ": des interprètes des\n" +
        "rêves. Des pèlerins.\n" +
        "Situation\n" +
        ": des visions cauchemardes\n" +
        "\n" +
        "ques. Une perspicacité exceptionnelle.\n" +
        "Une prophétie. Des yeux exorbités. Des\n" +
        "rumeurs qui propagent la Vérité.\n" +
        "Créature\n" +
        ": un être né des cauchemars et\n" +
        "des visions. Un augure.\n" +
        "Objet\n" +
        ": une caméra Super 8. Du LSD. Un\n" +
        "pot en ter",
    ],
    [" L’ILLUMINATION"]: [
      "La route qui mène l’Illumination et à\n" + "l’Éveil.",
      "Individu\n" +
        ": un philosophe amateur. Un\n" +
        "sorcier. Un technicien futé. Un bodmo\n" +
        "\n" +
        "deur dévoué à sa passion. Un scienti\n" +
        "\n" +
        "fique sur le point de faire une décou\n" +
        "\n" +
        "verte. Un sans-abri qui vit sous un pont.\n" +
        "Un étudiant. Un patron de bar ouvert\n" +
        "d’esprit.\n" +
        "Lieu\n" +
        ": une route vers l’inconnu. Un esca\n" +
        "\n" +
        "lier en colimaçon. Un laboratoire de\n" +
        "haute technologie. Une université.\n" +
        "Organisation\n" +
        ": un culte au service de\n" +
        "Malkuth. Un centre de recherches. Un\n" +
        "cabinet d’architecture.\n" +
        "Situation\n" +
        ": un rite initiatique. Un salon\n" +
        "scientifique. Une rencontre de secte.\n" +
        "Créature\n" +
        ": les Enfants de la Nuit. Un\n" +
        "humain Éveillé. Amentoraz.\n" +
        "Objet\n" +
        ": une carte d’origine inconnue.\n" +
        "Une vieille disquette. Un journal intime\n" +
        "couvert de gribouillages déments.\n" +
        "Un blog oublié. Une échelle. Une\n" +
        "lampe-torche.",
    ],
  };
  return cart;
});
