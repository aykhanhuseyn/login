function DOM () {

    this.getId = function(id) { return document.getElementById(id) }

    this.getValue = function(id) { return document.getElementById(id).value }

    this.showMessage = function(id, message) { return document.getElementById(id).innerHTML = message }

    this.clearMessages = function(id) { return showMessage(id, "") }

}