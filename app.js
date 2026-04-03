/* حقوق الإنسان — HUMAN RIGHTS IN ISLAM — app.js v2.0 */
/* Based on "Huquq al-Insan" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'حقوق الإنسان',
    splashSub: 'حقوق الإنسان بين الإسلام والأمم المتحدة',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الإسراء ١٧: ٧٠',
    tabHome: 'الرئيسية', tabTraits: 'الحقوق', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    traitsTitle: 'حقوق الإنسان',
    traitsDesc: '١٥ حقاً من حقوق الإنسان — مقارنة بين الرؤية الإسلامية والإعلان العالمي',
    quizTitle: '🏆 من سيصبح حقوقياً؟',
    quizDesc: 'اختبر معلوماتك عن حقوق الإنسان — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي الحقوقية',
    progressDesc: 'تقدمك وإنجازاتك في رحلة حقوق الإنسان',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية العدل والحقوق',
    dailyLabel: '✨ حق اليوم',
    searchPlaceholder: 'ابحث في الحقوق...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '١٥ حقاً من حقوق الإنسان في الإسلام',
      'مسابقة "من سيصبح حقوقياً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'Human Rights in Islam',
    splashSub: 'Human rights: Islam vs the Universal Declaration',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Isra 17:70',
    tabHome: 'Home', tabTraits: 'Rights', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    traitsTitle: 'Human Rights',
    traitsDesc: '15 human rights — comparing Islamic vision with the Universal Declaration',
    quizTitle: '🏆 Who Wants to Be a Rights Champion?',
    quizDesc: 'Test your knowledge of human rights — 4 choices per question',
    progressTitle: 'My Rights Journey',
    progressDesc: 'Your progress and achievements in the human rights journey',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Justice and Rights',
    dailyLabel: "✨ Today's Right",
    searchPlaceholder: 'Search rights...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 human rights in Islam',
      '"Who Wants to Be a Rights Champion?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: "Droits de l'Homme en Islam",
    splashSub: "Droits de l'homme : Islam vs Declaration Universelle",
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Isra 17:70',
    tabHome: 'Accueil', tabTraits: 'Droits', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    traitsTitle: "Droits de l'Homme",
    traitsDesc: "15 droits de l'homme — comparaison entre la vision islamique et la Declaration Universelle",
    quizTitle: '🏆 Qui Veut Devenir Champion des Droits ?',
    quizDesc: "Testez vos connaissances sur les droits de l'homme — 4 choix par question",
    progressTitle: 'Mon Parcours des Droits',
    progressDesc: "Vos progres dans le parcours des droits de l'homme",
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour la Justice',
    dailyLabel: '✨ Droit du Jour',
    searchPlaceholder: 'Rechercher les droits...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Experience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉',
    wrong: 'Reessayez la prochaine fois 💪',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Perseverant',
    badge_expert: 'Expert',
    splashFeatures: [
      "15 droits de l'homme en Islam",
      'Quiz « Qui Veut Devenir Champion des Droits ? » avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 15 HUMAN RIGHTS DATA ═══════════════
const TRAITS = [
  {
    id:1, emoji:'🛡️',
    ar:{title:'حق الحياة',desc:'حرّم الإسلام قتل النفس البريئة وجعله من أعظم الكبائر. من قتل نفساً بغير حق فكأنما قتل الناس جميعاً. الإسلام سبق الإعلان العالمي بـ١٤ قرناً في تقديس الحياة البشرية.',verse:'مَنْ قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا',verseRef:'المائدة ٣٢',hadith:'لزوال الدنيا أهون على الله من قتل مؤمن بغير حق — رواه النسائي',action:'احترم حياة كل إنسان اليوم — حتى من يختلف معك في الرأي أو المعتقد',young:'كل إنسان حياته غالية ومقدسة! لا يحق لأحد أن يؤذي أحداً 🛡️'},
    en:{title:'Right to Life',desc:'Islam forbade killing an innocent soul and made it one of the greatest sins. Whoever kills a soul unjustly, it is as if they killed all of mankind. Islam preceded the Universal Declaration by 14 centuries in sanctifying human life.',verse:'Whoever kills a soul unless for a soul or for corruption in the land — it is as if they killed all of mankind',verseRef:'Al-Maidah 32',hadith:'The disappearance of the world is less significant to Allah than the killing of a believer without right — Nasai',action:'Respect every human life today — even those who disagree with you in opinion or belief',young:'Every person\'s life is precious and sacred! No one has the right to hurt anyone 🛡️'},
    fr:{title:'Droit a la Vie',desc:"L'Islam a interdit le meurtre d'une ame innocente et en a fait l'un des plus grands peches. Quiconque tue une ame injustement, c'est comme s'il avait tue toute l'humanite.",verse:"Quiconque tue une ame sans raison — c'est comme s'il avait tue toute l'humanite",verseRef:'Al-Maidah 32',hadith:'La disparition du monde est moins grave pour Allah que le meurtre d\'un croyant sans droit — Nasai',action:"Respectez la vie de chaque etre humain aujourd'hui",young:'La vie de chaque personne est precieuse et sacree ! Personne n\'a le droit de blesser quiconque 🛡️'}
  },
  {
    id:2, emoji:'🕊️',
    ar:{title:'حرية العقيدة',desc:'لا إكراه في الدين — هذا مبدأ قرآني صريح. الإسلام يحترم حرية الإنسان في اختيار عقيدته. الإيمان الحقيقي لا يكون إلا عن اقتناع وحرية كاملة لا عن إجبار.',verse:'لَا إِكْرَاهَ فِي الدِّينِ قَدْ تَبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ',verseRef:'البقرة ٢٥٦',hadith:'من شاء فليؤمن ومن شاء فليكفر — تفسير آية الكهف ٢٩',action:'احترم معتقدات الآخرين اليوم حتى لو اختلفت معهم — الحوار أفضل من الإجبار',young:'كل إنسان حر في ما يؤمن به! لا نجبر أحداً — بل نحاوره بالتي هي أحسن 🕊️'},
    en:{title:'Freedom of Belief',desc:'There is no compulsion in religion — this is an explicit Quranic principle. Islam respects the human freedom to choose their belief. True faith can only come from conviction and complete freedom, not coercion.',verse:'There is no compulsion in religion. The right path has become clear from the wrong',verseRef:'Al-Baqarah 256',hadith:'Whoever wills, let them believe, and whoever wills, let them disbelieve — Commentary on Al-Kahf 29',action:'Respect others\' beliefs today even if you disagree — dialogue is better than coercion',young:'Every person is free in what they believe! We don\'t force anyone — we talk to them nicely 🕊️'},
    fr:{title:'Liberte de Croyance',desc:"Pas de contrainte en religion — c'est un principe coranique explicite. L'Islam respecte la liberte humaine de choisir sa croyance. La vraie foi ne vient que de la conviction et de la liberte complete.",verse:'Nulle contrainte en religion. Le bon chemin s\'est distingue de l\'egarement',verseRef:'Al-Baqarah 256',hadith:'Quiconque veut, qu\'il croie, et quiconque veut, qu\'il mecroie — Commentaire d\'Al-Kahf 29',action:"Respectez les croyances des autres aujourd'hui — le dialogue est meilleur que la contrainte",young:'Chaque personne est libre dans ce qu\'elle croit ! On ne force personne — on dialogue gentiment 🕊️'}
  },
  {
    id:3, emoji:'👑',
    ar:{title:'الكرامة الإنسانية',desc:'كرّم الله بني آدم وفضّلهم على كثير من المخلوقات. هذه الكرامة لكل إنسان بصرف النظر عن لونه أو دينه أو جنسه. الإسلام أعلن كرامة الإنسان قبل أي ميثاق دولي.',verse:'وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ وَحَمَلْنَاهُمْ فِي الْبَرِّ وَالْبَحْرِ',verseRef:'الإسراء ٧٠',hadith:'كلكم لآدم وآدم من تراب — رواه الترمذي',action:'عامل كل إنسان تقابله اليوم بكرامة واحترام — من العامل إلى المدير',young:'كل إنسان مكرّم عند الله! عامل الجميع باحترام ولا تحتقر أحداً 👑'},
    en:{title:'Human Dignity',desc:'Allah honored the children of Adam and preferred them over many of His creations. This dignity belongs to every human regardless of color, religion, or gender. Islam declared human dignity before any international charter.',verse:'And We have certainly honored the children of Adam and carried them on land and sea',verseRef:'Al-Isra 70',hadith:'All of you are from Adam and Adam is from dust — Tirmidhi',action:'Treat every person you meet today with dignity and respect — from the worker to the manager',young:'Every person is honored by Allah! Treat everyone with respect and never look down on anyone 👑'},
    fr:{title:'Dignite Humaine',desc:"Allah a honore les enfants d'Adam et les a preferes a beaucoup de Ses creatures. Cette dignite appartient a chaque humain peu importe sa couleur, religion ou genre.",verse:"Et Nous avons certes honore les enfants d'Adam et les avons portes sur terre et sur mer",verseRef:'Al-Isra 70',hadith:'Vous etes tous d\'Adam et Adam est de poussiere — Tirmidhi',action:"Traitez chaque personne avec dignite et respect aujourd'hui",young:'Chaque personne est honoree par Allah ! Traite tout le monde avec respect 👑'}
  },
  {
    id:4, emoji:'⚖️',
    ar:{title:'المساواة',desc:'الناس سواسية كأسنان المشط. لا فرق بين عربي وأعجمي ولا أبيض وأسود إلا بالتقوى. الإسلام حارب العنصرية قبل أي حركة حقوقية في التاريخ.',verse:'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُمْ مِنْ ذَكَرٍ وَأُنْثَى',verseRef:'الحجرات ١٣',hadith:'لا فضل لعربي على أعجمي ولا لأبيض على أسود إلا بالتقوى — رواه أحمد',action:'عامل كل من تقابله بالمساواة اليوم بصرف النظر عن لونه أو جنسيته أو طبقته',young:'كل الناس متساوون! لا فرق بين غني وفقير أو أبيض وأسود — الجميع سواء ⚖️'},
    en:{title:'Equality',desc:'People are equal like the teeth of a comb. There is no superiority of Arab over non-Arab or white over black except in piety. Islam fought racism before any rights movement in history.',verse:'O mankind, We have created you from a male and a female',verseRef:'Al-Hujurat 13',hadith:'There is no superiority of Arab over non-Arab or white over black except in piety — Ahmad',action:'Treat everyone equally today regardless of their color, nationality, or social class',young:'All people are equal! No difference between rich and poor or black and white — everyone is the same ⚖️'},
    fr:{title:'Egalite',desc:"Les gens sont egaux comme les dents d'un peigne. Pas de superiorite d'un Arabe sur un non-Arabe sauf par la piete. L'Islam a combattu le racisme avant tout mouvement de droits.",verse:"O humanite, Nous vous avons crees d'un male et d'une femelle",verseRef:'Al-Hujurat 13',hadith:'Pas de superiorite d\'un Arabe sur un non-Arabe sauf par la piete — Ahmad',action:"Traitez tout le monde de maniere egale aujourd'hui",young:'Tous les gens sont egaux ! Pas de difference entre riche et pauvre — tout le monde est pareil ⚖️'}
  },
  {
    id:5, emoji:'📚',
    ar:{title:'حق التعليم',desc:'طلب العلم فريضة على كل مسلم ومسلمة. الإسلام جعل التعليم حقاً لكل إنسان وفريضة لا خياراً. الجهل عدو الإنسانية والعلم أساس التقدم والحضارة.',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'الزمر ٩',hadith:'طلب العلم فريضة على كل مسلم — رواه ابن ماجه',action:'تعلم شيئاً جديداً اليوم وعلّم غيرك ما تعرفه — فالعلم يزداد بالإنفاق',young:'التعلم حق لكل إنسان! تعلم كل يوم شيئاً جديداً وساعد أصدقاءك في الدراسة 📚'},
    en:{title:'Right to Education',desc:'Seeking knowledge is an obligation upon every Muslim, male and female. Islam made education a right for every human and an obligation, not a choice. Ignorance is the enemy of humanity and knowledge is the foundation of progress.',verse:'Say: Are those who know equal to those who do not know?',verseRef:'Az-Zumar 9',hadith:'Seeking knowledge is an obligation upon every Muslim — Ibn Majah',action:'Learn something new today and teach someone else what you know — knowledge grows by sharing',young:'Learning is a right for every person! Learn something new every day and help your friends study 📚'},
    fr:{title:"Droit a l'Education",desc:"La quete du savoir est une obligation pour chaque musulman et musulmane. L'Islam a fait de l'education un droit pour chaque humain et une obligation. L'ignorance est l'ennemi de l'humanite.",verse:'Dis : Sont-ils egaux, ceux qui savent et ceux qui ne savent pas ?',verseRef:'Az-Zumar 9',hadith:'La quete du savoir est une obligation pour chaque musulman — Ibn Majah',action:"Apprenez quelque chose de nouveau aujourd'hui et enseignez aux autres",young:"L'apprentissage est un droit pour tous ! Apprends chaque jour et aide tes amis a etudier 📚"}
  },
  {
    id:6, emoji:'🏛️',
    ar:{title:'حق العدالة',desc:'العدل أساس الحكم في الإسلام. يجب العدل مع الصديق والعدو، مع المسلم وغير المسلم. الظلم ظلمات يوم القيامة والعدل نور.',verse:'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ',verseRef:'النحل ٩٠',hadith:'اتقوا الظلم فإن الظلم ظلمات يوم القيامة — رواه مسلم',action:'كن عادلاً اليوم في كل قراراتك — لا تحكم على أحد قبل أن تسمع كل الأطراف',young:'كن عادلاً مع الجميع! لا تظلم أحداً حتى لو كان عدوك — العدل أساس كل شيء 🏛️'},
    en:{title:'Right to Justice',desc:'Justice is the foundation of governance in Islam. Justice must be applied with friend and foe, Muslim and non-Muslim alike. Injustice is darkness on the Day of Judgment while justice is light.',verse:'Indeed, Allah commands justice and excellence',verseRef:'An-Nahl 90',hadith:'Beware of injustice, for it will be darkness on the Day of Judgment — Muslim',action:'Be just today in all your decisions — do not judge anyone before hearing all sides',young:'Be fair with everyone! Never be unfair to anyone even if they are your enemy — justice is the foundation of everything 🏛️'},
    fr:{title:'Droit a la Justice',desc:"La justice est le fondement de la gouvernance en Islam. La justice doit etre appliquee avec l'ami et l'ennemi, le musulman et le non-musulman.",verse:'Allah ordonne la justice et la bienfaisance',verseRef:'An-Nahl 90',hadith:'Gardez-vous de l\'injustice car elle sera des tenebres au Jour du Jugement — Muslim',action:"Soyez juste aujourd'hui dans toutes vos decisions",young:'Sois juste avec tout le monde ! Ne sois jamais injuste — la justice est la base de tout 🏛️'}
  },
  {
    id:7, emoji:'🗣️',
    ar:{title:'حرية التعبير',desc:'الإسلام يكفل حرية التعبير المسؤولة. أفضل الجهاد كلمة حق عند سلطان جائر. لكن هذه الحرية مقيدة بعدم الإساءة والكذب والتحريض على العنف.',verse:'وَقُولُوا لِلنَّاسِ حُسْنًا',verseRef:'البقرة ٨٣',hadith:'أفضل الجهاد كلمة حق عند سلطان جائر — رواه أبو داود',action:'قل الحق اليوم بأدب واحترام — عبّر عن رأيك دون إساءة للآخرين',young:'لك الحق أن تقول رأيك! لكن بأدب واحترام — الكلمة الطيبة صدقة 🗣️'},
    en:{title:'Freedom of Expression',desc:'Islam guarantees responsible freedom of expression. The best jihad is a word of truth before a tyrannical ruler. But this freedom is bounded by not causing harm, lying, or inciting violence.',verse:'And speak to people with good words',verseRef:'Al-Baqarah 83',hadith:'The best jihad is a word of truth before a tyrannical ruler — Abu Dawud',action:'Speak the truth today with courtesy and respect — express your opinion without offending others',young:'You have the right to say your opinion! But with kindness and respect — a good word is charity 🗣️'},
    fr:{title:"Liberte d'Expression",desc:"L'Islam garantit la liberte d'expression responsable. Le meilleur jihad est une parole de verite devant un dirigeant tyrannique. Mais cette liberte est limitee par le respect d'autrui.",verse:'Et dites aux gens de bonnes paroles',verseRef:'Al-Baqarah 83',hadith:'Le meilleur jihad est une parole de verite devant un dirigeant tyrannique — Abu Dawud',action:"Dites la verite aujourd'hui avec courtoisie — exprimez votre opinion sans offenser",young:"Tu as le droit de dire ton opinion ! Mais avec gentillesse et respect 🗣️"}
  },
  {
    id:8, emoji:'🏠',
    ar:{title:'حق الخصوصية',desc:'حرّم الإسلام التجسس والتنصت والدخول على الناس بغير إذن. البيوت لها حرمة ولا يجوز انتهاكها. حق الخصوصية مكفول في الإسلام قبل أي قانون وضعي.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَدْخُلُوا بُيُوتًا غَيْرَ بُيُوتِكُمْ حَتَّى تَسْتَأْنِسُوا وَتُسَلِّمُوا عَلَى أَهْلِهَا',verseRef:'النور ٢٧',hadith:'لو أن رجلاً اطلع عليك بغير إذن فحذفته بحصاة ففقأت عينه ما كان عليك جناح — متفق عليه',action:'احترم خصوصية الآخرين اليوم — لا تتجسس ولا تقرأ رسائل غيرك ولا تنشر أسرارهم',young:'احترم خصوصية الآخرين! لا تقرأ رسائلهم ولا تدخل غرفتهم بدون إذن 🏠'},
    en:{title:'Right to Privacy',desc:'Islam forbade spying, eavesdropping, and entering people\'s homes without permission. Homes have sanctity that must not be violated. The right to privacy is guaranteed in Islam before any man-made law.',verse:'O you who believe, do not enter houses other than your own until you have asked permission and greeted their inhabitants',verseRef:'An-Nur 27',hadith:'If a person looked into your home without permission and you threw a pebble that blinded them, there is no blame on you — Agreed upon',action:'Respect others\' privacy today — do not spy, read others\' messages, or share their secrets',young:'Respect others\' privacy! Do not read their messages or enter their room without permission 🏠'},
    fr:{title:'Droit a la Vie Privee',desc:"L'Islam a interdit l'espionnage et l'entree chez les gens sans permission. Les maisons ont une sanctite qui ne doit pas etre violee.",verse:"O vous qui croyez, n'entrez pas dans des maisons autres que les votres sans demander permission",verseRef:'An-Nur 27',hadith:'Si quelqu\'un regarde chez vous sans permission et que vous lui lancez un caillou, pas de blame — Unanimement reconnu',action:"Respectez la vie privee des autres aujourd'hui — ne lisez pas leurs messages et ne partagez pas leurs secrets",young:'Respecte la vie privee des autres ! Ne lis pas leurs messages et ne rentre pas sans permission 🏠'}
  },
  {
    id:9, emoji:'💰',
    ar:{title:'حق الملكية',desc:'كفل الإسلام حق الملكية الخاصة وحرّم الاعتداء على أموال الناس. لا يحل مال امرئ مسلم إلا بطيب نفس منه. السرقة والغش والاحتيال من الكبائر.',verse:'وَلَا تَأْكُلُوا أَمْوَالَكُمْ بَيْنَكُمْ بِالْبَاطِلِ',verseRef:'البقرة ١٨٨',hadith:'لا يحل مال امرئ مسلم إلا بطيب نفس منه — رواه أحمد',action:'لا تأخذ شيئاً ليس لك اليوم — واحترم ممتلكات الآخرين',young:'لا تأخذ شيئاً ليس لك! احترم ممتلكات الآخرين واستأذن قبل استعارة أي شيء 💰'},
    en:{title:'Right to Property',desc:'Islam guaranteed the right to private property and forbade taking people\'s wealth unjustly. No Muslim\'s property is lawful except with their willing consent. Theft, fraud, and deception are major sins.',verse:'And do not consume one another\'s wealth unjustly',verseRef:'Al-Baqarah 188',hadith:'No Muslim\'s property is lawful except with their willing consent — Ahmad',action:'Do not take anything that is not yours today — and respect others\' belongings',young:'Don\'t take anything that isn\'t yours! Respect others\' belongings and ask before borrowing 💰'},
    fr:{title:'Droit a la Propriete',desc:"L'Islam a garanti le droit a la propriete privee et interdit de prendre les biens des gens injustement.",verse:'Et ne consommez pas vos biens entre vous injustement',verseRef:'Al-Baqarah 188',hadith:'Les biens d\'un musulman ne sont licites qu\'avec son consentement — Ahmad',action:"Ne prenez rien qui ne vous appartient pas aujourd'hui — respectez les biens des autres",young:'Ne prends rien qui ne t\'appartient pas ! Respecte les affaires des autres et demande avant d\'emprunter 💰'}
  },
  {
    id:10, emoji:'💼',
    ar:{title:'حق العمل',desc:'العمل حق وواجب في الإسلام. اليد العليا خير من اليد السفلى. الإسلام يكرم العامل ويأمر بإعطائه أجره قبل أن يجف عرقه.',verse:'فَإِذَا قُضِيَتِ الصَّلَاةُ فَانْتَشِرُوا فِي الْأَرْضِ وَابْتَغُوا مِنْ فَضْلِ اللَّهِ',verseRef:'الجمعة ١٠',hadith:'أعطوا الأجير أجره قبل أن يجف عرقه — رواه ابن ماجه',action:'إذا كنت تعمل، أتقن عملك اليوم — وإذا كنت مسؤولاً فأعطِ العمال حقوقهم',young:'كل إنسان له الحق في العمل! وكل عامل يستحق أجره — لا تؤخر حق أحد 💼'},
    en:{title:'Right to Work',desc:'Work is both a right and duty in Islam. The upper hand is better than the lower hand. Islam honors workers and commands that they be paid before their sweat dries.',verse:'When the prayer is concluded, disperse in the land and seek from the bounty of Allah',verseRef:'Al-Jumuah 10',hadith:'Give the worker their wages before their sweat dries — Ibn Majah',action:'If you work, perfect your work today — if you are responsible, give workers their rights',young:'Every person has the right to work! And every worker deserves their pay — never delay anyone\'s right 💼'},
    fr:{title:'Droit au Travail',desc:"Le travail est un droit et un devoir en Islam. L'Islam honore les travailleurs et ordonne qu'ils soient payes avant que leur sueur ne seche.",verse:'Quand la priere est accomplie, dispersez-vous sur la terre et recherchez la grace d\'Allah',verseRef:'Al-Jumuah 10',hadith:'Donnez au travailleur son salaire avant que sa sueur ne seche — Ibn Majah',action:"Si vous travaillez, perfectionnez votre travail — si vous etes responsable, donnez aux travailleurs leurs droits",young:'Chaque personne a le droit de travailler ! Et chaque travailleur merite son salaire 💼'}
  },
  {
    id:11, emoji:'🌍',
    ar:{title:'حق اللجوء',desc:'كفل الإسلام حق اللجوء والأمان لمن يطلبه. المستجير يُجار حتى يسمع كلام الله ثم يُبلّغ مأمنه. المدينة المنورة كانت ملجأ للمهاجرين الفارين من الاضطهاد.',verse:'وَإِنْ أَحَدٌ مِنَ الْمُشْرِكِينَ اسْتَجَارَكَ فَأَجِرْهُ حَتَّى يَسْمَعَ كَلَامَ اللَّهِ',verseRef:'التوبة ٦',hadith:'المسلم من سلم المسلمون من لسانه ويده — متفق عليه',action:'ساعد اللاجئين والمحتاجين من حولك — حتى لو بكلمة طيبة أو ابتسامة',young:'ساعد كل من يحتاج مساعدة! إذا لجأ إليك أحد فساعده وكن كريماً معه 🌍'},
    en:{title:'Right to Asylum',desc:'Islam guaranteed the right to asylum and safety for those who seek it. The one seeking refuge is granted protection until they hear the word of Allah, then they are delivered to their place of safety. Madinah was a refuge for migrants fleeing persecution.',verse:'And if any of the polytheists seeks your protection, grant them protection so they may hear the word of Allah',verseRef:'At-Tawbah 6',hadith:'A Muslim is one from whom people are safe from their tongue and hand — Agreed upon',action:'Help refugees and those in need around you — even with a kind word or a smile',young:'Help everyone who needs help! If someone comes to you for refuge, help them and be generous 🌍'},
    fr:{title:"Droit d'Asile",desc:"L'Islam a garanti le droit d'asile et de securite pour ceux qui le demandent. Medine etait un refuge pour les migrants fuyant la persecution.",verse:'Si un polytheiste te demande protection, accorde-la lui pour qu\'il entende la parole d\'Allah',verseRef:'At-Tawbah 6',hadith:'Le musulman est celui dont les gens sont en securite de sa langue et de sa main — Unanimement reconnu',action:"Aidez les refugies et les necessiteux autour de vous",young:'Aide tous ceux qui ont besoin d\'aide ! Si quelqu\'un te demande refuge, aide-le genereusement 🌍'}
  },
  {
    id:12, emoji:'👨‍👩‍👧‍👦',
    ar:{title:'حماية الأسرة',desc:'الأسرة نواة المجتمع في الإسلام. كفل الإسلام حقوق الزوجين والأبناء والآباء. الأسرة المتماسكة أساس المجتمع القوي. حرّم الإسلام كل ما يهدد كيان الأسرة.',verse:'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا',verseRef:'الروم ٢١',hadith:'خيركم خيركم لأهله وأنا خيركم لأهلي — رواه الترمذي',action:'أحسن إلى أسرتك اليوم — قل كلمة طيبة لوالديك وساعد إخوتك',young:'الأسرة أهم شيء! أحب والديك وإخوتك وكن لطيفاً معهم كل يوم 👨‍👩‍👧‍👦'},
    en:{title:'Family Protection',desc:'The family is the nucleus of society in Islam. Islam guaranteed the rights of spouses, children, and parents. A strong family is the foundation of a strong society. Islam forbade everything that threatens the family unit.',verse:'And among His signs is that He created for you spouses from among yourselves that you may find tranquility in them',verseRef:'Ar-Rum 21',hadith:'The best of you are those who are best to their families, and I am the best to my family — Tirmidhi',action:'Be good to your family today — say kind words to your parents and help your siblings',young:'Family is the most important thing! Love your parents and siblings and be kind to them every day 👨‍👩‍👧‍👦'},
    fr:{title:'Protection de la Famille',desc:"La famille est le noyau de la societe en Islam. L'Islam a garanti les droits des epoux, des enfants et des parents. Une famille forte est le fondement d'une societe forte.",verse:'Et parmi Ses signes, Il a cree pour vous des epouses pour que vous trouviez la tranquillite',verseRef:'Ar-Rum 21',hadith:'Les meilleurs d\'entre vous sont les meilleurs envers leurs familles — Tirmidhi',action:"Soyez bon envers votre famille aujourd'hui — dites de bonnes paroles a vos parents",young:'La famille est la chose la plus importante ! Aime tes parents et tes freres et soeurs 👨‍👩‍👧‍👦'}
  },
  {
    id:13, emoji:'🗳️',
    ar:{title:'المشاركة السياسية',desc:'الشورى مبدأ أساسي في الحكم الإسلامي. الأمر بالمعروف والنهي عن المنكر واجب على كل مسلم. المشاركة في الشأن العام حق وواجب لبناء مجتمع عادل.',verse:'وَأَمْرُهُمْ شُورَى بَيْنَهُمْ',verseRef:'الشورى ٣٨',hadith:'من رأى منكم منكراً فليغيره بيده فإن لم يستطع فبلسانه — رواه مسلم',action:'شارك في الشأن العام: أبدِ رأيك في القضايا المجتمعية وساهم في إصلاح مجتمعك',young:'لك الحق أن تشارك في القرارات! قل رأيك بأدب وساعد في جعل مجتمعك أفضل 🗳️'},
    en:{title:'Political Participation',desc:'Consultation (Shura) is a fundamental principle in Islamic governance. Enjoining good and forbidding evil is a duty for every Muslim. Participation in public affairs is both a right and duty for building a just society.',verse:'And their affair is conducted by consultation among themselves',verseRef:'Ash-Shura 38',hadith:'Whoever sees wrong, let them change it with their hand; if unable, with their tongue — Muslim',action:'Participate in public affairs: share your opinion on community issues and contribute to improving society',young:'You have the right to participate in decisions! Share your opinion politely and help make your community better 🗳️'},
    fr:{title:'Participation Politique',desc:"La consultation (Shura) est un principe fondamental de la gouvernance islamique. Ordonner le bien et interdire le mal est un devoir pour chaque musulman.",verse:'Et leur affaire se regle par consultation entre eux',verseRef:'Ash-Shura 38',hadith:'Quiconque voit un mal, qu\'il le change avec sa main ; s\'il ne peut, avec sa langue — Muslim',action:"Participez aux affaires publiques : partagez votre opinion et contribuez a ameliorer la societe",young:'Tu as le droit de participer aux decisions ! Partage ton opinion poliment et ameliore ta communaute 🗳️'}
  },
  {
    id:14, emoji:'🤝',
    ar:{title:'عدم التمييز',desc:'حرّم الإسلام كل أشكال التمييز بين الناس على أساس اللون أو الجنس أو العرق. الناس كلهم من آدم وآدم من تراب. التفاضل عند الله بالتقوى والعمل الصالح فقط.',verse:'إِنَّ أَكْرَمَكُمْ عِنْدَ اللَّهِ أَتْقَاكُمْ',verseRef:'الحجرات ١٣',hadith:'إن الله لا ينظر إلى صوركم وأموالكم ولكن ينظر إلى قلوبكم وأعمالكم — رواه مسلم',action:'لا تحكم على أحد بسبب مظهره اليوم — انظر إلى أخلاقه وأفعاله',young:'لا تحكم على أحد بسبب شكله أو لونه! الله ينظر إلى قلوبنا وأعمالنا 🤝'},
    en:{title:'Non-Discrimination',desc:'Islam forbade all forms of discrimination based on color, gender, or race. All people are from Adam and Adam is from dust. Merit before Allah is only through piety and good deeds.',verse:'Indeed, the most noble of you in the sight of Allah is the most righteous of you',verseRef:'Al-Hujurat 13',hadith:'Allah does not look at your forms or wealth but looks at your hearts and deeds — Muslim',action:'Do not judge anyone by their appearance today — look at their character and actions',young:'Don\'t judge anyone by their looks or color! Allah looks at our hearts and actions 🤝'},
    fr:{title:'Non-Discrimination',desc:"L'Islam a interdit toute forme de discrimination basee sur la couleur, le genre ou la race. Tous les gens viennent d'Adam et Adam est de poussiere.",verse:'Le plus noble d\'entre vous aupres d\'Allah est le plus pieux',verseRef:'Al-Hujurat 13',hadith:'Allah ne regarde pas vos formes ou vos richesses mais regarde vos coeurs et vos actes — Muslim',action:"Ne jugez personne par son apparence aujourd'hui — regardez son caractere et ses actions",young:'Ne juge personne par son apparence ou sa couleur ! Allah regarde nos coeurs et nos actions 🤝'}
  },
  {
    id:15, emoji:'🏥',
    ar:{title:'الضمان الاجتماعي',desc:'كفل الإسلام حق الضمان الاجتماعي للفقراء والمحتاجين من خلال الزكاة والصدقات وبيت المال. لا يجوع فرد في مجتمع مسلم صحيح. التكافل الاجتماعي فريضة لا تطوع.',verse:'وَفِي أَمْوَالِهِمْ حَقٌّ لِلسَّائِلِ وَالْمَحْرُومِ',verseRef:'الذاريات ١٩',hadith:'ما آمن بي من بات شبعان وجاره جائع إلى جنبه وهو يعلم به — رواه الطبراني',action:'ساعد محتاجاً اليوم — تبرع بمبلغ صغير أو طعام أو ملابس',young:'ساعد الفقراء والمحتاجين! شارك طعامك وملابسك مع من يحتاج 🏥'},
    en:{title:'Social Security',desc:'Islam guaranteed social security for the poor and needy through zakat, charity, and the public treasury. No individual should go hungry in a proper Muslim society. Social solidarity is an obligation, not voluntary.',verse:'And in their wealth is a recognized right for the beggar and the deprived',verseRef:'Adh-Dhariyat 19',hadith:'They have not believed in me, those who sleep full while their neighbor is hungry beside them — Tabarani',action:'Help someone in need today — donate a small amount or food or clothes',young:'Help the poor and needy! Share your food and clothes with those who need them 🏥'},
    fr:{title:'Securite Sociale',desc:"L'Islam a garanti la securite sociale pour les pauvres et les necessiteux a travers la zakat et l'aumone. Personne ne devrait avoir faim dans une societe musulmane correcte.",verse:'Et dans leurs biens il y a un droit pour le mendiant et le demuni',verseRef:'Adh-Dhariyat 19',hadith:'N\'a pas cru en moi celui qui dort rassasie tandis que son voisin a faim — Tabarani',action:"Aidez quelqu'un dans le besoin aujourd'hui — donnez un peu d'argent, de nourriture ou de vetements",young:'Aide les pauvres et les necessiteux ! Partage ta nourriture et tes vetements avec ceux qui en ont besoin 🏥'}
  }
];

// ═══════════════ QUIZ DATA ═══════════════
const QUIZ = [
  {
    ar:{q:'في أي سورة وردت آية "من قتل نفساً بغير نفس فكأنما قتل الناس جميعاً"؟',opts:['البقرة','المائدة','النساء','الأنعام'],correct:1,hint:'سورة المائدة فيها أحكام كثيرة',quran:'المائدة ٣٢'},
    en:{q:'In which surah does the verse about killing one soul being like killing all of mankind appear?',opts:['Al-Baqarah','Al-Maidah','An-Nisa','Al-Anam'],correct:1,hint:'Surah Al-Maidah contains many rulings',quran:'Al-Maidah 32'},
    fr:{q:'Dans quelle sourate apparait le verset sur le meurtre d\'une ame ?',opts:['Al-Baqarah','Al-Maidah','An-Nisa','Al-Anam'],correct:1,hint:'La sourate Al-Maidah contient beaucoup de regles',quran:'Al-Maidah 32'}
  },
  {
    ar:{q:'أكمل الآية: "لا إكراه في ..."',opts:['الحياة','الدين','العمل','العلم'],correct:1,hint:'هذه الآية عن حرية العقيدة',quran:'البقرة ٢٥٦'},
    en:{q:'Complete: "There is no compulsion in..."',opts:['Life','Religion','Work','Knowledge'],correct:1,hint:'This verse is about freedom of belief',quran:'Al-Baqarah 256'},
    fr:{q:'Completez : « Nulle contrainte en... »',opts:['La vie','La religion','Le travail','Le savoir'],correct:1,hint:'Ce verset porte sur la liberte de croyance',quran:'Al-Baqarah 256'}
  },
  {
    ar:{q:'ما الآية التي تتحدث عن تكريم بني آدم؟',opts:['ولقد كرمنا بني آدم','إنا خلقنا الإنسان','يا أيها الناس إنا خلقناكم','والتين والزيتون'],correct:0,hint:'هذه الآية في سورة الإسراء',quran:'الإسراء ٧٠'},
    en:{q:'Which verse speaks about honoring the children of Adam?',opts:['We have honored the children of Adam','We created the human','O mankind We created you','By the fig and the olive'],correct:0,hint:'This verse is in Surah Al-Isra',quran:'Al-Isra 70'},
    fr:{q:'Quel verset parle de l\'honneur des enfants d\'Adam ?',opts:['Nous avons honore les enfants d\'Adam','Nous avons cree l\'humain','O humanite Nous vous avons crees','Par le figuier et l\'olivier'],correct:0,hint:'Ce verset est dans la sourate Al-Isra',quran:'Al-Isra 70'}
  },
  {
    ar:{q:'ما الحديث الذي يأمر بإعطاء الأجير حقه؟',opts:['أعطوا الأجير أجره قبل أن يجف عرقه','خيركم خيركم لأهله','الدين المعاملة','المسلم من سلم المسلمون'],correct:0,hint:'هذا الحديث يتعلق بحقوق العمال',quran:'الجمعة ١٠'},
    en:{q:'Which hadith commands giving the worker their right?',opts:['Give the worker wages before their sweat dries','Best of you is best to family','Religion is good conduct','A Muslim is one from whom others are safe'],correct:0,hint:'This hadith is about workers\' rights',quran:'Al-Jumuah 10'},
    fr:{q:'Quel hadith ordonne de donner au travailleur son droit ?',opts:['Donnez au travailleur son salaire avant que sa sueur seche','Le meilleur est celui qui est bon avec sa famille','La religion est la bonne conduite','Le musulman est celui dont les autres sont en securite'],correct:0,hint:'Ce hadith concerne les droits des travailleurs',quran:'Al-Jumuah 10'}
  },
  {
    ar:{q:'ما المبدأ الأساسي في الحكم الإسلامي؟',opts:['القوة','الشورى','الثروة','النسب'],correct:1,hint:'هذا المبدأ ورد في سورة سميت باسمه',quran:'الشورى ٣٨'},
    en:{q:'What is the fundamental principle in Islamic governance?',opts:['Power','Consultation','Wealth','Lineage'],correct:1,hint:'This principle appears in a surah named after it',quran:'Ash-Shura 38'},
    fr:{q:'Quel est le principe fondamental de la gouvernance islamique ?',opts:['Le pouvoir','La consultation','La richesse','La lignee'],correct:1,hint:'Ce principe apparait dans une sourate qui porte son nom',quran:'Ash-Shura 38'}
  },
  {
    ar:{q:'أكمل الحديث: "لا فضل لعربي على أعجمي إلا ب..."',opts:['المال','النسب','التقوى','العلم'],correct:2,hint:'المعيار الوحيد للتفاضل عند الله',quran:'الحجرات ١٣'},
    en:{q:'Complete: "No superiority of Arab over non-Arab except in..."',opts:['Wealth','Lineage','Piety','Knowledge'],correct:2,hint:'The only standard for merit before Allah',quran:'Al-Hujurat 13'},
    fr:{q:'Completez : « Pas de superiorite d\'un Arabe sur un non-Arabe sauf par... »',opts:['La richesse','La lignee','La piete','Le savoir'],correct:2,hint:'Le seul critere de merite aupres d\'Allah',quran:'Al-Hujurat 13'}
  },
  {
    ar:{q:'ما السورة التي تتحدث عن عدم دخول البيوت بدون إذن؟',opts:['البقرة','النور','الأحزاب','النساء'],correct:1,hint:'سورة النور فيها آداب اجتماعية كثيرة',quran:'النور ٢٧'},
    en:{q:'Which surah discusses not entering homes without permission?',opts:['Al-Baqarah','An-Nur','Al-Ahzab','An-Nisa'],correct:1,hint:'Surah An-Nur contains many social etiquettes',quran:'An-Nur 27'},
    fr:{q:'Quelle sourate parle de ne pas entrer dans les maisons sans permission ?',opts:['Al-Baqarah','An-Nur','Al-Ahzab','An-Nisa'],correct:1,hint:'La sourate An-Nur contient beaucoup d\'etiquettes sociales',quran:'An-Nur 27'}
  },
  {
    ar:{q:'أكمل الآية: "إن أكرمكم عند الله ..."',opts:['أغناكم','أتقاكم','أعلمكم','أقواكم'],correct:1,hint:'المعيار هو التقوى وليس المال أو القوة',quran:'الحجرات ١٣'},
    en:{q:'Complete: "The most noble of you in the sight of Allah is the most..."',opts:['Wealthy','Righteous','Knowledgeable','Powerful'],correct:1,hint:'The standard is piety, not wealth or power',quran:'Al-Hujurat 13'},
    fr:{q:'Completez : « Le plus noble d\'entre vous aupres d\'Allah est le plus... »',opts:['Riche','Pieux','Savant','Puissant'],correct:1,hint:'Le critere est la piete, pas la richesse ou le pouvoir',quran:'Al-Hujurat 13'}
  },
  {
    ar:{q:'ما الحديث الذي يتحدث عن حق الجار في الطعام؟',opts:['أعطوا الأجير أجره','ما آمن بي من بات شبعان وجاره جائع','خيركم خيركم لأهله','المسلم أخو المسلم'],correct:1,hint:'هذا الحديث يتعلق بالتكافل الاجتماعي',quran:'الذاريات ١٩'},
    en:{q:'Which hadith discusses the neighbor\'s right to food?',opts:['Give the worker their wages','One who sleeps full while neighbor is hungry has not believed','Best of you is best to family','A Muslim is brother to a Muslim'],correct:1,hint:'This hadith is about social solidarity',quran:'Adh-Dhariyat 19'},
    fr:{q:'Quel hadith parle du droit du voisin a la nourriture ?',opts:['Donnez au travailleur son salaire','Celui qui dort rassasie tandis que son voisin a faim n\'a pas cru','Le meilleur est le meilleur envers sa famille','Le musulman est frere du musulman'],correct:1,hint:'Ce hadith concerne la solidarite sociale',quran:'Adh-Dhariyat 19'}
  },
  {
    ar:{q:'ما الآية التي تأمر بالعدل والإحسان؟',opts:['إن الله يأمر بالعدل والإحسان','ولا تأكلوا أموالكم بالباطل','وأمرهم شورى بينهم','لا إكراه في الدين'],correct:0,hint:'هذه الآية في سورة النحل',quran:'النحل ٩٠'},
    en:{q:'Which verse commands justice and excellence?',opts:['Allah commands justice and excellence','Do not consume wealth unjustly','Their affair is by consultation','No compulsion in religion'],correct:0,hint:'This verse is in Surah An-Nahl',quran:'An-Nahl 90'},
    fr:{q:'Quel verset ordonne la justice et la bienfaisance ?',opts:['Allah ordonne la justice et la bienfaisance','Ne consommez pas les biens injustement','Leur affaire est par consultation','Nulle contrainte en religion'],correct:0,hint:'Ce verset est dans la sourate An-Nahl',quran:'An-Nahl 90'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء العدل',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ جَهْدِ الْبَلَاءِ وَدَرَكِ الشَّقَاءِ وَسُوءِ الْقَضَاءِ وَشَمَاتَةِ الْأَعْدَاءِ',tr:'متفق عليه'},
    en:{label:'Dua for Justice',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ جَهْدِ الْبَلَاءِ وَدَرَكِ الشَّقَاءِ وَسُوءِ الْقَضَاءِ وَشَمَاتَةِ الْأَعْدَاءِ',tr:'O Allah, I seek refuge in You from severe trials and misery — Agreed upon'},
    fr:{label:'Dua pour la Justice',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ جَهْدِ الْبَلَاءِ وَدَرَكِ الشَّقَاءِ وَسُوءِ الْقَضَاءِ وَشَمَاتَةِ الْأَعْدَاءِ',tr:'O Allah, je cherche refuge aupres de Toi contre les epreuves — Unanimement reconnu'} },
  { ar:{label:'دعاء المظلوم',text:'اللَّهُمَّ إِنِّي مَظْلُومٌ فَانْتَصِرْ',tr:'دعاء عند الظلم'},
    en:{label:'Dua of the Oppressed',text:'اللَّهُمَّ إِنِّي مَظْلُومٌ فَانْتَصِرْ',tr:'O Allah, I am oppressed, so grant me victory'},
    fr:{label:'Dua de l\'Opprime',text:'اللَّهُمَّ إِنِّي مَظْلُومٌ فَانْتَصِرْ',tr:'O Allah, je suis opprime, accorde-moi la victoire'} },
  { ar:{label:'دعاء الهداية',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا',tr:'آل عمران ٨'},
    en:{label:'Dua for Guidance',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا',tr:'Our Lord, do not let our hearts deviate after You have guided us — Al Imran 8'},
    fr:{label:'Dua pour la Guidance',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا',tr:'Notre Seigneur, ne fais pas devier nos coeurs — Al Imran 8'} },
  { ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء الثبات',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'البقرة ٢٥٠'},
    en:{label:'Dua for Steadfastness',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Our Lord, pour patience upon us and plant firmly our feet — Al-Baqarah 250'},
    fr:{label:'Dua pour la Fermete',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Notre Seigneur, deverse sur nous la patience — Al-Baqarah 250'} },
  { ar:{label:'دعاء الشكر',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'النمل ١٩'},
    en:{label:'Dua of Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'My Lord, enable me to be grateful for Your favor — An-Naml 19'},
    fr:{label:'Dua de Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'Mon Seigneur, permets-moi de Te remercier — An-Naml 19'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'huquq-insan-xp'; const BADGES_KEY = 'huquq-insan-badges'; const READ_KEY = 'huquq-insan-read'; const STREAK_KEY = 'huquq-insan-streak'; const MODE_KEY = 'huquq-insan-mode'; const QUIZ_BEST_KEY = 'huquq-insan-quiz-best';
const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Debutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Perseverant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];
function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) { const xp = getXP() + pts; localStorage.setItem(XP_KEY, xp); checkBadges(xp); updateXPDisplay(); return xp; }
function getLevel(xp) { if (xp >= 1000) return 5; if (xp >= 500) return 4; if (xp >= 300) return 3; if (xp >= 100) return 2; return 1; }
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) { const earned = getEarnedBadges(); BADGE_DEFS.forEach(b => { if (xp >= b.xp && !earned.includes(b.id)) { earned.push(b.id); localStorage.setItem(BADGES_KEY, JSON.stringify(earned)); showToast(`${b.emoji} ${b[lang]}!`); playSound('success'); } }); }
function getReadTraits() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markTraitRead(id) { const read = getReadTraits(); if (!read.includes(id)) { read.push(id); localStorage.setItem(READ_KEY, JSON.stringify(read)); addXP(10); } }

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() { const today = new Date().toDateString(); const s = getStreak(); if (s.lastDate === today) return s.count; const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1); if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; } s.lastDate = today; localStorage.setItem(STREAK_KEY, JSON.stringify(s)); return s.count; }

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() { ageMode = ageMode === 'young' ? 'teen' : 'young'; localStorage.setItem(MODE_KEY, ageMode); document.body.classList.toggle('young-mode', ageMode === 'young'); renderAll(); showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode); playSound('theme'); }

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar'; let currentTheme = document.documentElement.dataset.theme || 'nature'; const THEMES = ['nature','night','ocean']; const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' }; let currentPrincipleIdx = -1;
function setLang(l) { lang = l; document.documentElement.lang = l; document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr'; document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l)); renderAll(); }
function cycleTheme() { const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length; currentTheme = THEMES[idx]; document.documentElement.dataset.theme = currentTheme; document.getElementById('themeIcon').textContent = THEME_ICONS[currentTheme]; playSound('theme'); }

// ═══════════════ RENDER ALL ═══════════════
function renderAll() { const t = T[lang]; document.getElementById('appTitle').textContent = t.appTitle; document.getElementById('splashSub').textContent = t.splashSub; document.getElementById('splashHint').textContent = t.splashHint; document.getElementById('tabHome').textContent = t.tabHome; document.getElementById('tabTraits').textContent = t.tabTraits; document.getElementById('tabQuiz').textContent = t.tabQuiz; document.getElementById('tabProgress').textContent = t.tabProgress; document.getElementById('tabAbout').textContent = t.tabAbout; document.getElementById('traitsTitle').textContent = t.traitsTitle; document.getElementById('traitsDesc').textContent = t.traitsDesc; document.getElementById('quizTitle').textContent = t.quizTitle; document.getElementById('quizDesc').textContent = t.quizDesc; document.getElementById('progressTitle').textContent = t.progressTitle; document.getElementById('progressDesc').textContent = t.progressDesc; document.getElementById('helpTitle').textContent = t.helpTitle; document.getElementById('duaPanelTitle').textContent = t.duaPanelTitle; document.getElementById('ageModeBtn').textContent = ageMode === 'young' ? t.youngMode : t.teenMode; renderHome(); renderTraits(); renderProgress(); renderAbout(); renderHelp(); renderDuas(); renderTicker(); }

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() { const t = T[lang]; const dayIdx = new Date().getDate() % TRAITS.length; const trait = TRAITS[dayIdx]; const d = trait[lang]; document.getElementById('dailyCard').innerHTML = `<div class="daily-label">${t.dailyLabel}</div><div class="daily-title">${trait.emoji} ${d.title}</div><div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div><div class="daily-action" onclick="switchTab('traits');toggleCard('trait-${trait.id}')">${t.readMore} &#8594;</div>`; document.getElementById('homeGrid').innerHTML = TRAITS.map(tr => { const dd = tr[lang]; return `<div class="home-card" onclick="switchTab('traits');toggleCard('trait-${tr.id}')"><span class="hc-icon">${tr.emoji}</span><div class="hc-title">${dd.title}</div></div>`; }).join(''); }

// ═══════════════ RENDER: TRAITS (RIGHTS) ═══════════════
function renderTraits() { const t = T[lang]; const readTraits = getReadTraits(); const container = document.getElementById('traitsContainer'); const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="traitsSearch" placeholder="${t.searchPlaceholder}" oninput="filterTraits(this.value)"></div>`; container.innerHTML = searchHTML + TRAITS.map(tr => { const d = tr[lang]; const isRead = readTraits.includes(tr.id); return `<div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="trait-${tr.id}"><div class="trait-head" onclick="toggleCard('trait-${tr.id}');markTraitRead(${tr.id})"><span class="trait-num">${tr.id}</span><span class="trait-emoji">${tr.emoji}</span><span class="trait-title">${d.title}</span>${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}<span class="trait-chev">&#9660;</span></div><div class="trait-body"><div class="trait-inner"><div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div><div class="verse-box"><div class="verse-arabic">${d.verse}</div><div class="verse-ref">${d.verseRef}</div></div><div class="hadith-box"><span class="hadith-label">📜 ${t.hadith}</span><div class="hadith-text">${d.hadith}</div></div><div class="action-box"><span class="action-icon">💡</span><span>${d.action}</span></div><button class="share-btn" onclick="shareTrait(${tr.id})"><span class="share-icon">📤</span> ${t.share}</button></div></div></div>`; }).join(''); }
function filterTraits(query) { const cards = document.querySelectorAll('.trait-card'); const q = query.toLowerCase(); cards.forEach(card => { const title = card.querySelector('.trait-title').textContent.toLowerCase(); const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : ''; card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none'; }); }
function shareTrait(id) { const trait = TRAITS.find(t => t.id === id); if (!trait) return; const d = trait[lang]; const text = `${trait.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`; if (navigator.share) { navigator.share({ title: d.title, text }); } else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); } }

// ═══════════════ RENDER: QUIZ ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };
function renderQuiz() { quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true }; showQuizQuestion(); }
function showQuizQuestion() { const t = T[lang]; const container = document.getElementById('quizContainer'); const result = document.getElementById('quizResult'); result.classList.add('hidden'); if (quizState.current >= QUIZ.length) { showQuizResult(); return; } const q = QUIZ[quizState.current][lang]; const total = QUIZ.length; const num = quizState.current + 1; container.innerHTML = `<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div><div class="quiz-counter">${num} / ${total}</div><div class="quiz-question-card scroll-reveal"><div class="quiz-q-text">${q.q}</div><div class="quiz-options" id="quizOpts">${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}</div><div class="quiz-lifelines"><button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button><button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button><button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button></div><div id="quizFeedback" class="quiz-feedback hidden"></div></div>`; }
function answerQuiz(idx) { if (!quizState.active) return; const q = QUIZ[quizState.current][lang]; const correct = q.correct; const opts = document.querySelectorAll('.quiz-opt'); opts.forEach((o, i) => { o.disabled = true; if (i === correct) o.classList.add('correct'); if (i === idx && i !== correct) o.classList.add('wrong'); }); const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); if (idx === correct) { quizState.score++; addXP(5); feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`; playSound('success'); } else { feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`; playSound('click'); } quizState.answers.push(idx); quizState.current++; setTimeout(() => showQuizQuestion(), 1800); }
function useFiftyFifty() { if (!quizState.lifelines.fifty) return; quizState.lifelines.fifty = false; const q = QUIZ[quizState.current][lang]; const correct = q.correct; const wrongIdxs = [0,1,2,3].filter(i => i !== correct); const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2); toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }}); document.querySelector('.lifeline-btn').classList.add('used'); playSound('click'); }
function useHint() { if (!quizState.lifelines.hint) return; quizState.lifelines.hint = false; const q = QUIZ[quizState.current][lang]; const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`; playSound('click'); }
function useQuranRef() { if (!quizState.lifelines.quran) return; quizState.lifelines.quran = false; const q = QUIZ[quizState.current][lang]; const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`; playSound('click'); }
function showQuizResult() { const t = T[lang]; const total = QUIZ.length; const pct = Math.round(quizState.score / total * 100); const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0'); if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct); addXP(20); let emoji, title; if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'حقوقي حقيقي!':lang==='fr'?'Un vrai Champion !':'A True Champion!'; } else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; } else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; } document.getElementById('quizContainer').innerHTML = ''; const result = document.getElementById('quizResult'); result.classList.remove('hidden'); result.innerHTML = `<div class="qr-emoji">${emoji}</div><div class="qr-score">${quizState.score}/${total}</div><div class="qr-title">${title}</div><div class="qr-desc">${pct}%</div><button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`; result.scrollIntoView({ behavior: 'smooth' }); if (pct >= 80) launchConfetti(); quizState.active = false; }

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() { const t = T[lang]; const xp = getXP(); const level = getLevel(xp); const streak = getStreak().count; const readTraits = getReadTraits(); const earned = getEarnedBadges(); const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0'); const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id)); const nextXP = nextBadge ? nextBadge.xp : 1000; const progressPct = Math.min(100, (xp / nextXP) * 100); document.getElementById('progressContainer').innerHTML = `<div class="progress-xp-card"><div class="xp-header"><span class="xp-icon">⭐</span><span class="xp-amount">${xp} ${t.xpLabel}</span></div><div class="xp-bar-wrap"><div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div><span class="xp-level">${t.levelLabel} ${level}</span></div>${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}</div>${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}<div class="progress-stats"><div class="stat-card"><span class="stat-num">${readTraits.length}</span><span class="stat-label">${lang==='ar'?'حق مقروء':lang==='fr'?'Droits lus':'Rights Read'}</span><span class="stat-total">/ ${TRAITS.length}</span></div><div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div><div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div></div><div class="badges-section"><h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3><div class="badges-grid">${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}</div></div>`; }
function updateXPDisplay() { const panel = document.getElementById('panel-progress'); if (panel && panel.classList.contains('active')) renderProgress(); }

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() { const about = { ar: { disclaimerTitle:'⚠️ تنبيه مهم', disclaimer:'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة.', authorName:'الشيخ محمد الغزالي', authorDates:'١٩١٧ — ١٩٩٦', authorBio:'عالم ومفكر إسلامي مصري بارز. ألّف أكثر من ٩٤ كتاباً. درس في الأزهر ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل.', bookTitle:'عن الكتاب', bookDesc:'«حقوق الإنسان» كتاب يقارن بين حقوق الإنسان في الإسلام والإعلان العالمي لحقوق الإنسان. يبين الشيخ الغزالي كيف سبق الإسلام العالم بـ١٤ قرناً في إقرار حقوق الإنسان وحمايتها.', sourcesTitle:'المصادر', sources:['كتاب "حقوق الإنسان" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','الإعلان العالمي لحقوق الإنسان'], contact:'تواصل: abdelhak.bourdim@gmail.com' }, en: { disclaimerTitle:'⚠️ Important Notice', disclaimer:'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'Prominent Egyptian Islamic scholar. Authored over 94 books. Studied at Al-Azhar and taught at Emir Abdelkader University in Constantine, Algeria. King Faisal Award winner.', bookTitle:'About the Book', bookDesc:'"Human Rights" compares human rights in Islam with the Universal Declaration. Sheikh al-Ghazali shows how Islam preceded the world by 14 centuries in establishing and protecting human rights.', sourcesTitle:'Sources', sources:['"Human Rights" (Huquq al-Insan) — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Universal Declaration of Human Rights'], contact:'Contact: abdelhak.bourdim@gmail.com' }, fr: { disclaimerTitle:'⚠️ Avis Important', disclaimer:'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'Eminent savant islamique egyptien. Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a Constantine (Algerie). Laureat du Prix Roi Faysal.', bookTitle:'A Propos du Livre', bookDesc:'\"Droits de l\'Homme\" compare les droits de l\'homme en Islam avec la Declaration Universelle. Le Sheikh al-Ghazali montre comment l\'Islam a precede le monde de 14 siecles.', sourcesTitle:'Sources', sources:['"Droits de l\'Homme" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Declaration Universelle des Droits de l\'Homme'], contact:'Contact : abdelhak.bourdim@gmail.com' } }; const a = about[lang]; document.getElementById('aboutContainer').innerHTML = `<div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div><div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div><div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div><div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div><div class="about-section"><p class="about-text">${a.contact}</p></div>`; }

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() { const help = { ar: [{title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حقوق الإنسان في الإسلام بطريقة تفاعلية.'},{title:'📚 المصادر',body:'كتاب "حقوق الإنسان" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},{title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ١٥ حقاً، مسابقة تفاعلية، نظام نقاط وشارات.'},{title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي.'},{title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'}], en: [{title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share human rights in Islam interactively.'},{title:'📚 Sources',body:'"Human Rights" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},{title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 15 rights, interactive quiz, XP and badges system.'},{title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis.'},{title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'}], fr: [{title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager les droits de l\'homme en Islam.'},{title:'📚 Sources',body:'"Droits de l\'Homme" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},{title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 15 droits, quiz interactif, systeme XP et badges.'},{title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis.'},{title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'}] }; document.getElementById('helpBody').innerHTML = help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join(''); }

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() { document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => { const dd = d[lang]; return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`; }).join(''); }

// ═══════════════ TICKER ═══════════════
function renderTicker() { const tips = { ar:['📖 اقرأ حقاً جديداً كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء','⭐ أكمل ١٥ حقاً لتصبح خبيراً'], en:['📖 Read a new right every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to make dua','⭐ Complete all 15 rights to become an Expert'], fr:['📖 Lisez un nouveau droit chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas','⭐ Completez les 15 droits pour devenir Expert'] }; const items = tips[lang]; const doubled = [...items, ...items]; const ticker = document.getElementById('tickerText'); ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join(''); ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`; }

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() { const features = document.getElementById('splashFeatures'); if (features) { features.innerHTML = T[lang].splashFeatures.map((f, i) => `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`).join(''); } let count = 5; const counter = document.getElementById('splashCount'); splashTimer = setInterval(() => { count--; if (counter) counter.textContent = count; if (count <= 0) dismissSplash(); }, 1000); }
function dismissSplash() { clearInterval(splashTimer); const splash = document.getElementById('splash'); if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); } }

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() { document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => { switchTab(tab.dataset.tab); }); }); }
function switchTab(name) { document.querySelectorAll('.panel').forEach(p => p.classList.remove('active')); document.querySelectorAll('.tab').forEach(t => t.classList.remove('active')); const panel = document.getElementById('panel-' + name); const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`); if (panel) panel.classList.add('active'); if (tabBtn) tabBtn.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); playSound('click'); setTimeout(() => { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => { if (window._scrollObserver) window._scrollObserver.observe(el); }); initTypewriter(); }, 100); }

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() { if (!('IntersectionObserver' in window)) return; window._scrollObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); window._scrollObserver.unobserve(entry.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }); document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el)); }

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() { document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { const hp = document.getElementById('helpPanel'); if (!hp.classList.contains('hidden')) { toggleHelp(); return; } const dp = document.getElementById('duaPanel'); if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; } document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open')); } if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { const panel = document.getElementById('panel-traits'); if (!panel || !panel.classList.contains('active')) return; if (document.activeElement && document.activeElement.id === 'traitsSearch') return; e.preventDefault(); const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none'); if (!cards.length) return; if (currentPrincipleIdx >= 0 && currentPrincipleIdx < cards.length) cards[currentPrincipleIdx].classList.remove('open'); const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1); currentPrincipleIdx = Math.max(0, Math.min(cards.length-1, currentPrincipleIdx+dir)); cards[currentPrincipleIdx].classList.add('open'); cards[currentPrincipleIdx].scrollIntoView({ behavior:'smooth', block:'center' }); playSound('click'); } }); }

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext; let audioCtx;
function playSound(type) { try { if (!audioCtx) audioCtx = new AudioCtx(); const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); gain.gain.value = 0.06; if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; } else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; } else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; } osc.start(); osc.stop(audioCtx.currentTime + 0.1); } catch(e) {} }

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() { const canvas = document.getElementById('confettiCanvas'); if (!canvas) return; canvas.style.display = 'block'; const ctx = canvas.getContext('2d'); canvas.width = window.innerWidth; canvas.height = window.innerHeight; const particles = []; const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7']; for (let i = 0; i < 120; i++) { particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 }); } let frame = 0; function draw() { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); }); frame++; if (frame < 120) requestAnimationFrame(draw); else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; } } draw(); }

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() { const dailyTitle = document.querySelector('.daily-card .daily-title'); if (!dailyTitle || dailyTitle.dataset.twDone) return; const fullText = dailyTitle.textContent; dailyTitle.textContent = ''; dailyTitle.classList.add('typewriter-text'); dailyTitle.dataset.twDone = '1'; let i = 0; const speed = Math.max(30, 2000 / fullText.length); function typeChar() { if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); } else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); } } setTimeout(typeChar, 500); }

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() { let touchStartX = 0, touchStartY = 0; const tabOrder = ['home','traits','quiz','progress','about']; document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true }); document.addEventListener('touchend', e => { const dx = e.changedTouches[0].screenX - touchStartX; const dy = e.changedTouches[0].screenY - touchStartY; if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return; const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); }); if (current < 0) return; const isRTL = document.documentElement.dir === 'rtl'; let next; if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1; if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]); }, { passive: true }); }

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => { document.body.classList.toggle('young-mode', ageMode === 'young'); updateStreak(); initSplash(); renderAll(); initTabs(); initScrollReveal(); initScrollTop(); initKeyboardNav(); initSwipeGestures(); initTypewriter(); });
