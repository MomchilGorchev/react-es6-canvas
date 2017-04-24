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
                initX: x,
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
            const y = HEIGHT
            const radius = Math.random() * 5
            const color = 'white'
            // const color = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`
            const particle = new createParticle(x, y, color, radius)
            particles.push(particle)
        }
        particles.forEach(particle => particle.draw(ctx))

        const createPath = () => {
            const size = WIDTH / 3
            return size
        }

        const animate = () => {
            ctx.clearRect(0, 0, WIDTH, HEIGHT)
            particles.forEach((particle, index) => {
                particle.x = particle.x >= particle.initX ? particle.x - 5 : particle.x + Math.random() * 5
                particle.y = particle.y <= 0 ? HEIGHT : particle.y - Math.random() * particle.radius
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
