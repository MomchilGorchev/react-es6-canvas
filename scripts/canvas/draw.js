export const drawOnCanvas = (canvas = null, window = null) => {

  if(window && canvas){

    const amount = 1000
    const WIDTH = canvas.width = window.innerWidth
    const HEIGHT = canvas.height = window.innerHeight
    const ctx = canvas.getContext('2d')
    const particles = []

    canvas.style.backgroundColor = 'black'

    const createParticle = (x, y, color, radius) => {
      return {
        ...this,
        x, y, radius, color,
        draw(ctx){
          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2, true)
          ctx.closePath()
          ctx.fillStyle = color
          ctx.fill()
        }
      }
    }

    for (let i = 0; i < amount; i++){
      const x = WIDTH * Math.random()
      const y = HEIGHT * Math.random()
      const radius = Math.random() * 2.5
      const color = 'white'
      const particle = new createParticle(x, y, color, radius)
      particles.push(particle)
    }

    particles.forEach(particle => particle.draw(ctx))
  }
}
