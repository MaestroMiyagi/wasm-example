import init, { add, multiply } from '../pkg/wasm_example.js'

async function runWasm() {
  try {
    await init()

    const num1Input = document.getElementById('num1') as HTMLInputElement
    const num2Input = document.getElementById('num2') as HTMLInputElement
    const resultElement = document.getElementById(
      'result'
    ) as HTMLParagraphElement
    const addButton = document.getElementById('add') as HTMLButtonElement
    const multiplyButton = document.getElementById(
      'multiply'
    ) as HTMLButtonElement

    function updateResult(operation: (a: number, b: number) => number) {
      const a = parseFloat(num1Input.value)
      const b = parseFloat(num2Input.value)
      const result = operation(a, b)
      resultElement.textContent = result.toString()
    }

    addButton.addEventListener('click', () => updateResult(add))
    multiplyButton.addEventListener('click', () => updateResult(multiply))

    console.log('WebAssembly cargado correctamente')
  } catch (error) {
    console.error('Error al cargar WebAssembly:', error)
  }
}

runWasm()
