<template>
  <section class="projects-section">
    <!-- <h1 class="section-title">Projects</h1> -->

    <div class="projects-grid">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="project-card"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
      >
        <!-- Image + overlay -->
        <div
          class="image-wrapper"
          @mouseenter="hoveredImageIndex = index"
          @mouseleave="hoveredImageIndex = null"
        >
          <img
            v-if="project.img"
            :src="`/projects/${project.img}`"
            :alt="project.title"
            class="project-img"
            loading="lazy"
          />
          <div class="overlay" v-if="hoveredImageIndex === index">
            <div class="overlay-icons">
              <a v-if="project.github" :href="project.github" target="_blank" title="GitHub">
                <i class="fab fa-github"></i>
              </a>
              <a v-if="project.live" :href="project.live" target="_blank" title="Live Preview">
                <i class="fas fa-eye"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Title + top icons (hidden on image hover) -->
        <div class="project-header">
          <h2 class="project-title">{{ project.title }}</h2>
          <div class="icon-links" v-if="hoveredImageIndex !== index">
            <a v-if="project.github" :href="project.github" target="_blank" title="GitHub">
              <i class="fab fa-github"></i>
            </a>
            <a v-if="project.live" :href="project.live" target="_blank" title="Live Preview">
              <i class="fas fa-eye"></i>
            </a>
          </div>
        </div>

        <p class="project-description">{{ project.description }}</p>

        <div class="project-tags">
          <span v-for="(tech, i) in project.tech" :key="i" class="tag">{{ tech }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const hoveredImageIndex = ref(null)

const projects = [
  {
    title: 'Elegance Clinic',
    description:
      'A full-stack app to manage clinic appointments with SMS reminders, built using Vue, Node.js, MongoDB, and Twilio.',
    tech: ['Next.js', 'MongoDB', 'Twilio'],
    img: 'elegance.png',
    github: 'https://github.com/kmanichandana/elegance-clinic',
    live: 'https://elegance-clinic.vercel.app/'
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio built with Vue and Vite featuring project showcase, skills, and responsive design.',
    tech: ['Vue', 'Vite', 'CSS'],
    img: 'portfolio.png',
    github: 'https://github.com/kmanichandana/mani-portfolio',
    live: 'https://mani-chandana-kandukuri.netlify.app/'
  },
  {
    title: 'Task Manager',
    description:
      'Task manager with CRUD, calendar view, modal UI, and real-time filtering using vanilla JS.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    img: 'taskmanager.png',
    github: 'https://github.com/kmanichandana/Task_Manager',
    live: 'https://kmanichandana.github.io/Task_Manager/'
  },
  {
    title: 'Bank Transaction App',
    description:
      'JavaFX banking system with MVC, role-based UI, and SQL backend.',
    tech: ['JavaFX', 'MVC', 'SQL', 'XHTML'],
    img: 'bank.png',
    github: 'https://github.com/yourusername/bank-app'
  }
]
</script>

<style scoped>
.projects-section {
  padding: 10px;
  background-color: transparent;
  text-align: center;
  height: fit-content;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 2fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.project-card {
  background-color: rgb(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.project-card:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

/* Image wrapper and overlay */
.image-wrapper {
  position: relative;
  width: 100%;
  height: 180px;
  /* background-color: #fff; */
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.project-img {
  width: 100%;
  max-height: 160px;
  object-fit:contain;
  border-radius: 8px;
  align-content: center;
  transition: transform 0.3s ease, filter 0.3s ease;
}

/* Overlay */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}

.overlay-icons {
  display: flex;
  gap: 16px;
}

.overlay-icons a {
  color: #fff;
  font-size: 1.4rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

.overlay-icons a:hover {
  transform: scale(1.2);
  color: #fa7f74;
;
}

/* Header with title and icons */
.project-header {
  position: relative;
  width: 100%;
  margin-bottom: 8px;
}

.project-title {
  text-align: center;
  font-size: 20px;
  color: #333;
  font-weight: 700;
  margin: 0 auto;
}

.icon-links {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  gap: 10px;
}
.image-wrapper:hover img {
  filter: blur(2px);
  transform: scale(1.05);
}

.icon-links a {
  color: #555;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.icon-links a:hover {
    color: #fa7f74;
}

/* Description + tags */
.project-description {
  font-size: 15px;
  color: #333;
  margin-bottom: 14px;
  text-align: center;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  margin-bottom: 14px;
}

.tag {
  background-color: #f18e85;
  color: #000;
  font-size: 12px;
  font-weight:500;
  padding: 4px 10px;
  border-radius: 16px;
}

@media (max-width: 768px) {
  .projects-section {
    padding: 0px;
    width: calc(100vw - 60px);

  }

  .icon-links a {
    font-size: 0.9rem;
  }

  .overlay-icons a {
    font-size: 1.2rem;
  }
}
</style>
