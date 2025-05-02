class TrieNode{
    constructor(){
        this.children={};
        this.isEndOfWord=false;
        this.count=0;
    }
}
class Trie{
    constructor(){
        this.root=new TrieNode();
    }
    insert(value){
        let current=this.root;
        for(const char of value){
            if(!current.children[char]){
                current.children[char]=new TrieNode();
            }
            current=current.children[char];
        }
        current.isEndOfWord=true;
        current.count++;
    }
    search(prefix){
        let current=this.root;
        for(const char of prefix){
            if(!current.children[char]){
                return false;
            }
            current=current.children[char]
        }
        return current.isEndOfWord;
    }
    // Autocomplete: Find all words starting with a given prefix
    autocomplete(prefix) {
        let current = this.root;
        // Traverse to the end of the prefix
        for (const char of prefix) {
            if (!current.children[char]) {
                return []; // No words with this prefix
            }
            current = current.children[char];
        }

        // Perform DFS to find all words starting from this node
        const results = [];
        this._dfs(current, prefix, results);
        return results;
    }

    // Helper function for DFS traversal
    _dfs(node, prefix, results) {
        if (node.isEndOfWord) {
            results.push(prefix); // Add the complete word to results
        }
        // Recursively visit all children
        for (const char in node.children) {
            this._dfs(node.children[char], prefix + char, results);
        }
    }
    
}
const trie=new Trie();
trie.insert('hello');
trie.insert('hai');
trie.insert('apple');
console.log(trie.search('apple'))
console.log(trie)
console.log(trie.autocomplete('h'))