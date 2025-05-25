<template>
  <section class="contact-section">
    <!-- <h1 class="section-title">Contact Me</h1> -->

    <div class="contact-container">
      <!-- Contact Info -->
      <div class="contact-info">
        <h2>Let's connect</h2>
        <p>You can reach me by email, GitHub, or LinkedIn. I’d love to hear from you!</p>
        <ul class="contact-list">
          <li>
            <i class="fas fa-envelope"></i>
            <a href="mailto:your.email@example.com">kmanichandana29@email.com</a>
          </li>
          <li>
            <i class="fab fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank">LinkedIn</a>
          </li>
          <li>
            <i class="fab fa-github"></i>
            <a href="https://github.com/your-username" target="_blank">GitHub</a>
          </li>
        </ul>
      </div>

      <!-- Contact Form -->
      <form class="contact-form" @submit.prevent="handleSubmit">
        <input v-model="form.name" type="text" placeholder="Your Name" required />
        <input v-model="form.email" type="email" placeholder="Your Email" required />
        <textarea v-model="form.message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>

    <!-- Toast -->
    <div class="toast" v-if="showToast">Message sent successfully!</div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const showToast = ref(false)

const handleSubmit = () => {
  // Basic validation
  if (!form.name || !form.email || !form.message) {
    alert('Please fill in all fields.')
    return
  }

  // Simulate submission (replace with actual API call if needed)
  console.log('Message submitted:', { ...form })

  // Clear form
  form.name = ''
  form.email = ''
  form.message = ''

  // Show toast
  showToast.value = true
  setTimeout(() => (showToast.value = false), 3000)
}
</script>

<style scoped>
.contact-section {
  padding: 0px;
  background-color: #fff;
  min-height: 100vh;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #FF6B00;
  margin-bottom: 50px;
}

.contact-container {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
}

.contact-info {
  flex: 1;
  min-width: 280px;
}

.contact-info h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}

.contact-info p {
  margin-bottom: 20px;
  color: #555;
}

.contact-list {
  list-style: none;
  padding: 0;
}

.contact-list li {
  margin-bottom: 12px;
  font-size: 1rem;
  color: #333;
  display: flex;
  align-items: center;
}

.contact-list i {
  margin-right: 10px;
  color: #FF6B00;
  width: 20px;
  text-align: center;
}

.contact-form {
  flex: 1;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-form input,
.contact-form textarea {
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
  background-color: #f9f9f9;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #FF6B00;
}

.contact-form button {
  background-color: #FF6B00;
  color: #fff;
  padding: 12px;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-form button:hover {
  background-color: #e55d00;
}

/* ✅ Toast Notification */
.toast {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #FF6B00;
  color: white;
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  animation: slideUp 0.4s ease;
  z-index: 1000;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ✅ Mobile Styles */
@media (max-width: 768px) {
  .contact-section {
    padding: 40px 20px;
  }

  .contact-container {
    flex-direction: column;
  }

  .contact-info,
  .contact-form {
    width: 100%;
  }

  .toast {
    right: 50%;
    transform: translateX(50%);
  }
}
</style>
