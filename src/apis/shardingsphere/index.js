import global from '../../common/global_variable.js'

export default [

    //  getJobServer: (params = {}) => API.get(`/api/shardingscaling`, params),
    {
        name: 'getJobServer',
        method: 'getJobServer',
        path: '/api/shardingscaling/get',
        type: 'get',
        sysModule: global.cmdb
    },

    //   postJobServer: (params = {}) => API.post(`/api/shardingscaling`, params),
    {
        name: 'postJobServer',
        method: 'postJobServer',
        path: '/api/shardingscaling/post',
        type: 'post',
        dataType: 'json',
        sysModule: global.cmdb
    },

    //   getJobStart: (params = {}) => API.post(`/api/shardingscaling/job/start`, params),
    {
        name: 'getJobStart',
        method: 'getJobStart',
        path: '/api/shardingscaling/job/start',
        type: 'post',
        sysModule: global.cmdb
    },
    //   getJobList: (params = {}) => API.get(`/api/shardingscaling/job/list`, params),
    {
        name: 'getJobList',
        method: 'getJobList',
        path: '/api/shardingscaling/job/list',
        type: 'get',
        sysModule: global.cmdb
    },

    //   getJobProgress: jobId => API.get(`/api/shardingscaling/job/progress/${jobId}`),
    {
        name: 'getJobProgress',
        method: 'getJobProgress',
        path: '/api/shardingscaling/job/progress',
        type: 'get',
        sysModule: global.cmdb
    },

    // getJobStop: jobId => API.get(`/api/shardingscaling/job/stop/${jobId}`),
    {
        name: 'getJobStop',
        method: 'getJobStop',
        path: '/api/shardingscaling/job/stop',
        type: 'get',
        sysModule: global.cmdb
    },





    //   getRegCenter: (params = {}) => API.get(`/api/reg-center`, params),
    {
        name: 'getRegCenter',
        method: 'getRegCenter',
        path: '/api/reg-center/get',
        type: 'post',
        sysModule: global.cmdb
    },

    //   deleteRegCenter: (params = {}) => API.delete(`/api/reg-center`, params),
    {
        name: 'deleteRegCenter',
        method: 'deleteRegCenter',
        path: '/api/reg-center/del',
        type: 'post',
        sysModule: global.cmdb
    },

    //   postRegCenter: (params = {}) => API.post(`/api/reg-center`, params),
    {
        name: 'postRegCenter',
        method: 'postRegCenter',
        path: '/api/reg-center/post',
        type: 'post',
        dataType: 'json',
        sysModule: global.cmdb
    },

    //   getRegCenterActivated: (params = {}) => API.get(`/api/reg-center/activated`, params),
    {
        name: 'getRegCenterActivated',
        method: 'getRegCenterActivated',
        path: '/api/reg-center/activated',
        type: 'get',
        sysModule: global.cmdb
    },

    //   postRegCenterConnect: (params = {}) => API.post(`/api/reg-center/connect`, params),
    {
        name: 'postRegCenterConnect',
        method: 'postRegCenterConnect',
        path: '/api/reg-center/connect',
        type: 'post',
        dataType: 'json',
        sysModule: global.cmdb
    },

    //   updateRegCenter: (params = {}) => API.post(`/api/reg-center/update`, params)
    {
        name: 'updateRegCenter',
        method: 'updateRegCenter',
        path: '/api/reg-center/update',
        type: 'post',
        dataType: 'json',
        sysModule: global.cmdb
    },


    //  getSchema: (params = {}) => API.get(`/api/schema`, params),
    {
        name: 'getSchema',
        method: 'getSchema',
        path: '/api/schema/get',
        type: 'get',
        sysModule: global.cmdb
    },

    //   addSchema: (params = {}) => API.post(`/api/schema`, params),
    {
        name: 'addSchema',
        method: 'addSchema',
        path: '/api/schema/post',
        type: 'post',
        dataType: 'json',
        sysModule: global.cmdb
    },

    // deleteSchema: (schemaName) => API.delete(`/api/schema/${schemaName}`),
    {
        name: 'deleteSchema',
        method: 'deleteSchema',
        path: '/api/schema/del',
        type: 'post',
        sysModule: global.cmdb
    },

    //   getSchemaRule: (schemaName) => API.get(`/api/schema/rule/${schemaName}`),
    {
        name: 'getSchemaRule',
        method: 'getSchemaRule',
        path: '/api/schema/rule/get',
        type: 'get',
        sysModule: global.cmdb
    },

    //   putSchemaRule: (schemaName, params = {}) => API.put(`/api/schema/rule/${schemaName}`, params),
    {
        name: 'putSchemaRule',
        method: 'putSchemaRule',
        path: '/api/schema/rule/put',
        type: 'post',
        dataType: 'json',
        sysModule: global.cmdb
    },

    //   getSchemaDataSource: (schemaName) => API.get(`/api/schema/datasource/${schemaName}`),
    {
        name: 'getSchemaDataSource',
        method: 'getSchemaDataSource',
        path: '/api/schema/datasource/get',
        type: 'get',
        sysModule: global.cmdb
    },

    //   putSchemaDataSource: (schemaName, params = {}) => API.put(`/api/schema/datasource/${schemaName}`, params),
    {
        name: 'putSchemaDataSource',
        method: 'putSchemaDataSource',
        path: '/api/schema/datasource/put',
        type: 'post',
        dataType: 'json',
        sysModule: global.cmdb
    },

    //   getSchemaMetadata: (schemaName) => API.get(`/api/schema/metadata/${schemaName}`),
    {
        name: 'getSchemaMetadata',
        method: 'getSchemaMetadata',
        path: '/api/schema/metadata/get',
        type: 'get',
        sysModule: global.cmdb
    },

    //   getAuth: () => API.get(`/api/authentication`),
    {
        name: 'getAuth',
        method: 'getAuth',
        path: '/api/authentication/get',
        type: 'get',
        sysModule: global.cmdb
    },

    //   putAuth: (params = {}) => API.put(`/api/authentication`, params),
    {
        name: 'putAuth',
        method: 'putAuth',
        path: '/api/authentication/put',
        type: 'post',
        dataType: 'json',
        sysModule: global.cmdb
    },

    //   getProps: () => API.get(`/api/props`),
    {
        name: 'getProps',
        method: 'getProps',
        path: '/api/props/get',
        type: 'get',
        sysModule: global.cmdb
    },

    //   putProps: (params = {}) => API.put(`/api/props`, params)
    {
        name: 'putProps',
        method: 'putProps',
        path: '/api/props/put',
        type: 'post',
        sysModule: global.cmdb
    },



    //   getOrcheData: (params = {}) => API.get(`/api/governance/datasource`, params),
    {
        name: 'getOrcheData',
        method: 'getOrcheData',
        path: '/api/governance/datasource/get',
        type: 'get',
        sysModule: global.cmdb
    },

    //   putOrcheData: (params = {}) => API.put(`/api/governance/datasource`, params),
    {
        name: 'putOrcheData',
        method: 'putOrcheData',
        path: '/api/governance/datasource/put',
        type: 'post',
        dataType: 'json',
        sysModule: global.cmdb
    },

    //   getOrcheInstance: (params = {}) => API.get(`/api/governance/instance`, params),
    {
        name: 'getOrcheInstance',
        method: 'getOrcheInstance',
        path: '/api/governance/instance/get',
        type: 'get',
        sysModule: global.cmdb
    },

    //   putOrcheInstance: (params = {}) => API.put(`/api/governance/instance`, params)
    {
        name: 'putOrcheInstance',
        method: 'putOrcheInstance',
        path: '/api/governance/instance/put',
        type: 'post',
        dataType: 'json',
        sysModule: global.cmdb
    },










]
