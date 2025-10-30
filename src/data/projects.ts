import type { Project } from "../types/project"

export const projects: Project[] = [
    {
        id: 1,
        name: "Portfolio personale",
        slug: "ntn-rss-portfolio-standalone",
        customer: null,
        type: {
            name: "Web",
        },
        description:
            "Gestione contenuti per portfolio online realizzato con Laravel.\n- Dashboard con menu a tendina per ogni sezione\n- Filtro ricerca per nome e/o categoria\n- Pagina di presentazione con immagini/video e descrizione\n- Pagina per visualizzare le tecnologie utilizzate",
        media: [
            {
                url: "/projects-images/portfolio-home.png",
                type: "image",
            },
            {
                url: "/projects-images/portfolio-projects.png",
                type: "image",
            },
            {
                url: "/projects-images/portfolio-types.png",
                type: "image",
            },
            {
                url: "/projects-images/portfolio-technologies.png",
                type: "image",
            },
        ],
        technologies: [
            {
                id: 4,
                name: "PHP",
                level: 1,
                color: "#878eb7",
                icon_external_url:
                    "https://img.icons8.com/?size=100&id=f0R4xVI4Sc8O&format=png&color=000000",
            },
            {
                id: 5,
                name: "Laravel",
                level: 1,
                color: "#f34e34",
                icon_external_url:
                    "https://img.icons8.com/?size=100&id=qfQaIYKX23qY&format=png&color=000000",
            },
            {
                id: 6,
                name: "React",
                level: 1,
                color: "#00acc1",
                icon_external_url:
                    "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
            },
            {
                id: 1,
                name: "HTML",
                level: 4,
                color: "#ff6d01",
                icon_external_url:
                    "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
            },
            {
                id: 2,
                name: "CSS",
                level: 1,
                color: "#1377bd",
                icon_external_url:
                    "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
            },
            {
                id: 3,
                name: "JavaScript",
                level: 1,
                color: "#fdd600",
                icon_external_url:
                    "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
            },
            {
                id: 11,
                name: "MySQL",
                level: 1,
                color: "#4caf50",
                icon_external_url:
                    "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000/possimus-quod-dolores-sed-et-nam-inventore.html",
            },
            {
                id: 9,
                name: "Tailwind",
                level: 4,
                color: "#00acc1",
                icon_external_url:
                    "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
            },
        ],
        external_link: "https://github.com/antoniorusso2/laravel-portfolio",
    },
    {
        id: 2,
        name: "InvoiceFlow",
        slug: "ntn-rss-invoice-flow",
        customer: null,
        type: {
            name: "Web",
        },
        description:
            "Tool per automazione controllo scadenza fatture ed eventuale log con i dati dei clienti in ritardo con i pagamenti.\n- Caricamento da file Excel\n- Interfaccia realizzata con JavaFX\n- In Progress: Caricamento file PDF, invio email automatico di sollecito pagamento",
        media: [],
        technologies: [
            {
                id: 12,
                name: "Python",
                level: 1,
                color: "#4caf50",
                icon_external_url:
                    "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000/possimus-quod-dolores-sed-et-nam-inventore.html",
            },
            {
                id: 13,
                name: "Java",
                level: 1,
                color: "#4caf50",
                icon_external_url:
                    "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000/possimus-quod-dolores-sed-et-nam-inventore.html",
            },
        ],
        external_link: "https://github.com/antoniorusso2/invoice-flow",
    },
    {
        id: 1,
        name: "Restaurant Back-office",
        slug: "ntn-rss-restaurant-backoffice",
        customer: null,
        type: {
            name: "Web",
        },
        description:
            "Backoffice gestione contenuti web per un ipotetico ristorante\n- Realizzato con Laravel e Blade\n- Pannello amministrazione con CRUD per gestione piatti e tipologie\n- Gestione caricamento immagini in local storage ed esposizione API RESTful",
        media: [
            {
                url: "/projects-images/portfolio-home.png",
                type: "image",
            },
        ],
        technologies: [
            {
                id: 4,
                name: "PHP",
                level: 1,
                color: "#878eb7",
                icon_external_url:
                    "https://img.icons8.com/?size=100&id=f0R4xVI4Sc8O&format=png&color=000000",
            },
            {
                id: 5,
                name: "Laravel",
                level: 1,
                color: "#f34e34",
                icon_external_url:
                    "https://img.icons8.com/?size=100&id=qfQaIYKX23qY&format=png&color=000000",
            },
            {
                id: 6,
                name: "React",
                level: 1,
                color: "#00acc1",
                icon_external_url:
                    "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
            },
            {
                id: 1,
                name: "HTML",
                level: 4,
                color: "#ff6d01",
                icon_external_url:
                    "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
            },
            {
                id: 2,
                name: "CSS",
                level: 1,
                color: "#1377bd",
                icon_external_url:
                    "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
            },
            {
                id: 3,
                name: "JavaScript",
                level: 1,
                color: "#fdd600",
                icon_external_url:
                    "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
            },
            {
                id: 11,
                name: "MySQL",
                level: 1,
                color: "#4caf50",
                icon_external_url:
                    "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000/possimus-quod-dolores-sed-et-nam-inventore.html",
            },
            {
                id: 9,
                name: "Tailwind",
                level: 4,
                color: "#00acc1",
                icon_external_url:
                    "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
            },
        ],
        external_link: "https://github.com/antoniorusso2/restaurant-backoffice",
    },
]
