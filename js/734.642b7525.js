"use strict";(self["webpackChunkwms_web"]=self["webpackChunkwms_web"]||[]).push([[734],{1734:function(t,e,l){l.r(e),l.d(e,{default:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("div",{},[e("el-table",{staticStyle:{width:"100%","margin-left":"15px"},attrs:{data:t.flowData,height:"650",border:"","header-cell-style":{"background-color":"rgba(32, 39, 65, 0.7)",color:"#fff"}}},[e("el-table-column",{attrs:{type:"index","min-width":"10%",align:"center"}}),e("el-table-column",{attrs:{prop:"priority",label:"优先级"}}),e("el-table-column",{attrs:{prop:"cookie",label:"cookie"}}),e("el-table-column",{attrs:{prop:"idle_timeout",label:"idle_timeout"}}),e("el-table-column",{attrs:{prop:"hard_timeout",label:"hard_timeout"}}),e("el-table-column",{attrs:{prop:"byte_count",label:"byte_count"}}),e("el-table-column",{attrs:{prop:"packet_count",label:"packet_count"}}),e("el-table-column",{attrs:{prop:"length",label:"length"}}),e("el-table-column",{attrs:{prop:"actions",label:"actions"}}),e("el-table-column",{attrs:{prop:"table_id",label:"table_id"}}),e("el-table-column",{attrs:{label:"match"},scopedSlots:t._u([{key:"default",fn:function(l){return[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.test(l.$index,l.row)}}},[t._v("展开")]),e("el-dialog",{attrs:{title:"match",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("el-descriptions",[e("el-descriptions-item",{attrs:{label:"dl_type"}},[t._v(t._s(t.match.dl_type))]),e("el-descriptions-item",{attrs:{label:"源地址"}},[t._v(t._s(t.match.nw_src))]),e("el-descriptions-item",{attrs:{label:"目的地址"}},[t._v(t._s(t.match.nw_dst))]),e("el-descriptions-item",{attrs:{label:"nw_proto"}},[e("el-tag",{attrs:{size:"medium"}},[t._v(t._s(t.match.nw_proto))])],1),e("el-descriptions-item",{attrs:{label:"tp_src"}},[t._v(t._s(t.match.tp_src))]),e("el-descriptions-item",{attrs:{label:"tp_des"}},[t._v(t._s(t.match.tp_des))])],1)],1)]}}])})],1)],1)},o=[],s={components:{},data(){return{flowData:[],dialogVisible:!1,match:[]}},computed:{},watch:{},methods:{loadFlows(){this.$axios.get(this.$httpUrl+"/flow/information").then((t=>t.data)).then((t=>{console.log(t),this.flowData=t}))},handleClose(t){this.$confirm("确认关闭？").then((e=>{t()})).catch((t=>{}))},test(t,e){console.log(t),console.log(e),this.match=e.match,this.dialogVisible=!0}},created(){},mounted(){this.loadFlows()},beforeCreate(){},beforeMount(){},beforeUpdate(){},updated(){},beforeDestroy(){},destroyed(){},activated(){}},i=s,r=l(5440),n=(0,r.Z)(i,a,o,!1,null,"1a178bf3",null),c=n.exports}}]);
//# sourceMappingURL=734.642b7525.js.map