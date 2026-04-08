// ─────────────────────────────────────────────────────────────────────────────
//  GALLERIA D'ARTE
//  Modifica questo file per aggiungere, rimuovere o modificare le opere.
//
//  Ogni opera ha:
//    id          – numero progressivo
//    title       – titolo dell'opera
//    technique   – tecnica usata (es. "Acrilico su tela")
//    year        – anno
//    image       – percorso immagine in /public (es. "/art/nome-file.jpg")
//    description – breve descrizione
// ─────────────────────────────────────────────────────────────────────────────

export const paintings = [
  {
    id: 1,
    title: 'Radici',
    technique: 'Acrilico su tela',
    year: 2023,
    image: '/art/placeholder-1.jpg',
    description: "Un intreccio di radici che scendono nel buio della terra, cercando acqua e luce. Metafora della memoria e dell'identità.",
  },
  {
    id: 2,
    title: 'Frequenze',
    technique: 'Acquerello',
    year: 2024,
    image: '/art/placeholder-2.jpg',
    description: 'Onde sonore visibili. Il suono come forma, il silenzio come spazio bianco tra le linee.',
  },
  {
    id: 3,
    title: 'Pattern #7',
    technique: 'Inchiostro e digitale',
    year: 2024,
    image: '/art/placeholder-3.jpg',
    description: "Una sequenza genomica tradotta in forma visiva. Dove finisce la scienza e inizia l'arte?",
  },
]
