class Hash{
    constructor(size=7){
        this.dataMap=new Array(size);
    }
    _hash(key){
        let hash=0;
        for(let i=0;i<key.length;i++){
            hash=hash+(key.charCodeAt(i)*23)%this.dataMap.length;
        }
        return Math.floor(hash);
    }
    set(key,value){
        let index=this._hash(key);
        if(!this.dataMap[index]){
            this.dataMap[index]=[]
        }
        this.dataMap[index].push([key,value]);
        return this;
    }
    get(key){
        let index=this._hash(key);
        if(this.dataMap[index]){
            for(let i=0;i<this.dataMap[index].length;i++){
                if(this.dataMap[index][i][0]==key){
                    return this.dataMap[index][i][1];
                }
            }
        }
    }
    delete(key){
        let index=this._hash(key);
        if(this.dataMap[index]){
            for(let i=0;i<this.dataMap[index].length;i++){
                if(this.dataMap[index][i][0]===key){
                    this.dataMap[index].splice(i,1);
                    return true;
                }
            }
        }
        return false;
    }
    display(){
        console.log(this.dataMap);
    }
}
const hashTable=new Hash();
hashTable.set('name','jogn');
hashTable.set('age','32');
// hashTable.delete('age')
hashTable.display()
console.log(hashTable.get('age'))