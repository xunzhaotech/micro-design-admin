# 禾沐康APP直播流程

## 登录流程

![Image text](/doc/APP直播登录流程.png)


## 直播拉流流程

![Image text](/doc/APP直播拉流流程.png)


## 直播推流流程

![Image text](/doc/APP直播推流流程.png)

## **直播模块相关接口**

### android 工程TCGlobalConfig 文件内替换

```
以下两个数据可以通过腾讯云后台获取，获取License，请参考官网指引 https://cloud.tencent.com/document/product/454/34750
LICENCE_URL="";//设置成您自己账号下直播License的url
LICENCE_KEY="";//设置成您自己账号下直播License的key;

以下路径为自己搭建的直播服务器路径
APP_SVR_URL="";//设置成我们自己的直播服务器路径;


```

### 功能说明

#### 功能点

1. 获取登录信息
2. 获取用户信息
3. 注册直播账号
4. 获取直播/预告房间列表
5. 获取直播/预告房间信息
6. 创建直播间/预告直播开播
7. 结束创建直播间/预告直播间
8. 观众进入直播间
9. 观众退出直播间
10. 获取观众列表和观众人数（腾讯接口直播群成员接口）

#### 请求方式

- 协议：https
- 域名：https://payment.360yyk.cn/
- 方式：POST/PUT/GET
- 请求数据格式：json封装/map封装
- 应答数据格式：json封装
- 获取登录信息请求需要增加head头部参数：addHeader("Authorization","Basic YWstYXBwOjEyMzQ1Ng==")
- 其他接口统一用登录信息返回的token拼装head 参数：addHeader("Authorization","bearer "+token)  token为登录返回token

### 接口

#### 1.**获取登录信息**

向后台请求用于获取登录成功的票据token

\* 接口名：**auth/oauth/token**  

\* 方式：POST

\* 请求示例： 

```javascript
Map<String, String> defaultParam = new HashMap<>();
defaultParam.put("grant_type", "password");		 
defaultParam.put("userType", "app");			 
defaultParam.put("entryType", "app");			 
defaultParam.put("lat", lat);					 
defaultParam.put("lng", lng);					 
defaultParam.put("username", userName);			 
defaultParam.put("password", passWord);			 
```



| 字段       | 类型   | 选项 | 说明          |
| :--------- | :----- | :--- | :------------ |
| grant_type | String | 必填 | 登录方式      |
| userType   | String | 必填 | 登录类型app   |
| entryType  | String | 必填 | 登录类型app   |
| lat        | String | 必填 | 默认必须传“0” |
| lng        | String | 必填 | 默认必须传“0” |
| username   | String | 必填 | 用户名        |
| password   | String | 必填 | 密码          |

\* 应答示例： 

```json
{
    "access_token":"fccd7d03-46c5-429f-af97-d0cb6dac8778",
    "token_type":"bearer"
}
```

| 字段         | 类型   | 选项 | 说明      |
| :----------- | :----- | :--- | :-------- |
| access_token | String | 必填 | 授权token |
| token_type   | String | 必填 | token类型 |

#### 2.获取用户信息

向后台请求用于获取用户资料信息

\* 接口名：**system/user/user**  

\* 方式：GET

\* 请求示例： 

```javascript
Map<String, String> defaultParam = new HashMap<>();			 
defaultParam.put("entryType", "android");
```

| 字段      | 类型   | 选项 | 说明            |
| :-------- | :----- | :--- | --------------- |
| entryType | String | 必填 | 登录类型android |

\* 应答示例： 

```json
 {
    "currentUser":{
        "username":"13928790037", 
        "userId":"4d5e6cc4769760f9203510fd7faf8270",
        "nickname":null,
        "userType":"2",
        "avatar":null,
        "mobile":"13928790037",
        "sex":"2",
        "tenantType":2,
        "tenantBelong":"361rfv",
        "roleKey":"business",
        "roleName":"业务理",
        "liveUserId":"ak4jv1w3_13928790037",
        "livePassword":"4jv1w31234",
        "closeTenants":[
                            {
                            "tenantCode":"4jv1w3",
                            "tenantName":"阿康云药房"
                            }
                        ]
    }
}

```

