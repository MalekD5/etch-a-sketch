function css(element, style) {
      for (const property in style)
          element.style[property] = style[property];
}

const container = document.querySelector('.container');


let size = parseInt(window.getComputedStyle(container).width, 10);
let grid = 16;

console.log(size)


css(container, {
      'grid-template-columns': `repeat( auto-fit, ${size/grid}px)`,
});

const setup = () => {
  for (let i = 0; i < grid ** 2; i++) {
      const div = document.createElement('div');
      div.classList.add('special');

      Object.assign(div.style, {
            height: `${size/grid - 2}px`,
            width: `${size/grid - 2}px`,
          });

      div.addEventListener("mouseover", () => {
        div.classList.add("colored");
      });

      container.appendChild(div);
  }
};

const removeAll = () => {
      document.querySelectorAll('.special').forEach(d => d.remove());
      setup();
}

const button = document.querySelector('#submit');
const input = document.querySelector('#input');
button.addEventListener('click', () => {
      grid = input.value;
      removeAll()
});

const resetbutton = document.querySelector('#reset');
resetbutton.addEventListener('click', () => {
      removeAll()
})

setup();