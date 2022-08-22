{
  /*


------------ I did not complete ------------

 const encode = (strs) => {
    const delimiter = '#';
    return strs.map((str) => `${str.length}${delimiter}${str}`).join('');
};


 
const decode = (str) => {
    const res = [];
    let i = 0;
    
    while (i < str.length) {
        let en = i;
        while (str[en] != '#') {
    
         en++;
        }
        const dc = Number(str.slice(i,en));
        console.log(`slice --> ${i} ${en}`)
        console.log(`what is this --> ${str.slice(i,en)}`)
        console.log(`decode string into integer dc ---> ${dc}`)
        console.log(`this is str --> ${str}`)
        res.push(str.replace(`${dc}`,'').slice(en++, en + dc));
        console.log(res)
        
        i = en + dc;
        console.log(`${en} + ${dc}`)
        
    }
    res.filter((el) => el.replace('#', ''))
    return res;
};



*/
}
