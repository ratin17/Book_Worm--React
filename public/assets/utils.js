
export function geListBykey(key){
    let list=[];
    const listFromLocal=JSON.parse(localStorage.getItem(key));
    if(listFromLocal){
        list=[...listFromLocal,...list];
    }
    return list;
}


export function setListBykey(key,val){
    let list=[val];
    const listFromLocal=geListBykey(key);
    if(listFromLocal){
        list=[...list,...listFromLocal];
    }
    localStorage.setItem(key,JSON.stringify(list));
}




