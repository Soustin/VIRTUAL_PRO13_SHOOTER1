AFRAME.registerComponent("bullets", {
    init: function () {
        this.shootBullets();
    },
    shootBullets: function () {
        window.addEventListener("keydown", (e)=>{
            if(e.key === "z") {
                var bullet = document.createElement("a-entity");
                bullet.setAttribute("geometry", {
                    primitive: "sphere",
                    radius: 0.1,
                });
                bullet.setAttribute("material", "color", "black")
                var cam = document.querySelector("#camera");
                pos = cam.getAttribute("position");
                bullet.setAttribute("position", {
                    x: pos.x,
                    y: pos.y,
                    z: pos.z,
                });
                bullet.setAttribute("velocity", {x: 0, y: 0, z: -1});
                bullet.setAttribute("gltf-model", "#bowling-ball");
                bullet.setAttribute("scale", "0.01 0.01 0.01");
                bullet.setAttribute("rotation", "0 90 30");
                var scene = document.querySelector("#scene")
                scene.appendChild(bullet);
            }
        })
    },
})