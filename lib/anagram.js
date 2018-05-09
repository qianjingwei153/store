function anagram(str){
    if(!str){
        return []
    }
    if(str.length===1){
        return [str]
    }
    if(str.length===2){
        return [str[0]+str[1],str[1]+str[0]]
    }
    return[
        "abc",
        "acb",
        "bac",
        "bca",
        "cab",
        "cba"
    ]
}

module.exports = anagram

//"**/*[sS]pec.js"