import Vue from 'vue'
import Router from 'vue-router'
const Home = resolve => require(['@/pages/General/Home.vue'], resolve)
const AboutUs = resolve => require(['@/pages/General/AboutUs.vue'], resolve)
const Contacts = resolve => require(['@/pages/General/Contacts.vue'], resolve)
const Register = resolve => require(['@/pages/Auth/Register.vue'], resolve)
const Login = resolve => require(['@/pages/Auth/Login.vue'], resolve)
const Guide = resolve => require(['@/pages/Guide/Guide.vue'], resolve)
//const GuideList = resolve => require(['@/pages/Guide/GuideList.vue'], resolve)
//const GuideAdd = resolve => require(['@/pages/Guide/GuideAdd.vue'], resolve)
const Profile = resolve => require(['@/pages/User/Profile.vue'], resolve)
//const Friend = resolve => require(['@/pages/User/Friend/Friend.vue'], resolve)
//const FriendList = resolve => require(['@/pages/User/Friend/FriendList.vue'], resolve)
//const FriendSearch = resolve => require(['@/pages/User/Friend/FriendSearch.vue'], resolve)
//const Ques = resolve => require(['@/pages/User/Ques/Ques.vue'], resolve)
//const QuesAdd = resolve => require(['@/pages/User/Ques/QuesAdd.vue'], resolve)

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    }
  ]
})