| 字段                                | 类型       | 选项 | 说明         |
| :---------------------------------- | :--------- | :--- | :----------- |
| currentUser                         | JsonObject | 必填 | 用户信息对象 |
| currentUser.username                | String     | 必填 | 用户名       |
| currentUser.userId                  | String     | 必填 | 用户id唯一   |
| currentUser.nickname                | String     | 必填 | 用户昵称     |
| currentUser.userType                | String     | 必填 | 用户类型     |
| currentUser.avatar                  | String     | 必填 | 用户头像     |
| currentUser.mobile                  | String     | 必填 | 用户手机号   |
| currentUser.sex                     | String     | 必填 | 用户性别     |
| currentUser.tenantType              | String     | 必填 | 商业类型     |
| currentUser.tenantBelong            | String     | 必填 | 商业Belong   |
| currentUser.roleKey                 | String     | 必填 | 角色key      |
| currentUser.roleName                | String     | 必填 | 角色名称     |
| currentUser.liveUserId              | String     | 必填 | 直播账号     |
| currentUser.livePassword            | String     | 必填 | 直播密码     |
| currentUser.closeTenants            | JsonArray  | 必填 | 商业对象列表 |
| currentUser.closeTenants.tenantCode | String     | 必填 | 商业编码     |
| currentUser.closeTenants.tenantName | String     | 必填 | 商业名字     |

#### 3.注册直播账号

向后台请求用于注册直播账号

\* 接口名：**system/user/registerLiveUser**  

\* 方式：POST

\* 请求示例： 

```javascript
Map<String, String> defaultParam = new HashMap<>();
defaultParam.put("entryType", "android");		 
defaultParam.put("tenantCode", tenantCode);			 
```

| 字段       | 类型   | 选项 | 说明               |
| :--------- | :----- | :--- | :----------------- |
| entryType  | String | 必填 | 登录方式android    |
| tenantCode | String | 必填 | 商业编码tenantCode |

\* 应答示例： 

```json
{
    "data":
     {  
        "liveUserId":"aksbuj_13928790037",
      	"livePassword":"sbuj1234" 
     }
}
```

| 字段         | 类型   | 选项 | 说明         |
| :----------- | :----- | :--- | :----------- |
| liveUserId   | String | 必填 | 直播账号     |
| livePassword | String | 必填 | 直播账号密码 |

#### 4.获取直播/预告房间列表

向后台请求用于获取直播/预告房间列表

\* 接口名：**promotion/promotion/live/list**  

\* 方式：GET

\* 请求示例： 

```javascript
Map<String, String> defaultParam = new HashMap<>();
defaultParam.put("entryType", "android");		 
defaultParam.put("tenantCode", "4jv1w3");	
defaultParam.put("hostId", hostId);	
defaultParam.put("type", type);	
defaultParam.put("status", status);	
defaultParam.put("province", province);	
defaultParam.put("city", city);	
defaultParam.put("pageNum", pageNum);
defaultParam.put("pageSize", pageSize);
```

| 字段       | 类型   | 选项 | 说明                          |
| :--------- | :----- | :--- | :---------------------------- |
| entryType  | String | 必填 | 登录方式android               |
| tenantCode | String | 必填 | 商业编码tenantCode            |
| hostId     | String | 否   | 预创建的主播Id                |
| type       | String | 否   | 直播间类型                    |
| status     | int    | 否   | 直播类型0预告1直播中2直播结束 |
| province   | String | 否   | 省份                          |
| city       | String | 否   | 市区                          |
| pageNum    | String | 必填 | 页数                          |
| pageSize   | String | 必填 | 每页条数                      |

\* 应答示例： 

```json
{
    "data":{
        "records":[
            {
                "liveId":65,
                "title":"机器人",
                "type":"糖尿病",
                "coverUrl":null,
                "views":"0",
                "viewsTotal":"0",
                "status":1,
                "host":"ak4jv1w3_13928790037",
                "roomId":"ak4jv1w3_13928790037",
                "startTime":"2021-04-08 18:02:49",
                "lng":null,
                "lat":null,
                "province":null,
                "city":null,
                "area":null,
                "hostName":null,
                "hostHead":null,
                "planStatTime":null,
                "predictionCoverUrl":null,
                "hostId":null,
                "pullUrlByFlv":"http://o2o-pull.ak1ak1.net/live/60702648_ak4jv1w3_13928790037.flv",
                "pullUrlByM3u8":"http://o2o-pull.ak1ak1.net/live/60702648_ak4jv1w3_13928790037.m3u8"
            }
        ],
        "total":1,
        "size":10
    }
}
```

