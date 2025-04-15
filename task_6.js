let boy = {name: "John"};
let girl = {name: "Sarah"};

boy.sister = girl;
boy.sister.brother = boy;

console.log(boy.sister.brother.name); //John

/*
Explanation:

`boy.sister` is the `girl` object,  
`girl.brother` points back to `boy`,  
and `boy.name` is `"John"`.  
So `boy.sister.brother.name` returns `"John"`.
*/
