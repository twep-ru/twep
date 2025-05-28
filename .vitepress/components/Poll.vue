<template>
  <div class="poll-card max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md transition-all duration-300">
    <h3 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">{{ question }}</h3>

    <div v-if="loading" class="text-center py-4 text-gray-500">Загрузка...</div>

    <div v-else-if="error" class="text-red-500 text-center py-4">{{ error }}</div>

    <div v-else class="space-y-4">
      <!-- Варианты ответов -->
      <div
        v-for="(option, index) in options"
        :key="index"
        class="relative group"
      >
        <button
          :disabled="hasVoted || loading"
          @click="vote(index)"
          class="w-full text-left px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                 bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        >
          {{ option.text }}
        </button>

        <!-- Прогресс-бар -->
        <transition name="slide-fade">
          <div
            v-show="showResults"
            class="mt-1 h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden"
          >
            <div
              class="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
              :style="{ width: getPercentage(index) + '%' }"
            ></div>
          </div>
        </transition>

        <p
          v-if="showResults"
          class="text-sm text-gray-600 dark:text-gray-300 mt-1 ml-1"
        >
          {{ getVotesCount(index) }} голосов
        </p>
      </div>

      <!-- Сообщение после голосования -->
      <div v-if="hasVoted && showResults" class="mt-4 text-green-600 dark:text-green-400 font-medium">
        ✅ Спасибо за ваш голос!
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../utils/supabaseClient'

const props = defineProps({
  pollId: {
    type: String,
    required: true
  }
})

const question = ref('')
const options = ref([])
const votes = ref({})
const loading = ref(true)
const error = ref(null)
const hasVoted = ref(false)
const showResults = ref(false)

// Получаем данные
async function fetchData() {
  try {
    const { data: pollData, error: pollError } = await supabase
      .from('polls')
      .select('*')
      .eq('id', props.pollId)
      .single()

    if (pollError) throw pollError

    question.value = pollData.question
    options.value = pollData.options

    const { data: votesData, error: votesError } = await supabase
      .from('votes')
      .select('selected_option')

    if (votesError) throw votesError

    // Подсчёт голосов
    const counts = {}
    let total = 0
    votesData.forEach(vote => {
      counts[vote.selected_option] = (counts[vote.selected_option] || 0) + 1
      total++
    })

    votes.value = counts
    hasVoted.value = !!votesData.find(vote => vote.poll_id === props.pollId)
    showResults.value = true
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

// Голосование
async function vote(optionIndex) {
  const { error } = await supabase.from('votes').insert([
    {
      poll_id: props.pollId,
      selected_option: optionIndex
    }
  ])

  if (error) {
    console.error('Ошибка голосования:', error)
    return
  }

  hasVoted.value = true
  votes.value[optionIndex] = (votes.value[optionIndex] || 0) + 1
}

// Кол-во голосов
function getVotesCount(index) {
  return votes.value[index] || 0
}

// Процент голосов
function getPercentage(index) {
  const total = Object.values(votes.value).reduce((a, b) => a + b, 0)
  return total ? Math.round((getVotesCount(index) / total) * 100) : 0
}

onMounted(fetchData)
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>