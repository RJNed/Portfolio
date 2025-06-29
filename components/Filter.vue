<template>
    <!-- Shared Filter -->
    <div class="filter-wrapper">
      <label for="type-filter">Filter by Category:</label>
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
    import { ref, computed, onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    import ProjectCard from '~/components/ProjectCard.vue'
    import DocumentCard from '~/components/DocumentCard.vue'
    import allProjects from '~/data/projects.json'

    const route = useRoute()
    const isProjectPage = route.path.includes('/Projects') || route.path.includes('/projects')
    const selectedFilter = ref('All')

    // Use the same data source for both pages since we consolidated
    const dataSource = allProjects

    // Get all types or categories to filter
    const allOptions = computed(() => {
        return allProjects.map(projects => projects.type).filter(Boolean)
    })

    const uniqueOptions = computed(() => Array.from(new Set(allOptions.value)))

    // Compute the filtered list
    const filteredItems = computed(() => {
        if (selectedFilter.value === 'All') return dataSource
        return dataSource.filter(item => item.type === selectedFilter.value)
    })

    // Handle query parameters for filtering
    onMounted(() => {
        if (route.query.type) {
            selectedFilter.value = String(route.query.type)
        }
    })
</script>
  

<style scoped>
  .filter-wrapper{
    margin: 20px;
  }

  .filter-wrapper label {
    color: #2c3e50;
    font-weight: 600;
  }
  
  #type-filter {
    padding: 6px 20px;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.9);
    color: #2c3e50;
    border: 2px solid #2c3e50;
    appearance: none;
    cursor: pointer;
    margin-left: 10px;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }
  
  #type-filter:hover {
    border-color: #34495e;
    background-color: rgba(255, 255, 255, 1);
  }
  
  #type-filter:focus {
    outline: none;
    border-color: #2c3e50;
    box-shadow: 0 0 0 2px rgba(44, 62, 80, 0.4);
  }
</style>