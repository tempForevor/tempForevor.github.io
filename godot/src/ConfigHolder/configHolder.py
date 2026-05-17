import logging

class Config:

    file_list : dict[str,str] = {}
    extensions : list[str] = []
    extensions_config : dict[str,dict[str,str]] = {}
    result_paths : dict[str,str] = {}
    addon_html_code : str = ""
    default_code : str = ""

    def __init__(self,configt:dict={}):
        try:
            self.file_list = configt["file_list"]
            #please see https://python-markdown.github.io/extensions/
            self.extensions = configt["extensions"]
            self.extensions_config = configt["extensions_config"]
            self.result_paths = configt["result_paths"]
            self.addon_html_code = configt["addon_html_code"]
            self.default_code = configt["default_code"]
        except BaseException as e:
            logging.warning("Initalize without default value.")
