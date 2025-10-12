import DefaultTheme from 'vitepress/theme'
import './style.css'
import './tailwind.css'
import './Layout.vue'

// Мета-информация
import ArticleMeta from '../components/ArticleMeta.vue';
import ModernJsMeta from '../components/ModernJsMeta.vue';

// Голосования
import ProjectCard from '../components/ProjectCard.vue';
import ProjectCardSmall from '../components/ProjectCardSmall.vue';
import Poll from '../components/Poll.vue';

// Текстовые заглушки в уроках
import LessonOverview from '../components/LessonOverview.vue';
import LessonKnowledgeCheck from '../components/LessonKnowledgeCheck.vue';
import LessonAdditionalResources from '../components/LessonAdditionalResources.vue';

// Лейблы
import ChallengesBadges from '../components/ChallengesBadges.vue';
import Layout from './Layout.vue';

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('ArticleMeta', ArticleMeta);
    app.component('ModernJsMeta', ModernJsMeta);

    app.component('ProjectCard', ProjectCard);
    app.component('ProjectCardSmall', ProjectCardSmall);
    app.component('Poll', Poll);

    app.component('LessonOverview', LessonOverview);
    app.component('LessonKnowledgeCheck', LessonKnowledgeCheck);
    app.component('LessonAdditionalResources', LessonAdditionalResources);

    app.component('ChallengesBadges', ChallengesBadges);
  }
};