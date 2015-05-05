/*Write a program to display a rotating cube inside a box with three light
sources. Each light source should cause the projection of the cube onto one of the
three visible faces of the box.*/
			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
         var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth/1.5, window.innerHeight/1.5 );
			document.body.appendChild( renderer.domElement );
         camera.position.set(0,6,1);
         
        	var material1 = new THREE.MeshLambertMaterial( {color: 0x888888} );
         var geometry = new THREE.BoxGeometry( 1, 1, 1, 1, 1, 1 );
         var box = new THREE.Mesh( geometry, material1 );
         box.castShadow = true;
         box.receiveShadow = true;
         scene.add( box );	
         
         
         box.position.y += 4;
         box.position.z -= 1;
        
         camera.lookAt(box.position);	
         
         var container = new THREE.BoxGeometry( 5, 15, 6);
         var containerMat = new THREE.MeshLambertMaterial( {color:0xffffff, side:THREE.BackSide } );
         var bigBox = new THREE.Mesh( container, containerMat );
         bigBox.receiveShadow = true;
        
         scene.add( bigBox );
         
        // bigBox.rotation.x += .5;
        // bigBox.rotation.y = .2;
         bigBox.position.y +=10;
         //bigBox.position.z +=1;
        /* var light = new THREE.PointLight( 0xccffff );
				
            light.position.y += 7;
            light.position.x += 4;
            light.position.z += 5;
				scene.add( light );
            
*/
         renderer.shadowMapEnabled = true;
         //hex, distance, intensity, angle, dropoff exponent
         var spotlight = new THREE.SpotLight(0xccffff, 10, 7, 5);
         spotlight.position.set(2,7,1);
         
       
         spotlight.shadowCameraVisible = true;
         spotlight.shadowDarkness = .3;
         //spotlight.intensity = 6;
         // must enable shadow casting ability for the light
         spotlight.castShadow = true;
         spotlight.shadowCameraNear = .5;
         spotlight.shadowCameraFar = 15;
         spotlight.shadowCameraFov = 30;
         scene.add(spotlight);
         spotlight.lookAt(box.position);
         
         var spotlight2 = new THREE.SpotLight(0xcc3333, 10, 12, 5);
         spotlight2.position.set(-4,6,0);
         
         spotlight2.shadowCameraVisible = true;
         spotlight2.shadowDarkness = .8;
         //spotlight2.intensity = 1;
         // must enable shadow casting ability for the light
         spotlight2.castShadow = true;
         spotlight2.shadowCameraNear = 1;
         spotlight2.shadowCameraFar = 20;
         spotlight2.shadowCameraFov = 30;
         scene.add(spotlight2);
         spotlight2.lookAt(box.position);
         
         var spotlight3 = new THREE.SpotLight(0x33cc33, 2, 4, 5, 0);
         spotlight3.position.set(3,2,3);
        
         //spotlight2.shadowCameraVisible = true;
         spotlight3.shadowDarkness = 1;
         //spotlight2.intensity = 1;
         // must enable shadow casting ability for the light
         spotlight3.castShadow = true;
        
         spotlight3.shadowCameraNear = 1;
         spotlight3.shadowCameraFar = 20;
         spotlight3.shadowCameraFov = 30;
         scene.add(spotlight3);
          spotlight3.lookAt(box.position);
         
         
			var render = function () {
				requestAnimationFrame( render );
				box.rotation.y += 0.01;
            box.rotation.z -= .001
				renderer.render(scene, camera);
			};

			render();