/// <reference path="interface/surface.ts" />

module CaptionMaker {
	export class Font implements Surface {
		name: string;
		size: number;
		color: string;
		text: string;
		x: number;
		y: number;

		render( context: CanvasRenderingContext2D ){
			context.font = this.size + "px " + this.name;
			context.fillStyle = this.color;
			context.fillText( this.text, this.x, this.y );
		}
	}
}
