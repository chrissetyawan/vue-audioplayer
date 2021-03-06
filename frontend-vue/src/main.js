// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import APlayer from 'vue-aplayer-plugin'
import { FileUpload } from 'v-file-upload'

import 'vue-aplayer-plugin/dist/APlayer.min.css'
import './assets/app.css'
import './assets/APlayer_custom.min.css'
import './assets/v-file-upload.css'

Vue.config.productionTip = false
Vue.use(APlayer)
Vue.use(FileUpload)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})