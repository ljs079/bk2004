
  const nickname = getCookie('nickname')
  const jinglian= getCookie('jinglian')
  const dengji= getCookie('dengji')


  if (nickname) {
    
    $('.weidenglu').addClass('hide')
    $('.yidenglu').removeClass('hide').find($('.name')).text(`${nickname}`)
    $('.yidenglu span').text(`${dengji}`)
    $('.yidenglu .jinglian b').text(`${jinglian}`)
    $('.hair .center ul .huanying').text(`欢迎 ${nickname}`)
   
    $('.hair .center ul li b').text(`退出`)
    $('.hair .center ul li b').on("click",function(){
      
      setCookie('nickname', '', -1)
      window.location.href = './index.html'
    })
  
  } else {
    
    $('.weidenglu').removeClass('hide')
    $('.yidenglu').addClass('hide')
  }
  $(function () {

    
    var validator = $("#form1").validate({
        errorPlacement: function(error, element) {
          // Append error within linked label
          $( element )
            .closest( "form" )
              .find( "label[for='" + element.attr( "id" ) + "']" )
                .append( error );
        },
        errorElement: "span",
        messages: {
          username: {
            required: "！请输入账号",
          
          },
          password: {
            required: " ！请输入密码",
          
          }
            },
             submitHandler (form) {
      
        const info = $(form).serialize()
   
        
        $.post('./server/login.php', info, null, 'json').then(res => {
         
          console.log(res)
    
         
          if (res.code === 0) {
           
            console.log('失败')
           
            alert('账号或密码错误')
          } else if (res.code === 1) {
          
            setCookie('nickname', res.nickname)
            setCookie('jinglian', res.jinglian)
            setCookie('dengji', res.dengji)
            // 跳转页面
            window.location.href = './index.html'
          }
        })
      }
      });
    
      $(".cancel").click(function() {
        validator.resetForm();
      });
      // 表单提交事件
     
    })
    $('#denglu').css({
      width:450,
      height:550,
      margin:'80px auto',
      display: 'flex',
      flexDirection: 'column',
      })
  
  $('#denglu>ul').on ('click','li' ,function (){
      $(this).addClass('active').siblings().removeClass('active')
     $($('ol>li')[$(this).index()]).addClass('active').siblings().removeClass('active')
  }
  
  )
  $('.hair .center ul li p').on("click",function(){
    $('.zheng').removeClass('hidel')
  })
  $('.weidenglu>div').on("click",function(){
    $('.zheng').removeClass('hidel')
  })
  $('.zheng .close').on("click",function(){
    $('.zheng').addClass('hidel')
  })
  


$(function () {

  
  let list = null
  
 
  const list_info = {
    cat_one: '',
   
    sort_method: '0',
   
    current: 1,
    pagesize: 14
  }

  getCateOne()
  async function getCateOne() {
    const xhr=new XMLHttpRequest()
        xhr.open('GET','/hx?merchantId=1&categoryType=0')
        xhr.onload=function(){
            const goodsList = JSON.parse(xhr.responseText)
            console.log(JSON.parse(xhr.responseText))
       list = goodsList.data.categoryList

    
    let str = ''
    list.forEach(item => {


      str += `
    
      <li xid="${item.id}">${item.name }</li>
      `
    })
    $('.fenlei .zhulei ul').html(`<li xid="">全部</li>`+ str) 
}
        xhr.send()
  }


  getTotalPage()
  async function getTotalPage() {
    

      
    const xhr=new XMLHttpRequest()
        xhr.open('GET','/gx?merchantId=1&page=1&pageSize=40&categoryId='+list_info.cat_one+'&tagId=&order=0&keyword=&categoryType=0')
        xhr.onload=function(){
            const goodsList = JSON.parse(xhr.responseText)
            console.log(JSON.parse(xhr.responseText))
       list = goodsList.data.totalCount
 
$('.M-box').pagination({
  totalData: list,
  showData: 40,
  // mode:'fixed',
  count:3,
  coping: true,
  callback (index) {
            list_info.current = index.getCurrent()
         



            getGoodsList()
          }
});
        }
        xhr.send()
      }
   
   
  

  getGoodsList()
  async function getGoodsList() {
    
    
    const xhr=new XMLHttpRequest()
        xhr.open('GET','/gx?merchantId=1&page='+list_info.current+'&pageSize=40&categoryId='+list_info.cat_one+'&tagId=&order='+list_info.sort_method+'&keyword=&categoryType=0')
        xhr.onload=function(){
            const goodsList = JSON.parse(xhr.responseText)
            console.log(JSON.parse(xhr.responseText))
       list = goodsList.data.productList
     
   
    let str = ''
    list.forEach(item => {


      str += `
        <div class="li" goodid="${item.sku.skuId}" value="${ item.price}" ids="${item.product.id}">
        <img src=${ item.product.picUrl} alt="" class="img_in">
        <img src="./image/ff14_watermark_logo.png" alt="" class="img_inin">
        <p class="name_in">${item.product.productName}</p>
        <b class="value_in">${ item.price}</b>
        <span>点券</span>
    </div>
      `
    })
    $('.xinpin>.bigbox').html(str) 
}
        xhr.send()
        

    
  }


  $('.fenlei .zhulei').on('click', 'li', function () {
  
    $(this).addClass('active').siblings().removeClass('active')
console.log(this)
    
    const type = $(this).attr('xid')
  $('.fenlei .zilei').removeClass('hide')
    
    
   
    list_info.current = 1

   
    list_info.cat_one = type
   
    getTotalPage()
  
    getGoodsList()
    
  })

 
  
 
  $('.paixu').on('click', 'div', function () {
 
    const method = $(this).attr('method')
    

   
    $(this).addClass('active').siblings().removeClass('active')

    
    list_info.sort_method = method
    list_info.current = 1

    
    getTotalPage()
    getGoodsList()

   
  })

 
  $('.bigbox').on('click', '.li', function () {
   
    const id = $(this).attr('goodid')
    const value= $(this).attr('value')
    const ids= $(this).attr('ids')
   
    setCookie('goods_id', id)
    setCookie('goods_value', value)
    setCookie('goods_ids', ids)
   
    window.location.href = './detail.html'
  })

 

})
