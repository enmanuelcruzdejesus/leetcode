class TreeNode{
    constructor(){
        this.children = {};
        this.end = false;
    }
}


var Trie = function() {
    this.root = new TreeNode();

};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    
    let it = this.root;
    for(let i =0; i < word.length; i ++){
      let chr = word[i];

       if(!it.children[chr]){
            it.children[chr] = new TreeNode();
       }

       if(i === word.length -1 ){
           it.children[chr].end = true;
       }
         

        it = it.children[chr];

    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
      let it = this.root;
      for( i =0; i < word.length; i ++){
        let chr = word[i]

        if(!it.children[chr])
        return false;

        it = it.children[chr];

    }

    return it.end;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  
    let it = this.root;
    for( i =0; i <  prefix.length; i ++){
      let chr = prefix[i]

      if(!it.children[chr])
       return false;

      it = it.children[chr];

    }

    return true;


};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */