---
title: 🈲 禁止的功能以及网站

---


## 禁止的网站

- 禁止访问政府、反华、银行金融以及邪教等类型的网站和矿池服务站点。
- 同时也禁止访问一些特定域名或关键词的网站，使用了正则表达式进行匹配，包括但不限于以下网站：
  - 过滤可能与政治、社会或宗教敏感话题与越过中国大陆网络审查和法轮功有关的网站(1)：regexp:.*.(?!appledaily|dafahao|minghui|dongtaiwang|epochtimes|ntdtv|falundafa|wujieliulan|zhengjian|soundofhope|boastr|bettertouchtool|elplural)(bitterwinter|your_specific_website_here).(org|com|net|tw|hk|rocks|ai)
  - 过滤可能与政治、社会或宗教敏感话题与越过中国大陆网络审查和法轮功有关的网站(2)：regexp:.*.(?!beanfun|gashpoint|gov|edu|alipay|tenpay|unionpay|yunshanfu|icbc|ccb|boc|bankcomm|abchina|cmbchina|psbc|cebbank|cmbc|pingan|spdb|bank.ecitic|cib|hxb|cgbchina|jcbcard|pbccrc|adbc)(your_specific_website_here).(com|cn)
  - 过滤政府、学校、金融机构相关网站：regexp:.*.(gov.cn|edu.cn|alipay.com|tenpay.com|unionpay.com|yunshanfu.cn|icbc.com.cn|ccb.com|boc.cn|bankcomm.com|abchina.com|cmbchina.com|psbc.com|cebbank.com|cmbc.com.cn|pingan.com|spdb.com.cn|bank.ecitic.com|cib.com.cn|hxb.com.cn|cgbchina.com.cn|jcbcard.cn|pbccrc.org.cn|adbc.com.cn)
  - 过滤不适用于代理的网站：regexp:.*.(?!10099|10010|189|10086|1688|jd|taobao|pinduoduo|cctv|cntv|tianya|tieba|xuexi|rednet|weibo|zhihu|douban|tmall|vip|toutiao|zijieapi|xiaomi|oppo|oneplusbbs|bbs.vivo|club.lenovo|bbs.iqoo|realmebbs|rogbbs.asus|bbs.myzte|club.huawei|bbs.meizu|xiaohongshu|coolapk|bbsuc|tangdou|oneniceapp|izuiyou|pipigx|ixiaochuan|duitang|renren)(your_specific_website_here).(com|cn)
  - 过滤 360 服务：regexp:(.*.)(360|so).(cn|com|com.cn)
  - 过滤金山服务：regexp:(.*.)(rising|kingsoft|duba|xindubawukong|jinshanduba).(com|net|org)
  - 过滤可能涉及虚拟商品交易，数字点数卡交易服务的网站：regexp:(.*.||)(gash|mycard).(com|tw)
  - 过滤可能涉及多线程下载、P2P下载服务、BT种子下载服务和磁力链接下载服务的网站：regexp:(.?)(xunlei|sandai|Thunder|XLLiveUD|IDM|IDMan)(.)
  - 过滤可能与临时邮箱或垃圾邮件攻击服务有关的网站：regexp:(^.*@)(guerrillamail|guerrillamailblock|sharklasers|grr|pokemail|spam4|bccto|chacuo|027168).(info|biz|com|de|net|org|me|la)
  - 过滤可能涉及矿池服务，非法加密货币交易服务的网站：.*.(?!a.pool.ml|ad.antpool|adzcoin.miningpoolhub|aeon.extremepool|aeon.minecraftpool|aeon.pool.minergate|aeon.pools.e-scavo|aeon.poolto|ahashpool|aikapool|alimabi|allports-1.lindon-pool|altpool|antpool|api.ella.mypool|api.etc.mypool|api.eth.mypool|api.eth.spacepools|api.ethpool|api.etn.spacepools|api.exp.mypool|api.mixin.lindon-pool|api.moneropool|api.multipool|api.music.mypool|api.nanopool|api.nnc.mypool|api.pirl.mypool|api.pool.bitcoin|api.pooldd|api.slushpool|api.sumo.sp


## 禁止的功能

  - 邮件客户端功能已被禁用，SMTP 等邮件发送端口被封禁。只允许使用网页版和 Outlook 客户端发送邮件，以减少滥发垃圾邮件的风险。
  - 22 端口已被封禁，以及一些高危端口，以保障服务器的安全和正常运行。
  - 禁止使用 BT、PT 下载功能，以防止下载盗版资源，维护版权合法性。
  - 禁止多线程下载，防止一个用户占用过多带宽影响其他用户的使用。

这些条款和限制旨在维护网络环境的合法性、稳定性和安全性，以确保我们的服务的正常运行，防止滥用和侵犯版权等问题的发生。














