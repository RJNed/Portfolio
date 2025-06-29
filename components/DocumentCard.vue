<template>
    <NuxtLink :to="`/documents/${slug}`" class="cardContainer">
      <div class="imageSection">
        <h3 class="projectName">{{ name }}</h3>
        <img :src="image" :alt="name" class="projectPreview" />
      </div>
      <div class="descriptionSection">
        <p class="projectDescription">{{ description }}</p>
      </div>
    </NuxtLink>
  </template>

  
  <script setup>
  defineProps({
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .cardContainer {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration-line: none;
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--shadow);
  background: var(--component-blue);
  text-align: center;
  width: 100%;
  max-width: 1000px;
  padding: 20px;
  margin-bottom: 20px;
  flex-wrap: nowrap;
  border: 1px solid var(--navbar-border);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
}

.cardContainer:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px var(--shadow);
  border: 1px solid var(--accent);
}

.imageSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  flex: 0 0 150px;
  color: var(--text-primary);
  padding: 15px;
}

.descriptionSection {
  flex: 1 1 0%;
  min-width: 0;
  padding-right: 30px;
}

.descriptionSection p {
  color: var(--text-secondary);
  text-align: left;
  padding-left: 20px;
  width: 100%;
  line-height: 1.6;
}

.imageSection h3 {
  font-size: 22px;
  margin: 0px 0px 10px;
  padding: 0px;
  color: var(--text-primary);
}

.projectPreview {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid var(--border);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.projectPreview:hover {
  transform: scale(1.05);
}

/* Responsive Design */
@media (max-width: 768px) {
  .cardContainer {
    width: 95%;
    flex-direction: column;
    text-align: center;
  }

  .imageSection,
  .descriptionSection {
    width: 100%;
    text-align: center;
    padding: 5px;
  }

  .descriptionSection p {
    padding-left: 0;
    text-align: center;
  }
}
</style>
