/* $('.project-btn').on('click', function () {
    var btnId = this.dataset.target;

    var btns = $('.project-btn');

    var showing = $('.show');

    for (var i = 0; i < showing.length; i++) {
        if ('#' + showing[i].id !== btnId) {
            showing[i].classList.remove('show');
        }
    }

    for (var i = 0; i < btns.length; i++) {
        if (btns[i] !== this) {
            var classes = btns[i].classList;

            if (!classes.contains('collapse')) {
                btns[i].classList.add('collapse');
            }
        }
    }
}) */