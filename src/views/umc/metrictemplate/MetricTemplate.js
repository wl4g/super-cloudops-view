import {transDate, getDay} from 'utils/'

export default {
    name: 'metricTemplate',
    data() {
        return {
            //查询条件
            searchParams: {
                name: '',
                metric: '',
                classify: '',
            },

            //分页信息
            total: 0,
            pageNum: 1,
            pageSize: 10,

            //弹窗表单
            saveForm: {
                id: '',
                name: '',
                metric: '',
                classify: '',
                notifyLevel: '',
                tagMap: [],
                rules: [],
            },

            dialogVisible: false,
            dialogTitle: '',
            dialogLoading: false,

            tableData: [],
            loading: false
        }
    },

    mounted() {
        this.getData();

    },

    methods: {

        onSubmit() {
            this.getData();
        },

        currentChange(i) {
            this.pageNum = i;
            this.getData();
        },

        addData() {
            this.cleanSaveForm();
            this.dialogVisible = true;
            this.dialogTitle = '新增';
        },

        // 获取列表数据
        getData() {
            this.loading = true;
            this.$$api_umc_metricList({
                data: {
                    name: this.searchParams.name,
                    metric: this.searchParams.metric,
                    classify: this.searchParams.classify,
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                },
                fn: data => {
                    this.loading = false;
                    this.total = data.data.total;
                    this.tableData = data.data.records;
                },
                errFn: () => {
                    this.loading = false;
                }
            })
        },

        // 获取列表数据
        getAllHost() {
            this.$$api_share_allHost({
                data: {},
                fn: data => {
                    this.allHost = data.data;
                }
            })
        },

        addCollector() {
            this.cleanSaveForm();
            this.dialogVisible = true;
            this.dialogTitle = '新增';
        },

        cleanSaveForm() {
            this.saveForm = {};
            /*this.saveForm.id = '';
            this.saveForm.name = '';
            this.saveForm.metric = '';
            this.saveForm.classify = '';
            this.saveForm.notifyLevel = '';
            this.saveForm.tagMap = [];
            this.saveForm.rules = [];*/
        },

        saveData() {
            this.dialogLoading = true;
            this.$refs['saveForm'].validate((valid) => {
                if (valid) {
                    this.$$api_umc_saveMetric({
                        data: this.saveForm,
                        fn: data => {
                            this.dialogLoading = false;
                            this.dialogVisible = false;
                            this.getData();
                            this.cleanSaveForm();
                        },
                        errFn: () => {
                            this.dialogLoading = false;
                        }
                    });
                }else {
                    this.dialogLoading = false;
                }
            });
        },

        convertClassifyValue(value){
            console.debug("convertClassifyValue:"+value);
            if (value == 1) {
                return 'basic';
            }
            if (value == 2) {
                return 'docker';
            }
            if (value == 3) {
                return 'redis';
            }
            if (value == 4) {
                return 'kafka';
            }
            if (value == 5) {
                return 'zookeeper';
            }
            return '--';
        },

        editData(row) {
            if (!row.id) {
                return;
            }
            this.$$api_umc_metricDetail({
                data: {
                    id: row.id,
                },
                fn: data => {
                    this.saveForm = data.data;
                }
            });

            this.dialogVisible = true;
            this.dialogTitle = '编辑';
        },


        delData(row) {
            if (!row.id) {
                return;
            }
            this.$confirm('Confirm?', 'warning', {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                this.$$api_umc_delMetric({
                    data: {
                        id: row.id,
                    },
                    fn: data => {
                        this.$message({
                            message: 'Success',
                            type: 'success'
                        });
                        this.getData();
                    }
                })
            }).catch(() => {
                //do nothing
            });

        },

    }
}
