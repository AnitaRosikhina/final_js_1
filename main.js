let edit = document.querySelector('.edit')
let menu = document.querySelector('.menu')
let textarea = document.querySelector('textarea')
let result = document.querySelector('.result')
let save  = document.querySelector('.save')
let formStyle = document.forms.form_style
let style = document.querySelector('.style')
let btnStyle = document.querySelector('.btn_style')
let colorText = document.querySelector('.color_text')
let colorBlock = document.querySelector('.block_color_text')
let boxes = document.querySelectorAll('.box')
let colorBg = document.querySelector('.color_bg')
let bold = document.forms.form_style.bold
let cursive = document.forms.form_style.cursive
let add = document.querySelector('.add')
let btnEditStyle = document.querySelector('.btn_edit_style')
let blockTableList = document.querySelector('.table_list')
let table = document.querySelector('.table_block')
let btnTable = document.querySelector('.btn_table')
let btnCreateTable = document.querySelector('.btn_create_table')
let btnList = document.querySelector('.btn_list')
let list = document.querySelector('.list_block')
let btnCreateList = document.querySelector('.btn_create_list')

edit.addEventListener('click', () => {
    menu.classList.add('d_block')
    textarea.value = result.innerHTML
    style.classList.remove('flex')
    colorBlock.classList.remove('grid')
})

save.addEventListener('click', () => {
    result.innerHTML = textarea.value
    menu.classList.add('none')
    menu.classList.remove('d_block')
})

formStyle.addEventListener('click', function (event) {
    if(event.target.name === 'flexRadioDefault') {
        result.style.fontSize = event.target.value
    }
    if (event.target.name === 'select') {
        result.style.fontFamily = event.target.value
    }
})

btnStyle.addEventListener('click', () => {
    style.classList.add('flex')
    menu.classList.remove('d_block')
})

let colorTextOrBg

colorText.addEventListener('click', () => {
    colorTextOrBg = 'color'
    colorBlock.classList.remove('none')
    colorBlock.classList.add('grid')
})

colorBg.addEventListener('click', () => {
    colorTextOrBg = 'background'
    colorBlock.classList.remove('none')
    colorBlock.classList.add('grid')
})

boxes.forEach(el => {
    el.addEventListener('click', function() {
        let style = getComputedStyle(this)
        result.style[colorTextOrBg] = style.backgroundColor
        colorBlock.classList.remove('grid')
    })
});

bold.addEventListener('click', function() {
    if(this.checked) {
        result.style.fontWeight = 'bold'

    } else {
        result.style.fontWeight = 'normal'
    }
})

cursive.addEventListener('click', function () {
    if(this.checked) {
        result.style.fontStyle = 'italic'

    } else {
        result.style.fontStyle = 'normal'
    }
})

add.addEventListener('click', () => {
    result.classList.add('none')
    btnEditStyle.classList.add('none')
    blockTableList.classList.add('d_block')
    menu.classList.remove('d_block')
})

btnTable.addEventListener('click', () => {
    table.classList.add('d_block')
    list.classList.remove('d_block')
})

btnCreateTable.addEventListener('click', function () {
    let countTr = document.querySelector('.count_tr').value
    let countTd = document.querySelector('.count_td').value
    let widhtTd = document.querySelector('.widht_td').value
    let heightTd = document.querySelector('.height_td').value
    let widhtBorder = document.querySelector('.widht_border').value
    let typeBorder = document.querySelector('.type_border').value
    let colorBorder = document.querySelector('.color_border').value
    textarea.value += `<table style="border: ${widhtBorder}px ${typeBorder} ${colorBorder}">
        ${`<tr>
              ${`<td style="height: ${heightTd}px; width: ${widhtTd}px; border: ${widhtBorder}px ${typeBorder} ${colorBorder}">TD</td>`.repeat(countTd)}
           </tr>`.repeat(countTr)
        }
    </table>`
    table.classList.remove('d_block')
    result.classList.remove('none')
    blockTableList.classList.remove('d_block')
    menu.classList.add('d_block')
    btnEditStyle.classList.remove('none')
})

btnList.addEventListener('click', () => {
    list.classList.add('d_block')
    table.classList.remove('d_block')
})

btnCreateList.addEventListener('click', function () {
    let countLi = document.querySelector('.сount_li').value
    let typeMark = document.querySelector('.type_marks').value
    console.log(countLi, typeMark)
    textarea.value += `<ol style="list-style-type: ${typeMark}">
        ${`<li>item</li>`.repeat(countLi)}
    </ol>`
    list.classList.remove('d_block')
    result.classList.remove('none')
    blockTableList.classList.remove('d_block')
    menu.classList.add('d_block')
    btnEditStyle.classList.remove('none')
})







