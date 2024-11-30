function switchLang(lang) {
    if (lang === 'ar') {
        document.getElementById('arabic').style.display = 'block';
        document.getElementById('english').style.display = 'none';
        document.body.style.direction = 'rtl';
    } else {
        document.getElementById('arabic').style.display = 'none';
        document.getElementById('english').style.display = 'block';
        document.body.style.direction = 'ltr';
    }
}























/*

function switchLang(lang) {
    if (lang === 'ar') {
        document.getElementById('arabic').style.display = 'block';
        document.getElementById('english').style.display = 'none';
        document.body.style.direction = 'rtl';
    } else {
        document.getElementById('arabic').style.display = 'none';
        document.getElementById('english').style.display = 'block';
        document.body.style.direction = 'ltr';
    }
}

*/


