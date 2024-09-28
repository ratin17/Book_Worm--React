
export function getListBykey(key){
    let list=[];
    const listFromLocal=JSON.parse(localStorage.getItem(key));
    if(listFromLocal){
        list=[...listFromLocal,...list];
    }
    return list;
}


export function setListBykey(key,val){
    let list=[val];
    const listFromLocal=getListBykey(key);
    if(listFromLocal){
        list=[...list,...listFromLocal];
    }
    localStorage.setItem(key,JSON.stringify(list));
}


export function removeItemBykey(key,val){

    let list = getListBykey(key);;
    list=list.filter((item)=>parseInt(item)!==parseInt(val));
    localStorage.setItem(key,JSON.stringify(list));
    
}




