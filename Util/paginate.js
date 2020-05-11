const {LIMIT}  = require('../Util/constants/constant');


/***
 * @param{Array} data lists of records
 * @param{Number} page page to be retrieved
 * 
 * @returns{Object} page information and paginated data
 */
const paginate = (data,page) =>{
 const count = data.length
 const offset = (page - 1) * LIMIT;
 const newLimit = offset + LIMIT;
 const hasNextPage = LIMIT * page < count;
 const nextPage = page + 1;
 const prevPage = page - 1
 const hasPrevPage = page > 1
 const currentPage = page
 return {
     page_info:{
        currentPage,
        hasNextPage,
        hasPrevPage,
        nextPage,
        prevPage
       
       
     },
        states:data.splice(offset,newLimit)
}

}

module.exports = paginate