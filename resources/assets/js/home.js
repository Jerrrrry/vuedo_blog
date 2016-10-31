import Vue from 'vue'
import Home from './Home.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


Vue.use(VueRouter)

Vue.use(VueResource)


var router = new VueRouter({
    history: true,
    root: 'waterflow'
})

router.map({
    '/': {
        component: require('./components/Home.vue')
    },
})

router.start(Home, '#home')