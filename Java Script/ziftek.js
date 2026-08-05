let fruit = ["apple","banana","mango","watermelon"];
for(let i = 3; i>=0;i--){
    console.log(fruit[i]);
}
console.log(fruit[3]);

let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
num.push(22);
for(let i = 0; i<20;i++){
    if(num[i]% 2 == 0){
        console.log(num[i])
    }
    // console.log(num);
}

let cars = ["toyota","tesla","bmw"];
for(let c of cars){
    console.log(c);
}

let data = [1,2,3,4];
for(let d of data){
    console.log(d);
}


