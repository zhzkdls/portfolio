/*------------------------------*\
|* Main Canvas
\*------------------------------*/

class Canvas {
    constructor() {
        // setup a canvas
        this.canvas = document.getElementById('canvas');
        this.dpr = window.devicePixelRatio || 1;
        // this.dpr = 1;
        
        this.radius = 4 * this.dpr;
        this.spread = this.radius * 3 / this.dpr;
        
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(this.dpr, this.dpr);
    
        this.mouse = {
            x: 0,
            y: 0,
        };
        
        this.setCanvasSize = this.setCanvasSize.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleMouse = this.handleMouse.bind(this);
        this.render = this.render.bind(this);
        
        this.setCanvasSize();
        this.setupListeners();
        
        this.constructLines();
        
        this.tick = 0;
        this.render();   
    }
    
    constructLines() {
        const padding = 60 * this.dpr;
        const hs = this.radius / 4;
        const dy = (this.canvas.height - padding * 2) / hs / this.spread;
        const amount = Math.ceil(dy);
        // console.log(amount);
        this.lines = new Array(amount)
            .fill(null)
            .map((l, i) => {
                const p1 = new Point(
                    padding,
                    padding + i * hs * this.spread
                );
            
                const p2 = new Point(
                    this.canvas.width - padding,
                    padding + i * hs * this.spread
                );

                return new Line(Math.floor(this.canvas.width / hs / dy), p1, p2);    
            });
    }
    
    updateVerts() {
        this.lines.map((line, i) => {
            const l = line.vertices.length;
            const r = 1 / l;
            line.vertices.map((p, i) => 
                p.moveTo(
                    p.x,
                    p.y + Math.cos((this.tick) / 10 + i) * this.dpr * 1
                )
            );
        });
    }
    
    setupListeners() {
        window.addEventListener('resize', this.setCanvasSize);
        window.addEventListener('click', this.handleClick);
        window.addEventListener('mousemove', this.handleMouse);
    }
    
    handleClick(event) {
        const { x, y } = event.clientX;
    }
    
    handleMouse(event) {
        const x = event.clientX * this.dpr;
        const y = event.clientY * this.dpr;
        this.mouse = { x, y };
    }
    
    setCanvasSize() {
        this.canvas.width = window.innerWidth * this.dpr;
        this.canvas.height = window.innerHeight * this.dpr;
        this.canvas.style.width = window.innerWidth + 'px';
        this.canvas.style.height = window.innerHeight + 'px';
        
        this.constructLines();
    }
    
    drawBackground() {
        const gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
        gradient.addColorStop(0, '#ecdad1');
        gradient.addColorStop(1, '#ecdad1');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); 
    }
    
    drawText() {
        const size = this.canvas.width / 12;
        this.ctx.font = `bold ${size}px Futura`;
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillText('Swim', this.canvas.width / 2, this.canvas.height / 2 + size / 2);
    }
    
    drawLines() {
        this.lines.forEach(line => {
            this.ctx.beginPath();
            this.ctx.strokeStyle = 'white';
            this.ctx.lineWidth = 2 * this.dpr;
            this.ctx.moveTo(
                line.p1.x,
                line.p1.y
            );
            this.ctx.lineTo(
                line.p2.x,
                line.p2.y
            );
            this.ctx.stroke();
        });
    }
    
    drawCurve() {
        this.ctx.lineCap = 'round';
        this.ctx.lineWidth = 3 * this.dpr;
        
        for (let i = 0; i < this.lines.length; i++) {
            const line = this.lines[i];
            
            this.ctx.strokeStyle = i % 2 === 0 ? '#abecd6' : '#ffafbd';
            
            this.ctx.beginPath();
            this.ctx.moveTo(
                line.vertices[0].x,
                line.vertices[0].y
            );
            
            for (let k = 0; k < line.vertices.length - 1; k++) {
                
                const p1 = line.vertices[k];
                const p2 = line.vertices[k + 1];

                const cpx = (p1.x + p2.x) / 2;
                const cpy = (p1.y + p2.y) / 2;

                if (k === line.vertices.length - 2) {
                    this.ctx.quadraticCurveTo(
                        p1.x,
                        p1.y,
                        p2.x,
                        p2.y
                    );
                } else {
                    this.ctx.quadraticCurveTo(
                        p1.x,
                        p1.y,
                        cpx,
                        cpy
                    );
                }

            }
            
            this.ctx.stroke();
        }   
    }
    
    drawVerts() {
        this.lines.forEach(line => {
            this.ctx.lineWidth = 2 * this.dpr;
            this.ctx.strokeStyle = '#222222';
            // this.ctx.globalCompositeOperation = 'overlay';
            
            line.vertices.forEach(p => {
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, this.radius, 0, Math.PI * 2, true);
                this.ctx.closePath();
                this.ctx.stroke();
            });
            
            // this.ctx.globalCompositeOperation = 'source-over';
        }); 
    }
    
    render() {
        this.drawBackground();
        this.drawCurve();
        
        // this.drawVerts();
        this.updateVerts();
        this.drawText();
        
        this.tick++;
        window.requestAnimationFrame(this.render);
    }
}

/*------------------------------*\
|* Line
\*------------------------------*/

class Line {
    constructor(vertices, p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        
        const vx = dx / (vertices - 1);
        const vy = dy / (vertices - 1);

        this.vertices = new Array(vertices)
            .fill(null)
            .map((p, i) => new Point(p1.x + vx * i, p1.y + vy * i));
    }  
}

/*------------------------------*\
|* Point
\*------------------------------*/

class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    
    get position() {
        return {
            x: this.x,
            y: this.y,
        };
    }
    
    moveTo(...args) {
        this.x = args[0];
        this.y = args[1];
    }
}

new Canvas();