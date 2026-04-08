<template>
  <div class="max-w-4xl mx-auto px-6 py-20">
    <h1
      class="text-5xl font-medium text-stone-900 mb-2"
      style="font-family: 'Cormorant Garamond', Georgia, serif"
    >{{ t('cv.title') }}</h1>
    <p class="text-xs uppercase tracking-[0.2em] text-mocha-500 mb-16">{{ t('cv.subtitle') }}</p>

    <!-- Academic -->
    <section class="mb-14">
      <h2 class="text-2xl font-medium text-stone-800 mb-8 flex items-center gap-2" style="font-family: 'Cormorant Garamond', Georgia, serif">
        <span>🎓</span> {{ t('cv.academicHeading') }}
      </h2>
      <ol class="relative border-l border-stone-200 space-y-8 ml-3">
        <li v-for="item in academic" :key="item.titleIt" class="ml-6">
          <span class="absolute -left-2 flex h-4 w-4 items-center justify-center rounded-full bg-mocha-100 ring-4 ring-[#faf8f5]">
            <span class="h-2 w-2 rounded-full bg-mocha-500" />
          </span>
          <span class="text-xs font-medium text-stone-400 uppercase tracking-wider">{{ item.period.replace('in corso', t('cv.present')) }}</span>
          <h3 class="mt-1 font-semibold text-stone-800">{{ locale === 'en' ? item.titleEn : item.titleIt }}</h3>
          <p class="text-sm text-stone-500">{{ item.institution }}</p>
          <p class="mt-1 text-sm text-stone-600">{{ locale === 'en' ? item.descEn : item.descIt }}</p>
        </li>
      </ol>
    </section>

    <!-- Work -->
    <section class="mb-14">
      <h2 class="text-2xl font-medium text-stone-800 mb-8 flex items-center gap-2" style="font-family: 'Cormorant Garamond', Georgia, serif">
        <span>💼</span> {{ t('cv.workHeading') }}
      </h2>
      <ol class="relative border-l border-stone-200 space-y-8 ml-3">
        <li v-for="item in work" :key="item.titleIt" class="ml-6">
          <span class="absolute -left-2 flex h-4 w-4 items-center justify-center rounded-full bg-mocha-200 ring-4 ring-[#faf8f5]">
            <span class="h-2 w-2 rounded-full bg-mocha-400" />
          </span>
          <span class="text-xs font-medium text-stone-400 uppercase tracking-wider">{{ item.period.replace('in corso', t('cv.present')) }}</span>
          <h3 class="mt-1 font-semibold text-stone-800">{{ locale === 'en' ? item.titleEn : item.titleIt }}</h3>
          <p class="text-sm text-stone-500">{{ item.institution }}</p>
          <p class="mt-1 text-sm text-stone-600">{{ locale === 'en' ? item.descEn : item.descIt }}</p>
        </li>
      </ol>
    </section>

    <!-- Download CV -->
    <section>
      <h2 class="text-2xl font-medium text-stone-800 mb-8 flex items-center gap-2" style="font-family: 'Cormorant Garamond', Georgia, serif">
        <span>📄</span> {{ t('cv.downloadHeading') }}
      </h2>
      <a
        href="/CV_Giorgia_Gulino.pdf"
        download
        class="inline-flex items-center gap-2 px-6 py-3 text-[11px] uppercase tracking-[0.2em] bg-stone-900 text-white hover:bg-mocha-700 transition-colors"
      >
        ↓ {{ t('cv.downloadBtn') }}
      </a>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const academic = [
  {
    period: '2022 \u2014 2026',
    titleIt: 'Laurea Triennale in Scienze e Tecniche Psicologiche (L-24)',
    titleEn: 'Bachelor\u2019s Degree in Psychological Sciences and Techniques (L-24)',
    institution: 'Universit\u00e0 degli Studi Guglielmo Marconi, Roma',
    descIt: 'Votazione 104/110. Tesi interdisciplinare: \u201cValutazione del Rischio Depressivo nei Social Media tramite Intelligenza Artificiale\u201d (Rel.: Prof. Manuel Petrucci). Focus su metodologie IA e analisi computazionale di indicatori psicologici nei dati social.',
    descEn: 'Graduated 104/110. Thesis: \u201cAssessment of Depressive Risk in Social Media via Artificial Intelligence\u201d (Supervisor: Prof. Manuel Petrucci). Focus on AI-driven methodologies and computational analysis of psychological indicators in social media data.',
  },
  {
    period: '2017 \u2014 2020',
    titleIt: 'Laurea Magistrale in Ingegneria e Scienze Informatiche \u2014 Curriculum Cybersecurity',
    titleEn: 'Master\u2019s Degree in Computer Science and Engineering \u2014 Cybersecurity Curriculum',
    institution: 'Universit\u00e0 degli Studi di Verona',
    descIt: 'Votazione 98/110. Corsi avanzati in Crittografia, Sicurezza Software e di Rete, Analisi del Malware e Sistemi di Verifica Automatizzata. Focus sull\u2019identificazione di vulnerabilit\u00e0 e la progettazione di architetture sicure.',
    descEn: 'Graduated 98/110. Advanced coursework in Cryptography, Software and Network Security, Malware Analysis, and Automated Verification Systems. Focus on identifying vulnerabilities and engineering secure, resilient software architectures.',
  },
  {
    period: '2014 \u2014 2017',
    titleIt: 'Laurea Triennale in Bioinformatica (L-31)',
    titleEn: 'Bachelor\u2019s Degree in Bioinformatics (L-31)',
    institution: 'Universit\u00e0 degli Studi di Verona',
    descIt: 'Votazione 97/110. Curriculum interdisciplinare tra Informatica e Scienze Biologiche: biologia computazionale, analisi dei dati e sviluppo di algoritmi per le scienze della vita.',
    descEn: 'Graduated 97/110. Interdisciplinary curriculum integrating Computer Science and Biological Sciences: computational biology, data analysis, and algorithm development for the life sciences.',
  },
  {
    period: '2008 \u2014 2014',
    titleIt: 'Diploma di Liceo Classico',
    titleEn: 'High School Diploma \u2014 Classical Studies',
    institution: 'Liceo Classico Scipione Maffei, Verona',
    descIt: 'Curriculum umanistico con specializzazione in Greco Antico, Latino, Filosofia e Letteratura. Solida formazione nel pensiero analitico e nell\u2019analisi critica.',
    descEn: 'Humanistic curriculum specializing in Ancient Greek, Latin, Philosophy, and Literature. Strong foundation in analytical thinking and critical analysis.',
  },
]

