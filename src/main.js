// main.js
import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

// Register components
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import Panel from 'primevue/panel';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: '.theme-dark'
        }
    }
});

// Register components
app.component('Button', Button);
app.component('Dropdown', Dropdown);
app.component('Panel', Panel);
app.component('InputText', InputText);
app.component('Calendar', Calendar);

app.mount('#app');