webpackJsonp([6],{"8rC8":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=o("BO1k"),a=o.n(l),s=o("443r"),m=o("Y8t/"),r={name:"TyUserMan",components:{deleteModal:s.a},data:function(){return{deleteShow:!1,deleteId:"",tbodyHeight:0,employTitle:"添加用户",employModalShow:!1,isEdit:!1,roleNameList:[],loading:!0,loginName:"",realName:"",pageNum:1,totalSize:0,formEmploy:{employId:"",employUserName:"",employEmail:"",employPwd:"",employName:"",nickname:"",phone:"",employStatus:"1",selectModle:"0"},tableData:[]}},mounted:function(){var e=this;this.$nextTick(function(){var t=window.screen.height-340;e.tbodyHeight=t}),this.getUserList(this.pageNum),this.getRoleList()},methods:{getUserList:function(e){var t=this,o={login_name:this.loginName,real_name:this.realName,page:e,per_page:10};m.a.getUserList(o).then(function(e){if("200"==e.code){var o=[];t.totalSize=e.totalSize;var l=!0,s=!1,m=void 0;try{for(var r,i=a()(e.content);!(l=(r=i.next()).done);l=!0){var n=r.value,p={id:n.user_id,user_name:n.user_name,nickname:n.nickname,user_uid:n.user_uid,user_pwd:n.user_pwd,mobilephone:n.mobilephone,email:n.email,roleId:n.role_id,roleName:n.role_name,status:1==n.status?"启用":"禁用",create_date:n.create_date.split(".")[0]};o.push(p)}}catch(e){s=!0,m=e}finally{try{!l&&i.return&&i.return()}finally{if(s)throw m}}t.tableData=o}else t.$Message.error(e.message)}).catch(function(e){})},selectUserList:function(){this.getUserList(this.pageNum)},gotoPage:function(e){this.pageNum=e,this.getUserList(this.pageNum)},addClick:function(){this.employModalShow=!0,this.isEdit=!1,this.employTitle="添加用户",this.formEmploy.employId="",this.formEmploy.employUserName="",this.formEmploy.employEmail="",this.formEmploy.employPwd="",this.formEmploy.employName="",this.formEmploy.nickname="",this.formEmploy.employStatus="1",this.formEmploy.phone="",this.formEmploy.selectModle="0"},employOk:function(){var e=this;this.isEdit?this.editUser():this.addUser(),setTimeout(function(){e.employModalShow=!1},1e3)},editUser:function(){var e=this,t={};t="32"==this.formEmploy.employPwd.length?{user_id:this.formEmploy.employId,login_name:this.formEmploy.employUserName,real_name:this.formEmploy.employName,nickname:this.formEmploy.nickname,mobilephone:this.formEmploy.phone,email:this.formEmploy.employEmail,status:this.formEmploy.employStatus,role_id:this.formEmploy.selectModle}:{user_id:this.formEmploy.employId,login_name:this.formEmploy.employUserName,real_name:this.formEmploy.employName,nickname:this.formEmploy.nickname,user_pwd:this.formEmploy.employPwd,mobilephone:this.formEmploy.phone,email:this.formEmploy.employEmail,status:this.formEmploy.employStatus,role_id:this.formEmploy.selectModle},console.log(t),m.a.updateUser(t).then(function(t){"200"==t.code?(e.$Message.success("修改成功",1),e.getUserList(e.pageNum)):(e.$Message.error(t.message),e.employCancel())}).catch(function(t){e.$Message.error(t),e.employCancel()})},addUser:function(){var e=this,t={login_name:this.formEmploy.employUserName,real_name:this.formEmploy.employName,nickname:this.formEmploy.nickname,user_pwd:this.formEmploy.employPwd,mobilephone:this.formEmploy.phone,email:this.formEmploy.employEmail,status:this.formEmploy.employStatus,roleId:this.formEmploy.selectModle};m.a.addUser(t).then(function(t){"200"==t.code?(e.$Message.success("添加成功",1),e.getUserList(e.pageNum)):(e.$Message.error(t.message),e.employCancel())}).catch(function(t){e.$Message.error(t),e.employCancel()})},getRoleList:function(){var e=this;this.roleNameList=[];m.a.getRoleList({}).then(function(t){if("200"==t.code){var o=[],l=!0,s=!1,m=void 0;try{for(var r,i=a()(t.content);!(l=(r=i.next()).done);l=!0){var n=r.value,p={roleId:n.role_id,roleName:n.role_name,roleDsc:""};o.push(p)}}catch(e){s=!0,m=e}finally{try{!l&&i.return&&i.return()}finally{if(s)throw m}}e.roleNameList=o}}).catch(function(e){})},employCancel:function(){this.isEdit=!1,this.employModalShow=!1},editClick:function(e){this.employModalShow=!0,this.employTitle="修改用户",this.isEdit=!0,this.formEmploy.employId=e.id,this.formEmploy.employUserName=e.user_uid,this.formEmploy.employEmail=e.email,this.formEmploy.employPwd=e.user_pwd,this.formEmploy.employName=e.user_name,this.formEmploy.nickname=e.nickname,this.formEmploy.employStatus="禁用"==e.status?"0":"1",this.formEmploy.phone=e.mobilephone,this.formEmploy.selectModle=e.roleId.toString()},deleteBtn:function(e){this.deleteShow=!0,this.deleteId=e.id},changeShowDel:function(e){this.deleteShow=e},sureDelete:function(e){var t=this,o=this;o.deleteShow=e.isShow,m.a.deleteUser({user_id:e.id}).then(function(e){"200"==e.code?(o.$Message.success("删除成功!",1),o.getUserList(t.pageNum)):o.$Message.error(e.message,1)}).catch(function(e){o.$Message.error(e.response.statusText,1)})}}},i={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"ty_topInput"},[o("span",[o("span",{staticClass:"ty_serachSapn"},[e._v("用户名：")]),e._v(" "),o("Input",{staticStyle:{width:"150px"},attrs:{placeholder:"用户名"},model:{value:e.loginName,callback:function(t){e.loginName=t},expression:"loginName"}})],1),e._v(" "),o("span",[o("span",{staticClass:"ty_serachSapn"},[e._v("姓名：")]),e._v(" "),o("Input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入姓名"},model:{value:e.realName,callback:function(t){e.realName=t},expression:"realName"}})],1),e._v(" "),o("span",[o("Button",{attrs:{type:"primary",icon:"search"},on:{click:e.selectUserList}},[e._v("搜索")])],1),e._v(" "),o("span",{staticClass:"fr ty_searchLastSpan"},[o("Button",{attrs:{type:"primary",icon:"android-add"},on:{click:e.addClick}},[e._v("添加用户")])],1)]),e._v(" "),o("div",{staticClass:"ty_tableShowDiv"},[o("div",{staticClass:"ty_table"},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:e.tbodyHeight,border:""}},[o("el-table-column",{attrs:{prop:"user_uid",label:"用户名"}}),e._v(" "),o("el-table-column",{attrs:{prop:"user_name",label:"真实名称"}}),e._v(" "),o("el-table-column",{attrs:{prop:"mobilephone",label:"手机号"}}),e._v(" "),o("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),e._v(" "),o("el-table-column",{attrs:{prop:"roleName",label:"角色名称"}}),e._v(" "),o("el-table-column",{attrs:{prop:"status",label:"状态",width:"80"}}),e._v(" "),o("el-table-column",{attrs:{prop:"create_date",label:"创建时间"}}),e._v(" "),o("el-table-column",{attrs:{prop:"controler",label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){e.editClick(t.row)}}},[e._v("编辑")]),e._v(" "),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){e.deleteBtn(t.row)}}},[e._v("删除")])]}}])})],1)],1)]),e._v(" "),o("div",{staticClass:"ty_Page"},[o("Page",{attrs:{total:e.totalSize,"show-elevator":""},on:{"on-change":e.gotoPage}})],1),e._v(" "),o("delete-modal",{attrs:{deleteId:e.deleteId,deleteShow:e.deleteShow},on:{deleteSure:e.sureDelete,changeShow:e.changeShowDel}}),e._v(" "),o("Modal",{attrs:{title:e.employTitle,closable:!1,"class-name":"vertical-center-modal"},on:{"on-ok":e.employOk,"on-cancel":e.employCancel},model:{value:e.employModalShow,callback:function(t){e.employModalShow=t},expression:"employModalShow"}},[o("Form",{ref:"formEmploy",attrs:{model:e.formEmploy,"label-width":80}},[o("FormItem",{attrs:{label:"用户名:",prop:"employUserName"}},[e.isEdit?e._e():o("Input",{staticClass:"ty_userInput",model:{value:e.formEmploy.employUserName,callback:function(t){e.$set(e.formEmploy,"employUserName",t)},expression:"formEmploy.employUserName"}}),e._v(" "),e.isEdit?o("label",{staticClass:"readOnly formLabel",attrs:{readonly:""}},[e._v(e._s(e.formEmploy.employUserName))]):e._e()],1),e._v(" "),o("FormItem",{attrs:{label:"昵称:",prop:"nickname"}},[o("Input",{staticClass:"ty_userInput",attrs:{type:"text"},model:{value:e.formEmploy.nickname,callback:function(t){e.$set(e.formEmploy,"nickname",t)},expression:"formEmploy.nickname"}})],1),e._v(" "),o("FormItem",{attrs:{label:"密码:",prop:"employPwd"}},[o("Input",{staticClass:"ty_userInput",attrs:{type:"password"},model:{value:e.formEmploy.employPwd,callback:function(t){e.$set(e.formEmploy,"employPwd",t)},expression:"formEmploy.employPwd"}})],1),e._v(" "),o("FormItem",{attrs:{label:"姓名:",prop:"employName"}},[o("Input",{staticClass:"ty_userInput",model:{value:e.formEmploy.employName,callback:function(t){e.$set(e.formEmploy,"employName",t)},expression:"formEmploy.employName"}})],1),e._v(" "),o("FormItem",{attrs:{label:"手机号:",prop:"phone"}},[o("Input",{staticClass:"ty_userInput",attrs:{type:"text"},model:{value:e.formEmploy.phone,callback:function(t){e.$set(e.formEmploy,"phone",t)},expression:"formEmploy.phone"}})],1),e._v(" "),o("FormItem",{attrs:{label:"邮箱:",prop:"employEmail"}},[o("Input",{staticClass:"ty_userInput",attrs:{type:"text"},model:{value:e.formEmploy.employEmail,callback:function(t){e.$set(e.formEmploy,"employEmail",t)},expression:"formEmploy.employEmail"}})],1),e._v(" "),o("FormItem",{attrs:{label:"状态:",prop:"employEmail"}},[o("Select",{staticStyle:{width:"200px"},model:{value:e.formEmploy.employStatus,callback:function(t){e.$set(e.formEmploy,"employStatus",t)},expression:"formEmploy.employStatus"}},[o("Option",{attrs:{value:"0"}},[e._v("禁用")]),e._v(" "),o("Option",{attrs:{value:"1"}},[e._v("启用")])],1)],1),e._v(" "),o("FormItem",{attrs:{label:"角色名称:",prop:"selectModle"}},[o("Select",{staticStyle:{width:"200px"},model:{value:e.formEmploy.selectModle,callback:function(t){e.$set(e.formEmploy,"selectModle",t)},expression:"formEmploy.selectModle"}},[o("Option",{attrs:{value:"0"}},[e._v("请选择角色名称")]),e._v(" "),e._l(e.roleNameList,function(t,l){return o("Option",{key:l,attrs:{value:t.roleId.toString()}},[e._v(e._s(t.roleName))])})],2)],1)],1)],1)],1)},staticRenderFns:[]};var n=o("VU/8")(r,i,!1,function(e){o("LZue")},null,null);t.default=n.exports},LZue:function(e,t){}});