<template>
    <!-- Shared Filter -->
    <div class="filter-wrapper">
      <label for="type-filter">Filter by {{ isProjectPage ? 'Category' : 'Category' }}:</label>
      <select id="type-filter" v-model="selectedFilter">
        <option value="All">All</option>
        <option v-for="opt in uniqueOptions" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
  
    <!-- Render correct cards -->
    <div v-for="item in filteredItems" :key="item.id">
      <ProjectCard
        v-if="isProjectPage"
        :image="item.image"
        :name="item.name"
        :description="item.brief"
        :slug="item.slug"
        :type="item.type"
      />
      <DocumentCard
        v-else
        :image="item.image"
        :name="item.name"
        :description="item.brief"
        :slug="item.slug"
        :type="item.type"
      />
    </div>
</template>
  
<script setup>
    import { ref, computed } from 'vue'
    import { useRoute } from 'vue-router'
    import ProjectCard from '~/components/ProjectCard.vue'
    import DocumentCard from '~/components/DocumentCard.vue'
    import allProjects from '~/data/projects.json'
    import project_docs from '~/data/documentation.json'

    const route = useRoute()
    const isProjectPage = route.path.includes('/Projects')
    const selectedFilter = ref('All')

    // Choose the right data set
    const dataSource = isProjectPage ? allProjects : project_docs

    // Get all types or categories to filter
    const allOptions = computed(() => {
    if (isProjectPage) {
        return allProjects.map(projects => projects.type).filter(Boolean)
    } else {
        return project_docs.map(docs => docs.type).filter(Boolean) // customize as needed
    }
    })

    const uniqueOptions = computed(() => Array.from(new Set(allOptions.value)))

    // Compute the filtered list
    const filteredItems = computed(() => {
    if (selectedFilter.value === 'All') return dataSource
    return dataSource.filter(item => {
        if (isProjectPage) return item.type === selectedFilter.value
        else return item.type === selectedFilter.value // or item.type if you use same key
    })
    })
</script>
  

<style scoped>
  .filter-wrapper{
    margin: 20px;
  }
  
  #type-filter {
    padding: 6px 20px;
    border-radius: 6px;
    background-color: #c7cdd2;
    color: #000000;
    border: 2px solid #444;
    appearance: none; /* Removes default OS styles */
    cursor: pointer;
    margin-left: 10px;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }
  
  #type-filter:hover {
    border-color: #888;
    background-color: #cadff2;
  }
  
  #type-filter:focus {
    outline: none;
    border-color: #fcfcc0;
    box-shadow: 0 0 0 2px rgba(252, 252, 192, 0.4);
  }

  
</style>