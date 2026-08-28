import DefaultTheme from 'vitepress/theme'
import './style.css'
import './tailwind.css'
import './Layout.vue'

// Мета-информация
import ArticleMeta from '../components/ArticleMeta.vue';

// Карточки проектов
import ProjectCard from '../components/ProjectCard.vue';
import ProjectCardSmall from '../components/ProjectCardSmall.vue';

// Текстовые заглушки в уроках
import LessonOverview from '../components/LessonOverview.vue';
import LessonKnowledgeCheck from '../components/LessonKnowledgeCheck.vue';
import LessonAdditionalResources from '../components/LessonAdditionalResources.vue';

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
    app.component('ArticleMeta', ArticleMeta);

    app.component('ProjectCard', ProjectCard);
    app.component('ProjectCardSmall', ProjectCardSmall);

    app.component('LessonOverview', LessonOverview);
    app.component('LessonKnowledgeCheck', LessonKnowledgeCheck);
    app.component('LessonAdditionalResources', LessonAdditionalResources);

    app.component('ChallengesBadges', ChallengesBadges);

    app.component('ChallengesAccordion', ChallengesAccordion);
  }
};