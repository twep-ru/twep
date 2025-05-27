import DefaultTheme from 'vitepress/theme'
import './style.css'
import './tailwind.css'

import ProjectCard from '../components/ProjectCard.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProjectCard', ProjectCard);
  }
};