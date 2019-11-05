import {store} from "../../utils";

function  menuExist(list, permission){
  for (var i = 0; i < list.length; i++) {
      if(permission == list[i]['permission']){
        return true
      }
  }
  return false
}

function  getIcon(list, permission){
  for (var i = 0; i < list.length; i++) {
      if(permission == list[i]['permission']){
        return list[i].icon || null
      }
  }
  return null
}

function  getName(list, permission){
    for (var i = 0; i < list.length; i++) {
        if(permission == list[i]['permission']){
            return list[i].name || null
        }
    }
    return null
}

function setMenu(rout,menu_cache){
    let permission = rout['permission'];
    if(!permission){
        //TODO
        rout.hidden = true;
        return;
    }
    if(!menuExist(menu_cache,permission)){
        rout.hidden = true;
    }

    let name = getName(menu_cache,permission);
    if(name){
        rout.name = name;
    }

    let icon = getIcon(menu_cache,permission);
    if(icon){
        rout.icon = icon;
    }
}
   
let promise = {
    buildRoleRoute : function (_this) {
        console.info("into");
      let routList = _this.$router.options.routes
      let menu_cache = store.get("menu_cache");
      for(let i = 0;i< routList.length;i++){
        setMenu(routList[i],menu_cache);

          let children = routList[i].children;
          if(children){
              for(let j = 0;j< children.length;j++){
                  setMenu(children[j],menu_cache);
              }
          }
      }
    }
};

export default promise