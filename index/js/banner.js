let init=()=>{
                layer[0].children[0].style='transition:.2s linear;object-fit: cover;transform:  translate(0px) ;opacity: 0;';
                layer[1].children[0].style='transition:.2s linear;object-fit: cover;transform:  translate(0px) ;opacity: 1;';
                layer[2].children[0].style='transition:.2s linear;object-fit: cover;transform:  translate(0px) ;opacity: 0;';
            };
            var banner = document.getElementById("banner1");
            let layer=document.querySelectorAll(".layer");
            let window_width = document.documentElement.clientWidth;
            let step = window_width/2.6;
            let x=0;
            let x_new=0;
            let x_offset=0;
            let data_images=[
                {scale:1,translate:0,filter:0,opacity:0},
                {scale:1,translate:0,filter:0,opacity:1},
                {scale:1,translate:0,filter:0,opacity:0},
            ];
            banner.ontouchstart = function(e){
                e.preventDefault();
                x=e.touches[0].clientX;
            }
            banner.ontouchmove = function(e){
                e.preventDefault();
                x_new =e.touches[0].clientX;
                x_offset=x-x_new;
                const element_data1=data_images[1];
                const element_data2=data_images[2];
                let opacity_new1=element_data1.opacity+(x_offset/step);
                let opacity_new2=element_data2.opacity+(x_offset/step);
                let translate_new=-x_offset / 2;
                layer[0].children[0].style='transform: translate('+translate_new+'px) ; opacity:1;';
                layer[1].children[0].style='transform: translate('+translate_new+'px) ; opacity:'+opacity_new1+';';
                layer[2].children[0].style='transform: translate('+translate_new+'px) ; opacity:'+opacity_new2+';';

            }
            banner.ontouchend= function() {
                init();
            }
            banner.onmouseover = function(e){
                x=e.clientX;
            }
            banner.onmousemove = function(e){
                x_new =e.clientX;
                x_offset=x_new-x;
                const element_data1=data_images[1];
                const element_data2=data_images[2];
                let opacity_new1=element_data1.opacity+(x_offset/step);
                let opacity_new2=element_data2.opacity+(x_offset/step);
                layer[0].children[0].style='filter: blur(0px);opacity:1;';
                layer[1].children[0].style='filter: blur(0px);opacity:'+opacity_new1+';';
                layer[2].children[0].style='filter: blur(0px);opacity:'+opacity_new2+';';
            }
            banner.onmouseout = function(e){
                init();
            }
