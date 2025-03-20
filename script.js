// Function to update the live preview
function updatePreview() {
const htmlCode = document.getElementById('htmlInput').value;
const previewFrame = document.getElementById('preview');
previewFrame.srcdoc = htmlCode; // Set the iframe's content
}

// Function to export the HTML code as a file
function exportHTML() {
const htmlCode = document.getElementById('htmlInput').value;

// Create a Blob object with the HTML code
const blob = new Blob([htmlCode], { type: 'text/html' });

// Create a temporary anchor element
const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = 'exported.html'; // Name of the exported file

// Trigger the download
link.click();

// Clean up the temporary URL
URL.revokeObjectURL(link.href);
}