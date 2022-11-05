const countDocuments = async(query,model) =>{
  let totalResults = await model.countDocuments(query).limit(10000)
  return totalResults
}
   
module.exports = countDocuments