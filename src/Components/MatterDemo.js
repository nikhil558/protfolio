import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import "matter-attractors";
import "matter-wrap";

const MatterDemo = () => {
  const canvasRef = useRef(null);

  let engine, runner, render;

  Matter.use("matter-attractors");
  Matter.use("matter-wrap");

  useEffect(() => {
    if (!canvasRef.current) return;

    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    // Create engine
    engine = Matter.Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engine.world.gravity.scale = 0.1;

    // Create renderer
    render = Matter.Render.create({
      element: canvasRef.current,
      engine,
      options: {
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "transparent",
      },
    });

    runner = Matter.Runner.create();

    const world = engine.world;
    world.gravity.scale = 0;

    const attractiveBody = Matter.Bodies.circle(
      dimensions.width / 2,
      dimensions.height / 2,
      Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
      {
        render: {
          fillStyle: `#000`,
          strokeStyle: `#000`,
          lineWidth: 0,
        },
        isStatic: true,
        plugin: {
          attractors: [
            (bodyA, bodyB) => ({
              x: (bodyA.position.x - bodyB.position.x) * 1e-6,
              y: (bodyA.position.y - bodyB.position.y) * 1e-6,
            }),
          ],
        },
      }
    );

    Matter.World.add(world, attractiveBody);

    for (let i = 0; i < 60; i++) {
      let x = Matter.Common.random(0, dimensions.width);
      let y = Matter.Common.random(0, dimensions.height);
      let s =
        Matter.Common.random() > 0.6
          ? Matter.Common.random(10, 80)
          : Matter.Common.random(4, 60);
      let polygonNumber = Matter.Common.random(3, 6);

      const body = Matter.Bodies.polygon(x, y, polygonNumber, s, {
        mass: s / 20,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.round(Math.random() * 360),
        render: {
          fillStyle: "#222222",
          strokeStyle: `#000000`,
          lineWidth: 2,
        },
      });
      Matter.World.add(world, body);

      let r = Matter.Common.random(0, 1);
      var circle = Matter.Bodies.circle(x, y, Matter.Common.random(2, 8), {
        mass: 0.1,
        friction: 0,
        frictionAir: 0.01,
        render: {
          fillStyle: r > 0.3 ? `#27292d` : `#444444`,
          strokeStyle: `#000000`,
          lineWidth: 2,
        },
      });
      Matter.World.add(world, circle);

      var circle2 = Matter.Bodies.circle(x, y, Matter.Common.random(2, 20), {
        mass: 6,
        friction: 0,
        frictionAir: 0,
        render: {
          fillStyle: r > 0.3 ? `#334443` : `#222222`,
          strokeStyle: `#111111`,
          lineWidth: 4,
        },
      });

      Matter.World.add(world, circle2);

      var circle3 = Matter.Bodies.circle(x, y, Matter.Common.random(2, 30), {
        mass: 0.2,
        friction: 0.6,
        frictionAir: 0.8,
        render: {
          fillStyle: `#191919`,
          strokeStyle: `#111111`,
          lineWidth: 3,
        },
      });

      Matter.World.add(world, circle3);
    }

    const mouse = Matter.Mouse.create(render.canvas);
    Matter.Events.on(engine, "afterUpdate", () => {
      if (!mouse.position.x) return;
      Matter.Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12,
      });
    });

    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    function debounce(func, wait, immediate) {
      var timeout;
      return function () {
        var context = this,
          args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", debounce(handleResize, 250));

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={canvasRef} className="" />;
};

export default MatterDemo;
