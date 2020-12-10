
$(function () {

 
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

  
})
var swiper = new Swiper('.swiper-container', {
  loop:true,
  pagination: '.swiper-pagination',
  paginationClickable: true,
 
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: 2500,
  autoplayDisableOnInteraction: false,
  onlyExternal : true,
  paginationBulletRender: function (swiper, index, className) {
    return '<span class="' + className + '">' + (index + 1) + '</span>';
},
});


$(function () {


  var validator = $("#form1").validate({
      errorPlacement: function(error, element) {
        
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
        
          window.location.href = './index.html'
        }
      })
    }
    });
  
    $(".cancel").click(function() {
      validator.resetForm();
    });
 
   
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


getGoodsList()
   async function getGoodsList() {
    
    const goodsList = await $.get('./server/getLoginGoodsList .php', null, null, 'json')

   
    list = goodsList.list

    var list1=list.slice(0,13)
    var list2=list.slice(13,17)
    var list3=list.slice(17,21)
    var list4=list.slice(21,26)
    console.log(list3)
    let str1 = ''
    let str2 = ''
    let str3 = ''
    let str4 = ''
    list1.forEach(item => {
      str1 += `
        <div class="li" goodid="${item.skuId}" value="${ item.goods_price}" ids="${item.id}">
        <img src=${ item.goods_img } alt="" class="img_in">
        <img src="./image/ff14_watermark_logo.png" alt="" class="img_inin">
        <p class="name_in">${ item.goods_name }</p>
        <b class="value_in">${ item.goods_price }</b>
        <span>点券</span>
    </div>
    
      `
     
    })
    $('.body>.xinpin>.bigbox').html(str1)
    
    list2.forEach(item => {
      str2 += `
        <div class="li" goodid="${item.skuId}" value="${ item.goods_price}" ids="${item.id}">
        <img src=${ item.goods_img } alt="" class="img_in">
        <img src="./image/ff14_watermark_logo.png" alt="" class="img_inin">
        <p class="name_in">${ item.goods_name }</p>
        <b class="value_in">${ item.goods_price }</b>
        <span>点券</span>
    </div>
    
      `
     
    })
    $('.body>.dangji>.bigbox').html(str2)

    list3.forEach(item => {
      str3 += `
        <div class="li" goodid="${item.skuId}" value="${ item.goods_price}" ids="${item.id}">
        <img src=${ item.goods_img } alt="" class="img_in">
        <img src="./image/ff14_watermark_logo.png" alt="" class="img_inin">
        <p class="name_in">${ item.goods_name }</p>
        <b class="value_in">${ item.goods_price }</b>
        <span>点券</span>
    </div>
    
      `
     
    })
    $('.body>.meiri>.bigbox').html(str3)



    list4.forEach(item => {
      str4 += `
        <div class="li" goodid="${item.skuId}" value="${ item.goods_price}" ids="${item.id}">
        <img src=${ item.goods_img } alt="" class="img_in">
        <img src="./image/ff14_watermark_logo.png" alt="" class="img_inin">
        <p class="name_in">${ item.goods_name }</p>
        <b class="value_in">${ item.goods_price }</b>
        <span>点券</span>
    </div>
    
      `
     
    })
    $('.body>.xianshi>.bigbox').html(str4)

  }



  $('.gou').on("click",function(){
    const nickname = getCookie('nickname')
    if(!nickname){
      $('.zheng').removeClass('hidel')
    }
    else{
      window.location.href = './cart.html'
    }
     
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
