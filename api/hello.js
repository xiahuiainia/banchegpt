const mysql = require('mysql');

module.exports = async (req, res) => {
  const connection = mysql.createConnection({
    host     : 'iship2.rwlb.rds.aliyuncs.com', // 你的数据库地址
    user     : 'yuzhibin',         // 你的数据库用户名
    password : 'Yuzhibin@1129',      // 你的数据库密码
    database : 'iship2'        // 你的数据库名
  });

  connection.connect();

  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    res.json({solution: results[0].solution});
  });

  connection.end();
};
