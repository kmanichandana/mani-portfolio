<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="content"  v-scroll-reveal>
        <h2>About Me</h2>
        <p>
          I'm Mani Chandana Kandukuri, a passionate software developer with a love for crafting clean,
          efficient, and user-friendly applications. With a background in computer science and a drive
          to solve real-world problems, I continuously explore new technologies and enjoy turning
          ideas into code.
        </p>
        <p>
          My strengths lie in full-stack development, especially with JavaScript frameworks like Vue.js,
          and building scalable backend services. I’m also actively solving problems on platforms like
          LeetCode and GitHub to sharpen my algorithmic thinking.
        </p>
        <p>
          Outside of coding, I enjoy reading, exploring new tech trends, and contributing to open-source
          projects. I believe in lifelong learning and am always looking for opportunities to grow
          personally and professionally.
        </p>
        <p>
          Let’s connect and create something impactful together!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about-section {
  padding: 100px 20px 60px;
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.content {
  background-color: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.content h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .content h2 {
    font-size: 2rem;
  }

  .content p {
    font-size: 1rem;
  }
}
</style>
