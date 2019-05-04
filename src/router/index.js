import Vue from 'vue'
import Router from 'vue-router'
import Activity from '@/pages/Activity';
import Me from '@/pages/Me';
import Home from '@/pages/Home';
import EditPerson from '@/pages/EditPerson';
import AboutUs from '@/pages/AboutUs';
import Initiation from '@/pages/Initiation';
import JionIn from '@/pages/JionIn';
import ActivityDetail from '@/pages/ActivityDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/activity',
      name: 'Activity',
      component: Activity,
    },
    {
      path: '/me',
      name: 'Me',
      component: Me,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/edit',
      name: 'EditPerson',
      component: EditPerson,
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs,
    },
    {
      path: '/initiation',
      name: 'Initiation',
      component: Initiation,
    },
    {
      path: '/jion',
      name: 'JionIn',
      component: JionIn,
    },
    {
      path: '/activitydetail',
      name: 'ActivityDetail',
      component: ActivityDetail,
    }
  ]
})
