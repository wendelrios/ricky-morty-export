const axios = require('axios');
const fs = require('fs');
const path = require('path');

const port = 3000;

const filePath = path.join(__dirname, 'rickymorty.json')

// const tags = ['name','type','genres','officialSite','image','_embedded'];
// const results = [];

// function validField(obj1, obj2){
//   obj1.forEach(dado => {
//     dado.forEach((chave,index) => {
//       if(index === 0){
//         if(obj2.includes(chave)){
//           results.push(dado)
//         }
//       }
//     })
//   })
//   return results;
// }

axios.get('http://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes')
  .then(data => data.data)
  .then(data => {
    fs.writeFile(filePath, JSON.stringify(data, null, '\t'), (err)=>{
      if(err) throw err;
    })
  })
  .catch(err => {
    console.log(err);
  })

