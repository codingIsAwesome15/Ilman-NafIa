var quran = document.getElementById("quran");
var arabic = document.getElementById("arabic");
var quranSections = function(){
    var section1 = document.createElement("button");
    section1.textContent = "Commentary of Quran";
    var section2 = document.createElement("button");
    section2.textContent = "Deep appreation of Quran";
    var section3 = document.createElement("button");
    section3.textContent = "Coherence of Quran";
    var section4 = document.createElement("button");
    section4.textContent = "Structure of Quran";
    var body = document.body;
    body.append(section1)
    body.append(section2)
    body.append(section3)
    body.append(section4)
    var clicked = 0;
    section1.addEventListener("click", function(){
        if(clicked === 0){
            var videodiv = document.createElement("div")
            body.append(videodiv)
            var video1 = document.createElement("video");
            video1.controls = true;
            video1.width = 300;
            var source1 = document.createElement("source")
            source1.src = "Commentary_on_Al-Fatiha.mp4"
            source1.type = "video/mp4"
            video1.append(source1)
            videodiv.append(video1)
            var video2 = document.createElement("video");
            video2.controls = true;
            video2.width = 300;
            var source2 = document.createElement("source")
            source2.src = "Dhul-Hijjah.mp4"
            source2.type = "video/mp4"
            video2.append(source2)
            videodiv.append(video2)
            clicked++;
        }
    })
};
quran.addEventListener("click", quranSections);
