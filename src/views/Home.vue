<template>
  <section class="home-container">
    <div class="left">

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
      <div class="right">
        <img src="/profile.jpg" alt="Mani Chandana" />
      </div>

      <div class="intro">
        <h1>Hi! I am <span class="name">Mani</span></h1>
        <h2 class="typing-text">
          I am a
          <span ref="typedText" class="typed-role"></span>
        </h2>
      </div>
      
    </div>

    <p class="description">
        " I develop full-stack web applications using modern frameworks, ensuring responsive UIs and robust backend architecture.
        Proficient in building scalable systems, integrating APIs, and optimizing performance across the stack. "
    </p>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Typed from 'typed.js'

const typedText = ref(null)

onMounted(() => {
  new Typed(typedText.value, {
    strings: [
      'Full Stack Developer',
      'Software Developer',
      'Front End Developer',
      'Web Developer'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
  })
})
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
  flex-wrap: wrap;
  background-color: transparent;
  color: #333;
  gap: 50px;
}

.intro{
  display: flex;
  flex-direction: column;
  text-align: left;
}
.left {
  display:flex;
  width: 100%;
}

.right {  
  text-align: center;
  margin-right: 20px;
}

.right img {
  max-height: 40vh;
  width: auto;
  border-radius: 10px;
  
}

.name {
  color: #FF6B00; /* orange */
  font-size: 70px;
}

h1{
  font-size: 50px;
}

.typing-text {
  font-size: 2rem;
  margin: 1rem 0;
  color: #666;
}

.description {
  color: #555;
  font-size: 20px;
  margin-bottom: 1.5rem;
}

.social-icons{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 20px;
}
.social-icons a {
  font-size: 1.5rem;
  color: #FF6B00;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #444;
}

@media (max-width: 768px) {
  .home-container {
    flex-direction: column;
    text-align: center;
    padding: 60px 20px;
  }

  .left,
  .right {
    max-width: 100%;
  }

  .social-icons {
    justify-content: center;
  }
}
</style>
