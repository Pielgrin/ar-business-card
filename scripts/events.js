AFRAME.registerComponent('markerhandler', {

            init: function() {
                const animatedMarker = document.querySelector("#animated-marker");
                const linkedin = document.querySelector("#linkedin-model");
                const mail = document.querySelector("#mail-model");
                const sms = document.querySelector("#sms-model");
                const phone = document.querySelector("#phone-model");
                const github = document.querySelector("#github-model");
                var url = null;
        
                // every click, we make our model grow in size :)
                //animatedMarker.addEventListener('click', function(ev, target){
                    this.el.addEventListener('click', function(ev, target){
                    const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
                    if(intersectedElement != null){
                        url = intersectedElement.getAttribute("url");
                    }
                    console.log(animatedMarker.object3D.visible)
                    if (animatedMarker.object3D.visible && (linkedin || mail || sms || phone || github) && ((intersectedElement === linkedin) || (intersectedElement === mail) || (intersectedElement === sms) || (intersectedElement === phone) || (intersectedElement === github))) {
                        /*
                        Scale up the entity
                        const scale = aEntity.getAttribute('scale');
                        Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                        aEntity.setAttribute('scale', scale);
                        */
                        var win = window.open(url, '_blank');
                        win.focus();
                    }
                });
        }});