const work = [
  {
    period: '2025',
    titleIt: 'Tirocinio Pratico Valutativo \u2014 N.A.D.I.A. Onlus',
    titleEn: 'Practical Evaluative Internship \u2014 N.A.D.I.A. Onlus',
    institution: 'N.A.D.I.A. Onlus, Verona',
    descIt: 'Supporto all\u2019osservazione di colloqui informativi e post-adottivi e alle attivit\u00e0 di sostegno familiare. Gestione della documentazione clinica e analisi approfondita delle dinamiche psicologiche e interculturali nel contesto dell\u2019adozione internazionale (250 ore).',
    descEn: 'Supported observation of informational and post-adoption interviews and family support activities. Managed clinical documentation and conducted in-depth analysis of psychological and intercultural dynamics within the international adoption framework (250 hours).',
  },
  {
    period: '2020 \u2014 in corso',
    titleIt: 'Software Developer',
    titleEn: 'Software Developer',
    institution: 'UniCredit Services S.p.A., Verona',
    descIt: 'Sviluppo end-to-end di applicazioni enterprise con back-end Java e Spring Boot e front-end React.js. Responsabile dell\u2019affidabilit\u00e0 dei sistemi, dell\u2019integrazione dei dati e dell\u2019evoluzione tecnica di applicazioni a livello enterprise.',
    descEn: 'End-to-end development of enterprise applications with Java and Spring Boot back-end and React.js front-end. Responsible for system reliability, seamless data integration, and the full maintenance and technical evolution of enterprise-level software.',
  },
  {
    period: '2019 \u2014 2020',
    titleIt: 'Software Developer',
    titleEn: 'Software Developer',
    institution: 'Just Italia S.p.A., Grezzana (VR)',
    descIt: 'Sviluppo e manutenzione di applicazioni mobile per iOS con il framework Vue.js, con focus su interfacce intuitive e standard di performance elevati. Gestione dell\u2019intero ciclo di sviluppo per soluzioni enterprise cross-platform.',
    descEn: 'Developed and maintained mobile applications for iOS using the Vue.js framework. Focused on intuitive user interfaces and high-performance standards. Managed the full development cycle to deliver seamless cross-platform enterprise experiences.',
  },
]
</script>
