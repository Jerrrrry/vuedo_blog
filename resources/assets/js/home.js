import Vue from 'vue'
import Home from './Home.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


Vue.use(VueRouter)

Vue.use(VueResource)


var router = new VueRouter({
    history: true,
    root: 'home'
})

router.map({
    '/': {
        component: require('./components/Page.vue')
    }
})

router.start(Home, 'body')