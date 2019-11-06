/*
包含应用中所有请求接口的函数：接口请求函数
函数的返回值都是promise对象
*/
import ajax from './ajax';
import jsonp from 'jsonp'; // axios不能发jsonp请求
import {message} from 'antd';

// const BASE = 'http://localhost:5000';
const BASE = '';


// 请求登录
export const reqLogin = (username, password) => ajax.post( BASE + '/login',{username, password})

// 发送jsonp请求得到天气信息
export const reqWeather = (city) => {
    // 执行器函数：内部去执行异步任务，成功了调用resolve(),失败了调用reject()
    // 此处我们实现成不调用reject()，直接提示错误
    return new Promise((resolve, reject) => { 
        const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`;
        jsonp(url, {}, ( error, data ) => {
            if(!error && data.error === 0){ // 成功
                const {dayPictureUrl,weather} = data.results[0].weather_data[0]
                resolve({dayPictureUrl,weather} );
            }else{ // 失败
                message.error('获取天气信息失败');
            }
        }); 
    });

}


//等价于上面的reqLogin方法
// 请求登录
// export const reqLogin = (username, password) => (
//     ajax({
//         method: 'post',
//         url: BASE + '/login',
//         data: { // data是对象，默认使用json格式的请求体携带参数数据
//             username,
//             password
//         }
//         // data: qs.stringify({username, password})
//     })
// )

//等价于上面的reqLogin方法
// 请求登录
// export function reqLogin(username, password) {
//     return ajax({
//         method: 'post',
//         url: BASE + '/login',
//         data: { // data是对象，默认使用json格式的请求体携带参数数据
//             username,
//             password
//         }
//         // data: qs.stringify({username, password})
//     });
// }


// const name = 'admin';
// const pwd = 'admin';
// reqLogin(name, pwd).then(result => { // response.data的值
//     //const result = response.data;
//     console.log('请求成功了', result);
// })
//将实参数据赋值给形参变量