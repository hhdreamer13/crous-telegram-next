import { Composer } from "micro-bot";
import { NextResponse } from "next/server";
const { Telegraf } = require("telegraf");

const token = "1588288656:AAG0etwxH9EKDj0qHfkuQEimax73TfJ7YUk";

const bot = new Telegraf(token);

// const bot = new Composer();

bot.start((ctx) => ctx.reply("Bonjour !"));

// Ce robot est un assistant pour les téléconseillers du centre de communication de Crous d'Île-de-France
// Ce robot soutiens les commandes ainsi que les chats
// J'ajouterai ici une liste des commandes et des mot clès que le bot comprendre

// Micro bot codes for server

// Importer des bibliothèques essentielles (pas pour en ligne)
// const { Telegraf } = require('telegraf')

// Controler le bot de Telegram

// const bot = new Telegraf(token)

// Les commandes principal

bot.help((ctx) => {
  ctx.reply("Ce bot peut exécuter les ordres suivants\n - /start\n - /help");
});

// Les commandes alternatives

// les adresses des responsables

bot.hears(["leo", "léo"], (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
<b>Léo Angioletti</b>
Responsable du centre de contact IDF

T. : 01 40 51 36 55
M. : 06 28 47 31 38
leo.angioletti@crous-paris.fr
    `,
    {
      parse_mode: "HTML",
    }
  );
});

bot.hears("arnaud", (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
<b>Arnaud Duché</b>
Responsable adjoint du centre de contact IDF

T. : 01 40 51 58 37
M. : 07 86 17 26 83
arnaud.duche@crous-paris.fr
    `,
    {
      parse_mode: "HTML",
    }
  );
});

