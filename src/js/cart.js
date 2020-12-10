
$(function () {

  
  const nickname = getCookie('nickname')
  if (!nickname) return window.location.href = './index.html'

  
  const cart = JSON.parse(window.localStorage.getItem('cart')) || []


  if (!cart.length) {
    
    $('.on').addClass('hides')
    $('.off').removeClass('hides')
    return
  }

  
  $('.off').addClass('hides')
  $('.on').removeClass('hides')

 
  bindHtml()
  function bindHtml() {
    
    const selectAll = cart.every(item => item.is_select === '1')
    
    let total = 0
    let totalMoney = 0
    cart.forEach(item => {
      if (item.is_select === '1') {
        total += item.cart_number - 0
        totalMoney += item.cart_number * item.value
      }
    })

    let str = `
      <div class="panel panel-info">
        <div class="panel-heading">
          <p class="selectAll">
            <span>全选:</span>
            <input type="checkbox" ${ selectAll ? 'checked' : '' }>
            
          </p>
        </div>
        <div class="panel-body">
          <ul class="goodsList">
    `

    cart.forEach(item => {
      str += `
        <li>
          <div class="select">
            <input data-id="${ item.id }" type="checkbox" ${ item.is_select === '0' ? '' : 'checked' }>
          </div>
          <div class="goodsImg">
            <img src="${ item.picUrl }" alt="">
          </div>
          <div class="goodsDesc">
            <p>${ item.productName }</p>
          </div>
          <div class="price">
            ￥ <span class="text-danger">${ item.value}</span>
          </div>
          <div class="count">
            <button class="subNum" data-id="${ item.id }">-</button>
            <input type="text" value="${ item.cart_number }">
            <button class="addNum" data-id="${ item.id }">+</button>
          </div>
          <div class="xiaoji">
            ￥ <span class="text-danger">${ (item.value * item.cart_number).toFixed(2) }</span>
          </div>
          <div class="operate">
            <button class="btn btn-danger del" data-id="${ item.id }">删除</button>
          </div>
        </li>
      `
    })

    str += `
          </ul>
        </div>
        <div class="panel-footer">
          <div class="row buyInfo">
            <p class="col-sm-4 buyNum">
              购买总数量: <span class="text-danger cartNum">${ total }</span> 件商品
            </p>
            <p class="col-sm-4 buyMoney">
              购买总价格: <span class="text-danger total">${ totalMoney.toFixed(2) }</span> 元
            </p>
            <p class="col-sm-4 operate">
              <button class="btn btn-success" ${ totalMoney === 0 ? 'disabled' : '' }>立即付款</button>
              <button class="btn btn-danger">清空购物车</button>
              
            </p>
          </div>
        </div>
      </div>
    `

    
    $('.on').html(str)
  }
  $('.on').on('click', '.selectAll > input', function () {
    
    const type = this.checked

   
    cart.forEach(item => {
      item.is_select = type ? '1' : '0'
    })
    
    
   
  
    bindHtml()
    
    window.localStorage.setItem('cart', JSON.stringify(cart))
  })



 
  $('.on').on('click', '.select > input', function () {
   
    const type = this.checked
   
    const id = $(this).data('id')
   
    const info = cart.filter(item => item.id == id)[0]
    info.is_select = type ? '1' : '0'
   
    bindHtml()
    
    window.localStorage.setItem('cart', JSON.stringify(cart))
  })

  
  $('.on').on('click', '.addNum', function () {
    
    const id = $(this).data('id')
    
    const info = cart.filter(item => item.id == id)[0]
    
    info.cart_number = info.cart_number - 0 + 1
    
    bindHtml()
   
    window.localStorage.setItem('cart', JSON.stringify(cart))
  })

 
  $('.on').on('click', '.subNum', function () {
    
    const id = $(this).data('id')
    
    const info = cart.filter(item => item.id == id)[0]
   
    if (info.cart_number === 1) return
    
    info.cart_number = info.cart_number - 0 - 1
    
    bindHtml()
    
    window.localStorage.setItem('cart', JSON.stringify(cart))
  })

  
  $('.on').on('click', '.del', function () {
    
    const id = $(this).data('id')
    
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == id) {
        cart.splice(i, 1)
        break
      }
    }

    

    
    bindHtml()
    
    window.localStorage.setItem('cart', JSON.stringify(cart))

    if (!cart.length) return window.location.reload()
  })
  $('.on').on('click','.btn-danger',function(){


     
      window.localStorage.removeItem('cart')
      window.location.reload()
      bindHtml()
      
     

    })
})

