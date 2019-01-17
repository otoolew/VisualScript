var CaseNode = (function () {
    function addNote(note) {
        $notes.prepend(
            $("<a href='#'></a>")
                .addClass("note")
                .text(note)
        );
    }

})();
