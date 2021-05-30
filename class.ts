/**
 * 类
 */
class Animal{
    type = 'Animal'
    say(name:string){
        console.log(`I'm${name}`)
    }
}

class Dog extends Animal{
    bark(){
        console.log('wang!')
    }
}

const dog = new Dog()
dog.bark() // 'wang'
dog.say('q') //I'm q
dog.type //Animal

//ts对类的限制，派生类写构造函数没有写super方法会报错

/**
 * 类中有三种方法
 * public 任何地方可见，共有属性和方法
 * private 同一类中可见、私有属性和方法
 * protected 仅在类和子类中可见，受保护的属性和方法
 */

class Son{
    public firstName:string;   //共有
    private lastName:string = 'jack'  //私有  例一
    protected like:string = 'ball'  //受保护的  例二
    readonly sex:string = 'man'  //只读  例二
    //静态属性   无需实例化即可访问  例一
    //一般把与类相关的常量，与上下文无关的属性和方法定义为静态属性或方法
    static height:number = 188 

    constructor(firstName:string){
        this.firstName = firstName;
        this.lastName
        this.like
    }
    //存取器 实现特定的访问逻辑   例一
    get mylike(){
        return this.like
    }
    set mylike(name:string){
        if(this.firstName === 'tony'){
            this.like = name
        } else {
            console.error('不能改like')
        }
    }
}

//例一
const son1 = new Son('mon')
// son1.lastName //直接访问私有属性会报错
//注意，这里的报错仅代表静态类型检测层面的私有，如果我们忽略错误提示，JavaScript代码依然是可以拿到lastName，这是因为JavaScript本身并不真正支持私有
son1.mylike = "行的" //'不能改like'
console.log(son1.mylike)  //ball
const son2 = new Son('tony')
son2.mylike = '溜冰'  
console.log(son2.mylike)  //溜冰
//静态属性直接访问
console.log(Son.height)  //188


//受保护的属性
class GrandSon extends Son{
    constructor(firstName:string){
        super(firstName)
    }
    public getMyLike(){
        return this.like
    }
}

//例二
let grandSon = new GrandSon('tom')
// grandSon.like //派生类实例直接访问受保护属性会报错
console.log(grandSon.getMyLike()) //使用派生类的共有方法就不会报错

let readSon = new Son('jerry')
// readSon.sex = 'girl' //尝试修改只读属性会报错


/**
 * 抽象类
 * 不能被实例化，只能被子类继承
 * 所以抽象类的主要作用是对基础逻辑的封装和抽象
 */

abstract class Adder{
    abstract x:number
    abstract y:number
    abstract add():number
    displayName = 'Adder'
    addTwice():number{
        return (this.x + this.y)*2
    }
}

class NumberAdder extends Adder{
    x:number;
    y:number;
    constructor(x:number,y:number){
        super()
        this.x=x
        this.y=y
    }
    add():number{
        return this.x+this.y
    }
}

/**
 * 类 类型
 */
class A{
    name:string;
    constructor(name:string){
        this.name = name
    }
}

const a1:A = [] //报错
const a2:A={name:'idea'} //ok
