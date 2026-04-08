<template>
  <article
    class="group bg-white overflow-hidden border border-stone-100 hover:border-mocha-200 hover:shadow-md transition-all cursor-pointer"
    @click="$emit('open', painting)"
  >
    <!-- Image -->
    <div class="aspect-square overflow-hidden bg-stone-100">
      <img
        :src="painting.image"
        :alt="painting.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        @error="onImgError"
      />
    </div>
    <!-- Info -->
    <div class="p-4">
      <h3 class="font-semibold text-stone-800 truncate">{{ painting.title }}</h3>
      <p class="text-xs text-stone-500 mt-1">{{ painting.technique }} · {{ painting.year }}</p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  painting: {
    type: Object,
    required: true,
  },
})

defineEmits(['open'])

function onImgError(e) {
  e.target.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\'%3E%3Crect fill=\'%23f5f0eb\' width=\'400\' height=\'400\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' fill=\'%23a8a29e\' font-size=\'14\' font-family=\'serif\'%3EImmagine non disponibile%3C/text%3E%3C/svg%3E'
}
</script>
