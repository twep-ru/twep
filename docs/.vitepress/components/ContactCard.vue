<template>
  <div class="contact-card flex flex-col-reverse gap-4 items-center justify-between mt-10 border-1 border-stone-200 rounded-lg p-6 transition-all duration-200 sm:flex-row hover:-translate-y-1 hover:shadow-lg">
    <div class="flex justify-center h-44 sm:w-1/3">
      <img class="object-contain" src="../images/loki-avatar.png" alt="Логотип Проекта «Локи»">
    </div>
    <div class="flex flex-col text-center sm:w-2/3">
      <h3 class="text-stone-800">Вопросы по программированию?</h3>
      <p class="text-stone-700">Присоединяйтесь к нашему дружному сообществу <a target="_blank" rel="noreferrer" href="https://t.me/thelokiproject_chat">в Telegram</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactCard'
}
</script>