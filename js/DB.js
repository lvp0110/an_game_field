/**-----------------------Выбор из меню и добавление разрезов конструкций------------------------------- */
/*Объет со списком конструкций*/
const Constructions = [
    {
        id: 100, 
        title: 'ПЕРЕГОРОДКИ',
        description: 'Название раздела',
        id_type: 'W'
    },
    {
        id: 101, 
        title: 'Перегородка на каркасе 50 мм',
        description: 'Перегородка на одинарном каркасе 50 мм',
        id_type: 'W'
    },
    {
        id: 102, 
        title: 'Перегородка на каркасе 75 мм',
        description: 'Перегородка на одинарном каркасе 75 мм',
        id_type :'W'
    },
    {
        id: 103, 
        title: 'Перегородка на каркасе 100 мм',
        description: 'Перегородка на одинарном каркасе 100 мм',
        id_type:'W'
    },
    {
        id: 104, 
        title: 'Перегородка на каркасе Wave 100 мм',
        description: 'Перегородка на одинарном каркасе Виброфлекс-Wave 100 мм',
        id_type:'W'
    },
    {
        id: 105, 
        title: 'Перегородка на каркасе 2x50 мм',
        description: 'Перегородка на двойном (независимом) сдвоенном каркасе 2x50 мм на раздельных основаниях звукоизолирующих полов',
        id_type:'W'
    },
    {
        id: 106, 
        title: 'Перегородка на каркасе 2x75 мм',
        description: 'Перегородка на двойном (независимом) сдвоенном каркасе 2x75 мм на раздельных основаниях звукоизолирующих полов',
        id_type:'W'
    },
    {
        id: 107, 
        title: 'Перегородка на каркасе 2x100 мм',
        description: 'Перегородка на двойном (независимом) сдвоенном каркасе 2x100 мм на раздельных основаниях звукоизолирующих полов',
        id_type:'W'
    },
    {
        id: 108, 
        title: 'Перегородка системы Саундлайн dB-X AL',
        description:'Перегородка системы Саундлайн dB-X AL на одинарном каркасе 50 мм',
        id_type:'W'
    },
    {
        id: 200, 
        title: 'ОБЛИЦОВКА',
        description: 'Название раздела',
        id_type:'L'
    },
    {
        id: 201, 
        title: 'ЗИПС-Вектор',
        description: 'Звукоизолирующая система ЗИПС-Вектор, смонтированная на стене',
        id_type:'L'
    },
    {
        id: 202, 
        title: 'ЗИПС-Модуль',
        description: 'Звукоизолирующая система ЗИПС-Модуль, смонтированная на стене',
        id_type:'L'
    },
    {
        id: 203, 
        title: 'ЗИПС-III-Ультра',
        description: 'Звукоизолирующая система ЗИПС-III-Ультра, смонтированная на стене',
        id_type:'L'
    },
    {
        id: 204, 
        title: 'ЗИПС-Z4',
        description: 'Звукоизолирующая система ЗИПС-Z4, смонтированная на стене',
        id_type:'L',
    },
    {
        id: 205, 
        title: 'ЗИПС-Синема',
        description: 'Звукоизолирующая система ЗИПС-Синема, смонтированная на стене',
        id_type:'L'
    },
    {
        id: 206, 
        title: 'ЗИПС-Слим',
        description: 'Звукоизолирующая система ЗИПС-Слим, смонтированная на стене',
        id_type:'L'
    },
    {
        id: 500, 
        title: 'ПОТОЛОК',
        description: 'Название раздела',
        id_type:'C'
    },
    {
        id: 201, 
        title: 'ЗИПС-Вектор',
        description: 'Звукоизолирующая система ЗИПС-Вектор, смонтированная на потолке',
        id_type:'C'
    },
    {
        id: 202, 
        title: 'ЗИПС-Модуль',
        description: 'Звукоизолирующая система ЗИПС-Модуль, смонтированная на потолке',
        id_type:'C'
    },
    {
        id: 203, 
        title: 'ЗИПС-III-Ультра',
        description: 'Звукоизолирующая система ЗИПС-III-Ультра, смонтированная на потолке',
        id_type:'C'
    },
    {
        id: 204, 
        title: 'ЗИПС-Z4',
        description: 'Звукоизолирующая система ЗИПС-Z4, смонтированная на потолке',
        id_type:'C',
    },
    {
        id:205, 
        title: 'ЗИПС-Синема',
        description: 'Звукоизолирующая система ЗИПС-Синема, смонтированная на потолке',
        id_type:'C'
    },
    {
        id: 401, 
        title: 'Облицовка на каркасе 50 мм',
        description: 'Облицовка на независимом сдвоенном каркасе 50 мм',
        id_type:'L'
    },
    {
        id: 402, 
        title: 'Облицовка на каркасе 75 мм',
        description: 'Облицовка на независимом каркасе 75 мм',
        id_type:'L'
    },
    {
        id: 403, 
        title: 'Облицовка на каркасе 100 мм',
        description: 'Облицовка на независимом каркасе 100 мм',
        id_type:'L'
    },
    {
        id: 404, 
        title: 'Облицовка c применением Виброфлекс-Коннект ПС',
        description: 'Облицовка на каркасе ПП 60/27 с применением креплений Виброфлекс-Коннект ПС',
        id_type:'L'
    },
    {
        id: 405, 
        title: 'Облицовка с применением Виброфлекс-КС',
        description: 'Облицовка на каркасе ПП 60/27 с применением креплений Виброфлекс-КС',
        id_type:'L'
    },
  
    {
        id: 501, 
        title: 'Потолок на креплениях Виброфлекс-Коннект ПП',
        description: 'Подвесной потолок, смонтированный на креплениях Виброфлекс-Коннект ПП',
        id_type:'C'
    },
    {
        id: 502, 
        title: 'Потолок на креплениях Виброфлекс-К15',
        description: 'Подвесной потолок, смонтированный на креплениях Виброфлекс-К15',
        id_type:'C'
    },
    {
        id: 503, 
        title: 'Потолок на креплениях Виброфлекс-К15 с удлинителями',
        description: 'Подвесной потолок, смонтированный на креплениях Виброфлекс-К15 с удлинителями из профиля ПП 60/27',
        id_type:'C'
    },
    {
        id: 600, 
        title: 'ПОЛ',
        description:'Название раздела',
        id_type:'F'
    },
    {
        id: 601, 
        title: 'Пол Акуфлекс-Супер, паркет, 15мм',
        description:'Паркетная доска 15 мм на материале Акуфлекс-Супер',
        id_type:'F'
    },
    {
        id: 602, 
        title: 'Пол Акуфлекс-Супер, ламинат, 8 мм',
        description: 'Ламинат 8 мм на материале Акуфлекс-Супер',
        id_type:'F'
    },
    {
        id: 603, 
        title: 'Пол Акуфлекс-Супер, стяжка, 65 мм',
        description:'Звукоизолирующий пол на материале Акуфлекс-Супер',
        id_type:'F'
    },
    {
        id: 604, 
        title: 'Пол Шуманет-100Комби',
        description: 'Звукоизолирующий пол на материале Шуманет-100Комби',
        id_type:'F'
    },
    {
        id: 605, 
        title: 'Пол Шуманет-100Гидро',
        description:'Звукоизолирующий пол на материале Шуманет-100Гидро',
        id_type:'F'
    },
    {
        id: 606, 
        title: 'Пол Шумопласт',
        description: 'Звукоизолирующая выравнивающая смесь Шумопласт',
        id_type:'F'
    },
    {
        id: 607, 
        title: 'Пол Шумостоп-С2/К2, один слой',
        description: 'Звукоизолирующий пол с одним слоем системы плит Шумостоп-С2/К2',
        id_type:'F'
    },
    {
        id: 608, 
        title: 'Пол Шумостоп-С2/К2, два слоя',
        description: 'Звукоизолирующий пол с двумя слоями системы плит Шумостоп-С2/К2',
        id_type:'F'
    },
    {
        id: 609, 
        title: 'Пол Шумостоп-К2, один слой',
        description: 'Звукоизолирующий пол с одним слоем материала Шумостоп-К2',
        id_type:'F'
    },
    {
        id: 610, 
        title: 'Пол Шумостоп-К2, два слоя',
        description: 'Звукоизолирующий пол с двумя слоями материала Шумостоп-К2',
        id_type:'F'
    },
    {
        id: 611, 
        title: 'Пол Шуманет-Термо',
        description: 'Звукоизолирующий пол с одним слоем материала Шуманет-Термо',
        id_type:'F'
    },
    {
        id: 612, 
        title: 'Пол Шумостоп-Техно',
        description: 'Звукоизолирующий пол с применением панелей Шумостоп-Техно',
        id_type:'F'
    },
    {
        id: 613, 
        title: 'ЗИПС-ПОЛ Вектор',
        descriptio: 'Сборная звукоизолирующая система ЗИПС-ПОЛ Вектор',
        id_type:'F'
    },
    {
        id: 614, 
        title: 'ЗИПС-ПОЛ Модуль',
        description: 'Сборная звукоизолирующая система ЗИПС-ПОЛ Модуль',
        id_type:'F'
    },
    {
        id: 615, 
        title: 'Звукоизолирующий пол на лагах',
        description:'Звукоизолирующий пол на лагах',
        id_type:'F'
    },
];

