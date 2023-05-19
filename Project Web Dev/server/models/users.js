const bcrypt = require('bcrypt');
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('users');
module.exports.collection = collection;

const list = [
    { 
        firstName: 'Lohith',
        lastName: 'B',
        handle: '@belohith',
        pic: 'https://scontent-lga3-2.xx.fbcdn.net/v/t31.18172-8/20819140_1435601433220706_5453288519561783057_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=XUtFdP39yM4AX_eTjhl&_nc_oc=AQmkWJLvLgsOahX2-1888FjC_hs98pMz1QqWkd0-JqxArddyGlU6qWJfdu5195R6F1c&_nc_ht=scontent-lga3-2.xx&oh=0e9b084498357107321e116b465d6098&oe=61C9517C',
        password: '123456',
        isAdmin: true,
        emails: [
            "bollinel1@newpaltz.edu"
        ],
        following: [ { handle: '@moshe', isApproved: true }, { handle: '@bheem', isApproved: true }, ],
        get name(){ return this.firstName + ' ' + this.lastName },
    },
    { 
        firstName: 'Moshe',
        lastName: 'Plotkin',
        handle: '@moshe',
        pic: 'https://memegenerator.net/img/images/15202984.jpg',
        password: 'qwerty',
        isAdmin: true,
        emails: [
            "mosheplotkin@gmail.com"
        ],
        following: [ { handle: '@belohith', isApproved: true }, ],
    },
    { 
        firstName: 'Bheem',
        lastName: 'Nayak',
        handle: '@bheem',
        pic: 'https://m.media-amazon.com/images/I/81+ecm+2iaL._AC_UL1500_.jpg',
        password: 'random',
        isAdmin: true,
        emails: [
            "bheem@gmail.com"
        ],
        following: [ { handle: '@carlos', isApproved: true }, ],
    },
    { 
        firstName: 'Carlos',
        lastName: 'Santoz',
        handle: '@carlos',
        pic: 'https://assets.nintendo.com/image/upload/c_pad,f_auto,h_490,q_auto,w_360/ncom/en_US/games/switch/s/super-meat-boy-forever-switch/description-image?v=2021111220',
        password: 'abcdef',
        isAdmin: true,
        emails: [
            "carlos@gmail.com"
        ],
        following: [ { handle: '@belohith', isApproved: true }, ],
    },

];

module.exports.GetAll = function GetAll() { return collection.find().toArray() ; }

module.exports.Get = user_id => collection.findOne({_id: new ObjectId(user_id)}) 

module.exports.GetByHandle = (handle) => collection.findOne({ handle }).then(x=> ({ ...x, password: undefined }));

module.exports.Add = async function Add(user) {
    if(!user.firstName){
         return Promise.reject( { code: 422, msg: "First Name is required" } )
    }

    const hash = await bcrypt.hash(user.password, +process.env.SALT_ROUNDS)
    
        console.log({
            user, salt: process.env.SALT_ROUNDS, hash
        })
        
        user.password = hash;

        const user2 = await collection.insertOne(user);
        user._id = user2.insertedId;

        return { ...user, password: undefined };
}


module.exports.Update = async function Update(user_id, user) {

    const results = await collection.findOneAndUpdate(
        {_id: new ObjectId(user_id) }, 
        { $set: user },
        { returnDocument: 'after'}
    );
    console.log({ user_id, results });
        
    return { ...results.value, password: undefined };
}

module.exports.Delete = async function Delete(user_id) {
    const results = await collection.findOneAndDelete({_id: new ObjectId(user_id) })

    return results.value;
}

module.exports.Login = async function Login(handle, password){
    console.log({ handle, password})
    const user = await collection.findOne({ handle });
    if(!user){
        return Promise.reject( { code: 401, msg: "Sorry there is no user with that handle" });
    }

    const result = await bcrypt.compare(password, user.password)
        
    if( ! result ){
        throw { code: 401, msg: "Wrong Password" } ;
    }
    
    const data = { ...user, password: undefined };
    
    return { user: data };

    
}

module.exports.Seed = async ()=>{
    for (const x of list) {
        await module.exports.Add(x)
    }
}