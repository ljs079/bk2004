# 我的项目文件夹



主页：点击购物车，立即登录，请登录会弹出登录界面，点击商品会跳转到详情界面，登录后购物车跳转购物车界面，用户名等信息会显示在主页上。点击虚拟道具会跳转到列表页。主页商品通过数据库获取数据。



列表页：商品一级分类，分页，支持默认和最新两种排序方式，点击登录会弹出登录界面。点击商品会跳转详情，通过代理获取数据。

详情：动态渲染详情页，放大镜，可以选择数量加入购物车或者跳转回列表页。

购物车：没有商品显示图片“您的购物车里面没有商品”，有商品时可以全选，增减商品数量，清空购物车，总价格，总数量，逐件删除。

登录账号密码：

username     password      nickname
hello                123321              你好
QAQAQAQ       223322		   管理员
hahaha		 123456		    晚安

nginx.conf ：

    location = /gx {  
    proxy_pass https://sqmallservice.u.sdo.com/api/ps/product/list;
        }


    location = /hx {
    proxy_pass https://sqmallservice.u.sdo.com/api/ps/category/list;
        }


​        
    location = /fx {
    proxy_pass  https://sqmallservice.u.sdo.com/api/ps/product/getUnitPrice;
        }
       
    location = /kx {
    proxy_pass  https://sqmallservice.u.sdo.com/api/ps/product/getProduct;
        }