// Bold, italic and other html typing formats
bot.hears(["logement", "LOGEMENT"], (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
<b>Versailles</b> : Vous pourrez transférer l’appel à un gestionnaire du service logement (via Kiamo).

<b>Paris</b> : L’étudiant devra envoyer un mail au service logement du Crous de Paris via l’assistance MSE.

<b>Créteil</b> : L’étudiant devra envoyer un mail au service logement du Crous de Créteil via l’assistance MSE.
    `,
    {
      parse_mode: "HTML",
    }
  );
});

// Les mot clès que le bot comprend

bot.hears(["recours", "Recours"], (ctx) => {
  ctx.reply(`
les adresses à communiquer aux étudiants pour leur permettre d’envoyer leurs demandes écrites de recours :

Paris : 47 rue des écoles 75005 Paris

Créteil : 4 Rue Georges Enesco, 94000 Créteil, adresser le courrier « à l’attention du Recteur, Service de l’Enseignement Supérieur du Rectorat de Créteil ».

Versailles : 3 Boulevard de Lesseps, 78000 Versailles
    
    `);
});

bot.hears(["présence", "presence"], (ctx) => {
  ctx.reply(`
Les certificats de scolarité sont de nouveaux acceptés (dans la limite des 3 années précédant la demande  pour justifier d’une présence en France.
 
Pour rappel les documents acceptés :
        -          Certificat de scolarité (N-3 max)
        -          Copie du plus vieux titre de séjour
        -          Copie de récépissé titre de séjour
        -          Attestation de la préfecture avec temps de présence en France obligatoirement
         
        Pour les mineurs :
        -          Copie du plus ancien titre de circulation pour mineur
    
    `);
});

bot.hears(["numerisation", "numérisation"], (ctx) => {
  ctx.reply(
    `
Adresse des Prestataires de numérisation

<b>Pour les dossiers de Paris :</b>

Centre de Numérisation du Crous de Paris
TSA 64023
59901 Lille cedex 9

<b>Pour les dossiers de Créteil :</b>

Centre de numérisation du Crous de Créteil
TSA 74024
59901 Lille cedex 9

<b>Pour les dossiers de Versailles :</b>

Centre de Numérisation du Crous de Versailles
TSA 84025
59901 Lille cedex 9

    `,
    {
      parse_mode: "HTML",
    }
  );
});

bot.hears(["mail type1", "Mail Type1"], (ctx) => {
  ctx.reply(
    `
<b>Demande d’accusé de réception PJ :</b>

Bonjour,
    
J'accuse bonne réception de votre pièce justificative du XX/XX/XXXX et du XX/XX/XXXX
Il faut maintenant patienter les délais de traitement.
    
Bien à vous.
    
Le service des bourses
    
    `,
    {
      parse_mode: "HTML",
    }
  );
});

bot.hears(["mail type2", "Mail Type2"], (ctx) => {
  ctx.reply(
    `
<b>Crédits insuffisants :</b>

Vous avez déjà utilisé X droits à bourse au titre de votre cursus licence ou équivalent. 
Je vous informe que la réglementation des bourses ne vous permet de bénéficier que de 5 droits à la bourse au titre de ce cursus, sous réserve de l'obtention d'un nombre de crédits suffisants. 
En conséquence, à défaut d'une progression, votre XX droit à bourse est soumis à l'obtention de XX crédits ECTS (soit la validation d'une année ou de deux semestres). 
Veuillez nous envoyer vos relevés de notes justifiant de l'obtention des XX ECTS
(en vous connectant à l'adresse : https://www.messervices.etudiant.gouv.fr, rubrique "Suivi du dossier social étudiant (DSE)").

Cordialement, 
Le service des bourses

    
    `,
    {
      parse_mode: "HTML",
    }
  );
});

bot.hears(["izly", "IZLY"], (ctx) => {
  ctx.reply(`
Les contacts avec le service Izly se feront via le Crous de gestion de l’étudiant.

Paris:      assistance-izly@crous-paris.fr
Créteil:    support.izly@crous-créteil.fr
Versaille:  assistance-izly@crous-versailles.fr
    `);
});

// bot.hears(['cvec', 'CVEC'], (ctx) => {
//     ctx.reply(`
// Sont exonérés :
// - Les boursiers du Crous ;
// - Les réfugiés ;
// - Les demandeurs d’asile ;
// - Les étudiants boursiers campus France.
//     `
//     )
// })

// Dictionnaire des Acronyme

bot.hears(["AF", "af"], (ctx) => {
  ctx.reply(`
    Avis Fiscal
    `);
});

bot.hears(["AGLAE", "aglae"], (ctx) => {
  ctx.reply(`
    Application pour la Gestion du Logement et des Aides Etudiantes
    `);
});

bot.hears(["AMM", "amm"], (ctx) => {
  ctx.reply(`
    Aide à la Mobilité Master
    `);
});

bot.hears(["ARE", "are"], (ctx) => {
  ctx.reply(`
    Allocation Retour à l’Emploi
    `);
});

bot.hears(["ASA", "asa"], (ctx) => {
  ctx.reply(`
    Aides Spécifiques Annuelles
    `);
});

bot.hears(["ASAA", "asaa"], (ctx) => {
  ctx.reply(`
    L’Allocation Spécifique d’Allocation Annuelle
    `);
});

bot.hears(["ASAP", "asap"], (ctx) => {
  ctx.reply(`
    Aides Spécifiques Allocations Ponctuelles
    `);
});

bot.hears(["ASE", "ase"], (ctx) => {
  ctx.reply(`
    Aide sociale à l’Enfance
    `);
});

bot.hears(["ASS", "ass"], (ctx) => {
  ctx.reply(`
    Allocation de Solidarité Spécifique
    `);
});

bot.hears(["BCS", "bcs"], (ctx) => {
  ctx.reply(`
    Bourse sur Critères Sociaux
    `);
});

bot.hears(["BM", "bm"], (ctx) => {
  ctx.reply(`
    Bourse au Mérite
    `);
});

bot.hears(["CAVEJ", "cavej"], (ctx) => {
  ctx.reply(`
Centre Audiovisuel d’Etudes Juridiques

❗️ Les étudiants au CAVEJ pouvant justifier d’une formation en présentiel peuvent prétendre aux points de distance.
    `);
});

bot.hears(["CNED", "cned"], (ctx) => {
  ctx.reply(`
Centre National d’Enseignement à Distance

❗️ Les étudiants au CNED ne peuvent pas prétendre à des points de distance, vous devez vérifier que le forçage distance est bien à 0 kilomètre.
    `);
});

bot.hears(["CNOUS", "cnous"], (ctx) => {
  ctx.reply(`
    Centre National des Œuvres Universitaires et Scolaires
    `);
});

bot.hears(["GEN", "gen"], (ctx) => {
  ctx.reply(`
    La Grande Ecole du Numérique
    `);
});

bot.hears(["UAIRNE", "uairne"], (ctx) => {
  ctx.reply(`
    Unité Administrative Immatriculée au Répertoire National des Etablissements
    `);
});

bot.hears(["CROUS", "crous"], (ctx) => {
  ctx.reply(`
    Centre Régional des Œuvres Universitaires et Scolaires
    `);
});

bot.hears(["CVEC", "cvec"], (ctx) => {
  ctx.reply(
    `
    <b>C</b>ontribution de <b>V</b>ie <b>E</b>tudiante et de <b>C</b>ampus

    🔸 Tous les étudiants inscrits en initial dans un établissement d’ES doivent s’en acquitter.
    
    🔸 Les étudiants en Apprentissage, les étudiants au CNED et les étudiants en DAEU doivent eux aussi s’acquitter de la CVEC.
    
    ❗️ Le paiement de la CVEC peut se faire sur internet (carte de crédit) ou via la poste avec le module <b>EFICASH</b> (frais supplémentaire de 5 euros à indiquer à l’étudiant).
    
    ❗️ En cas de changement de l'établissement ou académie, l’étudiant doit se rapprocher de son établissement pour qu’il l’accepte pour au motif qu’il s’agit d’une taxe nationale.

    ❗️ Les étudiants boursiers du Crous n’ont pas de démarche à effectuer pour demander le remboursement, ce dernier se fait automatiquement <b>dans un délai de 3 mois</b> après le premier versement de la bourse.

    ❗️ Pour les autres étudiants exonérés, la demande de remboursement se fait sur la plateforme CVEC via MSE.gouv.fr 


    Sont exonérés :

    🔸 Les boursiers du Crous

    🔸 Les réfugiés 

    🔸 Les demandeurs d’asile 

    🔸 Les étudiants boursiers campus France.

    `,
    {
      parse_mode: "HTML",
    }
  );
});

bot.hears(["DAEU", "daeu"], (ctx) => {
  ctx.reply(`
    Diplôme d’Accès aux Etudes Universitaires
    `);
});

bot.hears(["DSE", "dse"], (ctx) => {
  ctx.reply(`
    Dossier Social Etudiant
    `);
});

bot.hears(["ECTS", "ects"], (ctx) => {
  ctx.reply(`
    European Credits Transfer System
    `);
});

bot.hears(["ES", "es"], (ctx) => {
  ctx.reply(`
    Enseignement Supérieur
    `);
});

bot.hears(["ICR", "icr"], (ctx) => {
  ctx.reply(`
    Informations Complémentaires de Renseignement
    `);
});

bot.hears(["IFSI", "ifsi"], (ctx) => {
  ctx.reply(`
    Instituts de Formation en Soins infirmiers
    `);
});

bot.hears(["INE", "ine"], (ctx) => {
  ctx.reply(`
    Identifiant National Etudiant
    `);
});

bot.hears(["MAA", "maa"], (ctx) => {
  ctx.reply(`
    Ministère de l’Agriculture et de l’Alimentation
    `);
});

bot.hears(["MEEF", "meef"], (ctx) => {
  ctx.reply(`
    master des Métiers de l’Enseignement, de l’Education et de la Formation
    `);
});

bot.hears(["CPGE", "cpge"], (ctx) => {
  ctx.reply(`
    Classe préparatoire aux grandes écoles
    `);
});

bot.hears(["MESRI", "mesri"], (ctx) => {
  ctx.reply(`
    Ministère de l’Enseignement Supérieur de la Recherche et de l’innovation
    `);
});

bot.hears(["MIC", "mic"], (ctx) => {
  ctx.reply(`
    Ministère de la Culture
    `);
});

bot.hears(["MSE", "mse"], (ctx) => {
  ctx.reply(`
    Mes Services Etudiants
    `);
});

bot.hears(["APE", "ape"], (ctx) => {
  ctx.reply(`
    Activité Principale Exercée
    `);
});

bot.hears(["OFPRA", "ofpra"], (ctx) => {
  ctx.reply(`
    Office Française de Protection des Réfugiés et Apatride
    `);
});

bot.hears(["OR", "or"], (ctx) => {
  ctx.reply(`
    Ordre de reversement
    `);
});

bot.hears(["RBG", "rbg"], (ctx) => {
  ctx.reply(`
    Revenu Brut Global
    `);
});

bot.hears(["RSA", "rsa"], (ctx) => {
  ctx.reply(`
    Revenu de Solidarité Actif
    `);
});

bot.hears(["CGV", "cgv"], (ctx) => {
  ctx.reply(`
    Complément Grandes Vacances
    `);
});

bot.hears(["CDAPH", "cdaph"], (ctx) => {
  ctx.reply(`
    Les Commissions des droits et de l'autonomie des personnes handicapées
    `);
});

bot.hears(["mdph", "MDPH"], (ctx) => {
  ctx.reply(`
    Maison départementale des personnes handicapées
    `);
});

bot.hears(["frais", "frais de dossier", "frais dse"], (ctx) => {
  ctx.reply(
    `
    4 Euro
    OK : par virement
    KO : par chèque 
    Différé 

    🔸 Payer par chèque : Il faut joindre un chèque (à l'exclusion de tout autre moyen de paiement) d'un montant de 4 €, libellé à l'ordre de l'agent comptable du Crous de Paris.

    ❗️ Remboursement : Justificatif de double paiement et RIB => libellé à l'ordre de l'agent comptable du Crous de Paris.
    
    `,
    {
      parse_mode: "HTML",
    }
  );
});

bot.hears(["rectificatif", "avis rectificatif", "réctificatif"], (ctx) => {
  ctx.reply(
    `
    🔸 L'avis réctificatif délivre sur l'année concernée.

    ❗️ On prend "l'AF 2020" sur les revenus 2019, mais l'avis réctificatif est "l'avis 2019" directement.
    
    `,
    {
      parse_mode: "HTML",
    }
  );
});

bot.hears(["réfugié", "refugié", "refugie"], (ctx) => {
  ctx.reply(
    `
    🔸 Demander lettre de l'OFPRA.
    
    🔸 Prendre son AF (AF N-2 ou N-1 selon date d’arrivée en France)

    🔸 S’ils viennent juste d’arriver : une attestation d’aide ou moyen d’existence (demander une attestation à la CAF de non perception d’aides ainsi que sa déclaration sur l’honneur de revenus).
    
    ❗️ Bénéficier de CGV 

    ❗️ Être exonérés de la CVEC
    `,
    {
      parse_mode: "HTML",
    }
  );
});

bot.hears(["handicapé", "handicape", "handicapés"], (ctx) => {
  ctx.reply(
    `

    🔸 Critères d’attribution pour les étudiants handicapés : pas de limite d’âge 
    
    🔸 Pas de limit d'âge pour prétendre à une aide du service social si atteints d’un handicap reconnu par la CDAPH.

    🔸 Trois droits de bourse supplémentaires pour l’ensemble de la scolarité : Les étudiants handicapés reconnus par CDAPH.

    `,
    {
      parse_mode: "HTML",
    }
  );
});

bot.hears(
  [
    "isolé",
    "isole",
    "particulier",
    "divorcé",
    "décédé",
    "divorce",
    "decede",
    "cas particulier",
  ],
  (ctx) => {
    [
      ctx.telegram.sendMessage(
        ctx.chat.id,
        `
    ❗️ Dans tous les cas, à titre vérificatif, les avis fiscaux des deux parents doivent être fournis ! Ensuite, au moment de l'instruction le gestionnaire vérifiera les ressources à prendre en compte.

    🔸 Un seul des deux parents est en situation de parent isolé sur l'année de référence n-2 (lettre T sur l'avis fiscal et/ou parent isolé auprès de la Caf). Dans ce cas, les revenus du parent isolé sont pris en compte. Il faut également qu'il rattache l'étudiant sur son avis fiscal.

    🔸 S'il y a un jugement de divorce ou de séparation, ou un acte sous signature privé contresigné par un notaire, et que ce document légal prévoit la résidence exclusive de l'enfant chez l'un ainsi que le versement de la pension alimentaire par l'autre parent. L'enfant doit également être rattaché au parent ayant la garde. Dans ce cas, les revenus du parent à qui est attribuée la résidence exclusive sont pris en compte.

    🔸 Si l'étudiant a un parent décédé. Dans ce cas, merci de fournir le certificat de décès. Si les parents de l'étudiant étaient mariés ensemble, merci de fournir les justificatifs concernant la pension de réversion (ou attestation sur l'honneur le cas échéant).

    🔸 Si l'étudiant n'est reconnu à la naissance que par un seul parent. Dans ce cas, merci de fournir une copie du livret de famille.

    `,
        {
          parse_mode: "HTML",
        }
      ),
      ctx.telegram.sendChatAction(ctx.chat.id, "upload_photo"),
      ctx.telegram.sendPhoto(ctx.chat.id, {
        source: "ressource/particulier.jpg",
      }),
    ];
  }
);

// Liste des pays

// Utilisation des points HTML
bot.hears(["DOM", "dom", "TOM", "tom", "DOM TOM", "dom tom"], (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
&#8226; Guyane française
&#8226; Guadeloupe
&#8226; La Réunion
&#8226; Martinique
&#8226; Mayotte
&#8226; Nouvelle-Calédonie
&#8226; Polynésie française
&#8226; Wallis-et-Futuna
&#8226; Terres australes et antarctiques françaises
&#8226; Saint-Pierre-et-Miquelon
&#8226; Saint-Barthélemy
&#8226; Saint-Martin
    `,
    {
      parse_mode: "HTML",
    }
  );
});

bot.hears(
  [
    "Méditerranée",
    "méditerranée",
    "mediterranee",
    "pays riverains de la Méditerranée",
    "pays méditerranée",
    "pays mediterranee",
    "pays riverains de la méditerranée",
    "pays méditerranéen",
  ],
  (ctx) => {
    [
      ctx.telegram.sendMessage(
        ctx.chat.id,
        `
<b>Rive européenne</b> :
&#8226; France
&#8226; Royaume-Uni
&#8226; Espagne
&#8226; Monaco
&#8226; Italie
&#8226; Malte
&#8226; Slovénie
&#8226; Croatie
&#8226; Bosnie-Herzégovine
&#8226; Monténégro
&#8226; Albanie
&#8226; Grèce
&#8226; Turquie

<b>Rive asiatique</b> :
&#8226; Chypre
&#8226; Syrie
&#8226; Liban
&#8226; Israël
&#8226; Palestine

<b>Rive africaine</b> :
&#8226; Égypte
&#8226; Libye
&#8226; Tunisie
&#8226; Algérie
&#8226; Maroc
    `,
        {
          parse_mode: "HTML",
        }
      ),
      ctx.telegram.sendChatAction(ctx.chat.id, "upload_photo"),
      ctx.telegram.sendPhoto(ctx.chat.id, {
        source: "ressource/mediterranee.png",
      }),
    ];
  }
);

// Inline keys -- commande 1 (site)

bot.command("site", (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, "Appuyez sur les buttons", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Crous de Paris", url: "www.crous-paris.fr" }],
        [
          { text: "Crous de Versaille", url: "www.crous-versailles.fr" },
          { text: "Crous de Créteil", url: "www.crous-creteil.fr" },
        ],
        [
          {
            text: "Mes Services Étudiant",
            url: "www.messervices.etudiant.gouv.fr",
          },
        ],

        // [{text: "Paris", callback_data: "PAR"}],
        // [{text: "Versaille", callback_data: "VER"}, {text: "Créteil", callback_data: "CRE"}]
      ],
    },
  });
});

// bot.action('VER', (ctx) => {
//     ctx.deleteMessage()
//     ctx.telegram.sendMessage(ctx.chat.id, 'CROUS de Versailles',
//     {
//         reply_markup: {
//             inline_keyboard: [
//                 [{text: "Retour", callback_data: "RET"}]
//             ]
//         }
//     })
// })

// bot.action('CRE', (ctx) => {
//     ctx.deleteMessage()
//     ctx.telegram.sendMessage(ctx.chat.id, 'CROUS de Créteil',
//     {
//         reply_markup: {
//             inline_keyboard: [
//                 [{text: "Retour", callback_data: "RET"}]
//             ]
//         }
//     })
// })

// bot.action('PAR', (ctx) => {
//     ctx.deleteMessage()
//     ctx.telegram.sendMessage(ctx.chat.id, 'CROUS de Paris',
//     {
//         reply_markup: {
//             inline_keyboard: [
//                 [{text: "Retour", callback_data: "RET"}]
//             ]
//         }
//     })
// })

// bot.action('RET', (ctx) => {
//     ctx.deleteMessage()
//     ctx.telegram.sendMessage(ctx.chat.id, 'Quel est le CROUS de gestion ?',
//     {
//         reply_markup: {
//             inline_keyboard: [
//                 [{text: "Paris", callback_data: "PAR"}],
//                 [{text: "Versaille", callback_data: "VER"}, {text: "Créteil", callback_data: "CRE"}]

//             ]
//         }
//     })

// })

// bot.action('RETSITE', (ctx) => {
//     ctx.deleteMessage()
//     ctx.telegram.sendMessage(ctx.chat.id, '?',
//     {
//         reply_markup: {
//             inline_keyboard: [
//                 [{text: "Paris", callback_data: "PAR"}],
//                 [{text: "Versaille", callback_data: "VER"}, {text: "Créteil", callback_data: "CRE"}]

//             ]
//         }
//     })

// })

// Inline keys -- commande 2 (revision)

bot.command("revision", (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, "Les révisions :", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Maladie", callback_data: "MALADIE" },
          { text: "Chômage", callback_data: "CHOMAGE" },
        ],
        [
          { text: "Divorce", callback_data: "DIVORCE" },
          { text: "Décès", callback_data: "DECES" },
        ],
        [
          { text: "Retraite", callback_data: "RETRAITE" },
          { text: "Surendettement", callback_data: "ENDETTE" },
        ],
        [
          { text: "Réduction du temps de travail", callback_data: "REDUCTION" },
          { text: "Mise en disponibilité", callback_data: "MISED" },
        ],
        [
          {
            text: "Redressement judiciaire ou liquidation judiciaire",
            callback_data: "JUDICIAIRE",
          },
        ],
        [
          {
            text: "Congés sans traitement, sans solde ou parental",
            callback_data: "CONGE",
          },
        ],
        [{ text: "COVID-19", callback_data: "COVID" }],
      ],
    },
  });
});

bot.action("MALADIE", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Les pièces complémentaires nécessaires sont :

🔸 Indemnités journalière versées par l’assurance maladie.

🔸 Les 3 derniers bulletins de salaire.

🔸 Le complément versé par la complémentaire santé (non obligatoire).
        `,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "Retour", callback_data: "RETREVISION" }]],
      },
    }
  );
});

