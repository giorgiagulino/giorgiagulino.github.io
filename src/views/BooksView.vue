<template>
  <div class="max-w-4xl mx-auto px-6 py-20">

    <!-- Header -->
    <div class="mb-10">
      <span class="text-[11px] uppercase tracking-[0.25em] text-mocha-500">{{ t('books.sectionLabel') }}</span>
      <h1
        class="text-5xl font-medium text-stone-900 mt-2 mb-3"
        style="font-family: 'Cormorant Garamond', Georgia, serif"
      >{{ t('books.title') }}</h1>
      <p class="text-stone-400 text-sm">{{ t('books.subtitle') }}</p>
    </div>

    <!-- Search bar -->
    <div class="relative mb-12">
      <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-300 pointer-events-none" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
      <input
        v-model="query"
        type="search"
        :placeholder="locale === 'en' ? 'Search books, authors...' : 'Cerca libri, autori...'"
        class="w-full bg-white border border-stone-100 pl-11 pr-10 py-3 text-sm text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-mocha-300 transition-colors"
      />
      <button
        v-if="query"
        class="absolute right-4 top-1/2 -translate-y-1/2 text-stone-300 hover:text-stone-500 transition-colors"
        @click="query = ''"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- SEARCH RESULTS -->
    <template v-if="query">
      <p class="text-[11px] uppercase tracking-[0.15em] text-stone-300 mb-8">
        {{ searchResults.length }}
        {{ locale === 'en'
          ? (searchResults.length === 1 ? 'result for' : 'results for')
          : (searchResults.length === 1 ? 'risultato per' : 'risultati per') }}
        "{{ query }}"
      </p>
      <ol v-if="searchResults.length">
        <li
          v-for="(item, i) in searchResults"
          :key="item.book.title"
          class="group flex gap-5 py-5 border-b border-stone-50 last:border-0 items-start"
        >
          <span
            class="flex-shrink-0 mt-0.5 text-stone-200 select-none tabular-nums"
            style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1rem; min-width: 1.5rem; text-align: right;"
          >{{ String(i + 1).padStart(2, '0') }}</span>
          <div class="flex-1 min-w-0">
            <p style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.2rem;" class="text-stone-900 leading-snug mb-1">
              <span class="font-medium">{{ mainTitle(item.book.title) }}</span>
              <span v-if="subTitle(item.book.title)" class="text-stone-400 font-normal">
                &nbsp;&middot;&nbsp;<em>{{ subTitle(item.book.title) }}</em>
              </span>
            </p>
            <div class="flex flex-wrap items-center gap-2 mt-1.5">
              <span class="text-xs text-stone-400">{{ item.book.author }}</span>
              <span v-if="item.book.year" class="text-[10px] text-mocha-400 border border-mocha-100 px-1.5 py-0.5 rounded-full tabular-nums">{{ item.book.year }}</span>
              <span
                class="text-[10px] px-2 py-0.5 rounded-full font-medium ml-auto"
                :style="`background:${item.cat.color.bg}; color:${item.cat.color.text};`"
              >{{ item.cat.icon }} {{ locale === 'en' ? item.cat.labelEn : item.cat.labelIt }}</span>
            </div>
          </div>
        </li>
      </ol>
      <p v-else class="text-center text-stone-300 text-sm italic py-16">
        {{ locale === 'en' ? 'No books found.' : 'Nessun libro trovato.' }}
      </p>
    </template>

    <!-- BROWSE MODE -->
    <template v-else>
      <!-- Category cards grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="group relative overflow-hidden text-center px-4 py-10 transition-all duration-200 focus:outline-none"
          :class="activeId === cat.id ? 'shadow-md' : 'hover:shadow-sm'"
          :style="cat.image ? 'background:#1a1a1a' : `background:${cat.color.bg}`"
          @click="activeId = activeId === cat.id ? null : cat.id"
        >
          <!-- Background image -->
          <template v-if="cat.image">
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              :style="`background-image:url(${cat.image})`"
            />
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
          </template>

          <!-- Active accent bar -->
          <div
            v-if="activeId === cat.id"
            class="absolute bottom-0 left-0 right-0 h-[3px] z-10"
            :style="`background:${cat.image ? 'white' : cat.color.accent}`"
          />

          <!-- Book count badge -->
          <span
            class="absolute top-3 right-3 text-[10px] font-medium px-2 py-0.5 rounded-full z-10"
            :style="cat.image
              ? 'background:rgba(255,255,255,0.2); color:white;'
              : `background:white; color:${cat.color.text};`"
          >{{ cat.books.length }}</span>

          <!-- Icon + label -->
          <div class="relative z-10 flex flex-col items-center">
            <span class="text-4xl mb-3 block transition-transform duration-300 group-hover:scale-110">{{ cat.icon }}</span>
            <span
              class="block font-medium leading-tight"
              style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.05rem;"
              :style="cat.image ? 'color:white' : `color:${cat.color.text}`"
            >{{ locale === 'en' ? cat.labelEn : cat.labelIt }}</span>
          </div>
        </button>
      </div>

      <!-- Book list for active category -->
      <Transition name="tab-fade" mode="out-in">
        <div v-if="active" :key="active.id">
          <!-- Section header -->
          <div class="flex items-center gap-3 mb-8 pb-4 border-b border-stone-100">
            <span
              class="px-3 py-1 rounded-full text-sm font-medium"
              :style="`background:${active.color.bg}; color:${active.color.text};`"
            >{{ active.icon }} {{ locale === 'en' ? active.labelEn : active.labelIt }}</span>
            <span class="text-xs text-stone-300 tabular-nums">
              {{ active.books.length }}
              {{ locale === 'en'
                ? (active.books.length === 1 ? 'book' : 'books')
                : (active.books.length === 1 ? 'libro' : 'libri') }}
            </span>
          </div>

          <ol>
            <li
              v-for="(book, i) in active.books"
              :key="book.title"
              class="group flex gap-5 py-5 border-b border-stone-50 last:border-0 items-start"
            >
              <span
                class="flex-shrink-0 mt-0.5 text-stone-200 select-none tabular-nums transition-colors duration-200"
                style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1rem; min-width: 1.5rem; text-align: right;"
              >{{ String(i + 1).padStart(2, '0') }}</span>
              <div class="flex-1 min-w-0">
                <p
                  class="text-stone-900 leading-snug mb-1"
                  style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.2rem;"
                >
                  <span class="font-medium">{{ mainTitle(book.title) }}</span>
                  <span v-if="subTitle(book.title)" class="text-stone-400 font-normal">
                    &nbsp;&middot;&nbsp;<em>{{ subTitle(book.title) }}</em>
                  </span>
                </p>
                <div class="flex items-center gap-3 mt-1.5">
                  <span class="text-xs text-stone-400">{{ book.author }}</span>
                  <span
                    v-if="book.year"
                    class="text-[10px] px-1.5 py-0.5 rounded-full tabular-nums border"
                    :style="`color:${active.color.accent}; border-color:${active.color.bg};`"
                  >{{ book.year }}</span>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </Transition>
    </template>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { categories } from '../content/books.js'

const { t, locale } = useI18n()

const activeId = ref(null)
const query = ref('')

const active = computed(() => categories.find(c => c.id === activeId.value) ?? null)

const searchResults = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return []
  const out = []
  for (const cat of categories) {
    for (const book of cat.books) {
      if (book.title.toLowerCase().includes(q) || book.author.toLowerCase().includes(q))
        out.push({ book, cat })
    }
  }
  return out
})

function mainTitle(title) {
  const idx = title.indexOf('. ')
  return idx === -1 ? title : title.slice(0, idx)
}
function subTitle(title) {
  const idx = title.indexOf('. ')
  return idx === -1 ? '' : title.slice(idx + 2)
}
</script>

<style scoped>
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.tab-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.tab-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>