import * as THREE from 'three';

export class Drawer {
	public texture
	public aspect

	private _ctx
	private readonly _margin = 130

	constructor(private _text1: string, private _text2: string) {
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

		// Center the text horizontally and vertically
		ctx.fillText(this._text1, width / 2, height / 2)
		
		// Only draw text2 if it's not empty
		if (this._text2.trim() !== '') {
			const text2Metrics = ctx.measureText(this._text2)
			ctx.fillText(this._text2, width - text2Metrics.width - this._margin, height - (fontSize + this._margin))
		}

		// ctx.lineWidth = 3
		// ctx.strokeStyle = '#f00'
		// ctx.strokeRect(0, 0, width, height)
	}
}
