from integratedManager import lmanager

lmanager.Builder.config.default_code += """
    <head>
    <title>How to create your game?</title>
    <link href="../../assets/style.css
    " rel="stylesheet">
    </head>
"""

lmanager.Builder.config.addon_html_code += """
    <footer>
    <hr>
    <p>注：本文引用<a href="https://prts.wiki/w/%E9%A6%96%E9%A1%B5">PRTS - 玩家共同构筑的明日方舟中文Wiki(prts.wiki)</a>的相关内容，本文所涉及的公司名称、商标、产品等均为其各自所有者的资产，本文内使用的原游戏图片、动画、音频、文本原文，仅用于更好地表现原游戏资料，其版权属于上海鹰角网络科技有限公司及其关联公司。除非另有声明，本文其他内容采用<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享署名-非商业性使用-相同方式共享授权 即CC BY-NC-SA 4.0协议</a>。</p>
    </footer>
"""

lmanager.Builder.build()