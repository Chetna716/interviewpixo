// src/modules/glsl/shader.ts
export const textVertexShader = `
  varying vec2 v_uv;
  void main() {
    v_uv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`

export const textFragmentShader = `
  uniform sampler2D u_textureEn;
  uniform sampler2D u_textureHi;
  uniform vec2 u_mouse;
  uniform float u_aspect;
  uniform bool u_enable;
  varying vec2 v_uv;

  void main() {
    vec2 aspect = vec2(u_aspect, 1.0);

    float radius = 0.19;
    float dist = distance(u_mouse * aspect, v_uv * aspect);
    float mask = 1.0 - smoothstep(radius, radius + 0.005, dist);

    vec4 englishTex = texture2D(u_textureEn, v_uv);
    vec4 hindiTex   = texture2D(u_textureHi, v_uv);

    // Default = English
    vec4 finalTex = englishTex;

    // Inside bubble = Hindi
    if (u_enable) {
      finalTex = mix(englishTex, hindiTex, mask);
    }

    gl_FragColor = finalTex;
  }
`
