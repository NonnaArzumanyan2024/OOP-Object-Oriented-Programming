let boy = {name: "John"};
let girl = {name: "Sarah"};

boy.sister = girl;
boy.sister.brother = boy;
delete boy.sister;

console.log(girl.brother.name); //John

/*
Explanation:

When `boy.sister` is deleted, it only removes the reference in `boy`,  
but `girl.brother` still holds a reference to `boy`.  
So `girl.brother.name` prints `"John"`.
*/
