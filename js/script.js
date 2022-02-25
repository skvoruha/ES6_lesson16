// записываем в перменну select со странами
const country = document.getElementById('country')
//переменная с городами
const city = document.getElementById('city')

let result = document.querySelector('.result')


// получаем елемент select который сязан с cms
const cityСountry = {
  cityArr : {
    rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
    uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
    bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
    jap: ['Токио', 'Киото', 'Осака', 'Иокогама']
  },
  init: function(){
    // country.addEventListener('input',this.selectCheck.bind(this))
    country.addEventListener('change', this.selectCheck.bind(this))
    city.addEventListener('change', this.optionCity.bind(this))
  },
  optionCity: function(){
      result.textContent = country.options[country.selectedIndex].textContent + ' ' + city.options[city.selectedIndex].textContent
  },
  selectCheck: function(){
    // очищаем массив с веденными данными
    for (let i = city.length - 1; i > -1; i--) {
        city[i].remove();
    }
    // записываем в переменную зачtybst select -> option.value
    const selectValue = country.options[country.selectedIndex].value
    // показать, тот массив со занчение selectValue
      // перебор массива
    this.cityArr[selectValue].forEach(element => {
        // делаем отображение select inline
        city.style.display = 'inline'
        // создаём новый элеент option
        const newElem = document.createElement('option')
        // присваиваем новому элементу текст объекта
        newElem.textContent = element
        // добавляем новый элемент в спсок
        city.append(newElem)
    });
    // const selectCityValue = city.options[city.selectedIndex].value
    // console.log(selectCityValue);

  },

}

cityСountry.init()