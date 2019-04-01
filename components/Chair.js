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

		let back = document.createElement('a-box');
		back.setAttribute('position', "0.46 0.4 -0.4");
		back.setAttribute('rotation', "0 90 110");
		back.setAttribute('color', "#848484");
		back.setAttribute('depth', "1");
		back.setAttribute('width', "1");
		back.setAttribute('height', "0.1");

		let backPost1 = document.createElement('a-cylinder');
		backPost1.setAttribute('position', "0.9 0.28 -0.38");
		backPost1.setAttribute('rotation', "0 90 20");
		backPost1.setAttribute('color', "#a9a9a9");
		backPost1.setAttribute('radius', "0.04");
		backPost1.setAttribute('depth', "0.05");
		backPost1.setAttribute('width', "0.05");
		backPost1.setAttribute('height', "1.05");

		let backPost2 = document.createElement('a-cylinder');
		backPost2.setAttribute('position', "0.05 0.28 -0.38");
		backPost2.setAttribute('rotation', "0 90 20");
		backPost2.setAttribute('color', "#a9a9a9");
		backPost2.setAttribute('radius', "0.04");
		backPost2.setAttribute('depth', "0.05");
		backPost2.setAttribute('width', "0.05");
		backPost2.setAttribute('height', "1.05");

		let arm1 = document.createElement('a-cylinder');
		arm1.setAttribute('position', "1 0.09 -0.75");
		arm1.setAttribute('rotation', "90 0 0");
		arm1.setAttribute('color', "#a9a9a9");
		arm1.setAttribute('radius', "0.04");
		arm1.setAttribute('depth', "0.05");
		arm1.setAttribute('width', "0.05");
		arm1.setAttribute('height', "0.35");

		let arm2 = document.createElement('a-cylinder');
		arm2.setAttribute('position', "-0.05 0.09 -0.75");
		arm2.setAttribute('rotation', "90 0 0");
		arm2.setAttribute('color', "#a9a9a9");
		arm2.setAttribute('radius', "0.04");
		arm2.setAttribute('depth', "0.05");
		arm2.setAttribute('width', "0.05");
		arm2.setAttribute('height', "0.35");

		let backRail = document.createElement('a-cylinder');
		backRail.setAttribute('position', "0.48 -0.2 -0.55");
		backRail.setAttribute('rotation', "90 90 0");
		backRail.setAttribute('color', "#a9a9a9");
		backRail.setAttribute('radius', "0.04");
		backRail.setAttribute('depth', "0.05");
		backRail.setAttribute('width', "0.05");
		backRail.setAttribute('height', "1.05");

		let frontRail = document.createElement('a-cylinder');
		frontRail.setAttribute('position', "0.48 -0.2 -0.95");
		frontRail.setAttribute('rotation', "90 90 0");
		frontRail.setAttribute('color', "#a9a9a9");
		frontRail.setAttribute('radius', "0.04");
		frontRail.setAttribute('depth', "0.05");
		frontRail.setAttribute('width', "0.05");
		frontRail.setAttribute('height', "1.05");

		let frontLeg1 = document.createElement('a-cylinder');
		frontLeg1.setAttribute('position', "1 -0.5 -1");
		frontLeg1.setAttribute('rotation', "0 90 10");
		frontLeg1.setAttribute('color', "#a9a9a9");
		frontLeg1.setAttribute('radius', "0.04");
		frontLeg1.setAttribute('depth', "0.05");
		frontLeg1.setAttribute('width', "0.05");
		frontLeg1.setAttribute('height', "1.2");

		let backLeg1 = document.createElement('a-cylinder');
		backLeg1.setAttribute('position', "1 -0.5 -0.5");
		backLeg1.setAttribute('rotation', "0 90 350");
		backLeg1.setAttribute('color', "#a9a9a9");
		backLeg1.setAttribute('radius', "0.04");
		backLeg1.setAttribute('depth', "0.05");
		backLeg1.setAttribute('width', "0.05");
		backLeg1.setAttribute('height', "1.2");

		let frontLeg2 = document.createElement('a-cylinder');
		frontLeg2.setAttribute('position', "-0.05 -0.5 -1");
		frontLeg2.setAttribute('rotation', "0 90 10");
		frontLeg2.setAttribute('color', "#a9a9a9");
		frontLeg2.setAttribute('radius', "0.04");
		frontLeg2.setAttribute('depth', "0.05");
		frontLeg2.setAttribute('width', "0.05");
		frontLeg2.setAttribute('height', "1.2");

		let backLeg2 = document.createElement('a-cylinder');
		backLeg2.setAttribute('position', "-0.05 -0.5 -0.5");
		backLeg2.setAttribute('rotation', "0 90 350");
		backLeg2.setAttribute('color', "#a9a9a9");
		backLeg2.setAttribute('radius', "0.04");
		backLeg2.setAttribute('depth', "0.05");
		backLeg2.setAttribute('width', "0.05");
		backLeg2.setAttribute('height', "1.2");


	//
	//
	// <a-entity position="0.3 0.029 1.912">
	// 		<a-cylinder position="-0.05 -0.5 -1" rotation="0 90 10" radius="0.04" color="#a9a9a9" depth="0.05" width="0.05" height="1.2"></a-cylinder>
	// 		<a-cylinder position="-0.05 -0.5 -0.5" rotation="0 90 350" radius="0.04" color="#a9a9a9" depth="0.05" width="0.05" height="1.2"></a-cylinder>

	// 		</a-entity>
	//

		this.el.appendChild(seatPlate);
		this.el.appendChild(seatPad);
		this.el.appendChild(back);
		this.el.appendChild(backPost1);
		this.el.appendChild(backPost2);
		this.el.appendChild(arm1);
		this.el.appendChild(arm2);
		this.el.appendChild(backRail);
		this.el.appendChild(frontRail);
		this.el.appendChild(frontLeg1);
		this.el.appendChild(frontLeg2);
		this.el.appendChild(backLeg1);
		this.el.appendChild(backLeg2);
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