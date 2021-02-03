// Generated by XCloud DevOps for Codegen, refer: http://dts.devops.wl4g.com
import {transDate, getDay} from 'utils/'
import global from "../../../common/global_variable";

const Editor = require('@toast-ui/editor/dist/toastui-editor')

export default {
    name: 'enterpriseMd',
    data() {
        return {

            subPath: '/md',
            path: '',

            data: {},

            editorText: '',

            editorOptions: {
                language: 'zh-CN',
                plugins: [this.youtubePlugin]
            },



            apiDialogVisible: false,
            project: '',
            projects: [],//get from db

            versions: [],
            versionId: '',


            defaultProps: {
                children: 'children',
                label: 'name',
                isLeaf: 'leaf'
            },
            node_had: {},
            resolve_had: {},
            apiId: '',


            templates:[],
            selectedTemplate: '',
            mdPath: '',
            beforeFormatDialogVisible: false,
            exportUrl: global.getBaseUrl(global.doc, false) + '/md/formatTemplate',
        }
    },

    activated() {
        this.$store.dispatch('set_menu_close')
    },

    mounted() {
        this.addToolBar();
        this.getProjects();

    },
    methods: {

        openFile(path) {
            console.info(path)
            let that = this;
            this.path = path;
            this.$$api_doc_getFileInfo({
                data: {
                    subPath: this.subPath,
                    path: path,
                },
                fn: json => {
                    this.data = json.data;
                    that.$refs["myToastEditor"].invoke("setMarkdown", json.data.content);

                    that.onEditorChange();

                },
            })
        },

        saveFile(){
            //TODO
            let content = this.$refs["myToastEditor"].invoke("getMarkdown");

            this.$$api_doc_saveFile({
                data: {
                    subPath: this.subPath,
                    path: this.path,
                    content: content,
                },
                fn: json => {
                    this.$message({
                        message: 'Success',
                        type: 'success'
                    });
                    this.openFile(this.path);
                },
            })
        },

        onEditorChange(){
            let md = this.$refs["myToastEditor"].invoke("getMarkdown");
            this.$$api_doc_mdToHtml({
                data: {
                    md: md,
                },
                fn: json => {
                    console.info(json.data);

                    const el = document.querySelector(`#myMdView`);
                    el.innerHTML = json.data;
                },
            })

        },

        getClusterContextmenus(data){
            let that = this;
            if(data.path.indexOf('/')!=data.path.lastIndexOf('/')){
                return [];
            }
            return [
                {
                    label: "发布",
                    onClick: () => {
                        that.mdPath = data.path;
                        that.getTemplates();
                        that.beforeFormatDialogVisible = true;
                    },
                },
            ]
        },




        formatTotal(){
            console.info('formatTotal:'+this.mdPath + '   '+ this.selectedTemplate);

            let url = this.exportUrl+ `?md=${this.mdPath}&template=${this.selectedTemplate}`;

            window.location.href = url;

            this.beforeFormatDialogVisible = false;

            /*this.$$api_doc_formatTemplate({
                data: {
                    md: this.mdPath,
                    template: this.selectedTemplate,
                },
                fn: json => {
                    //this.templates = json.data;
                },
            })*/
        },


        getTemplates(){
            this.$$api_doc_getTemplate({
                data: {},
                fn: json => {
                    this.templates = json.data;
                },
            })
        },


        //==========自定义插件部分==========
        //YouTube
        youtubePlugin() {
            let that = this;
            Editor.codeBlockManager.setReplacer('youtube', function(youtubeId) {
                // Indentify multiple code blocks
                const wrapperId = `yt${Math.random()
                    .toString(36)
                    .substr(2, 10)}`;
                // Avoid sanitizing iframe tag
                setTimeout(that.renderYoutube.bind(null, wrapperId, youtubeId), 0);
                return `<div id="${wrapperId}"></div>`;
            });
        },
        renderYoutube(wrapperId, youtubeId) {
            const el = document.querySelector(`#${wrapperId}`);
            el.innerHTML = `<iframe width="420" height="315" src="https://www.youtube.com/embed/${youtubeId}"></iframe>`;
        },

        //API自定义插件
        apiPlugin() {
            let that = this;
            Editor.codeBlockManager.setReplacer('api', function(apiId) {
                // Indentify multiple code blocks
                const wrapperId = `yt${Math.random()
                    .toString(36)
                    .substr(2, 10)}`;
                // Avoid sanitizing iframe tag
                setTimeout(that.renderApi.bind(null, wrapperId, apiId), 0);
                return `<div id="${wrapperId}"></div>`;
            });
        },
        renderApi(wrapperId, apiId) {
            const el = document.querySelector(`#${wrapperId}`);

            this.$$api_doc_md2html({
                data: {
                    md: apiId,
                },
                fn: json => {

                    /*let html = `<span>Hello<a>`+apiId+`</a></span><br>`;

                    for(let i =0 ; i<10 ; i++){
                        html += `<span>Hello<a>`+apiId+`</a></span><br>`;
                    }*/

                    //el.innerHTML = json.data;
                    el.innerHTML = `|column1|column2|column3|
|-|-|-|
|content1|content2|content3|`;


                    //el.innerHTML = html
                },
            })



        },


        //==========自定义ToolBar部分==========
        addToolBar(){
            // Using Method: Customize the first button
            const that = this;
            const editor = this.$refs["myToastEditor"].editor;

            const defaultUI = editor.getUI();
            const toolbar = defaultUI.getToolbar();

            const modeSwitch = defaultUI.getModeSwitch();
            modeSwitch.hide();

            editor.eventManager.addEventType('clickCustomButton');
            editor.eventManager.listen('clickCustomButton', function() {
                that.openAddApiDialog();
                //editor.insertText('123');
            });

            /*toolbar.addItem({
                type: 'button',
                options: {
                    className: 'el-icon-plus',//
                    event: 'clickCustomButton',
                    tooltip: 'Custom Button',
                    text: 'API',
                    style: 'background:none;color: #555555;width: 38px;font-weight: bold;'
                }
            });*/

            toolbar.insertItem(0, {
                type: 'button',
                options: {
                    className: 'el-icon-plus',//
                    event: 'clickCustomButton',
                    tooltip: 'Custom Button',
                    text: 'API',
                    style: 'background:none;color: #555555;width: 38px;font-weight: bold;'
                }
            });
        },


        openAddApiDialog(){
            this.apiDialogVisible = true;

        },

        insertApi(){
            const editor = this.$refs["myToastEditor"].editor;

            let inertText = '{#api_info_' +this.apiId+ '}';

            editor.insertText(inertText);
            this.apiDialogVisible = false;
            this.apiId = '';
        },

        getProjects(){
            let searchParams = {
                pageNum: 1,
                pageSize: 999,
            }
            this.$$api_doc_enterpriseProjectList({
                data: searchParams,
                fn: json => {
                    this.projects = json.data.records;
                },
                errFn: () => {
                    this.loading = false;
                }
            })
        },

        loadModule(node, resolve){
            if (node.level === 0) {
                this.node_had = node;
                this.resolve_had = resolve;
            }
            if(!this.versionId || !this.versionId>0){
                console.info('not version yet')
                return;
            }

            let parentId = 0;
            if(node.data && node.data.id ){
                parentId = node.data.id;
            }
            this.$$api_doc_getByVersionIdAndParentId({
                data: {
                    versionId: this.versionId,
                    parentId: parentId,
                },
                fn: json => {
                    let data = json.data;
                    for(let i in data){
                        data[i].key = 'module_'+data[i].id;
                    }

                    if(parentId !== 0){
                        this.$$api_doc_getByModuleId({
                            data: {
                                versionId: this.versionId,
                                moduleId: parentId,
                            },
                            fn: json2 => {
                                if(json2.data && json2.data.length>0){
                                    for(let i in json2.data){
                                        json2.data[i].leaf = true;
                                        json2.data[i].key = 'api_' + json2.data[i].id;
                                    }
                                    data = data.concat(json2.data);
                                    resolve(data);
                                }else{
                                    resolve(data);
                                }
                            },
                        })
                    }else{
                        resolve(data);
                    }
                },
            })
        },

        handleNodeClick(data) {
            if(!this.isApi(data)){
                return;
            }
            this.apiId = data.id;
        },

        isApi(data){
            return !!(data && data.moduleId);
        },

        getVersionsByRepositoryId(){
            this.$$api_doc_getVersionsByRepositoryId({
                data: {
                    repositoryId: this.project,
                },
                fn: json => {
                    this.versions = json.data;

                    if(json.data && json.data.length > 0){
                        this.versionId = json.data[0].id;
                        // TODO getByVersionIdAndParentId
                        this.reloadApiTree();
                    }else{

                    }

                }
            });
        },

        reloadApiTree() {
            this.node_had.childNodes = [];//把存起来的node的子节点清空，不然会界面会出现重复树！
            this.loadModule(this.node_had, this.resolve_had);//再次执行懒加载的方法
        },



    }
}
