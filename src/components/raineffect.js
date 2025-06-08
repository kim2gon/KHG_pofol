import React, { useRef, useEffect } from "react";

function RainCanvas() {
  const canvasRef = useRef(null);
  const dropsRef = useRef([]);
  const animFrameId = useRef(null);

  let w = window.innerWidth;
  let h = window.innerHeight;
  const clearColor = "rgba(255, 255, 255, 0.1)";

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createDrop(x) {
    return {
      x,
      y: -random(0, h), // 시작 위치를 화면 위 음수 영역에서 랜덤하게 설정 (딜레이 효과)
      color: "rgba(200, 200, 200, 0.8)",
      vy: 3,
      size: 3,
      hit: random(h * 0.8, h * 0.9),
      init() {
        this.y = -random(0, h); // 초기화 시에도 랜덤 딜레이 위치 적용
        this.vy = 3;
        this.hit = random(h * 0.8, h * 1); // 떨어지는 위치
      },
      draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size * 5);
        this.update();
      },
      update() {
        this.y += this.vy;
        if (this.y > this.hit) {
          this.init();
        }
      },
    };
  }

  function setup(ctx) {
    dropsRef.current = [];

    const lines = document.querySelectorAll(".rain-line");
    if (!lines.length) {
      setTimeout(() => setup(ctx), 100);
      return;
    }

    lines.forEach((line) => {
      const rect = line.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      dropsRef.current.push(createDrop(x));
    });
  }

  function anim(ctx) {
    ctx.fillStyle = clearColor;
    ctx.fillRect(0, 0, w, h);
    for (let drop of dropsRef.current) {
      drop.draw(ctx);
    }
    animFrameId.current = requestAnimationFrame(() => anim(ctx));
  }

  function handleResize(ctx) {
    w = canvasRef.current.width = window.innerWidth;
    h = canvasRef.current.height = window.innerHeight;
    setup(ctx);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;

    setup(ctx);
    anim(ctx);

    window.addEventListener("resize", () => handleResize(ctx));

    return () => {
      window.removeEventListener("resize", () => handleResize(ctx));
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  return (
    <canvas
      id="canvas-club"
      ref={canvasRef}
      style={{ display: "block", position: "fixed", top: 0, left: 0 }}
    />
  );
}

export default RainCanvas;
