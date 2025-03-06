class user{
    constructor(name, password){
        this.name=name
        this.password= password
    }
    get password(){
        return this._password
    }
    set password(value){
        this._password= value.toUpperCase()
    }

}
const userone = new user("Vivek", "its vivu")
console.log(userone.password)