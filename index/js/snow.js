 let canvas =document.getElementById("mycanvas");
            let ctx=canvas.getContext('2d');
            let mouse={x:0};//鼠标位置
            let snowWeather=[];//建立雪花集合

            function snowFlake(x,y,dx,dy,radius,opacity,z) {
                this.x=x;
                this.y=y;
                this.z=z;
                this.dx=dx;
                this.dy=dy;
                this.radius=radius;
                this.draw=function () {
                    ctx.beginPath();
                    ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
                    ctx.fillStyle ="white";
                    ctx.globalAlpha=opacity;
                    ctx.fill();
                    ctx.closePath();
                }
                this.update =function () {
                    this.y+=this.dy;
                    this.draw();
                }

            }
            function create() {
                let randomZ=Math.random();
                //Z轴的随机坐标
                let randomOpacity=randomZ*2+0.95;
                //Z透明度
                let randomDy=randomZ*1.8+0.5;
                let randomRadius=Math.random()*2+0.2;
                //半径大的下落速度快,两个参数形成关联
                snowWeather.push(new snowFlake(Math.random()*document.body.clientWidth,-30,0,randomDy,randomRadius,randomOpacity,randomZ))
                //与Z轴关联的雪花集合
            }
            function animate() {
                requestAnimationFrame(animate);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                create();
                for (let i=0;i<snowWeather.length;i++) {
                    snowWeather[i].update();
                    if(snowWeather[i].y>150)
                    {
                        snowWeather.splice(i,1)
                    }
                }
            }
            animate();
