



function init() {

	var scene = new THREE.Scene();

	var renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));

	renderer.setSize(window.innerWidth, window.innerHeight);

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	var camera = new THREE.PerspectiveCamera( 50 , window.innerWidth / window.innerHeight , 0.1 , 1000  );

	var gota = new THREE.Geometry(); 

	var numVertices = 30;
	

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
		wireframe:false
		}); 
	
	var gotaMesh = new THREE.Mesh(gota, gotaMaterial); 

	gotaMesh.rotation.x = THREE.Math.degToRad(-71);
	gotaMesh.rotation.y = THREE.Math.degToRad(0);
	gotaMesh.rotation.z = THREE.Math.degToRad (145);

	scene.add( gotaMesh );	

	var control = new function() {
		this.rotationX = 0.0;
		this.rotationY = 0.0;
		this.rotationZ = 0.0;
	}

	var mudarVertices  = {
  		numVertices: 30,
  		fixa: new THREE.Color( 1.0 , 1.0 , 1.0), 

  		 atualizar: function() {
  		
  		 	
	   		numVertices = mudarVertices.numVertices;

    		var gota = new THREE.Geometry(); 
	

			for (fi = 0 ; fi <= Math.PI ; fi+= (Math.PI)/numVertices) {
				for(omega = 0 ; omega <= 2*Math.PI ; omega+= (2*Math.PI)/numVertices){
					var x = 0.5*(1-Math.cos(fi))*Math.sin(fi)*Math.cos(omega);
					var y = 0.5*(1-Math.cos(fi))*Math.sin(fi)*Math.sin(omega);
					var z = Math.cos(fi);
					gota.vertices.push(new THREE.Vector3(x, y, z)); 
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
				wireframe:false,
				transparent: true 
				}); 
			
			scene.remove( gotaMesh );

			gotaMesh = new THREE.Mesh(gota, gotaMaterial); 
			
			datGUI.remove(wareframe);



			gotaMesh.rotation.x = THREE.Math.degToRad(-71);
			gotaMesh.rotation.y = THREE.Math.degToRad(0);
			gotaMesh.rotation.z = THREE.Math.degToRad (145);


			wareframe = datGUI.add(gotaMesh.material, 'wireframe').listen();
		
			scene.add( gotaMesh );	


  		},

  		corfixa: function() {
  				 		numVertices = mudarVertices.numVertices;

    		var gota = new THREE.Geometry(); 
	

			for (fi = 0 ; fi <= Math.PI ; fi+= (Math.PI)/numVertices) {
				for(omega = 0 ; omega <= 2*Math.PI ; omega+= (2*Math.PI)/numVertices){
					var x = 0.5*(1-Math.cos(fi))*Math.sin(fi)*Math.cos(omega);
					var y = 0.5*(1-Math.cos(fi))*Math.sin(fi)*Math.sin(omega);
					var z = Math.cos(fi);
					gota.vertices.push(new THREE.Vector3(x, y, z)); 
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
				wireframe:false,
				//map: texture, 
				transparent: true 
				}); 
			
			scene.remove( gotaMesh );

			gotaMesh = new THREE.Mesh(gota, gotaMaterial); 
			
			datGUI.remove(wareframe);



			gotaMesh.rotation.x = THREE.Math.degToRad(-71);
			gotaMesh.rotation.y = THREE.Math.degToRad(0);
			gotaMesh.rotation.z = THREE.Math.degToRad (145);


			wareframe = datGUI.add(gotaMesh.material, 'wireframe').listen();
		
			scene.add( gotaMesh );
  		},

  		 cartesiana: function() {
  		
  		 	
	   		numVertices = mudarVertices.numVertices;

    		var gota = new THREE.Geometry(); 
	

			for (fi = 0 ; fi <= Math.PI ; fi+= (Math.PI)/numVertices) {
				for(omega = 0 ; omega <= 2*Math.PI ; omega+= (2*Math.PI)/numVertices){
					var a = 0.5*(1-Math.cos(fi))*Math.sin(fi)*Math.cos(omega);
					var b = 0.5*(1-Math.cos(fi))*Math.sin(fi)*Math.sin(omega);
					var c = Math.cos(fi);
					gota.vertices.push(new THREE.Vector3(a, b, c)); 
				}
			}

			var countFaces=0;

			for (i = 0 ; i <= numVertices ; i++) {
				for(j = 0; j <= numVertices ; j++ ){


					gota.faces.push(new THREE.Face3(i*numVertices+j, (i+1)*numVertices+j, (i+1)*numVertices+j+1)); 

					if(gota.vertices[gota.faces[countFaces].a] != undefined && gota.vertices[gota.faces[countFaces].b] != undefined 
						&& gota.vertices[gota.faces[countFaces].c] != undefined){
								var x1 = gota.vertices[gota.faces[countFaces].a].x;
								var y1 = gota.vertices[gota.faces[countFaces].a].y;
								var z1 = gota.vertices[gota.faces[countFaces].a].z;
								var x2 = gota.vertices[gota.faces[countFaces].b].x;
								var y2 = gota.vertices[gota.faces[countFaces].b].y;
								var z2 = gota.vertices[gota.faces[countFaces].b].z;
								var x3 = gota.vertices[gota.faces[countFaces].c].x;
								var y3 = gota.vertices[gota.faces[countFaces].c].y;
								var z3 = gota.vertices[gota.faces[countFaces].c].z;

								gota.faces[countFaces].vertexColors[0] = new THREE.Color( x1, y1, z1); 
								gota.faces[countFaces].vertexColors[1] = new THREE.Color( x2, y2, z2); 
								gota.faces[countFaces].vertexColors[2] = new THREE.Color( x3, y3, z3);
							
						
					}


					countFaces++;
					
	
					gota.faces.push(new THREE.Face3(i*numVertices+j, (i+1)*numVertices+(j+1), i*numVertices+(j+1))); 

					
					if(gota.vertices[gota.faces[countFaces].a] != undefined && gota.vertices[gota.faces[countFaces].b] != undefined && 
						gota.vertices[gota.faces[countFaces].c] != undefined){

								var x1 = gota.vertices[gota.faces[countFaces].a].x;
								var y1 = gota.vertices[gota.faces[countFaces].a].y;
								var z1 = gota.vertices[gota.faces[countFaces].a].z;
								var x2 = gota.vertices[gota.faces[countFaces].b].x;
								var y2 = gota.vertices[gota.faces[countFaces].b].y;
								var z2 = gota.vertices[gota.faces[countFaces].b].z;
								var x3 = gota.vertices[gota.faces[countFaces].c].x;
								var y3 = gota.vertices[gota.faces[countFaces].c].y;
								var z3 = gota.vertices[gota.faces[countFaces].c].z;

								gota.faces[countFaces].vertexColors[0] = new THREE.Color( x1, y1, z1); 
								gota.faces[countFaces].vertexColors[1] = new THREE.Color( x2, y2, z2); 
								gota.faces[countFaces].vertexColors[2] = new THREE.Color( x3, y3, z3);
							
						
					}

					countFaces++;

				}
			}


			var gotaMaterial = new THREE.MeshBasicMaterial({ 
				color:0xffffff,
				vertexColors:THREE.VertexColors,
				side:THREE.DoubleSide,
				wireframe:false,
				transparent: true 
				}); 
			
			scene.remove( gotaMesh );

			gotaMesh = new THREE.Mesh(gota, gotaMaterial); 
			
			datGUI.remove(wareframe);



			gotaMesh.rotation.x = THREE.Math.degToRad(-71);
			gotaMesh.rotation.y = THREE.Math.degToRad(0);
			gotaMesh.rotation.z = THREE.Math.degToRad (145);


			wareframe = datGUI.add(gotaMesh.material, 'wireframe').listen();
		
			scene.add( gotaMesh );	


  		},

  		esferica: function() {
  		
  		 	
	   		numVertices = mudarVertices.numVertices;

    		var gota = new THREE.Geometry(); 
	

			for (fi = 0 ; fi <= Math.PI ; fi+= (Math.PI)/numVertices) {
				for(omega = 0 ; omega <= 2*Math.PI ; omega+= (2*Math.PI)/numVertices){
					var x = 0.5*(1-Math.cos(fi))*Math.sin(fi)*Math.cos(omega);
					var y = 0.5*(1-Math.cos(fi))*Math.sin(fi)*Math.sin(omega);
					var z = Math.cos(fi);
					gota.vertices.push(new THREE.Vector3(x, y, z)); 
				}
			}

			var countFaces=0;
			var fi = 0;
			var omega = 0;

			for (i = 0 ; i <= numVertices ; i++) {
				for(j = 0; j <= numVertices ; j++ ){

					var color = new THREE.Color(1.0, 1.0, 1.0);
					color.setHSL(1.0 - omega,0.7,0.5);

					gota.faces.push(new THREE.Face3(i*numVertices+j, (i+1)*numVertices+j, (i+1)*numVertices+j+1, (0,0,0), color)); 

					
					omega+=(2*Math.PI)/numVertices;

					color = new THREE.Color(1.0,1.0,1.0);
					color.setHSL(0.0 + Math.abs(fi),0.7,0.5);
				
					gota.faces.push(new THREE.Face3(i*numVertices+j, (i+1)*numVertices+(j+1), i*numVertices+(j+1), (0,0,0), color)); 


				
					fi+=(Math.PI)/numVertices;
				}


	
			}


			var gotaMaterial = new THREE.MeshBasicMaterial({ 
				color:'white',
				vertexColors:THREE.VertexColors,
				side:THREE.DoubleSide,
				wireframe:false,
				//map: texture, 
				transparent: true 
				}); 
			
			scene.remove( gotaMesh );

			gotaMesh = new THREE.Mesh(gota, gotaMaterial); 
			
			datGUI.remove(wareframe);



			gotaMesh.rotation.x = THREE.Math.degToRad(-71);
			gotaMesh.rotation.y = THREE.Math.degToRad(0);
			gotaMesh.rotation.z = THREE.Math.degToRad (145);


			wareframe = datGUI.add(gotaMesh.material, 'wireframe').listen();
		
			scene.add( gotaMesh );	


  		}
	}



	var datGUI = new dat.GUI();

	var x = datGUI.add(control, 'rotationX', 0, 1);
	var y = datGUI.add(control, 'rotationY', 0, 1);
	var z = datGUI.add(control, 'rotationZ', 0, 1);
	
	datGUI.add(mudarVertices,'numVertices',0).name('Poligonos').onFinishChange(mudarVertices.atualizar);
	datGUI.add(mudarVertices, 'corfixa').name('Cor Fixa').listen();
	datGUI.add(mudarVertices, 'cartesiana').name('Cor Cartesiana').listen();
	datGUI.add(mudarVertices, 'esferica').name('Cor Esferica').listen();
	var wareframe = datGUI.add(gotaMesh.material, 'wireframe').listen();


		

	camera.position.z = 3;

	var update = function ( ) {

		gotaMesh.rotation.x += control.rotationX;
		gotaMesh.rotation.y += control.rotationY;
		gotaMesh.rotation.z += control.rotationZ;
	};

	var render = function ( ) {
		renderer.render(scene, camera);
	}

	var loop = function ( ) {

		update( );

		requestAnimationFrame(loop);

		render( );
	};


	loop( );
};