bot.action("CHOMAGE", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Les pièces complémentaires nécessaires sont :
    
🔸 Montant de l’indemnité journalière de l’allocation d’Aide au Retour à l’Emploi (ARE).

🔸 Si le parent ne bénéficie plus de l’ARE, il doit nous fournir le montant de l’indemnité journalière de l’allocation de Solidarité Spécifique (ASS).

🔸 Si les parents ne bénéficient pas de l’ARE ni de l’ASS, il doit nous fournir l’attestation RSA.
            `,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "Retour", callback_data: "RETREVISION" }]],
      },
    }
  );
});

bot.action("DIVORCE", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Les pièces complémentaires nécessaires sont :
    
🔸 Jugement de divorce, lettre de conciliation ou de non conciliation.

🔸 Allocation soutien familial.

❗️ Nouveau RBG = RBG du parent ayant la garde + revenus capitaux mobiliers / 2 + revenus fonciers / 2.
            `,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "Retour", callback_data: "RETREVISION" }]],
      },
    }
  );
});

bot.action("DECES", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Les pièces complémentaires nécessaires sont :
    
🔸 Acte de décès

❗️ Nouveau RBG = RBG autre parent + revenus capitaux mobiliers + revenus fonciers.

❗️ Si l’étudiant est orphelin de ses deux parents, nous pouvons prendre son AF ou celui de son tuteur (si l’étudiant est encore mineur) + demander à l’étudiant de se rapprocher du service social.

            `,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "Retour", callback_data: "RETREVISION" }]],
      },
    }
  );
});

// Retraite a des button pour deux choix et un retour
bot.action("RETRAITE", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Choisissez :
            `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Retraite : pour le privé", callback_data: "RPRIVE" }],
          [
            {
              text: "Retraite : pour la fonction publique",
              callback_data: "RPUBLIQ",
            },
          ],
          [{ text: "Retour", callback_data: "RETREVISION" }],
        ],
      },
    }
  );
});

bot.action("RPRIVE", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Les pièces complémentaires nécessaires sont :

🔸 Montants versés par l’assurance retraite.

🔸 Montants versés par la complémentaire retraite.

❗️ Nouveau RBG = Retraite + RBG autre parent + revenus capitaux mobiliers + revenus fonciers.
    `,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "Retour", callback_data: "RETRETRAITE" }]],
      },
    }
  );
});

bot.action("RPUBLIQ", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Les pièces complémentaires nécessaires sont :

🔸 Retraite de base.

🔸 Retraite additionnelle de la fonction publique (si le parent de l’étudiant à plus de 62 ans).

❗️ Nouveau RBG = Retraite + RBG autre parent + revenus capitaux mobiliers + revenus fonciers.
    `,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "Retour", callback_data: "RETRETRAITE" }]],
      },
    }
  );
});

bot.action("RETRETRAITE", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Choisissez :
            `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Retraite : pour le privé", callback_data: "RPRIVE" }],
          [
            {
              text: "Retraite : pour la fonction publique",
              callback_data: "RPUBLIQ",
            },
          ],
          [{ text: "Retour", callback_data: "RETREVISION" }],
        ],
      },
    }
  );
});

// fin de retraite

bot.action("ENDETTE", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Les pièces complémentaires nécessaires sont :
    
🔸 Plan conventionnel de redressement définitif, daté.

🔸 OU tableau des mesures imposées par la commission, daté.
        `,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "Retour", callback_data: "RETREVISION" }]],
      },
    }
  );
});

bot.action("JUDICIAIRE", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Les pièces complémentaires nécessaires sont :
    
🔸 Copie du jugement de liquidation ou de redressement judiciaire.

🔸 Avis fiscal N-1.
        `,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "Retour", callback_data: "RETREVISION" }]],
      },
    }
  );
});

bot.action("REDUCTION", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Les pièces complémentaires nécessaires sont :
    
🔸 Avenant au contrat de travail ou arrêté (pour les fonctionnaires) prévoyant la modification du temps de travail.

🔸 Les 3 derniers bulletins de salaires.

❗️ Nouveau RBG = Résultat révision + RBG autre parent + revenus capitaux mobiliers + revenus fonciers.

        `,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "Retour", callback_data: "RETREVISION" }]],
      },
    }
  );
});

bot.action("CONGE", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Les pièces complémentaires nécessaires sont :
    
🔸 Document attestant de la prise de congés sans solde (privé et public).

❗️ Nouveau RBG = RBG autre parent + revenus capitaux mobiliers + revenus fonciers.

        `,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "Retour", callback_data: "RETREVISION" }]],
      },
    }
  );
});

bot.action("MISED", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Les pièces complémentaires nécessaires sont :
    
🔸 Décision de l’administration attestant de la mise en disponibilité

🔸 Copie des bulletins de salaires

❗️ Nouveau RBG = Résultat révision + RBG autre parent + revenus capitaux mobiliers + revenus fonciers.
        `,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "Retour", callback_data: "RETREVISION" }]],
      },
    }
  );
});

// Covid a des button pour deux choix et un retour
bot.action("COVID", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Choisissez :
            `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Profession salariée", callback_data: "CSALAR" }],
          [{ text: "Profession indépendante", callback_data: "CINDEP" }],
          [{ text: "Retour", callback_data: "RETREVISION" }],
        ],
      },
    }
  );
});

bot.action("CSALAR", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Les pièces complémentaires nécessaires sont :

🔸 En cas de chômage : attestation pôle emploi avec le montant des indemnités journalières

🔸 En cas de chômage partiel : une copie des bulletins de salaire des mois concernés
    `,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "Retour", callback_data: "RETCOVID" }]],
      },
    }
  );
});

bot.action("CINDEP", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Les pièces complémentaires nécessaires sont :

🔸 Extrait K : concerne les entreprises commerciales individuelles, c’est-à-dire les commerçants.

🔸 Extrait Kbis : concerne toutes les formes de sociétés commerciales ainsi que les sociétés à caractère civil, et ce peu importe l’activité exercée.

🔸 Extrait D1 : concerne les entreprises individuelles artisanales.

❗️ L'étudiant devra fournir à l'appui de sa demande initiale de DSE, ou la demande de révision de son DSE tout document attestant du <b>code APE</b> (Activité Principale Exercée), appelé également <b>code NAF</b>, et de l'exercice effectif de l'activité en tant qu'indépendant de chacun des parents concernés.

❗️ Il devront également joindre une attestation de leur comptable justifiant d’une baisse de revenu par rapport à l’année N-1 .

    `,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "Retour", callback_data: "RETCOVID" }]],
      },
      parse_mode: "HTML",
    }
  );
});
// fin de covid

// Retours buttons

bot.action("RETREVISION", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, "Les révisions :", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Maladie", callback_data: "MALADIE" },
          { text: "Chômage", callback_data: "CHOMAGE" },
        ],
        [
          { text: "Divorce", callback_data: "DIVORCE" },
          { text: "Décès", callback_data: "DECES" },
        ],
        [
          { text: "Retraite", callback_data: "RETRAITE" },
          { text: "Surendettement", callback_data: "ENDETTE" },
        ],
        [
          { text: "Réduction du temps de travail", callback_data: "REDUCTION" },
          { text: "Mise en disponibilité", callback_data: "MISED" },
        ],
        [
          {
            text: "Redressement judiciaire ou liquidation judiciaire",
            callback_data: "JUDICIAIRE",
          },
        ],
        [
          {
            text: "Congés sans traitement, sans solde ou parental",
            callback_data: "CONGE",
          },
        ],
        [{ text: "COVID-19", callback_data: "COVID" }],
      ],
    },
  });
});

bot.action("RETCOVID", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Choisissez :
            `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Profession salariée", callback_data: "CSALAR" }],
          [{ text: "Profession indépendante", callback_data: "CINDEP" }],
          [{ text: "Retour", callback_data: "RETREVISION" }],
        ],
      },
    }
  );
});