| 字段               | 类型       | 选项 | 说明                  |
| :----------------- | :--------- | :--- | :-------------------- |
| data               | JsonObject | 必填 | JsonObject            |
| records            | JsonArray  | 必填 | JsonArray直播数据列表 |
| liveId             | String     | 必填 | 直播间ID              |
| title              | String     | 必填 | 直播间标题            |
| type               | String     | 必填 | 直播间类型            |
| coverUrl           | String     | 否   | 直播封面              |
| views              | String     | 否   | 当前观众数            |
| viewsTotal         | String     | 否   | 累计观众数            |
| status             | String     | 必填 | 0预告1直播中2结束     |
| host               | String     | 否   | 直播账号              |
| roomId             | String     | 否   | 房间ID也是直播群ID    |
| startTime          | String     | 否   | 开始直播时间          |
| lng                | String     | 否   | 经度                  |
| lat                | String     | 否   | 纬度                  |
| province           | String     | 否   | 省                    |
| city               | String     | 否   | 市                    |
| area               | String     | 否   | 区                    |
| hostName           | String     | 否   | 主播名字              |
| hostHead           | String     | 否   | 主播头像              |
| planStatTime       | String     | 否   | 预告时间              |
| predictionCoverUrl | String     | 否   | 预告图片              |
| hostId             | String     | 否   | 预告创建直播用户ID    |
| pullUrlByFlv       | String     | 否   | 直播播放FLV-URL       |
| pullUrlByM3u8      | String     | 否   | 直播播放M3u8-URL      |

#### 5.获取直播/预告房间信息

向后台请求用于获取直播/预告房间信息

\* 接口名：**promotion/promotion/live/id**  

\* 方式：GET

\* 请求示例： 

```javascript
Map<String, String> defaultParam = new HashMap<>();			 
defaultParam.put("entryType", "android");			 
defaultParam.put("tenantCode", "ntem");
defaultParam.put("liveId", liveId);
```

| 字段       | 类型   | 选项 | 说明               |
| :--------- | :----- | :--- | :----------------- |
| entryType  | String | 必填 | 登录方式android    |
| tenantCode | String | 必填 | 商业编码tenantCode |
| liveId     | String | 必填 | 直播间ID           |

\* 应答示例： 

```json
{
    "data":{
        "liveId":65,
        "title":"机器人",
        "type":"糖尿病",
        "coverUrl":null,
        "views":"0",
        "viewsTotal":"0",
        "status":1,
        "host":"ak4jv1w3_13928790037",
        "roomId":"ak4jv1w3_13928790037",
        "hostName":null,
        "hostHead":null,
        "planStatTime":null,
        "predictionCoverUrl":null,
        "pullUrlByFlv":"http://o2o-pull.ak1ak1.net/live/60702648_ak4jv1w3_13928790037.flv",
        "pullUrlByM3u8":"http://o2o-pull.ak1ak1.net/live/60702648_ak4jv1w3_13928790037.m3u8"
    }
}
```

| 字段               | 类型       | 选项 | 说明                    |
| :----------------- | :--------- | :--- | :---------------------- |
| data               | JsonObject | 必填 | JsonObject              |
| liveId             | String     | 必填 | 直播间ID                |
| title              | String     | 必填 | 直播间标题              |
| type               | String     | 必填 | 直播间类型              |
| coverUrl           | String     | 必填 | 直播封面                |
| views              | String     | 必填 | 当前观众数              |
| viewsTotal         | String     | 必填 | 累计观众数              |
| status             | String     | 必填 | 直播状态0预告1直播2结束 |
| host               | String     | 必填 | 主播账号                |
| roomId             | String     | 必填 | 房间ID 也是直播群ID     |
| hostName           | String     | 必填 | 主播名字                |
| hostHead           | String     | 必填 | 主播头像                |
| planStatTime       | String     | 必填 | 预告时间                |
| predictionCoverUrl | String     | 必填 | 预告图片                |
| pullUrlByFlv       | String     | 必填 | 直播播放FLV-URL         |
| pullUrlByM3u8      | String     | 必填 | 直播播放M3u8-URL        |

#### 6.创建直播间/预告直播开播

向后台请求用于创建直播间/预告直播开播

\* 接口名：**promotion/promotion/live/start**  

\* 方式：POST

\* 请求示例： 

```json
{
    "live":{
        "entryType":"android",
        "tenantCode":"4jv1w3",
        "liveId":82,
        "tenantType":"2",
        "title":"测试一看",
        "type":"糖尿病",
        "host":"ak4jv1w3_13928790037",
        "roomId":"ak4jv1w3_13928790037",
        "coverUrl":"http://collegemedia.ayunyao.com/019e383679db478d8eb96a93ab0f5b83.png",
        "lat":null,
        "lng":null,
        "province":null,
        "city":null,
        "area":null
    }
} 
```

