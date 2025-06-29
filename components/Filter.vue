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
    color: var(--text-primary);
    font-weight: 600;
  }
  
  #type-filter {
    padding: 6px 20px;
    border-radius: 6px;
    background-color: var(--card-bg);
    color: var(--text-primary);
    border: 2px solid var(--accent);
    appearance: none;
    cursor: pointer;
    margin-left: 10px;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }
  
  #type-filter:hover {
    border-color: var(--accent);
    background-color: var(--bg-secondary);
  }
  
  #type-filter:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 2px var(--shadow);
  }

  .filter-container {
    background: var(--component-blue);
    border-radius: 8px;
    box-shadow: 0 4px 12px var(--shadow);
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid var(--navbar-border);
    transition: background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }

  .filter-container h2 {
    color: var(--text-primary);
    text-align: center;
    font-size: 28px;
    border-bottom: 2px solid var(--border);
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
</style>