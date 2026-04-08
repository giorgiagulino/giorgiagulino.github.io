// ─────────────────────────────────────────────────────────────────────────────
//  LISTA LIBRI
//  Modifica questo file per aggiungere, rimuovere o spostare libri.
//
//  Ogni categoria ha:
//    id      – identificativo interno (no spazi)
//    labelIt – nome categoria in italiano
//    labelEn – nome categoria in inglese
//    books   – array di libri, ognuno con: title, author, year (opzionale)
// ─────────────────────────────────────────────────────────────────────────────

export const categories = [
  {
    id: 'adozione',
    icon: '👶',
    color: { bg: '#FEF0E6', text: '#91522A', accent: '#D4895A' },
    image: null, // es. '/books/adozione.jpg'
    labelIt: 'Adozione',
    labelEn: 'Adoption',
    books: [
      {
        title: "L'adozione è un viaggio. Guida per genitori e futuri genitori",
        author: 'Monya Ferritti',
        year: 2022,
      },
      {
        title: 'Il dolore del distacco. Adozione e affido: un approccio clinico',
        author: 'F. Canestrari, L. Mauro',
        year: 2023,
      },
      {
        title: "Lettere a un figlio adottivo. Crescere insieme nell'amore",
        author: 'G. Pollastri',
        year: 2021,
      },
    ],
  },
  {
    id: 'neurosviluppo',
    icon: '🧩',
    color: { bg: '#EEEAF8', text: '#5C4F9A', accent: '#8B77C8' },
    image: null, // es. '/books/neurosviluppo.jpg'
    labelIt: 'Neurosviluppo (ADHD, DSA, ecc.)',
    labelEn: 'Neurodevelopment (ADHD, LDs, etc.)',
    books: [
      {
        title: 'ADHD in età adulta. Strategie e strumenti per la gestione quotidiana',
        author: 'R. Truzoli, C. Viganò',
        year: 2024,
      },
      {
        title: "DSA e disturbi del neurosviluppo. Dalla diagnosi all'intervento",
        author: 'G. Stella, L. Biancardi',
        year: 2022,
      },
      {
        title: 'Neurodivergenti. Capire e valorizzare le differenze',
        author: 'Alice Sodi',
        year: 2023,
      },
    ],
  },
  {
    id: 'compassion',
    icon: '🌿',
    color: { bg: '#E5F4EC', text: '#2F7A55', accent: '#52A878' },
    image: null, // es. '/books/compassion.jpg'
    labelIt: 'Compassion Theory',
    labelEn: 'Compassion Theory',
    books: [
      {
        title: 'La terapia focalizzata sulla compassione. Caratteristiche distintive',
        author: 'Paul Gilbert',
        year: 2022,
      },
      {
        title: 'Mindful Compassion. Come liberare la mente dalle paure e dai giudizi',
        author: 'P. Gilbert, Choden',
        year: 2021,
      },
      {
        title: 'Self-Compassion. Il potere della gentilezza verso se stessi',
        author: 'Kristin Neff',
        year: 2020,
      },
    ],
  },
  {
    id: 'arteterapia',
    icon: '🎨',
    color: { bg: '#FCE8EE', text: '#A84D6A', accent: '#D4788C' },
    image: null, // es. '/books/arteterapia.jpg'
    labelIt: 'Arte Terapia',
    labelEn: 'Art Therapy',
    books: [
      {
        title: "Arteterapia a scuola. Progetti e percorsi per l'inclusione",
        author: 'Viviana Hutter',
        year: 2021,
      },
      {
        title: 'Pensare l\'arteterapia. Riflessioni e contributi clinici',
        author: 'G. Santoni (a cura di)',
        year: 2021,
      },
      {
        title: 'Artiterapie: teorie, metodi e strumenti',
        author: 'M. Sanna, G. Pagnoncelli',
        year: 2021,
      },
    ],
  },
]
