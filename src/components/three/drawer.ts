// src/components/drawer.ts
import * as THREE from 'three'

export class Drawer {
  public texture: THREE.CanvasTexture
  public aspect: number
  private _ctx: CanvasRenderingContext2D

  constructor(private _text: string) {
    const canvas = document.createElement('canvas')
    canvas.width = 1024
    canvas.height = canvas.width / 2.2
    this._ctx = canvas.getContext('2d')!
    this.aspect = canvas.width / canvas.height
    this.texture = new THREE.CanvasTexture(canvas)
  }

  draw = () => {
    const ctx = this._ctx
    const { width, height } = this._ctx.canvas

    ctx.clearRect(0, 0, width, height)

    const fontSize = 85
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.font = `bold ${fontSize}px 'Poppins'`
    ctx.fillStyle = '#fff'

    // Draw single text centered
    ctx.fillText(this._text, width / 2, height / 2)

    this.texture.needsUpdate = true
  }
}