// Inline keys -- commande 3 (prise de revenus)

bot.command("revenu", (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, "Prise des revenus :", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Étudiants français 🇫🇷", callback_data: "EFR" }],
        [{ text: "Étudiants européens 🇪🇺", callback_data: "EEU" }],
        [{ text: "Étudiants étrangers 🏁", callback_data: "EET" }],
        [{ text: "Étudiants de Nouvelle-Calédonie 🇳🇨", callback_data: "ENC" }],
        [{ text: "Étudiant marié", callback_data: "EMR" }],
        [{ text: "Étudiant avec un enfant", callback_data: "EEN" }],
        [{ text: "Étudiant réfugié", callback_data: "ERF" }],
        [
          {
            text: "Étudiant orphelin de ses deux parents / Étudiant pupille de la Nation",
            callback_data: "EOR",
          },
        ],
        [
          {
            text: "Étudiant à l’Aide Sociale à l’Enfance (ASE)",
            callback_data: "EAS",
          },
        ],
      ],
    },
  });
});

bot.action("EFR", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
🔸 Parents en France : prendre l’AF des parents N-2 de la demande.

🔸 Parents à l’étranger : demande de consulat à faire <b>\u21E8 indiquer via un ticket</b>.
        `,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "Retour", callback_data: "RETREVENU" }]],
      },
      parse_mode: "HTML",
    }
  );
});

bot.action("EEU", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
🔘 <b>Prise de revenus :</b>

🔸 Parents en France : prendre l’AF des parents N-2 de la demande.

🔸 Parents en Europe : joindre la <b>« fiche Europe »</b> avec justificatifs fiscaux traduits.

🔸 Parents hors Europe : joindre la <b>« fiche autre »</b> avec justificatifs fiscaux traduits.


🔘 <b>Justfier de sa présence en France :</b>

🔸 Une présence active minimum est demandée pour l’année N-1 :
    - soit un certificat de scolarité N-1.
    - soit un contrat de travail même d’une journée pour lui ou ses parents.


🔸 Une présence de 5 ans minimum en France.

            `,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "Retour", callback_data: "RETREVENU" }]],
      },
      parse_mode: "HTML",
    }
  );
});

bot.action("EET", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
🔘 <b>Prise de revenus :</b>

🔸 Etudiant de <b>– de 25 ans</b> : prendre l’AF des parents N-2 de la demande avec obligation de rattachement de l’étudiant sur leur AF.

🔸 Etudiant de <b>+ de 25 ans</b> : prendre l’AF des parents N-2 de la demande, l’étudiant doit fournir son AF N-2 pour vérifier si <u>les adresses doivent être identiques</u>.


🔘 <b>Justfier de sa présence en France :</b>

🔸 Pour justifier de sa présence en France à l’année N-2 de la demande :

    - Copie du plus vieux titre de séjour
    - Copie de récépissé titre de séjour
    - Attestation de la préfecture avec temps de présence en France obligatoirement
    - Certificat de scolarité N-1 / N-2 / N -3

    Pour les mineurs :
    - Copie du plus ancien titre de circulation pour mineur.



            `,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "Retour", callback_data: "RETREVENU" }]],
      },
      parse_mode: "HTML",
    }
  );
});

bot.action("ENC", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
    
🔸 Demander le Relevé d’information des revenus familiaux (remplace l’AF).

🔸 La carte CPS (indique le nombre d’enfant à charge des parents).

            `,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "Retour", callback_data: "RETREVENU" }]],
      },
    }
  );
});

bot.action("EMR", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
    
🔸 Prendre leur AF commun <u>seulement</u> s’ils déclarent 90% d’un SMIC.

        `,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "Retour", callback_data: "RETREVENU" }]],
      },
      parse_mode: "HTML",
    }
  );
});

bot.action("EEN", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
    
🔸 Prendre son AF avec attestation sur l’honneur de rattachement de l’enfant.

        `,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "Retour", callback_data: "RETREVENU" }]],
      },
    }
  );
});

bot.action("ERF", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Etudiants réfugiés :

🔸 Demander lettre de l’Office Française de Protection des Réfugiés et Apatrides (Ofpra).

🔸 AF N-2 ou N-1 selon date d’arrivée en France.

🔸 S’ils viennent juste d’arriver lui demander une attestation à la Caisse d’Allocation Familiale de non perception d’aides.

🔸 Sa déclaration sur l’honneur de revenus.

        `,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "Retour", callback_data: "RETREVENU" }]],
      },
    }
  );
});

bot.action("EOR", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
    
🔸 Prendre de revenus de l’étudiant.

        `,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "Retour", callback_data: "RETREVENU" }]],
      },
    }
  );
});

bot.action("EAS", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
    
🔸 Prendre de revenus de l’étudiant.

❗️ Attention leur demande de bourse est gérée avec une assistante sociale.

        `,
    {
      reply_markup: {
        inline_keyboard: [[{ text: "Retour", callback_data: "RETREVENU" }]],
      },
    }
  );
});

// Retours buttons revenus
bot.action("RETREVENU", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, "Prise des revenus :", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Étudiants français 🇫🇷", callback_data: "EFR" }],
        [{ text: "Étudiants européens 🇪🇺", callback_data: "EEU" }],
        [{ text: "Étudiants étrangers 🏁", callback_data: "EET" }],
        [{ text: "Étudiants de Nouvelle-Calédonie 🇳🇨", callback_data: "ENC" }],
        [{ text: "Étudiant marié", callback_data: "EMR" }],
        [{ text: "Étudiant avec un enfant", callback_data: "EEN" }],
        [{ text: "Étudiant réfugié", callback_data: "ERF" }],
        [
          {
            text: "Étudiant orphelin de ses deux parents / Étudiant pupille de la Nation",
            callback_data: "EOR",
          },
        ],
        [
          {
            text: "Étudiant à l’Aide Sociale à l’Enfance (ASE)",
            callback_data: "EAS",
          },
        ],
      ],
    },
  });
});

// Inline keys -- commande 4 (actualités importantes)

bot.command("actualite", (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, "Les actualités importantes :", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Attestation d’assiduité", callback_data: "ASSIDU" }],
        [{ text: "En cas d'urgence sociale", callback_data: "URGSOC" }],
        [
          {
            text: "Aide de 500 euros annoncée par le gouvernement",
            callback_data: "AEUGOU",
          },
        ],
        [
          {
            text: "Etudiants avec nationalité britanique",
            callback_data: "ETUBRI",
          },
        ],
        [
          {
            text: "Accompagnement psychologique étudiants",
            callback_data: "ACCPSY",
          },
        ],
        [
          {
            text: "Suppression des RIB dans les dossier Aglaé",
            callback_data: "SUPRIB",
          },
        ],
        [
          {
            text: "Remboursement des frais de dossier",
            callback_data: "REMFRA",
          },
        ],
      ],
    },
  });
});

bot.action("ASSIDU", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
🔸 L’attestation d’assiduité <b>est demandée uniquement</b> aux étudiants ayant une remontée d’inscription après décembre 2020.

        `,
    {
      parse_mode: "HTML",
    }
  );
});

bot.action("URGSOC", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
🔸 Il faut à partir de maintenant indiquer :
 
-          Le Crous de gestion de l’étudiant ;
-          L’établissement d’inscription ;  
-          Le numéro de téléphone de l’étudiant ;
-          L’adresse mail de l’étudiant ;
-          Une petite phrase avec l’explication de la situation.

        `,
    {
      parse_mode: "HTML",
    }
  );
});

bot.action("AEUGOU", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
🔸 L’aide de 500 euros annoncée par le gouvernement est une ASAP et non pas une aide supplémentaire « automatique ».
 
❗️ Merci de communiquer aux étudiants désirant en bénéficier la procédure des ASAP selon leur  Crous de gestion.

        `,
    {
      parse_mode: "HTML",
    }
  );
});

bot.action("ETUBRI", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
🔸 La période transitoire accordée pour le Brexit est terminée depuis le 01/01/2021.

❗️ A compter de cette date les étudiants de nationalité britannique sont considérés comme des étudiants hors Union Européen.

        `,
    {
      parse_mode: "HTML",
    }
  );
});

bot.action("ACCPSY", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
🔸 Veuillez trouver quelques précisions concernant les « chèques Psy », dispositif qui sera opérationnel à la fin du mois de mars 2021.
 
Les services de santé universitaires (SSU) sont au cœur du dispositif et agréent les psychologues qui contribuent au dispositif.
Les psychologues seront liés par convention avec l’université et répondront à une fiche de poste nationale. Ces psychologues en exercice libéral figureront sur une liste ouverte, les étudiants choisiront le psychologue dans cette liste. 
L’étudiant sera « orienté »  vers le dispositif par le médecin traitant ou le SSU (respect du parcours de soins). L’orientation est obligatoire. Il sera possible de bénéficier de plus de 3 chèques si cela ne suffit pas.
 
En cas d’interrogations d’étudiants, vous pourrez les inviter à se rapprocher de leur service des médecine universitaire.
Ou sur le site internet dédié : https://www.santepsyetudiants.beta.gouv.fr/


❗️ Les étudiants peuvent déjà se rapprocher de leur SSU en cas de difficulté, le dispositif classique fonctionne toujours et n’est pas débordé.

        `,
    {
      parse_mode: "HTML",
    }
  );
});

bot.action("SUPRIB", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
🔸 En cas de sollicitation, merci d’indiquer à l’étudiant la procédure :
 
1)      Modification des coordonnées bancaires par l’étudiant sur son profil MSE +
2)      Téléverser une copie de son nouveau RIB dans son D.S.E
 
❗️ Attention si l’étudiant a 2 D.S.E il devra envoyer les copie sur chacun de ses dossiers).
        `,
    {
      parse_mode: "HTML",
    }
  );
});

bot.action("REMFRA", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
🔸 Les chèques de 4 euros pour paiement des frais de dossier sont à envoyer au Crous de Paris en courrier recommandé et ceux pour tous les étudiants de l’Ile de France.
 
🔸 Pour les demandes de remboursements (uniquement si il a payé plusieurs fois), l’étudiant devra envoyer un courrier à l’agence comptable du Crous de Paris avec une attestation sur l’honneur, le justificatif de paiement et son RIB.

        `,
    {
      parse_mode: "HTML",
    }
  );
});

