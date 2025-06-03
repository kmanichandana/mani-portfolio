<template>
  <section class="education-section">
    <!-- <h1 class="section-title">Education</h1> -->

    <div class="education-list">
      <div
        class="education-card"
        v-for="(edu, index) in education"
        :key="index"
        data-aos="fade-left"
        :data-aos-delay="index * 150"
        data-aos-duration="600"
      >
        <!-- Optional School Logo -->
        <div class="logo-wrapper">
          <img :src="`/schools/${edu.logo}`" :alt="edu.institution" />
        </div>

        <!-- Education Content -->
        <div class="card-content">
          <div class="top-row">
            <h2 class="institution">{{ edu.institution }} </h2>
            <span class="location">{{ edu.location }}</span>
          </div>
          <div class="middle-row">
            <p class="degree">{{ edu.degree }} </p>
            <span class="duration">{{ edu.duration }}</span>
          </div>
          <div class="bottom-row">
            <p class="course">{{ edu.specialization }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const education = [
  {
    degree: 'Master of Information Technology & Management',
    location: 'Chicago, IL',
    specialization: 'Specialization: Software Development',
    institution: 'Illinois Institute of Technology',
    duration: 'Aug 2023 – May 2025',
    logo: 'iit.png'
  },
  {
    degree: 'Bachelors in Electrical and Electronics Engineering',
    location: 'Hyderabad, India',
    specialization: '',
    institution: 'Jawaharlal Nehru Technological University',
    duration: 'Aug 2018 – Jun 2022',
    logo: 'jntu.png'
  }
]
</script>

<style scoped>
.education-section {
  padding: 10px;
  background-color: transparent;
  height: calc(100vh-70px);
}

.section-title {
  font-size: 2.5rem;
  color: #FF6B00;
  text-align: center;
  margin-bottom: 50px;
}

.education-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.education-card {
  display: flex;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  align-items: flex-start;
  transition: transform 0.3s ease;
}

.education-card:hover {
  transform: translateY(-4px);
}

.logo-wrapper {
  width: 120px;
  background: transparent;
  display: flex;
  align-items: center;
  margin: 2px;
  justify-content: center;
}

.logo-wrapper img {
  max-height: 100%;
  max-width: 100%;
  border-radius: 10px;
  object-fit: contain;
}

.card-content {
  flex: 1;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.top-row,
.middle-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
}

.bottom-row {
  display: flex;
  align-items: center;
}

.institution {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.location {
  font-size: 0.95rem;
  color: #888;
  font-style: italic;
}

.degree {
  font-size: 1rem;
  font-weight: 500;
  color: #444;
  margin: 0;
}

.duration {
  font-size: 0.9rem;
  color: #999;
}

.course {
  font-size: 0.95rem;
  font-style: italic;
  color: #777;
}

/* ✅ Responsive Styles */
@media (max-width: 768px) {
  .education-section {
    padding: 0px;
    width: calc(100vw - 60px);
  }

  .education-card {
    align-items: stretch;
    flex-direction: column;
    text-align: center;
  }

  .logo-wrapper {
    width: 70%; /* ✅ Ensure full width */
    padding: 3px;
    align-self:center;
    background: transparent;
    margin: 0px;
  }

  .card-content {
    width: 100%;  /* ✅ Fix content stacking issue */
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .top-row,
  .middle-row,
  .bottom-row {
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .institution {
    font-size: 15px;
  }

  .degree {
    font-size: 12px;
  }

  .duration {
    font-size: 10px;
}

.course {
    font-size: 10px;
}
.location {
  font-size: 10px;
}
}


</style>
