/**
 * Created by maolunhuang
 */

import { Home , Content } from 'layout/'

export default {
  path: '/share',
  name: 'SETTING',
  icon: '',
  component: Home,Content,
  redirect: '/share/cluster',
  //children:Main,
  permission: 'share',
}
