var iframe = document.getElementById('frameID'),
    iframeWin = iframe.contentWindow || iframe,
    iframeDoc = iframe.contentDocument || iframeWin.document;

window.hello = function () {
    alert('testing from owner!');
};

$(iframeDoc).ready(function (event) {
    iframeDoc.open();
    iframeDoc.write('CBlooket V1.02');
    iframeDoc.write('\<script>alert("testing from iframe!");\<\/script>');
    iframeDoc.write('\<script>parent.hello();\<\/script>');
    iframeDoc.close();
});