// Inline keys -- commande 5 (aide complémentaires)

bot.command("aidec", (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, "Aides complémentaires", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Aide à la mobilité ParcourSup", callback_data: "AMPC" }],
        [{ text: "Aide au Mérite", callback_data: "ABMC" }],
        [{ text: "Aide à la mobilité Master", callback_data: "AMMC" }],
        [
          {
            text: "Bourse pendant les grandes vacances (CGV)",
            callback_data: "CGVC",
          },
        ],
      ],
    },
  });
});

bot.action("RETAIDEC", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, "Aides complémentaires", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Aide à la mobilité ParcourSup", callback_data: "AMPC" }],
        [{ text: "Aide au Mérite", callback_data: "ABMC" }],
        [{ text: "Aide à la mobilité Master", callback_data: "AMMC" }],
        [
          {
            text: "Bourse pendant les grandes vacances (CGV)",
            callback_data: "CGVC",
          },
        ],
      ],
    },
  });
});

// AMP
bot.action("AMPC", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, "Choisissez :", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Aide à la mobilité ParcourSup Conditions",
            callback_data: "AMPCON",
          },
        ],
        [
          {
            text: "Aide à la mobilité ParcourSup Procédure",
            callback_data: "AMPPRO",
          },
        ],
        [
          {
            text: "AMP : établissement hors université habilité",
            callback_data: "AMPETA",
          },
        ],
        [{ text: "Retour", callback_data: "RETAIDEC" }],
      ],
    },
  });
});

bot.action("AMPCON", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Les conditions d'AMP :

🔸 Le montant = 500 euros

🔸 Aide réservée aux étudiants boursiers au lycée à l’année N-1 et qui souhaitent s’inscrire, via Parcoursup, dans une formation située hors de leur académie de résidence.

🔸 Ne peut pas être attribuée aux personnes déjà étudiantes dans l’ES et en réorientation via Parcoursup.

🔸 Pour les demandes de recours de l’AMP, l’étudiant doit envoyer un courrier au directeur général de son Crous.

❗️ Depuis la rentrée 2020/2021 une nouvelle mesure permet aux étudiants boursiers au Lycée en Île-de-France de bénéficier sous avis de la commission d’accès aux études supérieur de cette aide et ce même s’ils s’inscrivent dans un établissement d’enseignement supérieur dans la même académie.

❗️❗️ Ces dossiers <b>sont indiqués comme non éligibles</b> dans la rubrique « AMP » sur MesServicesEtudiant, il est de votre devoir de nous les faire remonter.

        `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Retour", callback_data: "RETAMPC" }], //
        ],
      },
      parse_mode: "HTML",
    }
  );
});

bot.action("AMPPRO", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
La procédure d'AMP :

🔸 La demande peut être faite sur https://amp.etudiant.gouv.fr/ jusqu’au 14 septembre de l’année N.

🔸 Aide réservée aux étudiants boursiers au lycée à l’année N-1 et qui souhaitent s’inscrire, via Parcoursup, dans une formation située hors de leur académie de résidence.

❗️ depuis la rentrée 2020/2021 une nouvelle mesure permet aux étudiants boursiers au Lycée en IDF de bénéficier sous avis de la commission d’accès aux études supérieur de cette aide et ce même s’ils s’inscrivent dans un établissement d’enseignement supérieur dans la même académie.

❗️❗️ Ces dossiers <b>sont indiqués comme non éligibles</b> dans la rubrique « AMP » sur MesServicesEtudiant, il est de votre devoir de nous les faire remonter.

    `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Retour", callback_data: "RETAMPC" }], //
        ],
      },
      parse_mode: "HTML",
    }
  );
});

bot.action("AMPETA", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
La liste des établissements hors universités habilités :

- Le Conservatoire national supérieur d’art dramatique ;
- La Fondation de coopération scientifique Paris Sciences et Lettres – Quartier latin ;
- L’Ecole nationale des Chartes ;
- L’Ecole nationale supérieure de chimie de Paris ;
- L’Ecole nationale supérieure des mines de Paris ;
- L’Ecole normale supérieure ;
- L’Ecole pratique des hautes études ;
- L’Ecole supérieure de physique et de chimie industrielle de la ville de Paris ;
- L’Observatoire de Paris ;
- L’Université Paris-Dauphine.
        `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Retour", callback_data: "RETAMPC" }], //
        ],
      },
    }
  );
});

bot.action("RETAMPC", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, "Choisissez :", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Aide à la mobilité ParcourSup Conditions",
            callback_data: "AMPCON",
          },
        ],
        [
          {
            text: "Aide à la mobilité ParcourSup Procédure",
            callback_data: "AMPPRO",
          },
        ],
        [
          {
            text: "AMP : établissement hors université habilité",
            callback_data: "AMPETA",
          },
        ],
        [{ text: "Retour", callback_data: "RETAIDEC" }],
      ],
    },
  });
});
// Fin AMP

// BM
bot.action("ABMC", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, "Choisissez :", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Bourse au mérite nationale", callback_data: "ABMCON" }],
        [
          {
            text: "Bourse au mérite région (non visible sur Aglae)",
            callback_data: "ABMREG",
          },
        ],
        [{ text: "Retour", callback_data: "RETAIDEC" }],
      ],
    },
  });
});

bot.action("ABMCON", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Bourse au mérite nationale :

🔸 Avoir eu le baccalauréat avec <b>mention TB</b> l’année N-1 de la 1ère demande de bourse (la zone texte d’AGLAE).

🔸 Si le baccalauréat TB non indiqué dans la zone texte, demander à l’étudiant de fournir son relevé de notes du baccalauréat.

🔸 Les réorientations sont acceptées.

🔸 Les étudiants en CPGE peuvent prétendre à leur BM en cas de cubage si leur inscription en parallèle à l’université est en licence 3ème année.

❗️ Cette aide est cumulables avec Bourse au mérite région entre elles et avec d’autres aides.

        `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Retour", callback_data: "RETAMB" }], //
        ],
      },
      parse_mode: "HTML",
    }
  );
});

bot.action("ABMREG", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Bourse au mérite région (non visible sur Aglae) :

🔸 Versée aux étudiants ayant obtenu la mention TB au baccalauréat en Ile de France et s’inscrivant dans l’enseignement supérieur toujours en IDF.

🔸 Versée en une seule mensualité de 1000 euros.

🔸 Gestion hors DSE, pas de possibilité de suivi. L’étudiant n’a pas de démarches à effectuer.

🔸 Le Crous peut lui demander de justifier de pièces complémentaire via l’envoi d’un mail (pas de visibilité possible sur le fil AGLAE) l’étudiant répond par retour mail directement.

❗️ Indiquer à l’étudiant que le suivi de cette démarche se fait par un mail spécifique et que <b>le paiement de cette aide sera réalisé entre février et avril de l’année N</b>.

        `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Retour", callback_data: "RETAMB" }], //
        ],
      },
      parse_mode: "HTML",
    }
  );
});

bot.action("RETAMB", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, "Choisissez :", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Bourse au mérite nationale", callback_data: "ABMCON" }],
        [
          {
            text: "Bourse au mérite région (non visible sur Aglae)",
            callback_data: "ABMREG",
          },
        ],
        [{ text: "Retour", callback_data: "RETAIDEC" }],
      ],
    },
  });
});
// Fin BM

// AMM
bot.action("AMMC", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, "Choisissez :", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Aide à la mobilité Master Conditions",
            callback_data: "AMMCON",
          },
        ],
        [
          {
            text: "Aide à la mobilité Master Procédure",
            callback_data: "AMMPRO",
          },
        ],
        [{ text: "Retour", callback_data: "RETAIDEC" }],
      ],
    },
  });
});

bot.action("AMMCON", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Les conditions d'AMP :

🔸 Seul les étudiants qui sont inscrits en diplôme national de master (DNM) dans une université d’enseignement supérieur.

🔸 Étudiant doit avoir obligatoirement validé sa licence l’année N-1 de sa demande d’AMM dans une autre région académique.

🔸 Aide réservée aux étudiants boursiers ou recevant une aide spécifique annuelle ou d’allocation ponctuelle.

🔸 Le montant de l’aide est de 1000 euros => elle sera versée en une seule fois le mois suivant la demande complétée.

❗️ Pour les demandes de recours de l’AMM, l’étudiant doit envoyer un courrier au directeur général de son Crous.

        `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Retour", callback_data: "RETAMM" }], //
        ],
      },
      parse_mode: "HTML",
    }
  );
});

bot.action("ABMREG", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
La procédure d'AMP :

🔸 L’étudiant doit faire la demande sur https://www.messervices.etudiant.gouv.fr .
        
🔸 L’étudiant doit joindre son attestation de réussite du diplôme de licence ainsi que son certificat d’inscription en première année de master en université.
                
🔸 Le montant de l’aide est de 1000 euros => elle sera versée en une seule fois le mois suivant la demande complétée.

        `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Retour", callback_data: "RETAMM" }], //
        ],
      },
      parse_mode: "HTML",
    }
  );
});

bot.action("RETAMM", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, "Choisissez :", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Aide à la mobilité Master Conditions",
            callback_data: "AMMCON",
          },
        ],
        [
          {
            text: "Aide à la mobilité Master Procédure",
            callback_data: "AMMPRO",
          },
        ],
        [{ text: "Retour", callback_data: "RETAIDEC" }],
      ],
    },
  });
});
// Fin AMM

// CGV
bot.action("CGVC", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, "Choisissez :", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Bourse pendant les grandes vacances Éligibilité",
            callback_data: "CGVELI",
          },
        ],
        [
          {
            text: "Bourse pendant les grandes vacances Conditions",
            callback_data: "CGVCON",
          },
        ],
        [{ text: "Retour", callback_data: "RETAIDEC" }],
      ],
    },
  });
});

bot.action("CGVELI", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
l'Éligibilité à CGV :

🔸 Parents de l’étudiant ou tuteur résidant dans les DOM-TOM 

🔸 Etudiant français ou européen lorsque les parents ou tuteur légal résident à l’étranger, à l’exception des pays de l’UE / Suisse / pays riverains de la Méditerranée <b>(type méditerranée pour en savoir plus)</b>

🔸 Etudiant pupille de l’Etat / de la Nation

🔸 Etudiant orphelin de ses deux parents

🔸 Etudiant réfugié

🔸 Etudiant qui a bénéficié ou qui bénéficie de l’aide sociale à l’enfance (ASE)

❗️ Cette aide est versée tant que l’étudiant est boursier (pas de limite comme avec la BM).


        `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Retour", callback_data: "RETCGV" }], //
        ],
      },
      parse_mode: "HTML",
    }
  );
});

