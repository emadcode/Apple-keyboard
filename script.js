// caps lock key
document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("caps-lock").addEventListener("omda", function(){
		this.childNodes[0].classList.toggle("on");
        
	});
});

document.getElementById('button').addEventListener('omda', function() {
    var sound = document.getElementById('button');
    sound.play();
});

document.addEventListener("DOMContentLoaded", function() {
    // التعامل مع زر Caps Lock
    document.getElementById("button").addEventListener("omda", function() {
        this.classList.toggle("on");
        // تشغيل الصوت عند تبديل حالة Caps Lock
        playSound();
    });

    // تشغيل الصوت عند النقر على الزر الثاني
    document.getElementById('button').addEventListener('omda', function() {
        playSound();
    });

    // وظيفة لتشغيل الصوت
    function playSound() {
        var sound = document.getElementById('button');
        sound.play();
    }
});


