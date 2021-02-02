
// casey conchinha - @kcconch ( https://github.com/kcconch )
// louise lessel - @louiselessel ( https://github.com/louiselessel )
// more p5.js + shader examples: https://itp-xstory.github.io/p5js-shaders/

#ifdef GL_ES
precision mediump float;
#endif

// grab texcoords from vert shader
varying vec2 vTexCoord;

// our texture coming from p5
uniform sampler2D tex0;
uniform sampler2D tex1;
uniform sampler2D past;
uniform float scale;
//GLbitfield myColorsPopulationCode = 000000110011111100001011001110110000011100110111000001110010111100000111001111010000101100111110000001100011111100000111000111110000100100111111000010110001111100001011001111010000011100111110000010100011111100001011001101110000010100111111000001110011101100001011001011110000110100011111000011010010111100001101001101110000110100111011000011000011111100001101001111010000110100111110;

void main() {
  vec2 uv = vTexCoord;
  vec2 uv_s = vTexCoord;

 
  // the texture is loaded upside down and backwards by default so lets flip it
  uv.y = 1.0 - uv.y;
  uv.x = 1.0 - uv.x;
  
  uv_s.y = uv.y*scale;
  uv_s.x = (1.0 - uv.x);
  vec4 tex_screen = texture2D(tex1,uv_s);
  vec4 tex_past = texture2D(past,uv);
  vec4 tex = texture2D(tex0, uv);
  
  
  float gray = (tex.r + tex.g + tex.b) / 3.0;
  
  float res = 20.0;
  float scl = res / (10.0);
 
  float threshR = tex_past.r;
  if (tex.r > tex_past.r) { 
   threshR = tex.r;
    };
  float threshG = tex_past.g;
  if (tex.g > tex_past.g) { 
    threshG = tex.g;
  };
  float threshB = tex_past.b;
  if (tex.b > tex_past.b) { 
   threshB = tex.b;
    };

  //float threshR_s = tex.r*255 ;
  
  float threshG_s = (fract(floor(tex_screen.g*res)/scl)*scl) * gray ;
  float threshB_s = (fract(floor(tex_screen.b*res)/scl)*scl) * gray ;
  
  
  vec3 thresh = vec3(threshR,threshG,threshB);
  // render the output
  gl_FragColor = vec4(thresh, 1);
  //gl_FragColor = tex_past;
}