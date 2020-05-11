const {LIMIT}  = require('../Util/constants/constant');


const paginate = (data,page) =>{
 const count = data.length
 const offset = (page - 1) * LIMIT;
 const newLimit = offset + LIMIT;
 const hasNextPage = LIMIT * page < count;
 return {
     page_info:{
        hasNextPage,
     },
        countries:data.splice(offset,newLimit)
}

}

module.exports = paginate