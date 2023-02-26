let szam = 0;
$("#1").click(() => {
    szam = 1;
})
$("#2").click(() => {
    szam = 2;
})
$("#3").click(() => {
    szam = 3;
})
$("#4").click(() => {
    szam = 4;
})
$("#5").click(() => {
    szam = 5;
})
$("#6").click(() => {
    szam = 6;
})
$("#7").click(() => {
    szam = 7;
})
$("#8").click(() => {
    szam = 8;
})

function changeimage(filename) {
    let img = document.querySelector('#image1');
    img.setAttribute("src", filename);
}
$(".a").click(function() {
    $("h1").text("Cim1");
    $("p").text("leirás1");
})
$(".b").click(function() {
    $("h1").text("Cim2");
    $("p").text("leirás2");
})
$(".c").click(function() {
    $("h1").text("Cim3");
    $("p").text("leirás3");
})
$(".d").click(function() {
    $("h1").text("Cim4");
    $("p").text("leirás4");
})
$(".e").click(function() {
    $("h1").text("Cim5");
    $("p").text("leirás5");
})
$(".f").click(function() {
    $("h1").text("Cim6");
    $("p").text("leirás6");
})
$(".g").click(function() {
    $("h1").text("Cim7");
    $("p").text("leirás7");
})
$(".h").click(function() {
    $("h1").text("Cim8");
    $("p").text("leirás8");
})
$("#next").click(function() {
    if (szam < 8) {
        szam += 1;
        console.log(szam)
    }
    if (szam == 1) {
        $("#1").click()
        $("#1").css("border", "10px solid")
    }
    if (szam == 2) {
        $("#2").click()
        $("#2").css("border", "10px solid")
        $("#1").css("border", "5px solid")
    }
    if (szam == 3) {
        $("#3").click()
        $("#3").css("border", "10px solid")
        $("#2").css("border", "5px solid")
    }
    if (szam == 4) {
        $("#4").click()
        $("#4").css("border", "10px solid")
        $("#3").css("border", "5px solid")
    }
    if (szam == 5) {
        $("#5").click()
        $("#5").css("border", "10px solid")
        $("#4").css("border", "5px solid")
    }
    if (szam == 6) {
        $("#6").click()
        $("#6").css("border", "10px solid")
        $("#5").css("border", "5px solid")
    }
    if (szam == 7) {
        $("#7").click()
        $("#7").css("border", "10px solid")
        $("#6").css("border", "5px solid")
    }
    if (szam == 8) {
        $("#8").click()
        $("#8").css("border", "10px solid")
        $("#7").css("border", "5px solid")
    }
})
$("#back").click(function() {
    if (szam > 1) {
        szam -= 1;
        console.log(szam)
    }
    if (szam == 1) {
        $("#1").click()
        $("#1").css("border", "10px solid")
        $("#2").css("border", "5px solid")

    }
    if (szam == 2) {
        $("#2").click()
        $("#2").css("border", "10px solid")
        $("#3").css("border", "5px solid")
    }
    if (szam == 3) {
        $("#3").click()
        $("#3").css("border", "10px solid")
        $("#4").css("border", "5px solid")
    }
    if (szam == 4) {
        $("#4").click()
        $("#4").css("border", "10px solid")
        $("#5").css("border", "5px solid")
    }
    if (szam == 5) {
        $("#5").click()
        $("#5").css("border", "10px solid")
        $("#6").css("border", "5px solid")
    }
    if (szam == 6) {
        $("#6").click()
        $("#6").css("border", "10px solid")
        $("#7").css("border", "5px solid")
    }
    if (szam == 7) {
        $("#7").click()
        $("#7").css("border", "10px solid")
        $("#8").css("border", "5px solid")
    }
    if (szam == 8) {
        $("#8").click()
        $("#8").css("border", "10px solid")
    }
})