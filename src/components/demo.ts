import { ref, onMounted, onUnmounted, reactive, toRefs} from 'vue'
interface DataPros {
  x: number,
  y: number
}
function useMousePosition() {
    const data: DataPros = reactive({
      x: 0,
      y: 0
    })
    const updateMouse = (e: MouseEvent) => {
      data.x = e.pageX
      data.y = e.pageY
    }
    onMounted(() => {
      document.addEventListener('click', updateMouse)
      console.log(refData1)
    })
    onUnmounted(() => {
      document.addEventListener('click', updateMouse)
      console.log(refData1)
    })
    const refData1 = toRefs(data)
    return { refData1 }
}

export default useMousePosition
