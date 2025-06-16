<template>
  <section class="home-container">
    <div class="left">
      <div class="profile">
        <div class="social-icons" >
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
          <img src="/ppp.png" alt="Mani Chandana" />
        </div>
      </div>

      <div class="intro">
        <h1>Hi! I am <span class="name">Mani</span>,</h1>
        <h2 class="typing-text">
          I'm a "<span ref="typedText" class="typed-role"></span>"
        </h2>
      </div>
      
    </div>

    <p class="description">
        " Creative Developer with a strong foundation in both frontend and backend technologies, 
        passionate about building scalable, user-centric applications. 
        Backed by hands-on experience at Cognizant and a Master’s in Information Technology & Management (4.0 GPA) from Illinois Institute of Technology, 
        I specialize in React, Node.js, and cloud-native solutions. 
        From designing dynamic UIs to engineering robust APIs, I thrive on turning complex ideas into seamless digital experiences."
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
  color: white;
}
.left {
  display:flex;
  width: 100%;
  padding-inline: 10px;
  background-color: transparent;
}
.profile{
  display: flex;
  flex-direction: row;
}

.right {  
  margin: 20px;
  max-height: 40vh;
  box-shadow: #fa7f74 0 0 10px;
  border-radius: 50%;
  background-color: rgb(223, 224, 223, 0.8);
  border: solid black 1px;
}

.right img {
  max-height: 40vh;
  width: auto;
  border-radius: 50%;

}

.name {
  color: #fa7f74;
  font-size: 70px;
}

h1{
  font-size: 50px;
}

.typing-text {
  font-size: 2rem;
  margin: 1rem 0;
  color: white;
}

.typed-role{
  color: #fa7f74;
}

.description {
  color: #fff8f3;
  font-size: 20px;
  margin-bottom: 1.5rem;
}

.social-icons{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 20px;
  text-wrap: 10px 10px 0;
}
.social-icons a {
  font-size: 1.7rem;
  color: #f77064;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #fd2f1c;
  translate: 5px 0px;
  transition: all 0.3s;
}

@media (max-width: 768px) {
  .home-container {
    flex-direction: column;
    text-align: center;
    padding: 0px;
    margin-bottom: 30px;
    width: calc(100vw - 60px);
  }

  .left {
    flex-direction: column;
    width: 100%;
    padding-inline: 0px;
    background-color: transparent;
  }

  .right {
    margin: 0px;
    width: 70vw;
    height: 70vw;
    align-self: center;
  }
  .right img{
    width: 70vw;
    height: 70vw;

  }
  .social-icons {
    flex-direction: row;
    margin-right: 0px;
  }

  .profile{
    flex-direction: column-reverse;
    gap: 10px;
  }

  .name {
    font-size: 50px;
  }
  h1{
    font-size: 40px;
  }

  .typing-text {
    font-size: 1.5rem;
  }

  .description {
    font-size: 15px;
  }
  
}
</style>
