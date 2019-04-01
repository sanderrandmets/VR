AFRAME.registerComponent('Chair', {
	schema: {
		padColor: {type: 'string', default: '#FA5858'}
	},
	init: function () {

			let seatPlate = document.createElement('a-box');
			seatPlate.setAttribute('position', "0.45 -0.1 -0.9");
			seatPlate.setAttribute('rotation', "0 0 0");
			seatPlate.setAttribute('color', "#848484");
			seatPlate.setAttribute('depth', "0.8");
			seatPlate.setAttribute('width', "1");
			seatPlate.setAttribute('height', "0.1");

			let seatPad = document.createElement('a-box');
			seatPad.setAttribute('position', "0.45 -0.03 -0.9");
			seatPad.setAttribute('rotation', "0 0 0");
			seatPad.setAttribute('color', this.data.padColor);
			seatPad.setAttribute('depth', "0.7");
			seatPad.setAttribute('width', "0.9");
			seatPad.setAttribute('height', "0.07");


	//
	//
	// <a-entity position="0.3 0.029 1.912">
	// 		<a-cylinder position="1 -0.5 -1" rotation="0 90 10" radius="0.04" color="#a9a9a9" depth="0.05" width="0.05" height="1.2"></a-cylinder>
	// 		<a-cylinder position="1 -0.5 -0.5" rotation="0 90 350" radius="0.04" color="#a9a9a9" depth="0.05" width="0.05" height="1.2"></a-cylinder>
	// 		<a-cylinder position="1 0.09 -0.75" rotation="90 0 0" radius="0.04" color="#a9a9a9" depth="0.05" width="0.05" height="0.35"></a-cylinder>
	// 		<a-cylinder position="-0.05 -0.5 -1" rotation="0 90 10" radius="0.04" color="#a9a9a9" depth="0.05" width="0.05" height="1.2"></a-cylinder>
	// 		<a-cylinder position="-0.05 -0.5 -0.5" rotation="0 90 350" radius="0.04" color="#a9a9a9" depth="0.05" width="0.05" height="1.2"></a-cylinder>
	// 		<a-cylinder position="-0.05 0.09 -0.75" rotation="90 0 0" radius="0.04" color="#a9a9a9" depth="0.05" width="0.05" height="0.35"></a-cylinder>
	// 		<a-cylinder position="0.48 -0.2 -0.55" rotation="90 90 0" radius="0.04" color="#a9a9a9" depth="0.05" width="0.05" height="1.05"></a-cylinder>
	// 		<a-cylinder position="0.48 -0.2 -0.95" rotation="90 90 0" radius="0.04" color="#a9a9a9" depth="0.05" width="0.05" height="1.05"></a-cylinder>
	// 		<a-cylinder position="0.05 0.28 -0.38" rotation="0 90 20" radius="0.04" color="#a9a9a9" depth="0.05" width="0.05" height="1.05"></a-cylinder>
	// 		<a-cylinder position="0.9 0.28 -0.38" rotation="0 90 20" radius="0.04" color="#a9a9a9" depth="0.05" width="0.05" height="1.05"></a-cylinder>
	// 		<a-box position="0.46 0.4 -0.4" rotation="0 90 110" color="#848484" depth="1" width="1" height="0.1"></a-box><!--seljatugi-->
	// 		</a-entity>
	//

		this.el.appendChild(seatPlate);
		this.el.appendChild(seatPad);
	}
});

AFRAME.registerPrimitive('a-chair', {
	defaultComponents: {
		Chair: {},
	},
	mappings: {
		padColor: 'a-chair.padColor'
	}
});