/*Добавление и заполнение из списка конструкций пунктов(option) в меню(select) выбора конструкций */ 
function prinOption (data,select) {
    let option = data.map((el)=>`<option value="${el.id}">${el.title}</option>`).join('');
    select.innerHTML = option;
}
/**Фильтрация наименований конструкций по типу */
function filtrData (data,param){
    return data.filter((el)=>el.id_type == param);
}
selects = document.querySelectorAll('select');/**Ссылка не все select выбора конструкций */

selects.forEach((element) => { /**Заполнение select названиями конструкций в соответствии с типом конструкций  */
    switch(element.name){
                case 'L':prinOption(filtrData(Constructions,'L'),element); break;
                case 'F':prinOption(filtrData(Constructions,'F'),element); break;
                case 'C':prinOption(filtrData(Constructions,'C'),element); break;
                case 'W':prinOption(filtrData(Constructions,'W'),element); break;
    }
}); 
/*--------------------Вставка изображений разрезов контркукций----------------------------  */
topWall = document.querySelector('#topWall');
bottomWall = document.querySelector('#bottomWall');
leftWall = document.querySelector('#leftWall');
rightWall = document.querySelector('#rightWall');

topCeil = document.querySelector('#ceiling_img');
bottomFloor = document.querySelector('#floor_img');
/*Объект изображений разрезов конструкций  */
const ImageCollection = [
 
    {
        id: 200, 
        imgV:'ConstrNew/label/C_ceiling_Zero.png',
        imgH:'ConstrNew/label/C_ceiling_Zero.png',
        imgC:'ConstrNew/label/C_ceiling_Zero.png',
    },
    {
        id: 201, 
        imgV:'ConstrNew/ZipsVertical/L_Z_Vektor_v.png',
        imgH:'ConstrNew/ZipsHrizont/L_Z_Vektorr_h.png',
        imgC:'ConstrNew/Ceiling/C_ceiling_Zips_vektor.png',
    },
    {
        id: 202, 
        imgV:'ConstrNew/ZipsVertical/L_Z_Modul_v.png',
        imgH:'ConstrNew/ZipsHrizont/L_Z_Modul_h.png',        
        imgC:'ConstrNew/Ceiling/C_ceiling_Zips_modul.png',
    },
    {
        id: 203, 
        imgV:'ConstrNew/ZipsVertical/L_Z_IIIUltra_v.png',
        imgH:'ConstrNew/ZipsHrizont/L_Z_IIIultra_h.png',
        imgC:'ConstrNew/Ceiling/C_ceiling_Zips_IIIultra.png',
    },
    {
        id: 204, 
        imgV:'ConstrNew/ZipsVertical/L_Z_Z4_v.png',
        imgH:'ConstrNew/ZipsHrizont/L_Z_Z4_h.png',
        imgC:'ConstrNew/Ceiling/C_ceiling_Zips_Z4.png',
    },
    {
        id: 205, 
        imgV:'ConstrNew/ZipsVertical/L_Z_Cinema_v.png',
        imgH:'ConstrNew/ZipsHrizont/L_Z_Cinema_h.png',
        imgC:'ConstrNew/Ceiling/C_ceiling_Zips_cinema.png',
    }, 
    {
        id: 206, 
        imgV:'ConstrNew/ZipsVertical/L_Z_Slim_v.png',
        imgH:'ConstrNew/ZipsHrizont/L_Z_Slim_h.png',
    }, 
    {
        id: 401, 
        imgH:'ConstrNew/Frame_H/L_Frame_50_h.png',
        imgV:'ConstrNew/Frame_V/1_L_Frame_50_v.png',
    },
    {
        id: 402, 
        imgH:'ConstrNew/Frame_H/L_Frame_50_h.png',
        imgV:'ConstrNew/Frame_V/1_L_Frame_50_v.png',
    },
    {
        id: 403, 
        imgH:'ConstrNew/Frame_H/L_Frame_100_h.png',
        imgV:'ConstrNew/Frame_V/4_L_Frame_100_v.png',
    },
    {
        id: 404, 
        imgH:'ConstrNew/Frame_H/L_Frame_PC_h.png',
        imgV:'ConstrNew/Frame_V/2_L_Frame_PC_v.png',
    },
    {
        id: 405, 
        imgH:'ConstrNew/Frame_H/L_Frame_KC_h.png',
        imgV:'ConstrNew/Frame_V/3_L_Frame_KC_v.png',
    },
    {
        id: 500, 
        imgC:'ConstrNew/label/C_ceiling_Zero.png',
    },
    {
        id: 501, 
        imgC:'ConstrNew/Ceiling/C_ceiling_100.png',
    },
    {
        id: 502, 
        imgC:'ConstrNew/Ceiling/C_ceiling_130.png',
    },
    {
        id: 503, 
        imgC:'ConstrNew/Ceiling/C_ceiling_130_udlin.png',
    },
    {
        id: 600, 
        imgF:'ConstrNew/label/C_ceiling_Zero.png',
    },
    {
        id: 601, 
        imgF:'ConstrNew/Floor/floor_acuflexS_parquet.png',
    },
    {
        id: 602, 
        imgF:'ConstrNew/Floor/floor_acuflexS_laminate.png',
    },
    {
        id: 603, 
        imgF:'ConstrNew/Floor/floor_acuflexS_screed.png',
    },
    {
        id: 604, 
        imgF:'ConstrNew/Floor/floor_Gidro_komby.png',
    },
    {
        id: 605, 
        imgF:'ConstrNew/Floor/floor_Gidro_komby.png',
    },
    {
        id: 606, 
        imgF:'ConstrNew/Floor/floor_SPlast.png',
    },
    {
        id: 607, 
        imgF:'ConstrNew/Floor/floor_C2K2.png',
    },
    {
        id: 608, 
        imgF:'ConstrNew/Floor/floor_C2K2_2.png',
    },
    {
        id: 609, 
        imgF:'ConstrNew/Floor/floor_K2.png',
    },
    {
        id: 610, 
        imgF:'ConstrNew/Floor/floor_K2_2.png',
    },
    {
        id: 611, 
        imgF:'ConstrNew/Floor/floor_Sumanet_termo.png',
    },
    {
        id: 612, 
        imgF:'ConstrNew/Floor/floor_Sumanet_techno.png',
    },
    {
        id: 613, 
        imgF:'ConstrNew/Floor/floor_Zips_vektor.png',
    },
    {
        id: 614, 
        imgF:'ConstrNew/Floor/floor_Zips_modul.png',
    },
    {
        id: 615, 
        imgF:'ConstrNew/Floor/floor_wooden beams.png',
    },
     
]

function imagesChange (){ /**Функция выбора изображений в соответствии с выбранным option(пунктом) */
   
    let imagePath = ImageCollection.find(el=>el.id == this.value);
    console.log(this.value);
    console.log(this.id);

    switch(this.id){
        case 'frame1':
            leftWall.setAttribute('src', imagePath.imgV);    
            console.log(leftWall.id);   
            break;
        case 'frame2':
            topWall.setAttribute('src', imagePath.imgH);
            break;
        case 'frame3':
            rightWall.setAttribute('src', imagePath.imgV);       
            break;
        case 'frame4':
            bottomWall.setAttribute('src', imagePath.imgH);       
            break;
        case 'ceiling':
            topCeil.setAttribute('src', imagePath.imgC);       
            console.log(imagePath.imgC);
            break; 
        case 'floor':
            bottomFloor.setAttribute('src', imagePath.imgF);       
            break;            
}
}

selects.forEach(select=>select.onchange = imagesChange);

 

  
        