bot.action("CGVCON", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Les conditions d'AMP :

🔸 L’activation du complément grandes vacances ne peut pas être activé en fin de cursus, si l’étudiant est inscrit en BTS 2, licence 3 ou en master 2, l’étudiant devra attendre septembre de l’année N + 1 pour justifier d’une continuité dans ses études.
        
🔸 Le CGV ne peut être versée que sur les deux mois d’été et l’aide est à la hauteur de l’échelon de bourse attribué à l’étudiant
                
🔸 Dans le cas où vous devrez rajouter cette aide dans le dossier de bourse de l’étudiant, il vous faudra obligatoirement spécifier nature de son éligibilité.

        `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Retour", callback_data: "RETCGV" }], //
        ],
      },
      parse_mode: "HTML",
    }
  );
});

bot.action("RETCGV", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, "Choisissez :", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Bourse pendant les grandes vacances Éligibilité",
            callback_data: "CGVELI",
          },
        ],
        [
          {
            text: "Bourse pendant les grandes vacances Conditions",
            callback_data: "CGVCON",
          },
        ],
        [{ text: "Retour", callback_data: "RETAIDEC" }],
      ],
    },
  });
});
// Fin CGV
// Fin aide complémentaires

// Inline keys -- commande 6 (Le Service Social)

bot.command("social", (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, "Le Service Social", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Allocation Spécifique d’Allocation Annuelle (ASAA)",
            callback_data: "SASAA",
          },
        ],
        [
          {
            text: "Allocation Spécifique Aide Ponctuelle (ASAP)",
            callback_data: "SASAP",
          },
        ],
        [
          {
            text: "Service Social Procédure et autres fonctions",
            callback_data: "SPROC",
          },
        ],
        [{ text: "Les contacts de Service Social", callback_data: "SCONT" }],
      ],
    },
  });
});

bot.action("RETSOC", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, "Le Service Social", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Allocation Spécifique d’Allocation Annuelle (ASAA)",
            callback_data: "SASAA",
          },
        ],
        [
          {
            text: "Allocation Spécifique Aide Ponctuelle (ASAP)",
            callback_data: "SASAP",
          },
        ],
        [
          {
            text: "Service Social Procédure et autres fonctions",
            callback_data: "SPROC",
          },
        ],
        [{ text: "Les contacts de Service Social", callback_data: "SCONT" }],
      ],
    },
  });
});

// ASAA
bot.action("SASAA", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
<b>L’Allocation Spécifique d’Allocation Annuelle (ASAA)</b> :

🔸 Cette aide n’est pas cumulable avec une BCS, l’étudiant doit donc avoir un refus de bourse obligatoirement.

🔸 Pour en bénéficier, l’étudiant doit saisir un Dossier Social Etudiant.

🔸 L’aide peut être versée sur 6 à 10 mois et correspond à un échelon de BCS (Dans certains cas, l’allocation annuelle peut continuer à être versée pendant les grandes vacances universitaires).

🔸 Une nouvelle allocation annuelle peut être attribuée l’année suivante dans les mêmes conditions et dans la limite du nombre total de droits prévus pour les bourses d’enseignement supérieur sur critères sociaux

🔸 La demande devra être effectuée chaque année.

🔸 Pour prétendre à une aide, l’étudiant doit avoir moins de 35 ans au 1er septembre de l’année N (pas de limite d'age pour les handicapés).

❗️ La date limite pour demander une ASAA est fixé au 31 décembre de l’année N concerné.

    `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Retour", callback_data: "RETSOC" }], // bouton de retour à créer
        ],
      },
      parse_mode: "HTML",
    }
  );
});

// ASAP
bot.action("SASAP", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
<b>L’Allocation Spécifique Aide Ponctuelle (ASAP)</b> :

🔸 Cette aide vise à ce que l’étudiant puisse poursuivre ses études malgré une situation grave se présentant au cours de l’année universitaire. 

🔸 L’ASAP est cumulable avec une BCS, une ASAA, une aide à la mobilité internationale, une aide au mérite.

🔸 Si sa situation le justifie, plusieurs aides ponctuelles peuvent exceptionnellement être accordées au cours d’une même année universitaire

🔸 Pour prétendre à une aide, l’étudiant doit avoir moins de 35 ans au 1er septembre de l’année N (pas de limite d'age pour les handicapés).

❗️ A noter qu’avec la crise sanitaire, le montant plafond de ses aides passe à 2 571 X 2 sur une année universitaire

❗️❗️ Pour effectuer la demande d’ASAP, l’étudiant doit se rapprocher du service social de son Crous.

    `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Retour", callback_data: "RETSOC" }], //
        ],
      },
      parse_mode: "HTML",
    }
  );
});

// Procédure
bot.action("SPROC", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `

🔸 Les services sociaux des 3 Crous d’IDF gèrent les aides d’urgence (ASAA et ASAP), l’accompagnement des étudiants en urgence sociale et les notes de rupture familiale (en cas d’absence d’un des parents de l’étudiant).

🔸 Le dossier de l’étudiant est présenté de façon anonyme à la commission. Si nécessaire, un entretien préalable peut être organisé entre le demandeur de l’aide spécifique et une assistante sociale de son Crous. Cet entretien doit permettre d’évaluer la situation globale de l’étudiant au regard notamment de son parcours universitaire et des difficultés qu’il rencontre. Après examen du dossier, la commission émet un avis d’attribution ou de non-attribution de l’aide spécifique et propose au directeur du Crous le montant de l’aide susceptible d’être accordée. Le directeur du Crous décide du montant de l’aide attribuée et notifie la décision à l’étudiant. Sa décision n’est pas susceptible de recours devant le recteur ou le ministre chargé de l’enseignement supérieur. En cas de changement d’académie postérieur à l’avis de la commission, la décision prise par cette dernière, s’impose au Crous de l’académie du lieu d’inscription de l’étudiant.

    `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Retour", callback_data: "RETSOC" }], //
        ],
      },
      parse_mode: "HTML",
    }
  );
});

// contacts sociale
bot.action("SCONT", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, "Choisissez :", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Service Sociale - Paris", callback_data: "SSPAR" }],
        [{ text: "Service Sociale - Versailles", callback_data: "SSVER" }],
        [{ text: "Service Sociale - Créteil", callback_data: "SSCRE" }],
        [{ text: "Retour", callback_data: "RETSOC" }],
      ],
    },
  });
});

bot.action("SSPAR", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `

🔸 L’étudiant doit se rapprocher du site internet de son Crous de Paris, onglet « ACTION SOCIALE / SANTÉ » rubrique « Assistants sociaux du Crous de Paris » et sélectionner le logo de son établissement pour connaitre le contact

🔸 Si le logo de l’établissement n’est pas dans la liste, l’étudiant devra se rapprocher de l’antenne sociale du centre Sarrailh (logo du Crous) et échanger avec le service social via l’adresse mail social.hors-univ@crous-paris.fr

        `,
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Assistants sociaux du Crous de Paris",
              url: "https://www.crous-paris.fr/aides-sociales/les-assistants-sociaux-du-crous-de-paris",
            },
          ],
          [{ text: "Retour", callback_data: "RETSCONT" }], //
        ],
      },
      parse_mode: "HTML",
    }
  );
});

bot.action("SSVER", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `

🔸 L’étudiant doit se rapprocher du site internet de son Crous de Versailles, onglet « ACTION SOCIALE / SANTÉ » rubrique « contacter le service social ».

🔸 Il devra ensuite se rapprocher du contact mail et téléphonique de l’antenne référente en fonction de son lieu d’études.

        `,
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Assistants sociaux du Crous de Versailles",
              url: "https://www.crous-versailles.fr/aides-sociales/contacter-service-social/",
            },
          ],
          [{ text: "Retour", callback_data: "RETSCONT" }], //
        ],
      },
      parse_mode: "HTML",
    }
  );
});

bot.action("SSCRE", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `

🔸 L’étudiant doit prendre contact directement avec l’accueil du service social pour demander une aide ou un rendez-vous.

🔸 Via l’adresse : social@crous-creteil.fr

        `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Retour", callback_data: "RETSCONT" }], //
        ],
      },
      parse_mode: "HTML",
    }
  );
});

bot.action("RETSCONT", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, "Choisissez :", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Service Sociale - Paris", callback_data: "SSPAR" }],
        [{ text: "Service Sociale - Versailles", callback_data: "SSVER" }],
        [{ text: "Service Sociale - Créteil", callback_data: "SSCRE" }],
        [{ text: "Retour", callback_data: "RETSOC" }],
      ],
    },
  });
});
// Fin Social

// Inline keys -- commande 7 (Criteres de bourse)

bot.command("bourse", (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, "Bourse sur critères sociaux", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Critères d’attribution", callback_data: "CRITOK" }],
        [
          {
            text: "Ne peuvent prétendre à une bourse",
            callback_data: "CRITKO",
          },
        ],
        [{ text: "Déterminer l’échelon de bourse", callback_data: "ECHEL" }],
        [{ text: "Dispositions", callback_data: "DISPO" }],
      ],
    },
  });
});

bot.action("RETBOU", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, "Bourse sur critères sociaux", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Critères d’attribution", callback_data: "CRITOK" }],
        [
          {
            text: "Ne peuvent prétendre à une bourse",
            callback_data: "CRITKO",
          },
        ],
        [{ text: "Déterminer l’échelon de bourse", callback_data: "ECHEL" }],
        [{ text: "Dispositions", callback_data: "DISPO" }],
      ],
    },
  });
});

// Critères d’attribution
bot.action("CRITOK", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
<b>Critères d’attribution</b> :

🔸 Être âgé de moins de 28 ans au 01/09 de l’année N de la première demande, si l’étudiant a plus de 28 ans au 01/09 il doit justifier de ne pas avoir interrompu ses études.

🔸 Etudiants parents : limite d’âge reculée d’un an par enfant, prendre AF de l’étudiant et demander l’acte de naissance. Si l’enfant n’est pas rattaché à l’AF des parents, l’étudiant doit fournir une attestation sur l’honneur qui atteste qu’il va le rattacher.

🔸 Etudiants détenus : peuvent prétendre à une bourse sous réserve des conditions générales.

🔸 Etudiants en service civique : limite d’âge reculée en fonction de la durée du service civique.

🔸 Etudiants en volontariat dans les armées : la limite d’âge est reculée en fonction de la durée du contrat (1 à 5 ans max).

🔸 Etudiants volontaires internationaux : la limite d’âge est reculée en fonction de la durée du contrat (6 à 24 mois max).

❗️ Etudiants handicapés : pas de limite d’âge.


    `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Retour", callback_data: "RETBOU" }], // bouton de retour à créer
        ],
      },
      parse_mode: "HTML",
    }
  );
});

