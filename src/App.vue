<template>
  <div class="app-layout">
    <!-- Header -->
    <div class="header1">
      <img src="/mck.png" alt="Mani Chandana" />
      <h1>Mani Chandana Kandukuri</h1>
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/mani-chandana-kandukuri/" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="mailto:kmanichandana29@gmail.com">
          <i class="fas fa-envelope"></i>
        </a>
        <a href="https://github.com/kmanichandana" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a href="/resume.pdf" target="_blank">
          <i class="fas fa-file-alt"></i>
        </a>
      </div>
    </div>

    <!-- Mobile Nav -->
    <div class="mobile-nav" v-if="isMobile">
      <div
        class="section-button"
        v-for="(section, index) in sections"
        :key="index"
        :class="{ active: activeSection === section.name }"
        @click="navigate(section)"
      >
        {{ section.name }}
      </div>
    </div>

    <!-- Section Cards -->
    <div
      v-for="(section, index) in sections"
      :key="section.name"
      class="label-content-box"
      :style="getBoxStyle(section.name, index)"
    >
      <!-- Desktop Sidebar label -->
      <span
        class="nav-label"
        :class="{ active: index === activeIndex }"
        @click="navigate(section)"
        v-if="!isMobile"
      >
        {{ section.name }}
      </span>

      <!-- Content -->
      <div class="content-wrapper" v-show="section.name === activeSection">
        <component :is="getComponent(section.name)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

import Home from './views/Home.vue'
import Skills from './views/Skills.vue'
import Projects from './views/Projects.vue'
import Experience from './views/Experience.vue'
import Education from './views/Education.vue'

const sections = [
  { name: 'Home' },
  { name: 'Skills' },
  { name: 'Projects' },
  { name: 'Experience' },
  { name: 'Education' }
]

const activeSection = ref('Home')
const isMobile = ref(window.innerWidth <= 768)

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => window.addEventListener('resize', handleResize))
onBeforeUnmount(() => window.removeEventListener('resize', handleResize))

const activeIndex = computed(() =>
  sections.findIndex((s) => s.name === activeSection.value)
)

const navigate = (section) => {
  activeSection.value = section.name
}

const getComponent = (name) => {
  switch (name) {
    case 'Home': return Home
    case 'Skills': return Skills
    case 'Projects': return Projects
    case 'Experience': return Experience
    case 'Education': return Education
    default: return null
  }
}

const getBoxStyle = (name, index) => {
  const zIndex = 100 + index

  if (isMobile.value) {
    return {
      position: 'absolute',
      top: '70px',
      left: 0,
      width: '100vw',
      height: 'calc(100vh - 70px)',
      zIndex: zIndex,
      display: name === activeSection.value ? 'block' : 'none',
      background: '#fff',
      overflowY: 'auto'
    }
  }

  const isHome = name === 'Home'
  const currentActiveIndex = sections.findIndex(s => s.name === activeSection.value)
  let transform = 'translateX(0)'

  if (!isHome) {
    if (index <= currentActiveIndex) {
      transform = `translateX(${30 * index}px)`
    } else {
      transform = `translateX(calc(100vw - ${30 * (sections.length - index)}px))`
    }
  }


  return {
    position: 'absolute',
    left: isHome ? 0 : 'auto',
    right: isHome ? 'auto' : 0,
    zIndex: zIndex,
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
    width: '100vw',
    transition: 'transform 0.5s ease',
    transform: transform
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rampart+One&display=swap');

.app-layout {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: white;
}

.header1 {
  display: flex;
  height: 70px;
  font-size: 30px;
  padding-inline: 45px;
  justify-content: space-between;
  align-items: center;
  background-color: #FF6B00;
}

.header1 h1 {
  font-size: 30px;
  margin: 7px;
  font-family: "Rampart One", sans-serif;
  padding-inline: 10px;
}

.header1 img{
  height: 50px;
}

.social-icons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 280px;
  margin: 7px;
  border: white solid 3px;
  border-bottom: white solid 3px;
}

.social-icons a {
  margin-right: 15px;
  font-size: 1.5rem;
  color: white;
  transition: color 0.3s;
}

.social-icons a:hover {
  font-size: 1.8rem;
}

/* Desktop nav label */
.nav-label {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  background-color: #eee;
  color: #FF6B00;
  font-weight: bold;
  padding: 0px;
  width: 30px;
  height: calc(100vh - 70px);
  text-align: center;
  cursor: pointer;
  font-size: 1rem;
  border-right: 1px dotted #d25801;
  transition: all 0.3s ease;
}

.nav-label.active {
  background-color: #FF6B00;
  color: white;
  width: 50px;
  font-size: 1.7rem;
}

.content-wrapper {
  width: calc(100vw - 210px);
  height: 100%;
  background: white;
  padding: 20px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}

/* ---------- Mobile Styles ---------- */
@media (max-width: 768px) {
  .header1 {
    padding: 10px 15px;
    justify-content: space-around;

  }

  .header1 h1 {
    font-size: 1rem;
    padding: 0;
    margin: 0 10px;
  }

  .header1 img {
    display: none;
  }

  .social-icons {
    border: none;
    margin: 0;
    gap: 5px;
    width: auto;
  }

  .social-icons a {
    font-size: 1rem;
  }

  .mobile-nav {
    position: fixed;
    top: 70px;
    right: 0;
    height: calc(100vh - 70px);
    width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #f7f7f7;
    border-left: 2px solid #FF6B00;
    z-index: 999;
  }

  .section-button {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    font-size: 0.9rem;
    cursor: pointer;
    padding: 8px 4px;
    color: #FF6B00;
    transition: all 0.3s ease;
  }

  .section-button.active {
    font-weight: bold;
    background: #FF6B00;
    color: white;
    border-radius: 4px;
  }

  .nav-label {
    display: none;
  }

  .content-wrapper {
    width: calc(100vw - 40px);
    padding: 10px;
    overflow-y: auto;
  }

  .label-content-box {
    flex-direction: column;
  }

}
</style>
