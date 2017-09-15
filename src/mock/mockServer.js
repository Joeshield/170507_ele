/**
 * 使用mockjs提交模拟接口
 */
import apiData from './data.json'
import Mock from 'mockjs'
// 注册路由
Mock.mock('/api2/goods', {code: 0, data: apiData.goods} )
Mock.mock('/api2/ratings', {code: 0, data: apiData.ratings} )
Mock.mock('/api2/seller', {code: 0, data: apiData.seller} )

// 不需要向外暴露什么
// export default xxx

