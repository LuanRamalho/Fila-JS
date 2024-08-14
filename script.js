let queue = [];
let maxSize = 0;

function createQueue() {
    const sizeInput = document.getElementById('queue-size');
    maxSize = parseInt(sizeInput.value);
    if (isNaN(maxSize) || maxSize <= 0) {
        alert("Por favor, insira um tamanho válido para a fila.");
        return;
    }
    queue = [];
    updateQueueDisplay();
}

function enqueue() {
    const elementInput = document.getElementById('element');
    const element = elementInput.value;
    if (element === '') {
        alert("Por favor, insira um elemento para adicionar.");
        return;
    }
    if (queue.length >= maxSize) {
        alert("A fila já atingiu o tamanho máximo.");
        return;
    }
    queue.push(element);
    elementInput.value = '';
    updateQueueDisplay();
}

function dequeue() {
    if (queue.length === 0) {
        alert("A fila está vazia.");
        return;
    }
    queue.shift();
    updateQueueDisplay();
}

function updateQueueDisplay() {
    const queueElements = document.getElementById('queue-elements');
    const elementCount = document.getElementById('element-count');
    queueElements.innerHTML = '';
    queue.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element;
        queueElements.appendChild(li);
    });
    elementCount.textContent = queue.length;
}
