<template>
  <div id="app" class="app">
    <header class="header">
      <h1 class="title">Mirosław Fajst</h1>
      <p class="subtitle">niepoprawnyinformatyk.pl • SysAdmin & Network  Engineer</p>
      <nav class="nav">
        <a href="#o-mnie" class="nav-link">O mnie</a>
        <a href="#uslugi" class="nav-link">Usługi IT</a>
        <a href="#tech" class="nav-link">Technologie</a>
        <a href="#certyfikaty" class="nav-link">Certyfikaty</a>
        <a href="#kontakt" class="nav-link">Kontakt</a>
      </nav>
    </header>

    <section id="o-mnie" class="section about">
      <h2 class="section-title">🧑‍💻 O mnie</h2>
      <p>
        Cześć! Nazywam się <strong>Mirosław Fajst</strong> i na co dzień pracuję w branży IT.
        Zajmuję się administracją systemów, w tym Linux i Windows.
      </p>
      <p>
        Pasjonuję się nowymi technologiami i cyberbezpieczeństwem.
        Na tej stronie dzielę się wiedzą oraz pokazuję swoje projekty i usługi.
      </p>
    </section>

    <section id="uslugi" class="section services">
      <h2 class="section-title">💼 Usługi IT</h2>
      <div class="services-grid">
        <div class="service-card">
          <h3>Administracja systemami</h3>
          <p>Konfiguracja, optymalizacja i utrzymanie systemów Windows, Linux i serwerów chmurowych.</p>
        </div>
        <div class="service-card">
          <h3>Serwis elektroniki</h3>
          <p>Naprawa GSM, laptopów oraz składanie komputerów.</p>
        </div>
      </div>
    </section>

    <section id="tech" class="section tech">
      <h2 class="section-title">⚙️ Technologie</h2>
      <div class="tech-list">
        <div v-for="tech in techs" :key="tech.name" class="tech-item">
          <img :src="tech.icon" :alt="tech.name" class="tech-icon" />
          <span>{{ tech.name }}</span>
        </div>
      </div>
    </section>

    <section id="certyfikaty" class="section certificates">
      <h2 class="section-title">🏆 Certyfikaty</h2>
      <p class="certificates-intro">Moje doświadczenie i zdobyte certyfikaty w IT:</p>
      <div class="certificates-grid">
        <div v-for="cert in certificates" :key="cert.title" class="certificate-card">
          <div class="certificate-header">
            <img :src="cert.icon" :alt="cert.title" class="certificate-icon" />
            <h3>{{ cert.title }}</h3>
          </div>
          <p>{{ cert.issuer }} • {{ cert.year }}</p>
          <button @click="openModal(cert)" class="certificate-link">Sprawdź certyfikat →</button>
        </div>
      </div>
    </section>

    <section id="projekty" class="section projects">
  <h2 class="section-title">🧩 Projekty</h2>
  <p class="projects-intro">Kilka moich projektów i eksperymentów technicznych:</p>
  <div class="projects-grid">
    <div v-for="project in projects" :key="project.title" class="project-card">
      <img :src="project.image" :alt="project.title" class="project-image" />
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <div class="project-links">
        <a target="_blank" class="btn" @click.prevent="openProject(project)" >Wyświetl zdjęcie</a>
        <a v-if="project.demo" :href="project.demo" target="_blank" class="btn">Demo</a>
      </div>
    </div>
  </div>
</section>

    <div v-if="modalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <h3>{{ selectedCert.title }}</h3>
        <p>{{ selectedCert.issuer }} • {{ selectedCert.year }}</p>
        <img :src="selectedCert.icon" :alt="selectedCert.title" class="modal-image" />
        <button class="btn" @click="closeModal">Zamknij</button>
      </div>
    </div>

    <div v-if="projectModalOpen" class="modal-overlay" @click.self="closeProject">
  <div class="modal-content">
    <h3>{{ selectedProject.title }}</h3>
    <p>{{ selectedProject.description }}</p>
    <img :src="selectedProject.image" :alt="selectedProject.title" class="modal-image" />
    <button class="btn" @click="closeProject">Zamknij</button>
  </div>
</div>

