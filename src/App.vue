<script setup>
import { ref, onMounted } from 'vue';
import { updatePrimaryPalette } from '@primeuix/themes';

const isDarkMode = ref(false);
const selectedColor = ref('blue');

// Available theme colors
const colorOptions = [
  { name: 'Blue', value: 'blue' },
  { name: 'Green', value: 'green' },
  { name: 'Purple', value: 'purple' },
  { name: 'Amber', value: 'amber' },
  { name: 'Teal', value: 'teal' }
];

// Color palettes (simplified example)
const colorPalettes = {
  blue: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49'
  },
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16'
  },
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
    950: '#3b0764'
  },
  amber: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03'
  },
  teal: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
    950: '#042f2e'
  }
};

// Toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;

  if (isDarkMode.value) {
    document.documentElement.classList.add('theme-dark');
  } else {
    document.documentElement.classList.remove('theme-dark');
  }
};

// Change the primary color palette
const changeColor = () => {
  const colorPalette = colorPalettes[selectedColor.value];

  // Update primary palette
  updatePrimaryPalette({
    50: colorPalette[50],
    100: colorPalette[100],
    200: colorPalette[200],
    300: colorPalette[300],
    400: colorPalette[400],
    500: colorPalette[500],
    600: colorPalette[600],
    700: colorPalette[700],
    800: colorPalette[800],
    900: colorPalette[900],
    950: colorPalette[950]
  });
};

// Initialize theme based on system preferences
onMounted(() => {
  // Check if system prefers dark mode
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersDark) {
    isDarkMode.value = true;
    document.documentElement.classList.add('theme-dark');
  }

  // Set initial color
  changeColor();
});
</script>

<template>
  <div class="theme-switcher-container">
    <h1>PrimeVue v4 Theme Switcher</h1>

    <div class="theme-controls">
      <div class="color-selector">
        <label>Theme Color:</label>
        <Dropdown v-model="selectedColor" :options="colorOptions" optionLabel="name"
                  optionValue="value" @change="changeColor" />
      </div>

      <div class="mode-selector">
        <label>Dark Mode:</label>
        <Button :label="isDarkMode ? 'Light Mode' : 'Dark Mode'" @click="toggleDarkMode"
                :icon="isDarkMode ? 'pi pi-sun' : 'pi pi-moon'" />
      </div>
    </div>

    <div class="component-showcase">
      <Panel header="Component Showcase">
        <div class="component-grid">
          <div class="component-item">
            <h3>Buttons</h3>
            <div class="button-group">
              <Button label="Primary" />
              <Button label="Secondary" severity="secondary" />
              <Button label="Success" severity="success" />
              <Button label="Warning" severity="warning" />
              <Button label="Danger" severity="danger" />
              <Button label="Info" severity="info" />
            </div>
          </div>

          <div class="component-item">
            <h3>Input Fields</h3>
            <div class="input-group">
              <InputText placeholder="Text Input" />
              <Calendar placeholder="Date Input" />
            </div>
          </div>
        </div>
      </Panel>
    </div>
  </div>
</template>

<style>
/* Base styles */
html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, sans-serif;
  font-size: 14px;
}

body {
  margin: 0;
  padding: 20px;
  background-color: var(--p-surface-50);
  color: var(--p-surface-900);
  transition: background-color 0.3s, color 0.3s;
}

.theme-dark body {
  background-color: var(--p-surface-900);
  color: var(--p-surface-50);
}

.theme-switcher-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--p-primary-500);
}

.theme-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: var(--p-surface-0);
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.color-selector, .mode-selector {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.component-showcase {
  margin-top: 2rem;
}

.component-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.component-item {
  padding: 1rem;
}

.button-group, .input-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .theme-controls {
    flex-direction: column;
    gap: 1rem;
  }

  .component-grid {
    grid-template-columns: 1fr;
  }
}
</style>