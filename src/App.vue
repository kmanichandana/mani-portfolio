<template>
  <div class="app-layout">
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
    <div
      v-for="(section, index) in sections"
      :key="section.name"
      class="label-content-box"
      :style="getBoxStyle(section.name, index)"
    >
      <!-- Sidebar label -->
      <span
        class="nav-label"
        :class="{ active: index === activeIndex }"
        @click="navigate(section)"
      >
        {{ section.name }}
      </span>

      <!-- Corresponding content -->
      <div class="content-wrapper" v-show="section.name === activeSection">
        <component :is="getComponent(section.name)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Dummy components for illustration
import Home from './views/Home.vue'
import Skills from './views/Skills.vue'
import Projects from './views/Projects.vue'
import Experience from './views/Experience.vue'
import Education from './views/Education.vue'
// import Contact from './views/Contact.vue'

const sections = [
  { name: 'Home' },
  { name: 'Skills' },
  { name: 'Projects' },
  { name: 'Experience' },
  { name: 'Education' }
  // { name: 'Contact' }
]

const activeSection = ref('Home')

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
    // case 'Contact': return Contact
    default: return null
  }
}

const getBoxStyle = (name, index) => {
  const isActive = activeSection.value === name
  const isHome = name === 'Home'
  const currentActiveIndex = sections.findIndex(s => s.name === activeSection.value)
  const zIndex = 100 + index

  let transform = 'translateX(0)'

  if (!isHome) {
    if (index <= currentActiveIndex) {
      // All active and previous sections
      transform = `translateX(${30 * index}px)`
    } else {
      // Future sections just show their label
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
.app-layout {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* prevent vertical scroll from stacking */
}

.label-content-box {
  background-color: #fff;
  width: 100%;
}

/* Label */
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

/* Content */
.content-wrapper {
  width: calc(100vw - 210px);
  height: 100%;
  background: white;
  padding: 20px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}
.header1{
  display: flex;
  height:70px;
  font-size: 30px;
  padding-inline: 45px;
  justify-content: space-between;
  background-color: #FF6B00;
}
.header1 h1{
  font-size: 30px;
  margin: 7px;
  padding-inline: 10px;
  align-content: center;
  /* border-top: white solid 3px;
  border-bottom: white solid 3px; */

}

.social-icons{
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
</style>
