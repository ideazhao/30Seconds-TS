/**
 * 枚举类型：包含被命令的常量集合
 * 属性为常量，命名值从0开始递增
 */
//定义一个星期的枚举类型，兼具值和类型于一体
enum Day {
    Monday,
    // Monday = 1 可以指定初始值 但这是个不明智的行为，可能会造成混乱和错误
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

//可以通过 Day.Monday访问数值
console.log(Day.Monday)  //0

//注意，两个看似相等的枚举并不能等同使用，枚举仅与自身兼容

//字符串枚举
enum Day2 {
    Monday = 'Monday',
    Tuesday = 'Tuesday'
}

//异构枚举  但被认为比较鸡肋，没有应用场景
enum Day3 {
    Monday = 1,
    Tuesday = 'Tuesday'
}

//常量枚举
const enum Day4{
    Monday,
    Tuesday,
}

//外部枚举  为两个不同枚举成员进行兼容、比较、复用提供了途径
declare let $:any
$('#id')

