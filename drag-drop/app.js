const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// dragStart fonksiyonu içinde "invisible" sınıfını ekleyip 0 milisaniye sonra kaldırmak yerine, dragstart olayının verdiği verileri kullanarak verileri taşıyoruz.
function dragStart(e) {
  e.dataTransfer.setData('text/plain', ''); // Firefox'ta drag and drop'ı çalıştırmak için gereklidir
  this.className += ' hold';
  setTimeout(() => (this.className = 'fill invisible'), 0); // hold sınıfını ekleyip sonra kaldırmak için
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hover';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}
