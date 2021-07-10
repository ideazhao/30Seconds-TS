
/**
 * JavaScript实现
 * @param strOrArray 
 * @returns 
 */
{
    const convertToUppercase = strOrArray =>{
        if(typeof strOrArray === 'string'){
            return strOrArray.toUpperCase()
        } else if(Array.isArray(strOrArray)){
            return strOrArray.map(item=>item.toUpperCase())
        }
    }
}

{
    const convertToUppercase = (strOrArray:string | string[])=>{
        if(typeof strOrArray === 'string'){
            return strOrArray.toUpperCase()
        } else if(Array.isArray(strOrArray)){
            return strOrArray.map(item=>item.toUpperCase())
        }
    }
}

/**
 * 常用类型守卫:
 * switch、字面量恒等、typeof、instanceof
 * in、自定义类型守卫
 */

{
    interface Dog{
        wang:string
    }
    interface Cat{
        miao:string
    }
    const getName = (animal:Dog | Cat) =>{
        if('wang' in animal){
            return animal.wang
        } else if('miao' in animal){
            return animal.miao
        }
    }
}