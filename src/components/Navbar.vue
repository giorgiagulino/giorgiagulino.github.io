<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100">
    <div class="max-w-5xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
      <!-- Logo / Name -->
      <RouterLink
        to="/"
        class="text-xl font-medium tracking-wide text-stone-800 hover:text-mocha-600 transition-colors"
        style="font-family: 'Cormorant Garamond', Georgia, serif"
      >
        Giorgia Gulino
      </RouterLink>

      <!-- Desktop nav + lang toggle -->
      <div class="hidden md:flex items-center gap-8">
        <ul class="flex items-center gap-8">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="text-[11px] uppercase tracking-[0.2em] text-stone-400 hover:text-mocha-600 transition-colors py-1"
              active-class="!text-mocha-700"
            >
              {{ t(link.labelKey) }}
            </RouterLink>
          </li>
        </ul>

        <!-- Language toggle -->
        <button
          class="text-[11px] uppercase tracking-[0.2em] text-stone-300 hover:text-mocha-500 transition-colors border-l border-stone-100 pl-8"
          @click="toggleLocale"
        >
          {{ locale === 'it' ? 'EN' : 'IT' }}
        </button>
      </div>

      <!-- Mobile: hamburger + lang toggle -->
      <div class="md:hidden flex items-center gap-4">
        <button
          class="text-[11px] uppercase tracking-[0.2em] text-stone-400 hover:text-mocha-500 transition-colors"
          @click="toggleLocale"
        >
          {{ locale === 'it' ? 'EN' : 'IT' }}
        </button>
        <button
          class="flex flex-col gap-[5px] p-2 text-stone-500 hover:text-mocha-600 transition-colors"
          aria-label="Menu"
          @click="menuOpen = !menuOpen"
        >
          <span :class="['block w-5 h-px bg-current transition-transform duration-300', menuOpen ? 'rotate-45 translate-y-[6px]' : '']" />
          <span :class="['block w-5 h-px bg-current transition-opacity duration-300', menuOpen ? 'opacity-0' : '']" />
          <span :class="['block w-5 h-px bg-current transition-transform duration-300', menuOpen ? '-rotate-45 -translate-y-[6px]' : '']" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide">
      <ul
        v-if="menuOpen"
        class="md:hidden flex flex-col bg-white border-t border-stone-100 px-6 pb-4 pt-1"
      >
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="block py-3 text-[11px] uppercase tracking-[0.2em] text-stone-400 hover:text-mocha-600 transition-colors border-b border-stone-50"
            active-class="!text-mocha-700"
            @click="menuOpen = false"
          >
            {{ t(link.labelKey) }}
          </RouterLink>
        </li>
      </ul>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const menuOpen = ref(false)

const links = [
  { to: '/', labelKey: 'nav.home' },
  { to: '/cv', labelKey: 'nav.cv' },
  { to: '/psychology', labelKey: 'nav.psychology' },
  { to: '/tech', labelKey: 'nav.tech' },
  { to: '/books', labelKey: 'nav.books' },
  { to: '/art', labelKey: 'nav.art' },
]

function toggleLocale() {
  locale.value = locale.value === 'it' ? 'en' : 'it'
  localStorage.setItem('locale', locale.value)
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>

