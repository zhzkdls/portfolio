function scrollAppear(){
            var introText = document.querySelector('.main-text2');
            var introPosition = introText.getBoundingClientRect().top;
            var screenPosition = window.innerHeight / 1.2;

            if(introPosition < screenPosition) {
                introText.classList.add('.main-text2-show');
            }
        }

        window.addEventListener('scroll',scrollAppear);