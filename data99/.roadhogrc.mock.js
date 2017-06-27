
export default {
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1, 2] },
  // 模拟数据
  'GET /api/get/userInformation/*': (req, res) => {
    console.log('======', req.params['0']);
    //req.params['0'];
    var body;
    if (req.params['0'] == '123456') {
      setTimeout(function () {
        body = {
          success: true,
          msg: 'success',
          data: {
            name: 'jcxu',
            age: 23,
            sex: '男'
          }
        }
        res.json(body)
      }, 3000)
    }
    else {
      setTimeout(function () {
        body = {
          success: false,
          msg: 'fail',
          data: '数据获取失败'
        }
        res.json(body)
      }, 0)
    }
  },
};
