class user{
    constructor(username, age, password){
        this.username= username,
        this.age= age,
        this.password=password
    }
    encrypt(){
        console.log(`${this.username}abc`)
    }
}
class teacher extends user{
    constructor(username, age, password, loginID, section){
        super(username),
        // super(age),
        // super(password),
        this.loginID=loginID,
        this.section=section
    }
    addsection(){
        console.log(`${this.username} of age .... your section alloted is ${this.section}`)
    }
}

const userone= new user("VIvek", 22, 'mypass');
userone.encrypt()
console.log(userone.age)

const teacherone = new teacher("munish", 36, "123", "3400", "A");
teacherone.addsection();
teacherone.encrypt()
userone.addsection()