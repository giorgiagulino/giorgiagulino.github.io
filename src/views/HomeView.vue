<template>
  <div>
    <!-- Hero -->
    <section class="min-h-[92vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <div class="max-w-xl mx-auto">
        <p class="text-[11px] uppercase tracking-[0.35em] text-mocha-500 mb-10">
          {{ t('home.tagline') }}
        </p>
        <h1
          class="text-6xl sm:text-7xl md:text-8xl font-medium text-stone-900 leading-[0.95] mb-8"
          style="font-family: 'Cormorant Garamond', Georgia, serif"
        >
          Giorgia<br />Gulino
        </h1>
        <div class="w-10 h-px bg-mocha-300 mx-auto mb-8" />
        <p class="text-base text-stone-500 leading-relaxed max-w-sm mx-auto font-light">
          {{ t('home.subtitle') }}
        </p>
        <div class="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center">
          <RouterLink
            to="/cv"
            class="text-[11px] uppercase tracking-[0.25em] text-stone-500 hover:text-mocha-600 transition-colors border-b border-stone-200 hover:border-mocha-400 pb-0.5"
          >
            {{ t('home.ctaPath') }}
          </RouterLink>
          <RouterLink
            to="/art"
            class="text-[11px] uppercase tracking-[0.25em] text-stone-500 hover:text-mocha-600 transition-colors border-b border-stone-200 hover:border-mocha-400 pb-0.5"
          >
            {{ t('home.ctaArt') }}
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Bio from markdown -->
    <section class="border-t border-stone-100 py-24">
      <div class="max-w-2xl mx-auto px-6">
        <h2
          class="text-4xl font-medium text-stone-800 mb-10"
          style="font-family: 'Cormorant Garamond', Georgia, serif"
        >
          {{ t('home.bioTitle') }}
        </h2>
        <div class="prose-content" v-html="bioHtml" />
      </div>
    </section>

    <!-- Quick links -->
    <section class="border-t border-stone-100 bg-white py-24">
      <div class="max-w-4xl mx-auto px-6">
        <div
          class="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-stone-100"
        >
          <RouterLink
            v-for="card in cards"
            :key="card.to"
            :to="card.to"
            class="group flex flex-col items-center text-center px-8 py-12 hover:bg-mocha-50 transition-colors"
          >
            <div class="text-3xl mb-5">{{ card.icon }}</div>
            <h3
              class="text-xl font-medium text-stone-800 mb-2 group-hover:text-mocha-600 transition-colors"
              style="font-family: 'Cormorant Garamond', Georgia, serif"
            >
              {{ card.title }}
            </h3>
            <p class="text-sm text-stone-400 leading-relaxed">{{ card.desc }}</p>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { marked } from 'marked'
import homeMdIt from '../content/home.md?raw'
import homeMdEn from '../content/home.en.md?raw'

const { t, tm, locale } = useI18n()

const bioHtml = computed(() =>
  marked.parse(locale.value === 'en' ? homeMdEn : homeMdIt)
)

const cards = computed(() => tm('home.cards'))
</script>
