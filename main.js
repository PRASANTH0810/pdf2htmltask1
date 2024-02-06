 <script>
        // Function to add page numbers dynamically
        function addPageNumbers() {
            var sections = document.querySelectorAll('.section');
            var pageNumber = 1;
            sections.forEach(function(section) {
                var pageNumberElement = section.querySelector('.page-number');
                pageNumberElement.textContent = 'Page ' + pageNumber;
                pageNumber++;
            });
        }

        // Call the function when the document is loaded
        window.addEventListener('load', addPageNumbers);
    </script>