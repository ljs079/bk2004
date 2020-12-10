# Host: localhost  (Version: 5.5.53)
# Date: 2020-12-10 18:56:55
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "list"
#

DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_img` varchar(255) DEFAULT NULL,
  `goods_price` varchar(255) DEFAULT NULL,
  `goods_name` varchar(255) DEFAULT NULL,
  `skuId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2147483648 DEFAULT CHARSET=utf8;

#
# Data for table "list"
#

/*!40000 ALTER TABLE `list` DISABLE KEYS */;
INSERT INTO `list` VALUES (1,'https://static.web.sdo.com/sqshop/100001900/15893676149899.jpg','7000','幻想药','ba74b28d5c262bb8e2b4'),(173,'https://static.web.sdo.com/sqshop/100001900/15903953155338.jpg','12800','女仆套装','be1fe64525dfb90e2fd3'),(204,'https://static.web.sdo.com/sqshop/100001900/14955103281129.png','4800','演技教材·装死','c3aff28b8a3529de36d2'),(282,'https://fu5.web.sdo.com/10036/202007/15942874007062.jpg','22800','魔石精笛','b2a8f24e4c8d5458cc96'),(283,'https://fu5.web.sdo.com/10036/202007/15942874491573.jpg','12800','美格雅卡套装','02618cee722f17bcf4bb'),(374,'https://static.web.sdo.com/sqshop/100001900/15405440671998.jpg','22800','须鲸角笛','22af9d105a25564d5e28'),(393,'https://static.web.sdo.com/sqshop/100001900/15471124308711.jpg','18000','新舞步合集','40ce83b7d9b4acdfe25f'),(427,'https://static.web.sdo.com/sqshop/100001900/15480385597293.jpg','5000','小黄莺套装','5bf4d2feaa335a243727'),(446,'https://static.web.sdo.com/sqshop/100001900/15638882144323.jpg','22800','SDS芬里尔密玥','ea0b00a666945a85a6f5'),(450,'https://static.web.sdo.com/sqshop/100001900/15650819537609.jpg','33800','2019FANFEST虚拟特典','4162f2aba9a822405a3e'),(451,'https://static.web.sdo.com/sqshop/100001900/15650819473942.jpg','12800','2019FANFEST宠物礼包','e9971a30472132702fe9'),(482,'https://static.web.sdo.com/sqshop/100001900/15710236028589.jpg','25800','5.0电子典藏包','60f5bbf61d6a18f07fab'),(508,'https://static.web.sdo.com/sqshop/100001900/15774290187824.jpg','9800','血盟聆听者套装','30da7de6e878d1c5666f'),(513,'https://static.web.sdo.com/sqshop/100001900/15905503788395.jpg','12800','孔雀套','d926f382039d7919683f'),(514,'https://static.web.sdo.com/sqshop/100001900/15905504221050.jpg','22800','孔雀笛','0f07c33fc67ac98b3d14'),(525,'https://static.web.sdo.com/sqshop/100001900/15826023683386.jpg','14000','复制原画套装','67297f18ebfdbc82e32a'),(530,'https://static.web.sdo.com/sqshop/100001900/15825414893566.jpg','5000','演技教材·声援套装','459db120d9ca881f25ec'),(545,'https://fu5.web.sdo.com/10036/202007/15954853184495.jpg','2500','演技教材·撩水','fc1930b4890ac5bf976a'),(546,'https://fu5.web.sdo.com/10036/202007/15954852955025.jpg','5000','永夏套装','8e6aa88764c8e5f9174b'),(551,'https://fu5.web.sdo.com/10036/202009/16002247088034.jpg','12800','东方雅士套装','d4f5cf57ed90cf12946f'),(552,'https://fu5.web.sdo.com/10036/202009/16002246832093.jpg','12800','东方美玉套装','8e253c0d35b9f60c1590'),(553,'https://fu5.web.sdo.com/10036/202010/16022298845162.jpg','12800','红宝石兽套装','e382d8c84742990124f5'),(554,'https://fu5.web.sdo.com/10036/202010/16022299084173.jpg','4500','红宝石兽拖鞋','e035448b0b425f9eff8c'),(555,'https://fu5.web.sdo.com/10036/202010/16022299241133.jpg','22800','红电气宝石兽笛','58f0ac4fef375191401b'),(561,'https://fu5.web.sdo.com/10036/202010/16033533208050.jpg','4800','面妆样式：守护天节','ebf1f83f1e31ddfd8fc0');
/*!40000 ALTER TABLE `list` ENABLE KEYS */;

#
# Structure for table "users"
#

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `jinglian` varchar(255) DEFAULT NULL,
  `dengji` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=FIXED;

#
# Data for table "users"
#

/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'hello','123321','你好','1500','崇敬'),(2,'QAQAQAQ','223322','管理员','1300','尊敬');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
