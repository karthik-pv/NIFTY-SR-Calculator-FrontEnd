const checkIfItemInLocalStorage = (key , standard) => {
    let item = localStorage.getItem(key);
    if(item!=null){
        return JSON.parse(item);
    }
    else{
        return standard;
    }
  };

export default checkIfItemInLocalStorage;