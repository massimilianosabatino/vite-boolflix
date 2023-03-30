import { createApp } from 'vue'
import './main.scss'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarReg} from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faStar, faStarReg)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
