import Vue from 'vue'
import VueRouter from 'vue-router'
import hljs from 'highlight.js';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: 'howUse'
    },
    {
        path: '/howUse',
        name: '单选题',
        component: () => import('../../doc/howUse.md')
    },
    {
        path: '*',
        redirect: '/'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});
export default router