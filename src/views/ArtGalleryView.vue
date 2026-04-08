<template>
  <div class="max-w-6xl mx-auto px-6 py-16">
    <div class="mb-10">
      <span class="text-[11px] uppercase tracking-[0.25em] text-mocha-500">{{ t('art.sectionLabel') }}</span>
      <h1
        class="text-5xl font-medium text-stone-900 mt-2"
        style="font-family: 'Cormorant Garamond', Georgia, serif"
      >{{ t('art.title') }}</h1>
      <p class="text-stone-500 mt-2 text-sm">{{ t('art.subtitle') }}</p>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ArtCard
        v-for="painting in paintings"
        :key="painting.id"
        :painting="painting"
        @open="openLightbox"
      />
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="lightboxOpen"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          @click.self="closeLightbox"
        >
          <div class="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <!-- Close button -->
            <button
              class="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/60 transition-colors text-xs font-light"
              aria-label="Chiudi"
              @click="closeLightbox"
            >
              ✕
            </button>

            <!-- Image -->
            <div class="md:w-2/3 bg-stone-900 flex items-center justify-center min-h-[300px]">
              <img
                :src="activeP.image"
                :alt="activeP.title"
                class="max-h-[75vh] max-w-full object-contain"
              />
            </div>

            <!-- Details -->
            <div class="md:w-1/3 p-8 flex flex-col justify-center">
              <h2 class="text-3xl font-medium text-stone-800 mb-1" style="font-family: 'Cormorant Garamond', Georgia, serif">{{ activeP.title }}</h2>
              <p class="text-xs uppercase tracking-[0.15em] text-mocha-500 font-medium mb-1">{{ activeP.technique }}</p>
              <p class="text-xs text-stone-400 mb-4">{{ activeP.year }}</p>
              <p class="text-stone-600 text-sm leading-relaxed">{{ activeP.description }}</p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import { useI18n } from 'vue-i18n'
import matter from 'gray-matter'
import ArtCard from '../components/ArtCard.vue'
import galleryRaw from '../content/art/gallery.md?raw'

const { t } = useI18n()

const { data } = matter(galleryRaw)
const paintings = data.paintings ?? []

const lightboxOpen = ref(false)
const activeP = ref({})

function openLightbox(painting) {
  activeP.value = painting
  lightboxOpen.value = true
  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.documentElement.style.overflow = ''
  document.body.style.overflow = ''
}

function restoreScroll() {
  document.documentElement.style.overflow = ''
  document.body.style.overflow = ''
}

onBeforeRouteLeave(restoreScroll)
onUnmounted(restoreScroll)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
