import MaximeImg from '../../public/Maxime.jpg';
import EliseImg from '../../public/Elise.jpg';
import Marker from '../../public/Position-orange.png'
import Envelope from '../../public/Email-orange.png'
import Clock from '../../public/Horloge-orange.png'


export const links = [
    {
        name: "Accueil",
        hash: "#accueil",
    },
    {
        name: "Boutique & Salle de jeux",
        hash: "#salledejeu",
    },
    {
        name: "Evenements & réservations",
        hash: "#evenement"
    },
    {
        name: "Notre équipe",
        hash: "#lequipe"
    },
    {
        name: "Contactez-nous",
        hash: "#contact"
    }
] as const;

export const teamData = [
    {
        title: "Maxime",
        description: "Gérant de L'art du jeu, Maxime est passionné de jeux depuis toujours. Addict à Magic depuis plus de 15 ans, il s'est mis plus récemment à Warahammer (seulement depuis 10 ans). Geek dans l'âme, il connaît tous les Pokémon par cœur. Si vous jouez avez lui, il choisira toujours le pion jaune et se battra pour l'avoir. Avant de créer L'art du jeu, Maxime était auditeur en cabinet comptable. Il a testé TOUS les jeux présents en boutique et saura vous conseiller le jeu qui correspondra le plus à vos besoins et à vos envies que vous soyez connaisseurs ou non. Il peut également vous initier avec plaisir à Magic, Warhammer et aux jeux de rôle en général. Son jeu préféré: Magic, Warhammer, Mice & Mistic, Aeon's End(il n'a pas su en choisir qu'un…) Son style de jeu préféré : jeux de carte avec la mécanique du Draft",
        imageUrl: MaximeImg
    },
    {
        title: "Elise",
        description: "Co-gérante de L'art du jeu. Elise sert d'interprète du langage comptable et fiscal en jonglant avec les chiffres et les papiers afin de garantir le bon fonctionnement du back-office. Optimiste invétérée, adepte des to-do lists et très investie dans la cause écologique, elle adore les balades en plein cœur de la nature. Elle sera également présente en boutique le samedi pour vous conseiller. C'est notre spécialiste des jeux enfants et des jeux d'ambiance. Son jeu préféré: Exploding Kitten. Son style de jeu préféré: les jeux mignons(Exploding Kittend, Unstable Unicorn, Chakra…)",
        imageUrl: EliseImg
    },
] as const;

export const cardContactData = [
    {
        "imageUrl": Marker,
        "title": "Pour nous rendre visite",
        "description": "64 rue Saint Aubert, 62000 Arras",
        "desc": ""
    },
    {
        "imageUrl": Envelope,
        "title": "Pour discuter",
        "description": "Tel: 07 70 19 21 23,",
        "desc": "Mail: contact@lartdujeu.fr"
    },
    {
        "imageUrl": Clock,
        "title": "Nos horaires d'ouverture",
        "description": "Mardi - Samedi : 10h - 19h",
        "desc": ""
    }
] as const;