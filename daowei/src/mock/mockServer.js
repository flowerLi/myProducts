/**
 * Created by Administrator on 2017/7/12.
 */
import Mock from 'mockjs'
import data from './data.json'
Mock.mock('/api/servy',{
  code:0,
  data:data.servyProducts
})
