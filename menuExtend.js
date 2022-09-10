var menuPop = document.getElementById('menuPopup');
        var b = 1;
        function menuExtend() {
            if (b == 0) {
                menuPop.style.display = "block";
                b = 1;
            }
            else {
                menuPop.style.display = "none";
                b = 0
            }
        }
