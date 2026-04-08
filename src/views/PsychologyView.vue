<template>
  <div class="max-w-3xl mx-auto px-6 py-16">
    <div class="mb-10">
      <span class="text-[11px] uppercase tracking-[0.25em] text-mocha-500">{{ t('psychology.sectionLabel') }}</span>
      <h1
        class="text-5xl font-medium text-stone-900 mt-2"
        style="font-family: 'Cormorant Garamond', Georgia, serif"
      >{{ t('psychology.title') }}</h1>
    </div>
    <div class="prose-content" v-html="contentHtml" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { marked } from 'marked'
import psychologyIt from '../content/psychology/index.md?raw'
import psychologyEn from '../content/psychology/index.en.md?raw'

const { t, locale } = useI18n()

const contentHtml = computed(() =>
  marked.parse(locale.value === 'en' ? psychologyEn : psychologyIt)
)
</script>