<section id="kontakt" class="section contact">
  <h2 class="section-title">✉️ Kontakt</h2>
  <p>Masz pytania lub chcesz nawiązać współpracę?</p>
  <div class="contact-buttons">
    <a href="mailto:fajstmir@gmail.com" class="btn">Napisz do mnie</a>
    <a href="https://www.linkedin.com/in/miros%C5%82aw-fajst-3b4963209/" target="_blank" class="linkedin-btn" title="Mój LinkedIn">
      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" class="linkedin-icon" />
    </a>
  </div>
</section>

    <footer class="footer">
      <p>© 2025 Mirosław Fajst • niepoprawnyinformatyk.pl</p>
    </footer>
  </div>
</template>
<script setup>

import linuxIcon from '../src/assets/icons/icons8-linux-48.png'
import dockerIcon from '../src/assets/icons/icons8-docker-48.png'
import k8sIcon from '../src/assets/icons/icons8-kubernetes-48.png'
import vueIcon from '../src/assets/icons/icons8-vue-js-48.png'
import windowsIcon from '../src/assets/icons/icons8-windows-48.png'
import postgresIcon from '../src/assets/icons/icons8-postgresql-48.png'
import nginxIcon from '../src/assets/icons/icons8-nginx-48.png'
import ciscoIcon from '../src/assets/icons/icons8-cisco-webex-meetings-48.png'
import elektronikaIcon from '../src/assets/icons/icons8-electronics-64.png'
import linuxcert from '../src/assets/certificates/linux.png'
import ciscocert from '../src/assets/certificates/CCNA.png'
import postgrescert from '../src/assets/certificates/postgres.png'
import ITCcert from '../src/assets/certificates/ITC.png'
import K8S from '../src/assets/certificates/Kuberentes.png'
import Kubernetes from '../src/assets/certificates/Kuberneters2.png'
import project1 from '../src/assets/project/proxmox.png'
import project2 from '../src/assets/project/vmware.png'
import project3 from '../src/assets/project/mironcloud.png'
import project4 from '../src/assets/project/niepoprawny.png'
import httpdIcon from '../src/assets/icons/icons8-apache-24.png'
import zabbixIcon from '../src/assets/icons/icons8-zabbix-server-48.png'
import openIcon from '../src/assets/icons/icons8-openshift-48.png'
import vmIcon from '../src/assets/icons/icons8-vmware-50.png'
import googleIcon from '../src/assets/icons/icons8-google-cloud-48.png'

const techs = [
  { name: "Linux", icon: linuxIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "Kubernetes", icon: k8sIcon },
  { name: "Vue.js", icon: vueIcon },
  { name: "Windows", icon: windowsIcon },
  { name: "PostgreSQL", icon: postgresIcon },
  { name: "NGINX", icon: nginxIcon },
  { name: "Cisco", icon: ciscoIcon },
  { name: "Elektronika", icon: elektronikaIcon },
  { name: "Apache", icon: httpdIcon },
  { name: "Zabbix", icon: zabbixIcon },
  { name: "Openshift", icon: openIcon },
  { name: "VMware", icon: vmIcon },
  { name: "Google Cloud Platform", icon: googleIcon },
]
const projects = [
  {
    title: "Server Proxmox",
    description: "Serwer Proxmox - Homelab",
    image: project1,
  },

  {
    title: "Serwer VMware",
    description: "Serwer VMware - Homelab",
    image: project2,
  },

  {
    title: "miron.cloud",
    description: "Strona internetowa - ReactJS",
    image: project3,
  },
    {
    title: "niepoprawnyinformatyk.pl",
    description: "Strona internetowa - VUE.JS",
    image: project4,
  },
]

const projectModalOpen = ref(false)
const selectedProject = ref({})

function openProject(project) {
  selectedProject.value = project
  projectModalOpen.value = true
}

function closeProject() {
  projectModalOpen.value = false
}

const certificates = [
  {
    title: "Networking for Cisco CCNA",
    issuer: "Cisco",
    year: "2023",
    icon: ciscocert,
    link: "#"
  },
  {
    title: "Red Hat Certified System Administrator (EX200) Exam Prep",
    issuer: "Linux",
    year: "2025",
    icon: linuxcert,
    link: "#"
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    year: "2023",
    icon: ITCcert,
    link: "#"
  },
    {
    title: "Kubernetes for Beginners - Container Management and Automation",
    issuer: "K8S",
    year: "2024",
    icon: Kubernetes,
    link: "#"
  },
    {
    title: "Kubernetes: wdrażanie aplikacji i usług oraz konfiguracja monitoringu",
    issuer: "K8S",
    year: "2024",
    icon: K8S,
    link: "#"
  },
    {
    title: "PostgreSQL - Database Administration",
    issuer: "Database",
    year: "2025",
    icon: postgrescert,
    link: "#"
  },
]

