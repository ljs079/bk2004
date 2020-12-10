
$(function () {

  
  let info = null

  
  const id = getCookie('goods_id')
  const value=getCookie('goods_value')
  const ids=getCookie('goods_ids')

  getGoodsInfo()
  async function getGoodsInfo() {
    const xhr=new XMLHttpRequest()
    xhr.open('GET','/kx?skuId='+id)
    xhr.onload=function(){
        const goodsList = JSON.parse(xhr.responseText)
   info = goodsList.data.product


  

$('.xiangqing').html(info.productContent) 



}
    xhr.send()
   
   
  }
  getpicture()
  
    async function getpicture() {
      const xhr=new XMLHttpRequest()
      xhr.open('GET','/kx?skuId='+id)
      xhr.onload=function(){
          const goodsList = JSON.parse(xhr.responseText)
     info = goodsList.data.product
  
  
  $('.enlargeBox').html(`

  
  <div class="show">
  <img src="${ info.picUrl }" alt="" show="${ info.picUrl }" enlarge="${ info.picUrl }" style="position: absolute;" width="400">
    <div class="mask"></div>
  </div>
  <div class="list">
    <p class="active">
      <img src="${ info.picUrl }" alt="">
    </p>
  </div>
  <div class="enlarge"><img src="${ info.picUrl }" alt="" show="${ info.picUrl }" enlarge="${ info.picUrl }" style="position: absolute;" width="1000"></div>
`)

// 2. 商品详细信息渲染
$('.goodsInfo').html(`
  <p class="desc">${ info.description }</p>
 
  <p class="price">
    售价:<span class="text-danger">${value}</span>点券
  </p>

  <p class="desc2">${ info.description }</p>
  <div class="num">
  选择数量:
    <button class="subNum">-</button>
    <input type="text" value="1" class="cartNum">
    <button class="addNum">+</button>
  </div>
  <div class="anniubox" >
    <button class="btn btn-success addCart">加入购物车</button>
    <button class="btn btn-warning continue"><a href="./list.html">继续去购物</a></button>
  </div>
`)


$('.goodsDesc').html(info.goods_introduce)


  
 
  }
      xhr.send()
      
     
    }
    

   
   
  





 
  $('.goodsInfo').on('click', '.addCart', function () {



    const nickname = getCookie('nickname')
  
    if(!nickname){
      $('.zheng').removeClass('hidel')

      
    }
    else{
      
    
  
    const cart = JSON.parse(window.localStorage.getItem('cart')) || []
    info.value=value
    console.log(info)
    
    console.log(info.id)
    console.log(ids)
    
    const flag = cart.some(item => item.id === ids)
    
    if (flag) {
     
      const cart_goods = cart.filter(item => item.id === ids)[0]

     
      cart_goods.cart_number = cart_goods.cart_number - 0 + ($('.cartNum').val() - 0)
    } else {
      info.cart_number = 1
      
      cart.push(info)
    }

    window.localStorage.setItem('cart', JSON.stringify(cart))
  }
  })

 
  $('.goodsInfo')
    .on('click', '.subNum', function () {
     
      let num = $('.cartNum').val() - 0
     
      if (num === 1) return
      
      $('.cartNum').val(num - 1)
    })
    .on('click', '.addNum', function () {
    
      let num = $('.cartNum').val() - 0
     
      $('.cartNum').val(num + 1)
      console.log()
    })


})


$('.enlargeBox').on('mouseover','.show',function (e) {
  console.log(123)
  $('.enlarge').css('display', 'flex');
  $('.mask').css('display', 'block');
})

$('.enlargeBox').on('mousemove','.show',function (e) {


  var pageX = e.pageX;
  var pageY = e.pageY;
console.log(pageX)

  var offsetX = $('.show').offset().left;
  var offsetY = $('.show').offset().top;

var magOffsetX = $('.mask').width() / 2;
  var magOffsetY = $('.mask').height() / 2;
  
  var relativeX = pageX - offsetX;
  var relativeY = pageY - offsetY;
console.log(relativeX)
  
  $('.mask').css({ left: relativeX - magOffsetX + 'px',
      top: relativeY - magOffsetY + 'px' });

  var magX = $('.mask').position().left;
  var magY = $('.mask').position().top;
  
  var maxMagX = $('.show').width() - $('.mask').width()
  var maxMagY = $('.show').height() - $('.mask').height()

  

  if (magX <= 0) { magX = 0  }

  if (magX >= maxMagX) {magX=maxMagX  }

  if (magY <= 0) {magY = 0  }

  if (magY >= maxMagY) { magY= maxMagY  }
  $('.mask').css('left', magX);
  $('.mask').css('top', magY);

  


  var originX = (magX) * 4.0;
  var originY = (magY) * 4.0;
  $('.enlarge img').css({ left: -originX + 'px', top: -originY + 'px' });
})

$('.enlargeBox').on('mouseout','.show',function () {
  $('.enlarge').css('display', 'none');
  $('.mask').css('display', 'none');
})