import DefaultTheme from 'vitepress/theme'
import './style.css'
import './tailwind.css'

// Мета-информация в статьях
import ArticleMeta from '../components/ArticleMeta.vue';

// Голосования
import ProjectCard from '../components/ProjectCard.vue';
import ProjectCardSmall from '../components/ProjectCardSmall.vue';
import Poll from '../components/Poll.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ArticleMeta', ArticleMeta);
    app.component('ProjectCard', ProjectCard);
    app.component('ProjectCardSmall', ProjectCardSmall);
    app.component('Poll', Poll);
  }
};