import { ref } from 'vue'
const modalOpen = ref(false)
const selectedCert = ref({})

function openModal(cert) {
  selectedCert.value = cert
  modalOpen.value = true
}

function closeModal() {
  modalOpen.value = false
}
</script>

<style>
body {
  margin: 0;
  font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background-color: #000;
  color: #cfd8dc;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background: #0a0a0a;
  border-bottom: 2px solid #007bff;
  padding: 30px 20px;
  text-align: center;
}

.title {
  color: #00aaff;
  font-size: 2.4rem;
  margin: 0;
}

.subtitle {
  color: #90a4ae;
  margin-top: 5px;
  font-size: 1rem;
}

.nav {
  margin-top: 15px;
}

.nav-link {
  color: #cfd8dc;
  text-decoration: none;
  margin: 0 12px;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #00aaff;
}

.section {
  padding: 60px 20px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  color: #00aaff;
  font-size: 1.8rem;
  margin-bottom: 20px;
  border-bottom: 2px solid #007bff;
  display: inline-block;
  padding-bottom: 4px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.service-card {
  background: #0f0f0f;
  border: 1px solid #007bff;
  border-radius: 12px;
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 10px #007bff55;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-top: 20px;
}

.tech-item {
  background: #0f0f0f;
  border: 1px solid #007bff;
  border-radius: 16px;
  padding: 10px 18px;
  color: #00aaff;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: transform 0.2s, background 0.3s, box-shadow 0.3s;
}

.tech-item:hover {
  transform: scale(1.08);
  background: #007bff33;
  box-shadow: 0 0 10px #007bff44;
}

.tech-icon {
  width: 28px;
  height: 28px;
  filter: brightness(1.3);
}

.blog-card {
  background: #0f0f0f;
  border: 1px solid #007bff;
  border-radius: 12px;
  padding: 20px;
  text-align: left;
  transition: transform 0.3s, box-shadow 0.3s;
}

.blog-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 10px #007bff55;
}

.blog-card h3 {
  color: #00aaff;
  margin-bottom: 8px;
}

.blog-link {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.blog-link:hover {
  text-decoration: underline;
}

.btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s, transform 0.2s;
}

.btn:hover {
  background-color: #005fcc;
  transform: scale(1.05);
}

.footer {
  background: #0a0a0a;
  color: #90a4ae;
  text-align: center;
  padding: 15px;
  border-top: 2px solid #007bff;
}

.certificates-intro {
  color: #90a4ae;
  margin-bottom: 20px;
}

.certificates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.certificate-card {
  background: #0f0f0f;
  border: 1px solid #007bff;
  border-radius: 12px;
  padding: 20px;
  text-align: left;
  transition: transform 0.3s, box-shadow 0.3s;
}

.certificate-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 10px #007bff55;
}

.certificate-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.certificate-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.certificate-link {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.certificate-link:hover {
  text-decoration: underline;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #0f0f0f;
  border: 1px solid #007bff;
  border-radius: 12px;
  padding: 20px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  text-align: center;
}

.modal-image {
  max-width: 100%;
  height: auto;
  margin-top: 12px;
  border: 1px solid #007bff;
  border-radius: 8px;
}

.projects-intro {
  color: #90a4ae;
  margin-bottom: 20px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.project-card {
  background: #0f0f0f;
  border: 1px solid #007bff;
  border-radius: 12px;
  padding: 20px;
  text-align: left;
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 10px #007bff55;
}

.project-image {
  width: 100%;
  border-radius: 8px;
  border: 1px solid #007bff33;
  margin-bottom: 10px;
}

.project-links {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.contact-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 15px;
}

.linkedin-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0077b5;
  border-radius: 8px;
  padding: 12px;
  transition: transform 0.2s, background 0.3s;
}

.linkedin-btn:hover {
  background-color: #005582;
  transform: scale(1.05);
}

.linkedin-icon {
  width: 24px;
  height: 24px;
  filter: invert(1);
}

</style>
