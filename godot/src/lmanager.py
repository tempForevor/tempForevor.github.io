# --coding=utf-8--

import markdown
import json
import logging
import os

import ConfigHolder.configHolder as configlib

class Builder:

    cfg_path = "config.json"

    config : configlib.Config = configlib.Config
    MD : markdown.Markdown

    logger : logging.Logger = logging.getLogger(__name__,)

    @staticmethod 
    def init():

        ## Logger

        Builder.logger = logging.getLogger(__name__)

        log_formatter = logging.Formatter('[%(asctime)s](%(name)s) %(levelname)s : %(message)s')

        console_logger = logging.StreamHandler()
        console_logger.setLevel(logging.INFO)
        console_logger.setFormatter(log_formatter)

        Builder.logger.addHandler(console_logger)

        ## Config

        cfg_text = ""  
        with open(Builder.cfg_path,"r+") as file:
            cfg_text = file.read()
            #logging.warning("Loaded cfg file." + str(cfg_text))
        configt = json.loads(cfg_text)
        Builder.logger.info(configt)
        try:
            Builder.config = configlib.Config({
                "file_list" : configt["file_list"],
                #please see https://python-markdown.github.io/extensions/
                "extensions" : configt["extensions"],
                "extensions_config" : configt["extensions_config"],
                "result_paths" : configt["result_paths"],
                "addon_html_code" : configt["addon_html_code"],
                "default_code" : configt["default_code"]  
            })
        except BaseException as e:
            logging.error("Error,in loading config...")
            logging.error(e)
            exit()

        Builder.MD = markdown.Markdown(extensions=Builder.config.extensions,extension_configs=Builder.config.extensions_config,output_format='html',tab_length=4)


    @staticmethod
    def build():

        if not markdown:
            return

        # if not (config["file_list"] is dict):
        #     logging.warning("Config \'file_list\' must be a dictionary!")
        
        logging.warning(Builder.config.file_list)

        for i in Builder.config.file_list.keys():
            #try:
            file_path = Builder.config.file_list[i]
            result = Builder.config.result_paths[i]
            dir_path = os.path.dirname(result)
            os.makedirs(dir_path,exist_ok=True)
            with open(file_path,"r+",encoding="utf-8") as file:
                mdtext = file.read()
                with open(result,"w+",encoding="utf-8") as res_file:
                    res_file.write(Builder.config.default_code)
                    res_file.write("<body>\n<div class=\"body\">")
                    res_file.write(Builder.MD.convert(mdtext))
                    res_file.write("\n</div>\n</body>\n")
                    res_file.write(Builder.config.addon_html_code)
            logging.warning("Successfully write file "+str(result))
            #except BaseException as e:
            #    logging.error(e)
        logging.warning("Built successfully.")

if __name__ == '__main__':
    Builder.build()
        