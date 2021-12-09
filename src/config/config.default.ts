import { join } from 'path'
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'

export type DefaultConfig = PowerPartial<EggAppConfig>

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1611038425326_4049'
  // add your config here
  config.middleware = ['errorMiddleware','notFoundMiddleware'],
  config.orm ={
    type: 'mysql',
    host: 'rm-bp1qqu1t135v4d9x67o.mysql.rds.aliyuncs.com',
    port: 3306,
    username: 'root',
    password: 'Aarootroot1',
    database: 'socks',
    synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true
    logging: false,
  }
  config.static = {
    prefix: '/',
    dir: [join(appInfo.appDir, './build'), join(appInfo.appDir, './public'), join(appInfo.appDir, './build/client')]
  }
  config.security={
  csrf:{
    enable:false
  },
  }
  return config
}
