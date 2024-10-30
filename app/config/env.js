const env = {
    
    database: 'umg_salama_16431_wvn6',
    username: 'umg_salama_16431_kth5_user',
    password: 'bEWtsz8JL5LHdAD5jxXEIz6FiTAo5G8F',
    //host: 'dpg-crmgum23esus73fsvheg-a.oregon-postgres.render.com', //este es el host externo
<<<<<<< HEAD
   host: 'dpg-csgvk588fa8c7394drh0-a', //usar este para subir el proyecto a render final
=======
    host: 'dpg-crmgum23esus73fsvheg-a', //usar este para subir el proyecto a render final
>>>>>>> e8dcfcc2245452f654ef15d0b6031a80f1c17966
    dialect: 'postgres',
    
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
  module.exports = env;