function fun (){
    console.log("helo world")
    // console.log(n)
    fun1()
    function fun1(){
        console.log("inside func"+n)
    }
}
var n = 2
fun()
console.log(n)