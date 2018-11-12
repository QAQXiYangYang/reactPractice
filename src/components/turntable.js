const noPrize = 'https://user-gold-cdn.xitu.io/2018/10/15/16677fb978eb1538?w=128&h=128&f=png&s=6861'

export default class Turntable {
  constructor(options) {
    this.canvas = options.canvas
    this.context = options.context
    this.startRadian = 0

  }
  drawPanel() {
    const canvas = this.canvas
    const context = this.context
    // 保存当前画布的状态,使用restore调用后,保证了当前
    // 绘制不受之前绘制的影响
    context.save()
    // 新建一个路径,画笔的位置回到默认的坐标(0,0)的位置
    // 保证了当前的绘制不会影响到之前的绘制
    context.beginPath()
    // 设置填充转盘用的颜色,fill是填充而不是绘制.
    context.fillStyle = '#FD6961'
    // 绘制一个圆,有六个参数,分别表示:圆心的x坐标,圆心的
    // y坐标,圆的半径,开始绘制的角度,结束的角度,绘制方向
    // (false表示顺时针)
    context.arc(150, 150, 150, 0, Math.PI * 2, false)
    // 将我们设置的颜色填充到圆中,这里不用closePath是因
    // 为closePath对fill无效.
    context.fill()

    // 将画布的状态恢复到我们上一次save()时的状态
    context.restore()
  }
  drawPrizeBlock(){
    const context = this.context
    let startRadian = this.startRadian, RadianGap = Math.PI * 2 / 6, endRadian = startRadian + RadianGap
    for (let i = 0; i < 6; i++) {
      context.save()
      context.beginPath()
      context.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16)
      context.moveTo(150, 150)
      context.arc(150, 150, 140, startRadian, endRadian, false)
      context.fill()
      context.restore()
      context.save()
      context.translate(
        150 + Math.cos(startRadian + RadianGap / 2) * 140,
        150 + Math.sin(startRadian + RadianGap / 2) * 140
      )
      context.rotate(startRadian + RadianGap / 2 + Math.PI / 2)
      context.restore()

      startRadian += RadianGap
      endRadian += RadianGap
    }


  }
  windowToCanvas(canvas, e) {
    const canvasPostion = canvas.getBoundingClientRect(), x = e.clientX, y = e.clientY
    return {
      x: x - canvasPostion.left,
      y: y - canvasPostion.top
    }
  };
  startRotate() {
    const canvas = this.canvas
    const context = this.context
    const canvasStyle = canvas.getAttribute('style');
    this.render()
    canvas.addEventListener('mousedown', e => {

      //if (!this.canBeClick) return
     // this.canBeClick = false
      let loc = this.windowToCanvas(canvas, e)
      context.beginPath()
      context.arc(150, 150, 30, 0, Math.PI * 2, false)
    //
        this.startRadian = 0
        const distance = this.distanceToStop()
        this.rotatePanel(distance)
     // }
    })
  }
  rotatePanel(distance) {
    this.startRadian += Math.PI / 180
    this.render()
    window.requestAnimationFrame(this.rotatePanel.bind(this, distance));
  }
  distanceToStop() {
    console.log('distanceToStop')
  };
  render() {
    this.drawPanel()
    this.drawPrizeBlock()
  }
}
