// jscs:disable maximumLineLength
'use strict';

module.exports = [

    // Use of gendered word
    {
        name: 'Use of gendered word',
        reason: 'Use of gendered words could indicate that you\'re discriminating in favour of a certain gender.',
        solution: 'Replace gendered words with gender-neutral alternatives.',
        level: 'error',
        increment: {
            sexism: 1
        },
        triggers: [
            'boys?',
            'bros?',
            'broth(a|er)s?',
            'chicks?',
            'dads?',
            'dudes?',
            'fathers?',
            'females?',
            'gentlem[ae]n',
            'girls?',
            'grandfathers?',
            'grandmas?',
            'grandmothers?',
            'grandpas?',
            'gran',
            'grann(y|ies)',
            'guys?',
            'husbands?',
            'lad(y|ies)?',
            'm[ae]n',
            'm[ou]ms?',
            'males?',
            'momm(y|ies)',
            'mommas?',
            'mothers?',
            'papas?',
            'sist(a|er)s?',
            'wi(fe|ves)',
            'wom[ae]n'
        ]
    },


    // Use of gendered pronoun
    {
        name: 'Use of gendered pronoun',
        reason: 'Use of gendered pronouns indicate that you\'re discriminating in favour of a certain gender, or fail to recognise that gender is not binary.',
        solution: 'Replace gendered pronouns with "them" or "they".',
        level: 'error',
        increment: {
            sexism: 1
        },
        triggers: [
            'he|her|him|his|she'
        ]
    },

    // Use of derogatory gendered term
    {
        name: 'Use of derogatory gendered term',
        reason: 'When you use derogatory gendered terms, you\'re being discriminatory. These are offensive in a job post.',
        solution: 'Remove these words.',
        level: 'error',
        increment: {
            sexism: 2,
            culture: 1
        },
        triggers: [
            'bia?tch(es)?',
            'bimbos?',
            'hoes?',
            'hunks?',
            'milfs?',
            'slags?',
            'sluts?',
            'stallions?',
            'studs?'
        ]
    },


    // Mention of facial hair
    {
        name: 'Mention of facial hair',
        reason: 'The use of "grizzled" or "bearded" indicates that you\'re only looking for male developers.',
        solution: 'Remove these words.',
        level: 'error',
        increment: {
            sexism: 1
        },
        triggers: [
            'beard(ed|s|y)?',
            'grizzl(ed|y)'
        ]
    },


    // Use of sexualised terms
    {
        name: 'Use of sexualised terms',
        reason: 'Terms like "sexy code" are often used if the person writing a post doesn\'t know what they are talking about or can\'t articulate what good code is. It can also be an indicator of bro culture or sexism.',
        solution: 'Remove these words.',
        level: 'warning',
        increment: {
            culture: 1
        },
        triggers: [
            'gay for',
            'sexy',
            'hawt',
            'phat'
        ]
    },


    // Use of bro terminology
    {
        name: 'Use of bro terminology',
        reason: 'Bro culture terminology can really reduce the number of people likely to show interest. It discriminates against anyone who doesn\'t fit into a single gender-specific archetype.',
        solution: 'Remove these words.',
        level: 'error',
        increment: {
            culture: 1
        },
        triggers: [
            'bros?',
            'brogramm(er|ers|ing)',
            'crank',
            'crush',
            'dude(bro)?s?',
            'hard[ -]*core',
            'hella',
            'mak(e|ing) it rain',
            'skillz'
        ]
    },


    // Use of dumb job titles
    {
        name: 'Use of dumb job titles',
        reason: 'Referring to tech people as Ninjas or similar devalues the work that they do and shows a lack of respect and professionalism. It\'s also rather cliched and can be an immediate turn-off to many people.',
        solution: 'Consider what you\'re really asking for in an applicant and articulate this in the job post.',
        level: 'warning',
        increment: {
            culture: 1,
            realism: 1
        },
        triggers: [
            'gurus?',
            'hero(es|ic)?',
            'ninjas?',
            'rock[ -]*stars?',
            'super[ -]*stars?',
            'badass(es)?',
            'BAMF'
        ]
    },


    // Mention of hollow benefits
    {
        name: 'Mention of hollow benefits',
        reason: 'Benefits such as "beer fridge" and "pool table" are not bad in themselves, but their appearance in a job post often disguises the fact that there are few real benefits to working for a company. Be wary of these.',
        solution: 'Ensure you\'re outlining real employee benefits if you have them. Don\'t use these as a carrot.',
        level: 'warning',
        increment: {
            culture: 1,
            recruiter: 1
        },
        triggers: [
            'ales?',
            'beers?',
            'brewskis?',
            'coffee',
            '(foos|fuss)[ -]*ball',
            'happy[ -]*hours?',
            'keg(erator)?s?',
            'lagers?',
            'nerf[ -]*guns?',
            'ping[ -]*pong?',
            'pints?',
            'pizzas?',
            'play\\s*stations?',
            'pool[ -]*table|pool',
            'rock[ -]*walls?',
            'table[ -]*football',
            'table[ -]*tennis',
            'wiis?',
            'xbox(es|s)?',
            'massages?'
        ]
    },


    // Competitive environment
    {
        name: 'Competitive environment',
        reason: 'Competition can be healthy, but for a lot of people a heavily competitive environment can be a strain. You could also potentially be excluding people who have more important outside-of-work commitments, such as a family.',
        solution: 'Be wary if you come across as competitive, aim for welcoming and friendly.',
        level: 'notice',
        increment: {
            realism: 1,
            recruiter: 1
        },
        triggers: [
            'compete(?!nt|nce|ncy|ncies)',
            'competition',
            'competitive(?! salary| pay)',
            'cutting[ -]edge',
            'fail',
            'fore[ -]*front',
            'super[ -]*stars?',
            'the best',
            'reach the top',
            'top of .{2,8} (game|class)',
            'win'
        ]
    },


    // New starter expectations
    {
        name: 'New starter expectations',
        reason: 'Terms like "hit the ground running" and others can indicate that the person writing a job post is unaware of the time and effort involved in preparing a new starter for work.',
        solution: 'Reevaluate the use of these terms.',
        level: 'notice',
        increment: {
            realism: 1
        },
        triggers: [
            'hit[ -]the[ -]ground[ -]running',
            'juggle',
            'tight deadlines?'
        ]
    },



    // Use of Meritocracy
    {
        name: 'Use of Meritocracy',
        reason: 'The term "meritocracy" is originally a satirical term relating to how we justify our own successes. Unfortunately, it\'s probably impossible to objectively measure merit, so this usually indicates that the company in question rewards people similar to themselves or using specious metrics.',
        solution: 'Reevaluate the use of this term.',
        level: 'notice',
        increment: {
            realism: 1
        },
        triggers: [
            'meritocra(cy|cies|tic)'
        ]
    },


    // Use of profanity
    {
        name: 'Use of profanity',
        reason: 'While swearing in the workplace can be OK, you shouldn\'t be using profanity in a job post – it\'s unprofessional.',
        solution: 'Remove these words.',
        level: 'warning',
        increment: {
            recruiter: 1
        },
        triggers: [
            'bloody',
            'bugger',
            'cunt',
            'damn',
            'fuck(er|ing)?',
            'piss(ing)?',
            'shit',
            'motherfuck(ers?|ing)'
        ]
    },


    // Use of "visionary" terminology
    {
        name: 'Use of "visionary" terminology',
        reason: 'Terms like "blue sky" and "enlightened" often indicate that a non technical person (perhaps a CEO or stakeholder) has been involved in writing the post. Be down-to-earth, and explain things in plain English.',
        solution: 'Reword these phrases, say what you actually mean.',
        level: 'warning',
        increment: {
            culture: 1,
            realism: 1
        },
        triggers: [
            'blue[ -]*sk(y|ies)',
            'enlighten(ed|ing)?',
            'green[ -]*fields?',
            'incentivi[sz]e',
            'paradigm',
            'producti[sz]e',
            'reach(ed|ing)? out',
            'synerg(y|ize|ise)',
            'visionar(y|ies)'
        ]
    },


    // Need to reassure
    {
        name: 'Need to reassure',
        reason: 'Something feels off when you need to reassure someone of something that should definitely not be an issue in any workplace.',
        solution: 'Reassess the need for these phrases.',
        level: 'notice',
        increment: {
            culture: 1
        },
        triggers: [
            'drama[ -]*free',
            'stress[ -]*free'
        ]
    },


    // Mention of legacy technology
    {
        name: 'Mention of legacy technology',
        reason: 'Legacy technologies can reduce the number of people interested in a job. Sometimes we can\'t avoid this, but extreme legacy tech can often indicate that a company isn\'t willing to move forwards or invest in career development.',
        solution: 'If possible (and you\'re being honest), play down the use of this technology.',
        level: 'notice',
        increment: {
            realism: 1,
            tech: 1
        },
        triggers: [
            'cobol',
            'cvs',
            'front[ -]*page',
            'rcs',
            'sccs',
            'source[ -]*safe',
            'vb\\s*6',
            'visual[ -]*basic\\s*6',
            'vbscript'
        ]
    },


    // Mention of a development environment
    {
        name: 'Mention of a development environment',
        reason: 'Unless you\'re building in a something which requires a certain development environment (e.g. iOS development and XCode), it shouldn\'t matter which tools a developer decides to use to write code – their output will be better if they are working in a familiar environment.',
        solution: 'Don\'t specify a development environment unless absolutely necessary.',
        level: 'notice',
        increment: {
            culture: 1,
            tech: 1
        },
        triggers: [
            'atom',
            'bb[ -]*edit',
            'dream[ -]*weaver',
            'eclipse',
            'emacs',
            'net[ -]*beans',
            'note[ -]*pad',
            'sublime[ -]*text',
            'text[ -]*wrangler',
            'text[ -]*mate',
            'vim?',
            'visual[ -]*studio'
        ]
    },


    // Use of expanded acronyms
    {
        name: 'Use of expanded acronyms',
        reason: 'Tech people know their acronyms; you come across as not very tech-savvy if you expand them.',
        solution: 'Use acronyms in place of these words.',
        level: 'warning',
        increment: {
            recruiter: 1,
            tech: 1
        },
        triggers: [
            'cascading[ -]?style[ -]?sheets',
            'hyper[ -]?text([ -]?mark[ -]?up([ -]?language)?)?'
        ]
    },


    // Java script?
    {
        name: 'Java script?',
        reason: 'JavaScript is one word. You write JavaScript, not javascripts or java script.',
        solution: 'Replace this word with "JavaScript".',
        level: 'error',
        increment: {
            recruiter: 1
        },
        triggers: [
            'java[ -]script|java[ -]*scripts'
        ]
    },


    // Ruby on Rail?
    {
        name: 'Ruby on Rail?',
        reason: 'Ruby On Rails is plural – there is more than one rail.',
        solution: 'Replace this with "Ruby on Rails".',
        level: 'error',
        increment: {
            recruiter: 1
        },
        triggers: [
            'ruby on rail'
        ]
    },

    // Use of profanity
    {
        name: 'profanity',
        reason: 'While swearing in the workplace can be OK, you shouldn\'t be using words that could be considered as profanity in a job post.',
        solution: 'Remove these words.',
        level: 'warning',
        increment: {
            recruiter: 1
        },
        triggers: [
            '4r5e',
            '5h1t',
            '5hit',
            'a55',
            'anal',
            'anus',
            'ar5e',
            'arrse',
            'arse',
            'ass',
            'ass-fucker',
            'asses',
            'assfucker',
            'assfukka',
            'asshole',
            'assholes',
            'asswhole',
            'a_s_s',
            'b!tch',
            'b00bs',
            'b17ch',
            'b1tch',
            'ballbag',
            'balls',
            'ballsack',
            'bastard',
            'beastial',
            'beastiality',
            'bellend',
            'bestial',
            'bestiality',
            'bi\+ch',
            'biatch',
            'bitch',
            'bitcher',
            'bitchers',
            'bitches',
            'bitchin',
            'bitching',
            'bloody',
            'blow job',
            'blowjob',
            'blowjobs',
            'boiolas',
            'bollock',
            'bollok',
            'boner',
            'boob',
            'boobs',
            'booobs',
            'boooobs',
            'booooobs',
            'booooooobs',
            'breasts',
            'buceta',
            'bugger',
            'bum',
            'bunny fucker',
            'butt',
            'butthole',
            'buttmuch',
            'buttplug',
            'c0ck',
            'c0cksucker',
            'carpet muncher',
            'cawk',
            'chink',
            'cipa',
            'cl1t',
            'clit',
            'clitoris',
            'clits',
            'cnut',
            'cock',
            'cock-sucker',
            'cockface',
            'cockhead',
            'cockmunch',
            'cockmuncher',
            'cocks',
            'cocksuck',
            'cocksucked',
            'cocksucker',
            'cocksucking',
            'cocksucks',
            'cocksuka',
            'cocksukka',
            'cok',
            'cokmuncher',
            'coksucka',
            'coon',
            'cox',
            'crap',
            'cum',
            'cummer',
            'cumming',
            'cums',
            'cumshot',
            'cunilingus',
            'cunillingus',
            'cunnilingus',
            'cunt',
            'cuntlick',
            'cuntlicker',
            'cuntlicking',
            'cunts',
            'cyalis',
            'cyberfuc',
            'cyberfuck',
            'cyberfucked',
            'cyberfucker',
            'cyberfuckers',
            'cyberfucking',
            'd1ck',
            'damn',
            'dick',
            'dickhead',
            'dildo',
            'dildos',
            'dink',
            'dinks',
            'dirsa',
            'dlck',
            'dog-fucker',
            'doggin',
            'dogging',
            'donkeyribber',
            'doosh',
            'duche',
            'dyke',
            'ejaculate',
            'ejaculated',
            'ejaculates',
            'ejaculating',
            'ejaculatings',
            'ejaculation',
            'ejakulate',
            'f u c k',
            'f u c k e r',
            'f4nny',
            'fag',
            'fagging',
            'faggitt',
            'faggot',
            'faggs',
            'fagot',
            'fagots',
            'fags',
            'fanny',
            'fannyflaps',
            'fannyfucker',
            'fanyy',
            'fatass',
            'fcuk',
            'fcuker',
            'fcuking',
            'feck',
            'fecker',
            'felching',
            'fellate',
            'fellatio',
            'fingerfuck',
            'fingerfucked',
            'fingerfucker',
            'fingerfuckers',
            'fingerfucking',
            'fingerfucks',
            'fistfuck',
            'fistfucked',
            'fistfucker',
            'fistfuckers',
            'fistfucking',
            'fistfuckings',
            'fistfucks',
            'flange',
            'fook',
            'fooker',
            'fuck',
            'fucka',
            'fucked',
            'fucker',
            'fuckers',
            'fuckhead',
            'fuckheads',
            'fuckin',
            'fucking',
            'fuckings',
            'fuckingshitmotherfucker',
            'fuckme',
            'fucks',
            'fuckwhit',
            'fuckwit',
            'fudge packer',
            'fudgepacker',
            'fuk',
            'fuker',
            'fukker',
            'fukkin',
            'fuks',
            'fukwhit',
            'fukwit',
            'fux',
            'fux0r',
            'f_u_c_k',
            'gangbang',
            'gangbanged',
            'gangbangs',
            'gaylord',
            'gaysex',
            'goatse',
            'God',
            'god-dam',
            'god-damned',
            'goddamn',
            'goddamned',
            'hardcoresex',
            'hell',
            'heshe',
            'hoar',
            'hoare',
            'hoer',
            'homo',
            'hore',
            'horniest',
            'horny',
            'hotsex',
            'jack-off',
            'jackoff',
            'jap',
            'jerk-off',
            'jism',
            'jiz',
            'jizm',
            'jizz',
            'kawk',
            'knob',
            'knobead',
            'knobed',
            'knobend',
            'knobhead',
            'knobjocky',
            'knobjokey',
            'kock',
            'kondum',
            'kondums',
            'kum',
            'kummer',
            'kumming',
            'kums',
            'kunilingus',
            'l3i\+ch',
            'l3itch',
            'labia',
            'lust',
            'lusting',
            'm0f0',
            'm0fo',
            'm45terbate',
            'ma5terb8',
            'ma5terbate',
            'masochist',
            'master-bate',
            'masterb8',
            'masterbat*',
            'masterbat3',
            'masterbate',
            'masterbation',
            'masterbations',
            'masturbate',
            'mo-fo',
            'mof0',
            'mofo',
            'mothafuck',
            'mothafucka',
            'mothafuckas',
            'mothafuckaz',
            'mothafucked',
            'mothafucker',
            'mothafuckers',
            'mothafuckin',
            'mothafucking',
            'mothafuckings',
            'mothafucks',
            'mother fucker',
            'motherfuck',
            'motherfucked',
            'motherfucker',
            'motherfuckers',
            'motherfuckin',
            'motherfucking',
            'motherfuckings',
            'motherfuckka',
            'motherfucks',
            'muff',
            'mutha',
            'muthafecker',
            'muthafuckker',
            'muther',
            'mutherfucker',
            'n1gga',
            'n1gger',
            'nazi',
            'nigg3r',
            'nigg4h',
            'nigga',
            'niggah',
            'niggas',
            'niggaz',
            'nigger',
            'niggers',
            'nob',
            'nob jokey',
            'nobhead',
            'nobjocky',
            'nobjokey',
            'numbnuts',
            'nutsack',
            'orgasim',
            'orgasims',
            'orgasm',
            'orgasms',
            'p0rn',
            'pawn',
            'pecker',
            'penis',
            'penisfucker',
            'phonesex',
            'phuck',
            'phuk',
            'phuked',
            'phuking',
            'phukked',
            'phukking',
            'phuks',
            'phuq',
            'pigfucker',
            'pimpis',
            'piss',
            'pissed',
            'pisser',
            'pissers',
            'pisses',
            'pissflaps',
            'pissin',
            'pissing',
            'pissoff',
            'poop',
            'porn',
            'porno',
            'pornography',
            'pornos',
            'prick',
            'pricks',
            'pron',
            'pube',
            'pusse',
            'pussi',
            'pussies',
            'pussy',
            'pussys',
            'rectum',
            'retard',
            'rimjaw',
            'rimming',
            's hit',
            's.o.b.',
            'sadist',
            'schlong',
            'screwing',
            'scroat',
            'scrote',
            'scrotum',
            'semen',
            'sex',
            'sh!\+',
            'sh!t',
            'sh1t',
            'shag',
            'shagger',
            'shaggin',
            'shagging',
            'shemale',
            'shi\+',
            'shit',
            'shitdick',
            'shite',
            'shited',
            'shitey',
            'shitfuck',
            'shitfull',
            'shithead',
            'shiting',
            'shitings',
            'shits',
            'shitted',
            'shitter',
            'shitters',
            'shitting',
            'shittings',
            'shitty',
            'skank',
            'slut',
            'sluts',
            'smegma',
            'smut',
            'snatch',
            'son-of-a-bitch',
            'spac',
            'spunk',
            's_h_i_t',
            't1tt1e5',
            't1tties',
            'teets',
            'teez',
            'testical',
            'testicle',
            'tit',
            'titfuck',
            'tits',
            'titt',
            'tittie5',
            'tittiefucker',
            'titties',
            'tittyfuck',
            'tittywank',
            'titwank',
            'tosser',
            'turd',
            'tw4t',
            'twat',
            'twathead',
            'twatty',
            'twunt',
            'twunter',
            'v14gra',
            'v1gra',
            'vagina',
            'viagra',
            'vulva',
            'w00se',
            'wang',
            'wank',
            'wanker',
            'wanky',
            'whoar',
            'whore',
            'willies',
            'willy',
            'xrated',
            'xxx'
        ]
    },
];
