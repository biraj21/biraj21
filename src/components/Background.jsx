import { useEffect, useRef } from "react";

class Particle {
  constructor(radius, x, y, dx, dy, color) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update($canvas) {
    if (this.x < this.radius || this.x > $canvas.width - this.radius) {
      this.dx *= -1;
    }

    if (this.y < this.radius || this.y > $canvas.height - this.radius) {
      this.dy *= -1;
    }

    this.x += this.dx;
    this.y += this.dy;
  }
}

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) {
      throw new Error("Canvas not found");
    }

    const $canvas = canvasRef.current;
    $canvas.width = window.innerWidth * 2;
    $canvas.height = window.innerHeight * 2;

    const ctx = $canvas.getContext("2d");

    let particles = [];
    let reqId = null;

    init();

    window.addEventListener("resize", handleResize);

    function handleResize() {
      $canvas.width = window.innerWidth * 2;
      $canvas.height = window.innerHeight * 2;

      init();
    }

    function init() {
      let numParticles = Math.min(350, Math.round(($canvas.width * $canvas.height) / 10_000));
      particles = [];

      for (let i = 0; i < numParticles; ++i) {
        let r = Math.random() * 3 + 1;
        let x = Math.random() * ($canvas.width - r) + r;
        let y = Math.random() * ($canvas.height - r) + r;
        let dx = (Math.random() > 0.5 ? 1 : -1) * Math.random();
        let dy = (Math.random() > 0.5 ? 1 : -1) * Math.random();

        particles.push(new Particle(r, x, y, dx, dy, "#ddd"));
      }

      if (reqId != null) {
        cancelAnimationFrame(reqId);
      }

      animate();
    }

    function animate() {
      ctx.clearRect(0, 0, $canvas.width, $canvas.height);

      for (let p of particles) {
        p.draw(ctx);
        p.update($canvas);
      }

      connect();
      reqId = requestAnimationFrame(animate);
    }

    function connect() {
      for (let p1 of particles) {
        for (let p2 of particles) {
          let distance = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = "#505050";
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas className="fixed top-0 left-0 -z-10 w-screen h-screen bg-slate-950" ref={canvasRef}></canvas>;
}
