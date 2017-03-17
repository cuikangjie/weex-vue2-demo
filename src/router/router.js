
import Detail from '../view/detail.vue';
import Note from '../view/note.vue';
import Resume from '../view/resume.vue'


export default
  {
    routes:[
      {path: '/', redirect: '/note' },
      {path:'/note', component: Note},
      {path: '/detail/:id', component: Detail},
      {path: '/resume', component: Resume}
    ]
  }
