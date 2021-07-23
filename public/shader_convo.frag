
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
uniform vec2 u_textureSize;
uniform bool start;
uniform float symbol_from_story_0;
uniform float symbol_from_story_1;
uniform float symbol_from_story_2;
uniform float symbol_from_story_3;
uniform float symbol_from_story_4;
uniform float symbol_from_story_5;
uniform float symbol_from_story_6;
uniform float symbol_from_story_7;
uniform float symbol_from_story_8;
uniform float symbol_from_story_9;
uniform float symbol_from_story_10;
uniform float symbol_from_story_11;
uniform float symbol_from_story_12;
uniform float symbol_from_story_13;
uniform float symbol_from_story_14;
uniform float symbol_from_story_15;
uniform float symbol_from_story_16;
uniform float symbol_from_story_17;

varying vec2 v_texCoord;

void main() {
  vec2 uv = v_texCoord; // vTexCoord;
 // vec2 uv_s = vTexCoord;

  vec2 onePixel = vec2(1.0,1.0) / u_textureSize;

  // the texture is loaded upside down and backwards by default so lets flip it
  uv.y = (1.0 - uv.y)*0.5;
  //uv.y = (1.0 - uv.y);
  uv.x = uv.x;
  
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

  
  vec3 thresh = vec3(threshR,threshG,threshB);
  // render the output
  vec4 final_stage = vec4(thresh, 1);
  // Idea: Pass the source symbol into the shader as a list of 0's or 1's in the convolution kernel and only keep the ones 
  // because of multiplication through.
  vec4 alt_color = 
   ( texture2D(tex0,vec2(1.0-v_texCoord.x, 1.0-v_texCoord.y))*symbol_from_story_0 +
   texture2D(tex1,vec2(1.0-v_texCoord.x, 1.0-v_texCoord.y))*symbol_from_story_1 + 

   texture2D(tex0,v_texCoord + vec2(onePixel.x,0.0))*symbol_from_story_2 +
   texture2D(tex1,v_texCoord + vec2(onePixel.x,0.0))*symbol_from_story_3 +

   texture2D(tex0,v_texCoord + vec2(-onePixel.x,0.0))*symbol_from_story_4 + 
   texture2D(tex1,v_texCoord + vec2(-onePixel.x,0.0))*symbol_from_story_5 + 

   texture2D(tex0,v_texCoord + vec2(0.0,onePixel.y))*symbol_from_story_6 +
   texture2D(tex1,v_texCoord + vec2(0.0,onePixel.y))*symbol_from_story_7 +

   texture2D(tex0,v_texCoord + vec2(0.0,-onePixel.y))*symbol_from_story_8 +
   texture2D(tex1,v_texCoord + vec2(0.0,-onePixel.y))*symbol_from_story_9 +

   texture2D(tex0,v_texCoord + vec2(onePixel.x,onePixel.y))*symbol_from_story_10 +
   texture2D(tex1,v_texCoord + vec2(onePixel.x,onePixel.y))*symbol_from_story_11 +

   texture2D(tex0,v_texCoord + vec2(onePixel.x,-onePixel.y))*symbol_from_story_12 +
   texture2D(tex1,v_texCoord + vec2(onePixel.x,-onePixel.y))*symbol_from_story_13 +

   texture2D(tex0,v_texCoord + vec2(-onePixel.x,-onePixel.y))*symbol_from_story_14 +
   texture2D(tex1,v_texCoord + vec2(-onePixel.x,-onePixel.y))*symbol_from_story_15 +

   texture2D(tex0,v_texCoord + vec2(-onePixel.x,onePixel.y))*symbol_from_story_16 +
   texture2D(tex1,v_texCoord + vec2(-onePixel.x,onePixel.y))*symbol_from_story_17 
   ) / 18.0; 
  if (start) { final_stage = alt_color; }
  gl_FragColor = final_stage;  
  //gl_FragColor = tex_past;
}