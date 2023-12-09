export function initializeSelect() {
  const customSelects = document.querySelectorAll('.custom-select');

  customSelects.forEach(select => {
    const options = select.querySelectorAll('option');
    
    const container = document.createElement('div');
    container.classList.add('select');

    const mainButton = document.createElement('div');
    mainButton.classList.add('select__main');
    container.appendChild(mainButton);

    const icon = document.createElement('div');
    icon.classList.add('select__icon');
    container.appendChild(icon);

    const list = document.createElement('ul');
    list.classList.add('select__list');

    options.forEach(option => {
      const listItem = document.createElement('li');
      listItem.textContent = option.textContent;
      listItem.addEventListener('click', () => {
        mainButton.textContent = option.textContent;
        select.value = option.value;
        list.style.display = 'none';

        list.querySelectorAll('li').forEach(item => {
          item.classList.remove('selected');
        });

        listItem.classList.add('selected');
      });
      list.appendChild(listItem);
    });

    container.appendChild(list);
    select.style.display = 'none';
    select.insertAdjacentElement('afterend', container);

    mainButton.addEventListener('click', () => {
      document.querySelectorAll('.select__list').forEach(otherList => {
        if (otherList !== list) {
          otherList.style.display = 'none';
        }
      });

      list.style.display = (list.style.display === 'none' || list.style.display === '') ? 'block' : 'none';
      container.classList.toggle('opened');
    });
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.closest('.select')) {
      document.querySelectorAll('.select__list').forEach(list => {
        list.style.display = 'none';
      });
      document.querySelectorAll('.select').forEach(container => {
        container.classList.remove('opened');
      });
    }
  });
}
