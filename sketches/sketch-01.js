import canvasSketch from 'canvas-sketch';

const settings = {
  dimensions: [ 600, 600 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.lineWidth = 8;

    const w = 60;
    const h = 60;
    const gap = 20;

    let x, y;
    
    function colorGenerator() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      console.log({r,g,b});

      return `rgb(${r}, ${g}, ${b})`;
    }
    
    for (let i = 0; i < 5; i++){
      for (let j = 0; j < 5; j++){
        x = 100 + (w + gap) * i;
        y = 100 + (h + gap) * j;
        context.strokeStyle = colorGenerator();
        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();
        
        if ( Math.random() > 0.5 ) {
          context.beginPath();
          context.rect(x + 8, y + 8, w - 16, h - 16);
          context.stroke();
          
        }
      }
       
    }
  };
};


canvasSketch(sketch, settings);
