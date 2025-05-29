<template>
  <div
    class="mx-auto rounded-2xl shadow-md outline outline-stone-100 bg-white dark:bg-gray-900 transition-all">

    <div class="text-center p-5">
      <p class="mt-0 mb-2 text-sm font-normal text-stone-600 dark:text-stone-300">Проголосуйте за</p>
      <h3 class="text-base font-medium text-stone-900 dark:text-gray-300">{{ question }}</h3>
    </div>

    <div class="p-4 rounded-2xl bg-violet-50">
      <ul class="space-y-2">
        <li v-for="(option, index) in options" :key="index"
          class="relative rounded-xl overflow-hidden bg-violet-100 dark:bg-violet-800 transition-all">

          <!-- Прогрессбар -->
          <div class="absolute rounded-xl left-0 top-0 h-full bg-violet-300 dark:bg-violet-600 transition-all duration-700" :style="{
            width: hasVoted ? getPercentage(index) + '%' : '0%'
          }"></div>

          <!-- Кнопка -->
          <button
            class="relative rounded-xl w-full z-10 px-4 py-3 text-left text-sm font-medium text-violet-950 hover:bg-violet-200 dark:hover:bg-violet-700 dark:text-white transition-colors duration-200"
            :disabled="hasVoted" @click="vote(index)"
            :style="{ cursor: hasVoted ? 'default' : 'pointer' }">
            {{ option.text }}
            
          </button>

          <!-- Процент -->
          <span
            class="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-violet-950 dark:text-violet-200 z-10">
            {{ getPercentage(index) }}%
          </span>
        </li>
      </ul>
    </div>

    <div class="p-5 text-center">
      <p class="mt-0 mb-2 text-sm font-normal text-stone-600 dark:text-stone-300">
        Всего проголосовало: {{ totalVotes }}
      </p>
      <p v-if="hasVoted" class="text-base font-medium text-rose-600">
        Спасибо за ваш голос!
      </p>
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
const selectedOption = ref(null)
const hasVoted = ref(false)
const totalVotes = ref(0)
const loading = ref(true)

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
      .eq('poll_id', props.pollId)

    if (votesError) throw votesError

    const counts = {}
    let total = 0
    votesData.forEach(vote => {
      counts[vote.selected_option] = (counts[vote.selected_option] || 0) + 1
      total++
    })

    votes.value = counts
    totalVotes.value = total

    const stored = localStorage.getItem(`voted_${props.pollId}`)
    hasVoted.value = !!stored
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
}

async function vote(index) {
  if (hasVoted.value) return
  selectedOption.value = index

  const { error } = await supabase.from('votes').insert([
    {
      poll_id: props.pollId,
      selected_option: index
    }
  ])

  if (!error) {
    votes.value[index] = (votes.value[index] || 0) + 1
    totalVotes.value++
    hasVoted.value = true
    localStorage.setItem(`voted_${props.pollId}`, 'true')
  }
}

function getVotesCount(index) {
  return votes.value[index] || 0
}

function getPercentage(index) {
  const total = Object.values(votes.value).reduce((a, b) => a + b, 0)
  return total ? Math.round((getVotesCount(index) / total) * 100) : 0
}

onMounted(fetchData)
</script>