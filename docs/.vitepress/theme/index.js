import DefaultTheme from 'vitepress/theme'
import './style.css'
import './tailwind.css'
import './Layout.vue'

// Лейблы
import ChallengesBadges from '../components/ChallengesBadges.vue';

// Комментарии
import Layout from './Layout.vue';

// Аккордеон
import ChallengesAccordion from '../components/ChallengesAccordion.vue';

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('ChallengesBadges', ChallengesBadges);
    app.component('ChallengesAccordion', ChallengesAccordion);
  }
};