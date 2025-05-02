// Quadratic Probing Hash Table
class QuadraticProbing {
    constructor(size = 7) {
        this.size = size;
        this.dataMap = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    insert(key, value) {
        let index = this._hash(key);
        let count = 0;
        let i = 1;  // For quadratic probing: i^2
        
        while (this.dataMap[index] !== undefined && this.dataMap[index].key !== key) {
            // Quadratic probing formula: (hash + i^2) % size
            index = (this._hash(key) + i * i) % this.size;
            i++;
            count++;
            if (count >= this.size) {
                console.log('Hash table is full');
                return this;
            }
        }
        
        this.dataMap[index] = { key, value };
        return this;
    }

    search(key) {
        let index = this._hash(key);
        let count = 0;
        let i = 1;
        
        while (this.dataMap[index] !== undefined) {
            if (this.dataMap[index].key === key) {
                return this.dataMap[index];
            }
            index = (this._hash(key) + i * i) % this.size;
            i++;
            count++;
            if (count >= this.size) break;
        }
        return undefined;
    }

    display() {
        console.log(this.dataMap);
    }
}