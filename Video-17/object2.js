const GameUser = new Object() // This Is Singleton Object
//const GameUser = new Object() // Non singleton Object


GameUser.id = "123abc";
GameUser.name = "Rupesh";
GameUser.isLoggedIn = true;
GameUser.photo = "user.png";
// console.table(GameUser);


const myGame = {
    GameName: "Codebase",
    coName: "me",
    coName2: "me2",
    GameDeveloperInfo: {
        name: "Rupesh",
        Age: "19",
        bio: "Nice Coder",
        AdditionalInfo: {
            GfName: "Single 😌",
            GfFatherName: "Kuch Nahi",
            GfMobileNumber: "99999999999",
            GfExtraInfo: {
                tinderId: "FuckYou",
                CompanyID: "NoDucking"
            }
        }
    }


}
// console.table(myGame.GameDeveloperInfo.AdditionalInfo);

const obj1 = {1:"a",2: "b",3:"c"}
const obj2 = { 4: "d", 5: "e", 6: "f" }
const obj4 = { 7: "g", 8: "h", 9: "i" }
// const sum = {obj1 , obj2};
// const sum = Object.assign({}, obj1,obj2,obj4)  // add a objects
const obj3 = {...obj1,...obj2} // latest syntax for spead  means add it
// console.log(obj3);

// how database values are come in backend code data

const gameUse = [
    {
        id: 1,
        email:"Nice@gmail.com"
    },
{
    id: 2,
    email: "Ni@gmail.com"
    }
]
// console.log(gameUse[1].email);

// console.log(myGame);
// most use in dbms
// console.log(Object.keys(myGame));
//  make all array not heigh uses
// console.log(Object.entries(myGame));
// console.log(Object.values(myGame));

console.log(myGame.hasOwnProperty('coName'));