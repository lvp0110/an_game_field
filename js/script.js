/*Реализация случайного выбора вопроса */
 let a = new Array() /**Объект с вопросами */
    a[0] = `
    <div class="question" id = "return_apart">
    <p id ='rel'>
    Беспокоит шум от инженерного оборудования на последнем тех. этаже и ударный шум из МОП</p> 
    <p class="roof">Чиллеры и крышное оборудование<br>
    Вентиляционное оборудование<br>
    Насосное оборудование<br>
    Лифтовая лебедка и шкаф управление</p>
    <p class="mop" id = "q1">Ударный шум из МОП</p>
    <p class="n1" id = "q1">1</p>
    <div class="mop_box"></div> 
    <div class="roof_box"></div>
    </div>`
    a[1] = `<div class="question" id = "return_apart"> 
    <p>Строится домашняя музыкальная студия</p>
    <p class="mop" style="color: white;" id = "q1">""</p>
    <p class="n2" id = "q1">2</p>
    </div>`
    a[2] = `<div class="question" id = "return_apart"> 
    <p">Беспокоит топот соседей сверху и сбоку из МОП</p>
    <p class="mop" id = "q1">Ударный шум из МОП</p>
    <p class="n3" id = "q1">3</p>
    <div class="mop_box_2"></div>
    <div class="roommates_box"></div>
    </div>`
    a[3] = `<div class="question" id = "return_apart"> 
    <p>Нужна максимальная звукоизоляция всей квартиры</p>
    <p class="mop" style="color: white;" id = "q1">''</p>
    <p class="n4" id = "q1">4</p>
    </div>`
    a[4] = `<div class="question" id = "return_apart"> 
    <p>Беспокоит топот из детского центра, расположенного на 1 этаже,а ночью беспокоит шум метро</p>
    <p class="child_center" id = "q1">Детский центр</p>
    <p class="metro" id = "q1">Тонель метро</p>
    <p class="n5" id = "q1">5</p>
    <div class="child_center_box"></div> 
    <div class="metro_box"></div> 
    </div>`
    a[5] =`<div class="question" id = "return_apart"> 
    <p>Беспокоит шум от самолетов и автострады под окнами</p>
    <p class="airplane" id = "q1">Шум самолетов
    </p>
    <p class="motorway"id = "q1">Автострада</p>
    <p class="n6" id = "q1">6</p>
    <div class="question_box6"></div> 
    <div class="question_box6_1"></div> 
    </div>`
    a[6] =  `<div class="question" id = "return_apart"> 
    <p>Нужны самые тонкие решения для комплексной звукоизоляции</p>
    <p class="mop" style="color: white;" id = "q1">''</p>
    <p class="n7" id = "q1">7</p>
    </div>`
    a[7] = `<div class="question" id = "return_apart"> 
    <p>Беспокоит шум инженерного оборудования пристройки</p>
    <p class="outdoor_unit">Внешние блоки кондиционеров караоке<br> и детского центра</p>
    <p class="n8" id = "q1">8</p>
    <div class="outdoor_unit_box" id = "q1"></div> 
    </div>`
    a[8] = `<div class="question" id = "return_apart"> 
    <p>Слышно движение кабины лифта за стеной ( шахта примыкает к квартире ) и слышна собака</p>
    <p class="elevator" id = "q1">Шахта лифта</p>
    <p class="dog" id = "q1">Лает и прыгает собака</p>
    <p class="n9" id = "q1">9</p>
    <div class="mop_box_1"></div>
    <div class="dog_box"></div> 
    </div>` 
    a[9] = `<div class="question" id = "return_apart"> 
    <p>Беспокоит караоке клуб, расположенный на 2 этаже</p>
    <p class="karaoke" id = "q1">Караоке клуб</p>
    <p class="n10" id = "q1">10</p>
    <div class="karaoke_box"></div> 
    </div>` 
    a[10] = `<div class="question" id = "return_apart"> 
    <p>Беспокоит шум кондиционера нижнего соседа</p>
    <p class="air_сonditioner" id = "q1">Внешний блок кондиционеров</p>
    <p class="n11" id = "q1">11</p>
    <div class="air_сonditioner_box"></div> 
    </div>`   
    a[11] =`<div class="question" id = "return_apart" id ="qu1"> 
    <p>
    Беспокоит шум инженерного оборудования и в особенности VRV блока кондиционера</p>
    <p class="roof">Чиллеры и крышное оборудование<br>
    Вентиляционное оборудование<br>
    Насосное оборудование<br>
    Лифтовая лебедка и шкаф управление</p>
    <p class="VRV" id = "q1">VRV блоки <br>кондиционеров</p>
    <p class="n12" id = "q1">12</p>
    <div class="VRV_сonditioner_box"></div> 
    <div class="roof_box_1"></div>
    </div>` 
let btn = document.getElementById('butt_choose');/**Кнопка ВЫБРАТЬ ВОПРОС */
let btn1 = document.getElementById('butt_noise');/**Кнопка ПЕРЕЙТИ К РЕШЕНИЮ */
let p = document.getElementById('p1');/**Поле отображения выбранного вопроса */

let block = document.getElementById('ba');/**Блок поля выбора решений */
let mainPage = document.getElementById('main_page');/**Кнопка возврата на главную */

function Random (){ /**Функция выбора вопроса */
       return a[Math.floor(Math.random()* a.length)]
} 
/**Ожидание события нажатия кнопки ВЫБРАТЬ ВОПРОС */
btn.onclick = function(){
    p.innerHTML = Random();
    p.style.opacity ='1';
}
/*Измение стилей при переходе на страницу решений*/
btn1.onclick = function(){
    p.style.opacity ='0.6';
    p.style.marginTop = '-180px';
    p.style.width = '1050px';
    p.style.marginLeft = '810px'
    block.style.display = 'flex';
    btn.style.display = 'none';
    btn1.style.display = 'none';   
}
/*Измение стилей при переходе на гланую страницу*/
mainPage.onclick = function(){
    p.style.display ='block';    
    p.style.opacity ='1';   
    p.style.width = '1230px';
    p.style.marginTop = '-270px';   
    p.style.marginLeft = '30%';
    block.style.display = 'none';
    btn.style.display = 'block';
    btn1.style.display = 'block';
    p.style.zIndex = '1';
}


