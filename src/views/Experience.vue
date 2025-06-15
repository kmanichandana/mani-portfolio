<template>
  <section class="experience-section">
    <!-- <h1 class="section-title">Experience</h1> -->

    <div class="experience-list">
      <div
        class="experience-card"
        v-for="(job, index) in experiences"
        :key="index"
        data-aos="fade-left"
        :data-aos-delay="index * 150"
        data-aos-duration="600"
      >
        <!-- Company Logo -->
        <div class="logo-wrapper">
          <img :src="`/companies/${job.logo}`" :alt="job.company" />
        </div>

        <!-- Experience Content -->
        <div class="card-content">
          <div class="top-row">
            <h2 class="role">{{ job.role }}</h2>
            <span class="duration">{{ job.duration }}</span>
          </div>
          <div class="bottom-row">
            <p class="company">{{ job.company }}</p>
            <span class="location">{{ job.location }}</span>
          </div>
          <ul class="details">
            <li v-for="(point, i) in job.points" :key="i">{{ point }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'

  onMounted(() => {
    AOS.refresh()
  })

const experiences = [
  {
    role: 'PROGRAMMER ANALYST',
    duration: 'Oct 2022 – Jul 2023',
    company: 'Cognizant Technology Solutions',
    location: 'Hyderabad, India',
    logo: 'cog.png',
    points: [
      'Built a responsive web application using React and Node.js, ensuring cross-browser compatibility. Utilized Redux for state management, React Router for navigation, and styled components for maintainable styling.',
      'Integrated PostgreSQL with optimized queries and built RESTful APIs, improving response time by 65% and supporting a 3x increase in concurrent users.',
      'Implemented CI/CD pipelines with Jenkins and GitLab, reducing deployment time by 80% and increasing release frequency from monthly to weekly, following Agile methodologies to boost delivery speed.'
    ]
  },
  {
    role: 'PROGRAMMER ANALYST INTERN',
    duration: 'Mar 2022 – Oct 2022',
    company: 'Cognizant Technology Solutions',
    location: 'Remote',
    logo: 'cog.png',
    points: [
      'Developed responsive UIs in React with efficient component design and integration and assisted in building and optimizing RESTful APIs using Express and MongoDB, improving data retrieval by 25%.',
      'Collaborated with senior developers to learn containerization with Docker, troubleshooting backend issues, gaining hands-on experience in backend tasks like API integration and streamlining workflows, resulting in faster development cycles.'
    ]
  },
  {
    role: 'DATA ANALYST INTERN',
    duration: 'Jul 2020 – Sep 2020',
    company: 'Internship Studio',
    location: 'Remote',
    logo: 'int.png',
    points: [
      'Analyzed banking customer data using Python and machine learning (Logistic Regression, KNN, Naive Bayes, Decision Trees), boosting campaign effectiveness by 30%.',
      'Identified Random Forest as the optimal model, achieving 98.58% accuracy for marketing campaign prediction using Pandas, NumPy, and Scikit-learn.'
    ]
  }
]
</script>

<style scoped>

.experience-section {
  padding: 10px;
  background-color: transparent;
  height: fit-content;
}

.section-title {
  font-size: 2.5rem;
  color: #FF6B00;
  text-align: center;
  margin-bottom: 50px;
}

.experience-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

/* Experience Card Layout */
.experience-card {
  display: flex;
  background-color: rgb(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  min-height: auto;
  align-items: flex-start;
}

/* Logo on the left */
.logo-wrapper {
  width: 120px;
  display: flex;
  margin: 2px;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
}

.logo-wrapper img {
  max-height: 100%;
  max-width: 100%;
  border-radius: 10px;

  object-fit: contain;
}

/* Content block */
.card-content {
  flex: 1;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
}

.top-row, .bottom-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.role {
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  margin: 0;
}

.duration {
  font-size: 0.95rem;
  color: black;
}

.company {
  font-size: 1rem;
  font-weight: 500;
  color: rgb(58, 57, 57);
  margin: 0;

}

.location {
  font-style: italic;
  font-size: 0.9rem;
  color: #333;
}

.details {
  margin-top: 12px;
  font-size: 0.95rem;
  color: #333;
  padding: 15px;
  line-height: 1.6;
  list-style: disc;
  text-align: left;
}
@media (max-width: 768px) {

  .experience-section {
    padding: 0px;
    width: calc(100vw - 60px);
  }

  .experience-card {
    flex-direction: column;
    align-items: stretch;
    
  }

  .logo-wrapper {
    width: 70%;
    align-self: center;
    padding: 10px 0px;
    justify-content: center;
  }

  .card-content {
    padding: 18px;
  }

  .top-row,
  .bottom-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .role {
    font-size: 1rem;
  }

  .duration {
    font-size: 0.85rem;
  }

  .company {
    font-size: 0.95rem;
  }

  .location {
    font-size: 0.85rem;
  }

  .details {
    font-size: 0.9rem;
    padding: 10px 0 0;
  }
}

</style>
