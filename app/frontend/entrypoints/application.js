import { createApp } from 'vue/dist/vue.esm-bundler';

import ButtonCounter from '../components/ButtonCounter.vue'

const app = createApp({ 
  data() {
    return {  
      message: 'Intro to Vue 3 and Rails'
    }  
  }  
})  
  
app.component('ButtonCounter', ButtonCounter)

app.mount('#app');
// (optional) for debug purpose  
console.log("app", app);
