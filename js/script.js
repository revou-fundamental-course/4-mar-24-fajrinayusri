var age = document.getElementById("age");
        var height = document.getElementById("height");
        var weight = document.getElementById("weight");
        var male = document.getElementById("male");
        var female = document.getElementById("female");
        var resultArea = document.querySelector(".comment");

        function calculate() {
            if (age.value == '' || height.value == '' || weight.value == '' || (male.checked == false && female.checked == false)) {
                alert("Data kamu belum lengkap nih");
            } else {
                countBmi();
            }
        }

        function countBmi() {
            var p = [age.value, height.value, weight.value];
            if (male.checked) {
                p.push("male");
            } else if (female.checked) {
                p.push("female");
            } console.log(p)

            var bmi = Number(p[2]) / (Number(p[1]) / 100 * Number(p[1]) / 100);
            var result = '';

            if (bmi < 18.5) {
                result = 'Underweight';
            } else if (18.5 <= bmi && bmi <= 24.9) {
                result = 'Healthy';
            } else if (25 <= bmi && bmi <= 29.9) {
                result = 'Overweight';
            } else if (30 <= bmi && bmi <= 34.9) {
                result = 'Obese';
            } else if (35 <= bmi) {
                result = 'Extremely Obese';
            } console.log(bmi)

            resultArea.style.display = "block";
            document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
            document.querySelector("#result").innerText = bmi.toFixed(2);
        }

        function textImt() {
            var bmi = Number(document.querySelector("#result").innerText);
            var result = '';

            if (bmi < 18.5) {
                result = 'Kamu termasuk dalam kategori kekurangan berat badan. Segera konsultasikan ke dokter mengenai pola makan gizi yang baik untuk meningkatkan kesehatan';
            } else if (18.5 <= bmi && bmi <= 24.9) {
                result = 'Kamu termasuk dalam kategori ideal. Tetap jaga pola makan dan kesehatanmu yaa';
            } else if (25 <= bmi && bmi <= 29.9) {
                result = 'Kamu termasuk dalam kategori overweight. Coba untuk lakukan pola hidup sehat dan olahraga teratur';
            } else if (30 <= bmi && bmi <= 34.9) {
                result = 'Kamu termasuk dalam kategori obesitas. Coba untuk lakukan pola hidup sehat dan olahraga teratur';
            } else if (35 <= bmi) {
                result = 'Kamu termasuk dalam kategori obesitas ekstrim. Segera konsultasikan ke dokter mengenai pola diet yang sehat untuk meningkatkan kesehatanmu';
            }

            document.querySelector(".keterangan").innerHTML = `<span id="keterangan">${result}</span>`;
        }