// Ne peuvent prétendre
bot.action("CRITKO", (ctx) => {
  [
    ctx.deleteMessage(),
    ctx.telegram.sendMessage(
      ctx.chat.id,
      `
<b>Ne peuvent prétendre à une bourse</b> :

🔸 Les étudiants inscrits dans un établissement non habilité.

🔸 Les étudiants avec parents travaillant en ambassade ne produisant pas d’AF.

🔸 Les étudiants ayant réussi le concours de l’internat (6ème année de médecine).

🔸 Les étudiants inscrits au pôle emploi comme demandeur ou percevant des aides.

🔸 Les étudiants suivant des cours de langue à l’étranger

❗️ Les fonctionnaires stagiaires.

❗️ Les étudiants rémunérés (contrat d’apprentissage ou professionnel / formation continue)

❗️ Les étudiants en école d’infirmier (Instituts de Formation en Soins Infirmiers), par contre ils pourront prétendre à une bourse de la région.

    `,
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Retour", callback_data: "RETBOU" }], //
          ],
        },
        parse_mode: "HTML",
      }
    ),
    ctx.telegram.sendChatAction(ctx.chat.id, "upload_photo"),
    ctx.telegram.sendPhoto(ctx.chat.id, { source: "ressource/ifsi.png" }),
  ];
});

// Echelon de bourse
bot.action("ECHEL", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `

🔸 Les revenus de la famille.

- Pour une demande de bourse présentée au titre de l’année universitaire 2020-2021, les ressources prises en compte sont les revenus 2018 figurant sur l'avis d'imposition 2019 des parents de l'étudiant.


🔸 Le nombre d’enfants à charge fiscale de la famille.

- Pour chaque frère ou sœur, fiscalement à charge de la famille et étudiant dans l’enseignement supérieur : <b>4 points de charge</b>.
- Pour chaque autre frère ou sœur, fiscalement à charge de la famille : <b>2 points de charge</b>.


🔸 L'éloignement du lieu d'études.

- De 30 à 249 km : 1 point de charge.
- 250 km et plus : 2 points de charge.

❗️ Les étudiants au CNED ne peuvent pas prétendre à des points de distance, vous devez vérifier que le forçage distance est bien à 0 kilomètre.

❗️ Les étudiants au CAVEJ pouvant justifier d’une formation en présentiel peuvent prétendre aux points de distance.

    `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Retour", callback_data: "RETBOU" }], //
        ],
      },
      parse_mode: "HTML",
    }
  );
});

// Dispositions
bot.action("DISPO", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `

🔸 Droits de bourse et maintien : (sous construction)

    `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Retour", callback_data: "RETBOU" }], //
        ],
      },
      parse_mode: "HTML",
    }
  );
});
// Fin bourse

// Inline keys -- commande 8 (Aglae)

bot.command("aglae", (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, "Les fonctions d'AGLAE", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Les notifications", callback_data: "NOTIFI" }],
        [{ text: "Modification des vœux", callback_data: "MVOEUX" }],
        [{ text: "Transfert de dossier", callback_data: "TRANSF" }],
        [{ text: "Les réimputations", callback_data: "REIMPO" }],
      ],
    },
  });
});

bot.action("RETAGL", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id, "Les fonctions d'AGLAE", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Les notifications", callback_data: "NOTIFI" }],
        [{ text: "Modification des vœux", callback_data: "MVOEUX" }],
        [{ text: "Transfert de dossier", callback_data: "TRANSF" }],
        [{ text: "Les réimputations", callback_data: "REIMPO" }],
      ],
    },
  });
});

// Les notifications
bot.action("NOTIFI", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
<b>Notification conditionnelle</b> :

🔸 Après étude et validation du dossier, le Crous envoie par e-mail une réponse de principe indiquant l’échelon de bourse.

🔸 Cette notification conditionnelle de bourse doit être obligatoirement présentée par l’étudiant à son établissement lors de son inscription.

🔸 Si la demande ne peut pas aboutir le gestionnaire du DSE a fait un ICR (Information complémentaire de renseignement) lisible sur le fil du logiciel


<b>Notification définitive</b> :

🔸 L’établissement de l’étudiant nous confirme son inscription administrative via la remontée sur le logiciel AGLAE

🔸 Une fois la remontée visible, vous devez vérifier si le niveau d’étude est conforme à la notification conditionnelle et que le régime d’inscription est habilité (seuls les régimes 10 et 11 le sont).

🔸 Si la remontée est conforme et que la mise en paiement de la bourse n’est pas activée, vous devez faire un ticket pour le service des bourses.

🔸 Attention seul la mise en paiement du dossier déclenche l’envoi de la notification définitive.

❗️ A' partir de janvier N de la demande, l’étudiant doit fournir une attestation d’assiduité du 1er semestre pour activer le paiement de sa bourse. Vous devrez donc vérifier que le document est bien numérisé avant de faire un ticket.

❗️ Vous devez indiquer à l’étudiant que le Crous peut déclencher le paiement jusqu’au 5 de chaque mois. Selon les banques, il peut y avoir 10 jours ouvrés de délai interbancaire, donc l’étudiant peut recevoir sa bourse sur son compte au 15 de chaque mois (au maximu).


    `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Retour", callback_data: "RETAGL" }], // bouton de retour à créer
        ],
      },
      parse_mode: "HTML",
    }
  );
});

// Modification des vœux
bot.action("MVOEUX", (ctx) => {
  [
    ctx.deleteMessage(),
    ctx.telegram.sendMessage(
      ctx.chat.id,
      `
🔸 Pour modifier des vœux d’étude, plusieurs éléments sont à connaitre :
    `,
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Retour", callback_data: "RETAGL" }], //
          ],
        },
        parse_mode: "HTML",
      }
    ),
    ctx.telegram.sendChatAction(ctx.chat.id, "upload_photo"),
    ctx.telegram.sendPhoto(ctx.chat.id, { source: "ressource/ifsi.png" }),
  ];
});

// Transfert de dossier
bot.action("TRANSF", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `

🔸 LSelon l’établissement d’inscription de l’étudiant, un transfert de Crous sera nécessaire.

    `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Retour", callback_data: "RETAGL" }], //
        ],
      },
      parse_mode: "HTML",
    }
  );
});

// Les réimputations
bot.action("REIMPO", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
🔸 Lorsque le versement d’une bourse a été faite sur un compte clôturé ou sur un compte autre que le compte courant de l’étudiant, le paiement est en rejet bancaire

    `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Retour", callback_data: "RETAGL" }], //
        ],
      },
      parse_mode: "HTML",
    }
  );
});
// fin aglae

// Inline keys -- commande.hear  (mail)

bot.hears(["mail type", "Mail Type", "mail", "Mail"], (ctx) => {
  ctx.reply(`Choisissez un mail type :`, {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Master => Licence", callback_data: "MAILML" }],
        [{ text: "Attestation de non boursier", callback_data: "MAILNB" }],
        [{ text: "Conseil de l’Europe", callback_data: "MCONEU" }],
        [{ text: "Code UAI RNE", callback_data: "MCODUAI" }],
        [{ text: "Frais de dossier", callback_data: "MFRADO" }],
        [{ text: "Points de charge fratrie ", callback_data: "MPOIFRA" }],
      ],
    },
    parse_mode: "HTML",
  });
});

bot.action("MAILML", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `

A l'issue du premier examen de votre dossier social étudiant, il apparaît que votre demande de bourse d'enseignement supérieur ne pourra faire l'objet d'une réponse positive.
En effet, selon l'application de la réglementation actuellement en vigueur, vous ne remplissez pas l'une des conditions exigées pour l'ouverture du droit à bourse.
        
Sauf élément nouveau qu'il vous appartient de nous transmettre, il m'a semblé utile de vous communiquer dès à présent cette information afin de vous permettre de prendre vos dispositions pour la poursuite de vos études.
Vous avez utilisé X droits à la bourse au titre du cursus licence et X droits à la bourse au titre du cursus master. 
        
Je vous informe que la réglementation des bourses associées au cursus LMD (licence, master, doctorat), vous permet de bénéficier des droits à la bourse non utilisés au titre du cursus licence, pour préparer un master ou un nouveau diplôme de niveau comparable dans la limite des 7 droits et dans la limite des droits ouverts au titre du cursus post-licence. 
        
        
    `,
    {
      parse_mode: "HTML",
    }
  );
});

bot.action("MAILNB", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `


Bonjour, 

Je vous contacte suite à votre appel, 
        
Veuillez nous envoyer au préalable une attestation sur l'honneur disant que vous renoncez à vos droit à la bourse pour cette année. 
        
Une fois votre attestation téléversée, vous pourrez rappeler le centre de contact au 0140516200 afin de faire la demande d'attestation de non boursier pour l'année 2019/2020. 
        
Bien à vous. 
        
Le service des bourses              
        
    `,
    {
      parse_mode: "HTML",
    }
  );
});

