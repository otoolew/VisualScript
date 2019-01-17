function CaseDiagram() {
    this.case_diagram = '';
    this.case_nodes = [];
}


CaseDiagram.prototype.init = function (opts) {
    // cache references to the DOM elements we need to manage
    this.$case_diagram = $("<svg></svg>").addClass('caseDiagram');

    this.$case_nodes.prepend(
        $("<div></div>")
            .addClass("caseNode")
            .text("New Node")
    );
};

var vpCaseDiagram = new CaseDiagram();

$(document).ready(function () {
    vpCaseDiagram.init({
        case_nodes: "#caseNode"
    });
});

//    this.svg = '';
//this.svg.ns = '';
//this.case_id = '';
//this.case_nodes = [];