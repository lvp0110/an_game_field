/* Реализация случайного выбора типа помещения */
let b = new Array() /**Объект с изображениями помещений */
    b[0] = /**Изображение Монолитный дом */
    `<div class="quest"> 
    <!-- <img style = "
            height: 15px;
            margin-left: -324px;
            margin-top: 986px;
            transform: rotate(270deg);
            z-index: 1;" src="z-vektor.png" alt="">
        <img style = "height: 15px;
            margin-left: -324px;
            margin-top: 846px;
            transform: rotate(270deg);
            z-index: 1;" 
            src="z-vektor.png" alt="">-->
    <img style = "height: 509px;
    width: 709px;;margin-left: -302px;margin-top: 726px;" src="apart_image/t1.png" alt="">
    <img style = "height: 450px;margin-left: 450px;margin-top: 725px;" src="apart_image/t4.1.png" alt="">
    <span style = "border: solid 1px;
        padding: 13px;
        margin-left: -125px;
        border-radius: 30px;
        margin-top: -26px;
        color: orange;
        text-align: center;
        height: 43px;
        width: 285px;">Монолитный дом
    </span>
    <span style = "margin-left: 530px;margin-top: 20px;">потолок</span>
    <span style = "margin-left: -20px;margin-top: 20px;"> 2 - монолитная стена , 200 мм</span>
    <span style = "margin-left: -418px;margin-top: 210px;transform: rotate(270deg);"> 1 - пеноблок , 200 мм</span>
    <span style = "margin-left: 325px;margin-top: 340px;transform: rotate(90deg);"> 3 - пеноблок , 200 мм</span>
    <span style = "margin-left: 5px;margin-top:550px;"> 4 - пеноблок , 200 мм</span>
    <span style = "margin-left: 520px;margin-top: 500px;"> перекрытие<br>монолит , <br>200 мм</span>
    </div>`
    b[1] = /**Изображение Старый кирпичный дом */
    `<div class="quest"> 
    <img  style = "    height: 505px;
    width: 708px;
    margin-left: -302px;
    margin-top: 728px;"src="apart_image/t2.png" alt="">
    <img  style = "height: 450px;margin-left: 450px;margin-top: 725px;"src="apart_image/t4.2.png" alt="">
    <span style = "border: solid 1px;
        padding: 13px;
        margin-left: -125px;
        border-radius: 30px;
        margin-top: -26px;
        color: orange;
        text-align: center;
        height: 43px;
        width: 285px;">Старый кирпичный дом
    </span>
    <span style = "margin-left: 530px;margin-top: 20px;">потолок</span>
    <span style = "margin-left: -9px;margin-top: 20px;"> 2 - кирпичная стена , 380 мм</span>
    <span style = "margin-left: -420px;margin-top: 250px;transform: rotate(270deg);"> 1 - Каркасная деревянная стена <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;со штукатуркой по дранке</span>
    <span style = "margin-left: 323px;margin-top: 295px;transform: rotate(90deg);"> 3 - кирпичная стена , 380 мм</span>
    <span style = "margin-left: -50px;margin-top: 543px;"> 4 - Каркасная деревянная стена<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;со штукатуркой по дранке</span>
    <span style = "margin-left: 504px;margin-top: 490px;">монолитная ж/б<br>плита<br> по профнастилу<br>и металлическим <br>балкам , 140 мм</span>
    </div>`
    b[2] = /**Изображение Панельный дом */
     `<div class="quest"> 
    <img style = "
        height: 505px;
        width: 708px;
        margin-left: -302px;
        margin-top: 728px;"
    src="apart_image/t3.png" alt="">
    <img style = "height: 450px;margin-left: 450px;margin-top: 725px;" src="apart_image/t4.3.png" alt="">
    <span style = "border: solid 1px;
        padding: 13px;
        margin-left: -125px;
        border-radius: 30px;
        margin-top: -26px;
        color: orange;
        text-align: center;
        height: 43px;
        width: 285px;">панельный дом 
    </span>
    <span style = "margin-left: 525px;margin-top: 18px;">потолок</span>
    <span style = "margin-left: -7px;margin-top: 20px;"> 2 - ж/б панель , 180 мм</span>
    <span style = "margin-left: -420px;margin-top: 190px;transform: rotate(270deg);"> 1 - ж/б панель , 180 мм</span>
    <span style = "margin-left: 344px;margin-top: 250px;transform: rotate(90deg);width: max-content;"> 3 - фасадная ж/б панель , 200 мм</span>
    <span style = "margin-left: -5px;margin-top: 550px;"> 4 - ж/б панель , 180 мм</span>
    <span style = "margin-left: 508px;margin-top: 500px;">пустотная ж/б<br>плита , 220 мм</span>
    </div>`

let btnApart = document.getElementById('butt_choose_apart');/**кнопка выбора ВЫБРАТЬ ВАРИАНТ КВАРТИРЫ */
let apartBlock = document.getElementById('block_apart');/**Разметка расположения стен помещения */

/**фуннкция случайного выбора помещения */
function RandomApart (){
    return b[Math.floor(Math.random()* b.length)]
} 
/**Ожидание события нажатия кнопки ВЫБРАТЬ ВАРИАНТ КВАРТИРЫ */
btnApart.onclick =function(){
    apartBlock.innerHTML = RandomApart();
    apartBlock.style.opacity ='1';
}