bot.action("MCONEU", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Ci-joint la notification de conseil de l’Europe. 

Madame, Monsieur, 
        
Votre bourse d'enseignement supérieur sur critères sociaux est actuellement mise en paiement pour l'année universitaire 2020/2021. 
        
Toutefois, dans le cadre de la réglementation de l'attribution des bourses, vous devez OBLIGATOIREMENT justifier de votre assiduité en renvoyant l'un des deux documents suivants: 
- une attestation d'assiduité francophone ou anglophone précisant VOTRE ASSIDUITÉ SUR L'ENSEMBLE DE L'ANNÉE. 
- Relevé(s) de notes SUR L'ENSEMBLE DE L'ANNÉE. 
        
Ces justificatifs devront être OBLIGATOIREMENT DATES ET TAMPONNES par votre établissement d'études. 
Aussi, afin que votre justificatif puisse être traité, vous devez OBLIGATOIREMENT joindre à votre envoi VOTRE NOTIFICATION CONDITIONNELLE ou DÉFINITIVE 2020/2021. 
        
L'ensemble sera envoyé à l'adresse indiquée ci-dessous: 
Centre de numérisation du CROUS de PARIS 
TSA 64023 
59901 LILLE cedex 9 
        
TOUT MANQUEMENT A CES OBLIGATIONS SERA CONSIDÉRÉ COMME IRRÉGULIER ET ENTRAINERA LE REMBOURSEMENT DE LA TOTALITÉ DES SOMMES QUI VOUS ONT ÉTÉ VERSÉES.
Cordialement.
Le service des bourses.
             
        
    `,
    {
      parse_mode: "HTML",
    }
  );
});

bot.action("MCODUAI", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `

Bonjour, 

Afin d'étudier votre demande de bourse,

Merci de demander le code UAI RNE de votre formation (XXXX) à votre scolarité.
Une fois ce code à votre disposition, vous pourrez vous rapprocher du centre de contact des Crous d'IDF au 01 40 51 62 00, afin de leur communiquer pour régularisation de votre demande.
        
Bien à vous.
        
Le service des bourses
             
        
    `,
    {
      parse_mode: "HTML",
    }
  );
});

bot.action("MFRADO", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `

Bonjour, 

Vous avez choisi le paiement différé pour les frais de dossier, 
Vous devriez donc recevoir un lien ultérieurement vous invitant à les payer en ligne.
OU
Vous avez choisi le paiement par chèque,
        
Si vous ne recevez pas ce lien, vous pourrez vous déplacer à l'agence comptable du Crous de Paris lors de sa réouverture au public.
39 Av Georges BERNANOS 
75005 Paris
        
Ou 
        
Envoyer un chèque de 4 euros à l'ordre de l'agence comptable du Crous de Paris (avec une copie de votre dossier de bourse ou notification) au : 
Centre de Numérisation du Crous de Paris
TSA 64023
59901 Lille cedex 9
        
Le courrier ne devra pas être envoyé en recommandé.  
        
Bien à vous
        
Le service des bourses
              
    `,
    {
      parse_mode: "HTML",
    }
  );
});

bot.action("MPOIFRA", (ctx) => {
  ctx.deleteMessage();
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `

Bonjour, 

Afin de prendre en compte les points de charge fratrie, la réglementation vous impose le rattachement des frères et sœurs à l'avis fiscal des parents N-2 de la demande.
        
Seul X enfant(s) est / sont à charge fiscalement de vos parents.
        
Nous partons toujours du principe que l'étudiant est à charge, nous ne pouvons donc comptabiliser qu'X frère ou sœur dans le calcul de vos points de charge fratrie.
        
Si vous avez votre propre avis fiscal 2019, vous devez nous le téléverser pour que nous puissions effectuer une rectification ou faire rattacher vos frères et sœurs à l'avis fiscal de vos parents N-2 de la demande (avis rectificatif).
        
        
        
Bien à vous.
        
Le service des bourses
        
              
    `,
    {
      parse_mode: "HTML",
    }
  );
});

// Fin mail

// Inline keys -- commande bonus (Leslie)

bot.command("leslie", (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, "Si Leslie voulait répondre :", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Option 1 - Parents isolés", callback_data: "LESISO" }],
        [
          {
            text: "Option 2 - Remontée d'inscription",
            callback_data: "LESREI",
          },
        ],
        [
          {
            text: "Option 3 - Attestation sur l'honneur",
            callback_data: "LESATS",
          },
        ],
      ],
    },
  });
});

bot.action("LESREI", (ctx) => {
  ctx.telegram.sendChatAction(ctx.chat.id, "upload_voice");
  ctx.telegram.sendVoice(ctx.chat.id, { source: "ressource/Leslie1.mp3" });
});

bot.action("LESATS", (ctx) => {
  ctx.telegram.sendChatAction(ctx.chat.id, "upload_voice");
  ctx.telegram.sendVoice(ctx.chat.id, { source: "ressource/Leslie2.mp3" });
});

bot.action("LESISO", (ctx) => {
  ctx.telegram.sendChatAction(ctx.chat.id, "upload_voice");
  ctx.telegram.sendVoice(ctx.chat.id, { source: "ressource/Leslie3.mp3" });
});

// send photo command

// bot.hears(['mediterranee url'], (ctx) => {
//     ctx.telegram.sendChatAction(ctx.chat.id, "upload_photo")
//     ctx.telegram.sendPhoto(ctx.chat.id,
//         "https://www.algerie360.com/wp-content/uploads/2018/04/med21.png"
//     )

// })

// bot.hears(['audio'], (ctx) => {
//     ctx.telegram.sendChatAction(ctx.chat.id, "upload_voice")
//     ctx.telegram.sendVoice(ctx.chat.id, {source: "ressource/test.m4a"})
// })

bot.hears(["annuaire"], (ctx) => {
  ctx.telegram.sendChatAction(ctx.chat.id, "upload_document");
  ctx.telegram.sendDocument(ctx.chat.id, { source: "ressource/annuaire.pdf" });
});

bot.hears(["loi"], (ctx) => {
  ctx.telegram.sendChatAction(ctx.chat.id, "upload_document");
  ctx.telegram.sendDocument(ctx.chat.id, { source: "ressource/loi.pdf" });
});

bot.hears(["guide"], (ctx) => {
  ctx.telegram.sendChatAction(ctx.chat.id, "upload_document");
  ctx.telegram.sendDocument(ctx.chat.id, { source: "ressource/guide.pdf" });
});

// liste des commandes et mots

bot.hears(["code", "codes"], (ctx) => {
  ctx.reply(`
    crous
    
    leo
    arnaud
    logement
    recours
    présence
    numerisation
    mail type1
    izly
    réfugié
    handicapé
    réctificatif
    particulier
    isole

    
    AF
    ASS
    AGLAE
    APE
    AMM
    ARE
    ASAP
    ASE
    BCS
    BM
    CNED
    GEN
    UAIRNE
    DAEU
    DSE
    ECTS
    ICR
    ifsi
    ine
    maa
    CPGE
    mesri
    mic
    MSE
    OR
    RBG
    rsa
    cgv
    CAVEJ
    daeu
    meef
    ofpra
    mdph
    cdaph
    dom
    Méditerranée
    
    
    commande 1 (site)
    commande 2 (revision)
    commande 3 (prise de revenus)
    commande 4 (actualités importantes)
    commande 5 (aide complémentaires)
    commande 6 (Le Service Social)
    commande 7 (Criteres de bourse)
    commande 8 (Aglae)
    
    commande.hear  (mail)
    commande bonus (Leslie)
    
    annuaire
    loi
    guide
    
    `);
});

// Si dans le chat on écrit quelque chose d'autre que les mots clès

// bot.use((ctx) => {
//     //ctx.reply("Que puis-je faire pour vous ?")
//     ctx.reply(
// `
// Ce bot peut exécuter les ordres suivants :

// /start   : Démarre le bot
// /help    : Foire aux questions
// /crous   : Les sites de Crous
// /revision : Les révisions

// `)

// })

bot.use((ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
Que puis-je faire ?

Vous pouvez appuyer sur les boutons en bas ou taper des mots clès (acronymes, nom, etc).

/bourse  : La bourse sur critères sociaux
/aidec   : Les aides complémentaires
/social  : Le service social
/aglae   : Les commandes d'AGLAE
/revision: Le Guide des révisions
/revenu  : Le Guide de prise des revenus et Présence en France
/actualite   : Les actualités à retenir
/site    : Les sites internet nécessaires
/leslie  : Si Leslie voulait répondre
/start   : Démarrage du bot
/help    : Si vous avez besoin d'aide

            `,
    {
      reply_markup: {
        keyboard: [
          [{ text: "/bourse \u21E8 La bourse sur critères sociaux" }],
          [{ text: "/aidec \u21E8 Les aides complémentaires" }],
          [{ text: "/social \u21E8 Le service social" }],
          [{ text: "/aglae  \u21E8 Les commandes d'AGLAE" }],
          [{ text: "/revision \u21E8 Le Guide des révisions" }],
          [{ text: "/revenu \u21E8 Guide de prise des revenus et Présence" }],
          [{ text: "/actualite \u21E8 Les actualtiés importantes à retenir" }],
          [{ text: "/site \u21E8 Les sites internet nécessaires" }],
          [
            { text: "/start \u21E8 Démarre le bot" },
            { text: "/help \u21E8 Foire aux questions" },
          ],
        ],
      },
    }
  );
});

// bot.launch()

// module.exports = bot;

// crous-guide-bot
// https://crous-guide-bot.herokuapp.com/
// const token = '1588288656:AAG0etwxH9EKDj0qHfkuQEimax73TfJ7YUk'

// heroku git:remote -a crous-guide-bot
// git add .
// git commit -m 'commit message'
// git push heroku master

export async function POST(req, res) {
  try {
    const chunks = [];
    for await (const chunk of req.body) {
      chunks.push(chunk);
    }
    const body = Buffer.concat(chunks).toString("utf8");
    const parsedBody = JSON.parse(body);

    // Step 1: Check Payload Structure
    console.log("Parsed body:", parsedBody); // Debug line

    // Step 2: Validation
    if (!parsedBody.id) {
      // Adjust this based on what the expected 'id' should be
      console.error("Missing 'id' in payload");
      return NextResponse.json({ error: "Missing 'id' in payload" });
    }

    // Step 5: Debugging (optional)
    // Consider using a debugger here to inspect `parsedBody`

    await bot.handleUpdate(parsedBody); // The main function call

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    // Step 3: Trace the Source
    console.error("Error caught:", error);

    return NextResponse.json({ error });
  }
}

// Step 6: Log Middleware (place this in your bot's initialization code)
bot.use((ctx, next) => {
  console.log("State update", ctx.update);
  return next(ctx);
});
