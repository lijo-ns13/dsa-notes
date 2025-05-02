class LinearProbing{
    constructor(size=7){
        this.size=size;
        this.dataMap=new Array(size);
    }
    _hash(key){
        let hash=0;
        for(let i=0;i<key.length;i++){
            hash+=key.charCodeAt(i);
        }
        return hash%this.size;
    }
    insert(key,value){
        let index=this._hash(key);
        let count=0;
        while(this.dataMap[index]!==undefined&&this.dataMap[index].key!==key){
            index=(index+1)%this.size;
            count++;
            if(count>=this.size){
                console.log('hash table is full');
                return;
            }
        }
        this.dataMap[index]={key,value};
        return this;
    }
    search(key){
        let index=this._hash(key);
        let starterIndex=index;
        while(this.dataMap[index].key!==undefined){
            if(this.dataMap[index].key===key){
                return this.dataMap[index]
            }
            index=(index+1)%this.size;
            if(index===starterIndex){
                break;
            }
        }
        return undefined;
    }
    display(){
        console.log(this.dataMap)
    }
}
const linearProb=new LinearProbing();
linearProb.insert('name','isac');
linearProb.insert('age',23);
linearProb.insert('place','kollam')
linearProb.display()
console.log(linearProb.search('place'))