const env = {
    
    database: 'umg_salama_16431_wvn6',
    username: 'umg_salama_16431_kth5_user',
    password: 'bEWtsz8JL5LHdAD5jxXEIz6FiTAo5G8F',
    //host: 'dpg-crmgum23esus73fsvheg-a.oregon-postgres.render.com', //este es el host externo
   host: 'dpg-csgvk588fa8c7394drh0-a', //usar este para subir el proyecto a render final
    dialect: 'postgres',
    
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
  module.exports = env;