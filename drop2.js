var mesh;
var meshInicial;
var renderer;
var scene;
var camera;


function init() {

	scene = new THREE.Scene();

	renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));

	renderer.setSize(window.innerWidth, window.innerHeight);

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	camera = new THREE.PerspectiveCamera( 50 , window.innerWidth / window.innerHeight , 0.1 , 1000  );
	//camera = new THREE.OrthographicCamera( -100.0, 100.0, 100.0, -100.0, -100.0, 100.0);

	var gota = new THREE.Geometry(); 

	var numVertices = 100;
	

	for (fi = 0 ; fi <= Math.PI ; fi+= (Math.PI)/numVertices) {
		for(omega = 0 ; omega <= 2*Math.PI ; omega+= (2*Math.PI)/numVertices){
			var x1 = 1 - Math.cos(fi);
			var x2 = Math.sin(fi);
			var x3 = Math.cos(omega);
			var y1 = Math.sin(omega);

			var x = 0.5*x1*x2*x3;
			var y = 0.5*x1*x2*y1;
			var z = Math.cos(fi);

			gota.vertices.push(new THREE.Vector3( x,  y, z)); 
		}
	}

	var countFaces=0;

	for (i = 0 ; i <= numVertices ; i++) {
		for(j = 0; j <= numVertices ; j++ ){

			gota.faces.push(new THREE.Face3(i*numVertices+j, (i+1)*numVertices+j, (i+1)*numVertices+j+1)); 

					gota.faces[countFaces].vertexColors[0] = new THREE.Color('skyblue'); 
					gota.faces[countFaces].vertexColors[1] = new THREE.Color('skyblue'); 
					gota.faces[countFaces].vertexColors[2] = new THREE.Color('skyblue'); 
					countFaces++;
				
					gota.faces.push(new THREE.Face3(i*numVertices+j, (i+1)*numVertices+(j+1), i*numVertices+(j+1))); 

					gota.faces[countFaces].vertexColors[0] = new THREE.Color('skyblue'); 
					gota.faces[countFaces].vertexColors[1] = new THREE.Color('skyblue'); 
					gota.faces[countFaces].vertexColors[2] = new THREE.Color('skyblue'); 
					countFaces++;

		}
	}

	var gotaMaterial = new THREE.MeshBasicMaterial({ 
		color:0xffffff,
		vertexColors:THREE.VertexColors,
		side:THREE.DoubleSide,
		wireframe:true
		}); 
	
	var mesh = new THREE.Mesh(gota, gotaMaterial); 

	mesh.rotation.x = THREE.Math.degToRad(-71);
	mesh.rotation.y = THREE.Math.degToRad(0);
	mesh.rotation.z = THREE.Math.degToRad (145);

	scene.add( mesh );	

	//meshInicial = mesh;


	var control = new function() {
		this.rotationX = 0;
		this.rotationY = 0;
		this.rotationZ = 0;
	}

	var mudarVertices  = {
  		numVertices: 30,
  		fixa: new THREE.Color( 1.0 , 1.0 , 1.0), 
  		taperX: 0,
  		taperY: 0,
  		taperZ: 0,
  		ax: 0,
  		bx: 0,
  		ay: 0,
  		by: 0,
  		az: 0,
  		bz: 0,
  		tX: 0,
  		tY: 0,
  		tZ: 0,


  		
  		taperingX: function() {

  			var s = new THREE.Matrix4();

  			/*s.set(1, 0, 0, 0,
					0, mudarVertices.taperX/5, 0, 0,
					0, 0,mudarVertices.taperX/5, 0,
					0, 0, 0, 1
  				);*/

  			//console.log(mesh.children[0]);

  			//var geo = mesh.children[0].geometry;

  			//var geo = new THREE.Geometry().fromBufferGeometry(mesh.geometry);

			for(i = 0; i < mesh.geometry.vertices.length; i++){
				var vetor = mesh.geometry.vertices[i];

				s.set(1, 0, 0, 0,
					0, vetor.x*mudarVertices.taperX*Math.cos(vetor.x), 0, 0,
					0, 0,vetor.x*mudarVertices.taperX*Math.cos(vetor.x), 0,
					0, 0, 0, 1
  				);



				mesh.geometry.vertices[i]  = 	new THREE.Vector3(vetor.x*s.elements[0] + vetor.y*s.elements[1] + vetor.z*s.elements[2] + 1*s.elements[3], 
											  vetor.x*s.elements[4] + vetor.y*s.elements[5] + vetor.z*s.elements[6] + 1*s.elements[7],
											  vetor.x*s.elements[8] + vetor.y*s.elements[9] + vetor.z*s.elements[10] + 1*s.elements[11] 
											  );

				//geo.vertices[i] = math.multiply(vetor,s);
			}

			mesh.geometry.verticesNeedUpdate = true;
			mesh.geometry.elementsNeedUpdate = true;
			//renderer.clear();


				//mesh.geometry = geo;



  		},

  		taperingY: function() {

  			var s = new THREE.Matrix4();

  			for(i = 0; i < mesh.geometry.vertices.length; i++){
				var vetor = mesh.geometry.vertices[i];

				s.set(vetor.y*Math.cos(vetor.y) + mudarVertices.taperY, 0, 0, 0,
					0, 1, 0, 0,
					0, 0,vetor.y*Math.cos(vetor.y) + mudarVertices.taperY, 0,
					0, 0, 0, 1
  				);



				mesh.geometry.vertices[i]  = 	new THREE.Vector3(vetor.x*s.elements[0] + vetor.y*s.elements[1] + vetor.z*s.elements[2] + 1*s.elements[3], 
											  vetor.x*s.elements[4] + vetor.y*s.elements[5] + vetor.z*s.elements[6] + 1*s.elements[7],
											  vetor.x*s.elements[8] + vetor.y*s.elements[9] + vetor.z*s.elements[10] + 1*s.elements[11] 
											  );

				//geo.vertices[i] = math.multiply(vetor,s);
			}

			mesh.geometry.verticesNeedUpdate = true;
			mesh.geometry.elementsNeedUpdate = true;


  		},


  		taperingZ: function() {

  			//mesh = meshInicial;

  			var s = new THREE.Matrix4();

  				for(i = 0; i < mesh.geometry.vertices.length; i++){
				var vetor = mesh.geometry.vertices[i];

				s.set(vetor.z*mudarVertices.taperZ*4, 0, 0, 0,
					0, vetor.z*mudarVertices.taperZ*4, 0, 0,
					0, 0,1, 0,
					0, 0, 0, 1
  				);



				mesh.geometry.vertices[i]  = 	new THREE.Vector3(vetor.x*s.elements[0] + vetor.y*s.elements[1] + vetor.z*s.elements[2] + 1*s.elements[3], 
											  vetor.x*s.elements[4] + vetor.y*s.elements[5] + vetor.z*s.elements[6] + 1*s.elements[7],
											  vetor.x*s.elements[8] + vetor.y*s.elements[9] + vetor.z*s.elements[10] + 1*s.elements[11] 
											  );

				//geo.vertices[i] = math.multiply(vetor,s);
			}

			mesh.geometry.verticesNeedUpdate = true;
			mesh.geometry.elementsNeedUpdate = true;
  		




  		}, 

  		shearingX: function(){

  			var s = new THREE.Matrix4();

  			for(i = 0; i < mesh.geometry.vertices.length; i++){
				var vetor = mesh.geometry.vertices[i];

				s.set(1, 0, 0, 0,
					mudarVertices.ax, 1, 0 , 0,
					mudarVertices.bx, 0,1, 0,
					0, 0, 0, 1
  				);



				mesh.geometry.vertices[i]  = 	new THREE.Vector3(vetor.x*s.elements[0] + vetor.y*s.elements[1] + vetor.z*s.elements[2] + 1*s.elements[3], 
											  vetor.x*s.elements[4] + vetor.y*s.elements[5] + vetor.z*s.elements[6] + 1*s.elements[7],
											  vetor.x*s.elements[8] + vetor.y*s.elements[9] + vetor.z*s.elements[10] + 1*s.elements[11] 
											  );

				//geo.vertices[i] = math.multiply(vetor,s);
			}

			mesh.geometry.verticesNeedUpdate = true;
			mesh.geometry.elementsNeedUpdate = true;
  		},

  		shearingY: function(){
  			var s = new THREE.Matrix4();

  			for(i = 0; i < mesh.geometry.vertices.length; i++){
				var vetor = mesh.geometry.vertices[i];

				s.set(1, mudarVertices.ay, 0, 0,
					0, 1, 0 , 0,
					0, mudarVertices.by,1, 0,
					0, 0, 0, 1
  				);



				mesh.geometry.vertices[i]  = 	new THREE.Vector3(vetor.x*s.elements[0] + vetor.y*s.elements[1] + vetor.z*s.elements[2] + 1*s.elements[3], 
											  vetor.x*s.elements[4] + vetor.y*s.elements[5] + vetor.z*s.elements[6] + 1*s.elements[7],
											  vetor.x*s.elements[8] + vetor.y*s.elements[9] + vetor.z*s.elements[10] + 1*s.elements[11] 
											  );

				//geo.vertices[i] = math.multiply(vetor,s);
			}

			mesh.geometry.verticesNeedUpdate = true;
			mesh.geometry.elementsNeedUpdate = true;
  		},

  		shearingZ: function(){

  			var s = new THREE.Matrix4();

  			for(i = 0; i < mesh.geometry.vertices.length; i++){
				var vetor = mesh.geometry.vertices[i];

				s.set(1, 0, mudarVertices.az, 0,
					0, 1,mudarVertices.bz, 0,
					0, 0,1, 0,
					0, 0, 0, 1
  				);



				mesh.geometry.vertices[i]  = 	new THREE.Vector3(vetor.x*s.elements[0] + vetor.y*s.elements[1] + vetor.z*s.elements[2] + 1*s.elements[3], 
											  vetor.x*s.elements[4] + vetor.y*s.elements[5] + vetor.z*s.elements[6] + 1*s.elements[7],
											  vetor.x*s.elements[8] + vetor.y*s.elements[9] + vetor.z*s.elements[10] + 1*s.elements[11] 
											  );

				//geo.vertices[i] = math.multiply(vetor,s);
			}

			mesh.geometry.verticesNeedUpdate = true;
			mesh.geometry.elementsNeedUpdate = true;

  		},
		
  		twistingX: function(){
  			var s = new THREE.Matrix4();
			
			for(i = 0; i < mesh.geometry.vertices.length; i++){
				var vetor = mesh.geometry.vertices[i];

				s.set(1, 0, 0, 0,
					0, Math.cos(vetor.x*mudarVertices.tX*5),-Math.sin(vetor.x*mudarVertices.tX*5), 0,
					0, Math.cos(vetor.x*mudarVertices.tX*5),Math.sin(vetor.x*mudarVertices.tX*5), 0,
					0, 0, 0, 1
  				);



				mesh.geometry.vertices[i]  = 	new THREE.Vector3(vetor.x*s.elements[0] + vetor.y*s.elements[1] + vetor.z*s.elements[2] + 1*s.elements[3], 
											  vetor.x*s.elements[4] + vetor.y*s.elements[5] + vetor.z*s.elements[6] + 1*s.elements[7],
											  vetor.x*s.elements[8] + vetor.y*s.elements[9] + vetor.z*s.elements[10] + 1*s.elements[11] 
											  );

				//geo.vertices[i] = math.multiply(vetor,s);
			}

			mesh.geometry.verticesNeedUpdate = true;
			mesh.geometry.elementsNeedUpdate = true;
  		},

  		twistingY: function(){
  			var s = new THREE.Matrix4();

  			for(i = 0; i < mesh.geometry.vertices.length; i++){
				var vetor = mesh.geometry.vertices[i];

				s.set(Math.cos(vetor.y*mudarVertices.tY*10), 0, -Math.sin(vetor.y*mudarVertices.tY*10), 0,
					0, 1,0, 0,
					Math.cos(vetor.y*mudarVertices.tY*10), 0,Math.sin(vetor.y*mudarVertices.tY*10), 0,
					0, 0, 0, 1
  				);



				mesh.geometry.vertices[i]  = 	new THREE.Vector3(vetor.x*s.elements[0] + vetor.y*s.elements[1] + vetor.z*s.elements[2] + 1*s.elements[3], 
											  vetor.x*s.elements[4] + vetor.y*s.elements[5] + vetor.z*s.elements[6] + 1*s.elements[7],
											  vetor.x*s.elements[8] + vetor.y*s.elements[9] + vetor.z*s.elements[10] + 1*s.elements[11] 
											  );

				//geo.vertices[i] = math.multiply(vetor,s);
			}

			mesh.geometry.verticesNeedUpdate = true;
  			mesh.geometry.elementsNeedUpdate = true;
  		},

  		twistingZ: function(){
  			var s = new THREE.Matrix4();

  			for(i = 0; i < mesh.geometry.vertices.length; i++){
				var vetor = mesh.geometry.vertices[i];

				s.set(Math.cos(vetor.z*mudarVertices.tZ*30), -Math.sin(vetor.z*mudarVertices.tZ*30), 0, 0,
					Math.cos(vetor.z*mudarVertices.tZ*30), Math.sin(vetor.z*mudarVertices.tZ*30),0, 0,
					0, 0,1, 0,
					0, 0, 0, 1
  				);



				mesh.geometry.vertices[i]  = 	new THREE.Vector3(vetor.x*s.elements[0] + vetor.y*s.elements[1] + vetor.z*s.elements[2] + 1*s.elements[3], 
											  vetor.x*s.elements[4] + vetor.y*s.elements[5] + vetor.z*s.elements[6] + 1*s.elements[7],
											  vetor.x*s.elements[8] + vetor.y*s.elements[9] + vetor.z*s.elements[10] + 1*s.elements[11] 
											  );

				//geo.vertices[i] = math.multiply(vetor,s);
			}

			mesh.geometry.verticesNeedUpdate = true;
  			mesh.geometry.elementsNeedUpdate = true;
  			
  		},

  		reiniciar: function(){
  			scene.remove(mesh);

  			gota = new THREE.Geometry(); 

				numVertices = 100;
				

				for (fi = 0 ; fi <= Math.PI ; fi+= (Math.PI)/numVertices) {
					for(omega = 0 ; omega <= 2*Math.PI ; omega+= (2*Math.PI)/numVertices){
						var x1 = 1 - Math.cos(fi);
						var x2 = Math.sin(fi);
						var x3 = Math.cos(omega);
						var y1 = Math.sin(omega);

						var x = 0.5*x1*x2*x3;
						var y = 0.5*x1*x2*y1;
						var z = Math.cos(fi);

						gota.vertices.push(new THREE.Vector3( x,  y, z)); 
					}
				}

				var countFaces=0;

				for (i = 0 ; i <= numVertices ; i++) {
					for(j = 0; j <= numVertices ; j++ ){

						gota.faces.push(new THREE.Face3(i*numVertices+j, (i+1)*numVertices+j, (i+1)*numVertices+j+1)); 

								gota.faces[countFaces].vertexColors[0] = new THREE.Color('skyblue'); 
								gota.faces[countFaces].vertexColors[1] = new THREE.Color('skyblue'); 
								gota.faces[countFaces].vertexColors[2] = new THREE.Color('skyblue'); 
								countFaces++;
							
								gota.faces.push(new THREE.Face3(i*numVertices+j, (i+1)*numVertices+(j+1), i*numVertices+(j+1))); 

								gota.faces[countFaces].vertexColors[0] = new THREE.Color('skyblue'); 
								gota.faces[countFaces].vertexColors[1] = new THREE.Color('skyblue'); 
								gota.faces[countFaces].vertexColors[2] = new THREE.Color('skyblue'); 
								countFaces++;

					}
				}

				var gotaMaterial = new THREE.MeshBasicMaterial({ 
					color:0xffffff,
					vertexColors:THREE.VertexColors,
					side:THREE.DoubleSide,
					wireframe:true
					}); 
				
				mesh = new THREE.Mesh(gota, gotaMaterial); 

				mesh.rotation.x = THREE.Math.degToRad(-71);
				mesh.rotation.y = THREE.Math.degToRad(0);
				mesh.rotation.z = THREE.Math.degToRad (145);

				scene.add(mesh);

  		}


	}




	var datGUI = new dat.GUI();

	var x = datGUI.add(control, 'rotationX', 0, 0.5).name('Rotacao X');
	var y = datGUI.add(control, 'rotationY', 0, 0.5).name('Rotacao Y');
	var z = datGUI.add(control, 'rotationZ', 0, 0.5).name('Rotacao Z');
	
	datGUI.add(mudarVertices,'taperX',0,15).name('Escala X').listen().onFinishChange(mudarVertices.taperingX);
	datGUI.add(mudarVertices,'taperY',0,3).name('Escala Y').listen().onFinishChange(mudarVertices.taperingY);
	datGUI.add(mudarVertices,'taperZ',0,2).name('Escala Z').listen().onFinishChange(mudarVertices.taperingZ)
	datGUI.add(mudarVertices,'ax',0,1).name('Shear Xa').listen().onFinishChange(mudarVertices.shearingX);
	datGUI.add(mudarVertices,'bx',0,1).name('Shear Xb').listen().onFinishChange(mudarVertices.shearingX);
	datGUI.add(mudarVertices,'ay',0,1).name('Shear Ya').listen().onFinishChange(mudarVertices.shearingY);
	datGUI.add(mudarVertices,'by',0,1).name('Shear Yb').listen().onFinishChange(mudarVertices.shearingY);
	datGUI.add(mudarVertices,'az',0,1).name('Shear Za').listen().onFinishChange(mudarVertices.shearingZ);
	datGUI.add(mudarVertices,'bz',0,1).name('Shear Zb').listen().onFinishChange(mudarVertices.shearingZ);
	datGUI.add(mudarVertices,'tX',0,1).name('Twist X').listen().onFinishChange(mudarVertices.twistingX);
	datGUI.add(mudarVertices,'tY',0,1).name('Twist Y').listen().onFinishChange(mudarVertices.twistingY);
	datGUI.add(mudarVertices,'tZ',0,1).name('Twist Z').listen().onFinishChange(mudarVertices.twistingZ);
	datGUI.add(mudarVertices, 'reiniciar').name('Reiniciar');

		

	camera.position.z = 3;


	var render = function ( ) {
		renderer.render(scene, camera);
	}

	var loop = function ( ) {

		requestAnimationFrame(loop);

		render( );

		mesh.rotation.x += control.rotationX;
		mesh.rotation.y += control.rotationY;
		mesh.rotation.z += control.rotationZ;
	};


	loop( );

};


