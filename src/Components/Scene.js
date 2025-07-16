import Matter from "matter-js";
import  {Fragment, useEffect, useRef} from "react";

const Scene = () => {
  const requestRef = useRef();
  const boxRef = useRef();
  const groundRef = useRef();
  const engineRef = useRef();

  const animate = () => {
    engineRef.current = Matter.Engine.create();
    const engine = engineRef.current;

    const box = {
      body: Matter.Bodies.rectangle(150, 0, 40, 40),
      elem: boxRef.current,
      render() {
        const {x, y} = this.body.position;
        this.elem.style.top = `${y - 20}px`;
        this.elem.style.left = `${x - 20}px`;
        this.elem.style.transform = `rotate(${this.body.angle}rad)`;
      },
    };
    const ground = Matter.Bodies.rectangle(
      200, // x
      200, // y
      400, // w
      120, // h
      {isStatic: true}
    );
    const mouseConstraint = Matter.MouseConstraint.create(
      engine,
      {element: document.body}
    );
    Matter.Composite.add(engine.world, [
      box.body,
      ground,
      mouseConstraint,
    ]);

    (function rerender() {
      box.render();
      Matter.Engine.update(engine);
      requestRef.current = requestAnimationFrame(rerender);
    })();
  };

  useEffect(() => {
    animate();
    return () => {
      cancelAnimationFrame(requestRef.current);
      Matter.Engine.clear(engineRef.current);
      // see https://github.com/liabru/matter-js/issues/564
      // for additional cleanup if using MJS renderer/runner
    };
  }, []);

  return (
    <Fragment>
      <div id="box" ref={boxRef}></div>
      <div id="ground" ref={groundRef}></div>
    </Fragment>
  );
};

export default Scene