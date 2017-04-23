export const drawOnCanvas = (canvas = null, window = null) => {

    if(window && canvas){

        const amount = 500
        const WIDTH = canvas.width = window.innerWidth
        const HEIGHT = canvas.height = window.innerHeight
        const ctx = canvas.getContext('2d')
        const particles = []

        canvas.style.backgroundColor = 'black'

        const createParticle = (x, y, color, radius) => {
            return {
                ...this,
                x, y, radius, color,
                draw(ctx, nX, nY){
                    ctx.beginPath()
                    ctx.arc(nX || x, nY || y, radius, 0, Math.PI * 2, true)
                    ctx.closePath()
                    ctx.fillStyle = color
                    ctx.fill()
                }
            }
        }

        for (let i = 0; i < amount; i++){
            const x = WIDTH * Math.random()
            const y = HEIGHT * Math.random()
            const radius = Math.random() * 5
            const color = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`
            const particle = new createParticle(x, y, color, radius)
            particles.push(particle)
        }

        particles.forEach(particle => particle.draw(ctx))


        const animate = () => {
            ctx.clearRect(0, 0, WIDTH, HEIGHT)
            particles.forEach(particle => {
                particle.x = particle.x >= WIDTH ? 0 : particle.x + 2
                particle.y = particle.y >= HEIGHT ? 0 : particle.y + 2
                particle.draw(ctx, particle.x, particle.y)
                return particle
            })

            requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)

        // debugger
        animate()

    }
}
