







// plans
        let ele = document.getElementById('Plans');

        ele.style.backgroundRepeat = "no-repeat";
        ele.style.backgroundSize = "cover";
        
        document.getElementById('box1').addEventListener('mouseenter', function () {
            document.getElementById('Plans').style.backgroundImage = "url('yoga.jpg')";
            ele.style.backgroundRepeat = "no-repeat";
        ele.style.backgroundSize = "cover";
        });

        document.getElementById('box2').addEventListener('mouseenter', function () {
            document.getElementById('Plans').style.backgroundImage = "url('Gym.jpg')";
            ele.style.backgroundRepeat = "no-repeat";
        ele.style.backgroundSize = "cover";
        });

        document.getElementById('box3').addEventListener('mouseenter', function () {
            document.getElementById('Plans').style.backgroundImage = "url('Zumba.jpg')";
            ele.style.backgroundRepeat = "no-repeat";
        ele.style.backgroundSize = "cover";
        });

        // Nutrition
        let element = document.getElementById('parent-section');

        element.style.backgroundRepeat = "no-repeat";
        element.style.backgroundSize = "cover";

        document.querySelector('.first-card').addEventListener('mouseenter', function () {
            document.getElementById('parent-section').style.backgroundImage = "url('diet.jpg')";
            element.style.backgroundRepeat = "no-repeat";
        element.style.backgroundSize = "cover";
        });
        document.querySelector('.first-card').addEventListener('mouseleave', function () {
        document.getElementById('parent-section').style.background = 'black';
        });

        document.querySelector('.second-card').addEventListener('mouseenter', function () {
            document.getElementById('parent-section').style.backgroundImage = "url('Protein.webp')";
            element.style.backgroundRepeat = "no-repeat";
        element.style.backgroundSize = "cover";
        });
        document.querySelector('.second-card').addEventListener('mouseleave', function () {
        document.getElementById('parent-section').style.background = 'black';
        });

        document.querySelector('.third-card').addEventListener('mouseenter', function () {
            document.getElementById('parent-section').style.backgroundImage = "url('Hydration.webp')";
            element.style.backgroundRepeat = "no-repeat";
            element.style.backgroundSize = "cover";
        });
        document.querySelector('.third-card').addEventListener('mouseleave', function () {
        document.getElementById('parent-section').style.background = 'black';
        });

        // Vm Button 
        let bool = true;
        function view() {
            var paragraph = document.querySelector(".aup");
            let button = document.getElementById("aub1");
            if (bool == true) {
                paragraph.innerHTML = "Welcome to FitVerse, where fitness meets lifestyle. Our mission is to empower you to lead a healthier, happier life through personalized fitness solutions that fit your unique goals. At FitVerse, we offer a wide range of services including personal training, group classes, nutrition counseling, and virtual programs, all designed to help you achieve long-term success. Founded on the principles of dedication, consistency, So unlock your true potential. <br><br> At FitVerse, we believe that fitness is not a destination but a lifelong journey. We provide tailored programs that match your individual needs. FitVerse offers everything you need to challenge yourself, stay motivated, and reach your full potential. Let's make fitness a lifestyle together!. Join us today and transform your life!"
                button.innerText = "View Less";
                bool = false;
                button.style.marginTop="150px";
            } else {
                paragraph.innerHTML="Welcome to FitVerse, where fitness meets lifestyle. Our mission is to empower you to lead a healthier, happier life through personalized fitness solutions that fit your unique goals. At FitVerse, we offer a wide range of services including personal training, group classes, nutrition counseling, and virtual programs, all designed to help you achieve long-term success. Founded on the principles of dedication, consistency, So unlock your true potential.<br>"
                button.innerText = "View More";
                bool=true;
                button.style.marginTop="0px";
            }
        };

        function popup(){
        alert("Your feedback recorded");
        };