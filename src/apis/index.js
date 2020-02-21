/**
 * Created by sailengsi on 2017/5/11.
 */

/**
 * 导出所有模块需要用到接口
 * 一级属性：模块名
 * 一级属性中的方法：当前模块需要用的接口
 * @type {Object}
 */
import user from './user/'
import system from './system/'
import configguration from './configguration/'
import historic from './historic/'
import track from './track/'
import ci from './ci/'
import umc from './umc/'
import share from './share/'
import srm from './srm'
import iam from './iam/'
import doc from './doc/'

export default [{
  module: 'user',
  name: '用户管理',
  list: user
},{
  module: 'system',
  name: '系统设置',
  list: system
}, {
  module: 'configguration',
  name: '版本管理',
  list: configguration
},{
  module: 'historic',
  name: '版本管理',
  list: historic
},{
  module: 'track',
  name: '版本管理',
  list: track
},{
  module: 'ci',
  name: '部署管理',
  list: ci
},{
  module: 'umc',
  name: '部署管理',
  list: umc
},{
  module: 'share',
  name: '公共管理',
  list: share
},{
  module: 'srm',
  name: '设置管理',
  list: srm
},{
  module: 'iam',
  name: '权限管理',
  list: iam
},{
  module: 'doc',
  name: '文档管理',
  list: doc
}]
