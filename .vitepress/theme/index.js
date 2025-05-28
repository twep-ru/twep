import DefaultTheme from 'vitepress/theme'
import './style.css'
import './tailwind.css'

import ProjectCard from '../components/ProjectCard.vue';
import Poll from '../components/Poll.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProjectCard', ProjectCard);
    app.component('Poll', Poll);
  }
};