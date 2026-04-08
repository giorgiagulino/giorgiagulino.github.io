<template>
  <div class="max-w-5xl mx-auto px-6 py-16">
    <div class="mb-10">
      <span class="text-[11px] uppercase tracking-[0.25em] text-mocha-500">{{ t('tech.sectionLabel') }}</span>
      <h1
        class="text-5xl font-medium text-stone-900 mt-2"
        style="font-family: 'Cormorant Garamond', Georgia, serif"
      >{{ t('tech.title') }}</h1>
      <p class="text-stone-500 mt-2">{{ t('tech.subtitle') }}</p>
    </div>

    <!-- Filter tags -->
    <div class="flex flex-wrap gap-2 mb-10">
      <button
        v-for="tag in allTags"
        :key="tag"
        :class="[
          'px-3 py-1 rounded-full text-xs font-medium border transition-colors',
          activeTag === tag
            ? 'bg-mocha-600 border-mocha-600 text-white'
            : 'border-stone-200 text-stone-500 hover:border-mocha-400 hover:text-mocha-600',
        ]"
        @click="activeTag = activeTag === tag ? null : tag"
      >
        {{ tag }}
      </button>
    </div>

    <!-- Projects grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="project in filteredProjects"
        :key="project.title"
        class="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 hover:shadow-md transition-shadow flex flex-col"
      >
        <div class="flex items-start justify-between mb-3">
          <span class="text-2xl">{{ project.icon }}</span>
          <span class="text-xs font-medium text-stone-400">{{ project.year }}</span>
        </div>
        <h3 class="font-semibold text-stone-800 mb-2">{{ project.title }}</h3>
        <p class="text-sm text-stone-600 flex-1">{{ locale === 'en' ? project.descEn : project.descIt }}</p>
        <div class="mt-4 flex flex-wrap gap-1.5">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="px-2 py-0.5 rounded-full bg-stone-100 text-stone-500 text-xs"
          >
            {{ tag }}
          </span>
        </div>
        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 text-xs font-medium text-mocha-600 hover:underline"
        >
          GitHub →
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const activeTag = ref(null)

const projects = [
  {
    icon: '🔐',
    title: 'Social Engineering Analyzer',
    year: '2024',
    descIt: 'Tool Python per analizzare pattern linguistici tipici degli attacchi di phishing e social engineering basato su NLP.',
    descEn: 'Python tool to analyze linguistic patterns typical of phishing and social engineering attacks using NLP.',
    tags: ['Cybersecurity', 'Python', 'NLP'],
    link: null,
  },
  {
    icon: '🧬',
    title: 'Genomic Pattern Visualizer',
    year: '2023',
    descIt: 'Pipeline di visualizzazione interattiva per sequenze genomiche con clustering automatico e annotazione funzionale.',
    descEn: 'Interactive visualization pipeline for genomic sequences with automatic clustering and functional annotation.',
    tags: ['Bioinformatica', 'Python', 'R'],
    link: null,
  },
  {
    icon: '🛡️',
    title: 'CTF Write-ups Collection',
    year: '2023–2024',
    descIt: 'Raccolta di soluzioni e spiegazioni dettagliate per challenge CTF in aree di crittografia, forensics e web exploitation.',
    descEn: 'Collection of solutions and detailed write-ups for CTF challenges in cryptography, forensics and web exploitation.',
    tags: ['Cybersecurity', 'CTF'],
    link: null,
  },
  {
    icon: '🤖',
    title: 'Biometric Behavioral Analysis',
    year: '2024',
    descIt: "Studio dell'applicazione del machine learning per il riconoscimento comportamentale come fattore di autenticazione.",
    descEn: 'Study of machine learning application for behavioral recognition as an authentication factor.',
    tags: ['Cybersecurity', 'ML', 'Ricerca'],
    link: null,
  },
  {
    icon: '🧪',
    title: 'Protein Structure Predictor',
    year: '2022',
    descIt: 'Implementazione di un modello di predizione della struttura proteica secondaria con reti neurali ricorrenti.',
    descEn: 'Implementation of a secondary protein structure prediction model using recurrent neural networks.',
    tags: ['Bioinformatica', 'ML', 'Python'],
    link: null,
  },
  {
    icon: '📊',
    title: 'Psicologia del Rischio Digitale',
    year: '2024',
    descIt: 'Ricerca qualitativa sui fattori psicologici che influenzano la percezione del rischio informatico negli utenti comuni.',
    descEn: 'Qualitative research on psychological factors influencing the perception of cyber risk in everyday users.',
    tags: ['Ricerca', 'Psicologia'],
    link: null,
  },
]

const allTags = [...new Set(projects.flatMap((p) => p.tags))]

const filteredProjects = computed(() =>
  activeTag.value ? projects.filter((p) => p.tags.includes(activeTag.value)) : projects
)
</script>
