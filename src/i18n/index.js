import { createI18n } from 'vue-i18n'

const savedLocale = typeof localStorage !== 'undefined'
  ? (localStorage.getItem('locale') || 'it')
  : 'it'

const messages = {
  it: {
    nav: {
      home: 'Home',
      cv: 'CV',
      psychology: 'Psychology',
      tech: 'Tech & Research',
      books: 'Libri',
      art: 'Arte',
    },
    home: {
      tagline: 'Tecnologia · Mente · Creatività',
      subtitle: 'Ricercatrice. Psicologa. Bioinformatica. Artista.',
      ctaPath: 'Scopri il percorso',
      ctaArt: "Galleria d'arte",
      bioTitle: 'Chi sono',
      cards: [
        { to: '/cv', icon: '🎓', title: 'CV & Percorso', desc: 'Accademico, lavorativo e di ricerca.' },
        { to: '/psychology', icon: '🧠', title: 'Psychology', desc: 'Il fattore umano nella tecnologia.' },
        { to: '/tech', icon: '💻', title: 'Tech & Research', desc: 'Progetti di cybersecurity e bioinformatica.' },
      ],
    },
    cv: {
      title: 'Curriculum Vitae',
      subtitle: 'Percorso accademico, lavorativo e di ricerca',
      academicHeading: 'Percorso Accademico',
      workHeading: 'Esperienza Lavorativa',
      downloadHeading: 'Download CV',
      downloadBtn: '↓ Scarica PDF',
      present: 'in corso',
    },
    psychology: {
      sectionLabel: 'The Human Factor',
      title: 'Psychology',
    },
    tech: {
      sectionLabel: 'Tech & Research',
      title: 'Progetti',
      subtitle: 'Cybersecurity, bioinformatica e ricerca applicata',
    },
    art: {
      sectionLabel: 'Arte Terapia',
      title: 'Arte',
      subtitle: 'Arte terapia e creatività visiva',
    },
    books: {
      sectionLabel: 'Letture',
      title: 'Libri',
      subtitle: 'Letture per argomento — psicologia, adozione, neuroscienze',
    },
  },
  en: {
    nav: {
      home: 'Home',
      cv: 'CV',
      psychology: 'Psychology',
      tech: 'Tech & Research',
      books: 'Books',
      art: 'Art',
    },
    home: {
      tagline: 'Technology · Mind · Creativity',
      subtitle: 'Researcher. Psychologist. Bioinformatician. Artist.',
      ctaPath: 'Explore my journey',
      ctaArt: 'Art Gallery',
      bioTitle: 'About me',
      cards: [
        { to: '/cv', icon: '🎓', title: 'CV & Journey', desc: 'Academic, professional and research path.' },
        { to: '/psychology', icon: '🧠', title: 'Psychology', desc: 'The human factor in technology.' },
        { to: '/tech', icon: '💻', title: 'Tech & Research', desc: 'Cybersecurity and bioinformatics projects.' },
      ],
    },
    cv: {
      title: 'Curriculum Vitae',
      subtitle: 'Academic, professional and research background',
      academicHeading: 'Academic Background',
      workHeading: 'Work Experience',
      downloadHeading: 'Download CV',
      downloadBtn: '↓ Download PDF',
      present: 'present',
    },
    psychology: {
      sectionLabel: 'The Human Factor',
      title: 'Psychology',
    },
    tech: {
      sectionLabel: 'Tech & Research',
      title: 'Projects',
      subtitle: 'Cybersecurity, bioinformatics and applied research',
    },
    art: {
      sectionLabel: 'Art Therapy',
      title: 'Art',
      subtitle: 'Art therapy and visual creativity',
    },
    books: {
      sectionLabel: 'Reading List',
      title: 'Books',
      subtitle: 'Reading list by topic — psychology, adoption, neuroscience',
    },
  },
}

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'it',
  messages,
})

export default i18n
