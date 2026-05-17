import lmanager as lmanager

lmanager.Builder.init()
lmanager.Builder.config.extensions.append("markdown.extensions.extra")
lmanager.Builder.config.default_code += """
    <script>
        MathJax = {
            tex: {
                inlineMath: [['$', '$'], ['\\(', '\\)']]
            }
        };
    </script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
    </script>

"""
lmanager.Builder.config.default_code += """
    <script src="
    https://cdn.jsdelivr.net/npm/prismjs@1/prism.min.js
    "></script>
    <link href="
    https://cdn.jsdelivr.net/npm/prismjs@1/themes/prism.min.css
    " rel="stylesheet">
"""

if __name__ == '__main__':
    lmanager.Builder.build()