| 字段            | 类型       | 选项 | 说明                           |
| :-------------- | :--------- | :--- | :----------------------------- |
| live            | JsonObject | 必填 | live对象                       |
| live.entryType  | String     | 必填 | 登录类型 android               |
| live.tenantCode | String     | 必填 | 商业编码                       |
| live.tenantType | String     | 必填 | 商业type                       |
| live.title      | String     | 必填 | 直播间标题                     |
| live.type       | String     | 必填 | 直播间类型                     |
| live.host       | String     | 必填 | 主播ID（建议用直播登录账号）   |
| live.roomId     | String     | 必填 | 房间ID（建议用直播登录账号）   |
| live.coverUrl   | String     | 否   | 直播封面                       |
| live.lat        | String     | 否   | 经度                           |
| live.lng        | String     | 否   | 纬度                           |
| live.province   | String     | 否   | 省                             |
| live.city       | String     | 否   | 市                             |
| live.area       | String     | 否   | 区                             |
| live.liveId     | String     | 否   | 预告直播间开播必须填写直播间ID |

\* 应答示例： 

```json
{
    "data":{
        "liveId":82,
        "status":1,
        "pushUrl":"rtmp://o2o-push.ak1ak1.net/live/604_ak4jv1w3_13928790037?txSec45da22&txTime=60704"
    }
}
```

| 字段         | 类型       | 选项 | 说明           |
| :----------- | :--------- | :--- | :------------- |
| data         | JsonObject | 必填 | JsonObject     |
| data.liveId  | String     | 必填 | 直播间id       |
| data.status  | String     | 必填 | 直播间状态     |
| data.pushUrl | String     | 必填 | 直播间推流路径 |

#### 7.结束创建直播间/预告直播间

向后台请求用于结束创建直播间/预告直播间

\* 接口名：**promotion/promotion/live/end**  

\* 方式：PUT

\* 请求示例： 

```json
{
    "live":{
        "entryType":"android",
        "tenantCode":"4jv1w3",
        "liveId":82
    }
}		 
```

| 字段       | 类型   | 选项 | 说明               |
| :--------- | :----- | :--- | :----------------- |
| entryType  | String | 必填 | 登录方式android    |
| tenantCode | String | 必填 | 商业编码tenantCode |
| liveId     | String | 必填 | 直播间ID           |

\* 应答示例： 

```json
{
    "data":{
        "views":"0",
        "viewsTotal":"0",
        "totalProducts":0,
        "totalOrders":0,
        "totalSaleAmount":0
    }
}
```

| 字段            | 类型       | 选项 | 说明           |
| :-------------- | :--------- | :--- | :------------- |
| data            | JsonObject | 必填 | JsonObject     |
| views           | String     | 必填 | 当前观看人数   |
| viewsTotal      | String     | 必填 | 累计观看总人数 |
| totalProducts   | String     | 必填 | 总商品数       |
| totalOrders     | String     | 必填 | 累计销售订单数 |
| totalSaleAmount | String     | 必填 | 累计销售金额数 |

#### 8.观众进入直播间

向后台请求用于观众进入直播间

\* 接口名：**promotion/promotion/live/addView**  

\* 方式：PUT

\* 请求示例： 

```json
{
    "live":{
        "entryType":"android",
        "tenantCode":"4jv1w3",
        "liveId":82
    }
}		 
```

| 字段       | 类型   | 选项 | 说明               |
| :--------- | :----- | :--- | :----------------- |
| entryType  | String | 必填 | 登录方式android    |
| tenantCode | String | 必填 | 商业编码tenantCode |
| liveId     | String | 必填 | 直播间ID           |

\* 应答示例： 

```json
{
   "messge":"成功",
}
```

| 字段   | 类型   | 选项 | 说明     |
| :----- | :----- | :--- | :------- |
| messge | String | 必填 | 返回结果 |

#### 9.观众退出直播间

向后台请求用于观众退出直播间

\* 接口名：**promotion/promotion/live/reduceView**  

\* 方式：PUT

\* 请求示例： 

```json
{
    "live":{
        "entryType":"android",
        "tenantCode":"4jv1w3",
        "liveId":82
    }
}		 
```

| 字段       | 类型   | 选项 | 说明               |
| :--------- | :----- | :--- | :----------------- |
| entryType  | String | 必填 | 登录方式android    |
| tenantCode | String | 必填 | 商业编码tenantCode |
| liveId     | String | 必填 | 直播间ID           |

\* 应答示例： 

```json
{
   "messge":"成功",
}
```

| 字段   | 类型   | 选项 | 说明     |
| :----- | :----- | :--- | :------- |
| messge | String | 必填 | 返回结果 |