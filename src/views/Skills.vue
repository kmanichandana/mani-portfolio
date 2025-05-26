<template>
  <section class="skills-section">
    <!-- <h1 class="section-title">Skills</h1> -->

    <div class="skills-grid">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="skill-card"
        :class="skill.type"
        :title="skill.name"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
      >
        <!-- images for skills -->
        <img
          :src="`/skills/${skill.img}`"
          :alt="skill.name"
          class="skill-icon"
        />
        <p>{{ skill.name }}</p>
      </div>
 
      <div class="legend">
        <span class="badge lang">Programming Languages</span>
        <span class="badge backend">Backend</span>
        <span class="badge frontend">Frontend</span>
        <span class="badge database">Database</span>
        <span class="badge tool">Tool / Platform</span>
      </div>
  
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'Java', img: 'java.png', type: 'lang' },
  { name: 'Ruby', img: 'ruby.png', type: 'lang' },
  { name: 'Python', img: 'python.png', type: 'lang' },
  { name: 'C', img: 'c.png', type: 'lang' },
  { name: 'C#', img: 'csharp.png', type: 'lang' },

  { name: 'Node.js', img: 'nodejs.png', type: 'backend' },
  { name: '.NET', img: 'dotnet.png', type: 'backend' },
  { name: 'Next.js', img: 'next.png', type: 'backend' },


  { name: 'React.js', img: 'react.png', type: 'frontend' },
  { name: 'Vue.js', img: 'vue.png', type: 'frontend' },
  { name: 'JavaScript', img: 'javascript.png', type: 'frontend' },
  { name: 'TypeScript', img: 'typescript.png', type: 'frontend' },
  { name: 'Bootstrap', img: 'bootstrap.png', type: 'frontend' },
  { name: 'Tailwind CSS', img: 'tailwind.png', type: 'frontend' },

  { name: 'MySQL', img: 'mysql.png', type: 'database' },
  { name: 'PostgreSQL', img: 'postgresql.png', type: 'database' },
  { name: 'MongoDB', img: 'mongodb.png', type: 'database' },

  { name: 'Docker', img: 'docker.png', type: 'tool' },
  { name: 'Kubernetes', img: 'kubernetes.png', type: 'tool' },
  { name: 'Azure', img: 'azure.png', type: 'tool' },
  { name: 'Git', img: 'git.png', type: 'tool' }
]

</script>

<style scoped>

.skills-section {
  padding: 10px;
  background-color: transparent;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  color: #FF6B00;
  margin-bottom: 40px;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.skill-card {
  width: 120px;
  height: 120px;
  border-radius: 10px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  cursor: default;
}

.skill-card:hover .skill-icon {
  transform: scale(1.15);
  animation: bounce 0.5s ease;
}

@keyframes bounce {
  0%, 100% {
    transform: scale(1.15) translateY(0);
  }
  50% {
    transform: scale(1.15) translateY(-5px);
  }
}


/* Color backgrounds based on category */
.lang {
  background-color: #FFE5CA;
}
.backend {
  background-color: #f6d8f8;
}
.frontend {
  background-color: #FFD6D6;
}
.database {
  background-color: #bbc2e0;
}
.tool {
  background-color: #cbecdf;
}
/*  */
/* FFF0D1 */
.skill-icon {
  width: 45px;
  height: 45px;
  object-fit: contain;
}

.skill-card p {
  position: absolute;
  bottom: 8px;
  font-size: 0.75rem;
  color: #333;
  font-weight: 500;
  margin: 0;
  width: 100%;
  text-align: center;
}

.legend {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 30px;
}

.badge {
  padding: 6px 12px;
  font-size: 0.8rem;
  border-radius: 20px;
  font-weight: 500;
  color: #333;
  margin-top: 30px;
}
.badge.lang     { background: #FFE5CA; }
.badge.backend  { background: #f6d8f8; }
.badge.frontend { background: #FFD6D6; }
.badge.database { background: #bbc2e0; }
.badge.tool     { background: #cbecdf; }

@media (max-width: 768px) {
  .skills-section {
    padding: 60px 20px;
  }
  .skill-card {
    width: 80px;
    height: 80px;
  }
  .skill-icon{
    height: 30px;
    width: 30px;
  }
    
  
}
</style>
