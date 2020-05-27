# -*- coding: utf-8 -*-
import scrapy
from scrapy.http import FormRequest


class RamaSpider(scrapy.Spider):
    name = 'rama'
    custom_settings = {
                        'FEED_FORMAT':'json',
                        'FEED_URI':'movements_by_process.json',
                        'FEED_EXPORT_ENCODING':'utf-8',
                        'USER_AGENT': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36'
                        }
    start_urls = ['https://consultaprocesos.ramajudicial.gov.co/Procesos/NumeroRadicacion']

    def parse(self, response):
        self.log(f'Obteniendo respuesta desde: {response.url}')
        formulario = {
                'g-captcha': response.xpath('//input[@id="g-captcha"]/@value').get(),
                'IdProceso': response.xpath('//input[@id="IdProceso"]/@value').get(),
                'TipoConsulta': response.xpath('//input[@id="TipoConsulta"]/@value').get(),
                'ListaProcesos.Paginacion.Pagina': response.xpath('//input[@id="ListaProcesos_Paginacion_Pagina"]/@value').get(),
                'ListaProcesos.Paginacion.CantidadPaginas': response.xpath('//input[@id="ListaProcesos_Paginacion_CantidadPaginas"]/@value').get(),
                'ListaProcesos.Paginacion.Paginas': response.xpath('//input[@id="ListaProcesos.Paginacion.Paginas"]/@value').get(),
                # 'NumeroRadicacion': response.xpath('//input[@id="NumeroRadicacion"]/@value').get(),
                'NumeroRadicacion': '05001310501020150127601',
                '__RequestVerificationToken': response.xpath('//input[@name="__RequestVerificationToken"]/@value').get()
            }
        headers = {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Transfer-Encoding': 'chunked',
          'Content-Type': 'text/html; charset=utf-8',
          'Expires': '-1',
          'Server': 'Kestrel',
          'X-Frame-Options': 'SAMEORIGIN'
        }

        firstReq = scrapy.FormRequest(url = 'https://consultaprocesos.ramajudicial.gov.co/Procesos/NumeroRadicacion', method='POST', formdata = formulario, headers=headers)
        secondReq = scrapy.FormRequest(url = 'https://consultaprocesos.ramajudicial.gov.co/Procesos/NumeroRadicacion', method='POST', formdata = formulario, headers=headers)
        self.log(f'Obteniendo segunda respuesta desde: {firstReq.url}')
