const handleDownload = (fileName) => {
    const pdfUrl =  `/assets/${fileName}`;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Robocor24_RuleBook.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  export default handleDownload;