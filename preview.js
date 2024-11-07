function preview() {
    let html = document.getElementById("htmlcode").value;
    let preview = document.getElementById("realpreviewnovirus");

    output.contentDocument.body.innerHTML = html;
}