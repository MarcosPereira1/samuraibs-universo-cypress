const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 900,
    viewportWidth: 1440,
    setupNodeEvents(on, config) {
//       const pool = new Pool ({
//         host: 'chunee.db.elephantsql.com',
//         user: 'djmivsbo',
//         password: 'D3e38697FJRZW2pVTGWe9pJTGSQMewBF',
//         database: 'djmivsbo',
//         port: 5432
//       })
      
//       on('task', {
//         removeUser(email) {
//           return new Promise(function(resolve){
//             pool.query('DELETE FROM public.users WHERE email = $1', [email], function(error, result){
//               if (error){
//                 throw error
//               }
//               resolve({success: result})
//             })
//     })
//   }
// })
    },
    baseUrl: "http://localhost:3000"
  },
});
